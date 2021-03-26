

const title = document.querySelector('[placeholder = "Title"]');
const author = document.querySelector('[placeholder = "Author"]');
const pages = document.querySelector('[placeholder = "Pages"]');
const add = document.getElementById('add');
const checkbox = document.querySelector('[type = "checkbox"]');
const ol = document.getElementById('ol');
if(localStorage.getItem("data") == null){
    localStorage.setItem("data", "")
}
let read, str = localStorage.getItem("data");
if(localStorage.getItem("data") != ""){
let arr = localStorage.getItem("data").split("*j#");
arr.pop();
for(let i = 0; i < arr.length; i++){
    const alist = document.createElement("LI");
    let textnode1 = document.createTextNode(arr[i]);
    alist.appendChild(textnode1);
    ol.appendChild(alist);
}
}
add.addEventListener("click", function(){
    if(title.value == "" || author.value == "" || pages.value == "")
        alert("Please Fill out the empty field(s)!");
    else{
        (checkbox.checked)?read = "read": read = "not read yet";
        const list = document.createElement("LI");
        textnode = document.createTextNode(`${title.value} by ${author.value}, ${pages.value} pages, ${read}`);
        str += textnode.data + "*j#";
        localStorage.setItem("data", str);
        list.appendChild(textnode);
        ol.appendChild(list);
        title.value = ''; author.value = ''; pages.value = ''; checkbox.checked = false;
    }
});