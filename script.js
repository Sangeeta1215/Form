const form=document.querySelector('.form');
const submit=document.querySelector('.btn');
const show=document.querySelector('.btn1');
submit.addEventListener("click",(e)=>
{  
 let formdata=new FormData(form);
 let values=[...formdata.entries()];
 let obj=Object.fromEntries(values);
 obj.Language=formdata.getAll("Language");
 let data=(function(){
    let record=localStorage.getItem('information');
    if(record==null)
    {
    return [];
    }
return JSON.parse(record);
 })();
 show.style.display="block";
 data.push(obj);
 localStorage.setItem('information',JSON.stringify(data));
});
show.addEventListener("click",(e) =>
{
    e.preventDefault();
   showData();
}) 
function showData()
    {
    let record=localStorage.getItem('information');
    var ob=JSON.parse(record);
    data(ob);
        document.getElementById("details").style.display="block";
      }
const input=document.getElementById("input");
const table1=document.getElementById("table1");
const tbody1=document.getElementById("tbody1");

input.addEventListener("keyup",(e) =>
{
e.preventDefault();
    let record=localStorage.getItem('information');
    var ob=JSON.parse(record);
 var filter=input.value.toUpperCase();
 if(table1.innerHTML!="")
 {
    table1.innerHTML=""
 }
   for(i of ob)
   {
     var data=i.Name;
     var txtValue=data.toUpperCase();
                
       if (txtValue.indexOf(filter)>-1)
         {
           for(j in i )
         {
             table1.innerHTML+=`<td>${j}</td> <td> ${i[j]}</td>`;
         }
         table1.innerHTML+=`<td colspan='2'><button class='update' onclick='update(${i})'>Update</button> <button class='delete' onclick='deletion(${i})'>Delete</button></td>`;

          table1.innerHTML+="<br>";
       }
          }
          document.querySelector("table").style.display="none";
          table1.style.display="block";
         } )
         function deletion(value)
         {
             let record=localStorage.getItem('information');
               var ob=JSON.parse(record);
               ob.splice(value,1);
               localStorage.setItem('information',JSON.stringify(ob));
               showData();
                }
function update(value)
{
   let record=localStorage.getItem('information');
   var ob=JSON.parse(record);
   const data=ob[value];
   document.querySelector("#name").value=data.Name;
   document.querySelector("#number").value=data.Number;
   document.querySelector("#email").value=data.Email;
  
   const gender=document.getElementsByName("Gender");
   for(var i of gender)
   {
   if(i.value==data.Gender)
   {
   i.checked=true;
   }
   }
const laanguage=document.getElementsByName("Language");
for(var i of laanguage)
{
   for(var j of data.Language)
   {
if(i.value==j)
{
i.checked=true;
}
 }
}
    const Hobby=document.getElementById('hobby');
    Hobby.value=data.Hobby;
    const btn2=document.querySelector(".btn2");
    const btn=document.querySelector(".btn")
    const btn1=document.querySelector(".btn1")
    btn.style.display="none";
    btn1.style.display="none";
   btn2.style.display="block";
   btn2.addEventListener("click",(e)=>{
    e.preventDefault();
    let formdata=new FormData(form);
 let values=[...formdata.entries()];
 let obj=Object.fromEntries(values);
 obj.Language=formdata.getAll("Language");            
 ob[value]=obj;
 if(nameValid() && phoneNumberValid() && emailValid() && genderValid() && languageValid() && hobbyValid())
      {
        localStorage.setItem('information',JSON.stringify(ob));
      }
      showData();
  })
}
var select=document.querySelector("#choose")
function sorting()
{
   
   let record=localStorage.getItem('information');
     var ob=JSON.parse(record);
     if(select.value=="Name")
     {
     ob.sort(function(a,b)
     {
      return fn(a.Name.toLowerCase(),b.Name.toLowerCase());
     });
     }
     if(select.value=="Number")
     {
      ob.sort(function(a,b)
      {
         return fn(a.Number,b.Number);
          }); 
     }
     if(select.value=="Email")
     ob.sort(function(a,b)
      {
         return fn(a.Email.toLowerCase(),b.Email.toLowerCase());
          });
          data(ob);   
}
function data(ob)
{
document.querySelector("tbody").innerHTML="";
    for(i in ob)
    {
       for(j in ob[i] )
            {
     document.querySelector("tbody").innerHTML+=`<td>${j}</td> <td> ${ob[i][j]}</td>`;
            }
            document.querySelector("tbody").innerHTML+=`<td colspan='2'><button class='update' onclick='update(${i})'>Update</button> <button class='delete' onclick='deletion(${i})'>Delete</button></td>`;

            document.querySelector("tbody").innerHTML+="<br>";
        }
        localStorage.setItem('information',JSON.stringify(ob));
}

function fn(a,b)
{
 if(a<b)
   {
    return -1;
   }
  if(a>b)
  {
  return 1;
   }
   return 0;
    }
