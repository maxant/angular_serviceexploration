# Running

## Dev

    npm run start

Then go to [http://localhost:8080](http://localhost:8080)

## Prod

    npm run build

    cd dist

    http-server

# Watch out

- Component CSS files are ONLY applied to their components. There is no point in putting styles in those, if you want to use those styles outside of the component. The styles cannot even be applied to the parent, e.g. a style which is supposed to be applied to "header" cannot be located inside the header CSS file.

Then go to [http://localhost:8080](http://localhost:8080)

# TODO

- add linting into webpack build
- fix TS debugging in in dev mode - works find in prod but not in dev... => problem seems to be that webpack is evaling the app code. there is some source mapping in there, but it doesnt seem to work properly.
- read rest of DI chapter
- play with different service types
- fix styling of menu to be a proper span on the left
- what is the point of the "declarations" attribute on the @NgModule annotation in `app.module.ts`
- forms
-