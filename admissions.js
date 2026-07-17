// ======================================
//          HAMBURGER MENU
// ======================================


const hamburger = document.querySelector(".hamburger");

const navMenu = document.querySelector(".nav-menu");



if(hamburger){


hamburger.addEventListener("click",()=>{


    navMenu.classList.toggle("active");


});


}






// Close menu after clicking link

document.querySelectorAll(".nav-menu a").forEach(link=>{


    link.addEventListener("click",()=>{


        navMenu.classList.remove("active");


    });


});









// ======================================
//          ADMISSION FORM
// ======================================


const form = document.getElementById("applicationForm");

const message = document.getElementById("message");



if(form){



form.addEventListener("submit",(e)=>{


e.preventDefault();





// Get values


let name =
document.getElementById("name").value;


let email =
document.getElementById("email").value;


let phone =
document.getElementById("phone").value;


let course =
document.getElementById("course").value;





// File checking


let photo =
document.getElementById("photo").files.length;


let tenth =
document.getElementById("tenth").files.length;


let inter =
document.getElementById("inter").files.length;


let aadhaar =
document.getElementById("aadhaar").files.length;





if(
name==="" ||
email==="" ||
phone==="" ||
course===""
){


message.style.color="red";

message.innerHTML=
"Please fill all required details";


return;


}





if(
photo===0 ||
tenth===0 ||
inter===0 ||
aadhaar===0
){


message.style.color="red";


message.innerHTML=
"Please upload all required documents";


return;


}






// Success message


message.style.color="green";


message.innerHTML=
"Application Submitted Successfully! NIRVANA COLLEGE Admission Team will contact you soon.";





// Reset form


form.reset();



});



}








// ======================================
//          FILE SIZE VALIDATION
// ======================================



const files = document.querySelectorAll("input[type='file']");



files.forEach(file=>{


file.addEventListener("change",()=>{



if(file.files[0]){


let size =
file.files[0].size / 1024 / 1024;



if(size > 5){


alert("File size should be below 5MB");


file.value="";


}



}



});


});