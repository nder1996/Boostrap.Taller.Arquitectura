    $(document).ready(function() {
        function mostrar(el, time, infi = false) {
            let p = $(el);
            let i = 0;
            // ejecutamos un intervalo de tiempo para los elementos
            let interval = setInterval(() => {

                // validamos que no sea el elemento 0 para aplicarle el none al anterior!
                if (i != 0) $(p[i - 1]).hide();
                //validamos si es igual al lenght para finalizar el bucle
                if (i == p.length) {
                    //retornamos i a 0
                    i = 0;
                    // limpiamos el intervalor para que no se ejecute mas si no es infinito
                    if (!infi) clearInterval(interval)
                }
                // aplicamos el display block
                $(p[i]).show("slow");
                // aumentamos i en 1
                i++;
            }, time)
        }
        mostrar('main div[id^="contenido"]', 2000, true);
    });
