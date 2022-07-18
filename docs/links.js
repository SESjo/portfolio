//https://stackoverflow.com/questions/56797898/rmarkdown-html-site-yml-navbar-href-links-open-in-new-tab-with-target-blank
(function() {
  for (const link of document.getElementsByTagName('a')) {
    if (/^(https?:)?\/\//.test(link.getAttribute('href'))) link.target = '_blank';
  }
})();