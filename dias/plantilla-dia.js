const dayTemplates = {
  4: {
    title: "Mis videos favoritos",
    intro: "Añade los vídeos que quieras compartir y el espacio para tus comentarios.",
    sections: [
      { title: "Vídeos", prompt: "Escribe un título o enlace para cada vídeo.", type: "list", items: 3 },
      { title: "Notas", prompt: "Completa este espacio con tus comentarios.", size: "large" }
    ]
  },
  5: {
    title: "Nuestra primera cita",
    intro: "Completa los detalles que quieras conservar de ese día.",
    sections: [
      { title: "Detalles", prompt: "Anota la fecha, el lugar y otros datos que quieras recordar.", size: "medium" },
      { title: "Fotos y recuerdos", prompt: "Añade imágenes y escribe un pie para cada una.", type: "photos", items: 3 }
    ]
  },
  6: {
    title: "Sitios de Bratislava",
    intro: "Prepara una lista de lugares y espacio para tus recuerdos.",
    sections: [
      { title: "Lugares", prompt: "Añade nombres de sitios y, si quieres, enlaces o direcciones.", type: "list", items: 5 },
      { title: "Mapa o recuerdos", prompt: "Añade una imagen, un mapa o tus notas.", size: "large" }
    ]
  },
  7: {
    title: "Películas vistas",
    intro: "Guarda aquí las películas que habéis visto.",
    sections: [
      { title: "Lista de películas", prompt: "Anota el título y cualquier detalle que quieras añadir.", type: "list", items: 5 },
      { title: "Comentarios", prompt: "Escribe tus notas o valoraciones.", size: "medium" }
    ]
  },
  8: {
    title: "Billar",
    intro: "Reserva este espacio para fotos, partidas y anotaciones.",
    sections: [
      { title: "Partidas", prompt: "Anota fechas, puntuaciones u otros detalles.", size: "medium" },
      { title: "Fotos", prompt: "Añade imágenes y pies de foto.", type: "photos", items: 3 }
    ]
  },
  9: {
    title: "Cantantes favoritos",
    intro: "Añade artistas y canciones que quieras destacar.",
    sections: [
      { title: "Artistas y canciones", prompt: "Escribe nombres de artistas, canciones o enlaces.", type: "list", items: 5 },
      { title: "Notas", prompt: "Completa aquí cualquier detalle adicional.", size: "medium" }
    ]
  },
  10: {
    title: "10 cosas que me gustan de ti",
    intro: "Completa cada espacio con una de las diez cosas que quieras compartir.",
    sections: [
      { title: "Mis diez cosas", prompt: "Escribe una idea en cada línea.", type: "list", items: 10 }
    ]
  },
  11: {
    title: "Viajes que queremos hacer y sitios que hemos visitado juntos",
    intro: "Separa aquí los lugares que ya conocéis de los que queréis visitar.",
    sections: [
      { title: "Sitios visitados", prompt: "Añade lugares y notas del viaje.", type: "list", items: 4 },
      { title: "Viajes pendientes", prompt: "Anota destinos que queréis conocer.", type: "list", items: 4 }
    ]
  },
  12: {
    title: "Sopa de letras",
    intro: "Completa la cuadrícula y añade debajo las palabras que quieras incluir.",
    sections: [
      { title: "Cuadrícula", prompt: "Espacio para preparar la sopa de letras.", type: "grid", size: 12 },
      { title: "Palabras", prompt: "Escribe la lista de palabras que habrá que encontrar.", type: "list", items: 8 }
    ]
  },
  13: {
    title: "Sudoku",
    intro: "Usa la cuadrícula vacía para preparar el sudoku.",
    sections: [
      { title: "Cuadrícula 9 × 9", prompt: "Añade aquí los números del tablero.", type: "sudoku", size: 9 },
      { title: "Notas", prompt: "Deja instrucciones o una pista, si quieres.", size: "short" }
    ]
  },
  14: {
    title: "Muchas fotos mías",
    intro: "Añade tus fotos y completa los pies de foto.",
    sections: [
      { title: "Galería", prompt: "Reemplaza cada espacio por una foto.", type: "photos", items: 6 }
    ]
  },
  15: {
    title: "Get to know me quiz",
    intro: "Prepara las preguntas y completa las respuestas cuando quieras.",
    sections: [
      { title: "Preguntas", prompt: "Escribe las preguntas del quiz.", type: "list", items: 6 },
      { title: "Respuestas", prompt: "Añade aquí las respuestas o la clave del quiz.", size: "large" }
    ]
  },
  16: {
    title: "Recetas especiales o postres que nos unen",
    intro: "Guarda una receta y los detalles que quieras recordar.",
    sections: [
      { title: "Ingredientes", prompt: "Anota los ingredientes y las cantidades.", size: "medium" },
      { title: "Preparación", prompt: "Escribe los pasos de la receta.", size: "large" },
      { title: "Notas", prompt: "Añade el nombre de la receta u otros detalles.", size: "short" }
    ]
  },
  17: {
    title: "Momentos de Erasmus",
    intro: "Añade recuerdos, fechas, lugares y fotos de esta etapa.",
    sections: [
      { title: "Recuerdos", prompt: "Anota momentos o fechas que quieras conservar.", type: "list", items: 4 },
      { title: "Fotos", prompt: "Añade imágenes y pies de foto.", type: "photos", items: 4 }
    ]
  },
  18: {
    title: "Madrid primera visita",
    intro: "Completa los detalles y recuerdos de esta visita.",
    sections: [
      { title: "Detalles del viaje", prompt: "Anota fechas, lugares o actividades.", size: "medium" },
      { title: "Fotos y recuerdos", prompt: "Añade imágenes y pies de foto.", type: "photos", items: 3 }
    ]
  },
  19: {
    title: "Gran Canaria primera visita",
    intro: "Completa los detalles y recuerdos de esta visita.",
    sections: [
      { title: "Detalles del viaje", prompt: "Anota fechas, lugares o actividades.", size: "medium" },
      { title: "Fotos y recuerdos", prompt: "Añade imágenes y pies de foto.", type: "photos", items: 3 }
    ]
  },
  20: {
    title: "Crucigramas",
    intro: "Prepara la cuadrícula y añade las pistas para completar el crucigrama.",
    sections: [
      { title: "Cuadrícula", prompt: "Espacio para dibujar o insertar el crucigrama.", type: "grid", size: 11 },
      { title: "Pistas", prompt: "Escribe aquí las pistas y las respuestas que quieras añadir.", size: "large" }
    ]
  },
  21: {
    title: "Por ti es que soy",
    intro: "Completa este espacio con el mensaje que quieras dedicar.",
    sections: [
      { title: "Dedicatoria", prompt: "Escribe aquí tu texto.", size: "large" }
    ]
  },
  22: {
    title: "Playlist especial para ti",
    intro: "Añade canciones y enlaces para crear la playlist.",
    sections: [
      { title: "Canciones", prompt: "Escribe el título, artista o enlace de cada canción.", type: "list", items: 8 },
      { title: "Notas", prompt: "Añade aquí cualquier detalle que quieras compartir.", size: "medium" }
    ]
  },
  23: {
    title: "Fotos especiales",
    intro: "Añade las fotos que quieras conservar en esta página.",
    sections: [
      { title: "Galería", prompt: "Reemplaza cada espacio por una foto y añade un pie.", type: "photos", items: 6 }
    ]
  },
  24: {
    title: "Carta de Navidad",
    intro: "Completa este espacio con tu carta.",
    sections: [
      { title: "Carta", prompt: "Escribe aquí el texto de la carta.", size: "large" },
      { title: "Firma", prompt: "Añade aquí la firma.", size: "short" }
    ]
  }
};

