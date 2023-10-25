// get api key ajax
const url ="https://raw.githubusercontent.com/penggguna/QuranJSON/master/quran.json";
const listData = document.getElementById("listdata");
const searchInput = document.querySelector("[data-search]")

let alquran = []

searchInput.addEventListener("input", (e) => {
  const value = e.target.value
  alquran.forEach(el => {
    const isVisible = el.name.includes(value) || el.type.includes(value)
    el.element.classList.toggle("hide", !isVisible)
  })
})

fetch(url).then((response) => response.json())
  .then((data) => {
    alquran = data.map((el) => {
      
      const cardContainer = document.createElement("div");
      cardContainer.classList.add("card");
      cardContainer.setAttribute("cardContainer", "");

      const title = document.createElement("p");
      title.textContent = el.name;
      title.classList.add("title");

      const subtitle = document.createElement("p");
      subtitle.textContent = el.type;
      subtitle.classList.add("subtitle");

      const card = document.createElement("div");
      card.classList.add("card__content");

      const nama = document.createElement("p");
      nama.textContent = el.name;
      nama.classList.add("card__title");

      const subTitle = document.createElement("p");
      subTitle.textContent = el.place;
      subTitle.classList.add("subtitle");

      const jumlahAyat = document.createElement('h4');
      jumlahAyat.textContent = "Jumlah ayat"
      jumlahAyat.classList.add("jumlahayat")

      const Ayat = document.createElement('p');
      Ayat.textContent = el.number_of_ayah
      Ayat.classList.add("ayat")

      const nomorAyat = document.createElement('h4');
      nomorAyat.textContent = "Nomor ayat"
      nomorAyat.classList.add("nomorAyat")

      const nomor = document.createElement('p');
      nomor.textContent = el.number_of_surah
      nomor.classList.add("nomor")

      

      const audio = document.createElement("audio");
      audio.setAttribute("controls","")
      audio.src = el.recitation
      audio.classList.add('card_audio')


      listData.append(cardContainer)
      cardContainer.append(title)
      cardContainer.append(subtitle)
      cardContainer.append(card)
      card.append(nama)
      card.append(subTitle)
      card.append(jumlahAyat)
      card.append(Ayat)
      card.append(nomorAyat)
      card.append(nomor)
      card.append(audio)
      return { name: el.name, type: el.type, element: cardContainer }
    });
  });


  // // Search bar
  // const search = () =>{
  //   const searchbox = document.getElementById("search-item").value.toUpperCase();
  //   const listItem = document.getElementById("listdata")
  //   const cardAlquran = document.querySelectorAll(".cardContainer")
  //   const pname = listItem.getElementsByTagName("p")

  //   for(var i=0; i < pname.length; i++){
  //     let match = cardAlquran[i].getElementsByTagName('p')[0];

  //     if(match){
  //      let textvalue = match.textContent || match.innerHTML
       
  //      if(textvalue.toUpperCase().indexOf(searchbox) > -1){
  //       cardAlquran[i].style.display = "";
  //      }else{
  //       cardAlquran[i].style.display = "none";
  //      }
  //     }
  //   }
  // }

 
