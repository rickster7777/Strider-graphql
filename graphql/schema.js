import {buildSchema } from "graphql";

const schema = buildSchema(`
    type Course {
        id: ID
        coueseName: String
        category: String
        price: Int
        language: String
        email: String
        stack: Stack
        teachingAssists: [TeachingAssist]
    }

    type TeachingAssist {
        firstName: String
        lastname: String
        experience: Int
    }

    enum Stack {
        WEB
        MOBILE
        OTHER
    }
    
    type Query {
        getCourse(id:ID): Course
        getEvents(_id:ID): Event

    }

    input CourseInput {
        id: ID
        coueseName: String!
        category: String
        price: Int!
        language: String
        email: String
        stack: Stack
        teachingAssists: [TeachingAssistInput]!
    }

    input TeachingAssistInput {
        firstName: String
        lastname: String
        experience: Int
    }

    type Mutation {
        createCourse(input: CourseInput): Course
        createEvent(eventInput: EventInput): Event
    }


    type Event {
        _id: ID!
        title: String!
        description: String!
        price: Float!
        date: String!
    }

    input EventInput {
        title: String!
        description: String!
        price: Float!
        date: String!
    }

`)


export default schema;