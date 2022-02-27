
const loadBuddies = () =>{
    fetch('https://randomuser.me/api/?results=5')
    .then(response => response.json())
    .then(res => displayBuddies(res));
}

loadBuddies();

const displayBuddies = res => {
    const buddies = res.results;
    const buddiesDiv = document.getElementById('buddies');
   for(const buddy of buddies){
       //console.log(buddy.email);
    const p = document.createElement('p');
       p.innerText = `First Name: ${buddy.name.first}, Last name: ${buddy.name.last}, email: ${buddy.email} `;
       buddiesDiv.appendChild(p);

   }
}