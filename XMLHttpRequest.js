var exmp1 = new XMLHttpRequest();
exmp1.onreadystatechange = function () {

	if (this.readystate == 4 && this.status == 200) {
		//any action to perform when document is ready
		document.getElementById('').innerHTML = exmp1.responseText;
	}
}; 
//don't forget to put the right location
exmp1.open("GET", "filename", true);
//if u want to parse the html u can set exmp1.responseType = "document"
//html page will be in ---> var html_page = exmp1.responseXML
//if u wanna parse JSON you can use response_obj = JSON.parse(exmp1.responseText)
//in an xml parsing you use childNodes[0].nodeValue to get the actual text 
exmp1.send();