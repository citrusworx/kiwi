function selectPlatform(){
    const appShell = document.createElement('div');
    const platForm = document.createElement('form');
    const inputs = ['label', 'text', 'label', 'select', 'submit'];
    const labels = ['Platform', 'URL', 'Theme'];
    const values = ['WordPress', 'Drupal', 'Blogger', 'Tumblr'];
    const themes = ['Default', 'Modern', 'Minimal', 'Creative'];
    
    const fields = () => {
        inputs.forEach((type, index) => {
            let field;
            
            if (type === 'label') {
                field = document.createElement('label');
                field.textContent = labels.shift();
            } else if (type === 'text') {
                field = document.createElement('input');
                field.type = 'text';
                field.placeholder = 'Enter URL';
            } else if (type === 'select') {
                field = document.createElement('select');
                // Add platform options
                values.forEach(value => {
                    const option = document.createElement('option');
                    option.textContent = value;
                    option.value = value.toLowerCase();
                    field.appendChild(option);
                });
                // Add theme options
                themes.forEach(theme => {
                    const option = document.createElement('option');
                    option.textContent = theme;
                    option.value = theme.toLowerCase();
                    field.appendChild(option);
                });
            } else if (type === 'submit') {
                field = document.createElement('input');
                field.type = 'submit';
                field.value = 'Install';
            }
            
            platForm.appendChild(field);
        });
    }
    
    fields();
    appShell.appendChild(platForm);
    document.getElementById('root').appendChild(appShell);
}
window.addEventListener('DOMContentLoaded', selectPlatform());
