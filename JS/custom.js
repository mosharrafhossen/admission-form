const form = document.getElementById('applicationForm');
const status = document.getElementById('status');

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const dob = document.getElementById('dob').value;
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const address = document.getElementById('address').value.trim();
    const education = document.getElementById('education').value;
    const course = document.getElementById('course').value;
    const gender = document.querySelector('input[name="gender"]:checked');
    const transcript = document.getElementById('transcript').files[0];

    if(!name || !dob || !email || !phone || !address || !education || !course || !gender || !transcript) {
        status.style.color = 'red';
        status.textContent = 'সকল প্রয়োজনীয় ফিল্ড পূরণ করুন।';
        return;
    }

    if(!validateEmail(email)) {
        status.style.color = 'red';
        status.textContent = 'সঠিক ইমেইল লিখুন।';
        return;
    }

    if(!validatePhone(phone)) {
        status.style.color = 'red';
        status.textContent = 'সঠিক ফোন নম্বর লিখুন।';
        return;
    }

    status.style.color = 'green';
    status.textContent = 'আপনার আবেদন সফলভাবে পাঠানো হয়েছে!';
    form.reset();
});

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function validatePhone(phone) {
    const re = /^01[3-9]\d{8}$/;
    return re.test(phone);
}
