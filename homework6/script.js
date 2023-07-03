const students = [{
    name: "Tanya",
    course: 3,
    subjects: {
    math: [4, 4, 3, 4],
    algorithms: [3, 3, 3, 4, 4, 4],
    data_science: [5, 5, 3, 4]
    }
    }, 
    {
    name: "Victor",
    course: 4,
    subjects: {
    physics: [5, 5, 5, 3],
    economics: [2, 3, 3, 3, 3, 5],
    geometry: [5, 5, 2, 3, 5]
    }
    }, 
    {
    name: "Anton",
    course: 2,
    subjects: {
    statistics: [4, 5, 5, 5, 5, 3, 4, 3, 4, 5],
    english: [5, 3],
    cosmology: [5, 5, 5, 5]
    }
    }];

    function getSubjects(student) {
        const subjects = student.subjects;
        const subjectList = Object.keys(subjects);
        const formattedList = subjectList.map(subject => {
            const formattedSubject = subject.replace('_', ' ');
            return formattedSubject.charAt(0).toUpperCase() + formattedSubject.slice(1);
        });
        return formattedList;
    }
    
    console.log(getSubjects(students[0]));  

    function getAverageMark(student) {
        const subjects = student.subjects;
        const marks = Object.values(subjects).flat();
        const sum = marks.reduce((total, mark) => total + mark, 0);
        const average = sum / marks.length;
        return average.toFixed(2);
    }
    
    console.log(getAverageMark(students[0]));  

    function getStudentInfo(student) {
        const info = {
            course: student.course,
            name: student.name,
            averageMark: getAverageMark(student)
        };
        return info;
    }
    console.log(getStudentInfo(students[0])); 

    function getStudentsNames(students) {
        const names = students.map(student => student.name);
        const sortedNames = names.sort();
        return sortedNames;
    }
    
    console.log(getStudentsNames(students));  

    function getBestStudent(students) {
        let bestAverage = 0;
        let bestStudent = '';
    
        students.forEach(student => {
            const average = parseFloat(getAverageMark(student));
            if (average > bestAverage) {
                bestAverage = average;
                bestStudent = student.name;
            }
        });
    
        return bestStudent;
    }
    
    console.log(getBestStudent(students)); 

    function calculateWordLetters(word) {
        const letters = {};
      
        for (let i = 0; i < word.length; i++) {
            const letter = word[i];
            if (letters.hasOwnProperty(letter)) {
                letters[letter]++;
            } else {
                letters[letter] = 1;
            }
        }
      
        return letters;
    }
    
    console.log(calculateWordLetters("тест"));