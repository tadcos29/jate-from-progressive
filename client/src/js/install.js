const butInstall = document.getElementById('buttonInstall');
let installSelected;
// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event

window.addEventListener('beforeinstallprompt', (event) => {
    event.preventDefault();
    installSelected = event;
    butInstall.classList.toggle('hidden',false);
});

// collect the propagated event from the beforeinstallprompt listener; if it exist, install
butInstall.addEventListener('click', async () => {
    if (installSelected) {
        
        let promptOutcome = await installSelected.prompt();
        if (promptOutcome.outcome=='accepted') {
            butInstall.textContent = 'Installed';
        }
    }
});

// modify the button once installed by changing opacity and disabling it
window.addEventListener('appinstalled', (event) => {
    butInstall.disabled = true;
    butInstall.style.opacity = '0.5';
    butInstall.textContent = 'Installed!';
    console.log('Installed.');
    console.log(event);
    installSelected=null;
});