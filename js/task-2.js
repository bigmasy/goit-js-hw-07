const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
  {
    url: "https://images.pexels.com/photos/66898/elephant-cub-tsavo-kenya-66898.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    alt: "Elephant Beside on Baby Elephant",
  },
  {
    url: "https://images.pexels.com/photos/37833/rainbow-lorikeet-parrots-australia-rainbow-37833.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    alt: "Blue Geeen and Orange Parrot",
  },
  {
    url: "https://images.pexels.com/photos/247376/pexels-photo-247376.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    alt: "Zebras on Zebra",
  },
];

const gallery = document.querySelector(".gallery");

gallery.insertAdjacentHTML(
  "afterbegin",
  images
    .map(
      ({ url, alt }) =>
        `<li class="list-item"><img class = "list-image" src = "${url}" alt = "${alt}"></li>`
    )
    .join("")
);
gallery.style.display = "flex";
gallery.style.flexWrap = "wrap";
gallery.style.padding = "0";
gallery.style.margin = "0";
gallery.style.listStyle = "none";

const listItems = document.querySelectorAll(".list-item");
listItems.forEach((item) => {
  item.style.margin = "10px";
  item.style.borderRadius = "10px";
  item.style.boxShadow = "0 0 5px rgba(0, 0, 0, 0.5)";
});
const listImages = document.querySelectorAll(".list-image");
listImages.forEach((image) => {
  image.style.width = "300px";
  image.style.height = "200px";
  image.style.borderRadius = "10px";
  image.style.objectFit = "cover";
});
