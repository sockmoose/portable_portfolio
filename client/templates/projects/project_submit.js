/**
 * Created by Matt on 2016-03-22.
 */
Template.projectSubmit.helpers({

});

var getDaysInMonth = function(month) {
    var days = 31;

    if (month === "April" || month === "June" || month === "September" || month === "November") {
        days = 30;
    } else if (month === "February") {
        days = 28;
    }

    return days;
};

Template.projectSubmit.events({
    'change .month-selector': function(e) { // Change the day options available when the month changes
        var target = e.currentTarget,
            days = getDaysInMonth(target.value),
            dayOptions = "";

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
});