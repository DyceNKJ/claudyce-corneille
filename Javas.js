
// Lightbox functions
        function openLightbox(imageSrc, title) {
            const lightbox = document.getElementById('lightbox');
            const lightboxImage = document.getElementById('lightbox-image');
            const lightboxCaption = document.getElementById('lightbox-caption');
         
            lightboxImage.src = imageSrc;
            lightboxCaption.textContent = title;
            lightbox.classList.remove('hidden');
            document.body.style.overflow = 'hidden';
        }

        function closeLightbox() {
            const lightbox = document.getElementById('lightbox');
            lightbox.classList.add('hidden');
            document.body.style.overflow = '';
        }

        // Setup lightbox event listeners
        document.getElementById('close-lightbox').addEventListener('click', closeLightbox);
        document.getElementById('lightbox').addEventListener('click', function(e) {
            if (e.target === this) {
                closeLightbox();
            }
        });

        // Mobile menu toggle
        document.getElementById('mobile-menu-button').addEventListener('click', function() {
            const menu = document.getElementById('mobile-menu');
            menu.classList.toggle('hidden');
        });

        // Smooth scrolling for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
          
              e.preventDefault();
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
                
                // Close mobile menu if open
                const mobileMenu = document.getElementById('mobile-menu');
                if (!mobileMenu.classList.contains('hidden')) {
                    mobileMenu.classList.add('hidden');
                }
            });
        });

        // Portfolio Gallery
const portfolioItems = [
    
    { id: 1, category: 'design', image: 'JJK Blanc.png' },
    { id: 1, category: 'design', image: 'Imprimer.jpg' },
    { id: 1, category: 'design', image: 'B.jpg' },
    { id: 1, category: 'design', image: 'Flyer 2.jpg' },
    { id: 1, category: 'design', image: 'Piquancy.jpg' },
    { id: 1, category: 'design', image: 'Chips.jpg' },
    { id: 1, category: 'design', image: 'Design.jpg' },
    { id: 1, category: 'design', image: 'Coffeee.jpg' },
    { id: 1, category: 'design', image: 'Calendrier.jpg' },
    { id: 1, category: 'design', image: 'Bissap.jpg' },
    { id: 1, category: 'design', image: 'Coffee.jpg' },
    { id: 1, category: 'design', image: 'COTTURA.jpg' },
    { id: 1, category: 'design', image: 'Délice.jpg' },
    { id: 1, category: 'design', image: 'Dina Menu.jpg' },
    { id: 1, category: 'design', image: 'Flyers.jpg' },
    { id: 1, category: 'design', image: 'Horreur.jpg' },
    { id: 1, category: 'design', image: 'Kakemono.jpg' },
    { id: 1, category: 'design', image: 'LIVRE.jpg' },
    { id: 1, category: 'design', image: 'Boruto.jpg' },
    { id: 1, category: 'design', image: 'Logistique.jpg' },
    { id: 1, category: 'design', image: 'Mock up.jpg' },
    { id: 1, category: 'design', image: 'MonFlyer.jpg' },
    { id: 1, category: 'design', image: 'Petit.jpg' },
    { id: 1, category: 'design', image: 'Poster.jpg' },
    { id: 1, category: 'design', image: 'PosterAvengers.jpg' },
    { id: 1, category: 'design', image: 'Réseaux.jpg' },
    { id: 1, category: 'design', image: 'Restaurant.jpg' },
    { id: 1, category: 'design', image: 'Cinéma.jpg' },
    { id: 1, category: 'design', image: 'Samossa.jpg' },
    { id: 1, category: 'design', image: 'TheHill.jpg' },
    { id: 1, category: 'design', image: 'WILL.jpg' },
    { id: 1, category: 'design', image: 'BATEAU.jpg' },
    { id: 1, category: 'design', image: 'Menus.jpg' },
    { id: 1, category: 'design', image: 'Banners.jpg' },
    { id: 1, category: 'design', image: 'Menu.jpg' },
    { id: 1, category: 'design', image: 'Foret.png' },
    { id: 1, category: 'design', image: 'Mock up copie.jpg' },
    { id: 1, category: 'design', image: 'Soccer copie.jpg' },
    { id: 1, category: 'design', image: 'Basket-Ball.jpg' },
    { id: 1, category: 'design', image: 'Chareine.jpg' },
    { id: 1, category: 'design', image: 'Juliana Food second.jpg' },
    { id: 1, category: 'design', image: 'RAIL.jpg' },
    { id: 1, category: 'design', image: 'Luunaa.jpg' },
    { id: 1, category: 'design', image: 'Carte de visite.jpg' }
];

