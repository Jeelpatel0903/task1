let companyList = [];

function getdata() {
    class Company {
        companyId = null;
        companyName = "";
        companyLocation = "";
        companyGst = null;
    }

    let company = new Company();
    company.companyId = document.getElementById("userid").value;
    company.companyName = document.getElementById("userName").value;
    company.companyLocation = document.getElementById("userLocation").value;
    company.companyGst = document.getElementById("gstNumber").value;

    // Check if data already exists
    const existingIndex = companyList.findIndex(el => el.companyId === company.companyId);
    if (existingIndex !== -1) {
        alert("Data with the same ID already exists. Please update the existing data or enter a new ID.");
        return;
    }

    companyList.push({
        "companyId": company.companyId,
        "companyName": company.companyName,
        "companyLocation": company.companyLocation,
        "companyGst": company.companyGst
    });

    console.log(companyList);
    showdata();
}

function showdata() {
    // Clear existing content
    document.getElementById('masterTable').innerHTML = "";

    companyList.forEach(element => {
        const row = document.createElement('tr');

        // Create table cells for each data field
        const userTd = document.createElement('td');
        userTd.innerText = element.companyId;

        const username = document.createElement('td');
        username.innerText = element.companyName;

        const userlocation = document.createElement('td');
        userlocation.innerText = element.companyLocation;

        const gstnumber = document.createElement('td');
        gstnumber.innerText = element.companyGst;

        // Create delete button
        const deleteButtonCell = document.createElement('td');
        const deleteButton = document.createElement('button');
        deleteButton.className = 'btn btn-danger';
        deleteButton.innerText = 'Delete';

        deleteButton.addEventListener('click', function () {
            const index = companyList.findIndex(el => el.companyId === element.companyId);
            if (index !== -1) {
                companyList.splice(index, 1);
                showdata();
            }
        });

        deleteButtonCell.appendChild(deleteButton);

        // Append cells to the row
        row.appendChild(userTd);
        row.appendChild(username);
        row.appendChild(userlocation);
        row.appendChild(gstnumber);
        row.appendChild(deleteButtonCell);

        // Append row to the table
        document.getElementById('masterTable').appendChild(row);
    });
}

function searchData() {
    const searchInput = document.getElementById("searchInput").value.toLowerCase();
    const filteredList = companyList.filter(element => element.companyName.includes(searchInput));

    // Update the displayed list with the filtered results
    document.getElementById('masterTable').innerHTML = "";
    
    filteredList.forEach(element => {
        const row = document.createElement('tr');
        
        // Create table cells for each data field
        const userTd = document.createElement('td');
        userTd.innerText = element.companyId;
        
        const username = document.createElement('td');
        username.innerText = element.companyName;
        
        const userlocation = document.createElement('td');
        userlocation.innerText = element.companyLocation;
        
        const gstnumber = document.createElement('td');
        gstnumber.innerText = element.companyGst;
        
        // Create delete button
        const deleteButtonCell = document.createElement('td');
        const deleteButton = document.createElement('button');
        deleteButton.className = 'btn btn-danger';
        deleteButton.innerText = 'Delete';
        
        deleteButton.addEventListener('click', function () {
            const index = companyList.findIndex(el => el.companyId === element.companyId);
            if (index !== -1) {
                companyList.splice(index, 1);
                showdata();
            }
        });
        
        deleteButtonCell.appendChild(deleteButton);
        
        // Append cells to the row
        row.appendChild(userTd);
        row.appendChild(username);
        row.appendChild(userlocation);
        row.appendChild(gstnumber);
        row.appendChild(deleteButtonCell);
        
        // Append row to the table
        document.getElementById('masterTable').appendChild(row);
    });
}
