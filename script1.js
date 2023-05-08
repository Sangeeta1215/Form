var n1=false;
var n2=false;
var n3=false;
var n4=false;
var n5=false;
var n6=false;
submit.disabled=true;
function nameValid()
    {
        const Name=document.getElementById("name").value;
	   let pattern = /^[A-Z a-z]+ [A-Z a-z]+$/i;
	   if (pattern.test(Name))
	   {
       n1=true;
	   }
	  else
	 {
       document.getElementById("name").focus();
       n1=false;
	   }	   
    }
    function phoneNumberValid(){
        const Number=document.getElementById("number").value;
        if(Number.length==10)
    {
        n2=true;  
    }
    else{
       n2=false; 
       document.getElementById("number").focus();
    }
    }
    function emailValid(){
  const Email=document.getElementById("email").value;
   let pattern=/^([\._A-Za-z0-9]+)@([A-Za-z0-9]+).([a-z]{2,6})$/
   if(pattern.test(Email))
	{
	n3=true;
	}
	else
	{
	n3=false;
    document.getElementById("email");
     }  
}

function isValid()
{
if(n1==true && n2==true && n3==true &&genderValid() && languageValid() &&hobbyValid())
{
    console.log("HELLO HERE I AM")
submit.disabled=false;
}
}


function genderValid(){
    const Male=document.getElementById("male");
    const Female=document.getElementById("female");
    if(Male.checked==true)
    {
    return true;     
    }
    else if(Female.checked==true)
    {
    return true;
    }
    else{
        return false;
    }
 }
 
function languageValid(){
    const Java=document.getElementById("Java");
    const HTML=document.getElementById("HTML");
    const CPP =document.getElementById("C++");
if(Java.checked==true||HTML.checked==true||CPP.checked==true)
{
return true;
}
 else {
    return false;
    }
}

function hobbyValid(){
    const Hobby=document.myform.Hobby.value;
    if(Hobby=="")
{
   return false;
}
else{
    return true;
}
}

   