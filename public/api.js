fetch("https://api.github.com/users").then((data)=>{
    return data.json();
})
.then((objectData)=>{
    console.log(objectData[0].type);
    let tableData=""
    objectData.map((values)=>{
        tableData+=`<tr>
        <td><img class = "Avatar" src="${values.avatar_url}" width=100px></td>
        <td>${values.login}</td>
        <td>${values.type}</td>
        <td>${values.repos_url}</td>
        </tr>`
    });
    document.getElementById("table_body").innerHTML=tableData;
})



