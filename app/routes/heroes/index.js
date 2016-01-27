import Ember from 'ember';
import Hero from '../../models/hero';

export default Ember.Route.extend({
  model: function () {
    var ironMan = Hero.create({
      firstName: 'Tony',
      lastName:  'Stark',
      heroName: 'Iron Man'
    });

    var captainAmerica = Hero.create({
      firstName: 'Steve',
      lastName:  'Rogers',
      heroName: 'Captain America'
    });

    return Ember.A([ironMan, captainAmerica]);
  }
});
