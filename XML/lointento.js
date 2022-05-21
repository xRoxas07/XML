<!DOCTYPE html>
<html>
<body>

<p id="demo"></p>

<script>
var parser, xmlDoc;
var text = "<CATALOG><CD>" +
"<TITLE></TITLE>" +
"<ARTIST></ARTIST>" +
"<COUNTRY></COUNTRY>" +
"<COMPANY></COMPANY>"+
"<PRICE></PRICE>" +
"<YEAR></YEAR>
</CD></CATALOG>;

parser = new DOMParser();
xmlDoc = parser.parseFromString(cosas.xml);

document.getElementById("cosas").innerHTML =
xmlDoc.getElementsByTagName("COUNTRY")[0].childNodes[0].nodeValue;
xmlDoc.getElementsByTagName("COMPANY")[0].childNodes[0].nodeValue;
xmlDoc.getElementsByTagName("PRICE")[0].childNodes[0].nodeValue;
xmlDoc.getElementsByTagName("YEAR")[0].childNodes[0].nodeValue;
</script>

</body>
</html>