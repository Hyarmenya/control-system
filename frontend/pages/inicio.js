export function InicioPage() {
  const container = document.createElement("div");

  // Tabla / grid principal
  container.innerHTML = `
    <div class="grid">
      <div>
        <div class="label">Actuar</div>
        <button class="button pulse">ACTUAR</button>
      </div>

      <div>
        <div class="label">Aceptar</div>
        <button class="button pulse">ACEPTAR</button>
      </div>

      <div>
        <div class="label">Sel. tolva</div>
        <div class="pack">
          <button class="button">OFF</button>
          <select class="combobox">
            <option>Tolva 1</option>
            <option>Tolva 2</option>
            <option>Ambas tolvas</option>
          </select>
        </div>
      </div>
    </div>
  `;

  return container;
}
