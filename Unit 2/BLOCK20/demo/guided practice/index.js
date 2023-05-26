// access the root element

const root = document.getElementById('root');

// create an h1 element with the name of a famous piece of art: Mona Lisa

const h1 = document.createElement('h1');
h1.textContent = 'Mona Lisa';

// Add (append) the h1 element to the root element

root.appendChild(h1);

// set the image asset and add this image to the root element

const image = document.createElement('img');
// image.setAttribute("src". "img/monalisa.jpg");
image.src = 'monalisa.jpg';
root.appendChild(image);

// add a p element description to the root element: description should read "The Mona Lisa is a famous painting"

const p = document.createElement('p');
p.textContent = 'The Mona Lisa is a famous painting.';
root.appendChild(p);
