
let companyList=[]
function getdata() {
    class Company {
        companyId = null
        companyName = ""
        companyLocation = ""
        companyGst = null
    }

    let company = new Company();
    company.companyId = document.getElementById("userid").value;
    company.companyName = document.getElementById("userName").value;
    company.companyLocation = document.getElementById("userLocation").value;
    company.companyGst = document.getElementById("gstNumber").value;
    companyList.push({"companyId":company.companyId,
    "companyName":company.companyName,
    "companyLocation":company.companyLocation,
    "companyGst":company.companyGst})

    console.log(companyList)

    const row = document.createElement('tr');
  // make table data
  const userTd = document.createElement('td');
  const username = document.createElement('td');
  const userlocation = document.createElement('td');
  const gstnumber = document.createElement('td');
  var deletebutton = document.createElement('input');11
  deletebutton.type= "button"
  deletebutton.className = "btn btn-danger";
  deletebutton.value = "delete"
  deletebutton.onclick = (function(){
    companyList.splice(userTd,1)
    console.log(companyList)
    showdata()
  })
  showdata()
  function showdata(){
    
    companyList.forEach(element => {
      userTd.innerText = element.companyId;
      username.innerText = element.companyName;
      userlocation.innerText = element.companyLocation;
      gstnumber.innerText = element.companyGst;
  
      row.appendChild(userTd);
      row.appendChild(username);
      row.appendChild(userlocation);
      row.appendChild(gstnumber);
      row.appendChild(deletebutton)
      document.getElementById('masterTable').appendChild(row);
    });
  }

    
//     console.log(element)
//     document.getElementById('Did').innerHTML = element.companyId
// document.getElementById('Dname').innerHTML = element.companyName
// document.getElementById('Dlocation').innerHTML = element.companyLocation
// document.getElementById('Dgst').innerHTML = element.companyGst

}