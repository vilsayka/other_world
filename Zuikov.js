function calculateAverage(data) {
  const sum = data.reduce((acc, student) => acc + student.score, 0);
  return Math.round((sum / data.length) * 100) / 100;
}

function findTopStudent(data) {
  const top = data.reduce((best, student) =>
    student.score > best.score ? student : best
  );
  return top.name;
}

module.exports = { calculateAverage, findTopStudent };
