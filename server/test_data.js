/**
 * Created by Matt on 2016-03-10.
 */
if (Projects.find().count() === 0) {
    Projects.insert({
        portfolio: 2,
        heading: 'Test Project 1',
        startDate: '01-01-2016',
        completeDate: '02-02-2016',
        summary: 'This is a short summary.',
        description: 'This is a longer description.'
    });

    Projects.insert({
        portfolioId: 2,
        heading: 'Test Project 2',
        startDate: '03-03-2016',
        completeDate: '04-04-2016',
        summary: 'This is a short summary of a second project.',
        description: 'This is a longer description of a second project.'
    });
    Projects.insert({
        portfolioId: 1,
        heading: 'Test Project 6',
        startDate: '01-01-2016',
        completeDate: '02-02-2016',
        summary: 'This is not a short summary.',
        description: 'This is a maybeish longer description.'
    });

    Projects.insert({
        portfolioId: 1,
        heading: 'Test Project 22',
        startDate: '03-06-2016',
        completeDate: '06-04-2016',
        summary: 'This is a slightly short summary of a second project.',
        description: 'This is a lot longer description of a second project.'
    });
};
if (Contact.find().count() === 0){
    Contact.insert({
        portfolioId: 'H6DDC4fDShKqRZTja',
        fName: 'Alex',
        lName: 'McKenzie',
        phone: '204-792-0039',
        email: 'AlexMcKenzie25@gmail.com',
        twitter: '@AlexMcKenzie25'
    });
    Contact.insert({
        portfolioId: 2,
        fName: 'Matt',
        lName: 'Hiebert',
        phone: '555-555-5555',
        email: 'hiem86@gmail.com',
        twitter: '@hiem86'
    });
};