// Component: AppBar
document.addEventListener('DOMContentLoaded', ()=> {
    
    function AppBar(props) {
    const { background, text, border, shadow, hover, id, children } = props;

    // Create a section element
    const section = document.createElement('section');
    
    // Set the attributes and classes
    section.setAttribute('id', id || '');
    section.className = `${background || ''} ${text || ''} ${border || ''} ${shadow || ''} ${hover || ''}`;

    // Add child content
    section.innerHTML = children;

    // Return the section DOM element
    return section;
}

// Render function: Similar to ReactDOM.render()
function render(component, target) {
    const root = document.getElementById(target);
    root.appendChild(component);
}

// Create your AppBar component and render it to the DOM
const appBar = AppBar({
    background: 'bgc-green-500',
    text: 'tc-royal-500 lobster',
    border: 'border-color--royal-500',
    shadow: 'ds:sm',
    hover: 'hover-black-100',
    id: 'app-bar',
    children: `
        <h2>Some Function content</h2>
        <p>Added a paragraph for additional testing.</p>
    `
});

// Render the component into the DOM
render(appBar, 'main');

});
