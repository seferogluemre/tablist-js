// Get Elements Button
const londonButton=document.getElementById('button-tab1');
const parisButton=document.getElementById('button-tab2');
const tokyoButton=document.getElementById('button-tab3');

function tab1Content(){
    document.getElementById('tab1-content').classList.remove('displayNoneParagraph');
    document.getElementById('tab2-content').classList.add('displayNoneParagraph');    
    document.getElementById('tab3-content').classList.add('displayNoneParagraph');
    londonButton.style.background="gray";
    parisButton.style.background="azure"
    tokyoButton.style.background="azure";
}
function tab2Content(){
    document.getElementById('tab2-content').classList.remove('displayNoneParagraph');
    document.getElementById('tab1-content').classList.add('displayNoneParagraph');    
    document.getElementById('tab3-content').classList.add('displayNoneParagraph');
    parisButton.style.background="gray";
    londonButton.style.background="azure";
    tokyoButton.style.background="azure";
}
function tab3Content(){
    document.getElementById('tab3-content').classList.remove('displayNoneParagraph');
    document.getElementById('tab1-content').classList.add('displayNoneParagraph');
    document.getElementById('tab2-content').classList.add('displayNoneParagraph');
    tokyoButton.style.background="gray";
    parisButton.style.background="azure"
    londonButton.style.background="azure";
}