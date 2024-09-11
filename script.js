function openmenu() {
    document.getElementById('sidemenu').classList.add('active');
}

function closemenu() {
    document.getElementById('sidemenu').classList.remove('active');
}

function opentab(tabName, event) {
    const tabs = document.querySelectorAll('.tab-contents');
    const tabLinks = document.querySelectorAll('.tab-links');

    tabs.forEach(tab => {
        tab.classList.remove('active-tab');
    });

    tabLinks.forEach(link => {
        link.classList.remove('active-link');
    });

    document.getElementById(tabName).classList.add('active-tab');
    event.currentTarget.classList.add('active-link');
}
