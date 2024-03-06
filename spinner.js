// Spinner Floor Plan
function hideSpinner() {
    setTimeout(function () {
        const spinner = document.getElementById('spinner');
        if (spinner) {
            spinner.classList.remove('show');
        }
    }, 1);
}

// Call the function to hide the spinner
hideSpinner();
