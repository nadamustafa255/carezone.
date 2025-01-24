document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('resetPasswordForm'); // تحديد الـ form بواسطة الـ id

    if (form) {
        form.addEventListener('submit', function(event) {
            event.preventDefault();  // منع تنفيذ السلوك الافتراضي للـ form (إعادة تحميل الصفحة)

            const email = document.getElementById('email').value; // الحصول على قيمة البريد الإلكتروني

            if (email) {
                // هنا يتم التعامل مع إعادة تعيين كلمة المرور
                console.log('Reset password request for email: ' + email);
                // يمكنك هنا إرسال البيانات إلى الخادم أو عرض رسالة للمستخدم
                alert("Password reset link has been sent to your email.");
            } else {
                alert("Please enter a valid email.");
            }
        });
    } else {
        console.error('Form element not found!');
    }
});
