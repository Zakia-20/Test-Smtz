# MY-REACT-APP-TEST

## Description
This project is a React application created with Vitejs. It utilizes the Rick & Morty API to fetch and display character data. The application includes features such as character listing, pagination, search, and filtering by status, species, and gender. Additionally, users can mark characters as favorites and view a dedicated page for favorite characters.

## Features
1. **Character Listing Page**
    - Displays a list of characters with relevant data and images.
    - Includes pagination for easy navigation through character lists.
    - Provides a search bar for finding characters by name.
    - Allows filtering characters by status, species, and gender.

2. **Character Details Page**
    - Displays detailed information about a selected character.

3. **Favorites Page**
    - Shows only the characters marked as favorites.
    - Allows users to remove characters from their favorites list.

## Specifications
- Users can mark characters as favorites, and these characters are highlighted with a relevant icon.
- Users can remove a character from the favorites list on the favorites page.
- The application is designed to be responsive, ensuring a good user experience on mobile, tablet, and desktop devices.

## Guide
- Click on the character card to display detailed information page.
- Use Reset button to reset filters
- Click on Favorites to check your favorite characters
- Click on the logo whenever you want to go back to home page


## Technologies
- React 18
- Vitejs
- Material UI (MUI)
- react router dom
- Rick & Morty API

## Project Structure
```plaintext
MY-REACT-APP-TEST
├── node_modules
├── public
├── src
│   ├── assets
│   │   ├── logo.png
│   │   └── react.svg
│   ├── components
│   │   ├── CharacterDetail.jsx
│   │   ├── Favoris.jsx
│   │   ├── Filters.jsx
│   │   ├── HomePage.jsx
│   ├── layout
│   │   └── Header.jsx
│   ├── pages
│   │   ├── FavorisPage.jsx
│   │   └── MainPage.jsx
│   ├── routes
│   │   └── AppRoutes.jsx
│   ├── theme
│   │   └── theme.js
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   ├── main.jsx
├── .eslintrc.cjs
├── .gitignore
├── index.html
├── package-lock.json
├── package.json
└── README.md


This is made with love , Enjoy !