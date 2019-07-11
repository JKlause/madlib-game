// References needed for elements

// User word inputs
const noun1Input = document.getElementById('noun-1');
const pastTenseAdj1Input = document.getElementById('past-tense-adj-1');
const pastTenseAdj2Input = document.getElementById('past-tense-adj-2');
const noun2Input = document.getElementById('noun-2');
const plNoun1Input = document.getElementById('pl-noun-1');
const verb1Input = document.getElementById('verb-1');

// Writing user words to spans
const userNoun1 = document.getElementById('user-noun-1');
const userPastTenseAdj1 = document.getElementById('user-past-tense-adj-1');
const userPastTenseAdj2 = document.getElementById('user-past-tense-adj-2');
const userNoun2 = document.getElementById('user-noun-2');
const userPlNoun1 = document.getElementById('user-pl-noun-1');
const userVerb1 = document.getElementById('user-verb-1');

function createMadLib() {
    userNoun1.textContent = noun1Input.Value;
    userPastTenseAdj1.textContent = pastTenseAdj1Input.Value;
    userPastTenseAdj2.textContent = pastTenseAdj2Input.Value;
    userNoun2.textContent = noun2Input.Value;
    userPlNoun1.textContent = plNoun1Input.Value;
    userVerb1.textContent = verb1Input.Value;
}