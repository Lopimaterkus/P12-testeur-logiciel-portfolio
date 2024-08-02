// Fonction pour ajouter la classe "navbarDark" (ma barre rose) à la barre de navigation lors du défilement
function handleNavbarScroll() {
    const header = document.querySelector(".navbar");
    window.onscroll = function () {
      const top = window.scrollY; // const qui recupere le nombre de px defilé depuis le haut
      if (top >= 100) {
        header.classList.add("navbarDark");
      } else {
        header.classList.remove("navbarDark");
      }
    };
  }
  
  // Fonction pour gérer la rétractation de la barre de navigation sur les petits appareils après un clic
  function handleNavbarCollapse() {
    const navLinks = document.querySelectorAll(".nav-item");
    const menuToggle = document.getElementById("navbarSupportedContent");
  
    navLinks.forEach((link) => {
      link.addEventListener("click", () => {
        new bootstrap.Collapse(menuToggle).toggle();
      });
    });
  }
  
  // Fonction pour créer dynamiquement des éléments HTML à partir du fichier JSON
  function createSkillsFromJSON() {
    const container = document.querySelector("#skills .container");
    let row = document.createElement("div");
    row.classList.add("row");
  
    // Charger le fichier JSON
    fetch("data/skills.json")
      .then((response) => response.json())
      .then((data) => {
        // Itérer à travers les données JSON data and creation HTML elements
        data.forEach((item, index) => {
          //Créer un élément de carte pour chaque compétence
          const card = document.createElement("div");
          card.classList.add("col-lg-4", "mt-4");
          card.innerHTML = `
                      <div class="card skillsText">
                          <div class="card-body">
                              <img class="border-image" src="./images/${item.image}" alt="${item.title}" loading="lazy"/>
                              <h3 class="card-title mt-3">${item.title}</h3>
                              <p class="card-text mt-3">${item.text}</p>
                          </div>
                      </div>
                 `;
          // ajout de alt et du loading !!!
          // Ajouter la carte à la ligne actuelle
          row.appendChild(card);
  
          // Si l'index est un multiple de 3 ou s'il s'agit du dernier élément, créer une nouvelle ligne
          if ((index + 1) % 3 === 0 || index === data.length - 1) {
            container.appendChild(row);
            row = document.createElement("div");
            row.classList.add("row");
          }
        });
      });
  }
  // Fonction pour créer dynamiquement des éléments HTML à partir du fichier JSON
  function createPortfolioFromJSON() {
    const container = document.querySelector("#portfolio .container");
    let row = document.createElement("div");
    row.classList.add("row");
  
    // Charger le fichier JSON
    fetch ("data/portfolio.json")
      .then((response) => response.json())
      .then((data) => {
        //Parcourir les données JSON et créer des éléments HTML
        data.forEach((item, index) => {
          const card = document.createElement("div");
          card.classList.add("col-lg-4", "mt-4");
          card.innerHTML = `
                  <div class="card portfolioContent">
                      <img class="card-img-top" src="images/${item.image}" alt="${item.title}" style="width:100%" loading="lazy">
                      <div class="card-body">
                          <h3 class="card-title">${item.title}</h3>
                          <p class="card-text">${item.text}</p>
                          <div class="text-center">
                              <a href="${item.link}" class="btn cli-rose" target="_blank">Lien</a>
                          </div>
                      </div>
                  </div>
                  `;
          // Ajouter la carte à la ligne actuelle
          row.appendChild(card); // erreur de frappe sur appendChild!!
  
          // Si l'index est un multiple de 3 ou si c'est le dernier élément, créer une nouvelle ligne
          if ((index + 1) % 3 === 0 || index === data.length - 1) {
            container.appendChild(row);
            row = document.createElement("div");
            row.classList.add("row");
          }
        });
      });
  }
  
  // Appeler les fonctions pour exécuter le code
  handleNavbarScroll();
  handleNavbarCollapse();
  createSkillsFromJSON();
  createPortfolioFromJSON();