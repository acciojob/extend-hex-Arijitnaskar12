const extendHex = (shortHex) => {
  let s="#";
	for (let index = 0; index < shortHex.length; index++) {
		if(shortHex[i]!='#'){
			shortHex[i]=shortHex[i]+shortHex[i];
			s+=shortHex[i];
		}
		
	}
	return s;
};

// Do not change the code below.
const shortHex = prompt("Enter Short Hex.");
alert(extendHex(shortHex));
