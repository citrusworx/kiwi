const servSelect = document.getElementById('server-select');
const container = document.createElement('div');
const body = document.getElementById('server-options-container');
const heading = document.createElement('h3');
const content = document.createElement('p');

container.classList.add('container');
container.classList.add('pt:5');
container.appendChild(heading);
container.appendChild(content);
body.appendChild(container);

servSelect.addEventListener('change', () => {
    const selectedOption = servSelect.options[servSelect.selectedIndex];
   if(selectedOption.value === 'small'){
    heading.textContent = 'Small Plan';
    content.textContent = 'Small Plan Content';
   }
   else if(selectedOption.value === 'medium'){
    heading.textContent = 'Medium Plan';
    content.textContent = 'Medium Plan Content';
   }
   else if(selectedOption.value === 'large'){
    heading.textContent = 'Large Plan';
    content.textContent = 'Large Plan Content';
   }
   else {
    heading.textContent = '';
    content.textContent = '';
   }
})

