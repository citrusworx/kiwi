class DesktopIcon extends HTMLElement {
    constructor() {
        super();
        // Attach Shadow DOM for encapsulation
        this.attachShadow({ mode: 'open' });
    }

    static get observedAttributes() {
        return ['background', 'text', 'border', 'shadow', 'hover', 'id', 'iconImg'];
    }

    connectedCallback() {
        this.render();
        this.addDraggable();
    }

    attributeChangedCallback(name, oldValue, newValue) {
        this.render();
    }

    render(){
        const bgProps = this.getAttribute('background') || 'transparent';
        const textProps = this.getAttribute('text') || 'black';
        const borderProps = this.getAttribute('border') || 'none';
        const shadowProps = this.getAttribute('shadow') || 'none';
        const hoverProps = this.getAttribute('hover') || 'none';
        const idProps = this.getAttribute('id') || 'desktop-icon';
        const iconImg = this.getAttribute('iconImg') || '#';

        // Clear the Shadow DOM
        this.shadowRoot.innerHTML = '';

        // Create the icon
        const iconShell = document.createElement('div');
        const iconElement = document.createElement('i');
        const imgElement = document.createElement('img');
        const textElement = document.createElement('span');

        // Set the attributes dynamically
        iconShell.setAttribute('id', idProps);
        iconElement.setAttribute('class', 'fas-solid');
        imgElement.setAttribute('src', iconImg);
        textElement.textContent = textProps;
        iconShell.appendChild(iconElement, imgElement, textElement);
        this.shadowRoot.appendChild(iconShell);
    }

    // Make the icon draggable
    addDraggable(){
        
    }
}

customElements.define('desktop-icon', DesktopIcon)
export { DesktopIcon }