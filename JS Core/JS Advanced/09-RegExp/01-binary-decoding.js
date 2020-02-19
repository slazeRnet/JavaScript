function solve() {
	let inputField = document.getElementById('input').value.split('').join();
	let resultField = document.getElementById('resultOutput');
	
	let binaryOnesCount = 0;
	let asciiLetters = [];
	for (const iterator of inputField) {
		if(iterator == '1'){
			binaryOnesCount++;
		}
	}
	
	while(binaryOnesCount.toString().length > 1){
		let binaryOnesCountString = binaryOnesCount.toString();
		binaryOnesCountString = binaryOnesCountString.split('');
		let newValue = 0;
		for (let index = 0; index < binaryOnesCountString.length; index++) {
			newValue += Number(binaryOnesCountString[index]);
		}
		binaryOnesCount = newValue;
	}
	charsToRemove = binaryOnesCount;
	console.log(`charsToRemove : ${charsToRemove}`);
	
	inputField.splice(0, charsToRemove);	
	inputField.splice(inputField.length - charsToRemove,charsToRemove);
	console.log(`inputFiled : ${inputField}`); 
	let counter = 0;
	let asciiCharValue = '';
	for (let index = 0; index < inputField.length; index++) { //<=====
		asciiCharValue += inputField[index].toString(); //<===
		counter++;
		if(counter == 8){
			counter = 0;
			asciiLetters.push(parseInt(asciiCharValue, 2));
			console.log(asciiCharValue);
			
			asciiCharValue = '';
		}
	}
	let result = '';
	for (const iterator of asciiLetters) {
		result += String.fromCharCode(iterator);
		
	}
	resultField.innerHTML = result;
	console.log(asciiLetters);
	
	console.log(result);
}
