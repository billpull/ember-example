import Ember from 'ember';
import Person from '../../models/person';

export default Ember.Route.extend({
  model: function () {
    return Person.create({
      firstName: 'Steve',
      lastName:  'Rogers'
    });
  }
});
