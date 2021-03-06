/**
 * Created by Matt on 2016-03-10.
 */

var isAdmin = function() {
    if(Roles.userIsInRole(Meteor.user(), Session.get('portfolioId'))){
        this.next();
    } else {
        this.render('homePage');
    }
};

Router.configure({
    layoutTemplate: 'layout',
    loadingTemplate: 'loading',
    waitOn: function() { return Meteor.subscribe('projects'); }
});
//imput a portfolio Identifier
Router.route('/portfolios/userHome/:username', {
    name: 'PortfolioAccess',
    template: 'userHome'
});

//Site home
Router.route('/', {
    name: 'homePage'
});

//User home
Router.route('/portfolios/userHome', {
    name: 'userHome'
});

//Projects list
Router.route('/projects', {
    name: 'projectsList'
});

//New project submission
Router.route('projects/projectSubmit', {
    name: 'projectSubmit',
    onBeforeAction: isAdmin
});

//Individual project page
Router.route('/projects/portfolio/:_id', {
    name: 'projectPage',
    data: function() {return Projects.findOne(this.params._id); }
});
//contact page
Router.route('/contact' , {
    name: 'contact'
});
Router.route('contact/editContact', {
    name: 'editContact',
    onBeforeAction: isAdmin
});

Router.route('/resume', {
   name: 'resume'
});

Router.route('/searchResults', {
    name: 'searchResults',
    data: function() { return {terms: this.params.query}; }
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
            } else if (Meteor.userId()) {

                Session.set('portfolioId', Meteor.userId());
            } else {

                this.render('homePage');
            }
        }

    }
    this.next();
};

Router.onBeforeAction(setPortfolioId);

