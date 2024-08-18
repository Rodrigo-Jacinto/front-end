//Existem outras formas de coleção além de array sendo algumas delas:
// - NodeList, HTMLCollection
// alguns desses tipos de coleções não possuem os metódos existentes em arrays (forEach, Map, Reduce)
//umas das melhores formas é transforma essas coleções em Array

const titulos = document.getElementsByTagName('p');
const titulosArray = Array.from(titulos);
