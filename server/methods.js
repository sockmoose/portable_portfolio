/**
 * Created by Matt on 2016-03-19.
 */
Meteor.methods({
    getBasicUserInfo: function(uname) {
        return Meteor.users.findOne({username: uname}, {fields: {username: 1}});
    },
    getFullName: function(id) {
        console.log("getFullName is executing");
        var user,
            name = "";
        user = Meteor.users.findOne({_id: id});

        console.log(user);

        if(user !== undefined) {
            console.log("User exists");
            if (user.profile.hasOwnProperty('firstName') && user.profile.hasOwnProperty('lastName')) {
                name = user.profile.firstName + " " + user.profile.lastName + "'s ";
            } else {
                name = user.username;
            }
        }

        return name;
    }
});