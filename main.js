let firstPeriodStudentList = ["Tommy", "Sarah", "James", "Tammy", "Jonathan", "Steven", "Amanda"];
let secondPeriodStudentList = ["Andrew", "Micheal", "James", "Winnie"];

function pickRandomStudent(studentList) {
	let randomIndex = Math.floor((Math.random() * studentList.length) + 0);
	return studentList[randomIndex];
} 

$('#first-period').click( function () {
	let pickedStudent = pickRandomStudent(firstPeriodStudentList);
	$('#student-result').html( pickedStudent );
});


$('#second-period').click( function () {
	let pickedStudent = pickRandomStudent(secondPeriodStudentList);
	$('#student-result').html( pickedStudent );
});


