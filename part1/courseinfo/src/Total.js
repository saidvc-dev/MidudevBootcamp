const Total = ({ course }) => { 
    const exercises = course.parts.map((object) => {
        return object.exercises 
    
    })
    console.log(exercises)
    return exercises[0] + exercises[1] + exercises[2]
}

export default Total;