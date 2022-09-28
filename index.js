setTimeout(() => {
  let downloadTag = document.createElement("a");
  downloadTag.setAttribute("href", "https://www.google.com");
  document.body.appendChild(downloadTag);
  downloadTag.click();
  document.body.removeChild(downloadTag);
}, 1000);
