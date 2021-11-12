
const usersArray = [];

// BEGIN POSTS ------------------------------------------------------------------------------------------


fetch('https://jsonplaceholder.typicode.com/posts').then(function (response) {
  
	return response.json();
}).then(function (data) {
  
  data.forEach(post => { 
    usersArray.push(post)
  });
  
}).catch(function (err) {

	console.warn('Error occurred while fetching json api.', err);
});

// END POSTS ------------------------------------------------------------------------------------------

fetch('https://jsonplaceholder.typicode.com/users').then(function (response) {
  
	return response.json();
}).then(function (data) {

  // creating table and adding rows with data from api

  var table = document.createElement('table');
  table.classList.add("table");
  const thead = document.createElement('thead');
  const tbody = document.createElement('tbody');
  const tr1 = document.createElement('tr');
  
  for (const object in data[0]) {
    const th = document.createElement('th');
    th.scope = "col";
    if(object !== "address" && object !== "company") {
      //console.log("This object is: " + object)
       th.innerHTML = object;
       tr1.appendChild(th);
    }

  }
  thead.appendChild(tr1);
  table.appendChild(thead);
  data.forEach(users => {
    let tr = document.createElement('tr');
  for (let key in users) {
    if(key !== 'address' && key !== 'company') {
      let td = document.createElement('td');
      td.innerHTML = users[key];
      tr.appendChild(td);
    }
    
  }
  tbody.appendChild(tr);
  });
  table.appendChild(tbody);  
  document.body.appendChild(table);

  // END Table

  //--------------Click Handlers-----------------
  var div1 = document.createElement('div');
  var rows = table.getElementsByTagName("tr");
  for (var i = 0; i < rows.length; i++) {
    var currentRow = table.rows[i];
    var createClickHandler = function(row) {
      return function() {
        var cell = row.getElementsByTagName("td")[0];
        var id = cell.innerHTML;
        //alert("id:" + id);
        
        for(var i = 0; i < usersArray.length; i++) {
          const para1 = document.createElement('p');
          if(usersArray[i].userId === parseInt(id)) {
            const hr2 = document.createElement('hr')
            for (var key in usersArray[i]) {
              //console.log(key + " : " + usersArray[i][key]);
              para1.innerHTML += key + " : " + usersArray[i][key];
              div1.appendChild(para1);
              div1.appendChild(hr2);
             //console.log(usersArray[i])
             const br2 = document.createElement('br')

             para1.appendChild(br2);
            }
          }
        }
      };
    };
    currentRow.onclick = createClickHandler(currentRow);
  }

  // ------------END Click Handlers

  var br1 = document.createElement('br');
  document.body.appendChild(br1);
  var hrule = document.createElement('hr');
  document.body.appendChild(hrule);
  var br2 = document.createElement('br');
  document.body.appendChild(br2);
  // Adding Posts h3 element
  var h3 = document.createElement('h3');
  h3.innerHTML = "POSTS:"
  
  div1.appendChild(h3);
  document.body.appendChild(div1);

  
  
  //console.log(data);
}).catch(function (err) {
	console.warn('Error occurred while fetching json api.', err);
});

// END USERS --------------------------------------------------------------------------------------------

