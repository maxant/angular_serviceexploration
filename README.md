# Running

## Dev

    npm run start

Then go to [http://localhost:8080](http://localhost:8080)

Every file change leads to a new build cycle and the browser refreshes automatically.

## Prod

    npm run build

    cd dist

    http-server

Then go to [http://localhost:8080](http://localhost:8080)

# Watch out

- Component CSS files are ONLY applied to their components. There is no point in putting styles in those, if you want to use those styles outside of the component. The styles cannot even be applied to the parent, e.g. a style which is supposed to be applied to "header" cannot be located inside the header CSS file.
- Routing - tricky bit related to caching views - see comments in `market.component.ts`.
-

# TODO

- add linting into webpack build
- fix TS debugging in in dev mode - works find in prod but not in dev... => problem seems to be that webpack is evaling the app code. there is some source mapping in there, but it doesnt seem to work properly.
- read rest of DI chapter
- play with different service types
- fix styling of menu to be a proper span on the left
- what is the point of the "declarations" attribute on the @NgModule annotation in `app.module.ts`
- forms
- ng-prime
- add lodash and then use it in market.component.ts
- use @Input and `<market [market]="selectedMarket"></market>` somewhere, but first need to add a selector back to the market component
- routerLinkActive => add some css styling to the active menu option. or see [class.selected]="hero === selectedHero". both came from https://angular.io/docs/ts/latest/tutorial/toh-pt5.html
- remove hero stuff BUT MAINTAIN service exploration stuff
- add some remote calls for initially getting the model. leave model access to be sync, since the model will always be in memory.
- add `goBack(): void { window.history.back(); }`
