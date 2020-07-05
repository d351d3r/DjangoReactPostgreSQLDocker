# React + Django + PostgreSQL + Docker Starter Kit

## Development Setup (Docker)

Requirements:

- Docker
- Docker Compose
- NodeJS and NPM

```bash
$ cp .env .env.dev # <- Update values as needed, but should be good as is
$ npm install --prefix ./web/frontend/
$ docker-compose up -d --build
$ docker-compose exec web npm start --prefix ./frontend/
Compiled successfully!

You can now view frontend in the browser.

  Local:            http://localhost:3000
  On Your Network:  http://172.19.0.3:3000

Note that the development build is not optimized.
To create a production build, use yarn build.
```

Hot reload should be working upon saving your JavaScript files.
