Template.resume.helpers({
    getCollectionDocuments: function () {
        return Resume.find();
    },

    //method to pre-populate the editor with the information from the collection
    doFill: function (){
        var self = this;
        return function (e, editor) {
            var port = Session.get('portfolioId')
            var resume = Resume.findOne({portfolioId: port});
            var oldHtml = resume.content;
            editor.html.set(oldHtml);
        }
    },

    //method updates collection after the user leaves the editor (on click out essentially)
    doSave: function () {
        var self = this;
        return function (e, editor) {
            // Get edited HTML from Froala-Editor
            var newHTML = editor.html.get(true);

            // update the edited value provided by the Froala-Editor plugin, if it has changed:

                if (!_.isEqual(newHTML, self.content)) {
                    if (Meteor.userId() == Session.get('portfolioId')) {
                        Meteor.call('resumeUpdate', self, newHTML);
                    } else {
                        console.log("sorry guy no can do");
                    }
                }

            return false; // Stop Froala Editor from POSTing to the Save URL
        }
    }

});