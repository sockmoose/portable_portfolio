/**
 * Created by Matt on 2016-03-10.
 */
if (Meteor.isClient) {
    Meteor.subscribe('usernames');

    Tracker.autorun(function() {
        Meteor.subscribe('currentProfile', Session.get('portfolioId'));
    });
}

Projects = new Mongo.Collection('projects');