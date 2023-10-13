This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

# Project Setup Guide
a. Install all dependencies: Make sure you have the necessary packages installed. Next.js, TypeScript, Tailwind CSS, Redux Toolkit, and Leaflet. Install them using:   
```
npm install next react react-dom typescript tailwindcss @reduxjs/toolkit react-redux leaflet
```

# Project Documentation

## Table of Contents

- [Introduction](#introduction)
- [Project Structure](#project-structure)
- [Technologies Used](#technologies-used)
- [Challenges Faced](#challenges-faced)
- [Future Improvements](#future-improvements)

## Introduction
 This project is a simple web application that allows users to search for locations and view the results on a map. The application is built using Next.js, TypeScript, Tailwind CSS, Redux Toolkit, and Leaflet. The application is deployed on Vercel and can be accessed [here](https://location-search.vercel.app/).
## Technologies Used
- [Next.js](https://nextjs.org/docs) - The React Framework for Production
- [TypeScript](https://www.typescriptlang.org/docs/) - TypeScript extends JavaScript by adding types.
- [Tailwind CSS](https://tailwindcss.com/docs) - A utility-first CSS framework for rapidly building custom designs.
- [Redux Toolkit](https://redux-toolkit.js.org/) - The official, opinionated, batteries-included toolset for efficient Redux development.
- [React Redux](https://react-redux.js.org/) - Official React bindings for Redux.
- [Leaflet](https://leafletjs.com/reference-1.7.1.html) - An open-source JavaScript library for mobile-friendly interactive maps.

## Project Structure
The project is structured as follows:

1. Autocomplete Search Field: 
- Utilizes the provided sample data from sample-data.js.
- Allows users to search for results based on the name value in an input field.
- Provides autocomplete suggestions as users type.

2. Results List: 
- Displays the results of the autocomplete search as a list of clickable items.
- Enables users to select/click on items from the list.

3. Locations/Markers on Map:
- When a user clicks on a search result, the corresponding location is displayed on the map.
- Utilizes markers to visually represent the locations on the map.

4. Details Modal:
 - When a user clicks on a map location/marker, a modal is triggered.
 - The modal contains additional information about the selected location.
### Folder Structure
```
├── components
│   ├── _map
|   |   ├── map.tsx
│   ├── _modal
|   |   ├── detailsmodal.tsx
│   ├── _results
|   |   ├── resultcard.tsx
|   |   ├── resultlist.tsx
│   ├── _searchbar
|   |   ├── autocompleteSearchbar.tsx
│  
├── redux
│   ├── store.ts
│   ├── provider.tsx
│   ├── reducers.ts
│   ├── types.ts
│   ├── autocomplete-slice.ts
├── const
│   ├── sample-data.js
├── public
│   ├── icon-pin.svg
│   ├── next.svg
│   ├── pin.png
│   ├── icon-search.svg

```
## Challenges Faced
- The biggest chanllenge I faced was getting the markers to show up on the map. I had to do a lot of research and read through the documentation to figure out how to create custom marker. I also had to figure out how to get the markers to show up on the map when a user clicks on a search result. I was able to figure it out by using the Leaflet API and the React-Leaflet library.


## Future Improvements
- Search results should be sorted by distance from the user's current location.
- The map should be centered on the user's current location.
- Search history should be saved and displayed to the user.
- The user should be able to save locations to a favorites list.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