// Pagination variables
let currentPage = 1;
const itemsPerPage = 8;
let filteredItems = [...portfolioItems];
let currentFilter = 'design'; // 🔵 Affiche 'design' par défaut

// DOM elements
const galleryGrid = document.querySelector('.grid');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const pageInfo = document.getElementById('page-info');
const filterDesign = document.getElementById('filter-design');

// Render the gallery
function renderGallery() {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const paginatedItems = filteredItems.slice(startIndex, endIndex);
   
    galleryGrid.innerHTML = '';
   
    paginatedItems.forEach(item => {
        const card = document.createElement('div');
        card.className = 'portfolio-card bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300';
        card.innerHTML = `
            <div class="relative pb-2/3 h-48 cursor-pointer" onclick="openLightbox('${item.image}')">
                <img class="absolute h-full w-full object-cover" src="${item.image}">
                <div class="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <h3 class="text-white font-medium"></h3>
                </div>
            </div>
        `;
        galleryGrid.appendChild(card);
    });

    const totalPages = Math.ceil(filteredItems.length / itemsPerPage);
    pageInfo.textContent = `Page ${currentPage} sur ${totalPages}`;
   
    prevBtn.disabled = currentPage === 1;
    nextBtn.disabled = currentPage === totalPages;
}

// Filter by category
function filterItems(category) {
    currentFilter = category;
    currentPage = 1;
    filteredItems = portfolioItems.filter(item => item.category === category);
    renderGallery();

    // Update active button styles
    filterDesign.classList.remove('bg-blue-600', 'text-white');
    filterDesign.classList.add('bg-gray-100', 'text-gray-700');
}

// Event listeners
prevBtn.addEventListener('click', () => {
    if (currentPage > 1) {
        currentPage--;
        renderGallery();
    }
});

nextBtn.addEventListener('click', () => {
    const totalPages = Math.ceil(filteredItems.length / itemsPerPage);
    if (currentPage < totalPages) {
        currentPage++;
        renderGallery();
    }
});

filterDesign.addEventListener('click', () => filterItems('design'));

// Initialize gallery with design category
filterItems('design');

  function showService(type) {
    const devContent = document.getElementById('content-dev');
    const designContent = document.getElementById('content-design');
    const btnDev = document.getElementById('btn-dev');
    const btnDesign = document.getElementById('btn-design');
    
    if (type === 'dev') {
      devContent.classList.remove('hidden');
      designContent.classList.add('hidden');
      btnDev.classList.replace('bg-gray-300', 'bg-blue-600');
      btnDev.classList.replace('text-gray-800', 'text-white');
      btnDesign.classList.replace('bg-purple-600', 'bg-gray-300');
      btnDesign.classList.replace('text-white', 'text-gray-800');
    } else {
      designContent.classList.remove('hidden');
      devContent.classList.add('hidden');
      btnDesign.classList.replace('bg-gray-300', 'bg-purple-600');
      btnDesign.classList.replace('text-gray-800', 'text-white');
      btnDev.classList.replace('bg-blue-600', 'bg-gray-300');
      btnDev.classList.replace('text-white', 'text-gray-800');
    }
  }

  // Afficher/Masquer le bouton selon la position de scroll
window.addEventListener('scroll', function () {
  const btn = document.getElementById('backToTopBtn');
  if (window.scrollY > 300) {
    btn.classList.remove('hidden');
  } else {
    btn.classList.add('hidden');
  }
});

