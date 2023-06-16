"use strict";

// Override for page /order - terms and conditions to be clicked by default
// Created on 12.03.2022
function setTermsAndConditions() {
  const termsCheckbox = document.querySelector(
    ".float-xs-left > .custom-checkbox > input"
  );
  if (termsCheckbox) {
    termsCheckbox.checked = true;

    const termsLabel = document.querySelector(
      "#checkout-payment-step-check .js-terms"
    );
    termsLabel.innerHTML =
      "С натискането на бутона 'Завършване на поръчката' се съгласявате с oбщите условия, които можете да видите";
    termsLabel.insertAdjacentHTML(
      "afterend",
      '&nbsp<a class="button-terms" href="https://www.decathlon.bg/content/40-obshti-usloviya-za-prodazhba">тук</a>'
    );
  }
}

///////////////////////////////////////////////

// change stickers for specific products
// Created on 30.05.2023 for June
function changeStickers() {
  setTimeout(function () {
    var attributeValues = [
      "246077",
      "188527",
      "186954",
      "199239",
      "144640",
      "175589",
      "207173",
      "187707",
      "145660",
      "212166",
      "197077",
      "188561",
      "192875",
      "185378",
      "173787",
      "107876",
      "126349",
      "171699",
      "165301",
      "203991",
      "107877",
      "186878",
      "163204",
      "191025",
      "96171",
      "244430",
      "118848",
      "100514",
      "113826",
      "254732",
      "136516",
      "166178",
      "212168",
      "173786",
      "113825",
    ];

    attributeValues.forEach(function (value) {
      var stickerSelector = `.thumbnail--product[data-id-product-attribute="${value}"] div.block__flag.col-md-12`;
      var customStickers = document.querySelectorAll(stickerSelector);
      if (customStickers.length > 0) {
        customStickers.forEach(function (element) {
          var img = document.createElement("img");
          img.src =
            "https://contents.mediadecathlon.com/b89433/k$90f2737827054d6a5e2102c7eb888918/sport%20na%20meseca.jpg";
          img.style.maxHeight = "47px";
          img.style.width = "77px";
          img.style.height = "47px";

          element.appendChild(img);
        });
      }
    });
  }, 200);
}

///////////////////////////////////////////////

// add custom classes to the footer
// Created on 16.06.2022
function addCustomClassesToFooter() {
  const footerElements = [
    {
      selector: "#footer .footer--links",
      class: "click-link-send-event-footer",
    },
    {
      selector: "#footer .promises .container",
      class: "click-link-send-event-promises",
    },
    {
      selector: "#index .bloc__suggested-products",
      class: "click-link-send-event-personalisation",
    },
    {
      selector: "#cart .bloc__suggested-products",
      class: "click-link-send-event-personalisation",
    },
    {
      selector: "#product #nav_cross-selling",
      class: "click-link-send-event-cross_selling",
    },
    {
      selector: "#product #nav_similar-product",
      class: "click-link-send-event-similar_product",
    },
  ];

  footerElements.forEach((element) => {
    const el = document.querySelector(element.selector);
    if (el) {
      el.classList.add(element.class);
    }
  });
}

///////////////////////////////////////////////

