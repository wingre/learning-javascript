'use strict';

const sentences = [
    { subject: 'JavaScript', verb: 'is', object: 'great' },
    { subject: 'Elephants', verb: 'are', object: 'large' }
];

// ES6 feature: Destructuring
function say({ subject, verb, object }) {
    // ES6 feature: Template Strings
    console.log(`${subject} ${verb} ${object}`);
};

// ES6 feature: for..of
for (let s of sentences) {
    say(s);
};