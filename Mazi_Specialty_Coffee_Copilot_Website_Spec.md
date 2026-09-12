# Mazi Specialty Coffee — GitHub Copilot Website Build Specification

## 1. Project Overview

Build a polished, production-quality **single-page coffee shop website** for **Mazi Specialty Coffee**, a specialty coffee café in Karachi, Pakistan.

The website is primarily an **online presence and brand-experience website**, not an e-commerce application. Its purpose is to help visitors:

- Discover the Mazi brand.
- Understand the story and philosophy behind the café.
- Experience the café's atmosphere and visual identity through photography.
- Explore the food and coffee menu with prices.
- Discover workshops and events.
- See exactly where the café is located.
- Check opening hours and contact information.
- View testimonials.
- Understand the café's rules and regulations before visiting.
- Decide whether Mazi is a place they would like to visit.

The website should communicate that **Mazi is more about the experience, people, conversation, music, atmosphere, simplicity, and comfort than simply coffee.**

---

# 2. Brand Identity

## Brand Name

**Mazi Specialty Coffee**

"Mazi" is an Urdu word associated with the **past**. The concept is a metaphor for simpler times, past culture, human connection, and a slower and more uncomplicated way of life.

The website should subtly communicate this idea without becoming overly historical, nostalgic, or cliché.

## Brand Philosophy

Mazi is not positioned as a luxury café.

It should feel:

- Simple
- Clean
- Warm
- Human
- Cozy
- Artistic
- Organic
- Relaxed
- Conversational
- Nostalgic in a subtle way

A central concept is:

> People come to Mazi not only for coffee, but for the atmosphere and the people they share it with.

Mazi does **not provide Wi-Fi intentionally**, encouraging visitors to put their phones and laptops aside and talk to one another.

The café has an **open-roof sitting space** and should feel uncomplicated rather than luxurious or overly polished.

## Brand Personality

Use these characteristics throughout the design:

- Cozy & warm
- Natural & organic
- Artistic & creative
- Simple rather than luxurious
- Nostalgic without looking old-fashioned
- Social and human

---

# 3. Tagline / Brand Messaging

Create a memorable tagline that connects:

- Mazi
- Music
- Vibe
- Comfort
- Conversation
- Simpler times
- Coffee

Do not simply use generic coffee-shop copy such as "Where great coffee meets great moments" everywhere.

The hero can use:

**Mazi Specialty Coffee**

with a supporting line inspired by:

> Where coffee, music, comfort, and good company meet.

Create several supporting copy blocks throughout the website around the ideas of:

- Simple times.
- Good coffee.
- Good music.
- Real conversations.
- Comfortable spaces.
- No rush.
- No Wi-Fi.
- Just people being present.

Keep the copy natural and tasteful rather than overly poetic.

---

# 4. Technology Requirements

Use:

- HTML5
- Bootstrap 5
- Custom CSS
- Vanilla JavaScript

Do **not** use React, Vue, Angular, or another frontend framework.

Use a clean production-style project structure.

Recommended structure:

```text
mazi-specialty-coffee/
│
├── index.html
│
├── css/
│   └── style.css
│
├── js/
│   └── script.js
│
├── assets/
│   ├── images/
│   │   ├── hero/
│   │   ├── gallery/
│   │   ├── menu/
│   │   ├── events/
│   │   └── logo/
│   │
│   └── icons/
│
└── README.md
```

Keep HTML, CSS, and JavaScript separated.

Do not put large amounts of CSS or JavaScript inline inside `index.html`.

---

# 5. Overall Design Direction

Use a **Cozy Café / Warm Editorial** visual direction.

The website should look like a carefully designed independent specialty café website rather than a generic Bootstrap template.

## Color Palette

Use a warm, earthy palette consisting of:

- Creamy neutrals
- Warm off-white
- Rich espresso brown
- Soft coffee/beige tones
- Natural muted green accents
- Dark charcoal for readable text

Suggested starting palette:

```css
--cream: #F5EFE6;
--warm-white: #FBF8F3;
--espresso: #2B211C;
--coffee-brown: #5A4032;
--latte: #CDB9A0;
--muted-green: #66745C;
--dark-green: #43503D;
--text: #2D2926;
--muted-text: #756C64;
```

These are starting values. Refine them visually so the final design feels cohesive.

Do not make the website excessively brown.

Use cream as the primary background, espresso as a strong contrast, and natural green as an accent.

