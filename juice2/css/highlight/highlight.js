const highlight = document.getElementById('perf-definition');
const tooltip = document.createElement('div');
const container = document.getElementById('app-root');
tooltip.style.height = '10vh';
tooltip.style.width = '30vw';
tooltip.style.backgroundColor = 'white';
tooltip.style.position = 'absolute';
tooltip.style.top = '10px';
tooltip.style.cursor = 'pointer';
tooltip.classList.add('rounded:md');
tooltip.classList.add('fade:in');
tooltip.setAttribute('id', 'tooltip');

tooltip.innerHTML = `<p class="mx:4"><strong>Perf</strong>: to store some data like a mawfug</p>` 
highlight.addEventListener('click', () => {
    
    if(container.contains(tooltip) && tooltip){
        container.removeChild(tooltip);
        console.log('clicked');
    }
    else {
        container.appendChild(tooltip)
        console.log('unclicked');
    }
    
})