---
---
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="initial-scale=1.0">

  <title>
    {% if page.title == "Home" %}
    {{ site.title }}
    {% else %}
    {{ page.title }} &middot; {{ site.title }}
    {% endif %}
  </title>

  <link rel="stylesheet" href="{{ site.baseurl }}/style/style.css">
  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Libre+Baskerville:400,400i,700">
</head>

<body>
  {% include nav.html %}
  <div class="cover"></div>
  <footer>
  </footer>
</body>
</html>