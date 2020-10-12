function titleClickHandler(event) {
  event.preventDefault();
  const clickedElement = this;
  console.log('clickedElement (with plus): ' + clickedElement);
  /* remove class 'active' from all article links  */

  const activeLinks = document.querySelectorAll('.titles a.active');

  for (let activeLink of activeLinks) {
    activeLink.classList.remove('active');
  }

  /* add class 'active' to the clicked link */

  clickedElement.classList.add('active');

  /* remove class 'active' from all articles */

  const activeArticles = document.querySelectorAll('article.active');

  for (let activeArticle of activeArticles) {
    activeArticle.classList.remove('active');
  }
  /* get 'href' attribute from the clicked link */

  const href = clickedElement.getAttribute('href');
  console.log(href);

  /* find the correct article using the selector (value of 'href' attribute) */
  const article = document.querySelector(`article${href}`);
  console.log(article);


  /* add class 'active' to the correct article */

  article.classList.add('active');
}

function generateTitleLinks() {
  const list = document.querySelector('.list');
  list.innerHTML = "";
  const articles = document.querySelectorAll('article.post');
  let html = '';
  for (let article of articles) {
    const id = article.getAttribute("id");
    const title = article.querySelector('.post-title').textContent;
    const linkHTML = `<li><a href="#${id}"><span>${title}</span></a></li>`;
    html += linkHTML;
  }
  list.innerHTML = html;
}

generateTitleLinks();

const links = document.querySelectorAll('.titles a');

for (let link of links) {
  link.addEventListener('click', titleClickHandler);
}