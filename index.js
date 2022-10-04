function handleClick() {
  const url = document.getElementById("link-input").value;
  // const a = document.createElement("a");
  // a.setAttribute("href", link);
  // a.setAttribute("target", "_blank");
  // document.body.appendChild(a);
  // a.click();
  // document.body.removeChild(a);
  window.navigator.share({ url });
}
