import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('home', {path: '/'});
  this.route('hello-world');
  this.route('login-page-object');
  this.route('mirage-create-users');
});

export default Router;
