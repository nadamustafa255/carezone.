document.addEventListener('DOMContentLoaded', () => {
    const searchContainer = document.querySelector('.search-container');
    const searchInput = document.getElementById('search-input');
    const searchIcon = document.getElementById('search-icon');
  
    searchIcon.addEventListener('click', () => {
      searchContainer.classList.toggle('expanded'); // تبديل التوسيع
      if (searchContainer.classList.contains('expanded')) {
        searchInput.focus(); // تركيز على الحقل عند التوسيع
      }
    });
  
    document.addEventListener('click', (e) => {
      if (!searchContainer.contains(e.target)) {
        searchContainer.classList.remove('expanded'); // إغلاق الشريط إذا تم النقر خارجًا
      }
    });
  });


  

function checkLogin() {
    // التحقق إذا كان المستخدم مسجلًا
    let userLoggedIn = localStorage.getItem('userLoggedIn'); // أو استخدم sessionStorage إذا كنت تفضل

    if (userLoggedIn === 'true') {
        // إذا كان مسجلًا، يذهب إلى صفحة الملف الشخصي
        window.location.href = 'login.html'; // تأكد من تغيير الرابط إلى صفحة الملف الشخصي الخاصة بك
    } else {
        // إذا لم يكن مسجلًا، يذهب إلى صفحة تسجيل الدخول
        window.location.href = 'creat account.html'; // تأكد من تغيير الرابط إلى صفحة تسجيل الدخول
    }
}

     // استمع إلى الحدث عند النقر على الروابط
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
          anchor.addEventListener('click', function (e) {
            e.preventDefault(); // منع التمرير الافتراضي
      
            const targetId = this.getAttribute('href').substring(1); // الحصول على معرّف القسم
            const targetSection = document.getElementById(targetId); // العثور على القسم المستهدف
      
            // التمرير إلى القسم باستخدام smooth scrolling
            window.scrollTo({
              top: targetSection.offsetTop - 80, // التمرير إلى الجزء العلوي من القسم مع مراعاة الهامش
              behavior: 'smooth' // تأثير التمرير
            });
          });
        });
