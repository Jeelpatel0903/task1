let companyList = [];

class Company {
    constructor() {
        this.companyId = null;
        this.companyName = "";
        this.companyLocation = "";
        this.companyGst = null;
    }
}

function getdata() {
    let company = new Company();
    company.companyId = document.getElementById("userid").value;
    company.companyName = document.getElementById("userName").value;
    company.companyLocation = document.getElementById("userLocation").value;
    company.companyGst = document.getElementById("gstNumber").value;

    if(company.companyId === "" || company.companyName === "" || company.companyLocation === "" || company.companyGst === "" ){
        alert("Please Input Allfild");
        return;
    }

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

    document.getElementById('userid').value = '';
        document.getElementById('userName').value = '';
        document.getElementById('userLocation').value = '';
        document.getElementById('gstNumber').value = '';

    console.log(companyList);
    showdata();
}

function showdata() {
    document.getElementById('masterTable').innerHTML = "";

    companyList.forEach(element => {
        const row = document.createElement('tr');
        const userTd = document.createElement('td');
        const username = document.createElement('td');
        const userlocation = document.createElement('td');
        const gstnumber = document.createElement('td');
        const actionset = document.createElement('td');
        const deleteButton = document.createElement('button');
        const editset = document.createElement('td');
        const editbutton = document.createElement('button');

        userTd.innerText = element.companyId;
        username.innerText = element.companyName;
        userlocation.innerText = element.companyLocation;
        gstnumber.innerText = element.companyGst;

        deleteButton.className = 'btn btn-danger';
        deleteButton.innerText = 'Delete';
        deleteButton.addEventListener('click', function () {
            const index = companyList.findIndex(el => el.companyId === element.companyId);
            if (index !== -1) {
                companyList.splice(index, 1);
                showdata();
            }
        });

        editbutton.className = 'btn btn-success';
        editbutton.innerText = 'Edit';
        editbutton.addEventListener('click', function () {
            const index = companyList.findIndex(el => el.companyId === element.companyId);
            const useridin = document.getElementById('userid');
            const username = document.getElementById('userName');
            const userlocation = document.getElementById('userLocation');
            const usergstnumber = document.getElementById('gstNumber');

            useridin.value = element.companyId;
            username.value = element.companyName;
            userlocation.value = element.companyLocation;
            usergstnumber.value = element.companyGst;

            document.getElementById('updatebutton').style.display = "block";
        });

        actionset.appendChild(deleteButton);
        editset.appendChild(editbutton);

        row.appendChild(userTd);
        row.appendChild(username);
        row.appendChild(userlocation);
        row.appendChild(gstnumber);
        row.appendChild(actionset);
        row.appendChild(editset);

        document.getElementById('masterTable').appendChild(row);
    });
}

document.getElementById("updatebutton").style.display = 'none';

function searchData() {
    const searchInput = document.getElementById("searchInput").value.toLowerCase();
    const filteredList = companyList.filter(element => element.companyName.includes(searchInput));

    document.getElementById('masterTable').innerHTML = "";

    filteredList.forEach(element => {
        const row = document.createElement('tr');
        const userTd = document.createElement('td');
        const username = document.createElement('td');
        const userlocation = document.createElement('td');
        const gstnumber = document.createElement('td');
        const actionset = document.createElement('td');
        const deleteButton = document.createElement('button');
        const editset = document.createElement('td');
        const editbutton = document.createElement('button');

        userTd.innerText = element.companyId;
        username.innerText = element.companyName;
        userlocation.innerText = element.companyLocation;
        gstnumber.innerText = element.companyGst;

        deleteButton.className = 'btn btn-danger';
        deleteButton.innerText = 'Delete';
        deleteButton.addEventListener('click', function () {
            const index = companyList.findIndex(el => el.companyId === element.companyId);
            if (index !== -1) {
                companyList.splice(index, 1);
                showdata();
            }
        });

        editbutton.className = 'btn btn-success';
        editbutton.innerText = 'Edit';
        editbutton.addEventListener('click', function () {
            const index = companyList.findIndex(el => el.companyId === element.companyId);
            const useridin = document.getElementById('userid');
            const username = document.getElementById('userName');
            const userlocation = document.getElementById('userLocation');
            const usergstnumber = document.getElementById('gstNumber');

            useridin.value = element.companyId;
            username.value = element.companyName;
            userlocation.value = element.companyLocation;
            usergstnumber.value = element.companyGst;

            document.getElementById('updatebutton').style.display = "block";
        });

        actionset.appendChild(deleteButton);
        editset.appendChild(editbutton);

        row.appendChild(userTd);
        row.appendChild(username);
        row.appendChild(userlocation);
        row.appendChild(gstnumber);
        row.appendChild(actionset);
        row.appendChild(editset);

        document.getElementById('masterTable').appendChild(row);
    });
}

function updatedatafunction() {
    const eduseridin = document.getElementById('userid').value;
    const indexToUpdate = companyList.findIndex(obj => obj.companyId == eduseridin);

    if (indexToUpdate !== -1) {
        const euseridin = document.getElementById('userid').value;
        const username = document.getElementById('userName').value;
        const userlocation = document.getElementById('userLocation').value;
        const usergstnumber = document.getElementById('gstNumber').value;

        companyList[indexToUpdate].companyId = euseridin;
        companyList[indexToUpdate].companyName = username;
        companyList[indexToUpdate].companyLocation = userlocation;
        companyList[indexToUpdate].companyGst = usergstnumber;

        showdata();

        document.getElementById('updatebutton').style.display = 'none';

        document.getElementById('userid').value = '';
        document.getElementById('userName').value = '';
        document.getElementById('userLocation').value = '';
        document.getElementById('gstNumber').value = '';

        console.log(companyList);
    } else {
        console.log('Object with id ' + eduseridin + ' not found in the array.');
    }
}
