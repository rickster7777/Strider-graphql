import { nanoid } from "nanoid";
import Event from "../models/event.js";
import event from "../models/event.js";
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

const events = [];

const resolvers = {
    getCourse: ({ id }) => {
        return new Course(id, courseholder[id])
    },

    createCourse: ({ input }) => {
        let id = nanoid()
        courseholder[id] = input
        return new Course(id, input)
    },

    getEvents: ({ _id }) => {
        //return ["Romantic Cooking", "Sailing", "All-Night Coding"]
        console.log("Events in getEvents", events);
        // for (let i in events) {
        //     if (events[i]['_id'] === _id) {
        //         return events[i];
        //     }
        // }
        return Event.find()
        .then(events => {
            return events.map(event => {
                return {...event._doc, _id: event._doc._id.toString()};
            });
        })
        .catch(err => {
            throw err;
        });

    },
    createEvent: (args) => {
        //    const event = {
        //     _id: nanoid(),
        //     title: args.eventInput.title,
        //     description: args.eventInput.description,
        //     price: +args.eventInput.price,
        //     date: args.eventInput.date
        //     //date: new Date().toISOString()
        //    };

        const event = new Event({
            title: args.eventInput.title,
            description: args.eventInput.description,
            price: +args.eventInput.price,
            date: args.eventInput.date
        });

        return event
            .save()
            .then(result => {
                console.log(result);
                return { ...result._doc };
            })
            .catch(err => {
                console.log(err);
                throw err;
            });

        //return event;
        //    events.push(event);
        //    return event
    }
}
export default resolvers;