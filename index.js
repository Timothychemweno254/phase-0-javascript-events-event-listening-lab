function addingEventListener() {
}

// Function that binds the event listener to the input#button element
function addingEventListener() {
    const input = document.getElementById('button'); // Grab the input element
  
    // Ensure that the element exists before adding the event listener
    if (input) {
      input.addEventListener('click', function() {
        alert('I was clicked!');
      });
    }
  }
  
  // Call the function to add the event listener
  addingEventListener();
  