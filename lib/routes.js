FlowRouter.triggers.enter([function(context, redirect) {
    // If user not logged in, redirect to home
    if (!Meteor.userId()) {
        FlowRouter.go('home');
    }
}]);

FlowRouter.route('/', {
    name: 'home',
    action() {
        // reroute logged-in users to recipe book
        if (Meteor.userId()) {
            FlowRouter.go('recipe-book');
        }
        // Defining what a page view is in google Analytics
        GAnalytics.pageview();
        BlazeLayout.render('HomeLayout');
    }
});

// dynamic template routing
FlowRouter.route('/recipe-book', {
    name: 'recipe-book',
    action() {
        GAnalytics.pageview();
        BlazeLayout.render('MainLayout', { main: 'Recipes' });
    }
});

// dynamic template routing
FlowRouter.route('/recipe/:id', {
    name: 'recipe-single',
    action() {
        GAnalytics.pageview();
        BlazeLayout.render('MainLayout', {
            main: 'RecipeSingle'
        });
    }
});

FlowRouter.route('/menu', {
    name: 'menu',
    action() {
        BlazeLayout.render('MainLayout', { main: 'Menu' });
    }
});

FlowRouter.route('/shopping-list', {
    name: 'shopping-list',
    action() {
        BlazeLayout.render('MainLayout', { main: 'ShoppingList' });
    }
});
