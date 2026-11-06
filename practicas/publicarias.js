const feedback = {
  a1: '<strong>Qué podría pasar:</strong> una cita que no puedes abrir puede ser inventada. El aviso podría cancelar una actividad sin motivo. <strong>Actuación razonable:</strong> localiza una fuente verificable y confirma la decisión con la organización antes de difundirla.',
  a2: '<strong>Qué aporta esta elección:</strong> separas la recomendación de la IA de la decisión real. Abre el documento original, comprueba fecha y alcance, y consulta a quien organiza. Si no hay confirmación, deja el aviso pendiente.',
  a3: '<strong>Qué podría pasar:</strong> dos respuestas parecidas pueden repetir el mismo error. La coincidencia no sustituye una fuente localizable ni la confirmación de la organización. Contrasta fuera del chat antes de publicar.',
  b1: '<strong>Qué podría pasar:</strong> el público podría esperar maquinaria o servicios inexistentes. El aspecto de la imagen tampoco demuestra qué ofrece el negocio. Compara el cartel con el espacio y la oferta reales.',
  b2: '<strong>Qué aporta esta elección:</strong> ajustas el mensaje a lo que el taller ofrece. Pide cambios concretos, revisa si aún aparecen instalaciones inventadas y comprueba permiso de uso de los materiales incorporados.',
  b3: '<strong>Qué podría pasar:</strong> una nota pequeña quizá no corrija la expectativa creada por la escena principal. Revisa si la imagen sigue induciendo a error; si lo hace, cambia la imagen antes de difundirla.',
  c1: '<strong>Qué enseña este ejemplo:</strong> aquí todos los nombres son ficticios, pero en un proyecto real esas notas podrían pertenecer a personas. Practica con una versión reducida a plazas y turnos antes de subirla.',
  c2: '<strong>Qué aporta esta elección:</strong> la tarea se puede hacer con menos información. Comprueba que la versión reducida responde a la pregunta y revisa las condiciones de la herramienta antes de subir documentos reales.',
  c3: '<strong>Qué podría pasar:</strong> quitar datos después no evita haberlos compartido ya con la herramienta. Prepara primero una copia que conserve solo plazas y turnos; revisa el archivo antes de subirlo.'
};

document.querySelectorAll('[data-case]').forEach((section) => {
  const result = section.querySelector('.case-feedback');
  const buttons = section.querySelectorAll('[data-choice]');
  buttons.forEach((button) => button.addEventListener('click', () => {
    buttons.forEach((option) => option.setAttribute('aria-pressed', String(option === button)));
    result.innerHTML = feedback[button.dataset.choice];
    result.hidden = false;
  }));
});
