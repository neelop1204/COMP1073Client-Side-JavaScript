// Assignment 1 | COMP1073 Client-Side JavaScript

/* Variables
-------------------------------------------------- */
// Constants for main button query selectors
const noun1Button = document.getElementById("noun1");
const verbButton = document.getElementById("verb");
const adjectiveButton = document.getElementById("adjective");
const noun2Button = document.getElementById("noun2");
const settingButton = document.getElementById("setting");

// Constants for p tag to display query selectors
const choosenNoun1 = document.getElementById("choosenNoun1");
const choosenVerb = document.getElementById("choosenVerb");
const choosenAdjective = document.getElementById("choosenAdjective");
const choosenNoun2 = document.getElementById("choosenNoun2");
const choosenSetting = document.getElementById("choosenSetting");

// Constants for final buttons and p tags
const playbackButton = document.getElementById("playback");
const randomButton = document.getElementById("random");
const storyParagraph = document.getElementById("story");

// Variables for pre-defined arrays
const nouns1 = ['The Turkey', 'Mom', 'Dad', 'The Dog', 'My Teacher', 'The Elephant','The Cat']; 
const verbs = ['sat on', 'ate', 'danced with','saw','doesnt like','kissed']; 
const adjectives = ['a funny', 'a scary', 'a goofy', 'a slimy','a barking','a fat']; 
const nouns2 = ['goat','monkey','fish','cow','frog','bug','worm']; 
const settings = ['on the moon','on the chair','in my spaghetti','in my soup','on the grass','in my shoes']; 

// Variables for count to grab array elements
let noun1Count = 0;
let verbCount = 0;
let adjectiveCount = 0;
let noun2Count = 0;
let settingCount = 0;

/* Functions
-------------------------------------------------- */
function noun1_on_click() {
    choosenNoun1.textContent = nouns1[noun1Count];
    noun1Count = (noun1Count + 1) % nouns1.length;
}

function verb_on_click() {
    choosenVerb.textContent = verbs[verbCount];
    verbCount = (verbCount + 1) % verbs.length;
}

function adjective_on_click() {
    choosenAdjective.textContent = adjectives[adjectiveCount];
    adjectiveCount = (adjectiveCount + 1) % adjectives.length;
}

function noun2_on_click() {
    choosenNoun2.textContent = nouns2[noun2Count];
    noun2Count = (noun2Count + 1) % nouns2.length;
}

function setting_on_click() {
    choosenSetting.textContent = settings[settingCount];
    settingCount = (settingCount + 1) % settings.length;
}

// concatenate the user story and display
function playback_on_click() {
    const story = `${choosenNoun1.textContent} ${choosenVerb.textContent} ${choosenAdjective.textContent} ${choosenNoun2.textContent} ${choosenSetting.textContent}`;
    storyParagraph.textContent = story;
}

// grabbing random element from arrays, concatenate and display
function random_on_click() {
    const randomNoun1Index = Math.floor(Math.random() * nouns1.length);
    const randomVerbIndex = Math.floor(Math.random() * verbs.length);
    const randomAdjectiveIndex = Math.floor(Math.random() * adjectives.length);
    const randomNoun2Index = Math.floor(Math.random() * nouns2.length);
    const randomSettingIndex = Math.floor(Math.random() * settings.length);

    const randomNoun1 = nouns1[randomNoun1Index];
    const randomVerb = verbs[randomVerbIndex];
    const randomAdjective = adjectives[randomAdjectiveIndex];
    const randomNoun2 = nouns2[randomNoun2Index];
    const randomSetting = settings[randomSettingIndex];

    const randomStory = `${randomNoun1} ${randomVerb} ${randomAdjective} ${randomNoun2} ${randomSetting}`;
    storyParagraph.textContent = randomStory;
}

/* Event Listeners
-------------------------------------------------- */
noun1Button.addEventListener("click", noun1_on_click);
verbButton.addEventListener("click", verb_on_click);
adjectiveButton.addEventListener("click", adjective_on_click);
noun2Button.addEventListener("click", noun2_on_click);
settingButton.addEventListener("click", setting_on_click);
playbackButton.addEventListener("click", playback_on_click);
randomButton.addEventListener("click", random_on_click);

// Get all buttons
const buttons = document.querySelectorAll('button');

// Function to generate random color
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Loop through each button and add a click event listener
buttons.forEach(button => {
    button.addEventListener('click', function() {
        // Change the background color of the page
        document.body.style.backgroundColor = getRandomColor();
        // Change the background color of the button
        this.style.backgroundColor = getRandomColor();
    });
});
