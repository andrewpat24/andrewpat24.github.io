let firstPeriodStudentList = ["Abby","Annie","Cally","Carina","Jimmy","David","Elizabeth","Gabby","Roxana","Ivy","Jackson","Jennifer","Jessica","Joshua","Kenny","Kimberly","Kobey","Kyra","Leanna","Lily","Megan","Melina","Michael","Rene","Ruby","Spencer C","Spencer L","Victoria","Wanwen","Weng Kei","Xitlaly","Yi Hao","Zesen","Zijun"];
let secondPeriodStudentList = ["Alex","Baiyu","Bella","Benjamin","Brendan","Camille","Chris","Carys","Cindy","Emily","Gwendolyn","Jiaying","Emily","Jinghong","Kaitlyn","Kelly","Kelvin","Kevin","Khoi","Krystal","Edison","Lucas","Matthew","Michael","Paul","Raymond","Roxsanne","Sean","Tatsuya","Victoria","Joanna","Xinyi","Yingshi","Yunshi","Leo","Sadie"];

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


