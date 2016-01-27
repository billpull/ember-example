import Ember from 'ember';

export default Ember.Route.extend({
  model: function (params) {
    return this.store.findRecord('hero', params.hero_id);
  }
});
