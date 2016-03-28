/**
 * Created by Matt on 2016-03-10.
 */
if (Meteor.isClient) {
    Meteor.subscribe('usernames');
    Meteor.subscribe('contact');

    Tracker.autorun(function() {
        Meteor.subscribe('currentProfile', Session.get('portfolioId'));
    });
}

Projects = new Mongo.Collection('projects');
Contact = new Mongo.Collection('contact');
Resume = new Mongo.Collection('resume');