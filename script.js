const sheetURL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vSTfwyjEDnf4Rps3kYqtrntUl8VMkWvur_Uz7iwRZAyfp8E-7DFLFGGnHHYwHQINdyEz7dqGCRNm9ue/pub?output=csv";

fetch(sheetURL)
  .then(res => res.text())
  .then(data => {
    const rows = data.split("\n").map(row => row.split(","));
    renderTable(rows);
  });

function renderTable(rows) {
  const thead = document.querySelector("thead");
  const tbody = document.querySelector("tbody");

  // Header
  thead.innerHTML =
    "<tr>" + rows[0].map(h => `<th>${h}</th>`).join("") + "</tr>";

  // Body
  tbody.innerHTML = "";

  rows.slice(1).forEach(row => {
    let tr = "<tr>";

    row.forEach(col => {
      if (col.startsWith("http")) {
        tr += `
          <td>
            <a href="${col}"
               target="_blank"
               rel="noopener noreferrer"
               class="link-btn">
               Buka
            </a>
          </td>
        `;
      } else {
        tr += `<td>${col}</td>`;
      }
    });

    tr += "</tr>";
    tbody.innerHTML += tr;
  });
}
