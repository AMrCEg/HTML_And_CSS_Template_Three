let languageElement = document.querySelector(".language");
let logoElement = document.querySelector(".logo");
let landingHeader = document.querySelector(".landing .container .text h1");
let landingParagraph = document.querySelector(".landing .container .text p");
let articlesLink = document.querySelector(`.main-menu a[href="#articles"] `);
let galleryLink = document.querySelector(`.main-menu a[href="#gallery"] `);
let featuresLink = document.querySelector(`.main-menu a[href="#features"] `);
let OtherLink = document.querySelector(`.main-menu a[href="#"] `);
// console.log(languageElement);

/* Toggle between arabic and english */
let language = "en";
function addRemoveArabicCssFile() {
  // Get HTML head element
  let head = document.getElementsByTagName("HEAD")[0];
  if (language === "en") {
    // Change innerHTML of languageElement to english
    languageElement.innerHTML = "EN";
    // Change language to arabic
    language = "ar";
    // Create new link Element
    let link = document.createElement("link");
    // set the attributes for link element
    link.rel = "stylesheet";
    link.href = "css/amr-rtl.css";
    // Append link element to HTML head
    head.appendChild(link);

    // Trigger change Page Content function
    changePageContent();
  } else if (language === "ar") {
    // Change innerHTML of languageElement to arabic
    languageElement.innerHTML = "ع";
    // Change language to arabic
    language = "en";
    // remove css link element from HTML head
    head.lastElementChild.remove();

    // Trigger Restore Page Content function
    restorePageContent();
  }
}

// change Page Content function

function changePageContent() {
  //   logoElement.innerHTML = "ع";

  //  Header links
  articlesLink.innerHTML = "المقالات";
  galleryLink.innerHTML = "المعرض";
  featuresLink.innerHTML = "الخصائص";
  OtherLink.innerHTML = "روابط أخرى";

  landingHeader.innerHTML = "مرحبًا بك في عالم الزيرو";
  landingParagraph.innerHTML =
    "هنا سأشارك كل شيء عن حياتي. الكتب التي أقرأها، الألعاب التي ألعبها، القصص والأحداث...";

  // articleMoreArrow

  Array.from(document.querySelectorAll(".more")).forEach((element) => {
    element.lastElementChild.classList.remove("fa-long-arrow-alt-right");
    element.lastElementChild.classList.add("fa-long-arrow-alt-left");
  });
}

// Restore Page Content function
function restorePageContent() {
  //   logoElement.innerHTML = "E.AMrCEG";

  //  Header links
  articlesLink.innerHTML = "Articles";
  galleryLink.innerHTML = "Gallery";
  featuresLink.innerHTML = "Features";
  OtherLink.innerHTML = "Other Links";

  // landing
  landingHeader.innerHTML = "Welcome, To Elzero World";
  landingParagraph.innerHTML =
    "Here i'm gonna share everything about my life. Books i'm reading, Games i'm Playing, Stories and Events...";

  // articleMoreArrow
  Array.from(document.querySelectorAll(".more")).forEach((element) => {
    element.lastElementChild.classList.remove("fa-long-arrow-alt-left");
    element.lastElementChild.classList.add("fa-long-arrow-alt-right");
  });
}

// Toggle between arabic and english
languageElement.addEventListener("click", addRemoveArabicCssFile);
