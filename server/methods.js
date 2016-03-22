/**
 * Created by Matt on 2016-03-19.
 */
Meteor.methods({
    getBasicUserInfo: function(uname) {
        return Meteor.users.findOne({username: uname}, {fields: {username: 1}});
    }
});