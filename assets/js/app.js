
var coders = [{nombre: "Fiorella Quispe", foto: "1.png"},{nombre: "Lourdes Vilchez", foto: "2.png"},
							{nombre: "Leydi Maldonado", foto: "3.png"},{nombre: "Yessenia Huamán", foto: "4.png"},
							{nombre: "Miriam Mendoza", foto: "5.png"},{nombre: "Elizabeth Condori", foto: "6.png"}];

var ruta = "assets/images/"; //ruta principal de las fotos.

function crearGrid(){
	var frag = document.createDocumentFragment();
	var gridContainer = document.createElement("div");
	var h2 = document.createElement("h2");
	var title = document.createTextNode("Nuestras coders");
	h2.appendChild(title);
	var line = document.createElement("div");
	line.classList.add("line");
	gridContainer.appendChild(h2);
	gridContainer.appendChild(line);

		for (var i = 0; i < coders.length; i++) {

			var grid = document.createElement("div");
			grid.classList.add("container-coder");
			var photo = document.createElement("img");
			photo.setAttribute("src", ruta + coders[i].foto);
			photo.setAttribute("alt", coders[i].nombre);
			var text = document.createElement("div");
			text.classList.add("text");
			text.innerHTML = coders[i].nombre;

			grid.appendChild(photo);
			grid.appendChild(text);
			gridContainer.appendChild(grid);
			}
	frag.appendChild(gridContainer);
	document.body.appendChild(frag);
}
crearGrid();
