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

# References

- https://angular.io/docs/ts/latest/guide/webpack.html


# Watch out

- Component CSS files are ONLY applied to their components. There is no point in putting styles in those, if you want to use those styles outside of the component. The styles cannot even be applied to the parent, e.g. a style which is supposed to be applied to "header" cannot be located inside the header CSS file.
- Routing - tricky bit related to caching views - see comments in `market.component.ts`.
-

# TODO
- double check that resolver etc. is working properly and i havent got any dumb design in there.
- why karma tests dont work?
- need these in package.json?
    - "@angular/upgrade": "2.4.4",
    - "reflect-metadata": "^0.1.9",
- still an issue? latest webpack might have fixed this? - fix TS debugging in dev mode - works find in prod but not in dev... => problem seems to be that webpack is evaling the app code. there is some source mapping in there, but it doesnt seem to work properly.
- read rest of DI chapter
- fix styling of menu to be a proper span on the left
- what is the point of the "declarations" attribute on the @NgModule annotation in `app.module.ts` and why do we have to add so much to it?!
- forms
- ng-prime
- add lodash and then use it in market.component.ts
- use @Input and `<market [market]="selectedMarket"></market>` somewhere, but first need to add a selector back to the market component
- use @Output and emit some events
- routerLinkActive => add some css styling to the active menu option. or see [class.selected]="hero === selectedHero". both came from https://angular.io/docs/ts/latest/tutorial/toh-pt5.html
- remove hero stuff BUT MAINTAIN service exploration stuff
- add `goBack(): void { window.history.back(); }`
- how can we add static compiling to our build?
- investigate child routes? see https://angular.io/docs/ts/latest/guide/router.html for examples
- aot: https://angular.io/docs/ts/latest/cookbook/aot-compiler.html
- i18n: https://angular.io/docs/ts/latest/cookbook/i18n.html
- 