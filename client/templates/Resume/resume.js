Template.resume.helpers({
    getCollectionDocument: function () {
        var port = Session.get('portfolioId');
        var doc = Resume.findOne({portfolioId: port})
        if(doc){
            return doc;
        } else {
            return Meteor.call('resumeInsert');
        }
    },

    //method to pre-populate the editor with the information from the collection
    doFill: function (){
        var self = this;
        return function (e, editor) {
            var port = Session.get('portfolioId');
            var resume = Resume.findOne({portfolioId: port});

            //if not null display it, otherwise create a new resume
            if (resume) {
                //get the old resume content
                var oldHtml = resume.content;
                editor.html.set(oldHtml);
            } else {
                Meteor.call('resumeInsert');
                console.log("inserted a new resume");
            }
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
                    }
                }

            return false; // Stop Froala Editor from POSTing to the Save URL
        }
    }

});