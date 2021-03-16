const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

container.appendChild(content);

const redText = document.createElement('p');
redText.classList.add('redText');
redText.textContent = 'Hey, I\'m Red!';
redText.setAttribute('style','color:red')
container.appendChild(redText);

const blueText = document.createElement('h3');
blueText.classList.add('blueText');
blueText.textContent = 'Hey, I\'m Blue!';
blueText.setAttribute('style','color:blue')
container.appendChild(blueText);

const divNew = document.createElement('div');
divNew.classList.add('divNew');
divNew.setAttribute('style','border: 5px solid black ;background:pink' )
container.appendChild(divNew);

const divSonh1 = document.createElement('h1');
divSonh1.classList.add('divSonh1');
divSonh1.textContent = 'I\'m in a div!';
divNew.appendChild(divSonh1);

const divSonp = document.createElement('p');
divSonp.classList.add('divSonp');
divSonp.textContent = 'ME TOO!';
divNew.appendChild(divSonp);
