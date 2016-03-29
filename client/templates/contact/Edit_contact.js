/**
 * Created by Alex on 2016-03-27.
 */
Template.editContact.events(
{
    'submit form': function (e) {
        e.preventDefault();

        var deets = {
            fName: $(e.target).find('[name=fName]').val(),
            lName: $(e.target).find('[name=lName]').val(),
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