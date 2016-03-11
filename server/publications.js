/**
 * Created by Matt on 2016-03-10.
 */
Meteor.publish('projects', function() {
    return Projects.find();
});