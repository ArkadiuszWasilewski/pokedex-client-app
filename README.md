# Pokédex Web App

This is a simple Pokédex web application built with React and Vite. The app fetches data from an external API (PokeAPI) and allows users to search for Pokémon by name or ID. It includes user authentication via Firebase and is styled using Tailwind CSS. It also utilizes pre-built components from Flowbite (MIT License) for an enhanced UI.

## Features

- Search Functionality: Find Pokémon by name or ID.
- Pokémon Display: View Pokémon in a responsive grid format.
- Pokémon Details: Display detailed Pokémon information in a modal component.
- Responsive Design: Fully responsive layout with Tailwind CSS.

## Demo

Currently I'm hosting my own server on Raspberry Pi, so if demo is not available for you then sorry :(
http://pokedex-app.duckdns.org/

## Getting started

### Prerequisites

Make sure you have the following installed:

- Node.js (v14 or above)
- npm

1. Clone the repository

```
git clone https://github.com/ArkadiuszWasilewski/pokedex-client-app
cd pokedex-client-app
```

2. Install dependencies

```
npm install
```

3. Start the development server

```
npm run dev
```

4. Open your browser

```
Go to http://localhost:5173 to view the application.

```

## Environment Variables

Create a .env file in the root directory and add the following variables:
You can edit name of existing .env.example and add your firebase authorisation variables.

```
VITE_API_URL=http://localhost:5173
VITE_POKEMON_API_URL=https://pokeapi.co/api/v2/pokemon?offset=0&limit=1302
VITE_POKEMON_TYPE_API_URL=https://pokeapi.co/api/v2/type/
```

## Tech Stack

**Client:**

- React - A JavaScript library for building user interfaces.
- Vite - A fast frontend build tool and development server.
- Tailwind CSS - A utility-first CSS framework for rapidly building custom designs.
- Flowbite - Pre-built UI components based on Tailwind CSS.
- PokeAPI - An external API to fetch Pokémon data.

## Project Structure

```
pokedex-app/
│
├── public/                     # Public assets (e.g., index.html, images)
│
├── src/                        # Source files
│   ├── assets/                 # Static assets like images, fonts, etc.
│   ├── components/             # Reusable UI components
│   │   ├── PokemonCard.jsx     # Component for displaying a Pokémon card
│   │   ├── Modal.jsx           # Modal component for showing Pokémon details
│   │   └── Navbar.jsx          # Navigation bar component
│   │
│   ├── contexts/               # React Contexts (e.g., PokemonContext)
│   │   └── PokemonContext.jsx  # Context for pokemon state management
│   │
│   ├── hooks/                  # Custom React hooks
│   │   └── useFetchPokemon.jsx # Hook for fetching Pokémon data from the API
│   │
│   ├── pages/                  # Page components (views)
│   │   ├── Home.jsx            # Home page with Pokémon grid
│   │   └── PokemonDetail.jsx   # Detail page for individual Pokémon
│   │
│   ├── services/               # API Services
│   │   └── pokeapi.js          # Functions to interact with PokeAPI
│   │
│   ├── styles/                 # Global styles and Tailwind configurations
│   │   └── index.css           # Tailwind base styles and customizations
│   │
│   ├── App.jsx                 # Main App component
│   └── main.jsx                # Entry point for React
│
├── .env                        # Environment variables (e.g., PokeAPI API keys)
├── .gitignore                  # Git ignore file
├── package.json                # Project metadata and dependencies
└── README.md                   # Project documentation

```

## License

[MIT](https://choosealicense.com/licenses/mit/)

## Acknowledgements

- [PokeAPI](https://pokeapi.co/docs/v2) for providing Pokémon data.
- [Flowbite](https://flowbite.com/docs/getting-started/introduction/) for pre-built UI components.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
