document.addEventListener("DOMContentLoaded", function () {
    const registroLink = document.getElementById("registro-link");

    registroLink.addEventListener("click", function (event) {
        event.preventDefault(); // Evita la navegación por defecto

        // Carga la página de registro (registro.html) de manera dinámica
        fetch("registro.html")
            .then(response => response.text())
            .then(html => {
                document.querySelector("main").innerHTML = html;
            })
            .catch(error => {
                console.error("Error al cargar la página de registro:", error);
            });
    });
});
