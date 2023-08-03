function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")
  //pegar a tag img
  const img = document.querySelector("#profile img")
  //substituir a imagem
  if (html.classList.contains("light")) {
    //se for light-mode, adicionar img-light
    img.setAttribute("src", "./assets/avatar-light.png")
    img.setAttribute(
      "alt",
      "Maik Brito mais feio ainda, oculos escuros e fundo azul"
    )
  } else {
    //se for dark-mode, manter a img
    img.setAttribute("src", "./assets/avatar.png")
    img.setAttribute(
      "alt",
      "Maike Brito muito feio, oculos claro e fundo laranja"
    )
  }
}
