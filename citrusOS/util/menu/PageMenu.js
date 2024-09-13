const { type } = require('os')

const pageMenuTemplate = [
    {
        label: 'File',
        submenu: [
            {
                label: 'New Page',
                accelerator: 'CmdOrCtrl+Shift+P',
                click() {
                    console.log('New Page')
                }
            },
            {
                label: 'Open Page',
                accelerator: 'CmdOrCtrl+O',
                click() {
                    console.log('Open Page')
                }
            },
            {
                label: 'Save Page',
                accelerator: 'CmdOrCtrl+S',
                click() {
                    console.log('Save Page')
                }
            },
            {
                label: 'Close Page',
                accelerator: 'CmdOrCtrl+W',
                click() {
                    console.log('Close File')
                }
            },
            { type: 'separator' },
            {
                label: 'Exit',
                accelerator: 'CmdOrCtrl+Q',
                role: 'quit',
                click() {
                    console.log('Exit')
                }
            }
        ]
    },
    {
        label: 'Edit',
        submenu: [
            { role: 'undo' },
            { role: 'redo' },
            { type: 'separator' },
            { role: 'cut' },
            { role: 'copy' },
            { role: 'paste' },
            { role: 'pasteandmatchstyle' },
            { role: 'delete' },
            { role: 'selectall' }
        ]
    },
    {
        label: 'View',
        submenu: [
            { role: 'reload' },
            { role: 'forcereload' },
            { role: 'toggledevtools' },
            { type: 'separator' },
            { role: 'resetzoom' },
            { role: 'zoomin' },
            { role: 'zoomout' },
            { type: 'separator' },
            { role: 'togglefullscreen' }
        ]
    },
    {
        role: 'window',
        submenu: [
            { role: 'minimize' },
            { role: 'close' }
        ]
    },
    {
        label: 'Blog',
        submenu: [
            { label: 'Create Post',
                accelerator: 'CmdOrCtrl+Shift+P',
                click() {
                    console.log('Create Post')
                }
            },
            { label: 'Edit Post',
                accelerator: 'CmdOrCtrl+Shift+E',
                click() {
                    console.log('Edit Post')
                }
            }
        ]
    },
    {
        role: 'help',
        submenu: [
            {
                label: 'Learn More',
                click () { require('electron').shell.openExternal('https://github.com/citrusworx/kiwi') }
            }
        ]
    }
]

module.exports = pageMenuTemplate;