---

# 6. Typography

Primary display font:

**Playfair Display**

Use it for:

- Main headings
- Hero typography
- Section titles
- Important brand statements

Pair it with a clean sans-serif system font or Google Font for:

- Body text
- Navigation
- Buttons
- Menu items
- Metadata

Typography should feel elegant but approachable.

Avoid excessive font sizes and excessive decorative typography.

---

# 7. Photography Direction

Photography is extremely important to this website.

The visual identity should communicate the physical café experience.

The site should prominently use imagery of:

- Café interior
- Open-roof seating
- Coffee
- Coffee preparation
- Tables
- Chairs
- Plants
- Architecture
- Lighting
- Evening atmosphere
- People talking
- Friends spending time together
- Food
- Workshops
- Events
- Small details and textures

The layout must be designed so actual local images can easily replace placeholders later.

Use local image paths such as:

```text
assets/images/hero/hero-01.jpg
assets/images/gallery/gallery-01.jpg
assets/images/gallery/gallery-02.jpg
```

If an image does not exist yet, use a clearly documented placeholder path and add an HTML comment such as:

```html
<!-- TODO: Replace with actual Mazi café interior photograph -->
```

Do not hard-code the layout around remote stock images.

---

# 8. Page Architecture

Create the following single-page sections in this approximate order:

1. Announcement / small top bar
2. Navigation
3. Hero
4. Brand introduction
5. Mazi philosophy / "More Than Coffee"
6. Ambiance / Our Space
7. Gallery
8. Menu
9. Workshops & Events
10. Testimonials
11. Visit Mazi / Location
12. Reservation / Contact
13. Rules & Regulations
14. Footer

Use smooth scrolling between sections.

---

# 9. Top Bar

Create a small optional announcement bar above the navigation.

Example:

> Tuesday — Sunday | 4:00 PM — 9:00 PM | Monday Closed

The announcement bar should be subtle and fit the brand.

On mobile, make sure it does not consume excessive vertical space.

---

# 10. Navigation

Create a sticky responsive navbar.

Desktop navigation:

- Home
- About
- Space
- Gallery
- Menu
- Workshops
- Visit Us
- Rules

Include a visually prominent CTA:

**Visit Us**

The Mazi logo should appear on the left.

Mobile navigation should use a clean Bootstrap hamburger menu.

The navbar should:

- Become visually distinct when scrolling.
- Have a subtle background transition.
- Remain readable over the hero.
- Not obstruct content on mobile.

---

# 11. Hero Section

Create a cinematic but lightweight hero.

Hero content:

**Mazi Specialty Coffee**

Supporting message should communicate:

- Coffee
- Music
- Comfort
- Vibe
- Human connection
- Simpler times

Use two primary buttons:

**Visit Us**

**Explore Our Space**

The hero should use a large local background/image.

Preferred visual direction:

- Warm café photograph
- Open-roof seating
- Evening atmosphere
- Coffee table
- Natural lighting
- People/social atmosphere

Add a subtle dark/cream overlay where required for text readability.

Do not use an overly aggressive video background.

The hero should load quickly.

---

# 12. Brand Introduction

Create a short introductory section introducing Mazi.

Explain that Mazi is inspired by the feeling of simpler times.

Important ideas:

- Mazi is not about luxury.
- It is about atmosphere.
- It is about slowing down.
- It is about conversations.
- It is about music and good company.
- It is about enjoying a clean, simple, comfortable space.

Possible headline direction:

**"A little place for slower moments."**

Do not copy this exact line if a better one fits the brand.

---

# 13. "More Than Coffee" Section

Create a visually distinctive section explaining the philosophy.

Potential heading:

**More Than Coffee**

Explain that Mazi intentionally does not provide Wi-Fi.

The copy should communicate:

> There is no Wi-Fi here by design. Put the screen away, listen to the music, talk to the person sitting across from you, and enjoy the moment.

Do not make this sound anti-technology or judgmental.

The concept is about encouraging human interaction.

Use a large photograph alongside the copy.

---

# 14. Ambiance / Our Space

Create a section dedicated to the physical atmosphere.

Possible title:

**Come for the coffee. Stay for the vibe.**

Highlight:

- Open-roof seating
- Simple surroundings
- Comfortable seating
- Warm atmosphere
- Music
- Conversation
- Evening vibe
- Natural elements
- No unnecessary luxury

