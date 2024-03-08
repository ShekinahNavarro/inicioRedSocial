import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";
import { auth } from "./firebase.js"; 

const signUpForm = document.querySelector("#register-form");

signUpForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  const email = signUpForm["signup-email"].value;
  const password = signUpForm["signup-password"].value;

  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password)
    console.log(userCredential)

    Toastify({
        text: "Registrado",
        duration: 3000,
        destination: "https://github.com/apvarun/toastify-js",
        newWindow: true,
        close: true,
        gravity: "bottom", // `top` or `bottom`
        position: "left", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          background: "linear-gradient(to right, #00b09b, #96c93d)",
        },
        onClick: function(){} // Callback after click
      }).showToast();

} catch (error) {
    if (error.code === 'auth/email-already-in-use') {
      showMessage("Email already in use", "error")
    } else if (error.code === 'auth/invalid-email') {
      showMessage("Invalid email", "error")
    } else if (error.code === 'auth/weak-password') {
      showMessage("Weak password", "error")
    } else if (error.code) {
      showMessage("Something went wrong", "error")
    }
  }

});

/*
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
*/