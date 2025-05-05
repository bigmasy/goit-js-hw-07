const list = document.querySelector("#categories");
console.log(`Number of categories: ${list.childElementCount}`);

for (const item of list.children) {
  const title = item.querySelector("h2").textContent;
  const elements = item.querySelectorAll("li").length;
  console.log(`Category: ${title}`);
  console.log(`Elements: ${elements}`);
}
