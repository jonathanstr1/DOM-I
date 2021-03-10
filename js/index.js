const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

let DiA = document.querySelector("h1");
DiA.textContent = siteContent.cta["h1"];
// console.log(DiA);

const links = document.querySelectorAll("nav a");
// console.log(links);

// console.log(siteContent.nav);
const navLinks = siteContent.nav;
// console.log(navLinks);
links[0].textContent = navLinks["nav-item-1"];
links[1].textContent = navLinks["nav-item-2"];
links[2].textContent = navLinks["nav-item-3"];
links[3].textContent = navLinks["nav-item-4"];
links[4].textContent = navLinks["nav-item-5"];
links[5].textContent = navLinks["nav-item-6"];
// console.log(navLinks["nav-item-1"]);

let codeCircle = document.getElementById("cta-img");
codeCircle.setAttribute('src', "img/header-img.png" );

let buttonA = document.querySelector("button");
buttonA.textContent = siteContent.cta["button"];

let featuresT = document.querySelector("h4");
// console.log(featuresT);
featuresT.textContent = siteContent["main-content"]["features-h4"];
// console.log(siteContent["main-content"]["features-h4"]);
// let featuresB = document.querySelector("p");
let featuresB = featuresT.nextElementSibling;
console.log(featuresB);
let aboutT = featuresT.nextElementSibling;
// let test2 = test.nextElementSibling;
let test1 = document.querySelector("div.text-content");
let test2 = test1.nextElementSibling;
console.log(test1);
console.log(test2);

console.log(aboutT);
aboutT.textContent = siteContent["main-content"]["about-h4"];
featuresB.textContent = siteContent["main-content"]["features-content"];
let test3 = test2.querySelector("h4");
console.log(test3);
test3.textContent = siteContent["main-content"]["about-h4"];
let test4 = test3.nextElementSibling;
test4.textContent = siteContent["main-content"]["about-content"];
let middlePic = document.querySelector("#middle-img");
middlePic.setAttribute('src', "img/mid-page-accent.jpg");
// console.log(document.getElementsByClassName('main-content'));
let bottom3 = middlePic.nextElementSibling;
console.log(bottom3);
let services = bottom3.querySelector(".text-content");
let servicesT = services.querySelector("h4");
servicesT.textContent = siteContent["main-content"]["services-h4"];
let servicesB = services.querySelector("p");
servicesB.textContent = siteContent["main-content"]["services-content"];

let product = services.nextElementSibling;
let productT = product.querySelector("h4");
productT.textContent = siteContent["main-content"]["product-h4"];
let productB = product.querySelector("p");
productB.textContent = siteContent["main-content"]["product-content"];

let vision = product.nextElementSibling;
let visionT = vision.querySelector("h4");
visionT.textContent = siteContent["main-content"]["vision-h4"];
let visionB = vision.querySelector("p");
visionB.textContent = siteContent["main-content"]["vision-content"];
console.log(productT);
// aboutT.textContent = siteContent["main-content"]["about-h4"];
// featuresB.sibl
//  console.log(aboutT);