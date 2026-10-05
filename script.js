//your JS code here. If required.
function initialPromise() {
	return new Promise((res)=>{
		setTimeout(()=>res([1,2,3,4]),3000);
	})
}

function filterOdd(nums) {
	return new Promise((res)=>{
					nums = nums.filter(num=>num%2===0);

		setTimeout(()=>{
			document.getElementById("output").innerText = nums;
			res(nums)
		},1000);
	})
}

function transform(nums) {
	return new Promise((res)=>{
		nums = nums.map(num=>num*2);
	setTimeout(()=>{
		document.getElementById("output").innerText = nums;
		res(true)
	},2000)
	})
}


initialPromise.then(filterOdd).then(transform);
