// =========================================
// QOWA
// script.js
// =========================================


// =========================================
// المنتجات
// =========================================

const products = [
  {
    id: 1,
    name: "دمبل قابل للتعديل",
    category: "weights",
    categoryName: "الأوزان",
    price: 89,
    oldPrice: 109,
    rating: 4.9,
    badge: "الأكثر مبيعًا",
    badgeClass: "",
    image: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=900&q=85",
    description: "دمبل عملي قابل للتعديل مناسب لتمارين القوة واللياقة المنزلية ويساعدك على تنفيذ مجموعة واسعة من التمارين",
    features: [
      "أوزان قابلة للتعديل",
      "قبضة مريحة",
      "تصميم متين",
      "مناسب للتمرين المنزلي"
    ]
  },

  {
    id: 2,
    name: "طقم أوزان احترافي",
    category: "weights",
    categoryName: "الأوزان",
    price: 149,
    oldPrice: 179,
    rating: 4.8,
    badge: "خصم 17%",
    badgeClass: "",
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=900&q=85",
    description: "طقم أوزان مناسب لتمارين العضلات والقوة ويمكن استخدامه في المنزل أو النادي الرياضي",
    features: [
      "خامات قوية",
      "مناسب لتمارين متعددة",
      "ثبات ممتاز",
      "استخدام طويل الأمد"
    ]
  },

  {
    id: 3,
    name: "كرة تمارين اللياقة",
    category: "equipment",
    categoryName: "معدات التدريب",
    price: 29,
    oldPrice: 39,
    rating: 4.7,
    badge: "عرض",
    badgeClass: "",
    image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=900&q=85",
    description: "كرة تمارين عملية تساعد على تحسين التوازن والمرونة وتقوية عضلات الجسم",
    features: [
      "مناسبة لتمارين التوازن",
      "سطح مقاوم للانزلاق",
      "خامة متينة",
      "سهلة الاستخدام"
    ]
  },

  {
    id: 4,
    name: "حبل مقاومة احترافي",
    category: "equipment",
    categoryName: "معدات التدريب",
    price: 24,
    oldPrice: null,
    rating: 4.6,
    badge: "جديد",
    badgeClass: "new",
    image: "https://images.unsplash.com/photo-1599058917212-d750089bc07e?auto=format&fit=crop&w=900&q=85",
    description: "حبل مقاومة مناسب لتمارين القوة والإحماء ويمكن استخدامه في المنزل أو أثناء السفر",
    features: [
      "مقاومة قوية",
      "خفيف وسهل الحمل",
      "مناسب لتمارين متعددة",
      "خامة مرنة ومتينة"
    ]
  },

  {
    id: 5,
    name: "تيشيرت تدريب رياضي",
    category: "clothing",
    categoryName: "الملابس الرياضية",
    price: 25,
    oldPrice: 32,
    rating: 4.8,
    badge: "خصم 22%",
    badgeClass: "",
    image: "https://images.unsplash.com/photo-1538805060514-97d9cc17730c?auto=format&fit=crop&w=900&q=85",
    description: "تيشيرت رياضي خفيف ومريح مناسب للتمارين اليومية والجري والنادي",
    features: [
      "قماش خفيف",
      "سريع الجفاف",
      "مريح أثناء الحركة",
      "تصميم رياضي عصري"
    ]
  },

  {
    id: 6,
    name: "بنطال رياضي مرن",
    category: "clothing",
    categoryName: "الملابس الرياضية",
    price: 34,
    oldPrice: 42,
    rating: 4.7,
    badge: "عرض",
    badgeClass: "",
    image: "https://images.unsplash.com/photo-1506629082955-511b1aa562c8?auto=format&fit=crop&w=900&q=85",
    description: "بنطال رياضي مرن يوفر حرية الحركة والراحة أثناء التدريب والأنشطة اليومية",
    features: [
      "قماش مرن",
      "مريح للحركة",
      "خامة خفيفة",
      "مناسب للتمرين اليومي"
    ]
  },

  {
    id: 7,
    name: "قفازات تمارين احترافية",
    category: "accessories",
    categoryName: "الإكسسوارات",
    price: 19,
    oldPrice: 25,
    rating: 4.8,
    badge: "خصم 24%",
    badgeClass: "",
    image: "https://images.unsplash.com/photo-1599058917765-a780eda07a3e?auto=format&fit=crop&w=900&q=85",
    description: "قفازات رياضية تمنحك قبضة أفضل أثناء تمارين الأوزان وتساعد على حماية اليدين",
    features: [
      "قبضة قوية",
      "تهوية جيدة",
      "راحة أثناء التدريب",
      "حماية لليدين"
    ]
  },

  {
    id: 8,
    name: "حقيبة رياضية",
    category: "accessories",
    categoryName: "الإكسسوارات",
    price: 39,
    oldPrice: 49,
    rating: 4.6,
    badge: "مميز",
    badgeClass: "",
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=900&q=85",
    description: "حقيبة رياضية عملية لحمل الملابس والمعدات والإكسسوارات أثناء الذهاب إلى النادي",
    features: [
      "مساحة تخزين واسعة",
      "جيوب متعددة",
      "خامة متينة",
      "مقبض وحزام مريح"
    ]
  },

  {
    id: 9,
    name: "حصيرة يوغا وتمارين",
    category: "home",
    categoryName: "اللياقة المنزلية",
    price: 27,
    oldPrice: 35,
    rating: 4.9,
    badge: "الأكثر طلبًا",
    badgeClass: "",
    image: "https://images.unsplash.com/photo-1592432678016-e910b452f9a2?auto=format&fit=crop&w=900&q=85",
    description: "حصيرة مريحة لتمارين اليوغا والإطالة والتمارين المنزلية مع سطح يساعد على الثبات",
    features: [
      "سطح مقاوم للانزلاق",
      "سماكة مريحة",
      "خفيفة وسهلة الحمل",
      "سهلة التنظيف"
    ]
  },

  {
    id: 10,
    name: "حبل قفز سريع",
    category: "home",
    categoryName: "اللياقة المنزلية",
    price: 14,
    oldPrice: 19,
    rating: 4.7,
    badge: "خصم",
    badgeClass: "",
    image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=900&q=85",
    description: "حبل قفز خفيف وسريع مناسب لتمارين الكارديو وحرق السعرات وتحسين اللياقة",
    features: [
      "طول قابل للتعديل",
      "مقابض مريحة",
      "دوران سريع",
      "خفيف وسهل الحمل"
    ]
  },

  {
    id: 11,
    name: "مقعد تمارين متعدد الاستخدام",
    category: "equipment",
    categoryName: "معدات التدريب",
    price: 129,
    oldPrice: 159,
    rating: 4.9,
    badge: "خصم 19%",
    badgeClass: "",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=900&q=85",
    description: "مقعد تمارين ثابت ومريح مناسب لمجموعة كبيرة من تمارين الأوزان والقوة",
    features: [
      "هيكل معدني قوي",
      "مسند مريح",
      "ثبات ممتاز",
      "تمارين متعددة"
    ]
  },

  {
    id: 12,
    name: "مجموعة مقاومة منزلية",
    category: "home",
    categoryName: "اللياقة المنزلية",
    price: 49,
    oldPrice: 65,
    rating: 4.8,
    badge: "عرض خاص",
    badgeClass: "",
    image: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=900&q=85",
    description: "مجموعة متكاملة لتمارين المقاومة المنزلية تساعدك على تدريب عضلات الجسم دون الحاجة إلى أجهزة كبيرة",
    features: [
      "عدة مستويات مقاومة",
      "مقابض مريحة",
      "سهلة التخزين",
      "مناسبة للمنزل والسفر"
    ]
  }
];


