# Alfa Grocery Mart

A modern, responsive grocery e-commerce storefront built with HTML, CSS, and vanilla JavaScript. Note that all state (Cart, Products, Orders) is managed on the frontend using browser `localStorage` to simulate a fully working platform.

## Features
- **Responsive Design**: Mobile, tablet, and desktop friendly with modern UI/UX (green/white theme mimicking BigBasket / Blinkit).
- **Product Catalog**: Over 20+ grouped mock products. Categories dynamically filter items.
- **Cart Management**: Add items, update quantity, remove, and calculate taxes real-time.
- **WhatsApp Checkout**: Submitting the checkout form computes the order total and redirects the user to WhatsApp Business with formatted order details.
- **Admin Dashboard**: Contains a mock view for managing frontend products (adding, removing) and viewing incoming simulated orders from checkout.

## How to Run locally

Since the application uses local storage and standard HTML/CSS/JS, running it is simple. No complex build tools or backend environments are needed.

### Method 1: Direct File Opening
1. Open the project folder on your computer.
2. Double-click on `index.html` to open it in your default web browser.
3. You can navigate the entire site from there.

### Method 2: Live Server (Recommended for best experience)
If you are using an editor like VS Code:
1. Open the project folder in VS Code.
2. Install the **Live Server** extension if you haven't already.
3. Right-click on `index.html` and select **"Open with Live Server"**.
4. The site will automatically open in your browser at `http://127.0.0.1:5500/alfa-grocery-mart/index.html`.

## File Structure
- `index.html` - The Home Page
- `products.html` - The Product Listing/Search/Filter page
- `product-details.html` - Single Product details
- `cart.html` - Cart summary and management
- `checkout.html` - Checkout form and WhatsApp bridge
- `about.html`, `contact.html` - Informational mock pages
- `login.html`, `signup.html` - Basic UI for user authentication
- `admin.html` - The internal admin dashboard for managing catalog and orders
- `style.css` - Global styling, theme variables, resets
- `script.js` - Global variables, local storage synching, DB mockup, and shared utilities
 
 ## Contact
[kumaramma266@gmail.com](mailto:kumaramma266@gmail.com)
