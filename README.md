# Running

## Dev

    npm run start

Then go to [http://localhost:8080](http://localhost:8080)

## Prod

    npm run build

    cd dist

    http-server


Then go to [http://localhost:8080](http://localhost:8080)

# TODO

- add linting into webpack build
- fix TS debugging in in dev mode - works find in prod but not in dev... => problem seems to be that webpack is evaling the app code. there is some source mapping in there, but it doesnt seem to work properly.
- read rest of DI chapter
- play with different service types
- fix styling of menu to be a proper span on the left
-
