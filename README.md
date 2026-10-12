# Banking Products Dashboard

A single page that shows different banking products (savings, credit cards, loans and wealth) together in one view. You can switch between categories, search by name and filter by status.
```bash
npm install
npm run dev
```
```
Then open http://localhost:5173
```
## Tech used

- **React** for the UI
- **Vite** to run and build the project
- **Plain CSS** (no UI library). The grid uses CSS Grid so it works on mobile and desktop.
I didn't build a backend. The product data is hard-coded in `src/data/products.js`.


## Data and UI

I kept the data separate from the components. Components don't import the product list directly, they get it through `useProducts` -> `productService`. If I had a real API, only `productService.js` would need to change.

Each product has a `metrics` array (label, value, type) instead of different fields for each product type. This way one `ProductCard` component works for every product.

## Card buttons

- Status **Available** -> **Apply** button. Opens a popup where you can confirm the application.
- Status **Active / Pending / Blocked** -> **View Details** button. Opens a popup with the product details.

The popup closes with the × button, Close/Cancel, Escape, or clicking outside.

## What I would add with more time

- Unit tests for the filter and format functions
- Keep the selected filters in the URL
