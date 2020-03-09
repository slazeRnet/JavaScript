let table = document.createElement('table');
let thead = document.createElement('thead');
let trHead = document.createElement('tr');


let thHead1 = document.createElement('th');
thHead1.innerHTML = 'ID';
trHead.appendChild(thHead1);
let thHead2 = document.createElement('th');
thHead2.innerHTML = 'NAME';
trHead.appendChild(thHead2);
let thHead3 = document.createElement('th');
thHead3.innerHTML = 'EMAIL';
trHead.appendChild(thHead3);
let thHead4 = document.createElement('th');
thHead4.innerHTML = 'PHONE';
trHead.appendChild(thHead4);
thead.appendChild(trHead);
table.appendChild(thead);

table.setAttribute('border', '1px solid #333')

async function getUsers(){

    const dataRaw = await fetch('https://jsonplaceholder.typicode.com/users');

    const users = await dataRaw.json();
    
    jQuery.each(users, function(id, user) {
      let tr = document.createElement('tr');
      let th1 = document.createElement('th');
      th1.innerHTML = `${user.id}`;
      let th2 = document.createElement('th');
      th2.innerHTML = `${user.username}`;
      let th3 = document.createElement('th');
      th3.innerHTML = `${user.email}`;
      let th4 = document.createElement('th');
      th4.innerHTML = `${user.phone}`;
      tr.appendChild(th1);
      tr.appendChild(th2);
      tr.appendChild(th3);
      tr.appendChild(th4);
      table.appendChild(tr);
        //document.body.innerHTML += `# ${user.id} |    ${user.username}    |    ${user.email}   |    phone: ${user.phone}<br />`;
      });
    
}


getUsers();
let p = document.createElement('p');
p.innerHTML = 'Hello world!';

console.log(document.body);
console.log(table);

document.body.appendChild(table);