let dataCard = [
  {
    titleCard: "Aplikasi Catatan - With React",
    contentCard:
      "Aplikasi ini adalah salah satu program yang saya buat untuk menyelesaikan submission dari kelas online Dicoding yaitu Belajar Membuat Aplikasi Web Dengan React",
    linkWeb: "https://leonardogs974.github.io/Aplikasi-Catatan-With-React/",
    iconProgramLang: ["fa-react", "fa-html5", "fa-css3-alt", "fa-js"],
  },
  {
    titleCard: "Aplikasi Contact - With React",
    contentCard:
      "Aplikasi ini adalah salah satu program yang saya buat untuk latihan pada kelas online Dicoding yaitu Belajar Membuat Aplikasi Web Dengan React",
    linkWeb: "https://leonardogs974.github.io/Aplikasi-Contact-With-React/",
    iconProgramLang: ["fa-react", "fa-html5", "fa-css3-alt", "fa-js"],
  },
  {
    titleCard: "Website Mamalia",
    contentCard:
      "Website ini adalah salah satu Submission yang saya buat untuk menyelesaikan kelas online pada Dicoding, dimana pada aplikasi ini dibuat beberapa section tentang hewan Mamalia serta menggunakan JS untuk membuat suara hewan keluar ketika diklik.",
    linkWeb: "https://leonardogs974.github.io/Website-Mamalia/",
    iconProgramLang: ["fa-html5", "fa-css3-alt", "fa-js"],
  },
  {
    titleCard: "Website CV - With Dicoding",
    contentCard:
      "Website ini adalah salah satu Submission yang digunakan untuk menyelesaikan kelas online dari Dicoding, dimana pada website ini berisikan tentang beberapa profile saya.",
    linkWeb: "https://leonardogs974.github.io/Website-CV-With-Dicoding/",
    iconProgramLang: ["fa-html5", "fa-css3-alt"],
  },
  {
    titleCard: "User Card Learn From Youtube",
    contentCard:
      "Ini adalah salah satu design User Card yang saya pelajari dari youtube yang dimana saya melakukan beberapa perubahan dan penambahan pada cardnya.",
    linkWeb: "https://leonardogs974.github.io/User-Card-Learn-From-Youtube/",
    iconProgramLang: ["fa-html5", "fa-css3-alt"],
  },
  {
    titleCard: "Aplikasi Todo List",
    contentCard:
      "Aplikasi ini adalah salah satu pembelajaran yang saya pelajari dari salah satu kelas online pada Dicoding yaitu Belajar Membuat Front-End Web untuk Pemula.",
    linkWeb: "https://leonardogs974.github.io/Aplikasi-Todo/",
    iconProgramLang: ["fa-html5", "fa-css3-alt", "fa-js"],
  },
  {
    titleCard: "Aplikasi Bookshelf",
    contentCard:
      "Aplikasi ini adalah salah satu Submission yang saya buat untuk menyelesaikan salah satu kelas online pada Dicoding yaitu Belajar Membuat Front-End Web untuk Pemula.",
    linkWeb: "https://leonardogs974.github.io/Aplikasi-Bookshelf/",
    iconProgramLang: ["fa-html5", "fa-css3-alt", "fa-js"],
  },
  {
    titleCard: "Skripsi Analisis Sentimen Twitter",
    contentCard:
      "Aplikasi ini saya buat untuk menyelesaikan pendidikan saya pada jenjang S1 dengan judul Analisis Sentimen Pengguna Twitter Terhadap Pembelakuan PPKM di Indonesia Menggunakan Metode Naive Bayes.",
    linkWeb:
      "https://drive.google.com/file/d/1bnCMpPPY9R3JpKfVP65dLh3LVaARWAMA/view?usp=sharing",
    iconProgramLang: ["fa-python"],
  },
];

//Inisialisasi Variable
const projectContent = document.getElementById("projectContent");
let cardStack = "";

//Function Template Cards
function cetakCards(myCard, myIcon) {
  return `<div class="card">
            <div class="cardHeader">
              <div class="cardInfo">
                <div class="cardLogo">
                  <i class="fa-regular fa-folder fa-2xl"></i>
                </div>
                <div class="cardButton">
                  <a href="${myCard.linkWeb}" target="_blank">
                    <abbr title="External Link Web">
                      <i class="fa-solid fa-arrow-up-right-from-square"></i>
                    </abbr>
                  </a>
                </div>
              </div>
              <div class="cardTitle">
                <h1>${myCard.titleCard}</h1>
              </div>
            </div>
            <div class="cardBody">
              <p>${myCard.contentCard}</p>
            </div>
            <div class="cardFooter">
              <ul>
                ${myIcon}
              </ul>
            </div>
          </div>`;
}

// Function Template Icons
function cetakIcon(iconStack) {
  return `<li>
            <i class="fa-brands ${iconStack}"></i>
          </li>`;
}

//Looping Data Keseluruhan
dataCard.forEach((datax) => {
  let iconProgram = '';

  //Generate Icons
  datax.iconProgramLang.forEach(icons => {
    iconProgram += cetakIcon(icons);
  });

  //Combine All Cards
  cardStack += cetakCards(datax, iconProgram);
});

// Add All cards 
projectContent.innerHTML = cardStack;
