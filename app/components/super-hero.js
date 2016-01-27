import Ember from 'ember';

// app/components/super-hero.js
export default Ember.Component.extend({
  hero: null, // passed in
  tagName: 'li',
  classNames: ['super-hero'],
  heroClass: function () {
    var hero = this.get('hero');
    if (!Ember.isNone(hero) && !Ember.isNone(hero.get('heroName'))) {
      return Ember.String.dasherize(hero.get('heroName'));
    }

    return '';
  }.property(),
  classNameBindings: ['heroClass'],

  actions: {
    assemble: function () {
      this.attrs.assemble(this.get('hero'));
    }
  }
});
