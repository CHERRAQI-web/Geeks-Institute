const students = [{name: "Ray", course: "Computer Science", isPassed: true}, 
               {name: "Liam", course: "Computer Science", isPassed: false}, 
               {name: "Jenner", course: "Information Technology", isPassed: true}, 
               {name: "Marco", course: "Robotics", isPassed: true}, 
               {name: "Kimberly", course: "Artificial Intelligence", isPassed: false}, 
               {name: "Jamie", course: "Big Data", isPassed: false}];


const réussi=students.filter((student)=>student.isPassed==true)
console.log(réussi)
réussi.forEach(students=>console.log(`Bon travail ${students.name},tu as réussi le cours en ${students.course}`))