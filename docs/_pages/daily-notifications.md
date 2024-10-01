---
title: Quotes
layout: daily-notification
date: 2024-09-06
categories: Quotes
permalink: /quotes/
include_scripts: [
  "/assets/js/asyncDailyNotification.js"
]
---
<!-- markdownlint-capture -->
<!-- markdownlint-disable -->
<h2>Daily Quotes</h2>

{% for todayQuote in site.data.quotes.terryPratchett %}
<section class="quote-app-container"  id="quote-responsive-container">
  <blockquote class="blockquote random-quote-container">
    <p class="mb-0" id="quote-text" >{{ todayQuote.quote }}</p>
    <footer class="book-footer" id="book-text">{{ todayQuote.book }}</footer>
  </blockquote>
  <div class="next-quote-button-container">
    <button class="btn btn-primary top-0 start-0" id="quote-btn" type="button" aria-label="New Quote">New Quote</button>
  </div>
</section>
{% endfor %}
<!-- markdownlint-restore -->