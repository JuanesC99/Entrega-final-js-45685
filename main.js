// Función para manejar la búsqueda
function handleSearch() {
    var query = document.getElementById('searchInput').value;
    // Redirige al usuario a la página de resultados según el término de búsqueda
    window.location.href = "pages/tienda.html?q=" + encodeURIComponent(query);
}

// Función para mostrar el cuadro de diálogo de inicio de sesión
async function showPasswordPrompt() {
    const { value: password } = await Swal.fire({
        title: "Enter your password",
        input: "password",
        inputLabel: "Password",
        inputPlaceholder: "Enter your password",
        inputAttributes: {
            maxlength: "10",
            autocapitalize: "off",
            autocorrect: "off"
        },
        showCancelButton: true,
        confirmButtonText: "Login",
        cancelButtonText: "Cancel",
        showLoaderOnConfirm: true,
        preConfirm: (password) => {
            // Devuelve una promesa que se resuelve después de 1 segundo (simulando una verificación de contraseña)
            return new Promise((resolve) => {
                setTimeout(() => {
                    if (password === "1234") { // Reemplaza "1234" con tu lógica de validación de contraseña
                        resolve(); // Resuelve la promesa si la contraseña es correcta
                    } else {
                        Swal.showValidationMessage("Invalid password!"); // Muestra un mensaje de error si la contraseña es incorrecta
                    }
                }, 1000); // Espera 1 segundo antes de resolver la promesa
            });
        }
    });

    if (password) {
        loginSuccess(); // Llama a la función loginSuccess() si la contraseña es válida
    }
}

// Función para manejar el inicio de sesión exitoso
function loginSuccess() {
    Swal.fire({
        icon: "success",
        title: "Logged in successfully!",
        timer: 1500,
        timerProgressBar: true,
        showConfirmButton: false
    }).then(() => {
        // Redirige solo si la página de inicio no es la actual
        if (window.location.pathname !== "/index.html") {
            window.location.href = "../index.html"; // Redirige a la página de inicio después del inicio de sesión exitoso
        }
    });
}

// Event listener para mostrar el cuadro de diálogo de inicio de sesión cuando la página se carga
document.addEventListener('DOMContentLoaded', function() {
    showPasswordPrompt();
});
