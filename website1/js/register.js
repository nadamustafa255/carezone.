document.addEventListener('DOMContentLoaded', () => {
    const registrationForm = document.querySelector('.registration-form');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');

    registrationForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const name = nameInput.value.trim();
        const email = emailInput.value.trim();
        const password = passwordInput.value.trim();

        if (!name || !email || !password) {
            alert('Please fill in all fields.');
            return;
        }

        const userData = { name, email, password };
        localStorage.setItem('user', JSON.stringify(userData));

        console.log('User Data:', userData);

        nameInput.value = '';
        emailInput.value = '';
        passwordInput.value = '';
    });
});
