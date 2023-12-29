/*
    INNER HTML
        > gives each and every html code written in perticular element
*/
const headline = document.querySelector(".headline");
console.log(headline);
// // it RETURN code given bellow
// <div class="headline"> {...code...} </div>

console.log(headline.innerHTML);
// <h2 id="main-heading">Manage your tasks <span style="display: none;">Hello</span></h2>
// <button class="btn btn-headline">LEARN MORE</button>


headline.innerHTML = "<h1>innerHTML changed</h1>";
// // to add more innerHTML
headline.innerHTML += "<button class='btn btn-headline'>LEARN MORE</button>";