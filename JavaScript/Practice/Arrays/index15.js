let student = {
  name: "Neharika",
  college: {
    name: "MIC",
    location: {
      city: "Vijayawada"
    }
  }
};

console.log(student.college?.location?.city);

console.log(student.college?.department?.name);