// =========================================
// الحالة
// =========================================

let cart = loadStorage("qowaCart", []);
let wishlist = loadStorage("qowaWishlist", []);

let activeCategory = "all";
let searchTerm = "";
let sortType = "default";


// =========================================
// العناصر
// =========================================

const productsGrid = document.getElementById("productsGrid");
const noProducts = document.getElementById("noProducts");

const cartBtn = document.getElementById("cartBtn");
const cartCount = document.getElementById("cartCount");
const cartDrawer = document.getElementById("cartDrawer");
const cartOverlay = document.getElementById("cartOverlay");
const closeCart = document.getElementById("closeCart");
const cartItems = document.getElementById("cartItems");
const cartItemsText = document.getElementById("cartItemsText");
const cartSubtotal = document.getElementById("cartSubtotal");
const shippingCost = document.getElementById("shippingCost");
const cartTotal = document.getElementById("cartTotal");
const checkoutBtn = document.getElementById("checkoutBtn");

const wishlistBtn = document.getElementById("wishlistBtn");
const wishlistCount = document.getElementById("wishlistCount");
const wishlistDrawer = document.getElementById("wishlistDrawer");
const wishlistOverlay = document.getElementById("wishlistOverlay");
const closeWishlist = document.getElementById("closeWishlist");
const wishlistItems = document.getElementById("wishlistItems");

