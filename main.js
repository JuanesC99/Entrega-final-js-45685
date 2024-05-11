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


function handleSearch() {
    // Obtener el valor del input de búsqueda
    var query = document.getElementById('searchInput').value;
    
    // Redirigir al usuario a la página de resultados según el término de búsqueda
    window.location.href = "pages/tienda.html?q=" + encodeURIComponent(query);
}
