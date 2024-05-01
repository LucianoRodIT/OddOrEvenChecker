document.getElementById("numberForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get the form data
    var formData = new FormData(this);

    // Extract the value entered by the user
    var number = formData.get("number");

    // Check if the input contains non-numerical characters
    if (!/^\d+$/.test(number)) {
        // Display an error message for non-numeric input
        document.getElementById("result").innerHTML = "That's not a number.";
    } else if (parseInt(number) < 1 || parseInt(number) > 1000) {
        // Display an error message for out-of-range input
        document.getElementById("result").innerHTML = "Please enter a number from 1 to 1000.";
    } else {
        // Send the form data to the server using AJAX
        fetch("/", {
            method: "POST",
            body: formData
        })
        .then(response => response.json())
        .then(data => {
            // Update the result div with the response
            document.getElementById("result").innerHTML = "The number <span class='matrix-number'>" + data.number + "</span>" + data.result + ".";
        })
        .catch(error => {
            console.error("Error:", error);
        });
    }
});
