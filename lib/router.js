/**
 * Created by Matt on 2016-03-10.
 */
Router.configure({
    layoutTemplate: 'layout',
    waitOn: function() { return Meteor.subscribe('projects'); }
});

//Site home
Router.route('/', {name: 'homePage'});

//User home
Router.route('/portfolios/:username', {
    name: 'userHome',
    data: function () { return Meteor.users.findOne({'username': this.params.username}); },
});

//Projects list
Router.route('/projects/', { name: 'projectsList' });

//New project submission
Router.route('/portfolios/:username/projects/newproject', {name: 'projectSubmit'});

//Individual project page
Router.route('/projects/:_id', {
    name: 'projectPage',
    data: function() { return Projects.findOne(this.params._id); }
});

Router.plugin('dataNotFound', {notFoundTemplate: 'notFound'});

/**
 * Sets a session variable that contains the ID of the portfolio being viewed
 */
var setPortfolioId = function() {
    if (Meteor.isClient) {
        var user = Meteor.users.findOne({'username': this.params.username});
        Session.set('portfolioId', user._id);
    }
    this.next();
};

Router.onBeforeAction(setPortfolioId, {only: 'userHome'});