"use strict";
//  Array  With Some Existing Book Records
let bookRecords = [
    {
        id: 101,
        name: "Maths",
        author: "Suman Rijal",
        edition: "1st",
    },
    {
        id: 102,
        name: "Science",
        author: "Jhon Joe",
        edition: "2nd",
    },
];
// One Extra dummy data Added
const dummy1 = {
    id: 103,
    name: "Java Programming",
    author: "Program Wiz",
    edition: "7th",
};
bookRecords.push(dummy1);
// function to display some record
function displayRecords() {
    const table = document.getElementById("record-table");
    table.innerHTML = `
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Author</th>
          <th>Edition</th>
        </tr>
      `;
    bookRecords.forEach((book) => {
        const row = document.createElement("tr");
        row.innerHTML = `
          <td>${book.id}</td>
          <td>${book.name}</td>
          <td>${book.author}</td>
          <td>${book.edition}</td>
        `;
        table.appendChild(row);
    });
}
// function to add record
function addRecord() {
    const idInput = document.getElementById("id");
    const nameInput = document.getElementById("name");
    const authorInput = document.getElementById("author");
    const editionInput = document.getElementById("edition");
    const errmsg = document.getElementById("errmsg");
    // assigning values to the variable
    const id = parseInt(idInput.value);
    const name = nameInput.value;
    const author = authorInput.value;
    const edition = editionInput.value;
    // Check if ID and Name already exist
    const existingRecord = bookRecords.find((book) => book.id === id || book.name === name);
    if (existingRecord) {
        errmsg.style.display = "block";
        errmsg.innerHTML = "ID or Name already exists. Please enter unique values";
        return;
    }
    // to check if the input id is number
    else if (isNaN(id)) {
        errmsg.style.display = "block";
        errmsg.innerHTML = "Record with the given ID or Name does not exist.";
        return;
    }
    errmsg.style.display = "none";
    const book = { id, name, author, edition };
    bookRecords.push(book);
    const asccmsg = document.getElementById('asccmsg');
    asccmsg.style.display = "block";
    // It is to Clear the input fields
    idInput.value = "";
    nameInput.value = "";
    authorInput.value = "";
    editionInput.value = "";
    displayRecords();
}
// functon to get searched item
let tablehide = document.getElementById('search-table');
function searchRecord() {
    tablehide.style.display = "block";
    tablehide.style.border = "none";
    const searchInput = document.getElementById("search");
    const searchTerm = searchInput.value.toLowerCase();
    const searchId = parseInt(searchInput.value);
    const filteredRecords = bookRecords.filter((book) => book.name.toLowerCase().includes(searchTerm) || book.id === searchId);
    const errmsg2 = document.getElementById("errmsg");
    if (filteredRecords.length > 0) {
        displaySearchResults(filteredRecords);
    }
    else {
        errmsg2.style.display = "block";
        errmsg2.innerHTML = "No Record found";
        return;
    }
    errmsg2.style.display = "none";
}
// function to display search reasult
function displaySearchResults(records) {
    const table = document.getElementById("search-table");
    table.innerHTML = `
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Author</th>
          <th>Edition</th>
        </tr>
      `;
    records.forEach((book) => {
        const row = document.createElement("tr");
        row.innerHTML = `
          <td>${book.id}</td>
          <td>${book.name}</td>
          <td>${book.author}</td>
          <td>${book.edition}</td>
          
        `;
        table.appendChild(row);
    });
}
function deleteRecord(name) {
    const deleteInput = document.getElementById("delete");
    const index = bookRecords.findIndex((book) => book.name === deleteInput.value);
    if (index !== -1) {
        bookRecords.splice(index, 1);
        const dsccmsg = document.getElementById('dsccmsg');
        dsccmsg.style.display = "block";
        displayRecords();
    }
    else {
        let errmsg3 = document.getElementById('errmsg3');
        errmsg3.innerHTML = "Book Not found in Exixting Record, Please! try different Name";
        errmsg3.style.display = "block";
    }
}
function updateRecord() {
    const idInput = document.getElementById("update-id");
    const nameInput = document.getElementById("update-name");
    const authorInput = document.getElementById("update-author");
    const editionInput = document.getElementById("update-edition");
    let errmsg1 = document.getElementById("errmsg1");
    const id = parseInt(idInput.value);
    const name = nameInput.value;
    const author = authorInput.value;
    const edition = editionInput.value;
    const existingRecord = bookRecords.find((book) => book.id === id);
    if (!existingRecord) {
        errmsg1.style.display = "block";
        errmsg1.innerHTML = "Record with the given ID does not exist.";
        return;
    }
    errmsg1.style.display = "none";
    existingRecord.name = name;
    existingRecord.author = author;
    existingRecord.edition = edition;
    const usccmsg = document.getElementById('usccmsg');
    usccmsg.style.display = "block";
    // Clear input fields
    idInput.value = "";
    nameInput.value = "";
    authorInput.value = "";
    editionInput.value = "";
    displayRecords();
}
displayRecords();
