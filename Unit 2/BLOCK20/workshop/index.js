const users = [
    { name: 'John Doe', age: 25, occupation: 'Web Developer' },
    { name: 'Jane Smith', age: 30, occupation: 'Graphic Designer' },
    { name: 'Alex Johnson', age: 35, occupation: 'Copywriter' },
    { name: 'Emily Davis', age: 28, occupation: 'Photographer' },
    { name: 'Michael Brown', age: 32, occupation: 'Marketing Specialist' }
];
  
function main() {
  const root = document.getElementById('root');
  const h1 = document.createElement('h1');
  h1.textContent = 'FREELANCERS';
  const ul = document.createElement('ul');
    
  users.forEach(user => {
    const li = document.createElement('li');
    li.textContent = `Name: ${user.name}, Age: ${user.age}, Occupation: ${user.occupation}`;
    ul.appendChild(li);
  });
    
  root.appendChild(h1);
  root.appendChild(ul);
}
  
window.addEventListener('DOMContentLoaded', main);
  