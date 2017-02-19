// allow client to access recipes collection
// Meteor.subscribe('recipes');

// Tie the 'recipe' collection subscription to the template
// level instead of the global level.
Template.Recipes.onCreated(function() {
    var self = this;
    // unsubscribe from previous recipe subscription
    // at each render.
    self.autorun(function() {
        self.subscribe('recipes');
    });
});

Template.Recipes.helpers({
    recipes: () => {
        return Recipes.find({});
    }
})
