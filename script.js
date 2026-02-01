const textarea = document.getElementById('myText');
const countDisplay = document.getElementById('count');

// Listen for typing events
textarea.addEventListener('input', () => {
    // Set the text of the span to the length of the textarea value
    countDisplay.textContent = textarea.value.length;
});