const productModal = document.getElementById("productModal");
const productModalContent = document.getElementById("productModalContent");
const closeProductModal = document.getElementById("closeProductModal");

const checkoutModal = document.getElementById("checkoutModal");
const closeCheckoutModal = document.getElementById("closeCheckoutModal");
const checkoutForm = document.getElementById("checkoutForm");
const checkoutTotal = document.getElementById("checkoutTotal");

const successModal = document.getElementById("successModal");
const closeSuccessModal = document.getElementById("closeSuccessModal");
const orderNumber = document.getElementById("orderNumber");

const searchToggle = document.getElementById("searchToggle");
const searchPanel = document.getElementById("searchPanel");
const mainSearchInput = document.getElementById("mainSearchInput");
const closeSearch = document.getElementById("closeSearch");

const productSearch = document.getElementById("productSearch");
const sortProducts = document.getElementById("sortProducts");

const menuToggle = document.getElementById("menuToggle");
const mobileNav = document.getElementById("mobileNav");

const newsletterForm = document.getElementById("newsletterForm");
const newsletterEmail = document.getElementById("newsletterEmail");

const mainHeader = document.getElementById("mainHeader");
const backToTop = document.getElementById("backToTop");
const toastContainer = document.getElementById("toastContainer");


// =========================================
// التخزين
// =========================================

function loadStorage(key, fallback) {
  try {
    const data = JSON.parse(localStorage.getItem(key));

    return Array.isArray(data)
      ? data
      : fallback;
  } catch {
    return fallback;
  }
}

function saveCart() {
  localStorage.setItem(
    "qowaCart",
    JSON.stringify(cart)
  );
}

function saveWishlist() {
  localStorage.setItem(
    "qowaWishlist",
    JSON.stringify(wishlist)
  );
}


// =========================================
// أدوات
// =========================================

function getProduct(id) {
  return products.find(
    product => product.id === Number(id)
  );
}

function formatPrice(price) {
  return `${Number(price).toFixed(2)} د.أ`;
}

function isWishlisted(id) {
  return wishlist.includes(Number(id));
}


// =========================================
// Toast
// =========================================

function showToast(message, type = "success") {
  if (!toastContainer) return;

  const toast = document.createElement("div");

  toast.className =
    type === "error"
      ? "toast error"
      : "toast";

  toast.innerHTML = `
    <i class="fa-solid ${
      type === "error"
        ? "fa-circle-exclamation"
        : "fa-circle-check"
    }"></i>

    <span>${message}</span>
  `;

  toastContainer.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = "0";
    toast.style.transform = "translateY(15px)";

    setTimeout(() => {
      toast.remove();
    }, 300);
  }, 2500);
}


// =========================================
// عرض المنتجات
// =========================================

function renderProducts() {
  if (!productsGrid) return;

  let list = [...products];

  if (activeCategory !== "all") {
    list = list.filter(
      product =>
        product.category === activeCategory
    );
  }

  if (searchTerm.trim()) {
    const term =
      searchTerm.trim().toLowerCase();

    list = list.filter(product =>
      product.name.toLowerCase().includes(term) ||
      product.categoryName.toLowerCase().includes(term) ||
      product.description.toLowerCase().includes(term)
    );
  }

  if (sortType === "low") {
    list.sort((a, b) => a.price - b.price);
  }

  if (sortType === "high") {
    list.sort((a, b) => b.price - a.price);
  }

  if (sortType === "rating") {
    list.sort((a, b) => b.rating - a.rating);
  }

  productsGrid.innerHTML = "";

  if (!list.length) {
    noProducts?.classList.add("show");
    return;
  }

  noProducts?.classList.remove("show");

  list.forEach(product => {
    const card =
      document.createElement("article");

    card.className = "product-card";

    card.innerHTML = `
      <div class="product-image">

        ${
          product.badge
            ? `
              <span class="product-badge ${product.badgeClass || ""}">
                ${product.badge}
              </span>
            `
            : ""
        }

        <button
          class="product-wishlist ${
            isWishlisted(product.id)
              ? "active"
              : ""
          }"
          data-wishlist="${product.id}"
          aria-label="المفضلة"
        >
          <i class="${
            isWishlisted(product.id)
              ? "fa-solid"
              : "fa-regular"
          } fa-heart"></i>
        </button>

        <img
          src="${product.image}"
          alt="${product.name}"
          loading="lazy"
        >

        <button
          class="quick-view"
          data-view="${product.id}"
        >
          عرض التفاصيل
        </button>

      </div>


      <div class="product-info">

        <span class="product-category">
          ${product.categoryName}
        </span>

        <h3>${product.name}</h3>


        <div class="product-rating">

          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>

          <span>${product.rating}</span>

        </div>


        <div class="product-price-row">

          <strong class="product-price">
            ${formatPrice(product.price)}
          </strong>

          ${
            product.oldPrice
              ? `
                <del class="old-price">
                  ${formatPrice(product.oldPrice)}
                </del>
              `
              : ""
          }

        </div>


        <button
          class="add-cart-btn"
          data-cart="${product.id}"
        >
          <i class="fa-solid fa-bag-shopping"></i>
          إضافة إلى السلة
        </button>

      </div>
    `;

    productsGrid.appendChild(card);
  });
}


