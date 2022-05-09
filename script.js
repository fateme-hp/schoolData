let schoolData = {
  class1: {
    student1: {
      fullName: " samane sanaee",
      score: 20,
      phone: "09179177878",
      id: 3490265997,
      age: 17,
    },
    student2: {
      fullName: "fatemeh zamani",
      score: 19,
      phone: "09199177879",
      id: 3490246797,
      age: 18,
    },
    student3: {
      fullName: " rahele rad",
      score: 17,
      phone: "09219177855",
      id: 3500265991,
      age: 17,
    },
    student4: {
      fullName: "mahsa mahdavi",
      score: 18,
      phone: "09179142871",
      id: 3490123497,
      age: 17,
    },
  },
  class2: {
    student1: {
      fullName: " bahar behrozi",
      score: 17,
      phone: "0369177777",
      id: 3550265997,
      age: 17,
    },
    student2: {
      fullName: " mania masroor",
      score: 18,
      phone: "09399177232",
      id: 3490265997,
      age: 18,
    },
    student3: {
      fullName: " zahra zarin",
      score: 15,
      phone: "09179171234",
      id: 3490265123,
      age: 17,
    },
    student4: {
      fullName: " hanieh hesam",
      score: 19,
      phone: "09171237878",
      id: 34912365997,
      age: 17,
    },
  },
  class3: {
    student1: {
      fullName: " ziba zand",
      score: 20,
      phone: "09179112348",
      id: 3490265117,
      age: 18,
    },
    student2: {
      fullName: " mozhgan mohebi",
      score: 19,
      phone: "09192377824",
      id: 3490265997,
      age: 17,
    },
    student3: {
      fullName: " maryam arya",
      score: 20,
      phone: "09179182425",
      id: 3490262425,
      age: 17,
    },
    student4: {
      fullName: "fatemeh ahora",
      score: 18,
      phone: "09179177878",
      id: 3503559799,
      age: 17,
    }
  }
}
let studentName,
  studentScore,
  max = 0,
  topStudents = [];

for (let i = 1; i <= 3; i++) {
  for (let a = 1; i <= 4; a++) {
    studentScore = schoolData["class" + i]["student" + a].score;
    studentName = schoolData["class" + i]["student" + a].fullName;

    if (studentScore >= max) {
      max = studentScore;
      topStudents.push(studentName);
    }
  }
}
console.log("top result:", max);
