/**
 * Created by Matt on 2016-03-19.
 */
Meteor.methods({
    ProjectInsert: function(projectStuff) {
        var user = Meteor.user();
        var project = _.extend(projectStuff, {
            portfolioId: user._id
        });

        return Projects.insert(project);

    },
    contactUpdate: function(deets) {
        var user = Meteor.user();
        var contact = _.extend(deets, {
            portfolioId: user._id
        });

        Contact.remove({portfolioId: user._id});
        Contact.insert(contact);
    }

});