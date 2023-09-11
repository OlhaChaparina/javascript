const baseURL = 'https://swapi.dev/api';
const charactersContainer = document.getElementById('charactersContainer');
const planetsContainer = document.getElementById('planetsContainer');
const getFilmCharactersBtn = document.getElementById('getFilmCharactersBtn');
const translateBtn = document.getElementById('translateBtn');
const filmForm = document.getElementById('filmForm');
const filmNumberInput = document.getElementById('filmNumber');
const nextPageBtn = document.getElementById('nextPageBtn');
let nextPageURL = '';

// Мапа з фіктивними перекладами на вукийську
const wookieeTranslations = new Map([
   ['Name:', 'Wookiee Name: Rrwraaarrwhrar'],
   ['Birth Year:', 'Wookiee Birth Year: Rrrhrrrarrghr'],
   ['Gender:', 'Wookiee Gender: Rrwraaoargh'],
   ['Next', 'Rrrrwhg!'],
   ['Star Wars API', 'Wookiee Star Wars API'],
   ['Отримати інформацію про персонажів фільму', 'Rrrargh ooh ooh aah'],
   ['Перекласти на вукийську', 'Rrrrrargh ooh ooh aah']
]);

filmForm.addEventListener('submit', async (event) => {
   event.preventDefault();
   const filmNumber = filmNumberInput.value;

   if (filmNumber >= 1 && filmNumber <= 7) {
      try {
         const filmURL = `/films/${filmNumber}`;
         const filmResponse = await fetch(baseURL + filmURL);
         const filmData = await filmResponse.json();

         // Очищення контейнера персонажів перед виведенням нової інформації
         charactersContainer.innerHTML = '';

         const characters = filmData.characters;
         const characterImages = {
            'Luke Skywalker': 'img/Luke_skywalker.jpg',
            'C-3PO': 'img/c3po.jpeg',
            'R2-D2': 'img/r2d2.webp',
            'Darth Vader': 'img/Darth Vader.webp',
            'Leia Organa': 'img/princess_leia.webp',
            'Owen Lars': 'img/OwenLars.webp',
            'Beru Whitesun lars': 'img/Beru_Whitesun.jpeg',
            'R5-D4': 'img/R5-D4.jpeg',
            'Biggs Darklighter': 'img/Biggs_Darklighter.jpeg',
            'Obi-Wan Kenobi': 'img/Obi-Wan_Kenobi.jpeg',
            'Wilhuff Tarkin': 'img/Wilhuff_Tarkin.jpg',
            'Chewbacca': 'img/Chewbacca.jpeg',
            'Han Solo': 'img/Han_Solo.jpeg',
            'Greedo': 'img/Greedo.jpeg',
            'Jabba Desilijic Tiure': 'img/Jabba.jpeg',
            'Wedge Antilles': 'img/Wedge_Antilles.jpeg',
            'Jek Tono Porkins': 'img/Jek_Tono.webp',
            'Raymus Antilles': 'img/Raymus_Antilles.jpeg',
            'Yoda': 'img/Yoda.jpeg',
            'Palpatine': 'img/Palpatine.jpeg',
            'Boba Fett': 'img/boba_fett.jpeg',
            'IG-88': 'img/IG-88.jpeg',
            'Bossk': 'img/Bossk.jpeg',
            'Lando Calrissian': 'img/Lando Calrissian.jpeg',
            'Lobot': 'img/Lobot.webp',
            'Ackbar': 'img/Ackbar.webp',
            'Mon Mothma': 'img/Mon Mothma.jpeg',
            'Arvel Crynyd': 'img/Arvel Crynyd.webp',
            'Wicket Systri Warrick': 'img/Wicket Systri Warrick.webp',
            'Nien Nunb': 'img/Nien Nunb.jpeg',
            'Bib Fortuna': 'img/Bib Fortuna.webp',
            'Anakin Skywalker': 'img/Anakin Skywalker.jpeg',

         };


         // Виводимо персонажів на сторінку
         for (const characterURL of characters) {
            const characterResponse = await fetch(characterURL);
            const characterData = await characterResponse.json();

            const characterCard = document.createElement('div');
            characterCard.classList.add('character-card');
            characterCard.innerHTML = `
                  <img src="${characterImages[characterData.name]}" alt="${characterData.name}">
                     <p><strong>Name:</strong> ${characterData.name}</p>
                     <p><strong>Birth Year:</strong> ${characterData.birth_year}</p>
                     <p><strong>Gender:</strong> ${characterData.gender}</p>
                  `;

            charactersContainer.appendChild(characterCard);
         }
      } catch (error) {
         console.error('Error fetching film data:', error);
      }
   } else {
      alert('Номер фільму повинен бути від 1 до 7.');
   }
});

async function getPlanets(url) {
   try {
      const response = await fetch(url);
      const data = await response.json();
      nextPageURL = data.next;

      planetsContainer.innerHTML = '';

      for (const planetData of data.results) {
         const planetCard = document.createElement('div');
         planetCard.classList.add('planet-card');
         planetCard.textContent = planetData.name;

         planetsContainer.appendChild(planetCard);
      }
   } catch (error) {
      console.error('Error fetching planet data:', error);
   }
}

nextPageBtn.addEventListener('click', () => {
   if (nextPageURL) {
      getPlanets(nextPageURL);
   }
});

// Виведення перших планет при завантаженні сторінки
getPlanets(baseURL + '/planets?format=json');

translateBtn.addEventListener('click', () => {
   // Замінюємо текст на вукийський в усіх елементах з мапи перекладів
   const allElements = document.querySelectorAll('*');
   allElements.forEach((element) => {
      const textContent = element.textContent.trim();
      if (wookieeTranslations.has(textContent)) {
         element.textContent = wookieeTranslations.get(textContent);
      }
   });
});