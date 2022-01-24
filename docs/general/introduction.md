# Overview of `empire-state-of-wallet`

The [`README.md`](https://github.com/markfoster314/neo-tax-interview#features) gives you adequate information on how to clone boilerplate files, install dependencies and launch the example app.

Once you've done that, this document is intended to give you a taste of how `empire-state-of-wallet` works. It still assumes basic knowledge of React and Redux. **If you're completely new to React, please refer to https://github.com/petehunt/react-howto instead!**

This is a production-ready application, and as such optimized for browsers, not for beginners. It includes tools to help manage performance, asynchrony, styling, everything we need to build a _real_ application. Before you dive into the source code,
I'm gonna go through a checklist of the technologies you should be familiar with

## Tech Stack

Here's a curated list of packages used in this project. Of course, the best way to see a complete list of the dependencies is to check [package.json](https://github.com/markfoster314/neo-tax-interview/blob/master/package.json).

### Core

- [React](https://facebook.github.io/react/)
- [Redux](http://redux.js.org/)
- [Styled Components](https://github.com/styled-components/styled-components)
- [Next.js](https://nextjs.org/docs/getting-started)
- [Nest.js](https://nestjs.com/)

### Unit Testing

- [Jest](http://facebook.github.io/jest/)

### Linting

- [ESLint](http://eslint.org/)

## Project Structure

## `components/`, `containers/`

I went with the [container/component architecture](https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0#.4rmjqneiw) for this project.<br />`containers/` contain React components which are connected to the redux store.<br />`components/` contain dumb React components which depend on containers for data.<br /> **Container components care about how things work, while components care about how things look.**

A lot of applications will treat single pages (e.g. the LoginPage, the HomePage, etc.) as containers and their small parts (e.g. the Login form, the Navigation bar) as components. There are no rigid rules.<br />**Bend the architecture to the needs of the app, nothing is set in stone!**

## `pages/`

While pages would be considered containers in most cases for most React applications, a Next.js application is a little different. Next.js has a file-system based router built on the concept of pages. When a file is added to the `pages` directory, it's automatically available as a route. The files inside the `pages` directory can be used to define most common patterns.

### Index Routes

The router will automatically route files named `index` to the root of the directory.

```sh
  pages/index.js → /
  pages/blog/index.js → /blog
```

### Nested routes

The router supports nested files. If you create a nested folder structure, files will automatically be routed in the same way still.

```sh
  pages/blog/first-post.js → /blog/first-post
  pages/dashboard/settings/username.js → /dashboard/settings/username
```

### Dynamic route segments

To match a dynamic segment, you can use the bracket syntax. This allows you to match named parameters.

```sh
  pages/blog/[slug].js → /blog/:slug (/blog/hello-world)
  pages/[username]/settings.js → /:username/settings (/foo/settings)
  pages/post/[...all].js → /post/* (/post/2020/id/title)
```

Check out the [Dynamic Routes Documentation](https://nextjs.org/docs/routing/dynamic-routes) for more information on how they work.

## `pages/api/`

With Next.js, we can deploy Serverless Functions, which are pieces of code written with backend languages that take an HTTP request and provide a response. To deploy Serverless Functions without any additional configuration, we can put files with extensions matching supported languages and exported functions in the `/pages/api` directory of the project's root.

### Example Serverless Function

```sh
  // pages/api/index.js

  export default function handler(req, res) {
    res.status(200).json({
      body: req.body,
      query: req.query,
      cookies: req.cookies,
    });
  }
```

The above example echoes the body, path query, and cookies, passed with the request object, as a JSON object using helper methods provided through the Request and Response.

## `backend/`

This directory contains the backend code for our application. For our backend framework I went with Nest.js, an open-source, extensible, versatile, progressive Node.js framework for creating compelling and demanding backend systems. It is also currently the fastest-growing Node.js framework in TypeScript.

### Building Blocks of Nest.js

Modules: used to organize the code and split features into logical reusable units. Grouped TypeScript files are decorated with “@Module” decorator which provides metadata that Nest makes use of to organize the application structure.

Providers: also called services, which are designed to abstract any form of complexity and logic. Providers can be created and injected into controllers or other providers.

Controllers: responsible for handling incoming requests and returning appropriate responses to the client-side of the application (for example call to the API).

The backend for this application is incredibly small. However, the primary purpose of this application is to provide a robust and scalable infrastructure for large scale projects. It's overkill for the example app, but not for the real world.

## `redux/`

I went with redux for our state management for this application, as it is extremely flexible, popular and debuggable, with The Redux DevTools making it easy to trace when, where, why, and how the application's state changed, lets you log changes, use "time-travel debugging", and even send complete error reports to a server. This directory contains all of the logic for our redux store.

## Our Application: Behind the scenes

This application's building blocks interoperate to produce a seamless application. Let's join these pieces together.

### Workflow

The application I developed is a simple service which shows a list of a user's transactions for the month of January gleaned from a public API, determines how much he spent on Bezos-related companies, and displays this information. Let's go over how this happens.

#### `<Home />`

Spin up the backend and run `npm run start:dev` to launch the application. If you start browsing at [https://localhost:3000](https://localhost:3000), by default you will be navigated to the home page. Here, notice that route is `"/"`, so the [`<HomePage />`](https://github.com/markfoster314/neo-tax-interview/blob/master/pages/index.js) container will be mounted. It is responsible for rendering a list of transactions and two transaction reports.

- `mapDispatchToProps()`: Generally, we provide outgoing action creators (functions that create [action](http://redux.js.org/docs/basics/Actions.html) objects) to the react component through this method. Once the page loads, the state will be updated by dispatching an `initTransactions` action to the store. Following this initialization, every ten seconds we will dispatch a `pollTransactions` action to check for updates to our array of transactions.

- `mapStateToProps()`: Generally, we provide incoming state from the Redux store to the react component through this method. Notice that we do not provide the entire state to the component, simply because we don't want the react component to have access to irrelevant data.

Together these two methods work like magic. When you load the application the following things will happen in a sequential manner:

1.  `initTransactions()` will be dispatched, and poll `/api/transactions` to retrieve the latest trasaction data.
2.  The Redux store will consult with its corresponding reducer, since a reducer knows what to do with the data.
3.  When a reducer computes a new state tree, the store will update its state with the newly typed data.
4.  An update has occured in the state, therefore `mapStateToProps()` will be triggered and the react component will get the new data.
5.  The resulting transaction data or error will be displayed as a `<TransactionsList />`.

## Why all this fuss just to load a list of transactions?

Quite an understandable question!

In the example app, we're basically using a bazooka to kill a fly. However, my primary purpose for this project is to provide a robust and scalable infrastructure for large scale projects. It's overkill for the example app, but not for the real world.
