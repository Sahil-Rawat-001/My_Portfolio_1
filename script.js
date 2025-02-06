let tablinks = document.getElementsByClassName("tab-links");
let tabcontents = document.getElementsByClassName("tab-contents");

window.openTab = function(event,tablinkname){

    event.preventDefault()

    for (let tablink of tablinks) {
        
        tablink.classList.remove("active-link");
    }

    for (let tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }

    event.currentTarget.classList.add("active-link");
    let targetTab = document.getElementById(tablinkname);

    if(targetTab){
      targetTab.classList.add("active-tab");
    } else{
        console.error("No element found with ID:", tablinkname);
    }
}

const scriptURL = 'https://script.google.com/macros/s/AKfycbxhBL6_WUB5QxgI_adu3Nsq37e3pO7Oi7G1gfu6q4xLEJbQa3dmCrDeTtKGB_G_ooo/exec'
const form = document.forms['submit-to-google-sheet']

const msg = document.getElementById("msg");

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response =>{
        msg.innerHTML = "Message sent successfully"
        setTimeout(function(){
            msg.innerHTML = ""
        },5000);

        form.reset();
    })
    .catch(error => console.error('Error!', error.message))
})


