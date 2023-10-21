let btn = document.querySelector('button');
let p = document.querySelector('p');

btn.addEventListener('click',async function() {
    let res = await getdata();
    p.innerText = res;
})

let url = "https://catfact.ninja/fact";

async function getdata(){
    try{
        let x = await axios.get(url);
        // console.log(x.data);
        return x.data.fact;
    }
    catch(E){
        // console.log(E);
        return "no fact found";
    }
}





// fetch(url)      // returns a promise
//     .then((res)=>{
//         console.log(res);
//         console.log(res.json());    //convert to json
//         return fetch(url);
//     })
//     .then((res)=>{
//         console.log(res);
//         console.log(res.json());
//         return fetch(url);
//     })
//     .then((res)=>{
//         console.log(res);
//         console.log(res.json());
//     })
//     .catch(function (err) {
//         console.log(err);
//     });


