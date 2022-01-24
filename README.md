# Empire State of Wallet

Mark Foster's take home assessment for neo.tax

## Table of Contents

- [Installation](#installation)
- [Features](#features)
- [Support](#support)

## Installation

1.  Make sure that you have the latest versions of Node.js and npm installed.
2.  Clone this repo using `git clone --depth=1 https://github.com/markfoster314/neo-tax-interview.git <YOUR_PROJECT_NAME>`
3.  Move to the appropriate directory: `cd <YOUR_PROJECT_NAME>`.<br />
4.  Run `npm install` in order to install dependencies for our React front end.<br />
5.  Move to the backend directory: `cd backend`.<br />
6.  Run `npm install` in order to install dependencies for our Nest back end.<br />
7.  Run `npm run start:dev` to spin up our back end.<br />
8.  Open a new terminal, navigate to the root directory and run `npm run dev` to launch our web application.<br />

Open up `http://localhost:5000` to see our backend, visualized with the Swagger plugin.<br />
Finally, open up `http://localhost:3000` to see the example app running.

## Features

<dl>
  <dt>Server Side Rendering</dt>
  <dd>By default, Next.js pre-renders every page. This means that Next.js generates HTML for each page in advance, instead of having it all done by client-side JavaScript. Pre-rendering can result in better performance and SEO.

Each generated HTML is associated with minimal JavaScript code necessary for that page. When a page is loaded by the browser, its JavaScript code runs and makes the page fully interactive. (This process is called hydration.)</dd>

  <dt>Efficient and scalable server-side code</dt>
  <dd>Using NestJS as our Node.js framework allows for a clear architecture based on a few simple components (controllers, modules and providers). This gives great ease to split applications into microservices.</dd>

  <dt>Instant feedback</dt>
  <dd>Enjoy the best DX (Developer eXperience) and code your app at the speed of thought! Your saved changes to the CSS and JS are reflected instantaneously without refreshing the page. Preserve application state even when you update something in the underlying code!</dd>

  <dt>Predictable state management</dt>
  <dd>Unidirectional data flow allows for change logging and time travel debugging.</dd>

  <dt>Next generation CSS</dt>
  <dd>Write composable CSS that's co-located with your components for complete modularity. Unique generated class names keep the specificity low while eliminating style clashes. Ship only the styles that are on the page for the best performance.</dd>

  <dt>Static code analysis</dt>
  <dd>Focus on writing new features without worrying about formatting or code quality. With the right editor setup, your code will automatically be formatted and linted as you work.</dd>

</dl>

## Documentation

- [Overview of `empire-state-of-wallet`](docs/general/introduction.md): An introduction for newcomers to this project.
- [Next.js Documentation](docs/misc/next-js.md): Boilerplate Next.js docs

## Support

Please [open an issue](https://github.com/markfoster314/neo-tax-interview/issues/new) for support.
