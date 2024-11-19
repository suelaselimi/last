function validateForm() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name === '' || email === '' || message === '') {
        alert('Please fill in all the fields');
        return false;
    }

    // Simple email format validation
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!email.match(emailPattern)) {
        alert('Please enter a valid email address');
        return false;
    }

    // Form submission can be done here, or you can simulate with an alert
    alert('Your message has been sent successfully!');
    return true;
}
