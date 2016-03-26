/**
 * Created by Matt on 2016-03-20.
 */
Template.userHome.helpers({
    owner: function() {
        var profile = this.profile;

        if(profile.hasOwnProperty('firstName') && profile.hasOwnProperty('lastName'))
            return profile.firstName + " " + profile.lastName;
        else
            return this.username;
    }
});