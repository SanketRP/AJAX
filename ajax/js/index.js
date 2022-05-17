$(document).ready(function () {
	$("#addStudent").click(() => {
		function getStudentData() {
			let date = new Date($("#dob").val());
			day = date.getDate();
			month = date.getMonth() + 1;
			year = date.getFullYear();
			let dob = [day, month, year].join("/");

			let selectedDate = new Date($("#registration").val());
			day = selectedDate.getDate();
			month = selectedDate.getMonth() + 1;
			year = selectedDate.getFullYear();
			let registration = [day, month, year].join("/");

			let student = {
				firstName: $("#firstName").val(),
				lastName: $("#lastName").val(),
				dob: dob,
				gender: $("input[name='gender']:checked").val(),
				email: $("#email").val(),
				branch: $("#branch").find(":selected").text(),
				roll: $("#roll").val(),
				prn: $("#prn").val(),
				registration: registration,
				parentName: $("#parentName").val(),
				parentNo: $("#parentNo").val(),
			};
			$("#studentForm")[0].reset();
			return student;
		}

		//store data to Local Storage
		function storeDataToLocalStorage() {
			if (!localStorage.getItem("student")) {
				localStorage.setItem(
					"student",
					JSON.stringify(getStudentData())
				);
			} else {
				localStorage.removeItem("student");
				localStorage.setItem(
					"student",
					JSON.stringify(getStudentData())
				);
			}
		}

		// send data to server with ajax request
		function sendData() {
			let xhr = new XMLHttpRequest();
			let data = JSON.stringify(getStudentData());
			xhr.open("POST", "localhost:4000/storedata", true);
			xhr.setRequestHeader("Content-Type", "application/json");
			xhr.send(data);
		}

		//call storeDataToLocalStorage and sendData functions
		storeDataToLocalStorage();
		sendData();
		window.location.href = "../ajax/display.html";
	});
});
