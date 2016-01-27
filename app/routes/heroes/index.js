import Ember from 'ember';
import Hero from '../../models/hero';

export default Ember.Route.extend({
  model: function () {
    var ironMan = Hero.create({
      firstName: 'Tony',
      lastName:  'Stark',
      heroName: 'Iron Man',
      isAvenger: true
    });

    var captainAmerica = Hero.create({
      firstName: 'Steve',
      lastName:  'Rogers',
      heroName: 'Captain America',
      isAvenger: true
    });

    var batman = Hero.create({
      firstName: 'Bruce',
      lastName: 'Wayne',
      heroName: 'Batman',
      isAvenger: false
    });

    var model = new Ember.RSVP.hash({
      heroes: Ember.A([ironMan, captainAmerica, batman]),
      avengers: Ember.A([])
    });

    return model;
  }
});