// Remonter en haut en douceur au clic
document.getElementById('backToTopBtn').addEventListener('click', function () {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const overlay = document.getElementById("glow-overlay");
  const originalText = "Développeur \n& Designer Créatif";
  const letters = originalText.split("");
  let index = 0;
  function typeLetterByLetter() {
    overlay.innerHTML = letters
      .slice(0, index)
      .join("")
      .replace(/\n/g, "<br>");
    index++;
    if (index <= letters.length) {
      setTimeout(typeLetterByLetter, 80); // vitesse
    } else {
      setTimeout(() => {
        overlay.innerHTML = "";
        index = 0;
        typeLetterByLetter();
      }, 3000); // pause avant relancement
    }
  }

  typeLetterByLetter();
});

      document.addEventListener("DOMContentLoaded", () => {
    const euroRate = 655.957; // 1 EUR ≈ 655.957 FCFA
    const usdRate = 600;      // taux estimé
    document.querySelectorAll('[data-fcfa]').forEach(el => {
      const fcfa = parseInt(el.dataset.fcfa);
      const eur = (fcfa / euroRate).toFixed(2);
      const usd = (fcfa / usdRate).toFixed(2);
      el.textContent = ` (~${eur} € / ${usd} $)`;
    });
  });

  document.addEventListener("DOMContentLoaded", async () => {
  const res = await fetch("posts.json");
  const posts = await res.json();
  const container = document.getElementById("blog-posts");
  posts.reverse().forEach(post => {
    const card = document.createElement("div");
    card.className = "bg-white shadow rounded overflow-hidden";
    card.innerHTML = `
      <img src="${post.image}" class="w-full h-48 object-cover" />
      <div class="p-4">
        <h3 class="text-xl font-bold mb-2">${post.title}</h3>
        <p class="text-gray-500 text-sm mb-2">${new Date(post.date).toLocaleDateString()}</p>
        <p class="text-gray-700 mb-4">${post.excerpt}</p>
        <a href="article.html?id=${post.id}" class="text-blue-600 hover:underline">Lire l'article</a>
      </div>
    `;
    container.appendChild(card);
  });
});

// Partie Assistant IA
const aiSteps = [
  { question: "Quel type de demande souhaitez-vous formuler ?", options: ["Choisir un service à réaliser", "Me contacter"] },
  {
    question: "Quel projet souhaitez-vous choisir ?",
    inputSelect: true,
    options: ["Développement web", "Design Graphique"]
  },
  {
    question: "Quel service précis voulez-vous ?",
    inputSelect: true,
    options: [] // Rempli dynamiquement ensuite
  },
  { question: "Pouvez-vous me donner votre adresse mail ?", input: true },
  { question: "Souhaitez-vous être recontacté ?", options: ["Oui", "Non"] }
];

const designGraphiqueServices = [
  "Flyer", "Carte de visite", "Carte d'invitation / Mariage", "Affiche média",
  "Logo simple", "Logo premium", "Kakemono / Roll-up", "Brochure 2 volets",
  "Brochure 3 volets", "Couverture page / profil", "Packaging simple",
  "Étiquette produit", "Menu restaurant / bar", "Maquette site vitrine",
  "Maquette Site vitrine complet"
];

const devWebServices = ["Création site web"];
const contactFormFields = [
  { question: "Quel est votre nom ?", input: true },
  { question: "Pouvez-vous me donner votre adresse mail ?", input: true },
  { question: "Quel est votre message ?", textarea: true }
];

