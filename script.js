const gateSelect = document.getElementById("gate");
const tableBody = document.getElementById("truth-table");
const logicGates = {
      OR: (a, b) => a || b,
      AND: (a, b) => a && b,
      NAND: (a, b) => !(a && b),
      NOR: (a, b) => !(a || b),
      XOR: (a, b) => a !== b,
      XNOR: (a, b) => a === b,
};
function generateTable(gate) {
      tableBody.innerHTML = "";
      for (let a = 0; a <= 1; a++) {
        for (let b = 0; b <= 1; b++) {
          const result = logicGates[gate](!!a, !!b) ? 1 : 0;
          const row = `<tr><td>${a}</td><td>${b}</td><td>${result}</td></tr>`;
          tableBody.innerHTML += row;
        }
      }
}
gateSelect.addEventListener("change", (e) => {
      generateTable(e.target.value);
});

generateTable(gateSelect.value);