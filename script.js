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

function deletion(value)
{
     let record=localStorage.getItem('information');
     var ob=JSON.parse(record);
     ob.splice(value,1);
     localStorage.setItem('information',JSON.stringify(ob));
     showData();
}
function showData()
    {
    let record=localStorage.getItem('information');
    var ob=JSON.parse(record);
    document.querySelector("tbody").innerHTML="";
    for(i in ob)
    {
       for(j in ob[i] )
            {
                console.log(ob[i]+":"+ob[i][j]);
               document.querySelector("tbody").innerHTML+=`<td>${j}</td> <td> ${ob[i][j]}</td>`;
            }
            document.querySelector("tbody").innerHTML+=`<td colspan='2'><button class='update' onclick='update(${i})'>Update</button> <button class='delete' onclick='deletion(${i})'>Delete</button></td>`;

            document.querySelector("tbody").innerHTML+="<br>";
        }
        document.getElementById("details").style.display="block";}

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
                 table1.innerHTML+="<br>";
                }
                  }
                  document.querySelector("table").style.display="none";
                  table1.style.display="block";
                } )
 

function update(value)
{
   let record=localStorage.getItem('information');
   var ob=JSON.parse(record);
   const dat=ob[value];
   document.querySelector("#name").value=dat.Name;
   document.querySelector("#number").value=dat.Number;
   document.querySelector("#email").value=dat.Email;
  
   const gender=document.getElementsByName("Gender");
   for(var i of gender)
   {
      console.log(i.value)
   if(i.value==dat.Gender)
   {
   i.checked=true;
   }
   }


const laanguage=document.getElementsByName("Language");
for(var i of laanguage)
{
   for(var j of dat.Language)
   {
if(i.value==j)
{
i.checked=true;
}
 }
}
const Hobby=document.getElementById('hobby');
    Hobby.value=dat.Hobby;


    const btn2=document.querySelector(".btn2");
    const btn=document.querySelector(".btn")
    const btn1=document.querySelector(".btn1")
    btn.style.display="none";
    btn1.style.display="none";
   btn2.style.display="block";

   btn2.addEventListener("click",(e)=>{
    let formdata=new FormData(form);
 let values=[...formdata.entries()];
 let obj=Object.fromEntries(values);
 obj.Language=formdata.getAll("Language");            
 ob[value]=obj;
 localStorage.setItem('information',JSON.stringify(ob));
   })
}





