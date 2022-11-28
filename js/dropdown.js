function dropDown(link, subLink) {
  link.classList.add('fa-chevron-down');
  link.addEventListener('click', () => {
    if (link.classList.contains('fa-chevron-up')) {
      link.classList.remove('fa-chevron-up');
      link.classList.toggle('fa-chevron-down');
      subLink.style.display = 'none';
    } else if (link.classList.contains('fa-chevron-down')) {
      link.classList.remove('fa-chevron-down');
      link.classList.toggle('fa-chevron-up');
      subLink.style.display = 'block';
    }
  });
}

// navbar
let pages = document.querySelector('#pages');
let pagesContent = document.querySelector('.dropdown-responsive-content');

dropDown(pages, pagesContent);

// footer quick-link
let quickLink = document.querySelector('#footerQuickLink');
let quickLinkSub = document.querySelector('.quick-link-content');

dropDown(quickLink, quickLinkSub);

// footer service
let serviceLink = document.querySelector('#serviceLink');
let serviceLinkSub = document.querySelector('.service-content');

dropDown(serviceLink, serviceLinkSub);

// footer contact
let contactLink = document.querySelector('#footerContactLink');
let contactLinkSub = document.querySelector('.contact-content');

dropDown(contactLink, contactLinkSub);
