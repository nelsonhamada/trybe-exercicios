// // Crie um irmão para elementoOndeVoceEsta.

// const pai = document.getElementById('pai');
// const irmaoElementoOndeVoceEsta = document.createElement('section');
// irmaoElementoOndeVoceEsta.id = 'irmaoElementoOndeVoceEsta';
// pai.appendChild(irmaoElementoOndeVoceEsta);

// // Crie um filho para elementoOndeVoceEsta.
// const elementoOndeVoceEsta = document.getElementById('elementoOndeVoceEsta');
// const filhoElementoOndeVoceEsta = document.createElement('section');
// filhoElementoOndeVoceEsta.id = 'filhoElementoOndeVoceEsta';
// elementoOndeVoceEsta.appendChild(filhoElementoOndeVoceEsta);

// // Crie um filho para primeiroFilhoDoFilho.
// const primeiroFilhoDoFilho = document.getElementById('primeiroFilhoDoFilho');
// const filhoPrimeiroFilhoDoFilho = document.createElement('section');
// filhoPrimeiroFilhoDoFilho.id ='filhoPrimeiroFilhoDoFilho';
// primeiroFilhoDoFilho.appendChild(filhoPrimeiroFilhoDoFilho);

// // A partir desse filho criado, acesse terceiroFilho.
// filhoPrimeiroFilhoDoFilho.parentElement.parentElement.nextElementSibling


//  2  -

const elementoASerRemovido = document.getElementById('elementoOndeVoceEsta');
// elementoASerRemovido.removeChild(elementoASerRemovido.firstElementChild);
// outra alternativa
elementoASerRemovido.firstElementChild.remove();



