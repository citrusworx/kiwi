document.addEventListener('DOMContentLoaded', () => {
  // Toolbar Buttons and Text Editor
  const boldButton = document.getElementById('boldButton');
  const italicButton = document.getElementById('italicButton');
  const underlineButton = document.getElementById('underlineButton');
  const justLeftButton = document.getElementById('justLeftButton');
  const justCenterButton = document.getElementById('justCenterButton');
  const fontColorPicker = document.querySelector('input#font-color');
  const highlightPicker = document.querySelector('input#font-color'); // Assuming ID for highlight
  const textEditor = document.getElementById('text-editor');

  // Function: Apply Styles to Selected Text
  function applyStyleToSelection(tag, className = '') {
    const selection = window.getSelection();

    if (selection.rangeCount > 0) {
      const range = selection.getRangeAt(0);
      const wrapper = document.createElement(tag);

      if (className) wrapper.className = className;

        // Fallback: Wrap contents manually
        const extractedContent = range.extractContents();
        wrapper.appendChild(extractedContent);
        range.insertNode(wrapper);
      }

      // Clear the selection
      selection.removeAllRanges();
    }
  

  // Bold Button: Apply Bold Style
  boldButton.addEventListener('click', () => {
    applyStyleToSelection('span', 'font-bold');
  });

  // Italic Button: Apply Italic Style
  italicButton.addEventListener('click', () => {
    applyStyleToSelection('span', 'italic');
  });

  // Underline Button: Apply Underline Style
  underlineButton.addEventListener('click', () => {
    applyStyleToSelection('span', 'underline');
  });

  // Align Left Button
  justLeftButton.addEventListener('click', () => {
    textEditor.style.textAlign = 'left';
  });

  // Align Center Button
  justCenterButton.addEventListener('click', () => {
    textEditor.style.textAlign = 'center';
  });

  // Font Color Picker
  fontColorPicker.addEventListener('input', (event) => {
    const color = event.target.value;
    applyStyleToSelection('span', '', { color });
  });

  // Highlight Picker
  highlightPicker.addEventListener('input', (event) => {
    const color = event.target.value;
    applyStyleToSelection('span', '', { backgroundColor: color });
  });
});
