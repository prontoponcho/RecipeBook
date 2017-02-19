// allow client to access recipes collection
Meteor.subscribe('recipes');
console.log(Meteor.settings.public.ga.account);