// =========================================
// أحداث المنتجات
// =========================================

productsGrid?.addEventListener(
  "click",
  event => {
    const cartButton =
      event.target.closest("[data-cart]");

    const wishlistButton =
      event.target.closest("[data-wishlist]");

    const viewButton =
      event.target.closest("[data-view]");

    if (cartButton) {
      addToCart(
        Number(cartButton.dataset.cart)
      );
    }

    if (wishlistButton) {
      toggleWishlist(
        Number(
          wishlistButton.dataset.wishlist
        )
      );
    }

    if (viewButton) {
      openProductDetails(
        Number(viewButton.dataset.view)
      );
    }
  }
);


// =========================================
// السلة
// =========================================

function addToCart(id) {
  const product = getProduct(id);

  if (!product) return;

  const existing =
    cart.find(item => item.id === id);

  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({
      id: product.id,
      quantity: 1
    });
  }

  saveCart();
  renderCart();

  showToast(
    `تمت إضافة ${product.name} إلى السلة`
  );
}


function removeFromCart(id) {
  cart = cart.filter(
    item => item.id !== id
  );

  saveCart();
  renderCart();

  showToast(
    "تم حذف المنتج من السلة"
  );
}


function changeQuantity(id, amount) {
  const item =
    cart.find(item => item.id === id);

  if (!item) return;

  item.quantity += amount;

  if (item.quantity <= 0) {
    removeFromCart(id);
    return;
  }

  saveCart();
  renderCart();
}


function calculateCart() {
  let subtotal = 0;
  let count = 0;

  cart.forEach(item => {
    const product =
      getProduct(item.id);

    if (!product) return;

    subtotal +=
      product.price * item.quantity;

    count += item.quantity;
  });

  const shipping =
    subtotal === 0
      ? 0
      : subtotal >= 100
        ? 0
        : 5;

  return {
    subtotal,
    shipping,
    total: subtotal + shipping,
    count
  };
}


function renderCart() {
  if (!cartItems) return;

  const totals =
    calculateCart();

  if (cartCount) {
    cartCount.textContent =
      totals.count;
  }

  if (cartItemsText) {
    cartItemsText.textContent =
      totals.count === 0
        ? "السلة فارغة"
        : `${totals.count} منتج في السلة`;
  }

  if (cartSubtotal) {
    cartSubtotal.textContent =
      formatPrice(totals.subtotal);
  }

  if (shippingCost) {
    shippingCost.textContent =
      totals.shipping === 0
        ? "مجاني"
        : formatPrice(totals.shipping);
  }

  if (cartTotal) {
    cartTotal.textContent =
      formatPrice(totals.total);
  }

  if (checkoutTotal) {
    checkoutTotal.textContent =
      formatPrice(totals.total);
  }

  if (!cart.length) {
    cartItems.innerHTML = `
      <div class="empty-state">

        <i class="fa-solid fa-bag-shopping"></i>

        <h3>
          سلتك فارغة
        </h3>

        <p>
          أضف منتجاتك لتظهر هنا
        </p>

      </div>
    `;

    return;
  }

  cartItems.innerHTML = "";

  cart.forEach(item => {
    const product =
      getProduct(item.id);

    if (!product) return;

    const element =
      document.createElement("div");

    element.className = "cart-item";

    element.innerHTML = `
      <img
        src="${product.image}"
        alt="${product.name}"
      >

      <div class="cart-item-info">

        <h4>
          ${product.name}
        </h4>

        <div class="cart-item-price">
          ${formatPrice(
            product.price * item.quantity
          )}
        </div>


        <div class="quantity-control">

          <button
            data-increase="${product.id}"
            aria-label="زيادة"
          >
            <i class="fa-solid fa-plus"></i>
          </button>

          <span>${item.quantity}</span>

          <button
            data-decrease="${product.id}"
            aria-label="تقليل"
          >
            <i class="fa-solid fa-minus"></i>
          </button>

        </div>

      </div>


      <button
        class="remove-item"
        data-remove-cart="${product.id}"
        aria-label="حذف"
      >
        <i class="fa-solid fa-trash"></i>
      </button>
    `;

    cartItems.appendChild(element);
  });
}


