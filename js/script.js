const menuItems = [
  {
    category: "hot-coffee",
    name: "Espresso",
    price: 450,
    description: "A quick, concentrated shot with a clean finish.",
    tag: "Classic",
  },
  {
    category: "hot-coffee",
    name: "Cortado",
    price: 550,
    description: "Balanced espresso with a soft, creamy texture.",
    tag: "Signature",
  },
  {
    category: "hot-coffee",
    name: "Latte",
    price: 600,
    description: "Smooth espresso and steamed milk with a mellow body.",
    tag: "House",
  },
  {
    category: "hot-coffee",
    name: "Cappuccino",
    price: 600,
    description: "Espresso, milk foam, and silky texture in classic form.",
    tag: "Classic",
  },
  {
    category: "hot-coffee",
    name: "Mocha",
    price: 650,
    description: "Dark chocolate meets espresso and creamy milk.",
    tag: "Favourites",
  },
  {
    category: "hot-coffee",
    name: "Spanish Latte",
    price: 650,
    description: "Sweet, lightly spiced, and softly comforting.",
    tag: "House",
  },
  {
    category: "hot-coffee",
    name: "Vanilla Latte",
    price: 650,
    description: "Vanilla sweetness folded into a smooth espresso base.",
    tag: "Favourites",
  },
  {
    category: "hot-coffee",
    name: "Caramel Latte",
    price: 650,
    description: "Toffee-like sweetness with a soft finish.",
    tag: "Favourites",
  },
  {
    category: "cold-coffee",
    name: "Iced Mocha",
    price: 700,
    description: "Chocolate and espresso, chilled and velvety.",
    tag: "Cold",
  },
  {
    category: "cold-coffee",
    name: "Iced Latte",
    price: 700,
    description: "Clean espresso, chilled milk, and easy balance.",
    tag: "Cold",
  },
  {
    category: "cold-coffee",
    name: "Iced Spanish Latte",
    price: 700,
    description: "Cool, sweet, and lightly spiced for easy sipping.",
    tag: "Cold",
  },
  {
    category: "cold-coffee",
    name: "Iced Vanilla Latte",
    price: 700,
    description: "A chilled vanilla-forward coffee with a mellow finish.",
    tag: "Cold",
  },
  {
    category: "cold-coffee",
    name: "Iced Caramel Latte",
    price: 700,
    description: "Smooth caramel notes with iced espresso and milk.",
    tag: "Cold",
  },
  {
    category: "non-coffee",
    name: "Dark Hot Chocolate",
    price: 650,
    description: "Rich chocolate warmth with a deep cocoa finish.",
    tag: "Classic",
  },
  {
    category: "non-coffee",
    name: "Peanut Butter Hot Chocolate",
    price: 700,
    description: "A nutty, creamy sip with chocolate depth.",
    tag: "House",
  },
  {
    category: "non-coffee",
    name: "Iced Chocolate",
    price: 700,
    description: "Chilled cocoa, smooth and refreshing.",
    tag: "Cold",
  },
  {
    category: "pour-over",
    name: "Cold Brew",
    price: 750,
    description: "Clean, mellow coffee with a light and smooth character.",
    tag: "Pour Over",
  },
  {
    category: "drinks",
    name: "Extra Shot",
    price: 400,
    description: "Add one more espresso shot to your drink.",
    tag: "Add-on",
  },
  {
    category: "drinks",
    name: "Extra Pump — Vanilla/Caramel",
    price: 100,
    description: "Sweeten your drink with a vanilla or caramel boost.",
    tag: "Add-on",
  },
  {
    category: "burgers",
    name: "Classic Chicken",
    price: 395,
    description:
      "<!-- TODO: Replace placeholder ingredients with official Mazi menu ingredients --> A simple chicken burger and a classic crowd favourite.",
    tag: "Chicken",
  },
  {
    category: "burgers",
    name: "BYG Zinger",
    price: 575,
    description:
      "<!-- TODO: Replace placeholder ingredients with official Mazi menu ingredients --> Crispy chicken with bold seasoning and a satisfying bite.",
    tag: "Chicken",
  },
  {
    category: "burgers",
    name: "Chicken Supreme",
    price: 575,
    description:
      "<!-- TODO: Replace placeholder ingredients with official Mazi menu ingredients --> A juicy, layered burger for a more filling bite.",
    tag: "Chicken",
  },
  {
    category: "burgers",
    name: "Crispy Magic Jr",
    price: 425,
    description:
      "<!-- TODO: Replace placeholder ingredients with official Mazi menu ingredients --> A compact chicken burger with a crisp finish.",
    tag: "Chicken",
  },
  {
    category: "burgers",
    name: "BYG Zyngy",
    price: 575,
    description:
      "<!-- TODO: Replace placeholder ingredients with official Mazi menu ingredients --> A zesty burger made for those who like a little extra kick.",
    tag: "Chicken",
  },
  {
    category: "burgers",
    name: "Classic Vintage",
    price: 575,
    description:
      "<!-- TODO: Replace placeholder ingredients with official Mazi menu ingredients --> A timeless beef burger built for comfort.",
    tag: "Beef",
  },
  {
    category: "burgers",
    name: "Vintage Double",
    price: 625,
    description:
      "<!-- TODO: Replace placeholder ingredients with official Mazi menu ingredients --> Two beef layers and a fuller, richer finish.",
    tag: "Beef",
  },
  {
    category: "burgers",
    name: "Mushroom Royale",
    price: 675,
    description:
      "<!-- TODO: Replace placeholder ingredients with official Mazi menu ingredients --> A richer burger with earthy mushroom notes.",
    tag: "Beef",
  },
  {
    category: "burgers",
    name: "Magic Mushroom",
    price: 575,
    description:
      "<!-- TODO: Replace placeholder ingredients with official Mazi menu ingredients --> A savory option with comforting mushroom flavour.",
    tag: "Beef",
  },
  {
    category: "burgers",
    name: "BYG Beast",
    price: 675,
    description:
      "<!-- TODO: Replace placeholder ingredients with official Mazi menu ingredients --> Bigger, bolder, and made for a hearty appetite.",
    tag: "Beef",
  },
  {
    category: "burgers",
    name: "The Big Bang",
    price: 575,
    description:
      "<!-- TODO: Replace placeholder ingredients with official Mazi menu ingredients --> A loaded beef burger built to make an impression.",
    tag: "Beef",
  },
  {
    category: "wraps",
    name: "Chicken Wrap Regular",
    price: 450,
    description:
      "<!-- TODO: Replace placeholder ingredients with official Mazi menu ingredients --> A simple chicken wrap for a lighter meal.",
    tag: "Wrap",
  },
  {
    category: "wraps",
    name: "Chicken Wrap Supreme",
    price: 625,
    description:
      "<!-- TODO: Replace placeholder ingredients with official Mazi menu ingredients --> A bigger wrap with a richer, more filling profile.",
    tag: "Wrap",
  },
  {
    category: "wraps",
    name: "Beef Wrap",
    price: 475,
    description:
      "<!-- TODO: Replace placeholder ingredients with official Mazi menu ingredients --> A hearty, beef-forward option with a satisfying bite.",
    tag: "Wrap",
  },
  {
    category: "fries",
    name: "Classic Fries — Small",
    price: 225,
    description:
      "<!-- TODO: Replace placeholder ingredients with official Mazi menu ingredients --> Crispy, golden fries in a small portion.",
    tag: "Sides",
  },
  {
    category: "fries",
    name: "Classic Fries — Large",
    price: 395,
    description:
      "<!-- TODO: Replace placeholder ingredients with official Mazi menu ingredients --> A generous portion for a fuller snack.",
    tag: "Sides",
  },
  {
    category: "fries",
    name: "Loaded Fries",
    price: 625,
    description:
      "<!-- TODO: Replace placeholder ingredients with official Mazi menu ingredients --> Fries topped with a heavier, more indulgent finish.",
    tag: "Loaded",
  },
  {
    category: "sides",
    name: "Onion Rings — 5 pcs",
    price: 225,
    description:
      "<!-- TODO: Replace placeholder ingredients with official Mazi menu ingredients --> Crispy onion rings in a smaller serving.",
    tag: "Side",
  },
  {
    category: "sides",
    name: "Onion Rings — 10 pcs",
    price: 400,
    description:
      "<!-- TODO: Replace placeholder ingredients with official Mazi menu ingredients --> A fuller serving of crispy onion rings.",
    tag: "Side",
  },
  {
    category: "sides",
    name: "Chicken Hotshots — 7 pcs",
    price: 325,
    description:
      "<!-- TODO: Replace placeholder ingredients with official Mazi menu ingredients --> Crispy, bite-size chicken bites.",
    tag: "Side",
  },
  {
    category: "sides",
    name: "Chicken Hotshots — 14 pcs",
    price: 555,
    description:
      "<!-- TODO: Replace placeholder ingredients with official Mazi menu ingredients --> A larger portion of crispy chicken bites.",
    tag: "Side",
  },
  {
    category: "drinks",
    name: "Water",
    price: 90,
    description: "Refreshing and simple.",
    tag: "Drink",
  },
  {
    category: "drinks",
    name: "Soft Drink",
    price: 125,
    description: "A chilled classic to round out the meal.",
    tag: "Drink",
  },
  {
    category: "drinks",
    name: "Malt — Apple/Peach",
    price: 150,
    description: "A sweet malt drink with fruity flavour.",
    tag: "Drink",
  },
  {
    category: "drinks",
    name: "Make It Xtreme",
    price: 225,
    description: "Extra add-on upgrade for your burger meal.",
    tag: "Upgrade",
  },
  {
    category: "drinks",
    name: "Make It Meal",
    price: 300,
    description: "A bundled meal add-on option.",
    tag: "Meal",
  },
  {
    category: "drinks",
    name: "Make It Cheezy",
    price: 60,
    description: "Add a cheesy touch to your order.",
    tag: "Add-on",
  },
  {
    category: "drinks",
    name: "Buy the Dip",
    price: 55,
    description: "A tasty side dip or optional add-on.",
    tag: "Add-on",
  },
];

