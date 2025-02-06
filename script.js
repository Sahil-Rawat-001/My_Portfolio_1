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


