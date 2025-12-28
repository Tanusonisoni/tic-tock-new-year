let endDate=("31 dec 2025 12:00 PM");
// document.getElementById("#end-date").innerHTML="end"
let newdate=document.getElementById("endDate").innerHTML=endDate;
const inputs=document.querySelectorAll("input");
function clock(){
    const end= new Date(endDate);
    const now=new Date();
   const diff=(end - now)/1000;

   if(diff<0){
       return;
   }
   
   //days and hour min sec
   inputs[0].value=(Math.floor(diff/(60*60*24)));
   inputs[1].value=(Math.floor(diff%(60*60*24)/(60*60)))
   inputs[2].value=(Math.floor(diff%(60*60)/(60)))
   inputs[3].value=(Math.floor(diff%60))
}
clock();


setInterval(
   ()=>{
        clock()
    },1000
    
 )

let text="happy new yaer"
let repeat='<i class="fa-solid fa-star" style="color:gold;"></i>'*2;

const stars=document.querySelector(".star");
const copys=document.getElementById("copy");

stars.addEventListener("click",function(){


stars.innerHTML=text;


for (let i = 0; i < 30; i++) {

    setTimeout(() => {

        let sky = document.createElement("span");

        sky.classList.add("fly");
        sky.innerHTML = "&#9733;"; 

        

        // random horizontal 
         let x = Math.random() * 600 - 300; // -300px to +300px


        // random vertical height (200–450 px)
        let y = Math.random() * 250 + 200;

        // pass values to CSS via variables
        sky.style.setProperty("--x", x + "px");
        sky.style.setProperty("--y", y + "px");

        // random start position
        sky.style.left = Math.random() * 100 + "%";

        copys.appendChild(sky);

        setTimeout(() => {
            sky.remove();
        },7000);

    }, i *100);
}    
});