Create visual feature cards or editorial blocks.

Do not make the cards look like a corporate SaaS feature grid.

Use photography and large typography.

---

# 15. Gallery

Create an Instagram-inspired gallery.

Requirements:

- Responsive CSS/Bootstrap grid.
- Mixed image sizes where appropriate.
- Elegant hover effects.
- Lightbox/modal image viewer using vanilla JavaScript.
- Images should open larger when clicked.
- Keyboard-friendly modal behavior.
- Lazy loading for gallery images.

Possible gallery categories:

- The Space
- Coffee
- Food
- People
- Workshops
- Evening Vibe

If implementing filtering, keep it simple and elegant.

Avoid excessive animation.

Use local image placeholders.

Include TODO comments for replacing images.

---

# 16. Menu

Create a beautiful menu section rather than a basic HTML table.

The menu should be easy to read on mobile.

Implement category filtering with JavaScript.

Categories:

- Hot Coffee
- Cold Coffee
- Non Coffee
- Pour Over
- Burgers
- Wraps
- Fries
- Sides
- Drinks & Add-ons

Menu cards/items should display:

- Item name
- Price
- Ingredients/description where provided
- Optional small category label

Prices are in Pakistani Rupees.

Use `Rs.` formatting.

Add a note:

> Prices are exclusive of taxes.

---

# 17. Coffee Menu Data

Use the following exact coffee items and prices.

## Hot Coffee

| Item | Price |
|---|---:|
| Espresso | Rs. 450 |
| Cortado | Rs. 550 |
| Latte | Rs. 600 |
| Cappuccino | Rs. 600 |
| Mocha | Rs. 650 |
| Spanish Latte | Rs. 650 |
| Vanilla Latte | Rs. 650 |
| Caramel Latte | Rs. 650 |

## Cold Coffee

| Item | Price |
|---|---:|
| Iced Mocha | Rs. 700 |
| Iced Latte | Rs. 700 |
| Iced Spanish Latte | Rs. 700 |
| Iced Vanilla Latte | Rs. 700 |
| Iced Caramel Latte | Rs. 700 |

## Non Coffee

| Item | Price |
|---|---:|
| Dark Hot Chocolate | Rs. 650 |
| Peanut Butter Hot Chocolate | Rs. 700 |
| Iced Chocolate | Rs. 700 |

## Pour Over

| Item | Price |
|---|---:|
| Cold Brew | Rs. 750 |

## Extras

| Item | Price |
|---|---:|
| Extra Shot | Rs. 400 |
| Extra Pump — Vanilla/Caramel | Rs. 100 |

Add:

> Prices are exclusive of taxes.

---

# 18. Food Menu

Create the following food categories.

## Chicken Burgers

| Item | Price |
|---|---:|
| Classic Chicken | Rs. 395 |
| BYG Zinger | Rs. 575 |
| Chicken Supreme | Rs. 575 |
| Crispy Magic Jr | Rs. 425 |
| BYG Zyngy | Rs. 575 |

Ingredients are currently unspecified.

Add realistic placeholder ingredient descriptions, but clearly mark them with HTML comments:

```html
<!-- TODO: Replace placeholder ingredients with official Mazi menu ingredients -->
```

Do not present invented ingredients as confirmed official information.

## Beef Burgers

| Item | Price |
|---|---:|
| Classic Vintage | Rs. 575 |
| Vintage Double | Rs. 625 |
| Mushroom Royale | Rs. 675 |
| Magic Mushroom | Rs. 575 |
| BYG Beast | Rs. 675 |
| The Big Bang | Rs. 575 |

Use placeholder ingredient descriptions with TODO comments.

## Wraps

| Item | Price |
|---|---:|
| Chicken Wrap Regular | Rs. 450 |
| Chicken Wrap Supreme | Rs. 625 |
| Beef Wrap | Rs. 475 |

Use placeholder ingredient descriptions with TODO comments.

## Fries

| Item | Price |
|---|---:|
| Classic Fries — Small | Rs. 225 |
| Classic Fries — Large | Rs. 395 |
| Loaded Fries | Rs. 625 |

Use placeholder ingredient descriptions with TODO comments.

## Sides

### Onion Rings

- 5 pcs — Rs. 225
- 10 pcs — Rs. 400

### Chicken Hotshots

- 7 pcs — Rs. 325
- 14 pcs — Rs. 555

Use placeholder ingredient descriptions with TODO comments.

