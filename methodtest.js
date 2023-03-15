let date = document.getElementById('date');
let jsdate = new Date();
date.innerHTML = `Todays date is ${jsdate}`;
let getBtn = document.getElementById("getBtn");
let postBtn = document.getElementById("postBtn");
let putBtn = document.getElementById("putBtn");
let deleteBtn = document.getElementById("deleteBtn");

let id = document.getElementById("record-id");
let articleName = document.getElementById("article-name");
let articleBody = document.getElementById("article-body");
let result = document.getElementById('result');

getBtn.addEventListener('click', () => {
    fetch("https://httpbin.org/get", {
        method: "GET",
      })
        .then(resp => resp.json())
        .then(resp => {
            console.log(resp);
            result.innerHTML = JSON.stringify(resp, undefined, 2);
        })
        .catch(error => console.error(error));
});

postBtn.addEventListener('click', () => {
    const aName = articleName.value;
    const aBody = articleBody.value;
    const aId = id.value;

    if(aName === '' || aBody == '' || aId == ''){
        alert('Please fill out all fields');
        return;
    }
    let jsonBody = {
        articleID: aId,
        ArticleName: aName,
        ArticleBody: aBody,
    }

    fetch("https://httpbin.org/post", {
        method: "POST",
        body: JSON.stringify(jsonBody)
      })
        .then(resp => resp.json())
        .then(resp => {
            console.log(resp);
            result.innerHTML = JSON.stringify(resp, undefined, 2);
        })
        .catch(error => console.error(error));
});

putBtn.addEventListener('click', () => {
    const aName = articleName.value;
    const aBody = articleBody.value;
    const aId = id.value;

    if(aName === '' || aBody == '' || aId == ''){
        alert('Please fill out all fields');
        return;
    }
    let jsonBody = {
        articleID: aId,
        ArticleName: aName,
        ArticleBody: aBody,
    }

    fetch("https://httpbin.org/put", {
        method: "PUT",
        body: JSON.stringify(jsonBody)
      })
        .then(resp => resp.json())
        .then(resp => {
            console.log(resp);
            result.innerHTML = JSON.stringify(resp, undefined, 2);
        })
        .catch(error => console.error(error));
});

deleteBtn.addEventListener('click', () => {
    const aName = articleName.value;
    const aBody = articleBody.value;
    const aId = id.value;

    if(aName === '' || aBody == '' || aId == ''){
        alert('Please fill out all fields');
        return;
    }
    let jsonBody = {
        articleID: aId,
        ArticleName: aName,
        ArticleBody: aBody,
    }

    fetch("https://httpbin.org/delete", {
        method: "DELETE",
        body: JSON.stringify(jsonBody)
      })
        .then(resp => resp.json())
        .then(resp => {
            console.log(resp);
            result.innerHTML = JSON.stringify(resp, undefined, 2);
        })
        .catch(error => console.error(error));
});