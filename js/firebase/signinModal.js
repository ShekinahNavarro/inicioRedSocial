
import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js"
import { auth } from "./firebase.js"

// Función para mostrar el modal de inicio de sesión
const showSigninModal = () => {
    const signinModal = document.getElementById('signinModal');
    signinModal.style.display = 'block';
};

// Función para ocultar el modal de inicio de sesión
const hideSigninModal = () => {
    const signinModal = document.getElementById('signinModal');
    signinModal.style.display = 'none';
};

// Manejar el clic en el enlace "Iniciar sesión"
const signinLink = document.getElementById('signinLink');
signinLink.addEventListener('click', showSigninModal);

// Manejar el clic en el botón "Cerrar" del modal
const closeSigninModalButton = document.querySelector('.close');
closeSigninModalButton.addEventListener('click', hideSigninModal);

// Manejar el clic en cualquier parte fuera del modal para cerrarlo
window.addEventListener('click', (event) => {
    const signinModal = document.getElementById('signinModal');
    if (event.target === signinModal) {
        hideSigninModal();
    }
});

// Traemos el form necesario
const signinForm = document.getElementById("signinForm");

signinForm.addEventListener('submit', async (e) => {
    // Para prevenir que la página se recargue
    e.preventDefault();

    // Accedemos a los elementos con notación de corchetes
    const email = signinForm['email-signin'].value;
    const password = signinForm['password-signin'].value;

    try {
        const credentials = await signInWithEmailAndPassword(auth, email, password);
        console.log(credentials);

        // Ocultar el modal
        hideSigninModal();
    }
    catch (error) {
        console.log(error);
    }
});
