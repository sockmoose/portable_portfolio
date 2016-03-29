/**
 * Created by Matt on 2016-03-10.
 */
Meteor.publish('projects', function() {
    return Projects.find();
});

Meteor.publish('contact', function() {
    return Contact.find();
});

Meteor.publish('resume', function() {
    return Resume.find();
});

Meteor.publish('usernames', function() {
    return Meteor.users.find({}, {fields: {'username': 1}});
});

Meteor.publish('currentProfile', function(id) {
    return Meteor.users.find({_id: id}, {fields: {'profile': 1}});
});

