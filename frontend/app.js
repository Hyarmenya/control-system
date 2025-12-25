import { InicioPage } from "./pages/inicio.js";

const app = document.getElementById("app");

// Tabs
const tabs = document.createElement("div");
tabs.className = "top-tabs";
tabs.innerHTML = `
  <button class="active">Inicio</button>
  <button>Registros</button>
`;
app.appendChild(tabs);

// Toolbar
const toolbar = document.createElement("div");
toolbar.className = "toolbar";
toolbar.innerHTML = `
  <label><input type="checkbox"> Activa L</label>
  <label><input type="checkbox"> Activa V</label>
  <label><input type="checkbox"> Adquiere PD</label>

  <select>
    <option>Elige máquina</option>
    <option>Box</option>
    <option>Max</option>
    <option>CL</option>
  </select>

  <button class="button pulse">INICIAR</button>
  <button class="button stop">PARAR</button>

  <img src="assets/img/status_ok.png" height="32">
`;
app.appendChild(toolbar);

// Content
const content = document.createElement("div");
content.className = "content";
content.appendChild(InicioPage());
app.appendChild(content);
