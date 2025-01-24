document.addEventListener('DOMContentLoaded', () => {
    // العثور على نموذج الدخول
    const loginForm = document.querySelector('.login-form');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');

    // تحقق إذا كان النموذج موجودًا
    if (!loginForm) {
        console.error('loginForm not found');
        return;
    }

    // التعامل مع الحدث عند تقديم النموذج
    loginForm.addEventListener('submit', (event) => {
        event.preventDefault(); // إيقاف الإجراء الافتراضي

        const email = emailInput.value.trim();
        const password = passwordInput.value.trim();

        // التحقق من وجود البريد الإلكتروني وكلمة المرور
        if (!email || !password) {
            alert('Please enter both email and password.');
            return;
        }

        // التحقق من وجود بيانات المستخدم المخزنة في LocalStorage
        const storedUser = localStorage.getItem('user');

        if (storedUser) {
            const user = JSON.parse(storedUser);

            if (user.email === email && user.password === password) {
                alert('Login successful!');
                window.location.href = 'home.html'; // الانتقال إلى الصفحة الرئيسية
            } else {
                alert('Invalid email or password!');
            }
        } else {
            alert('No registered users found!');
        }
    });
});



//console.log(localStorage.getItem('user'));