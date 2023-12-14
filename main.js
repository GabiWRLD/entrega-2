// Preguntas y respuestas sobre Musica
let preguntasMusica = [
    {
        pregunta: "¿Quién escribió 'Cuando Pase El Temblor'?",
        respuesta: "Gustavo Cerati"
    },
    {
        pregunta: "¿Quien es la voz de 'Callejeros'?",
        respuesta: "Patricio Fontanet"
    },
    // Agrega más preguntas y respuestas sobre Musica
  ];
  
  // Funciones
  function hacerPregunta() {
    let preguntaAleatoria = preguntasMusica[Math.floor(Math.random() * preguntasMusica.length)].pregunta;
    let respuestaUsuario = prompt(preguntaAleatoria);
  
    verificarRespuesta(preguntaAleatoria, respuestaUsuario);
  }
  
  function verificarRespuesta(pregunta, respuestaUsuario) {
    let preguntaCorrespondiente = preguntasMusica.find(preguntaMusica => preguntaMusica.pregunta === pregunta);
  
    if (preguntaCorrespondiente && respuestaUsuario.toLowerCase() === preguntaCorrespondiente.respuesta.toLowerCase()) {
      alert("¡Respuesta correcta!");
    } else {
      alert("Respuesta incorrecta. La respuesta correcta es: " + preguntaCorrespondiente.respuesta);
    }
  }
  
  // Llamar a la función para iniciar el juego
  hacerPregunta();
  