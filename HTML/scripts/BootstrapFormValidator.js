const form = document.getElementById('contactForm');
const successMessage = document.getElementById('successMessage');

form.addEventListener('submit', function (event) {
    // Prevent default submission and add 'was-validated' class.
    event.preventDefault();
    form.classList.add('was-validated');

    // If form is not valid, stop here and let Bootstrap show errors.
    if (!form.checkValidity()) {
        return;
    }

    // If form is valid, hide the form and display success message.
    form.style.display = 'none';
    successMessage.style.display = 'block';
});