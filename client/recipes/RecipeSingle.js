Template.RecipeSingle.onCreated(function() {
    var self = this;
    // resubscribe at each template render.
    self.autorun(function() {
        var id = FlowRouter.getParam('id');
        self.subscribe('singleRecipe', id);
    });
});

Template.RecipeSingle.helpers({
    recipe: () => {
        // get id from URL
        var id = FlowRouter.getParam('id');
        return Recipes.findOne({ _id: id });
    }
})
