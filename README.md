# indeed.mjbondra.com

A sample Koa/AngularJS app for filtering indeed.com resume data

## Dependencies

### Dependencies

[Node.js](https://nodejs.org/)  
[MongoDB](http://www.mongodb.org/)  

### Dev Dependencies

[Ruby](https://www.ruby-lang.org)  
[Bundler](http://bundler.io/)

### Dependency notes

brewGet is built with [Koa](http://koajs.com/), which requires Node 0.11.9 or greater, and that Node be run with the `--harmony` flag.

## Getting Started

While in the project root directory:  

```
./data/seed indeed_dev
npm install
npm start
```

This app will listen to port 9998 by default. To specify a different port:

```
export PORT="9998"
npm start
```
