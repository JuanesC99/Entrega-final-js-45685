
function handleSearch() {
    // Obtener el valor del input de búsqueda
    var query = document.getElementById('searchInput').value;
    
    // Redirigir al usuario a la página de resultados según el término de búsqueda
    window.location.href = "pages/tienda.html?q=" + encodeURIComponent(query);
}
document.addEventListener('DOMContentLoaded', function() {
    showPasswordPrompt();
});

let loginShown = false;

document.addEventListener('DOMContentLoaded', function() {
    if (!loginShown) {
        showPasswordPrompt();
        loginShown = true;
    }
});

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
            return new Promise((resolve) => {
                setTimeout(() => {
                    if (password === "password123") {
                        resolve();
                    } else {
                        Swal.showValidationMessage("Invalid password!");
                    }
                }, 1000);
            });
        }
    });

    if (password) {
        loginSuccess();
    }
}

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
            window.location.href = "index.html";
        }
    });
}
