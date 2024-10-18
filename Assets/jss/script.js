// Wait until the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {

    // Get the form element
    const form = document.querySelector('form');

    // Add an event listener for form submission
    form.addEventListener('submit', function(event) {
        // Prevent the form from submitting right away
        event.preventDefault();

        // Get form values
        const firstName = document.getElementById('firstName').value.trim();
        const lastName = document.getElementById('lastName').value.trim();
        const email = document.getElementById('email').value.trim();
        const password = document.getElementById('password').value.trim();
        const dob = document.getElementById('dob').value;
        const course = document.getElementById('courses').value;
        const gender = document.querySelector('input[name="gender"]:checked');

        // Validate form fields
        if (!firstName) {
            alert('First Name is required.');
            return;
        }

        if (!lastName) {
            alert('Last Name is required.');
            return;
        }

        if (!validateEmail(email)) {
            alert('Please enter a valid email address.');
            return;
        }

        if (!password) {
            alert('Password is required.');
            return;
        }

        if (!dob) {
            alert('Date of Birth is required.');
            return;
        }

        if (!course) {
            alert('Please select a course.');
            return;
        }

        if (!gender) {
            alert('Please select your gender.');
            return;
        }

        // If all validations pass, submit the form or perform further logic
        alert('Form submitted successfully!');
        form.submit(); // Uncomment this to submit the form (for example, to a server)
    });

    // Function to validate email format
    function validateEmail(email) {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(email);
    }

});
