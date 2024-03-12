function toggleMode() {
  const html = document.documentElement

  if (html.classList.contains("light")) {
    html.classList.remove("light")
  } else {
    html.classList.add("light")
  }
}
/*
function toggleMode() {
  alert("Um menino muito lindo e o Adrian é feio")
}
*/
