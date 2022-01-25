var arr = new Array();

function insert(num) {	
	if (arr.length == 0) {
		if (num == '*' || num == '/') {
			document.form.textview.value = '-_-';
			return;
		}
		else {
			document.form.textview.value = document.form.textview.value + num;
			arr.push(num);
		}
	}
	else {
		if (typeof num == 'number') {
			document.form.textview.value = document.form.textview.value + num;
			if (typeof arr[arr.length - 1] == 'number') {
				if (arr[arr.length - 1] >= 0) {
					arr[arr.length - 1] = arr[arr.length - 1] * 10 + num;
				}
				else {
					arr[arr.length - 1] = arr[arr.length - 1] * 10 - num;
				}
			}
			else if (arr[arr.length - 1] == '-') {
				arr[arr.length - 1] = num * (-1);
			}
			else if (arr[arr.length - 1] == '+') {
				arr[arr.length - 1] = num;
			}
			else {
				arr.push(num);
			}
		}
		else if (typeof num != 'number') {
			if (typeof arr[arr.length - 1] != 'number') {
				document.form.textview.value = document.form.textview.value.slice(0, -1);
				//console.log(num);
				arr.pop();
			}
			document.form.textview.value = document.form.textview.value + num;
			arr.push(num);	
		}

	}
	console.log(arr);
}

function clean() {
	document.form.textview.value = "";
	arr = [];
}

function deleteSymbol() {
	var string = document.form.textview.value;
	document.form.textview.value = string.substring(0, string.length - 1);
	arr.pop();
}

/*
function equal() {
	var string = document.form.textview.value;
	if (string) {
		document.form.textview.value = eval(string);
	}
}
*/

function checkDigit(num) {
	if (num == '+' || num == '-' || num == '/' || num == '*')
		return 0;
	else return 1;
}

function equal_Kek() {
	var res = 0;
	if (arr.length == 0) {
		return;
	}
	else if (typeof arr[arr.length-1] != 'number') {
		return;
	}
	for (var i = 0; i < arr.length; i++) {
		if (arr[i] == '/') {
			arr[i - 1] = arr[i - 1] / arr[i + 1];
			arr.splice(i, 2);
		}
		else if (arr[i] == '*') {
			arr[i - 1] = arr[i - 1] * arr[i + 1];
			arr.splice(i, 2);
		}
	}
	for (var i = 0; i < arr.length; i++) {
		res = res + arr[i];
	}
	arr.splice(1, arr.length);
	arr[0] = res;
	console.log(res);
	console.log(arr);
	document.form.textview.value = res;
}