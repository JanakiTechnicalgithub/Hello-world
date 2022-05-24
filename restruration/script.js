// let bar=document.getElementById('bars');
// let navabr=document.querySelector('.navbar');

// bar.onclick=()=>{
//     if(navabr.style.display==='none'){
//         navabr.style.display='block';
//     }else{
//         navabr.style.display='none';
//     }
// }
$(document).ready(function(){
    $('#bars').click(function(){
        $('.navbar').toggle(1000);
    });
});