//your JS code here. If required.
// Function to create a delay for a specified time (milliseconds)
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// Async function to handle the form submission and display the result
async function handleSubmit() {
  // Get the user input values
  const textInput = document.getElementById('text').value;
  const delayInput = parseInt(document.getElementById('delay').value);

  // If delayInput is not a valid number, return early
  if (isNaN(delayInput) || delayInput < 0) {
    document.getElementById('output').textContent = "Please enter a valid delay in milliseconds.";
    return;
  }

  // Clear the output before starting the delay
  document.getElementById('output').textContent = '';

  // Await the delay
  await delay(delayInput);

  // After the delay, display the user-provided text
  document.getElementById('output').textContent = textInput;
}

// Add an event listener to the button to trigger the async function
document.getElementById('btn').addEventListener('click', handleSubmit);
