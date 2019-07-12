// References needed for elements

// User word inputs
const noun1Input = document.getElementById('noun-1');
const Adj1Input = document.getElementById('adj-1');
const Adj2Input = document.getElementById('adj-2');
const noun2Input = document.getElementById('noun-2');
const plNoun1Input = document.getElementById('pl-noun-1');
const verb1Input = document.getElementById('verb-1');

// Writing user words to spans
const userNoun1 = document.getElementById('user-noun-1');
const userAdj1 = document.getElementById('user-adj-1');
const userAdj2 = document.getElementById('user-adj-2');
const userNoun2 = document.getElementById('user-noun-2');
const userPlNoun1 = document.getElementById('user-pl-noun-1');
const userVerb1 = document.getElementById('user-verb-1');

// Revealing madlib
const reveal = document.getElementById('madlib');

// eslint-disable-next-line no-unused-vars
function createMadLib() {
    userNoun1.textContent = noun1Input.value.toLowerCase();
    userAdj1.textContent = Adj1Input.value.toLowerCase();
    userAdj2.textContent = Adj2Input.value.toLowerCase();
    userNoun2.textContent = noun2Input.value.toLowerCase();
    userPlNoun1.textContent = plNoun1Input.value.toLowerCase();
    userVerb1.textContent = verb1Input.value.toLowerCase();
    reveal.classList.remove('hidden');
} 