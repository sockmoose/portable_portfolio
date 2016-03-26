/**
 * Created by Matt on 2016-03-10.
 */
Template.projectsList.helpers({
    projects: function() {
        return Projects.find();
    }
})