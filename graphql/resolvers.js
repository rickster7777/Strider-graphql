import { nanoid } from "nanoid";
//Not using graphql-tools to make course easier it's used to work with DBs like mongoDB.
// will be using a simple class and variable to store data

class Course {
    constructor(id, {
        courseName, category, price, language, email, stack, teachingAssists
    }) {

        this.id = id
        this.courseName = courseName
        this.category = category
        this.price = price
        this.language = language
        this.email = email
        this.stack = stack
        this.teachingAssists = teachingAssists
    }
}

const courseholder = {}

const resolvers = {
    getCourse:({ id }) => {
        return new Course(id, courseholder[id])
    },

    createCourse: ({ input }) => {
        let id = nanoid()
        courseholder[id] = input
        return new Course(id, input)
    }
}
export default resolvers;