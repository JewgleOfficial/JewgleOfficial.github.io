var translations = {"a": "א", "b": ".ב", "c": "8==D", "d": "ד", "e": "ה", "f": "ו", "g": "ז", "h": "ח", "i": "אני", "j": "י", "k": "k", "l": "l", "m": "M", "n": "n", "o": "או", "p": "עמ '", "q": "q", "r": "ייצור", "s": "s", "t": "t", "u": "u", "v": "v", "w": "w", "x": "איקס", "y": "ו", "z": "מ"};
var translate = false;

function main() {
  this.focus();
}

function focus() {
  document.getElementById("searchbar").focus();
  document.getElementById("searchbar").select();
}

function search() {
  var query = document.getElementById("searchbar").value.trim();
  
  if (query.toLowerCase() === "corn hub" || query.toLowerCase() === "corn hubs" || query.toLowerCase() === "cornhub" || query.toLowerCase() === "cornhubs") {
    window.location = "https://cornhubs.github.io/";
    return;
  }
  
  if (query.toLowerCase() === "vincent simoncelli" || query.toLowerCase() === "vincentsimoncelli" || query.toLowerCase() === "vincent") {
    window.location = "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2011/2/4/1/RX-FNM_030111-Lighten-Up-012_s4x3.jpg.rend.hgtvcom.616.462.suffix/1382539856907.jpeg";
    return;
  }
  
  if (query.toLowerCase() === "matthew nameth" || query.toLowerCase() === "matthewnameth" || query.toLowerCase() === "nameth") {
    window.location = "https://en.wikipedia.org/wiki/Rhodesia";
    return;
  }
  
  if (query.toLowerCase() === "robert hassaj" || query.toLowerCase() === "roberthassaj" || query.toLowerCase() === "hassaj") {
    window.location = "https://www.youtube.com/watch?v=OT4MyqrWo6E";
    return;
  }
  
  if (query.toLowerCase() === "david acevedo" || query.toLowerCase() === "davidacevedo" || query.toLowerCase() === "dave") {
    window.location = "https://www.youtube.com/";
    return;
  }
  
  if (query.toLowerCase() === "david holley" || query.toLowerCase() === "davidholley" || query.toLowerCase() === "david") {
    window.location = "http://www.hitler.org";
    return;
  }
  
  if (query.toLowerCase() === "joe flemming" || query.toLowerCase() === "joeflemming" || query.toLowerCase() === "joe") {
    window.location = "https://en.wikipedia.org/wiki/Black_Hebrew_Israelites";
    return;
  }
  
  if (query.toLowerCase() === "lil pimp" || query.toLowerCase() === "lilpimp" || query.toLowerCase() === "lilp") {
    window.location = "https://jewgle.savageavocado.net/lil-pimp/";
    return;
  }
  
  if (query.toLowerCase() === "avocado") {
    window.location = "https://jewgle.savageavocado.net/imates/avocado.jpg";
    return;
  }
  
  window.location = "https://www.google.com/search?q=" + query.replace(" ", "+");
}

this.main();

function searchEnter(e) {
  //this.updateQuery(e);
  this.fixText(e);
	
  if (e.keyCode != 13)
    return;
  
  this.search();
}

//function updateQuery(e) {
  //if (this.query == undefined)
    //this.query = String.fromCharCode(e.which);
  //else
    //this.query += String.fromCharCode(e.which);
//}

function fixText(e) {
  if (!this.translate)
    return;
	
  if (String.fromCharCode(e.which).toLowerCase() in this.translations) {
    e.preventDefault();
    document.getElementById("searchbar").value += this.translations[String.fromCharCode(e.which).toLowerCase()];
  }
}

function toggleTranslate() {
  this.translate = !this.translate;
  document.getElementById("searchbar").style.textAlign = this.translate ? "right" : "left";
	
  if (this.translate) {
    alert("Yes, I know translations are fucked. There's still a lot that has to be fixed.");
	  
    this.query = document.getElementById("searchbar").value;
		
    for (var key in this.translations) {
      document.getElementById("searchbar").value = document.getElementById("searchbar").value.replace(key, this.translations[key]);
    }
  } else {
    for (var key in this.translations) {
      document.getElementById("searchbar").value = this.query;
    }
  }
}
