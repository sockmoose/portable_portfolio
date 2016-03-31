/**
 * Created by Matt on 2016-03-28.
 */
Template.searchResults.helpers({
    results: function() {
        console.log(this.search);
        var terms = this.search.split(" ");

        return Contact.find({ $or: [{fName: { $in: terms }},{lName: { $in: terms }}]});
    }
});

Template.oneResult.helpers({
    username: function() {
        var user = Meteor.users.findOne({_id: this.portfolioId});

        return user.username;
    }
});