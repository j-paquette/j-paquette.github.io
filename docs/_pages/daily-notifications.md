---
title: Quotes
layout: 
date: 2024-09-06
categories: Quotes
include_scripts: [
  "./docs/assets/js/asyncDailyNotification.js"
]
---
<!-- markdownlint-capture -->
<!-- markdownlint-disable -->
<h2>Daily Quotes</h2>

{% for todayQuote in site.data.quotes.terryPratchett %}
<section class="quote-app-container"  id="quote-responsive-container">
  <blockquote class="blockquote">
    <p class="mb-0" id="quote-text" >{{ todayQuote.quote }}</p>
    <footer class="book-footer" id="book-text">{{ todayQuote.book }}</footer>
  </blockquote>
  <div class="next-quote-button-container">
    <button class="btn btn-primary top-0 start-0" id="quote-btn" type="button" aria-label="New Quote">New Quote</button>
  </div>
</section>
{% endfor %}
<!-- markdownlint-restore -->