const menuGrid = document.getElementById("menuGrid");
const menuFilters = document.querySelectorAll(".menu-filter");
const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightboxImage");
const lightboxCaption = document.getElementById("lightboxCaption");
const reviewYear = document.getElementById("year");

function renderMenu(filter = "all") {
  const filteredItems =
    filter === "all"
      ? menuItems
      : menuItems.filter((item) => item.category === filter);

  const groups = filteredItems.reduce((acc, item) => {
    const section = item.category;
    if (!acc[section]) acc[section] = [];
    acc[section].push(item);
    return acc;
  }, {});

  menuGrid.innerHTML = Object.entries(groups)
    .map(([category, items]) => {
      const heading = category
        .replace(/-/g, " ")
        .replace(/\b\w/g, (char) => char.toUpperCase());

      return `
        <div class="menu-group" style="grid-column: 1 / -1;">
          <h3>${heading}</h3>
          <div class="menu-grid-inner" style="display:grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 1rem;">
            ${items
              .map(
                (item) => `
              <article class="menu-item">
                <div>
                  <span class="menu-item-tag">${item.tag}</span>
                  <h3>${item.name}</h3>
                  <p>${item.description}</p>
                </div>
                <div class="menu-item-price">Rs. ${item.price}</div>
              </article>
            `,
              )
              .join("")}
          </div>
        </div>
      `;
    })
    .join("");

  if (!filteredItems.length) {
    menuGrid.innerHTML =
      '<p class="menu-note">No items found in this category yet.</p>';
  }
}

