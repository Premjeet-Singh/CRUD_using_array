var arr=[];
// =========================================================
function add(){
	var x = document.querySelector('.ad').value;
		if(x==''){
			alert('Input field is empty');
			return;
		}
	arr.push(x);

	document.querySelector('.result').innerHTML = arr;
	document.querySelector('.ad').value = '';
}

// =============================================================
function edit(){
	var val = document.querySelector('.val').value;
	var pos = document.querySelector('.posE').value;

	document.querySelector('.val').value = '';
	document.querySelector('.posE').value = '';
	
		if(val=='' || pos==''){
			alert('Value or position field is empty');
			return;
		} else if(arr.length==0){
			alert("Array is empty..!!");
			return
		} else if((arr.length-1)<pos){
			alert("Array index out of bound...!!");
			return;
		}
arr[pos]=val;

	document.querySelector('.result').innerHTML = arr;

}

// ================================================================
function del(){
		var pos = document.querySelector('.posD').value;
		document.querySelector('.posD').value = '';
		if(pos==''){
			alert('Position field is empty');
			return;
		} else if(arr.length==0){
			alert("Array is empty..!!");
			return
		} else if((arr.length-1)<pos){
			alert("Array index out of bound...!!");
			return;
		}

		arr.splice(pos, 1);

	document.querySelector('.result').innerHTML = arr;

	
}

// ===================================================================