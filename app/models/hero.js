import DS from 'ember-data';

export default DS.Model.extend({
  firstName: DS.attr('string'),
  lastName: DS.attr('string'),
  heroName: DS.attr('string'),

  superPowers: DS.hasMany('super-power'),
  superGroup: DS.belongsTo('super-grou')
});
