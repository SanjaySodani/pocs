const openWindow = () => {
  window.open("https://www.google.com", "_blank");
};

const hrefWindow = () => {
  window.location.href = "https://www.google.com";
};

const forceOpen = () => {
  let a = document.createElement("a");
  a.setAttribute("href", "https://www.google.com");
  a.setAttribute("target", "_blank");
  a.click();
};