cartItems?.addEventListener(
  "click",
  event => {
    const increase =
      event.target.closest(
        "[data-increase]"
      );

    const decrease =
      event.target.closest(
        "[data-decrease]"
      );

    const remove =
      event.target.closest(
        "[data-remove-cart]"
      );

    if (increase) {
      changeQuantity(
        Number(increase.dataset.increase),
        1
      );
    }

    if (decrease) {
      changeQuantity(
        Number(decrease.dataset.decrease),
        -1
      );
    }

    if (remove) {
      removeFromCart(
        Number(remove.dataset.removeCart)
      );
    }
  }
);


// =========================================
// فتح وإغلاق السلة
// =========================================

function openCartDrawer() {
  closeWishlistDrawer();

  cartDrawer?.classList.add("open");
  cartOverlay?.classList.add("open");

  updateBodyLock();
}


function closeCartDrawer() {
  cartDrawer?.classList.remove("open");
  cartOverlay?.classList.remove("open");

  updateBodyLock();
}


cartBtn?.addEventListener(
  "click",
  openCartDrawer
);

closeCart?.addEventListener(
  "click",
  closeCartDrawer
);

cartOverlay?.addEventListener(
  "click",
  closeCartDrawer
);


// =========================================
// المفضلة
// =========================================

function toggleWishlist(id) {
  const product = getProduct(id);

  if (!product) return;

  if (wishlist.includes(id)) {
    wishlist =
      wishlist.filter(
        itemId => itemId !== id
      );

    showToast(
      "تم حذف المنتج من المفضلة"
    );
  } else {
    wishlist.push(id);

    showToast(
      `تمت إضافة ${product.name} إلى المفضلة`
    );
  }

  saveWishlist();

  renderWishlist();
  renderProducts();
}


function renderWishlist() {
  if (!wishlistItems) return;

  if (wishlistCount) {
    wishlistCount.textContent =
      wishlist.length;
  }

  if (!wishlist.length) {
    wishlistItems.innerHTML = `
      <div class="empty-state">

        <i class="fa-regular fa-heart"></i>

        <h3>
          المفضلة فارغة
        </h3>

        <p>
          احفظ المنتجات التي أعجبتك هنا
        </p>

      </div>
    `;

    return;
  }

  wishlistItems.innerHTML = "";

  wishlist.forEach(id => {
    const product =
      getProduct(id);

    if (!product) return;

    const item =
      document.createElement("div");

    item.className =
      "wishlist-item";

    item.innerHTML = `
      <img
        src="${product.image}"
        alt="${product.name}"
      >

      <div class="wishlist-item-info">

        <h4>
          ${product.name}
        </h4>

        <div class="wishlist-item-price">
          ${formatPrice(product.price)}
        </div>

        <button
          class="wishlist-add-cart"
          data-wishlist-cart="${product.id}"
        >
          إضافة للسلة
        </button>

      </div>


      <button
        class="remove-item"
        data-remove-wishlist="${product.id}"
        aria-label="حذف"
      >
        <i class="fa-solid fa-trash"></i>
      </button>
    `;

    wishlistItems.appendChild(item);
  });
}


wishlistItems?.addEventListener(
  "click",
  event => {
    const addButton =
      event.target.closest(
        "[data-wishlist-cart]"
      );

    const removeButton =
      event.target.closest(
        "[data-remove-wishlist]"
      );

    if (addButton) {
      addToCart(
        Number(
          addButton.dataset.wishlistCart
        )
      );
    }

    if (removeButton) {
      toggleWishlist(
        Number(
          removeButton.dataset.removeWishlist
        )
      );
    }
  }
);


function openWishlistDrawer() {
  closeCartDrawer();

  wishlistDrawer?.classList.add("open");
  wishlistOverlay?.classList.add("open");

  updateBodyLock();
}


function closeWishlistDrawer() {
  wishlistDrawer?.classList.remove("open");
  wishlistOverlay?.classList.remove("open");

  updateBodyLock();
}


wishlistBtn?.addEventListener(
  "click",
  openWishlistDrawer
);

