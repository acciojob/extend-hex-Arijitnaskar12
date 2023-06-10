const extendHex = (shortHex) => {
  let s="#";
	for (let index = 0; index < shortHex.length; index++) {
		if(shortHex[index]!='#')
		{
	
				s+=(shortHex[index]+shortHex[index]);
		
		}
		
	}
	return s;
};

// Do not change the code below.
const shortHex = prompt("Enter Short Hex.");
alert(extendHex(shortHex));
