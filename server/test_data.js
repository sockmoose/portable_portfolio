/**
 * Created by Matt on 2016-03-10.
 */
if (Projects.find().count() === 0) {
    Projects.insert({
        heading: 'Test Project 1',
        startDate: '01-01-2016',
        completeDate: '02-02-2016',
        shortDesc: 'This is a short summary.',
        longDesc: 'This is a longer description.'
    });
};