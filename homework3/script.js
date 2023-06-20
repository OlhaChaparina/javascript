const students = ["Олександр", "Ігор", "Олена", "Іра", "Олексій", "Світлана"];
const themes = ["Диференційне рівняння", "Теорія автоматів", "Алгоритми і структури даних"];
const marks = ["4", "5", "5", "3", "4", "5"];

const maleStudents = students.filter(student => student.endsWith('р') || student.endsWith('й'));
const femaleStudents = students.filter(student => student.endsWith('а'));

function getPairs(students) {
    const pairs = [];
    for (let i = 0; i < maleStudents.length; i++) {
        const pair = [maleStudents[i], femaleStudents[i]];
        pairs.push(pair);
    }
    return pairs;
}
const pairs = getPairs(students);


function getProjects(pairs, themes) {
    const projects = [];
    for (let i = 0; i < pairs.length; i++) {
        const pair = pairs[i];
        const project = [pair.join(" і "), themes[i]];
        projects.push(project);
    }
    return projects;
}
const projects = getProjects(pairs, themes);
function getMarks(students, marks){
    const studentMarks = [];
    for( let i = 0; i < students.length; i++) {
        const studentMark = [students[i],  marks[i]];
        studentMarks.push(studentMark);
    }
    return studentMarks;
}
const studentMarks = getMarks(students, marks);

function assignRandomMarks(projects) {
    const markedProjects = [];
    for (let i = 0; i < projects.length; i++) {
      const project = projects[i];
      const randomMark = Math.floor(Math.random() * 5 + 1);
      const markedProject = [...project, randomMark];
      markedProjects.push(markedProject);
    }
    return markedProjects;
  }
const markedProject = assignRandomMarks(projects);

console.log("Pairs:", pairs);
console.log("Projects:", projects);
console.log("Student Marks:", studentMarks);
console.log("Marked Projects:", markedProject);




