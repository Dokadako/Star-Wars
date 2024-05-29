document.addEventListener('DOMContentLoaded', function() {
  const searchBar = document.getElementById('searchBar');
  const content = document.getElementById('content');
  const planetsLink = document.getElementById('planets-link');
  const peopleLink = document.getElementById('people-link');
  const starshipsLink = document.getElementById('starships-link');
  let currentCategory = 'planets';

  // Функция получения данных с API
  async function fetchData(endpoint) {
    const response = await fetch(`https://swapi.dev/api/${endpoint}/`);
    const data = await response.json();
    return data.results;
  }

  // Функция отображения данных
  function displayData(data) {
    content.innerHTML = '';
    data.forEach(item => {
      const card = document.createElement('div');
      card.classList.add('card');
      card.innerHTML = `
                <h2>${item.name}</h2>
                <p>${item.description || ''}</p>
            `;
      content.appendChild(card);
    });
  }

  // Функция загрузки и отображения данных в зависимости от категории
  async function loadData(category) {
    const data = await fetchData(category);
    displayData(data.map(item => ({
      name: item.name,
      description: getCategoryDescription(category, item)
    })));
  }

  // Функция получения описания для каждой категории
  function getCategoryDescription(category, item) {
    switch (category) {
      case 'planets':
        return `Climate: ${item.climate}, Terrain: ${item.terrain}`;
      case 'people':
        return `Height: ${item.height}, Mass: ${item.mass}, Gender: ${item.gender}`;
      case 'starships':
        return `Model: ${item.model}, Manufacturer: ${item.manufacturer}`;
      default:
        return '';
    }
  }

  // Реализация функции поиска
  searchBar.addEventListener('input', async (event) => {
    const query = event.target.value.toLowerCase();
    const data = await fetchData(currentCategory);
    const filtered = data.filter(item => item.name.toLowerCase().includes(query));
    displayData(filtered.map(item => ({
      name: item.name,
      description: getCategoryDescription(currentCategory, item)
    })));
  });

  // Добавление событий для навигационных ссылок
  planetsLink.addEventListener('click', (event) => {
    event.preventDefault();
    currentCategory = 'planets';
    loadData(currentCategory);
  });

  peopleLink.addEventListener('click', (event) => {
    event.preventDefault();
    currentCategory = 'people';
    loadData(currentCategory);
  });

  starshipsLink.addEventListener('click', (event) => {
    event.preventDefault();
    currentCategory = 'starships';
    loadData(currentCategory);
  });

  // Инициализация с загрузкой данных для планет
  loadData(currentCategory);
});
