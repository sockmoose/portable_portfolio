/**
 * Created by Alex on 3/26/2016.
 */
Template.contact.helpers({
    portfolio: function() {
        var port = Session.get('portfolioId');
        return Contact.find({portfolioId: port});
    },
    isAdmin: function() {
        var port2 = Session.get('portfolioId');
        return Roles.userIsInRole(Meteor.user(),port2);
    }
});