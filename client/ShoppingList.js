Template.ShoppingList.onCreated(function() {
    var self = this;
    // unsubscribe from previous recipe subscription
    // at each render.
    self.autorun(function() {
        self.subscribe('recipes');
    });
});

Template.ShoppingList.helpers({
    shoppingList: () => {
        return Recipes.find({ inMenu: true });
    }
});
