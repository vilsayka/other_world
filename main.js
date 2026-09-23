const { calculateAverage, findTopStudent } = require("./Zuikov");
const { filterFailed, addLetterGrade } = require("./golubeva");

const grades = [
  { name: "Макар", score: 85 },
  { name: "Денис", score: 92 },
  { name: "Анна", score: 78 },
  { name: "Даша", score: 88 },
  { name: "Студент_X", score: 45 },
];

const PASS_SCORE = 60;

const average = calculateAverage(grades);
console.log("Средний балл группы:", average);

const topStudent = findTopStudent(grades);
console.log("Лучший студент:", topStudent);

const failedStudents = filterFailed(grades, PASS_SCORE);
console.log("Список должников:", failedStudents);

const gradesWithLetters = addLetterGrade(grades);
console.log("Итоговый массив с буквенными оценками:");
console.log(gradesWithLetters);
