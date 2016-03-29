/**
 * Created by Matt on 2016-03-22.
 */
Template.projectSubmit.helpers({

});

var getDaysInMonth = function(month, year) {
    var days = 31;

    if (month === "April" || month === "June" || month === "September" || month === "November") {
        days = 30;
    } else if (month === "February") {
        if (year % 4 === 0) {
            days = 29;
        } else {
            days = 28;
        }
    }

    return days;
};

Template.projectSubmit.events({
    'submit form': function(e){
        e.preventDefault();
        var st =  $(e.target).find('[name=startMonth]').val() + " " + $(e.target).find('[name=startDay]').val() + ", " +
            $(e.target).find('[name=startYear]').val();

        var cd =  $(e.target).find('[name=completeMonth]').val() + " " + $(e.target).find('[name=completeDay]').val() +
            ", " + $(e.target).find('[name=completeYear]').val();

        var project =    {
            heading: $(e.target).find('[name=heading]').val(),
            summary: $(e.target).find('[name=summary]').val(),
            description: $(e.target).find('[name=description]').val(),
            startDate: st,
            completeDate: cd
        };
            Meteor.call('ProjectInsert', project, function(error, result) {
                if (error) return alert(error.reason);
                Router.go('projectPage', {_id: result});
            }
        )},

    'change .month-selector, change .year-selector': function(e) { // Change the day options available when the month changes
        var target = e.currentTarget,
            dayOptions = "",
            days = 0,
            month = "",
            year = 0;

        if (target.classList.contains("month-selector")) {
            month = target.value;
            year = $(target).siblings(".year-selector").val();
        } else {
            year = target.value;
            month = $(target).siblings(".month-selector").val();
        }

        days = getDaysInMonth(month, year);

        $(target).siblings(".day-selector").html(function() {
            for (var i=1; i<=days; i++) {
                dayOptions += "<option>" + i + "</option>";
            }
            return dayOptions;
        });
    }
});

Template.projectSubmit.onRendered(function() {
    var months = ["January","February","March","April","May","June","July","August","September","October","November","December"];

    // Populate month selectors
    this.$(".month-selector").each(function() {
        $(this).html(function() {
            var monthOptions = "";

            for (var i=0; i<months.length; i++) {
                monthOptions += "<option>" + months[i] + "</option>";
            }

            return monthOptions;
        });
    });

    // Populate day selectors
    this.$(".day-selector").each(function() {
        $(this).html(function() {
            var dayOptions = "";
            for (var i=1; i<=31; i++) {
                dayOptions += "<option>" + i + "</option>";
            }
            return dayOptions;
        });
    });

    // Populate year selectors
    this.$(".year-selector").each(function() {
        $(this).html(function() {
            var yearOptions = "";
            for (var i=1970; i<=2030; i++) {
                yearOptions += "<option>" + i + "</option>";
            }
            return yearOptions;
        });
    });

    this.$(".year-selector").val("2016");
});