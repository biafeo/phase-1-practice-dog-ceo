console.log('%c HI', 'color: firebrick')
const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
const breedUrl = "https://dog.ceo/api/breeds/list/all";

document.addEventListener("DOMContentLoaded", () => {
  fetch(imgUrl)
    .then((response) => response.json())
    .then((data) => {
      const dogImageDiv = document.querySelector("#dog-image-container");
      data.message.forEach((dogImage) => {
        const img = document.createElement("img");
        img.src = dogImage;
        dogImageDiv.appendChild(img);
      });
    });

  fetch(breedUrl)
    .then((response) => response.json())
    .then((data) => {
      const breedDropdown = document.querySelector("#breed-dropdown");
      breedDropdown.addEventListener("change", () => {
        const selectedLetter = breedDropdown.value;
        ul.innerHTML = "";
        const filteredBreeds = Object.keys(data.message).filter((breedName) =>
          breedName.startsWith(selectedLetter)
        );
        filteredBreeds.forEach((breedName) => {
          const li = document.createElement("li");
          li.textContent = breedName;
          ul.appendChild(li);
          li.addEventListener('click', () => { li.style.color = "blue"; });
        });
      });

      const dogbreedUrl = document.querySelector("#dog-breeds");
      const ul = document.createElement("ul");
      dogbreedUrl.appendChild(ul);
      Object.keys(data.message).forEach((breedName) => {
        const li = document.createElement("li");
        li.textContent = breedName;
        ul.appendChild(li);
        li.addEventListener('click', () => { li.style.color = "blue"; });
      });
    });
});