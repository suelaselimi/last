// Get the main container
const app = document.getElementById('app');

// Create Header
const header = document.createElement('header');

// Logo
const logo = document.createElement('div');
logo.className = 'logo';
const logoName = document.createElement('h1');
logoName.className = 'logo-name';
logoName.innerHTML = 'Suela Selimi <span>/programmer</span>';
logo.appendChild(logoName);

// Hamburger Menu
const hamburger = document.createElement('div');
hamburger.className = 'hamburger';
hamburger.id = 'hamburger';
for (let i = 0; i < 3; i++) {
    const span = document.createElement('span');
    hamburger.appendChild(span);
}

// Navigation Menu
const nav = document.createElement('nav');
const navMenu = document.createElement('ul');
navMenu.id = 'nav-menu';
const navLinks = [
    { href: './aboutMe.html', text: 'About Me', class: 'about-me-link' }, // Add a class for About Me
    { href: './resume.html', text: 'Resume' },
    { href: './project.html', text: 'Projects' },
    { href: './contact.html', text: 'Contact' },
];
navLinks.forEach(link => {
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.href = link.href;
    a.textContent = link.text;

    // Add custom class if specified
    if (link.class) {
        a.className = link.class;
    }

    li.appendChild(a);
    navMenu.appendChild(li);
});
nav.appendChild(navMenu);

// Append Header Components
header.appendChild(logo);
header.appendChild(hamburger);
header.appendChild(nav);
app.appendChild(header);

// Create Main Section
const section = document.createElement('section');
section.className = 'myself';

// First Row
const firstRow = document.createElement('div');
firstRow.className = 'first-row';

// Row Container
const row = document.createElement('div');
row.className = 'row';

// Column One
const colOne = document.createElement('div');
colOne.className = 'col';
const img = document.createElement('img');
img.src = '../images/IMG_9376.jpg';
img.alt = '';
const colOneName = document.createElement('h1');
colOneName.textContent = 'Suela';
const colOneSurname = document.createElement('h1');
colOneSurname.textContent = 'Selimi';
const bottomLine = document.createElement('p');
bottomLine.className = 'bottomLine';
const colOneTitle = document.createElement('h2');
colOneTitle.textContent = 'programmer/student';

// Icons
const icons = document.createElement('div');
icons.className = 'icons';
const socialIcons = ['fa-facebook', 'fa-instagram', 'fa-twitter'];
socialIcons.forEach(icon => {
    const i = document.createElement('i');
    i.className = `fa-brands ${icon}`;
    i.setAttribute('aria-hidden', 'true');
    icons.appendChild(i);
});
colOne.append(img, colOneName, colOneSurname, bottomLine, colOneTitle, icons);

// Column Two
const colTwo = document.createElement('div');
colTwo.className = 'col-two';
const colTwoHeading = document.createElement('h1');
colTwoHeading.textContent = 'Hello';
const colTwoSubheading = document.createElement('h4');
colTwoSubheading.innerHTML = "Here's who I am &amp; what I do";

// Buttons with Event Listeners
const buttons = document.createElement('div');
buttons.className = 'buttons';

// Resume Button
const resumeButton = document.createElement('a');
resumeButton.className = 'resumeButton';
resumeButton.textContent = 'Resume';
resumeButton.href = './resume.html'; // Navigate to Resume page
resumeButton.target = '_blank'; // Open in a new tab (optional)

// Add event listener to Resume button
resumeButton.addEventListener('click', (e) => {
    console.log('Navigating to Resume...');
});

// Projects Button
const projectButton = document.createElement('a');
projectButton.className = 'projectButton';
projectButton.textContent = 'Projects';
projectButton.href = './project.html'; // Navigate to Projects page
projectButton.target = '_blank'; // Open in a new tab (optional)

// Add event listener to Projects button
projectButton.addEventListener('click', (e) => {
    console.log('Navigating to Projects...');
});

// Append Buttons
buttons.append(resumeButton, projectButton);
colTwo.appendChild(colTwoHeading);
colTwo.appendChild(colTwoSubheading);
colTwo.appendChild(buttons);

// Add Paragraphs
const paragraphOne = document.createElement('p');
paragraphOne.textContent =
    "I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font.";
const paragraphTwo = document.createElement('p');
paragraphTwo.textContent =
    "I’m a great place for you to tell a story and let your users know a little more about you.";

colTwo.append(paragraphOne, paragraphTwo);

// Append Columns to Row
row.append(colOne, colTwo);
firstRow.appendChild(row);
section.appendChild(firstRow);
app.appendChild(section);
