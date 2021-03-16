// select the inputs
let inputs = document.querySelectorAll("input");

function inputChangeHandle()
{
	// get the suffix for values of input
	let suffix = this.dataset.suffix;

	// add this property t the document
	document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);	
}

inputs.forEach(input => input.addEventListener("change", inputChangeHandle));

inputs.forEach(input => input.addEventListener("mousemove", inputChangeHandle));
