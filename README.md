# indeed.mjbondra.com

A simple Koa/AngularJS app for filtering Indeed resume data

## Dependencies

[Node.js](https://nodejs.org/)  
[MongoDB](http://www.mongodb.org/)  

### Dev Dependencies

[Ruby](https://www.ruby-lang.org)  
[Bundler](http://bundler.io/)

### Dependency notes

This app was built with [Koa](http://koajs.com/), which requires Node 0.11.9 or greater, and that Node be run with the `--harmony` flag.

## Getting Started

Before anything else, you must copy or rename ```/server/config/config.default.js``` to ```/server/config/config.js```. Open ```/server/config/config.js``` in your editor of choice, and replace default values where necessary.  

This app will listen to port 9998 by default. To specify a different port:

```
export PORT="9998"
```

Finally, while in the project root directory:  

```
./data/seed indeed_dev
npm install
npm start
```
