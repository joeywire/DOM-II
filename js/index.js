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
        event.preventDefault();
    });
});

//Add a quick refresh - hope no one hits f6 for no reason
document.addEventListener('keydown', (event) => {
    if (event.key === "F6") {
        location.reload();
    }
})

const headerP = document.querySelector('header p')
headerP.addEventListener('dblclick', (event) => {
    event.target.style.fontSize = '20px';
    event.target.style.color = 'navy';
    setTimeout(() => {
        event.target.style.fontSize = '16px';
        event.target.style.color = 'black';
    }, 2000)
});


const contentText = document.querySelector('.content-section p');
contentText.addEventListener('copy', (event) => {
    alert('What you doing with my copywriting?? Double click to see me again!')
    event.target.style.background = 'black';
});

contentText.addEventListener('dblclick', (event) => {
    event.target.style.background = 'white';
})

// document.addEventListener('volumechange', () => {
//     alert('Am I too loud or too quiet??');
// })

const buttons = document.querySelectorAll('.btn'); 

buttons.forEach(element => {
    element.addEventListener('click', () => {
        const newButton = document.createElement('a'); 
        newButton.classList.add('btn'); 
        newButton.textContent = 'Lets Book It!'; 
        newButton.href = 'https://www.expedia.com';
        newButton.target = '_blank'; 
        newButton.style.marginTop = '5%';
        element.parentElement.append(newButton);
    });
})

const contentIMG = document.querySelector('.content-section img'); 
contentIMG.addEventListener('drag', (event) => {
    console.log(event);
    event.target.style.border = '3px solid green';
})