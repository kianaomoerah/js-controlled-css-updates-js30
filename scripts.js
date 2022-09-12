// target each target
const inputs = document.querySelectorAll(".controls input");

// function to handle updates of controls
function handleUpdate() {

    const suffix = this.dataset.sizing || "";

    // using the custom variable we created, and making this variable using this.name (note each input is given a corresponding name to target that input), which will variably set the value to what was selected
        // when we created the suffix variable, we can add that to the end which will add "px" to the end of the variable value allowing this to be adjusted accordingly (without we see that the value is changing but this is not readable code by the computer)
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix)
    
}

// attaching a change event listener that will call the handleupdate function
inputs.forEach(input => input.addEventListener("change", handleUpdate));

// attached a change event listener for when the mouse moves not just when the click is released
inputs.forEach(input => input.addEventListener("mousemove", handleUpdate));

