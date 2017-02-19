// Make recipes collection available to client.
Meteor.publish('recipes', function() {
    // Only allow user access to their recipes
    return Recipes.find({ author: this.userId });
});

// Offer a way to subscribe to a single recipe
// This improves web app performance.
Meteor.publish('singleRecipe', function(id) {
    check(id, String);
    // Only allow user access to their recipes
    return Recipes.find({ _id: id });
});
