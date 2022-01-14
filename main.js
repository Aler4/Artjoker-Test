const amountOfDigits = (x) => {
  return Math.max(Math.floor(Math.log10(Math.abs(x))), 0) + 1;
}

const sumOfEven = (val) => {
   let res = 0;

   for(let i = 8; i > 0; i--){
    	 let number = val % 10;

        if(number % 2 == 0){
            res += number;
        }

        val = parseInt(val / 10);
    };
    return res;
};

const sumOfNotEven = (val) => {
    let res = 0;
    for(let i = 8; i > 0; i--){
    	 let number = val % 10;

        if(number % 2 !== 0){
            res += number;
        }

        val = parseInt(val / 10);
    };

    return res;
};


const getDiscount = (number) => {

    let length = amountOfDigits(number);

	if(!Number.isInteger(number) || (length > 8 || length < 8)){
		return 0;
	};

	const even = sumOfEven(number);
	const notEven = sumOfNotEven(number);

	let counter = 0;
    let isOrder = true;

	for(let i = 0; i <= 8; i++){
	 
    	if(number > 0){
        	let digit1 = number % 10;
        	number = parseInt(number / 10);
        	let digit2 = number % 10;
        	if(digit1 % 2 !== 0 && digit2 % 2 !== 0){
           	 	if(digit1 < digit2){
                	isOrder = false;
           	 	}
           	 	counter++;
        	}
    	}
    }

    return isOrder && counter > 1 ? 1000: counter > 1 ? 2000 : even > notEven ? 100 : 0;
};