This is Pokemon API App. I used the nuxtjs app structure (npx create-nuxt-app 'project name').

Remove unnecessary files and move to <main> tag to layout.tsx.
<main> tag wrap around <div> tag and children component, so the title should be fixed whatever children components comes up.

Created pokemon-grid.tsx to make a grid for the listing of the pokemons.
pokemon-grid.tsx contains <input> tag to type the text.

Created pokemon-card.tsx to show the pokemons by card types.
Created interface to transfer the data by props