/**
 * Created by Matt on 2016-03-10.
 */
if (Meteor.isClient) {
    Meteor.subscribe('usernames');
    Meteor.subscribe('Portfolio');

    Tracker.autorun(function() {
        Meteor.subscribe('currentProfile', Session.get('portfolioId'));
    });
}

Projects = new Mongo.Collection('projects');
Portfolio = new Mongo.Collection('portfolio');