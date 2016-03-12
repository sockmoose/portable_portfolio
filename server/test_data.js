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

    Projects.insert({
        heading: 'Test Project 2',
        startDate: '03-03-2016',
        completeDate: '04-04-2016',
        shortDesc: 'This is a short summary of a second project.',
        longDesc: 'This is a longer description of a second project.'
    });
};