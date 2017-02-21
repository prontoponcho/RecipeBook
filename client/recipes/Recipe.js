Template.Recipe.onCreated(function() {
    // Set a variable scoped to this template
    this.editMode = new ReactiveVar(false);
});

Template.Recipe.helpers({
    // returns the current recipe's id
    updateRecipeId: function() {
        return this._id;
    },
    editMode: function() {
        // return the variable scoped to this template
        return Template.instance().editMode.get();
    }
})

Template.Recipe.events({
    'click .toggle-menu': function() {
        Meteor.call('toggleMenuItem', this._id, this.inMenu);
    },
    'click .fa-trash': function() {
        Meteor.call('deleteRecipe', this._id);
    },
    'click .fa-pencil': function(event, template) {
        template.editMode.set(!template.editMode.get());
        // Default session value is false.
        // Session.set('editMode', !Session.get('editMode'));
    }
})
