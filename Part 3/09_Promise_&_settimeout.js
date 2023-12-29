/*
    PROMISE & SETTIMEOUT
*/
// // I want to resolve / reject promise after 2 second
function myPromise(){
    return new Promise((resolve, reject)=>{
        // const value = true;
        const value = false;
        setTimeout(() => {
            value ? resolve() : reject();
        }, 2000);
    })
}
myPromise().then(()=>console.log("resolve")).catch(()=>console.log("reject"))