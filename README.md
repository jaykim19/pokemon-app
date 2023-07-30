# This is Pokemon App.
# This app is to load Pokemon images from Pokemon API.

# o Used the basic nextjs app structure (npx create-next-app 'project name').
# o Used YARN package.
# o Used only one branch which is 'main' because I have only one contributor.

# o Removed unnecessary files and move to <main> tag to 'layout.tsx'.
# o The <main> tag wrappped around <div> tags and children component, so the header components should be fixed whatever children components comes up.
# o Created 'pokemon-grid.tsx' to make a grid for the listing of the pokemons.
# o 'pokemon-grid.tsx' contained <input> tag to type the text.
# o Created 'pokemon-card.tsx' to show the pokemon names by card types.
# o Created interface to transfer the data by props
# o Added Pokemon API calls in '/api/pokemon-api.ts'
# o Showed pokemon list in main page
# o Added a filter feature to find the related pokemon when typing
# o Added [pokemonName] folder to create the pokemon detail page to match up with the name that is clicked
# o Created the pokemon detail page to show the image when clicking the pokemon name
# o Added 'back' button to go back to home
# o Added 'No Result' message when no pokemons found
# o Deployed to Vercel (https://pokemon-app-tawny-zeta.vercel.app/)

# Command
# npx create-next-app pokemon-app
# yarn install / upgrade
# yarn dev (local)
# yarn run build (deployment)
# vercel --prod (production)