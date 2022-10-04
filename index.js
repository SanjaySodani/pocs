window.onload = () => {
  const a = document.createElement("a");
  a.setAttribute("href", "someapp://somelink/");
  a.setAttribute("target", "_blank");
  a.click();
};
