
// When the user scrolls down 80px from the top of the document, resize the navbar's padding and the logo's font size
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("navbar").style.cssText = `
      background-color: #E1E1E1;
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    `;
    // document.getElementById("logo").style.fontSize = "25px";
  } else {
    document.getElementById("navbar").style.cssText = `
      background-color: transparent; 
    `;
    // document.getElementById("logo").style.fontSize = "35px";
  }
}