function createWritingArea(size) {
  const area = document.createElement("div");
  area.className = "writing-area";
  if (size === "large" || size === "short") {
    area.classList.add("writing-area--" + size);
  }
  return area;
}

function createGrid(section) {
  const size = section.size;
  const grid = document.createElement("div");
  grid.className = section.type === "sudoku" ? "template-grid sudoku-grid" : "template-grid";
  grid.setAttribute("role", "grid");
  grid.setAttribute("aria-label", size + " por " + size + " casillas vacías");
  grid.style.setProperty("--grid-size", size);

  for (let row = 0; row < size; row++) {
    for (let column = 0; column < size; column++) {
      const cell = document.createElement("div");
      cell.className = "template-grid__cell";
      cell.setAttribute("role", "gridcell");
      if (section.type === "sudoku") {
        if (column < size - 1 && (column + 1) % 3 === 0) {
          cell.style.borderRightWidth = "2px";
        }
        if (row < size - 1 && (row + 1) % 3 === 0) {
          cell.style.borderBottomWidth = "2px";
        }
      }
      grid.appendChild(cell);
    }
  }

  return grid;
}

function createPhotos(count) {
  const gallery = document.createElement("div");
  gallery.className = "template-photos";

  for (let index = 0; index < count; index++) {
    const figure = document.createElement("figure");
    const placeholder = document.createElement("div");
    const caption = document.createElement("figcaption");
    figure.className = "template-photo";
    placeholder.className = "template-photo__placeholder";
    placeholder.textContent = "Añade una foto";
    caption.textContent = "Espacio para un pie de foto";
    figure.append(placeholder, caption);
    gallery.appendChild(figure);
  }

  return gallery;
}

function createSection(section) {
  const card = document.createElement("section");
  const heading = document.createElement("h2");
  const prompt = document.createElement("p");
  card.className = "template-card";
  heading.textContent = section.title;
  prompt.textContent = section.prompt;
  card.append(heading, prompt);

  if (section.type === "list") {
    const list = document.createElement("ol");
    list.className = "template-list";
    for (let index = 0; index < section.items; index++) {
      const item = document.createElement("li");
      item.appendChild(createWritingArea("short"));
      list.appendChild(item);
    }
    card.appendChild(list);
  } else if (section.type === "grid" || section.type === "sudoku") {
    card.appendChild(createGrid(section));
  } else if (section.type === "photos") {
    card.appendChild(createPhotos(section.items));
  } else {
    card.appendChild(createWritingArea(section.size));
  }

  return card;
}

const dayNumber = Number(document.body.dataset.day);
const template = dayTemplates[dayNumber];

if (!template) {
  throw new Error("No existe una plantilla para el día " + dayNumber + ".");
}

document.title = "Día " + String(dayNumber).padStart(2, "0") + " · " + template.title;

const content = document.getElementById("day-content");
const heading = document.createElement("header");
const eyebrow = document.createElement("p");
const title = document.createElement("h1");
const intro = document.createElement("p");
const sections = document.createElement("div");

heading.className = "template-heading";
eyebrow.className = "template-eyebrow";
eyebrow.textContent = "Día " + String(dayNumber).padStart(2, "0") + " · Adviento 2026";
title.textContent = template.title;
intro.className = "template-intro";
intro.textContent = template.intro;
sections.className = "template-sections";
heading.append(eyebrow, title, intro);

template.sections.forEach(function(section) {
  sections.appendChild(createSection(section));
});

content.append(heading, sections);
