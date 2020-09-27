const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/home/zeufack/Documents/programming/web/javascript/react/jamstack-ecommerce/.cache/dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/home/zeufack/Documents/programming/web/javascript/react/jamstack-ecommerce/src/pages/404.js"))),
  "component---src-pages-admin-js": hot(preferDefault(require("/home/zeufack/Documents/programming/web/javascript/react/jamstack-ecommerce/src/pages/admin.js"))),
  "component---src-pages-cart-js": hot(preferDefault(require("/home/zeufack/Documents/programming/web/javascript/react/jamstack-ecommerce/src/pages/cart.js"))),
  "component---src-pages-checkout-js": hot(preferDefault(require("/home/zeufack/Documents/programming/web/javascript/react/jamstack-ecommerce/src/pages/checkout.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/home/zeufack/Documents/programming/web/javascript/react/jamstack-ecommerce/src/pages/index.js"))),
  "component---src-templates-category-view-js": hot(preferDefault(require("/home/zeufack/Documents/programming/web/javascript/react/jamstack-ecommerce/src/templates/CategoryView.js"))),
  "component---src-templates-item-view-js": hot(preferDefault(require("/home/zeufack/Documents/programming/web/javascript/react/jamstack-ecommerce/src/templates/ItemView.js")))
}

