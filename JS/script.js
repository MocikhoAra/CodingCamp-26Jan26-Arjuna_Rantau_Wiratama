window.onload = function() {
    let userName = prompt('Halo! tolong isi nama kamu klo kamu ga keberatan:');
    if (userName === null || userName === '') {
    userName = 'Guest';
    }
    document.getElementById('user-name').innerText = userName;

if (localStorage.theme === 'dark') {
    document.documentElement.classList.add('dark');
    document.getElementById('sun-icon').classList.remove('hidden');
    document.getElementById('moon-icon').classList.add('hidden');
} else {
    document.getElementById('sun-icon').classList.add('hidden');
    document.getElementById('moon-icon').classList.remove('hidden');
};
};

const darkButton = document.getElementById('dark-mode-toggle');
darkButton.addEventListener('click', function() {
    document.documentElement.classList.toggle('dark');
    const sunIcon = document.getElementById('sun-icon');
    const moonIcon = document.getElementById('moon-icon');
    sunIcon.classList.toggle('hidden');
    moonIcon.classList.toggle('hidden');

    if (document.documentElement.classList.contains('dark')) {
        localStorage.theme = 'dark';
    } else {
        localStorage.theme = 'light';
    }
});

const form = document.getElementById('message-form');
if (form) {
    form.addEventListener('submit', function(event) {
    event.preventDefault();
    const nama = document.getElementById('input-name').value;
    const tglLahir = document.getElementById('input-birthdate').value;
    const gender = document.querySelector('input[name="gender"]:checked').value;
    const email = document.getElementById('input-email').value;
    const pesan = document.getElementById('input-message').value;
    const waktu = new Date().toLocaleString();
    document.getElementById('output-time').innerText = waktu;
    document.getElementById('output-name').innerText = nama;
    document.getElementById('output-birthdate').innerText = tglLahir;
    document.getElementById('output-gender').innerText = gender;
    document.getElementById('output-email').innerText = email;
    document.getElementById('output-message').innerText = pesan;

    alert('Terima kasih telah mengirim pesan, ' + nama + '! Pesan Anda telah diterima pada ' + waktu + '.');
    });
};