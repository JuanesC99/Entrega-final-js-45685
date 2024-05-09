document.addEventListener('DOMContentLoaded', async function() {
    // Verificar si el usuario ya inició sesión anteriormente en la sesión actual del navegador
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    
    // Si el usuario no ha iniciado sesión en la sesión actual del navegador, se le pedirá que inicie sesión
    if (!isLoggedIn) {
        const { value: password } = await Swal.fire({
            title: "Enter your password",
            input: "password",
            inputLabel: "Password",
            inputPlaceholder: "Enter your password",
            inputAttributes: {
                maxlength: "10",
                autocapitalize: "off",
                autocorrect: "off"
            }
        });

        // Si el usuario ingresa una contraseña, se considera como inicio de sesión exitoso y se almacena en localStorage
        if (password) {
            localStorage.setItem('isLoggedIn', true);
            
            const Toast = Swal.mixin({
                toast: true,
                position: "top-end",
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar: true,
                didOpen: (toast) => {
                    toast.addEventListener('mouseenter', Swal.stopTimer);
                    toast.addEventListener('mouseleave', Swal.resumeTimer);
                }
            });
            Toast.fire({
                icon: "success",
                title: "Signed in successfully"
            });
        } else {
            // Si el usuario no ingresa una contraseña, se le informa que debe ingresar una contraseña
            Swal.fire("You must enter a password!");
        }
    }
});


// Define la variable swalWithBootstrapButtons antes del evento de clic
document.getElementById('deleteButton').addEventListener('click', () => {
    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, delete it!",
        cancelButtonText: "No, cancel!",
        reverseButtons: true
    }).then((result) => {
        if (result.isConfirmed) {
            // Elimina el archivo o elemento
            eliminarArchivo();
        } else if (
            result.dismiss === Swal.DismissReason.cancel
        ) {
            Swal.fire({
                title: "Cancelled",
                text: "Your file is safe :)",
                icon: "error"
            });
        }
    });
});

function eliminarArchivo() {
    var elemento = document.getElementById("archivo");
    if (elemento) {
        elemento.parentNode.removeChild(elemento);
        
        Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success"
        });
    } else {
        Swal.fire({
            title: "Error",
            text: "The file does not exist.",
            icon: "error"
        });
    }
}
