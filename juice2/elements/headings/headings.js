class Heading extends HTMLElement {
    constructor(){
      super();
    }

  static get observedAttributes(){
    return ['condensed', 'bold', 'uppercase', 'lowercase', 'capitalize', 'font',
            'font-size', 'color', 'shadow', 'align', 'margin', 'padding', 'theme'];
  }

  connectedCallback(){
        this.render();
  }

  attributeChangedCallback(name, value, oldValue){
          this.render();
  }

  render(){
    if(this.hasAttribute("uppercase")){
      this.style.textTransform = "uppercase";
    }
    if(this.hasAttribute("lowercase")){
      this.style.textTransform = "lowercase";
    }
    if(this.hasAttribute("bold")){
      this.style.fontWeight = '700';
    }
    if(this.hasAttribute("condensed")){
      this.style.letterSpacing = '-1.5px';
    }
      const tag = this.getAttribute("tag") || this.tagName.toLowerCase().replace('h-', 'h');
      const h1FontSize = this.getAttribute('font-size') || '';
      const h1Font = this.getAttribute('font') || '';
      const h1Color = this.getAttribute('color') || '';
      const h1Shadow = this.getAttribute('shadow') || '';
      const h1Class = this.getAttribute('class') || '';

      this.innerHTML = `
              <${tag}
                class="${h1FontSize} ${h1Font} ${h1Color} ${h1Shadow} ${h1Class}"
              >
                ${this.innerHTML}
              </${tag}>
      `;
      }
}

class HeadingTitle extends HTMLElement {
  constructor(){
    super();
  }

  static get observedAttributes(){
  return ['condensed', 'bold', 'uppercase', 'lowercase', 'capitalize', 'font',
          'font-size', 'color', 'shadow', 'align', 'margin', 'padding', 'theme'];
  }

  connectedCallback(){
      this.render();
  }

  attributeChangedCallback(name, value, oldValue){
        this.render();
  }

  render(){
  if(this.hasAttribute("uppercase")){
    this.style.textTransform = "uppercase";
  }
  if(this.hasAttribute("lowercase")){
    this.style.textTransform = "lowercase";
  }
  if(this.hasAttribute("bold")){
    this.style.fontWeight = '700';
  }
  if(this.hasAttribute("condensed")){
    this.style.letterSpacing = '-1.5px';
  }

    const h1FontSize = this.getAttribute('font-size') || '';
    const h1Font = this.getAttribute('font') || '';
    const h1Color = this.getAttribute('color') || '';
    const h1Shadow = this.getAttribute('shadow') || '';
    const h1Class = this.getAttribute('class') || '';

    this.innerHTML = `<h1 class="${h1FontSize} ${h1Font} ${h1Color} ${h1Shadow} ${h1Class}">${this.innerHTML}</h1>`;

  }
}

class H1Element extends Heading {}
class H2Element extends Heading {}
class H3Element extends Heading {}
class H4Element extends Heading {}
class H5Element extends Heading {}
class H6Element extends Heading {}

customElements.define('h-1', H1Element);
customElements.define('h-2', H2Element);
customElements.define('h-3', H3Element);
customElements.define('h-4', H4Element);
customElements.define('h-5', H5Element);
customElements.define('h-6', H6Element);
customElements.define('heading-title', HeadingTitle);
