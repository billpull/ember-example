import Ember from 'ember';
import Hero from '../../models/hero';

export default Ember.Route.extend({
  store: Ember.inject.service('store'),

  model: function () {
    return this.store.findAll('hero').then((heroes) => {
      return {
        heroes: heroes,
        avengers: []
      };
    });
  }
});
