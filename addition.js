document.getElementById('button').addEventListener('click', (event) => {
    let element_list = document.getElementById('list');
    let new_ul = document.createElement('ul');
    let new_li = document.createElement('li');
    new_li.innerText = 'add an apple';
  
    new_ul.appendChild(new_li);
  
    element_list.appendChild(new_ul);
  
  });
  
  document.getElementById('button2').addEventListener('click', (event) => {
    let element_list2 = document.getElementById('list');
    element_list2.replaceChildren();
  
  });