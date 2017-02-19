// Old way: new Meteor.Collection();
Recipes = new Mongo.Collection('recipes');

Recipes.allow({
    // if userId exists (signed in), user can add a recipe.
    insert: function(userId, doc) {
        return !!userId;
    }
});

// Ingredients schema
Ingredient = new SimpleSchema({
    name: {
        type: String
    },
    amount: {
        type: String
    }
});

// package for enforcing a schema in a form
RecipeSchema = new SimpleSchema({
    name: {
        type: String,
        label: "Name"
    },
    desc: {
        type: String,
        label: "Description"
    },
    // Putting Ingredient schema inside array
    // allows multiple ingredients in the form
    ingredients: {
        type: [Ingredient]
    },
    inMenu: {
        type: Boolean,
        defaultValue: false,
        optional: true,
        autoform: {
            type: "hidden"
        }
    },
    author: {
        type: String,
        label: "Author",
        autoValue: function() {
            return this.userId
        },
        autoform: {
            type: "hidden"
        }
    },
    createdAt: {
        type: Date,
        label: "Created At",
        autoValue: function() {
            return new Date()
        },
        autoform: {
            type: "hidden"
        }
    }
});

// attach schema to collection
Recipes.attachSchema(RecipeSchema);
