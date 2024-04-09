document.addEventListener("DOMContentLoaded", function() {
    var immagini = document.querySelectorAll('.img_1, .img_3');

    function fadeIn(event) {
        var op = 0.1;
        event.target.style.opacity = op;
        event.target.style.display = '';
        var timer = setInterval(function () {
            if (op >= 1) {
                clearInterval(timer);
            }
            event.target.style.opacity = op;
            event.target.style.filter = 'alpha(opacity=' + op * 100 + ")";
            op += op * 0.1;
        }, 5);
    }
    immagini.forEach(function(img) {
        img.style.opacity = '1';  //imposto opacità iniziale//

        img.addEventListener('mouseover', function() {
            img.style.opacity = '1.2';  //opacità al passaggio del mouse//
        });
        img.addEventListener('mouseout', function() {
            img.style.opacity = '1';   //ritorna a opacità iniziale//
        });
    });
});

  document.addEventListener("DOMContentLoaded", function() {
    //nasconde il popup all'avvio
    var modal = document.getElementById("myModal");
    modal.style.display = "none";
   //Visualizza il popup dopo 9secondi(9000 millisecondi)
    setTimeout(function() {
        modal.style.display = "block";
    }, 9000);
    //Chiude il popup (x) quando l'utente clicca sul simbolo
    var close = document.getElementsByClassName("close") [0];
    close.onclick = function() {
        modal.style.display = "none";
    }
    }); 

// Questo lo facevo senza il createElement 
/* document.addEventListener("DOMContentLoaded", function() {
    let indiceImmagine = 0;

    function cambiaImmagine(n) {
        const immagini = document.querySelectorAll(".image-container img");
        indiceImmagine += n;
        
        if (indiceImmagine >= immagini.length) {
            indiceImmagine = 0;
        } else if (indiceImmagine < 0) {
            indiceImmagine = immagini.length - 1;
        }
        
        for (let img of immagini) {
            img.style.display = "none";
        }
        immagini[indiceImmagine].style.display = "block";
    }

    document.querySelector(".successivo").addEventListener("click", function() {
        cambiaImmagine(1);
    });

    document.querySelector(".precedente").addEventListener("click", function() {
        cambiaImmagine(-1);
    });

    // Inizializzazione per mostrare la prima immagine
    document.querySelectorAll(".image-container img")[indiceImmagine].style.display = "block";

    // Cambio immagine automatico ogni 7 secondi
    setInterval(function() {
        cambiaImmagine(1);
    }, 7000);
});  */


document.addEventListener("DOMContentLoaded", function() {
    const immaginiGalleria = [
        { src: 'recensione1.JPG', alt: 'Descrizione Immagine 1' },
        { src: 'recensione2.JPG', alt: 'Descrizione Immagine 2' },
        { src: 'recensione3.JPG', alt: 'Descrizione Immagine 3' },
    ];

    let indiceImmagine = 0;
    const containerGalleria = document.querySelector('.image-slider .image-container');
    // Assicurati che il contenitore sia vuoto prima di popolarlo
    containerGalleria.innerHTML = '';

    // Funzione per creare e mostrare le immagini
    function creaMostraImmagini() {
        immaginiGalleria.forEach((immagine, index) => {
            const imgElement = document.createElement('img');
            imgElement.src = immagine.src;
            imgElement.alt = immagine.alt;
            imgElement.style.display = index === indiceImmagine ? 'block' : 'none';
            containerGalleria.appendChild(imgElement);
        });
    }

    creaMostraImmagini(); // Chiamata iniziale per popolare la galleria

    // Funzione per cambiare l'immagine visualizzata
    function cambiaImmagine(n) {
        indiceImmagine += n;
        if (indiceImmagine >= immaginiGalleria.length) { indiceImmagine = 0; }
        if (indiceImmagine < 0) { indiceImmagine = immaginiGalleria.length - 1; }
        aggiornaGalleria();
    }

    // Funzione per aggiornare la galleria con l'immagine corrente
    function aggiornaGalleria() {
        document.querySelectorAll('.image-slider .image-container img').forEach((img, index) => {
            img.style.display = index === indiceImmagine ? 'block' : 'none';
        });
    }

    // Event listener per i pulsanti Avanti e Indietro
    document.querySelector(".successivo").addEventListener("click", function() {
        cambiaImmagine(1);
    });

    document.querySelector(".precedente").addEventListener("click", function() {
        cambiaImmagine(-1);
    });

    // Autoplay con setInterval
    setInterval(function() {
        cambiaImmagine(1);
    }, 7000);
});
