Deployed URL Vercel: https://movie-app-ij46-kvb0rfdcf-yogeshwarankys-projects.vercel.app/
Deployed URL Netlify: https://66c2318f1f6ae6c32a98d875--inquisitive-fenglisu-8b9f57.netlify.app/
NPM Version: 9.8.1
React Version: react@18.2.0
Node Version : v18.17.0
State Management Tool : easy-peasy


1.Error Component:
            Displays a 404 error message and a link to the login page.
2.Toast Component: 
            Shows a notification message when adding/removing a movie from favorites. The toast automatically disappears after 6 seconds.
3.Home Component:
            Manages the overall layout, including fetching movie data from the OMDb API.
            Uses state to handle movie lists, search input, favorites, and toast notifications.
            Displays a header, favorite movie list, and a body with search results.
4.HomeBody Component:
            Contains the main content area, including search functionality and movie display.
            Handles adding movies to the favorites list and triggers the toast notification.
            Includes some styling effects like zoom on hover for movie posters.
5.HomeBodySearchFilter Component:
            Handles the search input and validation (requires at least 3 characters).
            Provides a search button to fetch movies based on the input.
6.HomeFav Component:
            Displays the list of favorite movies and allows users to remove them from the list.
            Includes styling to make the favorites section visually distinct.
7.HomeHeader Component:
            Displays a search bar and user info in the header.
            Includes a logout button that clears the user state and navigates to the login page.
