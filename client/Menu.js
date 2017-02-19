Template.Menu.onCreated(function() {
    var self = this;
    // unsubscribe from previous recipe subscription
    // at each render.
    self.autorun(function() {
        self.subscribe('recipes');
    });
});

Template.Menu.helpers({
    recipes: () => {
        return Recipes.find({ inMenu: true });
    }
});
