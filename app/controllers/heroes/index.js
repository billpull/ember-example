import Ember from 'ember';

export default Ember.Controller.extend({
  error: null,

  actions: {
    addToAvengers: function (hero) {
      this.set('error', null);

      if (hero.get('superGroup.name') === 'Avengers') {
        var currentAvengers = this.get('model.avengers');

        if (currentAvengers.indexOf(hero) < 0) {
          this.get('model.avengers').pushObject(hero);
        }

        return;
      }

      this.set('error', `No Shwarma For You ${hero.get('fullName')}`);
    }
  }
});