## Drinks & Add-ons

| Item | Price |
|---|---:|
| Water | Rs. 90 |
| Soft Drink | Rs. 125 |
| Malt — Apple/Peach | Rs. 150 |
| Make It Xtreme | Rs. 225 |
| Make It Meal | Rs. 300 |
| Make It Cheezy | Rs. 60 |
| Buy the Dip | Rs. 55 |

---

# 19. Menu UX

The menu must be:

- Fully responsive.
- Easy to scan.
- Comfortable on mobile.
- Filterable.
- Visually consistent with the brand.

Desktop can use a two-column editorial layout.

Mobile should use a single-column layout.

Do not make every menu item a giant card.

Consider subtle separators, category headings, price alignment, and typography.

---

# 20. Workshops & Events

Mazi also periodically hosts:

- Art workshops
- Creative workshops
- Community activities
- Other events

Create a dedicated section:

**Workshops & Gatherings**

Explain that Mazi occasionally becomes a space for art, creativity, learning, and community.

Create an "Upcoming Events" layout.

Each event can contain:

- Event image
- Event title
- Short description
- Date
- Time
- Location
- CTA

Use realistic placeholder events and clearly mark them as placeholder content.

Example TODO:

```html
<!-- TODO: Replace placeholder event with official upcoming Mazi event -->
```

If there are no upcoming events, the UI should gracefully display:

> "Something is brewing. Check back soon for our next workshop or gathering."

Do not display fake real-world event dates as though they are confirmed.

---

# 21. Testimonials

Add a testimonials section.

Use 3–5 realistic placeholder testimonials.

Do not claim they are genuine customer reviews.

If placeholder testimonials are used, include an HTML comment:

```html
<!-- TODO: Replace placeholder testimonials with approved customer testimonials -->
```

The design should feel organic rather than like a corporate review slider.

Potential presentation:

- Large quote
- Customer first name/initial
- Optional visit context

Use a lightweight carousel only if it improves the experience.

---

# 22. Location / Visit Us

This is one of the most important sections.

Headline:

**Find Your Way to Mazi**

Display the address clearly.

Official address:

**A246 Backyard, 4th Street, after Marryland Banquet, Block T, North Nazimabad Town, Karachi, 74700, Pakistan**

Nearest landmark:

**Marryland Banquet**

Provide:

**Get Directions**

linked to:

`https://maps.app.goo.gl/PBWt6btqg1nG69Px6`

Do not invent coordinates.

---

# 23. Interactive Map

Embed a map frame for quick navigation.

The section should contain:

- Embedded map frame if a valid embeddable map URL can be provided.
- Address.
- Nearest landmark.
- Get Directions button.

If the supplied Google Maps short URL cannot be directly embedded safely, use a visually styled map placeholder/container and a prominent **Get Directions** button pointing to the supplied Google Maps URL.

Do not invent an iframe embed URL.

The map should be responsive.

Desktop:

- Map and address/details side-by-side.

Mobile:

- Details followed by map.

---

# 24. Opening Hours

Display clearly:

**Tuesday — Sunday**  
4:00 PM — 9:00 PM

**Monday**  
Closed

Make opening hours highly visible near the location section.

Do not implement a fake live "Open Now" status unless actual current-time logic and timezone handling are implemented correctly.

---

# 25. Contact

Phone:

**+92 300 000 0000**

WhatsApp:

**+92 300 000 0000**

Because these are currently placeholder numbers, clearly mark them for replacement.

Use:

- `tel:` for phone.
- `https://wa.me/923000000000` for WhatsApp, but add a TODO comment to replace with the actual number.

Do not display fake contact information as verified business information.

---

# 26. Social Media

Instagram:

`https://www.instagram.com/mazicoffeepk/`

Threads:

`https://www.threads.com/@mazicoffeepk`

Facebook:

`https://www.facebook.com/p/Mazi-Speciality-Coffee-61566475689150/`

Create visually consistent social links.

Do not embed third-party social widgets unless necessary.

---

# 27. Reservations

Create a reservation section.

The website does not currently have a backend, so do **not** build a fake reservation system that claims to confirm bookings.

Instead create a clean reservation/contact form that can collect:

- Name
- Phone
- Email
- Preferred date
- Preferred time
- Number of guests
- Message / special request

The frontend should validate fields using JavaScript.

For submission, provide a clearly documented placeholder:

