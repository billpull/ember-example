import Ember from 'ember';
import Hero from '../../models/hero';

export default Ember.Route.extend({
  model: function () {
    return Hero.create({
      firstName: 'Steve',
      lastName:  'Rogers',
      heroName: 'Captain America'
    });
  }
});
