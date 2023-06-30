
const input=document.getElementById("input-box");
const listcontainer=document.getElementById("list-container");

function addTask()
{
    if(input.value===' '|| input.value==='')
    {
        alert("You must enter a task!");
    
    }
    else
    {
        let li=document.createElement("li");
        //add the text inside the li.
        li.innerHTML=input.value;
        //display the task in the list container.
        listcontainer.appendChild(li);
        // to create a cross at the end of the task which has been done.
        let span=document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);
    }
    input.value="";
    savedata();
}
listcontainer.addEventListener("click",function(e)
{
   if(e.target.tagName==='LI')
   {
    e.target.classList.toggle("checked");
    savedata();
   }
   else if(e.target.tagName==='SPAN')
   {
    e.target.parentElement.remove();
    savedata();
   }
},false);
// to store the data.
function savedata()
{
      localStorage.setItem("data",listcontainer.innerHTML);
}
// To display the stored data.
function showList()
{
    listcontainer.innerHTML=localStorage.getItem("data");
}
showList();
