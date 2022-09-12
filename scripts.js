// target each target
const inputs = document.querySelectorAll(".controls input");

// function to handle updates of controls
function handleUpdate() {
    console.log(this.value);
}

// attaching a change event listener that will call the handleupdate function
inputs.forEach(input => input.addEventListener("change", handleUpdate));

// attached a change event listener for when the mouse moves not just when the click is released
inputs.forEach(input => input.addEventListener("mousemove", handleUpdate));

