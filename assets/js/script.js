let daftar_kue = [
  {
    nama_kue: "Cake Lemon with Cream",
    harga_kue: "200.000",
    foto_kue: "assets/image/kue1.jpg",
  },
  {
    nama_kue: "Cake Apple with cream",
    harga_kue: "500.000",
    foto_kue: "assets/image/kue2.jpg",
  },
  {
    nama_kue: "Stroberry Cream Choco",
    harga_kue: "700.000",
    foto_kue: "assets/image/kue3.jpg",
  },
  {
    nama_kue: "Flower Cake",
    harga_kue: "600.000",
    foto_kue: "assets/image/kue4.jpg",
  },
  {
    nama_kue: "Stroberry Pancake",
    harga_kue: "400.000",
    foto_kue: "assets/image/kue5.jpg",
  },
  {
    nama_kue: "Pink Flower Cake",
    harga_kue: "900.000",
    foto_kue: "assets/image/kue6.jpg",
  },
];

let daftar_testimonial = [
  {
    nama_user: "Nisa Sulisati",
    komentar_user:
      "Enak banget..., recommended banget ini ke teman - teman jika ingin memesan kue ulang tahun",
    foto_user: "assets/image/logo.jpg",
  },
  {
    nama_user: "Enriko Sam",
    komentar_user:
      "Anak saya sangat senang dengan model desain kue yang dibuat oleh Yummy Cake... Sukses Selalu",
    foto_user: "assets/image/logo.jpg",
  },
  {
    nama_user: "Budi Cendra",
    komentar_user:
      "Rasanya tiada duanya, tidak menyesal berbelanja kue di tempat ini. terima kasih :)",
    foto_user: "assets/image/logo.jpg",
  },
];

var mybutton = document.getElementById("myBtn");
var article_list_kue = document.querySelector("#list_kue");
var article_list_testimonial = document.querySelector("#testimonial");

daftar_kue.forEach((element) => {
  let newElement = document.createElement("div");
  newElement.innerHTML =
    `<div class="colom-1-kue">
    <img src="` +
    element.foto_kue +
    `" alt="" style="width: 250px;" class="zoom">
    <p class="w3-large"><strong>` +
    element.nama_kue +
    `</strong> </p>
    <p>Rp. ` +
    element.harga_kue +
    `,-</p>
    <a class="button-pesan" href="#">Pesan</a>
    </div>`;
  article_list_kue.appendChild(newElement);
});

daftar_testimonial.forEach((element) => {
  let newElement = document.createElement("div");
  newElement.innerHTML = `<div class="colom-1-content">
    <figure>
        <img src="` + element.foto_user + `" class="featured-image-logo">
    </figure>
    <p class="w3-large"><strong>` + element.nama_user + `</strong> </p>
    <p>` + element.komentar_user + `</p>
</div>`;
  article_list_testimonial.appendChild(newElement);
});

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