```html
<!-- TODO: Connect reservation form to backend/email service before production -->
```

Do not tell users that a reservation has been confirmed.

Use a success state such as:

> Thank you. Your request has been received.

only if the form is actually connected to a backend/service. For a static demo, use a non-submitting/demo state or clearly label it.

---

# 28. Contact Form

Create a separate or combined contact form.

Fields:

- Name
- Email
- Phone
- Message

Use client-side validation.

The form should be designed so it can later connect to:

- PHP
- Formspree
- EmailJS
- Custom backend/API

without redesigning the frontend.

---

# 29. Rules & Regulations

This section must appear **near the end of the page, immediately before the footer**.

This is important.

Do not hide the rules in a tiny modal or footer-only link.

Create a visually distinctive but respectful section.

Heading:

**A Few Things to Keep in Mind**

Use the following official rules/content, preserving the intended meaning and correcting obvious spelling/grammar issues.

### Outside Food & Drinks

**No outside food or drinks.**

### Cleanliness & Decorum

**Please maintain cleanliness and decorum throughout the space.**

### Gatherings & Parties

**Please inform us in advance for gatherings and parties.**

### Photography & Shoots

**Approval in advance is required for any kind of shoot, personal or professional.**

### Minimum Spending

**There is no minimum spending at Mazi. However, if you are sitting for hours, please at least order a coffee.**

### Collaborations

**We do not entertain paid collaborations or barter collaborations of any kind.**

### Respect the Vibe

**Please respect the vibe and the place.**

### Children & Families

**Children and families are requested to ensure that children do not run around or disturb other guests.**

### Respect the Space

Use this final message prominently:

> **Every brick and corner holds a story. Please treat it with the same warmth and respect it was built with.**

The wording should feel warm and human, not legalistic.

Do not make this section look like terms and conditions.

---

# 30. Footer

Create a rich but compact footer.

Include:

- Mazi logo
- Short brand statement
- Navigation links
- Opening hours
- Address
- Phone
- WhatsApp
- Instagram
- Threads
- Facebook
- Rules & Regulations

Footer closing message can reference the Mazi philosophy.

Example direction:

> Good coffee. Good music. Good company.

Do not overfill the footer.

---

# 31. Responsive Requirements

The site must be fully responsive for:

- Large desktop
- Desktop
- Laptop
- Tablet
- Mobile
- Small mobile devices

Use Bootstrap's responsive utilities/grid where useful, but supplement them with custom CSS.

Pay special attention to:

- Hero height on mobile.
- Navbar.
- Menu readability.
- Gallery.
- Map.
- Forms.
- Rules.
- Footer.
- Buttons.

No horizontal scrolling should occur at any breakpoint.

---

# 32. Animation & Interaction

Use **moderate/premium animations**, but prioritize performance.

Implement:

- Smooth scrolling.
- Navbar transition on scroll.
- Fade/slide reveal on sections.
- Image hover effects.
- Button hover states.
- Gallery hover transitions.
- Lightbox/modal.
- Menu category filtering.
- Subtle event card animations.

Animations should be:

- Short.
- Smooth.
- Subtle.
- Purposeful.

Do not use:

- Heavy animation libraries.
- Excessive parallax.
- Long loading animations.
- Scroll-jacking.
- Constant floating animations.
- Anything that significantly hurts performance.

Respect:

```css
@media (prefers-reduced-motion: reduce)
```

and reduce/disable non-essential animations for users who prefer reduced motion.

---

# 33. Accessibility

Implement:

- Semantic HTML5.
- Proper heading hierarchy.
- Accessible navigation.
- Keyboard-accessible buttons.
- Visible focus states.
- Descriptive alt text.
- ARIA labels where necessary.
- Sufficient color contrast.
- Form labels.
- Error messages.
- Accessible gallery/lightbox behavior.
- Reduced-motion support.

Do not use `<div>` elements as buttons when a real `<button>` is appropriate.

---

# 34. SEO

Optimize the page for local SEO.

Use:

- Descriptive `<title>`.
- Meta description.
- Canonical URL placeholder.
- Open Graph metadata.
- Twitter/X card metadata.
- Proper H1/H2/H3 hierarchy.
- Descriptive image alt attributes.
- Local business structured data / JSON-LD.

The structured data should identify:

**Mazi Specialty Coffee**

as a local café/coffee shop.

Use only known business information.

Do not invent:

