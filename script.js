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
  thead.innerHTML = "<tr>" + rows[0].map(h => `<th>${h}</th>`).join("") + "</tr>";

  // Body
  rows.slice(1).forEach(row => {
    tbody.innerHTML += "<tr>" + function renderTable(rows) {
  const thead = document.querySelector("thead");
  const tbody = document.querySelector("tbody");

  thead.innerHTML =
    "<tr>" + rows[0].map(h => `<th>${h}</th>`).join("") + "</tr>";

  rows.slice(1).forEach(row => {
    let tr = "<tr>";

    row.forEach((col, index) => {
      // Jika kolom terakhir atau berisi URL
      if (col.startsWith("http")) {
        tr += `
          <td>
            <a href="${col}" target="_blank" rel="noopener noreferrer">
              Buka Link
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
 + "</tr>";
  });
}

// Search
document.getElementById("searchInput").addEventListener("keyup", function() {
  const value = this.value.toLowerCase();
  document.querySelectorAll("tbody tr").forEach(row => {
    row.style.display = row.textContent.toLowerCase().includes(value) ? "" : "none";
  });
});

