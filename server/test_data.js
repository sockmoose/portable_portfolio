/**
 * Created by Matt on 2016-03-10.
 */
if (Projects.find().count() === 0) {
    Projects.insert({
        pID: 2,
        heading: 'Test Project 1',
        startDate: '01-01-2016',
        completeDate: '02-02-2016',
        shortDesc: 'This is a short summary.',
        longDesc: 'This is a longer description.'
    });

    Projects.insert({
        pID: 2,
        heading: 'Test Project 2',
        startDate: '03-03-2016',
        completeDate: '04-04-2016',
        shortDesc: 'This is a short summary of a second project.',
        longDesc: 'This is a longer description of a second project.'
    });
    Projects.insert({
        pID: 1,
        heading: 'Test Project 6',
        startDate: '01-01-2016',
        completeDate: '02-02-2016',
        shortDesc: 'This is not a short summary.',
        longDesc: 'This is a maybeish longer description.'
    });

    Projects.insert({
        pID: 1,
        heading: 'Test Project 22',
        startDate: '03-06-2016',
        completeDate: '06-04-2016',
        shortDesc: 'This is a slightly short summary of a second project.',
        longDesc: 'This is a lot longer description of a second project.'
    });
};
if (Portfolio.find().count() === 0){
    Portfolio.insert({
        pID: 1,
        fName: 'Alex',
        lName: 'McKenzie',
        phone: '204-792-0039',
        email: 'AlexMcKenzie25@gmail.com',
        twitter: '@AlexMcKenzie25'
    });
    Portfolio.insert({
        pID: 2,
        fName: 'Matt',
        lName: 'Hiebert',
        phone: '555-555-5555',
        email: 'hiem86@gmail.com',
        twitter: '@hiem86'
    });
};