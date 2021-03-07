
// get the container of all keys
let container = document.querySelector('#key-container');

// add a event listener to this parent
window.addEventListener('keydown', (event) => {

    // get the data attribute key for the element where key was triggered
    let key = event.keyCode;

    // get the element on which the ky was pressed
    let element = document.querySelector(`div[data-key='${key}`);
    
    // check that such a element exists
    if(element == null)
        return;

    // add the playing class to the key that was pressed
    element.classList.add('key-pressed');

    // get the audio element corressponding to this key code
    let audioElement = document.querySelector(`audio[data-key='${key}'`);
    
    // check if the user pressed the wrong key
    if(audioElement == null)
        return;

    // in case the user presses a key multiple times,
    // rewind the key to the start
    audioElement.currentTime = 0;

    // play the audio element
    audioElement.play();

}, );

