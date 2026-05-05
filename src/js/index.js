const toggle = document.getElementById('menu-toggle');
  const menu = document.getElementById('nav-menu');

  toggle.addEventListener('click', () => {
    menu.classList.toggle('active');
  });

  function kirimPesan() {
    alert('Halaman akan otomatis membuka aplikasi WhatsApp dengan pesan yang sudah terisi. Pastikan aplikasi WhatsApp sudah terpasang di perangkat Anda.');
  }
    