// insert sample fields on my-addresses
// created on 04.07.2022
function insertSampleFields() {
  const addressesStepSelector = "#checkout-addresses-step .form-fields";
  const myAddressesSelector = "#address .form-fields";

  $("<p>Пример: +359 88 999 9999</p>").insertAfter(
    `${addressesStepSelector} .phone .form-control[name='phone']`
  );
  $("<p>*не са разрешени символи (!@#$%-)</p>").insertAfter(
    `${addressesStepSelector} .firstname .form-control[name='firstname']`
  );
  $("<p>*не са разрешени символи (!@#$%-)</p>").insertAfter(
    `${addressesStepSelector} .lastname .form-control[name='lastname']`
  );
  $("<p>Пример: ж.к Дружба, ул. Иван Иванов 5</p>").insertAfter(
    `${addressesStepSelector} .form-control[name='address1']`
  );
  $("<p>Пример: блок 35, вход А</p>").insertAfter(
    `${addressesStepSelector} .form-control[name='address2']`
  );

  $("<p style='font-size: 0.8rem'>Пример: +359 88 999 9999</p>").insertAfter(
    `${myAddressesSelector} .phone .form-control[name='phone']`
  );
  $(
    "<p style='font-size: 0.8rem'>*не са разрешени символи (!@#$%-)</p>"
  ).insertAfter(
    `${myAddressesSelector} .firstname .form-control[name='firstname']`
  );
  $(
    "<p style='font-size: 0.8rem'>*не са разрешени символи (!@#$%-)</p>"
  ).insertAfter(
    `${myAddressesSelector} .lastname .form-control[name='lastname']`
  );
  $(
    "<p style='font-size: 0.8rem'>Пример: ж.к Дружба, ул. Иван Иванов 5</p>"
  ).insertAfter(
    `${myAddressesSelector} .form-group .form-control[name='address1']`
  );
  $("<p style='font-size: 0.8rem'>Пример: блок 35, вход А</p>").insertAfter(
    `${myAddressesSelector} .form-group .form-control[name='address2']`
  );
}

///////////////////////////////////////////////
// Add eco logo to button Ecoproducts from the menu
// Created on 15.09.2022
function addEcoLogo() {
  const addEcoLogo = document.querySelector("#soomagicmenu-main .weroot-12");
  if (addEcoLogo) {
    const elemEcoLogo = document.createElement("img");
    elemEcoLogo.setAttribute(
      "src",
      "https://contents.mediadecathlon.com/p2375733/k$6e03a6bdb58f2fb549ecb1a443131667/img%20eco%20logo%20png.png"
    );
    elemEcoLogo.setAttribute("height", "48");
    elemEcoLogo.setAttribute("width", "48");
    elemEcoLogo.setAttribute("alt", "Eco");
    addEcoLogo.appendChild(elemEcoLogo);
  }
}

///////////////////////////////////////////////
// Add back to top button for mobile version
// Created on 19.09.2022

