function sendToWhatsApp(event) {
    event.preventDefault();  // Evita el envío tradicional del formulario

    // Obtén los valores del formulario
    const nombre = document.getElementById('cf-name').value;
    const email = document.getElementById('cf-email').value;
    const mensaje = document.getElementById('cf-message').value;

    // Crea el mensaje de WhatsApp
    const textoWhatsApp = `Hola, me llamo ${nombre}.\nEmail: ${email}.\nMensaje: ${mensaje}`;

    // Convierte el texto en formato de URL
    const urlWhatsApp = `https://wa.me/593968147173?text=${encodeURIComponent(textoWhatsApp)}`;

    // Redirige al usuario a WhatsApp
    window.open(urlWhatsApp, '_blank');
}