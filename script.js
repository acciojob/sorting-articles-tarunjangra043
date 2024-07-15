const bands = [
    'The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean',
    'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans',
    'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'
];

// Function to strip articles from the band names
function stripArticle(bandName) {
    let articles = ['A ', 'An ', 'The '];
    for (let article of articles) {
        if (bandName.startsWith(article)) {
            return bandName.slice(article.length);
        }
    }
    return bandName;
}

// Sort the bands array
const sortedBands = bands.sort((a, b) => stripArticle(a).localeCompare(stripArticle(b)));

// Get the ul element
const bandList = document.getElementById('band');

// Create li elements and append to the ul
sortedBands.forEach(band => {
    const li = document.createElement('li');
    li.textContent = band;
    bandList.appendChild(li);
});
