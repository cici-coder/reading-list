const currentDate = new Date()
document.getElementById('current-date').innerText = `${currentDate.getFullYear()}-${currentDate.getMonth() + 1}-${currentDate.getDay()}`

fetch('./data.json')
.then(async function (response) {
  const res = await response.json();
  const items = res;

  const list = document.querySelector('.list');
  const fragment = document.createDocumentFragment();

  items.forEach(i => {
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.href = i.html_url
    a.innerText = i.title
    a.target = '_blank'
    li.appendChild(a);
    fragment.appendChild(li);
  });

  list.appendChild(fragment);
})