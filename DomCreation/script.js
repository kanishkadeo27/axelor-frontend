const app_list = new Map([
  ["amazon.png", "Amazon"],
  ["netflix.png", "Netflix"],
  ["hotstar.jpeg", "Hotstar"]
]);

let ol = document.getElementById("apps");

function showName() {
  let text = "";
  for (let [key, value] of app_list) {
    console.log(key, value)
    console.log("hello")
    text = text + `<li><img src=${key} /><p>${value}</p></li>`;
  }
  ol.innerHTML = text;
}
