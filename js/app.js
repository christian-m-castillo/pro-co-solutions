let now = new Date(); // milliseconds since 00:00 01 JAN 1970. This Date() object constructor let JS know that this variable holds a date.
	let year = now.getFullYear(); //returns 4 digit year

	let el = document.getElementById('copyright');
	el.textContent = 'Copyright ' + year + ' Pro-Co Solutions';
// Need to figure out how to get copyright symbol into text content: I tried the html entity &copy; , but the text "&copy" rendered instead of a copyright symbol. 
