function show(e) {
  obj = document.getElementById("chapter-" + e);
  if (obj.style.display == "block") {
    obj.style.display = "none";
    document.getElementById("chapter-" + e + e).innerHTML = "+";
  }
  else {
    obj.style.display = "block";
    document.getElementById("chapter-" + e + e).innerHTML = "-";
  }
} 