# Stride-graphql
A standard babel setup
Starter project setup for upcoming geaphql project


query {
  AcadeQuery(_id:"VVQ_21p_e2XrmUg3j6zs1") {
    _id
    date
    title
  }
}



mutation {
 createEvent(eventInput: {title: "1st test",
  						price: 9.99,
							description: "To check mutations",
							date: "2023-04-28T19:00:29.457Z"})
  {
    _id
    title
    description
  }
}


query {
  getEvents(_id: "20iV-IWEFehLeR6OaORuL") {
    title
    description
    date
  }
}
