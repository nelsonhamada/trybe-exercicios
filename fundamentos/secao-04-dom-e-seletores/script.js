const paragraph = document.getElementById("paragraph");
paragraph.style.color = "red";


document.getElementById("page-title").innerHTML = 'Clockwork Orange';
document.getElementById("second-paragraph").innerText = 'Testando conhecimentos sobre DOM.';
document.getElementById("subtitle").innerText = 'Dom e Seletores: manipulando com getElementById.';


document.getElementsByClassName('paragraphs')[0].style.color = 'blue';
document.getElementsByTagName('h4')[0].style.color = 'green';