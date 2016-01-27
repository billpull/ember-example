import Ember from 'ember';
import Person from '../../models/person';

export default Ember.Route.extend({
  model: function () {
    var ironMan = Person.create({
      firstName: 'Tony',
      lastName:  'Stark'
    });

    var captainAmerica = Person.create({
      firstName: 'Steve',
      lastName:  'Rogers'
    });

    return Ember.A([ironMan, captainAmerica]);
  }
});
