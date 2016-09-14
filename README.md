# Firestarter

This README outlines the details of collaborating on this Ember application.
A short introduction of this app could easily go here.

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](http://git-scm.com/)
* [Node.js](http://nodejs.org/) (with NPM)
* [Bower](http://bower.io/)
* [Ember CLI](http://ember-cli.com/)
* [PhantomJS](http://phantomjs.org/)

## Installation

* `git clone <repository-url>` this repository
* change into the new directory
* `npm install`
* `bower install`

## Running / Development

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).

### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

### Running Tests

* `ember test`
* `ember test --server`

### Building

* `ember build` (development)
* `ember build --environment production` (production)

### Deploying

Specify what it takes to deploy your app.

## Further Reading / Useful Links

* [ember.js](http://emberjs.com/)
* [ember-cli](http://ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)


## Steps

* `npm uninstall -g ember-cli`
* `npm cache clean`
* `npm install -g ember-cli`
Go to directory
* `ember install ember-cli-mirage`
* `ember install ember-cli-page-object`



Basic Workflow

1. Go to hello-world, run tests, add text to page and add another test to assert that the text exists
2. Go to login-page-object, check out controllers and actions, run tests, see use of page-object, write test for successful login
3. error-message component, integration tests with components, update compoent to make test past.
4. users index, nested routing, template interation, defining a user model, adding mirage, adding a mirage factory, adding a mirage scenario to load test data
defining a routes model.