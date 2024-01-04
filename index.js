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

    function showdata() {
        // Clear existing content
        document.getElementById('masterTable').innerHTML = "";

        companyList.forEach(element => {
            const row = document.createElement('tr');
            const userTd = document.createElement('td');
            const username = document.createElement('td');
            const userlocation = document.createElement('td');
            const gstnumber = document.createElement('td');
            const deletebutton = document.createElement('input');

            deletebutton.type = "button";
            deletebutton.className = "btn btn-danger";
            deletebutton.value = "delete";

            deletebutton.onclick = function () {
                const index = companyList.findIndex(el => el.companyId === element.companyId);
                if (index !== -1) {
                    companyList.splice(index, 1);
                    showdata();
                }
            };

            userTd.innerText = element.companyId;
            username.innerText = element.companyName;
            userlocation.innerText = element.companyLocation;
            gstnumber.innerText = element.companyGst;

            row.appendChild(userTd);
            row.appendChild(username);
            row.appendChild(userlocation);
            row.appendChild(gstnumber);
            row.appendChild(deletebutton);

            document.getElementById('masterTable').appendChild(row);
        });
    }
}
