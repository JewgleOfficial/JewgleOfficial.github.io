const TRANSLATIONS = {"a": "א", "b": ".ב", "c": "8==D", "d": "ד", "e": "ה", "f": "ו", "g": "ז", "h": "ח", "i": "אני", "j": "י", "k": "k", "l": "l", "m": "M", "n": "n", "o": "או", "p": "עמ '", "q": "q", "r": "ייצור", "s": "s", "t": "t", "u": "u", "v": "v", "w": "w", "x": "איקס", "y": "ו", "z": "מ"};

var translate = false;

function translateText(e) {
  if (this.translate && String.fromCharCode(e.which).toLowerCase() in TRANSLATIONS) {
    document.getElementById("searchbar").value += TRANSLATIONS[String.fromCharCode(e.which).toLowerCase()];
    e.preventDefault();
  }
}

function toggleTranslate() {
  this.translate = !this.translate;
  document.getElementById("searchbar").style.textAlign = this.translate ? "right" : "left";
	
  if (this.translate) {
    alert("Yes, I know translations are fucked. There's still a lot that has to be fixed.");
	  
    this.query = document.getElementById("searchbar").value;
		
    for (var key in TRANSLATIONS) {
      document.getElementById("searchbar").value = document.getElementById("searchbar").value.replace(key, TRANSLATIONS[key]);
    }
  } else {
    for (var key in TRANSLATIONS) {
      document.getElementById("searchbar").value = this.query;
    }
  }
  
  this.focusQuerybar();
}