let aiCurrentStep = 0;
const aiAnswers = [];
const aiChatBox = document.getElementById("ai-chat");
const aiOptionsBox = document.getElementById("ai-options");
function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function renderAiStep() {
  const isContact = aiAnswers[0] === "Me contacter";
  if (isContact && aiCurrentStep > 0 && aiCurrentStep <= contactFormFields.length) {
    const step = contactFormFields[aiCurrentStep - 1];
    aiChatBox.innerHTML += `<div class="mt-4">🤖 ${step.question}</div>`;
    aiOptionsBox.innerHTML = '';
    const input = step.textarea ? document.createElement("textarea") : document.createElement("input");
    if (!step.textarea) input.type = step.input ? "text" : "email";
    input.placeholder = step.textarea ? "Écrivez votre message ici..." : step.question;
    input.className = "w-full px-3 py-2 border rounded bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-400";
    aiOptionsBox.appendChild(input);
    const btn = document.createElement("button");
    btn.textContent = "Envoyer";
    btn.className = "mt-2 w-full px-3 py-2 bg-blue-600 text-white rounded hover:bg-blue-700";
    btn.onclick = () => {
      const value = input.value.trim();
      if (!value) {
        alert("Merci de remplir ce champ.");
        input.focus();
        return;
      }
      if (step.input && step.question.includes("mail") && !isValidEmail(value)) {
        alert("Merci d’entrer une adresse mail valide.");
        input.focus();
        return;
      }
      aiAnswers.push(value);
      aiChatBox.innerHTML += `<div class="text-blue-600">👤 ${value}</div>`;
      aiCurrentStep++;
      if (aiCurrentStep <= contactFormFields.length) {
        setTimeout(renderAiStep, 400);
      } else {
        sendContactLead();
      }
    };
    aiOptionsBox.appendChild(btn);
    input.focus();
    return;
  }

  const step = aiSteps[aiCurrentStep];
if (aiCurrentStep === 2) {
  if (aiAnswers[1] === "Design Graphique") {
    step.options = designGraphiqueServices;
  } else if (aiAnswers[1] === "Développement web") {
    step.options = devWebServices;
  }
}

  aiChatBox.innerHTML += `<div class="mt-4">🤖 ${step.question}</div>`;
  aiOptionsBox.innerHTML = '';

  if (step.input) {
    const input = document.createElement("input");
    input.type = "email";
    input.placeholder = "exemple@domaine.com";
    input.className = "w-full px-3 py-2 border rounded bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-400";
    aiOptionsBox.appendChild(input);
    const btn = document.createElement("button");
    btn.textContent = "Envoyer";
    btn.className = "mt-2 w-full px-3 py-2 bg-blue-600 text-white rounded hover:bg-blue-700";
    btn.onclick = () => {
      const email = input.value.trim();
      if (!isValidEmail(email)) {
        alert("Merci d’entrer une adresse mail valide.");
        input.focus();
        return;
      }
      aiAnswers.push(email);
      aiChatBox.innerHTML += `<div class="text-blue-600">👤 ${email}</div>`;
      aiCurrentStep++;
      setTimeout(renderAiStep, 400);
    };
    aiOptionsBox.appendChild(btn);
    input.focus();
  } else if (step.inputSelect) {
    const select = document.createElement("select");
    select.className = "w-full px-3 py-2 border rounded bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-400";
    const defaultOption = document.createElement("option");
    defaultOption.value = "";
    defaultOption.textContent = "-- Choisissez une option --";
    defaultOption.disabled = true;
    defaultOption.selected = true;
    select.appendChild(defaultOption);
    step.options.forEach(option => {
      const opt = document.createElement("option");
      opt.value = option;
      opt.textContent = option;
      select.appendChild(opt);
    });

    aiOptionsBox.appendChild(select);
    const btn = document.createElement("button");
    btn.textContent = "Valider";
    btn.className = "mt-2 w-full px-3 py-2 bg-blue-600 text-white rounded hover:bg-blue-700";
    btn.onclick = () => {
      if (!select.value) {
        alert("Merci de choisir une option.");
        select.focus();
        return;
      }
      aiAnswers.push(select.value);
      aiChatBox.innerHTML += `<div class="text-blue-600">👤 ${select.value}</div>`;
      aiCurrentStep++;
      setTimeout(renderAiStep, 400);
    };
    aiOptionsBox.appendChild(btn);
    select.focus();

  } else {
    // Couleurs fixes pour la première étape (3 options)
    const colorsForThree = ["#111827", "#111827", "#111827"]; // rouge, turquoise, jaune
    step.options.forEach((option, index) => {
      const btn = document.createElement("button");
      btn.textContent = option;
      if (aiCurrentStep === 0) {
        btn.className = "w-full px-3 py-2 text-left border rounded mb-2";
        btn.style.backgroundColor = colorsForThree[index];
        btn.style.color = "#fff";
        btn.style.border = "none";
      } else {
        btn.className = "w-full px-3 py-2 text-left bg-gray-100 hover:bg-blue-100 border rounded mb-2";
      }

      btn.onclick = () => {
        aiAnswers.push(option);
        aiChatBox.innerHTML += `<div class="text-blue-600">👤 ${option}</div>`;
        aiCurrentStep++;
        if (aiCurrentStep < aiSteps.length) {
          setTimeout(renderAiStep, 400);
        } else {
          sendAiLead();
        }
      };
      aiOptionsBox.appendChild(btn);
    });
  }
}

function sendAiLead() {
  emailjs.send("service_5on4b1g", "template_jx28yjt", {
    from_name: "Assistant IA NEKO",
    from_email: aiAnswers[3], // ✅ adresse mail saisie
    service: aiAnswers[0],    // ✅ "Choisir un projet"
    message: `Projet : ${aiAnswers[1]}\nService précis : ${aiAnswers[2]}\nRecontacté : ${aiAnswers[4]}`
  })

  .then(() => {
    aiChatBox.innerHTML += `
      <div class="mt-6 p-4 border border-green-600 rounded bg-green-50 text-green-700 font-medium">
        ✅ Merci ! vos infos ont bien été transmises.
        <br>📬 Vous recevrez une réponse par mail très bientôt.
      </div>
    `;

    aiOptionsBox.innerHTML = `
      <div class="mt-4 text-center">
        <button onclick="location.reload()" class="mt-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
          🔄 Recommencer
        </button>
      </div>
    `;
  })

  .catch(error => {
    aiChatBox.innerHTML += `
      <div class="mt-6 p-4 border border-red-600 rounded bg-red-50 text-red-700 font-medium">
        ❌ Une erreur est survenue : ${JSON.stringify(error)}
      </div>
    `;

    aiOptionsBox.innerHTML = `
      <div class="mt-4 text-center">
        <button onclick="location.reload()" class="mt-2 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700">
          🔁 Réessayer
        </button>
      </div>
    `;
  });
}


