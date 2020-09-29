// Your code goes here

//Change opacity of Bus Image when hovering
const busImg = document.querySelector('header img');
busImg.addEventListener('mouseover', (event) => {
    event.target.style.opacity = 0.5;
});
//Change opacity back after hovering 
busImg.addEventListener('mouseout', (event) => {
    event.target.style.opacity = 1;
});

//Let everyone know our links don't work 
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach((element) => {
    element.addEventListener('click', (event) => {
        event.target.textContent = "I don't go anwhere!";
        event.target.style.color = 'coral';
    });
});

//Add a quick refresh - hope no one hits f6 for no reason
document.addEventListener('keydown', (event) => {
    if (event.key === "F6") {
        location.reload();
    }
})

const headerP = document.querySelector('header p')
console.log(headerP);
headerP.addEventListener('dblclick', (event) => {
    event.target.style.fontSize = '20px';
    event.target.style.color = 'navy';
    setTimeout(() => {
        event.target.style.fontSize = '16px';
        event.target.style.color = 'black';
    }, 2000)
});
