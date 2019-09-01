/**
 * Switch all PINEAPPLES to ANANAS
 */
var elements = document.getElementsByTagName("*");
for (var i = 0; i < elements.length; i++) {
  var element = elements[i];
  for (var j = 0; j < element.childNodes.length; j++) {
    var node = element.childNodes[j];

    if (node.nodeType === 3) {
      var replacedText = node.nodeValue
        .replace(/Pineapples/g, "Ananases")
        .replace(/pineapples/gi, "ananases")
        .replace(/Pineapple/g, "Ananas")
        .replace(/pineapple/gi, "ananas")
        .replace(/파인애플/gi, "아나나스")
        .replace(/파인 애플/gi, "아나나스");
      if (replacedText !== node.nodeValue) {
        element.replaceChild(document.createTextNode(replacedText), node);
      }
    }
  }
}
