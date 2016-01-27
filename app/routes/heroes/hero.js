import Ember from 'ember';
import Hero from '../../models/hero';

export default Ember.Route.extend({
  model: function (params) {
    return this.store.findRecord('hero', params.hero_id);
  }
});
