/**
 * Created by Matt on 2016-03-19.
 */
Template.header.helpers({
    curPort: function() {
        var current = Session.get("currentPortfolio");
        if(current)
            return current + "'s ";
        else
            return "";
    }
});