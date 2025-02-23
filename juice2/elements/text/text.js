class TextElement extends HTMLElement {
  constructor(){ super(); }

  static get observedAttributes(){
      return [ 'font', 'color', 'shadow', 'kerning', 'line-height', 'margin', 'padding',
        'size'
      ];
  }

  connectedCallback(){ this.render(); }

  attributeChangedCallback(name, oldValue, newValue){
      this.render();
  }

  render(){


  }
}
