$(document).ready(function () {
	getData();
});

function getData() {
	let localStorageData = localStorage.getItem("student");
	let studentObj = JSON.parse(localStorageData);
	console.log(studentObj);
	$("#roll").text(studentObj.roll);
	$("#fullname").text(studentObj.firstName + " " + studentObj.lastName);
	$("#dob").text(studentObj.dob);
	$("#gender").text(studentObj.gender);
	$("#email").text(studentObj.email);
	$("#prn").text(studentObj.prn);
	$("#branch").text(studentObj.branch);
	$("#registration").text(studentObj.registration);
	$("#parentName").text(studentObj.parentName);
	$("#parentNo").text(studentObj.parentNo);
}
