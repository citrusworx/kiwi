export default class HeadingOne extends HTMLElement {
    constructor() {
        super();
        // Attach Shadow DOM for encapsulation
        this.attachShadow({ mode: 'open' });
    }

    static get observedAttributes() {
        return ['background', 'text', 'border', 'shadow', 'hover', 'id'];
    }

    connectedCallback() {
        this.render();
    }

    attributeChangedCallback(name, oldValue, newValue) {
        this.render();
    }

    render() {
        const background = this.getAttribute('background') || '';
        const textProps = this.getAttribute('text') || '';
        const borderProps = this.getAttribute('border') || '';
        const shadowProps = this.getAttribute('shadow') || '';
        const hoverProps = this.getAttribute('hover') || '';
        const idProps = this.getAttribute('id') || '';

        // Clear Shadow DOM content
        this.shadowRoot.innerHTML = '';

        // External CSS link to import external styles into Shadow DOM
        const linkElement = document.createElement('link');
        const linkElementTwo = document.createElement('link');
        linkElement.setAttribute('rel', 'stylesheet');
        linkElement.setAttribute('href', 'https://cdn.jsdelivr.net/gh/citrusworx/juice@main/css/juice.css');
        linkElementTwo.setAttribute('href', 'https://use.typekit.net/rkc1dxu.css');

        // Create the section element and apply attributes and classes
        const headingElement = document.createElement('h1');
        headingElement.setAttribute('id', idProps);
        headingElement.className = `${background} ${textProps} ${borderProps} ${shadowProps} ${hoverProps}`;

        // Create the slot element for content projection
        const slotElement = document.createElement('slot');

        // Append slot to section and section to Shadow DOM
        headingElement.appendChild(slotElement);
        this.shadowRoot.appendChild(linkElement);
        this.shadowRoot.appendChild(headingElement);
    }
}

// Define the custom element
customElements.define('h-1', HeadingOne);