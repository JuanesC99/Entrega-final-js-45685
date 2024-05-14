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


            // Crear elementos del navbar
            var navbar = document.getElementById("navbar");




            var cardData = {
                imageUrl: "../img/7d5d665f92c09858439458678bc879a4.gif",
                title: "Título de la Card",
                description: "Descripción de la Card.",
                buttonText: "Ir al carrito",
                buttonUrl: "../pages/card-view.html" // Ruta relativa a la página card-view.html
            };
        
            // Crear elementos de la card
            var cardContainer = document.getElementById("cardContainer");
        
            var card = document.createElement("div");
            card.classList.add("card");
        
            var cardImage = document.createElement("img");
            cardImage.classList.add("card-img");
            cardImage.src = cardData.imageUrl;
        
            var cardContent = document.createElement("div");
            cardContent.classList.add("card-content");
        
            var cardTitle = document.createElement("h3");
            cardTitle.classList.add("card-title");
            cardTitle.textContent = cardData.title;
        
            var cardDescription = document.createElement("p");
            cardDescription.classList.add("card-description");
            cardDescription.textContent = cardData.description;
        
            var cardButton = document.createElement("a");
            cardButton.classList.add("card-button");
            cardButton.textContent = cardData.buttonText;
            cardButton.href = cardData.buttonUrl;
        
            // Agregar elementos a la card
            cardContent.appendChild(cardTitle);
            cardContent.appendChild(cardDescription);
            cardContent.appendChild(cardButton);
        
            card.appendChild(cardImage);
            card.appendChild(cardContent);
        
            cardContainer.appendChild(card);


            var cardData = {
                imageUrl: "../img/7d5d665f92c09858439458678bc879a4.gif",
                title: "Título de la Card",
                description: "Descripción de la Card.",
                buttonText: "Ir al carrito",
                buttonUrl: "../pages/carrito.html" // Ruta relativa a la página card-view.html
            };

            
            // Crear elementos de la card
            var cardContainer = document.getElementById("cardContainer");
        
            var card = document.createElement("div");
            card.classList.add("card");
        
            var cardImage = document.createElement("img");
            cardImage.classList.add("card-img");
            cardImage.src = cardData.imageUrl;
        
            var cardContent = document.createElement("div");
            cardContent.classList.add("card-content");
        
            var cardTitle = document.createElement("h3");
            cardTitle.classList.add("card-title");
            cardTitle.textContent = cardData.title;
        
            var cardDescription = document.createElement("p");
            cardDescription.classList.add("card-description");
            cardDescription.textContent = cardData.description;
        
            var cardButton = document.createElement("a");
            cardButton.classList.add("card-button");
            cardButton.textContent = cardData.buttonText;
            cardButton.href = cardData.buttonUrl;
        
            // Agregar elementos a la card
            cardContent.appendChild(cardTitle);
            cardContent.appendChild(cardDescription);
            cardContent.appendChild(cardButton);
        
            card.appendChild(cardImage);
            card.appendChild(cardContent);
        
            cardContainer.appendChild(card);

});
