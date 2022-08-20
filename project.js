const bar = document.getElementById('bar');
const nav = document.getElementById('navbar');
const x= document.getElementById('x');
const user =document.getElementById('user-icon');
if(bar){
    bar.addEventListener('click' , () =>{
        nav.classList.add('active');
        bar.style.display="none";
        x.style.display="block";
    })
}
if(x){
    x.addEventListener('click', ()=>{
        nav.classList.remove('active');
        bar.style.display="block";
        x.style.display="none";
        
    })
}
// if(user){
//     user.addEventListener('click', ()=>{

//     })
// }
