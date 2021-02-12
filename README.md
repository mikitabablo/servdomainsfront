# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## How to use with NGINX

### 1. Install NGINX

### 2. Create conf file in `/etc/nginx/sites-available/`

E.g. `/etc/nginx/sites-available/reacttest.local`

```
server {
  listen 80;
  server_name reacttest.local;
  server_name *.reacttest.local;
  root PATH_TO_PROJECT_FOLDER;
  index index.html;
  
  access_log /var/log/nginx/reacttest.local.access.log;
  error_log /var/log/nginx/reacttest.local.error.log;
  location / {
    try_files $uri /index.html =404;
  }
}
```

And create symlink to this file in  `/etc/nginx/sites-enabled/`

### Add your HOSTS into /etc/hosts file

```
127.0.0.1	reacttest.local
127.0.0.1	test.reacttest.local
127.0.0.1	sample.reacttest.local
127.0.0.1	uberland.reacttest.local
```

### Add this hosts in https://github.com/mikitabablo/sevdomains

Use `Requests.rest` file for this
```
Send Request
POST http://localhost:5000/hosts HTTP/1.1
content-type: application/json

{
    "name": "uberland"
}
```

### Restart NGINX

### Then build your app

`npm run build`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

