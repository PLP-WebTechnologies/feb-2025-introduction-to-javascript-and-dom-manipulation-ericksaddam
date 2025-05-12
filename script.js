// Wait for the DOM to be fully loaded before executing JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // 1. Text Content Manipulation
    const changingText = document.getElementById('changingText');
    const changeTextBtn = document.getElementById('changeTextBtn');
    
    changeTextBtn.addEventListener('click', function() {
        // Change the text content dynamically
        if (changingText.textContent === 'This text will change when you click the button below.') {
            changingText.textContent = 'The text has been changed using JavaScript!';
        } else {
            changingText.textContent = 'This text will change when you click the button below.';
        }
    });

    // 2. Style Manipulation
    const styleText = document.getElementById('styleText');
    const changeStyleBtn = document.getElementById('changeStyleBtn');
    
    changeStyleBtn.addEventListener('click', function() {
        // Toggle CSS styles via JavaScript
        if (styleText.classList.contains('highlight')) {
            styleText.classList.remove('highlight');
            styleText.style.fontWeight = 'normal';
            styleText.style.fontSize = '16px';
        } else {
            styleText.classList.add('highlight');
            styleText.style.fontWeight = 'bold';
            styleText.style.fontSize = '18px';
        }
    });

    // 3. Element Manipulation (Adding/Removing Elements)
    const toggleElementBtn = document.getElementById('toggleElementBtn');
    const dynamicElement = document.getElementById('dynamicElement');
    
    toggleElementBtn.addEventListener('click', function() {
        // Toggle element visibility
        if (dynamicElement.style.display === 'block') {
            dynamicElement.style.display = 'none';
        } else {
            dynamicElement.style.display = 'block';
        }
    });

    // 4. Interactive Counter
    const counterElement = document.getElementById('counter');
    const incrementBtn = document.getElementById('incrementBtn');
    const decrementBtn = document.getElementById('decrementBtn');
    const resetBtn = document.getElementById('resetBtn');
    
    let count = 0;
    
    incrementBtn.addEventListener('click', function() {
        count++;
        counterElement.textContent = count;
    });
    
    decrementBtn.addEventListener('click', function() {
        count--;
        counterElement.textContent = count;
    });
    
    resetBtn.addEventListener('click', function() {
        count = 0;
        counterElement.textContent = count;
    });
});
