/**
 * Created by Matt on 2016-03-19.
 */
if (Meteor.isServer) {
    Accounts.onCreateUser(function (options, user) {
        user.roles = ['user'];

        if (options.profile)
            user.profile = options.profile;
        return user;
    });
}

if (Meteor.isClient) {
    Accounts.ui.config({
        passwordSignupFields: "USERNAME_AND_EMAIL"
    });
}