function addScrollToTopButton() {
  var bodyEl = document.querySelector("body");
  var buttonEl = document.createElement("button");
  buttonEl.classList.add("back-to-top");
  var rootElement = document.documentElement;
  var homePageSelector = document.querySelector("#index");
  var categoryPageSelector = document.querySelector("#category");
  var productPageSelector = document.querySelector("#product");

  function handleScroll() {
    // Do something on scroll
    var scrollTotal = rootElement.scrollHeight - rootElement.clientHeight;
    if (rootElement.scrollTop / scrollTotal > 0.2) {
      // Show button
      buttonEl.classList.add("show-btn");
    } else {
      // Hide button
      buttonEl.classList.remove("show-btn");
    }
  }

  function scrollToTop() {
    // Scroll to top logic
    rootElement.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
  buttonEl.addEventListener("click", scrollToTop);
  document.addEventListener("scroll", handleScroll);

  if (homePageSelector || categoryPageSelector || productPageSelector) {
    bodyEl.append(buttonEl);
  }
}

///////////////////////////////////////////////

function changeSizeFromCartPage() {
  setInterval(function () {
    if (
      $(
        '#cart .cart-item .product-line-info .product-reference .sku:contains("2030818")'
      ).length
    ) {
      document.querySelector(
        ".page-cart .section--main .cart-grid .cart-container .cart-overview .cart-items .cart-item .product-line-grid .product-line-grid-name .product-line-info .value"
      ).innerHTML = "3- МЕСТНА";
    }
  }, 1000);
}

function changeSizeFromOrderPage() {
  setInterval(function () {
    if (
      $('#checkout .product-name .product-reference span:contains("2030818")')
        .length
    ) {
      document.querySelector(
        ".page--checkout .cart-summary section .cart-summary-products .media-list .media .media-body .product-line-info .value"
      ).innerHTML = "3- МЕСТНА";
    }
  }, 1000);
}

function changeSizeFromOrderConfirmationPage() {
  if (
    $(
      '#order-confirmation .order-confirmation-table .order-line .details div:contains("Референтен номер: 2030818")'
    ).length
  ) {
    document.querySelector(
      "#order-confirmation .order-confirmation-table .order-line .details span"
    ).innerHTML =
      "ПАЛАТКА ЗА КЪМПИНГ 2 SECONDS FRESH&BLACK, 3-МЕСТНА - de_modelcolor : БЯЛО- de_modelsize : 3- МЕСТНА";
  }
}

function addNewSectionAboveDeliveryStep() {
  const checkoutDeliveryStep = document.querySelector(
    "#checkout #checkout-delivery-step"
  );

  if (checkoutDeliveryStep) {
    const createDivEl = checkoutDeliveryStep.getElementsByTagName("div")[0];
    const newDivEL = document.createElement("div");
    newDivEL.className = "split-order";

    newDivEL.innerHTML = `
    <button id="btn-delivery-more-info">?</button>
    <div id="myModal" class="modal-delivery">
    <div class="modal-delivery-content">
    <div class="main-one">     
    <div class="beggining-of-the-code"> 
    <div class="center-text-and-close">
    <span class="questions">Често задавани въпроси</span> <span class="close-delivery-step">&times;</span>
    </div>
    <div class="questions-common">
    <div id="accordion">

      <div class="card">
        <div class="card-header">
        <i class="fa-solid fa-caret-down"></i>
          <a class="card-link" data-toggle="collapse" href="#collapseOne">
          Защо поръчката ми се разделя на няколко доставки?
          </a>
        </div>
        <div id="collapseOne" class="collapse" >
          <div class="card-body">
          Възможно е поръчката да се раздели на няколко пратки в зависимост от това къде са налични избраните продукти. Тежки и обемни артикули винаги се изпращат в отделна пратка, за да гарантираме по-надеждна доставка. Ако поръчката не отговаря на условията за безплатна доставка, за всяка от пратките ще се начисли съответната цена на доставка.
          </div>
        </div>
      </div>
  
      <div class="card">
        <div class="card-header">
        <i class="fa-solid fa-caret-down"></i>
          <a class="collapsed card-link" data-toggle="collapse" href="#collapseTwo">
          Защо не виждам всички методи на доставка?
        </a>
        </div>
        <div id="collapseTwo" class="collapse" >
          <div class="card-body">
          Методите на доставка се предлагат в зависимост от твоята локация и къде е наличен избраният продукт. Съществуват следните възможности, поради които един или няколко метода на доставка не се визуалзират:
          <li>Click&Collect – продуктът е наличен само в магазин, намиращ се далеч от вашия адрес за доставка и/или към момента няма наличност</li>
          <li>Click&Collect е единствената опция – при специфични продукти, които са забранени по закон за транспортиране и доставка от куриер (пример: аерозоли, газови бутилки и други).</li>
          <li>До офис на куриер – при обемни и тежки продукти опцията за доставка до офис на куриер не е възможна (за размери над 60 x 35 x 37 см и/или тегло над 32 кг).</li>
          <li>Експресна доставка – опцията към момента е налична само в София и Пловдив.</li>
          </div>
        </div>
      </div>
      
      <div class="card">
        <div class="card-header">
        <i class="fa-solid fa-caret-down"></i>
          <a class="collapsed card-link" data-toggle="collapse" href="#collapseThree">
          Защо не виждам всички офиси на куриери?
          </a>
        </div>
        <div id="collapseThree" class="collapse" >
          <div class="card-body">
          С цел максимално удобство системата ни визуализира 
          най-близките офиси на куриери спрямо адреса за доставка, който си задал в своя профил. 
          Ако желаеш поръчка да бъде доставена до офис в друг град или квартал, е нужно да въведеш 
          точния адрес на доставка и пощенски код
          </div>
        </div>
      </div>
      
    </div>
  </div>
    `;
    if (createDivEl) {
      createDivEl.before(newDivEL);
    }
  }

  const modalDeliveryStep = document.getElementById("myModal");
  const btnDeliveryStep = document.getElementById("btn-delivery-more-info");
  const spanDeliveryStep = document.getElementsByClassName(
    "close-delivery-step"
  )[0];

  if (checkoutDeliveryStep) {
    if (btnDeliveryStep) {
      btnDeliveryStep.onclick = function () {
        modalDeliveryStep.style.display = "block";
      };
    }
    if (spanDeliveryStep) {
      spanDeliveryStep.onclick = function () {
        modalDeliveryStep.style.display = "none";
      };
    }

    window.onclick = function (event) {
      if (event.target == modalDeliveryStep) {
        modalDeliveryStep.style.display = "none";
      }
    };
  }
}

// Add class to <a> tag - subgategory
// Created on 02.12.2022

function addClassToSubcategoryLinks() {
  const subcategoryButtons = document.querySelectorAll(
    "#category .subcategories-item a"
  );

  if (subcategoryButtons) {
    subcategoryButtons.forEach((subcategoryA) => {
      subcategoryA.classList.add("subcategories-item-href");
    });
  }
}

//////////////////////////////////
// Product page view store availability

function initAvailabilityUpdate() {
  const DANGER_COLOR = "#e20c18";
  const PRIMARY_COLOR = "#0082c3";
  const WARNING_COLOR = "#bcb02c";

  let observers = [];
  const storeAvailabilities = document.querySelectorAll('span[id*="store-"]');

  const addSpinner = (node) => {
    const icon = document.createElement("i");

    icon.classList.add("fa", "fa-circle-o-notch", "fa-spin", "fa-1x");
    icon.style.marginLeft = "0.5em";

    if (node.innerText.trim() === "Няма Наличност") {
      icon.style.color = DANGER_COLOR;
    } else {
      icon.classList.add("color--primary");
    }

    node.appendChild(icon);
  };

  // Before the data event for the availability is present we need to fetch and observe the
  // store availability elements in order to add the loader when they change. If we just add
  // the spinner they can hide it when rerendered.
  storeAvailabilities.forEach((node) => {
    addSpinner(node);

    const observer = new MutationObserver(function (mutations) {
      mutations.forEach(function (mutation) {
        if (
          mutation.type === "childList" &&
          mutation.addedNodes.length === 1 &&
          mutation.addedNodes[0].nodeName === "#text"
        ) {
          addSpinner(node);
        }
      });
    });

    const config = { attributes: true, childList: true, characterData: true };
    observer.observe(node, config);
    observers.push(observer);
  });

  setInterval(function () {
    // Fetch the latest event in order to cover the case where the size was changed.
    const availabilityEvents = window.dataLayer.filter(
      (e) => e.event === "product page view store availability"
    );

    const availabilityEvent = availabilityEvents[availabilityEvents.length - 1];

    if (availabilityEvent) {
      // Once the event is available we no longer need the observer to work on the store availability
      // elements.
      observers.forEach((obs) => obs.disconnect());

      const stores = availabilityEvent.products.articles[0].availability.stores;

      if (stores.length > 0) {
        stores.forEach(function (store) {
          const availabilityText = document.getElementById("store-" + store.id);

          if (store.availability === 2 || store.availability === 3) {
            availabilityText.innerText = `Ограничена наличност (${
              store.availability - 1
            } бр.)`;

            availabilityText.style.color = WARNING_COLOR;
          }

          if (store.availability > 3) {
            availabilityText.innerText = `В наличност (${
              store.availability - 1
            } бр.)`;

            availabilityText.style.color = PRIMARY_COLOR;
          }

          if (
            !store.availability ||
            store.availability === 0 ||
            store.availability === 1
          ) {
            availabilityText.innerText = "Няма наличност";
            availabilityText.style.color = DANGER_COLOR;
          }
        });
      }
    }
  }, 500);
}

window.addEventListener("load", (event) => {
  if (document.body.id === "product") {
    initAvailabilityUpdate();
  }
});

///////////////////////////////////////////////
// Make button view more bold for all pages
function changeFontWeight() {
  var elements = document.querySelectorAll("#soomagicmenu-main span");
  for (var i = 0; i < elements.length; i++) {
    var element = elements[i];
    if (element.textContent.includes("Виж повече ❯")) {
      element.style.fontWeight = "600";
    }
  }
}

// Add custom class blizo do men
function addBlizoDoMenClass() {
  var elements = document.querySelectorAll("#checkout span");
  for (var i = 0; i < elements.length; i++) {
    var element = elements[i];
    if (element.textContent.includes("Близо до мен")) {
      element.classList.add("blizo-do-men");
    }
  }
}

// Remove img link from cms page
function removeImageLinks() {
  const newPayPage = document.querySelector(".cms-id-95");
  if (newPayPage) {
    var links = document.querySelectorAll("a.image-wrapper");
    for (var i = 0; i < links.length; i++) {
      var link = links[i];
      if (link.getAttribute("href") === "") {
        link.removeAttribute("href");
        link.style.cursor = "default";
      }
    }
  }
}

// Add custom text to my addresses
function addAddressStepNote() {
  const paragraph = document.createElement("p");
  paragraph.classList.add("addressStepNote");
  paragraph.textContent =
    "Въведи своя точен адрес. Можеш да го използваш като адрес за доставка или за да откриеш най-близките до теб наши магазини и офиси на куриер";

  const targetElement = document.querySelector(
    "#checkout-addresses-step-check .address-form h2"
  );
  if (
    targetElement &&
    targetElement.textContent.includes("Добавяне на нов адрес")
  ) {
    targetElement.insertAdjacentElement("afterend", paragraph);
  }

  const addressStepNote = document.querySelector(
    ".page--checkout .checkout-step .note--bottom"
  );
  if (addressStepNote) {
    addressStepNote.innerHTML =
      "Въведи своя точен адрес. Можеш да го използваш като адрес за доставка или за да откриеш най-близките до теб наши магазини и офиси на куриер";
  }
}

// Add app info in the footer
// Created on 03.04.2023
function addFooterAppSection() {
  const footerSection = document.querySelector("#footer .footer--copyright");

  if (footerSection) {
    const createAppEl = footerSection.querySelector("div");
    const newDivAppEL = document.createElement("div");

    newDivAppEL.innerHTML = `
      <div class="footer-app-section">
        <div class="footer-app-mob-img">
          <img class="mobile-img-footer-app" style="" src="https://contents.mediadecathlon.com/s895651/k$b479b910c6653d2535f7f297a3707a90/Grafika%20footer%20app%20desktop.png?format=auto&quality=50">
        </div>
        <div class="footer-app-right-section">
          <div>
            <h3 class="footer-app-heading-text">Открий пряк път към спорта!</h3>
            <p class="footer-app-secondary-text">Свали Dechatlon App и се възползвай от всички предимства.</p>
          </div>
          <div class="footer-app-buttons">
            <img class="footer-app-qr" src="https://contents.mediadecathlon.com/s994010/k$61efa0b542f0239fa3077797cc95958f/qrcode%20web%20footer.png">
            <a class="footer-app-download-btn" href="https://app.adjust.com/sg2udyv" target="_blank">
              <img class="footer-app-download-btn-img" src="https://contents.mediadecathlon.com/s991993/k$223999fdbc149bbbd55569f4b7fe2bd1/downloadapp.png">
            </a>
          </div>
        </div>
      </div>
    `;

    createAppEl.before(newDivAppEL);
  }
}

// Add new pay sticker to product pages
function addNewPaySticker() {
  const productFrontPrice = document.querySelector(
    "#product .price-current .price-text"
  );

  if (productFrontPrice) {
    const priceText = productFrontPrice.textContent.replace(/\s/g, "");
    const productPrice = parseFloat(priceText);

    if (productPrice > 20 && productPrice < 2000) {
      const priceRow = document.querySelector("#product .price-row");

      if (priceRow) {
        const newPayBanner = document.createElement("div");
        newPayBanner.classList.add("newpay-banner");

        const newPayImg = document.createElement("img");
        newPayImg.classList.add("newpay-img");
        newPayImg.src =
          "https://contents.mediadecathlon.com/s992409/k$1042d7eaa8945fd401c3873c35d439be/newpay.png";
        newPayImg.alt = "Вземи сега, плати по-късно";

        const newPayText = document.createElement("p");
        newPayText.classList.add("newpay-text");
        newPayText.textContent = "Вземи сега, плати по-късно";

        newPayBanner.appendChild(newPayImg);
        newPayBanner.appendChild(newPayText);

        priceRow.parentNode.insertBefore(newPayBanner, priceRow.nextSibling);
      }
    }
  }
}

// Add custom subcategories for camping
// Created on 23.05.2023

function addCampingCategories() {
  const campingCategory = document.querySelector(
    ".category-id-4621 .block__subcategories--group:nth-child(3)"
  );

  if (campingCategory) {
    const createCampCategory = campingCategory.querySelector("div");
    const newCampingCategories = document.createElement("div");

    newCampingCategories.innerHTML = `
      <div class="US_container">
        <a href="/4636-palatki-i-zasloni"> 
          <div class="US_item">
            <div class="US_content">
              <img src="https://contents.mediadecathlon.com/p1965987/k$7955b9a14e9880c8ea2b343dbba584a7/stan-2-seconds-na-kempovanie-pre-3-osoby-modry.jpg?f=0x50&format=auto&quality=100">
            </div>
            <div class="US_content">
              <p>Палатки и заслони</p>
            </div>
          </div>
        </a>
        <a href="/4622-kamping-mebeli">
          <div class="US_item">
            <div class="US_content">
              <img src="https://contents.mediadecathlon.com/p1757596/k$5f6afde636ebc761b055f38fb88e1db0/skladaci-kempingovy-stol-a-4-sedacky-pre-4-az-6-osob.jpg?f=0x50&format=auto&quality=100">
            </div>
            <div class="US_content">
              <p>Къмпинг мебели</p>
            </div>
          </div>
        </a>
        <a href="/4628-kamping-oborudvane">
          <div class="US_item">
            <div class="US_content">
              <img src="https://contents.mediadecathlon.com/p1777096/k$d918544a4e8e91b5178a22785c0116eb/nepremokavy-a-priedusny-obal-na-spaci-vak-trekingovy-sivo-oranzovy.jpg?f=0x50&format=auto&quality=100">
            </div>
            <div class="US_content">
              <p>Къмпинг оборудване</p>
            </div>
          </div>
        </a>
        <a href="/content/104-catalog-camping">
          <div class="US_item catalog-camping">
            <div class="US_content">
              <img class="catalog-img" src="https://contents.mediadecathlon.com/s1001868/k$beca8249271211f40d9ab1ea25bb4b67/catalog.png">
            </div>
            <div class="US_content">
              <p class="catalog-txt">Каталог</p>
            </div> 
          </div>
        </a>
      </div>
    `;

    createCampCategory.before(newCampingCategories);
  }
}

// Product page redesign
// Created on 02.05.2023

function moveElementsToPriceRow() {
  const productPrice = document.querySelector("#product .bloc--product-price");
  const reviews = document.querySelector(
    '#product [data-anchor="reviews_product"]'
  );
  const targetPosition = document.querySelector(".js-title");

  if (productPrice) {
    // Create a new div element for the price row
    const priceRow = document.createElement("div");
    priceRow.classList.add("price-row");

    // Append the product price and reviews elements to the price row
    priceRow.appendChild(productPrice);
    priceRow.appendChild(reviews);

    targetPosition.insertAdjacentElement("afterend", priceRow);
  }
}

document.addEventListener("DOMContentLoaded", moveElementsToPriceRow);

setTermsAndConditions();
changeStickers();
addCustomClassesToFooter();
insertSampleFields();
addEcoLogo();
addScrollToTopButton();
// Change the size of  the product 2030818
changeSizeFromCartPage();
changeSizeFromOrderPage();
changeSizeFromOrderConfirmationPage();
////////////////////////////////////
addNewSectionAboveDeliveryStep();
addClassToSubcategoryLinks();
setInterval(addBlizoDoMenClass, 1000);
changeFontWeight();
removeImageLinks();
addAddressStepNote();

setTimeout(() => {
  addCampingCategories();
}, 0);
setTimeout(() => {
  addNewPaySticker();
}, 1000);
setTimeout(() => {
  addFooterAppSection();
}, 2000);
