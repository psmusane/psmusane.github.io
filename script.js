function showDiv(divId) {
    const div = document.getElementById(divId);
  
    // Hide all other div elements
    const allDivs = document.querySelectorAll('div[id^="div"]');
    allDivs.forEach((div) => {
      if (div.id !== divId) {
        div.style.display = 'none';
      }
    });
  
    // Toggle display of the selected div
    if (div.style.display === 'none') {
      div.style.display = 'block';
    } else {
      div.style.display = 'none';
}
}
