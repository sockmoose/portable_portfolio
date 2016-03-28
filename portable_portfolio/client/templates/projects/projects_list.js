/**
 * Created by Matt on 2016-03-10.
 */
Template.projectsList.helpers({
    projects: function() {
        return Projects.find({portfolioId: Session.get('portfolioId')});
    },
    isAdmin: function() {
        var port2 = Session.get('portfolioId');
        return Roles.userIsInRole(Meteor.user(),port2);
    }
});