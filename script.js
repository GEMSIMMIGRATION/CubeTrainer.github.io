// Array holding all 6 of J Perm's 2-Look PLL cases
const pllCases = [
    { name: "T-Perm (Corners with Headlines)", alg: "R U R' U' R' F R2 U' R' U' R U R' F'" },
    { name: "Y-Perm (Corners, No Headlines)", alg: "F R U' R' U' R U R' F' R U R' U' R' F R F'" },
    { name: "Ua-Perm (Clockwise Edges)", alg: "R U' R U R U R U' R' U' R2" },
    { name: "Ub-Perm (Counter-Clockwise Edges)", alg: "R2 U R U R' U' R' U' R' U R'" },
    { name: "H-Perm (Opposite Edges Swap)", alg: "M2 U M2 U2 M2 U M2" },
    { name: "Z-Perm (Adjacent Edges Swap)", alg: "M2 U M2 U M' U2 M2 U2 M'" }
];

let currentCase = null;

const cardCase = document.getElementById('card-case');
const cardAlg = document.getElementById('card-alg');
const revealBtn = document.getElementById('reveal-btn');
const nextBtn = document.getElementById('next-btn');

function showNextCase() {
    // Pick a random case out of the 6
    const randomIndex = Math.floor(Math.random() * pllCases.length);
    currentCase = pllCases[randomIndex];
    
    // Set the text and hide the solution algorithm
    cardCase.textContent = currentCase.name;
    cardAlg.textContent = currentCase.alg;
    cardAlg.classList.add('hidden');
    revealBtn.textContent = "Show Alg";
}

function revealAlg() {
    if (!currentCase) return;
    
    // Toggle visibility of the algorithm string
    if (cardAlg.classList.contains('hidden')) {
        cardAlg.classList.remove('hidden');
        revealBtn.textContent = "Hide Alg";
    } else {
        cardAlg.classList.add('hidden');
        revealBtn.textContent = "Show Alg";
    }
}

// Hook up the buttons to our functions
nextBtn.addEventListener('click', showNextCase);
revealBtn.addEventListener('click', revealAlg);