function setActiveFilter(button) {
  menuFilters.forEach((filter) =>
    filter.classList.toggle("is-active", filter === button),
  );
}

menuFilters.forEach((button) => {
  button.addEventListener("click", () => {
    const filterValue = button.dataset.filter || "all";
    setActiveFilter(button);
    renderMenu(filterValue);
  });
});

function setupLightbox() {
  const triggers = document.querySelectorAll(".js-lightbox-trigger");

  triggers.forEach((trigger) => {
    trigger.addEventListener("click", () => {
      const { image, title } = trigger.dataset;
      lightboxImage.src = image;
      lightboxCaption.textContent = title || "Mazi gallery";
      lightbox.classList.add("is-open");
      document.body.style.overflow = "hidden";
    });
  });

  const closeButton = document.querySelector(".lightbox-close");
  closeButton.addEventListener("click", closeLightbox);

  lightbox.addEventListener("click", (event) => {
    if (event.target === lightbox) closeLightbox();
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && lightbox.classList.contains("is-open")) {
      closeLightbox();
    }
  });
}

function closeLightbox() {
  lightbox.classList.remove("is-open");
  document.body.style.overflow = "";
}

function initializeNavbar() {
  const navbar = document.getElementById("mainNavbar");
  const handleScroll = () => {
    document.body.classList.toggle("scrolled", window.scrollY > 20);
    navbar.classList.toggle("shadow-sm", window.scrollY > 20);
  };

  handleScroll();
  window.addEventListener("scroll", handleScroll);
}

function setupRevealAnimations() {
  const sections = document.querySelectorAll(".reveal-on-scroll");

  if (!sections.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 },
  );

  sections.forEach((section) => observer.observe(section));
}

function validateForm(form) {
  const fields = Array.from(form.querySelectorAll("input, textarea"));

  let isValid = true;

  fields.forEach((field) => {
    const value = field.value.trim();
    const isRequired = field.hasAttribute("required");

    if (isRequired && !value) {
      field.setAttribute("aria-invalid", "true");
      isValid = false;
      return;
    }

    if (
      field.type === "email" &&
      value &&
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
    ) {
      field.setAttribute("aria-invalid", "true");
      isValid = false;
      return;
    }

    if (field.type === "tel" && value && !/^\+?[0-9\s-]{7,}$/.test(value)) {
      field.setAttribute("aria-invalid", "true");
      isValid = false;
      return;
    }

    field.removeAttribute("aria-invalid");
  });

  return isValid;
}

function setupForms() {
  document.querySelectorAll(".js-form").forEach((form) => {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const status = form.querySelector(".form-status");

      if (!validateForm(form)) {
        status.textContent = "Please complete the required fields correctly.";
        return;
      }

      status.textContent =
        "Demo form — connect this to your backend before production.";
      form.reset();
    });
  });
}

function initializeYear() {
  if (reviewYear) reviewYear.textContent = new Date().getFullYear();
}

document.addEventListener("DOMContentLoaded", () => {
  renderMenu();
  setupLightbox();
  initializeNavbar();
  setupRevealAnimations();
  setupForms();
  initializeYear();
});
