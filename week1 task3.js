const students = [5, 6, 8]
let sum = 0;
for (let i = 0; i < students.length;i++){
	sum += students[i];
}

var avg = sum / students.length
document.getElementById("demo").innerHTML = "The average is: " + avg;
