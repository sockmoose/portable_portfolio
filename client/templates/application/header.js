/**
 * Created by Alex on 3/28/2016.
 */
Template.header.events({
    'click .btn-info': function(e) {
        var name = {
            search: $(e.target).find('[name=search]').val()
        }
    }
});