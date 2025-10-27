function createNavbar(){
    const template = document.createElement('template')

        template.innerHTML = `
        <nav>
   <ul class="sidebar">
        <li onclick=hideSidebar()><a href="#"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#1f1f1f"><path d="M256-213.85 213.85-256l224-224-224-224L256-746.15l224 224 224-224L746.15-704l-224 224 224 224L704-213.85l-224-224-224 224Z"/></svg></a>
        </li>
        <li><a href="index.html">Home</a></li>
        <li class="dropdown">
            <a href="#" class="dropbtn">About</a>       
            <div class="dropdown-content">
                <div><a href="history.html">History</a></div>
                <div><a href="ourmission.html">Our Mission</a></div>
                <div><a href="staff.html">Staff</a></div>
            </div>
        </li>
        <li><a href="nextstepspage.html">Next Steps</a></li>
        <li><a href="FAQ.html">FAQ</a></li>
    <!--<li class="dropdown">
            <a href="#" class="dropbtn">Support</a>
            <div class="dropdown-content">
                <div><a href="support.html">Ways to Help</a></div>
                <div><a href="donationwall.html">Donor Wall</a></div>
            </div>
        </li>-->
        <li><a href="contactpage.html">Contact</a></li>
    </ul>
    <ul>
        <li><a href="index.html">Supernova Winter Arts</a></li>
        <li class="hideOnMobile"><a href="index.html">Home</a></li>
        <li class="hideOnMobile dropdown">
            <a href="#" class="hideOnMobile dropbtn">About</a>       
            <div class="dropdown-content">
                <div class="hideOnMobile"><a href="history.html">History</a></div>
                <div class="hideOnMobile"><a href="ourmission.html">Our Mission</a></div>
                <div class="hideOnMobile"><a href="staff.html">Staff</a></div>
            </div>
        </li>
        <li class="hideOnMobile"><a href="nextstepspage.html">Next Steps</a></li>
        <li class="hideOnMobile"><a href="FAQ.html">FAQ</a></li>
    <!--<li class="hideOnMobile dropdown">
            <a href="#" class="hideOnMobile dropbtn">Support</a>       
            <div class="dropdown-content">
                <div class="hideOnMobile"><a href="support.html">Ways to Help</a></div>
                <div class="hideOnMobile"><a href="donationwall.html">Donor Wall</a></div>
            </div>
        </li>-->
        <li class="hideOnMobile"><a href="contactpage.html">Contact</a></li>
        <li class="menu-button" onclick=showSidebar()><a href="#"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#1f1f1f"><path d="M140-254.62v-59.99h680v59.99H140ZM140-450v-60h680v60H140Zm0-195.39v-59.99h680v59.99H140Z"></svg></a>
        </li>
    </ul>
</nav>`

const navbar = template.content.firstElementChild

return navbar

}


//Test
// function showDropdown(){
//         const dropdown = document.querySelector(".dropdown")
//         const dropdownContent = document.querySelector(".dropdown-content")
//         dropdownContent.style.display = "block"
//         // dropdown.remove()
//          console.log(dropdownContent.style.display)
//         console.log("HELP")
    // if (dropdown.style.display != "block") {
    //     console.log("I was beaten")
    //     console.log(dropdown.style.display)
    //     dropdown.style.display = "block"
    //     dropdown.style.color = "red"
    // } else {
    //     console.log("I have been clicked")
    //      console.log(dropdown.style.display)
    //     dropdown.style.display = "none"
    //     dropdown.style.color = "blue"
    // }
    
// }

// function hideDropdown(){
//     const dropdown = document.querySelector(".dropdown-content")
//     dropdown.style.display = "none"
//     console.log("Test")
// }


function showSidebar(){
    const sidebar = document.querySelector(".sidebar")
    sidebar.style.display = "flex"
    console.log("I'm open")
}

function hideSidebar(){
    const sidebar = document.querySelector(".sidebar")
    sidebar.style.display = "none"
    console.log("I'm closed")
}
    

const myNavbar = createNavbar()

// document.body.appendChild(myNavbar)
document.body.prepend(myNavbar)