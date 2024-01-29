const createContainer = document.getElementById("create");
let bookDetails={};
const createButton = document.getElementById("createBtn");

createButton.addEventListener("click",takingInput);
async function takingInput(){
    let bookName = document.getElementById("name").value;
    let authorName = document.getElementById("author").value;
    let numberOfPages = document.getElementById("pages").value;
    let bookPrice = document.getElementById("price").value;

    bookDetails={};
    bookDetails.name=bookName;
    bookDetails.author=authorName;
    bookDetails.pages=numberOfPages;
    bookDetails.price=bookPrice; 

    let dataToSend = {
        bookObject:bookDetails,

    };

    let myHeaders = new Headers();
    myHeaders.append("content-type","application/json"); 
    let reqOptions={
        method:"POST",
        headers:myHeaders,
        body:JSON.stringify(dataToSend),
    }
    let jsoData = await fetch("http://localhost:8080/add",reqOptions);
    let jsonData = await jsoData.json();
    console.log(jsonData); /// console for just checking
}

