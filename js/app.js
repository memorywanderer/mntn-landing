(function() {
    "use strict";
    new SmoothScroll('a[href*="#"]');
    const articles = document.querySelectorAll(".article");
    if (articles) articles.forEach((article => {
        const articleNumber = article.dataset.number;
        const articleNumberEl = article.querySelector(".article__number");
        articleNumberEl.insertAdjacentHTML("afterbegin", articleNumber);
    }));
})();