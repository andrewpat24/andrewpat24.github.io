let firstPeriodStudentList = ["Abby","Annie","Cally","Carina","Jimmy","David","Elizabeth","Gabby","Roxana","Ivy","Jackson","Jennifer","Jessica","Joshua","Kenny","Kimberly","Kobey","Kyra","Leanna","Lily","Megan","Melina","Michael","Rene","Ruby","Spencer C","Spencer L","Victoria","Wanwen","Weng Kei","Xitlaly","Yi Hao","Zesen","Zijun"];
let secondPeriodStudentList = ["Alex","Baiyu","Bella","Benjamin","Brendan","Camille","Chris","Carys","Cindy","Emily","Gwendolyn","Jiaying","Emily","Jinghong","Kaitlyn","Kelly","Kelvin","Kevin","Khoi","Krystal","Edison","Lucas","Matthew","Michael","Paul","Raymond","Roxsanne","Sean","Tatsuya","Victoria","Joanna","Xinyi","Yingshi","Yunshi","Leo","Sadie"];
let fourthPeriodStudentList = ["Angie","Ashley","Jimmy","Crystal","Cynthia","David","Devin","Ryan","Eugene","Jackie","Jacob","Jefferson","Jessica","Jiayu","Jingheng","Jose","Josue","Keana","Leela","Michael","Nora","Priscilla","Safaa","Sofia","Vincent","Walter","Willie","Xinyi","John"];
let sixthPeriodStudentList = ["Amy","Andrew","Anny","Branden","Carlos","Danny","Demetrius","Jennifer","Jovon","Justin","Kayla","Laurence","Lucas","Melissa","Nancy","Nataly","Nina","Patricia","Paulo","Tielea","Tyler","Valeria","Yuhong","Yulisa"]; 


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


$('#fourth-period').click( function () {
	let pickedStudent = pickRandomStudent(fourthPeriodStudentList);
	$('#student-result').html( pickedStudent );
});


$('#sixth-period').click( function () {
	let pickedStudent = pickRandomStudent(sixthPeriodStudentList);
	$('#student-result').html( pickedStudent );
});

