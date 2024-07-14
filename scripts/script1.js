
/*==============================
 DOM Manipulation (Part One)
================================*/
/*===== Part 1: Getting Started==========*/
//1- Select and cache the <main> element in a variable named mainEl
const mainElement = document.querySelector('main');

//2- Set the background color of mainEl to the value stored in the --main-bg CSS custom property
mainElement.style.backgroundColor = 'var(--main-bg)';//Assign a string that uses the CSS var() function like this: 'var(--main-bg)'.

//3- Set the content of mainEl to <h1>DOM Manipulation</h1>
mainElement.innerHTML = '<h1>DOM Manipulation</h1>';
/* Another way : 
const h1 = document.createElement('h1');
h1.innerText = 'DOM Manipulation';
mainEl.appendChild(h1);*/

//4- Add a class of flex-ctr to mainEl
mainElement.classList.add('flex-ctr');

/*====== Part 2: Creating a Menu Bar=========*/
// 1-Select and cache the <nav id="top-menu"> element in a variable named topMenuEl
const topMenuEl = document.getElementById('top-menu');

// 2-Set the height of the topMenuEl element to be 100%
topMenuEl.style.height = '100%';

//3- Set the background color of topMenuEl to the value stored in the --top-menu-bg CSS custom property
topMenuEl.style.backgroundColor = 'var(--top-menu-bg)';

//4- Add a class of flex-around to topMenuEl
topMenuEl.classList.add('flex-around');

/*======= Part 3: Adding Menu Buttons =====*/
// Menu data structure
var menuLinks = [
    { text: 'about', href: '/about' },
    { text: 'catalog', href: '/catalog' },
    { text: 'orders', href: '/orders' },
    { text: 'account', href: '/account' },
  ];
  //1- Iterate over the entire menuLinks array and create menu buttons
menuLinks.forEach(link => {
    // 2-Create an <a> element
    const a = document.createElement('a');
    
    //3- Set the href attribute of the <a> element
    a.setAttribute('href', link.href);
    
    // Set the content of the <a> element
    a.textContent = link.text;
    
    //4- Append the <a> element to the topMenuEl element
    topMenuEl.appendChild(a);
  });