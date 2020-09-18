const url = `https://spreadsheets.google.com/feeds/list/1Op6UNpvOlkseYN3nuUvIPktQIl_CGZMYnK6axwH5__s/od6/public/values?alt=json`;

fetch(url)
  .then((resp) => resp.json())
  .then((json) => {
    console.log(json);
    json.feed.entry.forEach((ent) => {
      let $a = $(`<a>`)
        .text(`${ent.gsx$title.$t}`)
        .attr("href", `${ent.gsx$url.$t}`);
      $(`h6`).append($a);
    });
  });

// $(`h6`).append($a);
