FlowRouter.route('/', {
    name: 'home',
    action() {
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
