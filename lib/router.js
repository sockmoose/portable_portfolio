/**
 * Created by Matt on 2016-03-10.
 */
Router.configure({
    layoutTemplate: 'layout',
    waitOn: function() { return Meteor.subscribe('projects'); }
});

Router.route('/', {name: 'homePage'});

Router.route('/portfolios/:username', {
    name: 'userHome',
    data: function () { return Meteor.users.findOne({'username': this.params.username}); },
});

Router.route('/projects/', { name: 'projectsList' });

Router.route('/projects/:_id', {
    name: 'projectPage',
    data: function() { return Projects.findOne(this.params._id); }
});

Router.plugin('dataNotFound', {notFoundTemplate: 'notFound'});

var setCurrentId = function() {
    if (Meteor.isClient) {
        var user = Meteor.users.findOne({'username': this.params.username});
        Session.set('currentId', user._id);
    }
    this.next();
};

Router.onBeforeAction(setCurrentId, {only: 'userHome'});