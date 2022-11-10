'use strict';
const _ = require('underscore');

const sentences = [
    { subject: 'JavaScript', verb: 'is', object: 'great' },
    { subject: 'Elephants', verb: 'are', object: 'large' }
];

const verbs = _.pluck(sentences, 'verb');
for (const verb of verbs) {
    console.log(`found verb: ${verb}`);
}

// ES6 feature: Destructuring
function say({ subject, verb, object }) {
    // ES6 feature: Template Strings
    console.log(`${subject} ${verb} ${object}`);
}

// ES6 feature: for..of
for (let s of sentences) {
    say(s);
}