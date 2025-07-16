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
    
    { id: 1, category: 'design', image: 'DNKJ.jpg' },
    { id: 1, category: 'design', image: 'Imprimer.jpg' },
    { id: 1, category: 'design', image: 'B.jpg' },
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
    { id: 1, category: 'design', image: 'Luunaa.jpg' }
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
                <img class="absolute h-full w-full object-cover" src="${item.image}" alt="${item.title}">
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