# WEBDEV-MINIPROJECT
Simple HTML CSS JS based static website created as an miniproject for first semester course "WEB DEV" in college.

# 🌍 Travel Bliss Website

Travel Bliss is a multi-page responsive travel website that showcases top travel destinations, offers booking functionality, and provides an easy way for users to contact the service.

## 📁 Project Structure
```bash
miniproject/
├── index.html # Homepage with destination grid
├── destination.html # Dynamic destination page
├── destination.js # JavaScript to populate destination.html content
├── projbook.html # Booking page
├── projcontact.html # Contact page
├── style.css # Main site styling
├── stylesplan.css # Additional styles for destination pages
├── assets/  #Contains images of whole project
      ├── backgroundimage.avif
      ├── bali.jpg
      ├── switzerland.jpeg
      ├── paris.jpg
      ├── lasvegas.jpg
      ├── dubai.jpg
      ├── jaipur.jpg
├── README.md #This file
```
## 💡 Features

- **Responsive Layout** — Works well on mobile, tablet, and desktop.
- **Dynamic Destination Pages** — Uses JavaScript to update content based on the selected destination.
- **Fixed Navigation and Footer** — Provides consistent user experience across all pages.
- **"Book Now" and "Contact Us" Pages** — Separate pages with matching header/footer layout.
- **Modern Design** — Clean visuals with hover effects and structured content.

## 🔧 How It Works

1. **index.html** — Main landing page with links to different destinations.
2. **destination.html** — When image cards are clickedDisplays destination details dynamically using query strings like `?place=paris`. 
3. **destination.js** — Reads the query string and injects destination-specific content into `destination.html`.
4. **projbook.html** — Booking form (not connected to backend).
5. **projcontact.html** — Contact form (not connected to backend).
6. **style.css** — CSS file used for layout and styling consistency for `index.html`, `projbook.html` and `projcontact.html`.
7. **stylesplan.css** — CSS file used for layout and styling consistency for `destination.html`.

## ▶️ How to Run

1. Download the zip file of project.
2. Extract the zip file to your device.
3. Open `index.html` in your browser.
4. Click a destination to see the dynamic `destination.html`.
5. Navigate using the fixed navbar to "Book Now" or "Contact Us".

## 🧱 Built With

- HTML5
- CSS3
- JavaScript (Vanilla)

##AUTHOR
- Created by: Krishiv Nair  
- For learning, showcase, and miniproject.




