// Get Elements Button
const londonButton = document.getElementById("button-tab1");
const parisButton = document.getElementById("button-tab2");
const tokyoButton = document.getElementById("button-tab3");

function showContent(tab, button) {
  // html deki paragrafları dizide tanımlayıp döngüyle döndükten sonra gizlenmesi
  const tabs = ["tab1-content", "tab2-content", "tab3-content"];
  const buttons = [londonButton, parisButton, tokyoButton];

  tabs.forEach((tabId) => {
    document.getElementById(tabId).classList.add("displayNoneParagraph");
  });

  buttons.forEach((btn) => {
    btn.style.background = "azure";
  });

  //  üstte tanımladıgımız butonlara click eventini ekleyip showContente buttona ait olan paragrafı argüman olarak gönderdik ve alt kısımda ise gizliligini kaldırdık ve tıklanan butonuda dışardan argüman olarak alıp arkaplan rengini gri yaptık..
  document.getElementById(tab).classList.remove("displayNoneParagraph");
  button.style.background = "gray";
}

// Buttonlara tıklanma olayları
londonButton.addEventListener("click", () => {
  showContent("tab1-content", londonButton);
});
parisButton.addEventListener("click", () => {
  showContent("tab2-content", parisButton);
});
tokyoButton.addEventListener("click", () => {
  showContent("tab3-content", tokyoButton);
});
