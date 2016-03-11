/**
 * Created by Matt on 2016-03-10.
 */
Router.configure({
    layoutTemplate: 'layout',
    waitOn: function() { return Meteor.subscribe('projects'); }
});

Router.route('/', {name: 'homePage'});

Router.route('/projects/', {name: 'projectsList'});

Router.route('/projects/:_id', {
    name: 'projectPage',
    data: function() { return Projects.findOne(this.params._id); }
});