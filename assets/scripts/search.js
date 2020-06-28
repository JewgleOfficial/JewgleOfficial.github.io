const REDIRECTS = {
  // CornHubs
  "corn hubs": "https://cornhubs.github.io/",
  "corn hub": "https://cornhubs.github.io/",
  "cornhubs": "https://cornhubs.github.io/",
  "cornhub": "https://cornhubs.github.io/",
  
  // Vince
  "vincent simoncelli": "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2011/2/4/1/RX-FNM_030111-Lighten-Up-012_s4x3.jpg.rend.hgtvcom.616.462.suffix/1382539856907.jpeg",
  "vincentsimoncelli": "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2011/2/4/1/RX-FNM_030111-Lighten-Up-012_s4x3.jpg.rend.hgtvcom.616.462.suffix/1382539856907.jpeg",
  "vincent": "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2011/2/4/1/RX-FNM_030111-Lighten-Up-012_s4x3.jpg.rend.hgtvcom.616.462.suffix/1382539856907.jpeg",
  
  // Nemeth
  "matthew nameth": "https://en.wikipedia.org/wiki/Rhodesia",
  "matthewnameth": "https://en.wikipedia.org/wiki/Rhodesia",
  "nameth": "https://en.wikipedia.org/wiki/Rhodesia",
  
  // Hassaj
  "robert hassaj": "https://www.youtube.com/watch?v=OT4MyqrWo6E",
  "roberthassaj": "https://www.youtube.com/watch?v=OT4MyqrWo6E",
  "hassaj": "https://www.youtube.com/watch?v=OT4MyqrWo6E",
  
  // Dave
  "david acevedo": "https://www.youtube.com/",
  "davidacevedo": "https://www.youtube.com/",
  "dave": "https://www.youtube.com/",
  
  // Havid Dolley
  "david holley": "http://www.hitler.org",
  "davidholley": "http://www.hitler.org",
  "david": "http://www.hitler.org",
  
  // Joe
  "joe flemming": "https://en.wikipedia.org/wiki/Black_Hebrew_Israelites",
  "joeflemming": "https://en.wikipedia.org/wiki/Black_Hebrew_Israelites",
  "joe": "https://en.wikipedia.org/wiki/Black_Hebrew_Israelites",
  
  // Lil Pimp
  "lil pimp": "lil-pimp/",
  "lilpimp": "lil-pimp/",
  "lilp": "lil-pimp/",
  
  // Me
  "avocado": "assets/images/avocado.jpg"
}

function executeQuery() {
  var query = document.getElementById("searchbar").value.trim();
  
  if (query.toLowerCase() in REDIRECTS) {
    window.location = REDIRECTS[query.toLowerCase()];
  } else {
    window.location = "https://www.google.com/search?q=" + query.replace(" ", "+");
  }
}

function onKeyPress(e) {
  this.translateText(e);
  
  if (e.keyCode == 13) {
    this.executeQuery();
  }
}
