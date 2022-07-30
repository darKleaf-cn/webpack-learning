import { cube } from './math.js';

if (process.env.NODE_ENV !== 'production') {
	console.log(process.env.NODE_ENV)
	console.log(2)
}

function component() {
  const element = document.createElement('pre');

  element.innerHTML = ['Hello webpack', '5 cubed is equal to ' + cube(5)].join('\n\n');

  return element;
}

document.body.appendChild(component());
