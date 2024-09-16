const container = document.getElementById("container");

function tab(){
    const table = document.createElement("table");
    numTd = 0;
    table.classList.add("table");
    for(let i = 0; i < 6; i++)
    {
        let tr = document.createElement("tr");
        for(let x = 0; x < 7; x++)
        {
            let td = document.createElement("td");
            td.id = numTd;
            td.addEventListener("click", modTab(listener.target.id));
            numTd++;
            tr.appendChild(td);
        }
        table.appendChild(tr);
        
    }
    container.appendChild(table);

}

function modTab(id){
    const td = document.querySelectorAll("td");
    if(numTd == 0 || numTd < 4)
    td.style.backgroundColor = "red";
    else
    td.style.backgroundColor = "blue";
}

document.addEventListener('DOMContentLoaded', tab);