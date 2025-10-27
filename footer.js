function createFooter(){
    const template = document.createElement('template')

        template.innerHTML = `
         <footer class="footer-nonprofit ex1" role="contentinfo">
            <div class="footer-nonprofit__main">
                <div class="footer-nonprofit__links-container">
                    <div class="footer-nonprofit__links">
                        <h3>About Us</h3>
                        <ul>
                            <li><a href="./ourmission.html">Our Mission</a></li>
                            <li><a href="./boardmembers.html">Our Team</a></li>
                            <li><a href="./history.html">Our History</a></li>
                            <li><a href="./contactpage.html">Contact</a></li>
                        </ul>
                    </div>
                    <div class="footer-nonprofit__links">
                        <h3>Our Work</h3>
                        <ul>
                        <!--<li><a href="#">Impact Reports</a></li>
                            <li><a href="#">Financials</a></li>-->
                            <li><a href="./importantdocs.html">Founding Documents</a></li>
                            <li><a href="./calendar.html">Events</a></li>
                        </ul>
                    </div>
                </div>
                




            </div>

            <div class="footer-nonprofit__partners">
                <h4>Our Partners & Supporters</h4>
                <div class="footer-nonprofit__partner-logos">
                    <svg role="img" viewBox="0 0 100 40"><title>Partner Logo 1</title><rect width="100" height="40" rx="4" fill="#e0e0e0"/><text x="50" y="25" fill="#888" text-anchor="middle" font-size="10" font-family="sans-serif">LOGO</text></svg>
                    <svg role="img" viewBox="0 0 100 40"><title>Partner Logo 2</title><rect width="100" height="40" rx="4" fill="#e0e0e0"/><text x="50" y="25" fill="#888" text-anchor="middle" font-size="10" font-family="sans-serif">LOGO</text></svg>
                    <svg role="img" viewBox="0 0 100 40"><title>Partner Logo 3</title><rect width="100" height="40" rx="4" fill="#e0e0e0"/><text x="50" y="25" fill="#888" text-anchor="middle" font-size="10" font-family="sans-serif">LOGO</text></svg>
                    <svg role="img" viewBox="0 0 100 40"><title>Partner Logo 4</title><rect width="100" height="40" rx="4" fill="#e0e0e0"/><text x="50" y="25" fill="#888" text-anchor="middle" font-size="10" font-family="sans-serif">LOGO</text></svg>
                </div>
            </div>

            <div class="footer-nonprofit__bottom">
                <p>&copy; Supernova Winter Arts, All Rights Reserved.</p>
              
            </div>
    </footer>
        `

        //  <p>Registered Charity Number: 12345-6789.</p>

        /*<div class="footer-nonprofit__cta">
                    <p>Your support makes our program possible. Help us keep performing by making a donation today!</p>
                    <a href="./support.html" class="footer-nonprofit__donate-button">Donate Now</a>
                </div>*/


const footer = template.content.firstElementChild

return footer

}


// function showSidebar(){
//     const sidebar = document.querySelector(".sidebar")
//     sidebar.style.display = "flex"
//     console.log("I'm open")
    
// }

// function hideSidebar(){
//     const sidebar = document.querySelector(".sidebar")
//     sidebar.style.display = "none"
//     console.log("I'm closed")
// }
    

const myFooter = createFooter()

document.body.appendChild(myFooter)