closeWishlist?.addEventListener(
  "click",
  closeWishlistDrawer
);

wishlistOverlay?.addEventListener(
  "click",
  closeWishlistDrawer
);


// =========================================
// تفاصيل المنتج
// =========================================

function openProductDetails(id) {
  const product = getProduct(id);

  if (
    !product ||
    !productModal ||
    !productModalContent
  ) {
    return;
  }

  productModalContent.innerHTML = `
    <div class="modal-product-image">

      <img
        src="${product.image}"
        alt="${product.name}"
      >

    </div>


    <div class="modal-product-info">

      <span class="product-category">
        ${product.categoryName}
      </span>

      <h2>
        ${product.name}
      </h2>


      <div class="product-rating">

        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>

        <span>
          ${product.rating}
        </span>

      </div>


      <p class="modal-product-description">
        ${product.description}
      </p>


      <div class="modal-product-price">

        <strong>
          ${formatPrice(product.price)}
        </strong>

        ${
          product.oldPrice
            ? `
              <del>
                ${formatPrice(product.oldPrice)}
              </del>
            `
            : ""
        }

      </div>


      <ul class="modal-features">

        ${product.features
          .map(
            feature => `
              <li>
                <i class="fa-solid fa-circle-check"></i>
                ${feature}
              </li>
            `
          )
          .join("")}

      </ul>


      <button
        class="modal-add-cart"
        data-modal-cart="${product.id}"
      >
        <i class="fa-solid fa-bag-shopping"></i>
        إضافة إلى السلة
      </button>

    </div>
  `;

  productModal.classList.add("open");

  updateBodyLock();
}


function hideProductModal() {
  productModal?.classList.remove("open");

  updateBodyLock();
}


productModalContent?.addEventListener(
  "click",
  event => {
    const button =
      event.target.closest(
        "[data-modal-cart]"
      );

    if (!button) return;

    addToCart(
      Number(
        button.dataset.modalCart
      )
    );

    hideProductModal();

    setTimeout(
      openCartDrawer,
      150
    );
  }
);


closeProductModal?.addEventListener(
  "click",
  hideProductModal
);


productModal?.addEventListener(
  "click",
  event => {
    if (event.target === productModal) {
      hideProductModal();
    }
  }
);


// =========================================
// الفلاتر
// =========================================

document
  .querySelectorAll(".filter-btn")
  .forEach(button => {
    button.addEventListener(
      "click",
      () => {
        activeCategory =
          button.dataset.filter;

        updateFilterButtons();
        renderProducts();
      }
    );
  });


function selectCategory(category) {
  activeCategory = category;
  searchTerm = "";

  if (productSearch) {
    productSearch.value = "";
  }

  if (mainSearchInput) {
    mainSearchInput.value = "";
  }

  updateFilterButtons();
  renderProducts();

  document
    .getElementById("products")
    ?.scrollIntoView({
      behavior: "smooth"
    });
}


function updateFilterButtons() {
  document
    .querySelectorAll(".filter-btn")
    .forEach(button => {
      button.classList.toggle(
        "active",
        button.dataset.filter ===
          activeCategory
      );
    });
}


document
  .querySelectorAll(".category-card")
  .forEach(button => {
    button.addEventListener(
      "click",
      () => {
        selectCategory(
          button.dataset.category
        );
      }
    );
  });


document
  .querySelectorAll(".promo-filter-btn")
  .forEach(button => {
    button.addEventListener(
      "click",
      () => {
        selectCategory(
          button.dataset.promoCategory
        );
      }
    );
  });


document
  .querySelectorAll(".footer-category")
  .forEach(button => {
    button.addEventListener(
      "click",
      () => {
        selectCategory(
          button.dataset.footerCategory
        );
      }
    );
  });


// =========================================
// البحث
// =========================================

function performSearch(value) {
  searchTerm = value;

  if (
    productSearch &&
    productSearch.value !== value
  ) {
    productSearch.value = value;
  }

  if (
    mainSearchInput &&
    mainSearchInput.value !== value
  ) {
    mainSearchInput.value = value;
  }

  renderProducts();
}


productSearch?.addEventListener(
  "input",
  event => {
    performSearch(
      event.target.value
    );
  }
);


mainSearchInput?.addEventListener(
  "input",
  event => {
    performSearch(
      event.target.value
    );
  }
);


mainSearchInput?.addEventListener(
  "keydown",
  event => {
    if (event.key !== "Enter") return;

    event.preventDefault();

    searchPanel?.classList.remove("open");

    document
      .getElementById("products")
      ?.scrollIntoView({
        behavior: "smooth"
      });
  }
);


