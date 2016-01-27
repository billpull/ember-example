import Ember from 'ember';

export default Ember.Object.extend({
  // these will be supplied by `create`
  firstName: null,
  lastName: null,
  heroName: null,
  isAvenger: false,
  powers: [],

  fullName: Ember.computed('firstName', 'lastName', function() {
    return `${this.get('firstName')} ${this.get('lastName')}`;
  })
});
