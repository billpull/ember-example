import DS from 'ember-data';
import Ember from 'ember';

export default DS.Model.extend({
  firstName: DS.attr('string'),
  lastName: DS.attr('string'),
  heroName: DS.attr('string'),

  superPowers: DS.hasMany('super-power'),
  superGroup: DS.belongsTo('super-group'),

  fullName: Ember.computed.alias('firstName', 'lastName', function () {
    return `${this.get('firstName')} ${this.get('lastName')}`;
  })
});
