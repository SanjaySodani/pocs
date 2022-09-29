window.onload = () => {
  // let a = document.createElement("a");
  // a.setAttribute("href", "https://www.google.com");
  // a.setAttribute("target", "_blank");
  // document.body.appendChild(a);
  // a.click();
  // document.body.removeChild(a);

  window.open("https://www.google.com", "popup", "fullscreen");

  let a = document.createElement("a");
  a.setAttribute("href", "https://www.google.com");
  a.setAttribute("target", "_blank");
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
};

function windowOpen() {
  window.open("https://www.google.com", "popup", "fullscreen");
}

function hrefOpen() {
  let a = document.createElement("a");
  a.setAttribute("href", "https://www.google.com");
  a.setAttribute("target", "_blank");
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}