// =========================================
// ترتيب المنتجات
// =========================================

sortProducts?.addEventListener(
  "change",
  event => {
    sortType = event.target.value;
    renderProducts();
  }
);


// =========================================
// البحث العلوي
// =========================================

searchToggle?.addEventListener(
  "click",
  () => {
    searchPanel?.classList.toggle("open");

    if (
      searchPanel?.classList.contains("open")
    ) {
      setTimeout(() => {
        mainSearchInput?.focus();
      }, 150);
    }
  }
);


closeSearch?.addEventListener(
  "click",
  () => {
    searchPanel?.classList.remove("open");
  }
);


// =========================================
// قائمة الهاتف
// =========================================

menuToggle?.addEventListener(
  "click",
  () => {
    mobileNav?.classList.toggle("open");

    const icon =
      menuToggle.querySelector("i");

    if (icon) {
      icon.className =
        mobileNav?.classList.contains("open")
          ? "fa-solid fa-xmark"
          : "fa-solid fa-bars";
    }
  }
);


mobileNav
  ?.querySelectorAll("a")
  .forEach(link => {
    link.addEventListener(
      "click",
      () => {
        mobileNav.classList.remove("open");

        const icon =
          menuToggle?.querySelector("i");

        if (icon) {
          icon.className =
            "fa-solid fa-bars";
        }
      }
    );
  });


// =========================================
// إتمام الطلب
// =========================================

checkoutBtn?.addEventListener(
  "click",
  () => {
    if (!cart.length) {
      showToast(
        "السلة فارغة أضف منتجًا أولًا",
        "error"
      );

      return;
    }

    const totals =
      calculateCart();

    if (checkoutTotal) {
      checkoutTotal.textContent =
        formatPrice(totals.total);
    }

    closeCartDrawer();

    checkoutModal?.classList.add("open");

    updateBodyLock();
  }
);


function hideCheckoutModal() {
  checkoutModal?.classList.remove("open");

  updateBodyLock();
}


closeCheckoutModal?.addEventListener(
  "click",
  hideCheckoutModal
);


checkoutModal?.addEventListener(
  "click",
  event => {
    if (
      event.target === checkoutModal
    ) {
      hideCheckoutModal();
    }
  }
);


checkoutForm?.addEventListener(
  "submit",
  event => {
    event.preventDefault();

    if (!cart.length) {
      hideCheckoutModal();

      showToast(
        "السلة فارغة",
        "error"
      );

      return;
    }

    const name =
      document
        .getElementById("customerName")
        ?.value.trim();

    const phone =
      document
        .getElementById("customerPhone")
        ?.value.trim();

    const address =
      document
        .getElementById("customerAddress")
        ?.value.trim();

    if (
      !name ||
      !phone ||
      !address
    ) {
      showToast(
        "يرجى تعبئة جميع البيانات المطلوبة",
        "error"
      );

      return;
    }

    if (phone.length < 7) {
      showToast(
        "يرجى إدخال رقم هاتف صحيح",
        "error"
      );

      return;
    }

    const newOrderNumber =
      "QW-" +
      Date.now()
        .toString()
        .slice(-7);

    if (orderNumber) {
      orderNumber.textContent =
        `رقم الطلب ${newOrderNumber}`;
    }

    cart = [];

    saveCart();
    renderCart();

    checkoutForm.reset();

    hideCheckoutModal();

    setTimeout(() => {
      successModal?.classList.add("open");

      updateBodyLock();
    }, 150);
  }
);


// =========================================
// نجاح الطلب
// =========================================

function hideSuccessModal() {
  successModal?.classList.remove("open");

  updateBodyLock();
}


closeSuccessModal?.addEventListener(
  "click",
  hideSuccessModal
);


successModal?.addEventListener(
  "click",
  event => {
    if (
      event.target === successModal
    ) {
      hideSuccessModal();
    }
  }
);


// =========================================
// النشرة البريدية
// =========================================

newsletterForm?.addEventListener(
  "submit",
  event => {
    event.preventDefault();

    const email =
      newsletterEmail?.value.trim();

    if (!email) {
      showToast(
        "أدخل البريد الإلكتروني",
        "error"
      );

      return;
    }

    showToast(
      "تم الاشتراك بنجاح في عروض قوة"
    );

    newsletterForm.reset();
  }
);


// =========================================
// العد التنازلي
// =========================================

const countdownKey =
  "qowaOfferEnd";

let countdownEnd =
  Number(
    localStorage.getItem(countdownKey)
  );

