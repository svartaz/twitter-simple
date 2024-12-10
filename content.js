const id = setInterval(() => {
  const div = document.querySelector(
    'div[role="tablist"]>div[role="presentation"]:nth-child(2)'
  );
  if (div) {
    div.click();

    if (div.querySelector('a[href="/home"][role="tab"][aria-selected="true"]'))
      clearInterval(id);
  }
}, 1000 / 4);