function sendContactLead() {
  emailjs.send("service_5on4b1g", "template_jx28yjt", {
    from_name: aiAnswers[1],
    from_email: aiAnswers[2],
    service: aiAnswers[0],
    message: aiAnswers[3]
  })

    .then(() => {
      aiChatBox.innerHTML += `
        <div class="mt-6 p-4 border border-green-600 rounded bg-green-50 text-green-700 font-medium">
          ✅ Merci pour votre message !
          <br>📬 Je vous répondrai très bientôt.
        </div>
      `;

      aiOptionsBox.innerHTML = `
        <div class="mt-4 text-center">
          <button onclick="location.reload()" class="mt-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
            🔄 Recommencer
          </button>
        </div>
      `;
    })

    .catch(error => {
      aiChatBox.innerHTML += `
        <div class="mt-6 p-4 border border-red-600 rounded bg-red-50 text-red-700 font-medium">
          ❌ Une erreur est survenue : ${JSON.stringify(error)}
        </div>
      `;
      aiOptionsBox.innerHTML = `
        <div class="mt-4 text-center">
          <button onclick="location.reload()" class="mt-2 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700">
            🔁 Réessayer
          </button>
        </div>
      `;
    });
}

document.addEventListener("DOMContentLoaded", renderAiStep);
document.addEventListener("DOMContentLoaded", () => {
    // Développement Web - images à faire tourner
    const devImages = [
      'Developpement-web.jpg',
      'Ordi.jpg'
    ];
    const devImgElement = document.getElementById('dev-image');
    let devIndex = 0;
    setInterval(() => {
      devImgElement.style.opacity = 0;
      setTimeout(() => {
        devIndex = (devIndex + 1) % devImages.length;
        devImgElement.src = devImages[devIndex];
        devImgElement.style.opacity = 1;
      }, 1000);
    }, 3500);
    
    // Design Graphique - images à faire tourner
    const designImages = [
      'Graphique.jpg',
      'actualizate2.webp' // remplace par ta deuxième image design
    ];
    const designImgElement = document.getElementById('design-image');
    let designIndex = 0;
    setInterval(() => {
      designImgElement.style.opacity = 0;
      setTimeout(() => {
        designIndex = (designIndex + 1) % designImages.length;
        designImgElement.src = designImages[designIndex];
        designImgElement.style.opacity = 1;
      }, 1000);
    }, 3500);
  });

  const slides = document.querySelectorAll("#background-slider .bg-slide"); 
const dots = document.querySelectorAll(".carousel-dot");
let current = 0;
function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove("opacity-100");
    slide.classList.add("opacity-0");
    dots[i].classList.remove("bg-white");
    dots[i].classList.add("bg-white/50");
  });

  slides[index].classList.add("opacity-100");
  slides[index].classList.remove("opacity-0");
  dots[index].classList.add("bg-white");
  dots[index].classList.remove("bg-white/50");
  current = index;
}

function showNextSlide() {
  const next = (current + 1) % slides.length;
  showSlide(next);
}

// Lancer le slider automatiquement toutes les 5 secondes
let interval = setInterval(showNextSlide, 5000);

// Écouteurs sur les dots pour navigation manuelle
dots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    clearInterval(interval); // stop auto
    showSlide(index);
    interval = setInterval(showNextSlide, 5000); // relance
  });
});

// Init
showSlide(current);
  const lastUpdatedElem = document.getElementById('last-updated');
  if(lastUpdatedElem){
    const lastModified = document.lastModified;
    function formatDate(dateStr) {
      const date = new Date(dateStr);
      const options = {
        year: 'numeric', month: '2-digit', day: '2-digit',
        hour: '2-digit', minute: '2-digit'
      };
      return date.toLocaleDateString('fr-FR', options).replace(',', ' à');
    }

    lastUpdatedElem.textContent = 'Dernière mise à jour : ' + formatDate(lastModified);
  }

    document.querySelectorAll('.faq-item').forEach(item => {
    item.addEventListener('click', () => {
      const answer = item.querySelector('p');
      if (answer.classList.contains('hidden')) {
        answer.classList.remove('hidden');
      } else {
        answer.classList.add('hidden');
      }
    });
  });