- Ratings
- Reviews
- Coordinates
- Telephone numbers other than the provided placeholder
- Business hours other than those provided

Add TODO comments for information that needs verification before launch.

Suggested title:

**Mazi Specialty Coffee | Coffee, Music & Good Company in Karachi**

Suggested meta description direction:

> Discover Mazi Specialty Coffee in North Nazimabad, Karachi — a cozy space for specialty coffee, music, conversation, workshops, and simple moments.

---

# 35. Performance

The site should be lightweight.

Implement:

- Lazy loading for below-the-fold images.
- Explicit image dimensions where possible to reduce layout shift.
- Efficient CSS.
- Minimal JavaScript.
- No unnecessary dependencies.
- Bootstrap via CDN or local production setup.
- Avoid huge background images where smaller responsive images are sufficient.
- Use modern image formats such as WebP where available.
- Avoid autoplay video.

Target a fast mobile experience.

---

# 36. Image Placeholder Strategy

Until actual Mazi photography is supplied, structure image references like:

```text
assets/images/hero/mazi-hero.jpg
assets/images/gallery/mazi-space-01.jpg
assets/images/gallery/mazi-space-02.jpg
assets/images/gallery/mazi-coffee-01.jpg
assets/images/gallery/mazi-food-01.jpg
assets/images/events/workshop-01.jpg
```

Do not depend on random external image URLs for the final implementation.

Include comments wherever real business imagery/content must replace placeholders.

---

# 37. Content Rules

Do not fabricate official business claims.

When content is missing:

1. Use realistic placeholder copy.
2. Add a TODO comment.
3. Make replacement straightforward.

Especially do this for:

- Food ingredients.
- Testimonials.
- Events.
- Workshop dates.
- Reservation backend.
- Contact phone number.
- Any claims about awards or achievements.

Never invent customer ratings or reviews.

---

# 38. Important UX Principle

The website should not feel like a restaurant ordering website.

The primary journey should be:

```text
Discover Mazi
      ↓
Understand the philosophy
      ↓
Experience the ambiance visually
      ↓
Explore coffee & food
      ↓
Discover workshops/events
      ↓
See location + opening hours
      ↓
Decide to visit
      ↓
Read rules before visiting
```

The menu is important, but **the atmosphere and physical experience are the primary selling points**.

---

# 39. Visual Hierarchy

Prioritize:

### Highest priority

- Brand
- Atmosphere
- Photography
- Location
- Opening hours
- Visit CTA

### Medium priority

- Menu
- Workshops
- Testimonials
- Reservation/contact

### Supporting priority

- Rules
- Social links
- Footer information

The website should visually communicate that Mazi is a **place to experience**, not simply a place to buy coffee.

---

# 40. Design Details

Use:

- Generous whitespace.
- Warm backgrounds.
- Large editorial headings.
- High-quality photography.
- Thin separators.
- Rounded corners sparingly.
- Natural shadows.
- Subtle texture if useful.
- Organic layout variation.

Avoid:

- Generic Bootstrap-looking cards everywhere.
- Excessive gradients.
- Neon colors.
- Glassmorphism.
- Corporate SaaS design.
- Overly luxurious gold/black styling.
- Excessive rounded UI.
- Excessive icons.
- Stock-photo-looking layouts.

The final design should feel like an **independent Karachi specialty café with an artistic identity**.

---

# 41. Bootstrap Usage

Bootstrap should provide:

- Responsive grid.
- Navbar.
- Buttons.
- Modal/lightbox foundation if useful.
- Forms.
- Utility classes.

However, customize the appearance heavily using `style.css`.

The final website should **not look like an unmodified Bootstrap template**.

---

# 42. JavaScript Requirements

Create modular, readable vanilla JavaScript.

At minimum implement:

```text
- Sticky navbar behavior
- Mobile navigation handling if required
- Smooth scrolling
- Scroll reveal animations
- Menu filtering
- Gallery lightbox
- Form validation
- Any UI state interactions
```

Use event listeners cleanly.

Avoid global variables where possible.

Add comments for non-obvious logic.

---

# 43. Code Quality

Write production-style code.

Requirements:

- Semantic HTML.
- Clean indentation.
- Meaningful class names.
- CSS variables for theme colors.
- Reusable components/patterns.
- No unnecessary duplicate CSS.
- No inline JavaScript.
- Minimal inline CSS.
- Clear comments.
- Easy asset replacement.
- Easy content editing.

