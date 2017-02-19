// Make recipes collection available to client.
Meteor.publish('recipes', function() {
    // Only allow user access to their recipes
    return Recipes.find({ author: this.userId });
});
