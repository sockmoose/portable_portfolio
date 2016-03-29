/**
 * Created by Matt on 2016-03-20.
 */
Template.userHome.helpers({
    owner: function() {
        var user = Meteor.users.findOne(Session.get('portfolioId'));
        return user.username;
    }
});