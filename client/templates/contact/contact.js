/**
 * Created by Alex on 3/26/2016.
 */
Template.contact.helpers({
    portfolio: function() {
        var test = Session.get('portfolioId');
        return Contact.find({portfolioId: test});
    }
});