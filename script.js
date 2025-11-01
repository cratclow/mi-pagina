document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const nombre = this.nombre.value;
  const telefono = this.telefono.value;
  const mensaje = this.mensaje.value;
  const numeroWhatsApp = '525588665380'; // ← Tu número real

  // Validar número
  if (!/^\d{10,15}$/.test(numeroWhatsApp)) {
    alert('El número de WhatsApp no es válido. Debe tener entre 10 y 15 dígitos sin espacios ni símbolos.');
    return;
  }

  const texto = `Hola, soy ${nombre}. Mi teléfono es ${telefono}. Quiero preguntar: ${mensaje}`;
  const url = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(texto)}`;

  alert(`Enviando mensaje a WhatsApp: ${numeroWhatsApp}`);
  window.open(url, '_blank');
});

document.querySelector('.menu-toggle').addEventListener('click', () => {
  document.querySelector('.navbar ul').classList.toggle('show');
});

