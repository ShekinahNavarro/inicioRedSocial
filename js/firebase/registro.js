import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";
import { auth, db } from "./firebase.js"; // Asegúrate de importar auth y db correctamente

const registerForm = document.getElementById("register-form");

registerForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const name = registerForm['name'].value;
    const email = registerForm['email'].value;
    const password = registerForm['password'].value;

    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;

        // Guardar el nombre en Firestore
        await addDoc(collection(db, 'users'), {
            name: name,
            email: email,
            userId: user.uid
        });

        // Ocultar el modal
        const signinModal = document.getElementById('signin-modal');
        const modal = bootstrap.Modal.getInstance(signinModal);
        modal.hide();

        // Limpiar el formulario
        registerForm.reset();
    } catch (error) {
        console.log(error);
    }
});
