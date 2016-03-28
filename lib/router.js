/**
 * Created by Matt on 2016-03-10.
 */
Router.configure({
    layoutTemplate: 'layout',
    loadingTemplate: 'loading',
    waitOn: function() { return Meteor.subscribe('projects'); }
});

//Site home
Router.route('/', {
    name: 'homePage'
});

//User home
Router.route('/portfolios/:username', {
    name: 'userHome'
});

//Projects list
Router.route('/projects', {
    name: 'projectsList'
});

//New project submission
Router.route('projects/projectSubmit', {
    name: 'projectSubmit',
});

//Individual project page
Router.route('/projects/portfolio/:_id', {
    name: 'projectPage',
    data: function() {return Projects.findOne(this.params._id)}
});
//contact page
Router.route('/contact' , {
    name: 'contact'
});
Router.route('projects/editContact', {
    name: 'editContact',
});

Router.route('/resume', {
   name: 'resume'
});

Router.plugin('dataNotFound', {notFoundTemplate: 'notFound'});

/**
 * Sets a session variable that contains the ID of the portfolio being viewed
 */

var setPortfolioId = function() {
    if (Meteor.isClient){
        if(Session.get('portfolioId') == null) {
            if (this.params.username) {
                var user = Meteor.users.findOne({username: this.params.username});
                Session.set('portfolioId', user._id);
            } else {
                Session.set('portfolioId', Meteor.userId());
            }
        }
    }
    this.next();
};

Router.onBeforeAction(setPortfolioId);