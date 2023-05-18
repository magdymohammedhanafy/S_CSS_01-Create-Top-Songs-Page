




  window.addEventListener("load", function() {
  document.getElementById("showMe").addEventListener("click", function() {
    var allSongs = document.getElementById("songs");
    
    if (allSongs.style.display == "none") 
    {
      allSongs.style.display = "block";
      
      this.textContent = "Less !";
    } else 
    {
      allSongs.style.display = "none";
      this.textContent = "Show Me !";
    }
  });
});
    