/**
 * Created by Alex on 3/26/2016.
 */
Template.contact.helpers({
    portfolio: function() {
        return Portfolio.find({pID: Session.get('pID')});
    }
});