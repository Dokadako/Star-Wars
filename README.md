# Star Wars Explorer

Welcome to the Star Wars Explorer! This web application allows you to explore characters, planets, and starships from the Star Wars universe using the Star Wars API (SWAPI).

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Development Process](#development-process)
- [Known Issues](#known-issues)
- [Contributing](#contributing)
- [License](#license)

## Features

- Browse a catalogue of planets, characters, and starships from the Star Wars universe.
- Search functionality to find specific entities by name.
- Dynamic data fetching using the SWAPI.

## Installation

### Prerequisites

Ensure you have the following installed on your local development environment:

- Node.js (v14 or above)
- npm (v6 or above)

### Setup

1. Clone the repository:

```bash
git clone https://github.com/yourusername/star-wars-explorer.git
bash
2. Navigate to the project directory:
cd star-wars-explorer

3. Install the dependencies:
npm install

4. Start the development server:
npm start

5. Open your web browser and go to:
http://localhost:3000

## Usage

Use the navigation links to browse through planets, characters, and starships.
Use the search bar to find specific entities by name.

## Development Process

### Project Design and Methodologies

The project was designed with a focus on simplicity and ease of use. Key design considerations included:

Responsive Design: Ensuring the application is usable on various devices.
Modular Code: Writing clean, modular code to facilitate maintenance and future enhancements.
API Integration: Leveraging the SWAPI to dynamically fetch and display data.

## Unique Approaches

Dynamic Data Fetching: Implemented real-time data fetching using JavaScript’s fetch API to ensure the latest information is displayed.
Search Functionality: Enhanced the search functionality to work across multiple categories (planets, characters, starships) by querying the SWAPI endpoints dynamically.

## Known Issues

Pagination: The current implementation does not handle pagination. This could lead to incomplete data being displayed if the number of entities exceeds the API's response limit.
Error Handling: Basic error handling is implemented, but there could be edge cases where the application does not gracefully handle API failures or network issues.
Contributing
Contributions are welcome! Please follow these steps to contribute:

Fork the repository.
Create a new branch (git checkout -b feature-branch).
Make your changes.
Commit your changes (git commit -m 'Add new feature').
Push to the branch (git push origin feature-branch).
Create a new Pull Request.
