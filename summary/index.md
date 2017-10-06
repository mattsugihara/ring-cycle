---
layout: default
title: Summary
---

# The Ring in 2.5 minutes

<iframe src="https://youtube.com/embed/AgzZ_nLOJJE?showinfo=0&rel=0&iv_load_policy=3" frameborder="0" style="width:100%; height:450px" allowfullscreen></iframe>

<div class="catalogue">
  {% for post in site.posts reversed %}
  <a href="{{ post.url | prepend: site.baseurl }}" class="catalogue-item">
    <div>
      <div class="subtitle">Part {{ post.part }}</div>
      <h1 class="catalogue-title">{{ post.title }}</h1>
      <div class="catalogue-line"></div>

      <p>
        {{ post.content | truncatewords: 30 | strip_html }}
      </p>

    </div>
  </a>
  {% endfor %}
</div>


# Radiolab's *The Ring and I*

<iframe width="100%" height="130" frameborder="0" scrolling="no" src="https://www.wnyc.org/widgets/ondemand_player/radiolab/#file=%2Faudio%2Fxspf%2F91750%2F"></iframe>