import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('heroes', {path: '/'}, function() {
    this.route('hero', {path: '/:hero_id'});
  });
});

export default Router;
