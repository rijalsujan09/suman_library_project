//Book Properties
interface Book {
  id: number;
  name: string;
  author: string;
  edition: string;
}

//  Array  With Some Existing Book Records
let bookRecords: Book[] = [
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

const dummy1: Book = {
  id: 103,
  name: "Java Programming",
  author: "Program Wiz",
  edition: "7th",
};

bookRecords.push(dummy1);

// function to display some record
function displayRecords(): void {
  const table = document.getElementById("record-table")!;
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
function addRecord(): void {
  const idInput = document.getElementById("id") as HTMLInputElement;
  const nameInput = document.getElementById("name") as HTMLInputElement;
  const authorInput = document.getElementById("author") as HTMLInputElement;
  const editionInput = document.getElementById("edition") as HTMLInputElement;
  const errmsg = document.getElementById("errmsg") as HTMLInputElement;

  // assigning values to the variable
  const id = parseInt(idInput.value);
  const name = nameInput.value;
  const author = authorInput.value;
  const edition = editionInput.value;

  // Check if ID and Name already exist
  const existingRecord = bookRecords.find(
    (book) => book.id === id || book.name === name
  );
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

  const book: Book = { id, name, author, edition };
  bookRecords.push(book);
  const asccmsg = document.getElementById('asccmsg') as HTMLElement;
  asccmsg.style.display ="block";


  // It is to Clear the input fields
  idInput.value = "";
  nameInput.value = "";
  authorInput.value = "";
  editionInput.value = "";

  displayRecords();
}


// functon to get searched item
let tablehide = document.getElementById('search-table') as HTMLElement;


function searchRecord(): void {
  tablehide.style.display = "block";
  tablehide.style.border = "none";
  const searchInput = document.getElementById("search") as HTMLInputElement;
  const searchTerm = searchInput.value.toLowerCase();
  const searchId = parseInt(searchInput.value);

  const filteredRecords = bookRecords.filter(
    (book) =>
      book.name.toLowerCase().includes(searchTerm) || book.id === searchId
  );
  const errmsg2 = document.getElementById("errmsg") as HTMLInputElement;
  if (filteredRecords.length > 0) {
    displaySearchResults(filteredRecords);
  } else {
    errmsg2.style.display = "block";
    errmsg2.innerHTML = "No Record found";
    return;
  }
  errmsg2.style.display = "none";
}

// function to display search reasult



function displaySearchResults(records: Book[]): void {
  const table = document.getElementById("search-table")!;
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

function deleteRecord(name: string): void {
  const deleteInput = document.getElementById("delete") as HTMLInputElement;

  const index = bookRecords.findIndex(
    (book) => book.name === deleteInput.value
  );
  if (index !== -1) {
    bookRecords.splice(index, 1);
    const dsccmsg = document.getElementById('dsccmsg') as HTMLElement;
  dsccmsg.style.display ="block";

    displayRecords();
  }
  else{
    let errmsg3 = document.getElementById('errmsg3') as HTMLElement;
    errmsg3.innerHTML = "Book Not found in Exixting Record, Please! try different Name";
    errmsg3.style.display="block";
  }
}



function updateRecord(): void {
  const idInput = document.getElementById("update-id") as HTMLInputElement;
  const nameInput = document.getElementById("update-name") as HTMLInputElement;
  const authorInput = document.getElementById(
    "update-author"
  ) as HTMLInputElement;
  const editionInput = document.getElementById(
    "update-edition"
  ) as HTMLInputElement;
  let errmsg1 = document.getElementById("errmsg1") as HTMLElement;

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

  const usccmsg = document.getElementById('usccmsg') as HTMLElement;
  usccmsg.style.display ="block";


  // Clear input fields
  idInput.value = "";
  nameInput.value = "";
  authorInput.value = "";
  editionInput.value = "";

  displayRecords();
}

displayRecords();
