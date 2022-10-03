window.onload = () => {
  const userAgent = window.navigator.userAgent.toLowerCase();
  const safari = /safari/.test(userAgent);
  const ios = /iphone|ipod|ipad/.test(userAgent);

  if (ios) {
    if (safari) {
      // safari
      document.getElementById("head1").innerText = "Safari browser";
    } else if (!safari) {
      // ios webview
      document.getElementById("head1").innerText = "iOS web view";
    }
  } else {
    // not iOS
    document.getElementById("head1").innerText = "Not iOS browser";
  }
};

function handleClick() {
  const link = document.getElementById("link-input").value;
  const a = document.createElement("a");
  a.setAttribute("href", link);
  a.setAttribute("target", "_blank");
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}
