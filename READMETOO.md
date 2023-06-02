# READ ME TOO

## This solidjs repo with typescript is built to demonstrate the following:
- using solidjs routing
- using minimalist pico css https://www.youtube.com/watch?v=JPzC_sbBfyY
- fetching a json file in the public folder
- pulling environmental information from .env files
- setting application state on startup
- toggling light/dark theme
- explain folder structure
- pulling from local (browser) store
- lazy loading pages

## Install
```bash
# install libraries
> npm install
```

## Build and Run
```bash
# build development
> npm start

## build production bits
> npm run build
```

## Stop
```bash
> q
```

## Environment Files
```cmd
.env
.env.production
```
The .env file is for the local environment while .env.production is for the production environment. Look at the Footer.tsx file to see how these might be consumed. Also click [here](https://vitejs.dev/guide/env-and-mode.html) to better understand their usage, 
  
