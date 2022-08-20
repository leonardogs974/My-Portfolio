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

for (let i = 0; i <= dataCard.length - 1; i++) {
  //Create Element
  let card = document.createElement("div");
  card.classList.add("card");
  
  let cardHeader = document.createElement("div");
  cardHeader.classList.add("cardHeader");

  let cardBody = document.createElement("div");
  cardBody.classList.add("cardBody");

  let cardFooter = document.createElement("div");
  cardFooter.classList.add("cardFooter");

  //Create Element In Card Header
  let cardInfo = document.createElement("div");
  cardInfo.classList.add("cardInfo");

  let cardLogo = document.createElement("div");
  cardLogo.classList.add("cardLogo");
  
  let iFolder = document.createElement("i");
  let cardButton = document.createElement("div");
  cardButton.classList.add("cardButton");
  let aButton = document.createElement("a");
  let abbr = document.createElement("abbr");
  let iLink = document.createElement("i");

  iFolder.classList.add("fa-regular");
  iFolder.classList.add("fa-folder");
  iFolder.classList.add("fa-2xl");

  iLink.classList.add("fa-solid");
  iLink.classList.add("fa-arrow-up-right-from-square");

  abbr.setAttribute("title", "External Link Web");

  aButton.setAttribute("href", dataCard[i].linkWeb);
  aButton.setAttribute("target", "_blank");
  
  let cardTitle = document.createElement("div");
  cardTitle.classList.add("cardTitle");
  let h1 = document.createElement("h1");

  h1.textContent = dataCard[i].titleCard;

  cardTitle.appendChild(h1);

  //Create Element In Card Body
  let pInBody = document.createElement("p");

  pInBody.textContent = dataCard[i].contentCard;

  cardBody.appendChild(pInBody);

  //Create Element In Card Footer
  let ul = document.createElement("ul");

  for(let j = 0; j <= dataCard[i].iconProgramLang.length-1; j++){
      let li = document.createElement("li");
      let iIcon = document.createElement("i");

      iIcon.classList.add("fa-brands");
      iIcon.classList.add(dataCard[i].iconProgramLang[j]);

      li.appendChild(iIcon);
      ul.appendChild(li);
  }

  cardFooter.appendChild(ul);
  
  cardHeader.appendChild(cardInfo);
  cardHeader.appendChild(cardTitle);
  cardInfo.appendChild(cardLogo);
  cardInfo.appendChild(cardButton);
  cardLogo.appendChild(iFolder);
  cardButton.appendChild(aButton);
  aButton.appendChild(abbr);
  abbr.appendChild(iLink);

  card.appendChild(cardHeader);
  card.appendChild(cardBody);
  card.appendChild(cardFooter);

  projectContent.appendChild(card);
}
