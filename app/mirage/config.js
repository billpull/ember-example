export default function() {

  var heroes = {
    1: {
      id: 1,
      firstName: 'Tony',
      lastName: 'Stark',
      heroName: 'Iron Man',
      superGroup: 1,
      superPowers: [2, 3]
    },
    2: {
      id: 2,
      firstName: 'Steve',
      lastName: 'Rogers',
      heroName: 'Captain America',
      superGroup: 1,
      superPowers: [1]
    },
    3: {
      id: 3,
      firstName: 'Bruce',
      lastName: 'Wayne',
      heroName: 'Batman',
      superGroup: 2,
      superPowers: []
    }
  };

  var superGroups = {
    1: {
      id: 1,
      name: 'Avengers'
    },
    2: {
      id: 2,
      name: 'Justice League'
    }
  };

  var superPowers = {
    1: {
      id: 1,
      name: 'Super Strength',
      damage: 15
    },
    2: {
      id: 2,
      name: 'Intelligence',
      damage: 5
    },
    3: {
      id: 3,
      name: 'Armor',
      damage: 10
    }
  };

  this.get('/api/heroes', function () {
    var data = {};
    var heroesArr = Object.keys(heroes).map((heroId) => {
      return heroes[heroId];
    });
    var superPowersArr = Object.keys(superPowers).map((powerId) => {
      return superPowers[powerId];
    });
    var superGroupsArr = Object.keys(superGroups).map((groupId) => {
      return superGroups[groupId];
    });

    data['heroes'] = heroesArr;
    data['super-powers'] = superPowersArr;
    data['super-groups'] = superGroupsArr;

    return data;
  });

  this.get('/api/heroes/:id', function (db, request) {
    var heroId = request.params.id;
    var data = {};

    if (!heroes.hasOwnProperty(heroId)) {
      return data;
    }

    var hero = heroes[heroId];
    data["hero"] = hero;
    data["super-powers"] = hero.superPowers.map((powerId) => {
      return superPowers[powerId];
    });
    data["super-group"] = superGroups[hero.superGroup];

    return data;
  });
}
