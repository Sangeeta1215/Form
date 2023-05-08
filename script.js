const form=document.querySelector('.form');
const submit=document.querySelector('.btn');
const show=document.querySelector('.btn1');
submit.addEventListener("click",(e)=>
{  
 e.preventDefault();
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
    let record=localStorage.getItem('information');
    var ob=JSON.parse(record);
    console.log(ob);
    document.querySelector("tbody").innerHTML="";
    for(i of ob)
    {

          for(j in i )
            {
                console.log(i+":"+i[j]);
               document.querySelector("tbody").innerHTML+=`<td>${j}</td> <td> ${i[j]}</td>`;

            }
            document.querySelector("tbody").innerHTML+="<br>";
        }
        document.getElementById("details").style.display="block";
    
})
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
                    console.log(txtValue);
                    console.log(filter)
                    for(j in i )
                  {
                    table1.innerHTML+=`<td>${j}</td> <td> ${i[j]}</td>`;
                 }
                 table1.innerHTML+="<br>";
                }
                  }
                  document.querySelector("table").style.display="none";
                  table1.style.display="block";
                }  )
 