if (
  !countdownEnd ||
  countdownEnd <= Date.now()
) {
  countdownEnd =
    Date.now() +
    5 * 24 * 60 * 60 * 1000 +
    8 * 60 * 60 * 1000;

  localStorage.setItem(
    countdownKey,
    String(countdownEnd)
  );
}


function updateCountdown() {
  const remaining =
    Math.max(
      0,
      countdownEnd - Date.now()
    );

  const days =
    Math.floor(
      remaining /
        (1000 * 60 * 60 * 24)
    );

  const hours =
    Math.floor(
      (
        remaining /
        (1000 * 60 * 60)
      ) % 24
    );

  const minutes =
    Math.floor(
      (
        remaining /
        (1000 * 60)
      ) % 60
    );

  const seconds =
    Math.floor(
      (remaining / 1000) % 60
    );

  const daysElement =
    document.getElementById("days");

  const hoursElement =
    document.getElementById("hours");

  const minutesElement =
    document.getElementById("minutes");

  const secondsElement =
    document.getElementById("seconds");

  if (daysElement) {
    daysElement.textContent =
      String(days).padStart(2, "0");
  }

  if (hoursElement) {
    hoursElement.textContent =
      String(hours).padStart(2, "0");
  }

  if (minutesElement) {
    minutesElement.textContent =
      String(minutes).padStart(2, "0");
  }

  if (secondsElement) {
    secondsElement.textContent =
      String(seconds).padStart(2, "0");
  }
}


updateCountdown();

setInterval(
  updateCountdown,
  1000
);


// =========================================
// الهيدر والعودة للأعلى
// =========================================

window.addEventListener(
  "scroll",
  () => {
    if (window.scrollY > 30) {
      mainHeader?.classList.add(
        "scrolled"
      );
    } else {
      mainHeader?.classList.remove(
        "scrolled"
      );
    }

    if (window.scrollY > 500) {
      backToTop?.classList.add(
        "show"
      );
    } else {
      backToTop?.classList.remove(
        "show"
      );
    }

    updateActiveNavigation();
  }
);


backToTop?.addEventListener(
  "click",
  () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }
);


// =========================================
// القائمة النشطة
// =========================================

function updateActiveNavigation() {
  const sections =
    document.querySelectorAll(
      "main section[id]"
    );

  let current = "home";

  sections.forEach(section => {
    const sectionTop =
      section.offsetTop - 180;

    if (
      window.scrollY >= sectionTop
    ) {
      current = section.id;
    }
  });

  document
    .querySelectorAll(
      ".desktop-nav .nav-link"
    )
    .forEach(link => {
      link.classList.remove("active");

      if (
        link.getAttribute("href") ===
        `#${current}`
      ) {
        link.classList.add("active");
      }
    });
}


// =========================================
// الروابط الداخلية
// =========================================

document
  .querySelectorAll('a[href^="#"]')
  .forEach(link => {
    link.addEventListener(
      "click",
      event => {
        const href =
          link.getAttribute("href");

        if (
          !href ||
          href === "#"
        ) {
          return;
        }

        const target =
          document.querySelector(href);

        if (!target) return;

        event.preventDefault();

        target.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      }
    );
  });


// =========================================
// قفل الصفحة
// =========================================

function updateBodyLock() {
  const somethingOpen =
    cartDrawer?.classList.contains("open") ||
    wishlistDrawer?.classList.contains("open") ||
    productModal?.classList.contains("open") ||
    checkoutModal?.classList.contains("open") ||
    successModal?.classList.contains("open");

  document.body.classList.toggle(
    "no-scroll",
    Boolean(somethingOpen)
  );
}


// =========================================
// Escape
// =========================================

document.addEventListener(
  "keydown",
  event => {
    if (event.key !== "Escape") {
      return;
    }

    closeCartDrawer();
    closeWishlistDrawer();
    hideProductModal();
    hideCheckoutModal();
    hideSuccessModal();

    searchPanel?.classList.remove("open");
    mobileNav?.classList.remove("open");

    const icon =
      menuToggle?.querySelector("i");

    if (icon) {
      icon.className =
        "fa-solid fa-bars";
    }

    updateBodyLock();
  }
);


// =========================================
// السنة الحالية
// =========================================

const currentYear =
  document.getElementById(
    "currentYear"
  );

if (currentYear) {
  currentYear.textContent =
    new Date().getFullYear();
}


// =========================================
// التشغيل الأول
// =========================================

renderProducts();
renderCart();
renderWishlist();
updateActiveNavigation();