var Maario = document.getElementById("mario")
var React = document.getElementById("react")
var Native = document.getElementById("react-native")
var HtmlCss = document.getElementById("html")
var RickMorty = document.getElementById("RickAndMorty")
Maario.addEventListener("click", function () {
    window.location = 'https://github.com/LuigiCapoia/MarioJump';
});
React.addEventListener("click", function () {
    window.location = 'https://github.com/LuigiCapoia/TI-Academy-React';
});
Native.addEventListener("click", function () {
    window.location = 'https://github.com/LuigiCapoia/Aplicativo_De_Financas';
});
HtmlCss.addEventListener("click", function () {
    window.location = 'https://github.com/LuigiCapoia/ciclo1-html-css';
});
RickMorty.addEventListener("click", function () {
    window.location = 'https://luigicapoia.github.io/Api_Rick_and_Morty/';
});


//menu
function closeMenu() {
    var toggle = document.getElementById('toggle');
    toggle.checked = false;
}

// titulo da pagina
    // Função para alterar o título quando o usuário muda o foco da janela
    function changeTitleOnBlur() {
        document.title = "Volta aqui 😡";
      }
  
      // Função para restaurar o título original quando o usuário volta o foco para a janela
      function restoreTitleOnFocus() {
        document.title = "Portifolio 🗏";
      }
  
      // Adiciona os eventos ao objeto window
      window.addEventListener("blur", changeTitleOnBlur);
      window.addEventListener("focus", restoreTitleOnFocus);