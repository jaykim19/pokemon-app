This is Pokemon API App. 

I used the basic nuxtjs app structure (npx create-nuxt-app 'project name').
I ran the program with YARN.
I used only one branch which is main because I have only one contributor.

Remove unnecessary files and move to <main> tag to layout.tsx.
<main> tag wrap around <div> tag and children component, so the title should be fixed whatever children components comes up.

Created pokemon-grid.tsx to make a grid for the listing of the pokemons.
pokemon-grid.tsx contains <input> tag to type the text.

Created pokemon-card.tsx to show the pokemons by card types.
Created interface to transfer the data by props

Added Pokemon API calls in /api/pokemon-api.ts
Showed pokemon list in main page

Added a filter feature to find the related pokemon when typing
Created a pokemonname page to go to the detail page when pokemon is clicked

Added [pokemonName] folder to create the pokemon detail page to match up with the name that is clicked
Created the pokemon detail page to show the image when clicking the pokemon name
Added back button to go back to home page