---

# 44. Content Management Friendly Structure

Even though this is a static website, structure repeated content so it is easy for a developer to update.

For example, menu data may be represented in JavaScript:

```javascript
const menuItems = [
    {
        category: "hot-coffee",
        name: "Espresso",
        price: 450,
        description: ""
    }
];
```

This makes filtering and future menu updates easier.

Do not over-engineer this into a framework.

---

# 45. Final Page Flow

The final page should approximately look like:

```text
TOP ANNOUNCEMENT
        ↓
NAVBAR
        ↓
HERO
        ↓
BRAND INTRO
        ↓
MORE THAN COFFEE
        ↓
OUR SPACE / AMBIANCE
        ↓
PHOTO GALLERY
        ↓
MENU
        ↓
WORKSHOPS & EVENTS
        ↓
TESTIMONIALS
        ↓
VISIT MAZI
        ↓
MAP + ADDRESS + HOURS
        ↓
RESERVATION / CONTACT
        ↓
RULES & REGULATIONS
        ↓
FOOTER
```

---

# 46. Final Quality Checklist

Before considering the website complete, verify:

## Design

- [ ] Mazi branding is clearly visible.
- [ ] Warm earthy color palette is consistent.
- [ ] Playfair Display is used appropriately.
- [ ] Design feels cozy, artistic, and natural.
- [ ] Website does not look like a generic Bootstrap template.
- [ ] No excessive luxury aesthetic.
- [ ] Photography is a major visual element.

## Content

- [ ] Correct Mazi name.
- [ ] Brand philosophy included.
- [ ] No-Wi-Fi concept explained naturally.
- [ ] Open-roof/simple atmosphere communicated.
- [ ] Coffee menu included.
- [ ] Food menu included.
- [ ] Prices included.
- [ ] Tax note included.
- [ ] Workshops/events included.
- [ ] Testimonials included as placeholders where necessary.
- [ ] Rules & regulations included.
- [ ] Location clearly displayed.
- [ ] Opening hours displayed.

## Location

- [ ] Full address displayed.
- [ ] Marryland Banquet listed as nearest landmark.
- [ ] Get Directions button works.
- [ ] Map section included.
- [ ] Map is responsive.

## Social

- [ ] Instagram.
- [ ] Threads.
- [ ] Facebook.

## Interaction

- [ ] Menu filtering works.
- [ ] Gallery works.
- [ ] Lightbox works.
- [ ] Navigation works.
- [ ] Forms validate correctly.
- [ ] Smooth scrolling works.
- [ ] Scroll animations work.

## Responsive

- [ ] Desktop.
- [ ] Laptop.
- [ ] Tablet.
- [ ] Mobile.
- [ ] Small mobile.
- [ ] No horizontal overflow.

## Accessibility

- [ ] Semantic HTML.
- [ ] Alt text.
- [ ] Keyboard accessibility.
- [ ] Focus states.
- [ ] Accessible forms.
- [ ] Reduced-motion support.

## SEO

- [ ] Title.
- [ ] Meta description.
- [ ] Open Graph.
- [ ] Structured data.
- [ ] Correct heading hierarchy.
- [ ] Local SEO content.

## Performance

- [ ] Lazy-loaded images.
- [ ] Minimal JavaScript.
- [ ] No unnecessary libraries.
- [ ] No autoplay video.
- [ ] Optimized assets.
- [ ] Fast mobile loading.

---

# 47. Important Instruction to GitHub Copilot

Do not immediately generate a generic café template.

First mentally translate the requirements above into a **coherent visual experience**.

The website should make a visitor feel:

> "This is a cozy place where I can work, relax, listen to good music, drink good coffee, and spend time with people."

However, because Mazi intentionally has **no Wi-Fi**, do not position it primarily as a workspace café. Instead, emphasize **relaxation, conversation, presence, music, and comfort**.

The central emotional concept should be:

**A return to simpler moments.**

Build the website as a complete polished single-page experience, not merely a collection of sections.

After implementation, review the entire page for:

- Visual consistency
- Responsive behavior
- Accessibility
- Performance
- Content accuracy
- Missing TODO placeholders
- Broken links
- Incorrect prices
- Incorrect opening hours
- Incorrect address
- Mobile usability

Do not invent official business information.

Where information is explicitly marked as placeholder, keep it clearly identifiable so it can be replaced before production.
