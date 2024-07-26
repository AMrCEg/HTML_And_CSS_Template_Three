let langElement = document.querySelector(".lang");
let logoElement = document.querySelector(".logo");
let landingHeader = document.querySelector(".landing .container .text h1");
let landingParagraph = document.querySelector(".landing .container .text p");
let articlesLink = document.querySelector(`.main-menu a[href="#articles"] `);
let galleryLink = document.querySelector(`.main-menu a[href="#gallery"] `);
let featuresLink = document.querySelector(`.main-menu a[href="#features"] `);
let OtherLink = document.querySelector(`.main-menu a[href="#"] `);
console.log(OtherLink);
{
  /* <ul class="main-menu">

            <!-- Start mega-menu -->
            <div class="mega-menu">
              <div class="image"><img src="imgs/megamenu.png" alt=""></div>
              <ul class="column">
                <li>
                  <a href="#testimonials">
                    <i class="far fa-comments fa-fw"></i>
                    Testimonials
                  </a>
                </li>
                <li>
                  <a href="#team-members">
                    <i class="far fa-user fa-fw"></i>
                    Team Members
                  </a>
                </li>
                <li>
                  <a href="#services">
                    <i class="far fa-building fa-fw"></i>
                    Services
                  </a>
                </li>
                <li>
                  <a href="#our-skills">
                    <i class="far fa-check-circle fa-fw"></i>
                    Our Skills
                  </a>
                </li>
                <li>
                  <a href="#how-it-works">
                    <i class="far fa-clipboard fa-fw"></i>
                    How It Works
                  </a>
                </li>
              </ul>
              <ul class="column">
                <li>
                  <a href="#events">
                    <i class="far fa-calendar-alt fa-fw"></i>
                    Events
                  </a>
                </li>
                <li>
                  <a href="#pricing-plans">
                    <i class="fas fa-server fa-fw"></i>
                    Pricing Plans
                  </a>
                </li>
                <li>
                  <a href="#top-videos">
                    <i class="far fa-play-circle fa-fw"></i>
                    Top Videos
                  </a>
                </li>
                <li>
                  <a href="#stats">
                    <i class="far fa-chart-bar fa-fw"></i>
                    Stats
                  </a>
                </li>
                <li>
                  <a href="#discount">
                    <i class="fas fa-percent fa-fw"></i>
                    Request A Discount
                  </a>
                </li>
              </ul>
            </div>
            <!-- End mega-menu -->
          </li>
        </ul> */
}

/* Toggle between arabic and english */
let lang = "en";
function addRemoveArabicCssFile() {
  // Get HTML head element
  let head = document.getElementsByTagName("HEAD")[0];
  if (lang === "en") {
    // Change innerHTML of langElement to english
    langElement.innerHTML = "EN";
    // Change lang to arabic
    lang = "ar";
    // Create new link Element
    let link = document.createElement("link");
    // set the attributes for link element
    link.rel = "stylesheet";
    link.href = "css/amr-rtl.css";
    // Append link element to HTML head
    head.appendChild(link);

    // Trigger change Page Content function
    changePageContent();
  } else if (lang === "ar") {
    // Change innerHTML of langElement to arabic
    langElement.innerHTML = "ع";
    // Change lang to arabic
    lang = "en";
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
langElement.addEventListener("click", addRemoveArabicCssFile);
