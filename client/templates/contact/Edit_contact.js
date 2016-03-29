/**
 * Created by Alex on 2016-03-27.
 */
Template.editContact.events(
{
    'submit form': function (e) {
        e.preventDefault();

        var deets = {
            email: $(e.target).find('[name=email]').val(),
            phone: $(e.target).find('[name=phoneNumber]').val(),
            twitter: $(e.target).find('[name=twitter]').val()
        };
        Meteor.call('contactUpdate', deets, function (error, result) {
                if (error) return alert(error.reason);
                alert("update Successful");
                Router.go('contact');
        })
    },
    'click .cancel': function (){
        Router.go('contact');
    }

});