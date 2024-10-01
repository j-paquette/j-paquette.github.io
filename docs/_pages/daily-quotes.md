---
title: Quotes
layout: daily-notification
date: 2024-09-06
permalink: /quotes/
---

## Daily Quotes
<!-- markdownlint-capture -->
<!-- markdownlint-disable -->
{% for todayQuote in site.data.terryPratchettQuotes.terryPratchett %}
  <blockquote class="blockquote random-quote-container">
    <p class="mb-0" id="quote-text" >{{ todayQuote.quote }}</p>
    <footer class="book-footer" id="book-text">{{ todayQuote.book }}</footer>
  </blockquote>
  <div class="next-quote-button-container">
    <button class="btn btn-primary top-0 start-0" id="quote-btn" type="button" aria-label="New Quote">New Quote</button>
  </div>
{% endfor %}
<!-- markdownlint-restore -->