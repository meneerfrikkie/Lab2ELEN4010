const courses = {
  courseCode: 'ELEN4010'
}

function yearOffered (inputCourse) {
  const year = inputCourse.courseCode.slice(4, 5)
  return parseInt(year)
}

console.log(`You are in YOS: ${yearOffered(courses)}`)
