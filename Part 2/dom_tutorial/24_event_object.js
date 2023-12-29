/*
    EVENT OBJECT:
        > function(event){}
        > event.target ---> kis element ne hamare event ko trigger kiya
        > event.currentTarget ---> kis element pe hmara trigger event attech hai

    jab bhi kisi bhi elements pe event listener add hoga
    js Engine --- line by execution krta hai
    browser --- js engine + extra features
    browser --- js engine + webApi

    jab browser ko pata chala ki user ne event perform kiya hai 
    browser 2 work krta hai tab
    1.) callback function wo js engine ko dega
    2.) callback function ke sath browser jo event hua hai uski information bhi dega
    ye information object ke form me hogi
*/
// const allButtons = document.querySelectorAll("button");
// allButtons.forEach(function(button){
//     button.addEventListener("click", function(event){
//         console.log(event) // PointerEvent{...}
//     })
// })

// allButtons.forEach((button) => {
//     button.addEventListener("click", (event) => {
//         // console.log(this);
//         // console.log(event) // PointerEvent{...}
//         // console.log(event.target);  // // event kaha se fire hua
//         console.log(event.currentTarget); // // event kidhr trigger hai
//     })
// })


/*
    HOW EVENT LISTENER WORKS
        > sbse phle GEC run hoga
            so out put 
                script start !!!
                value of o is 4999999950000000
                script end !!!
            uske bad call stack se GEC remove krke FEC aayega

        the thing is ki jab tak GEC khtm nai hoga tb tk FEC run nai hoga

        > iske bad FEC run hoga
            now FEC ka output hoga
                Button 1 499999999067109000
                Button 2 499999999067109000
                Button 3 499999999067109000
            ek ek krke sbhi callback queue me se event run hoge
*/
console.log('script start !!!');

const allButtons = document.querySelectorAll("button");
allButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
        let n = 0;
        for(let i = 0; i <= 1000000000; i++){
            n +=i;
        }

        console.log(e.currentTarget.textContent, n); 
    })
});

let o = 0;
for(let i = 0; i <= 100000000; i++){
    o +=i;
}
console.log('value of o is', o);
console.log('script end !!!');

