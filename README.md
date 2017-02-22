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

Note that in order for bookmarks to work, like `http://localhost:8080/market/2`, the server needs to know that 
it should tell the browser to load `index.html`. See http://stackoverflow.com/questions/31415052/angular-2-0-router-not-working-on-reloading-the-browser
In nginx this can be achieved with:

    error_page 404 =200 /index.html

TODO didnt really work. so temporarily started using has again => see app.routings.ts at bottom or file.

# Running with Backend

- uses nginx
- see /etc/hosts => `tulliamaxantch`
- see /etc/nginx/vhosts/tullia.conf
- app runs at: http://tulliamaxantch/ which redirects to http://tulliamaxantch/ui/
- backend runs at http://tulliamaxantch/events and other URLs like that

# References

- https://angular.io/docs/ts/latest/guide/webpack.html

# Watch out

- Component CSS files are ONLY applied to their components. There is no point in putting styles in those, if you want to use those styles outside of the component. The styles cannot even be applied to the parent, e.g. a style which is supposed to be applied to "header" cannot be located inside the header CSS file.
- Routing - tricky bit related to caching views - see comments in `market.component.ts`.
- Force webpack re-compilation if IntelliJ is playing up: 

      find src/ -type f -exec touch {} +

# TODO
- karma: have npm task for build => run karma once. have another which continuously runs karma. document that karma and webpack dev are kept seperately.
- write protractor tests
- read rest of test chapter
- read rest of module chapter
- read rest of DI chapter
- change console.log into proper logging as well as pushing it to a server for prod monitoring
- fix styling of menu to be a proper span on the left
- what is the point of the "declarations" attribute on the @NgModule annotation in `app.module.ts` and why do we have to add so much to it?!
- forms
- use @Output and emit some events
- routerLinkActive => add some css styling to the active menu option. or see [class.selected]="hero === selectedHero". both came from https://angular.io/docs/ts/latest/tutorial/toh-pt5.html
- remove hero stuff BUT MAINTAIN service exploration stuff
- add `goBack(): void { window.history.back(); }`
- how can we add static AOT compiling to our build?
    - aot: https://angular.io/docs/ts/latest/cookbook/aot-compiler.html
- investigate child routes? see https://angular.io/docs/ts/latest/guide/router.html for examples
- i18n and plurals: https://angular.io/docs/ts/latest/cookbook/i18n.html

