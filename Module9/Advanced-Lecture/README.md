# Module9W25 - Advanced Lecture: NoSQL/GraphQL

- [lecture recording](https://vimeo.com/667560936/5cfe642607)
- [notes](https://github.com/connkat/lecture_notes/tree/master/Module9/Advanced-Lecture)

## TODO
- [x] SQL vs NoSQL, examples
- [x] Types, Interfaces, Enums
- [x] queries
- [x] mutations
- [x] Resolvers
- [x] Migrations

## SQL vs NoSQL, examples
SQL has been around for over 40 years, so you can expect it to stay put because it is already everywhere. Although Documents DBs might seem very different from relational DBs, a lot is similar--they are all still DBs after all. Instead of tables [you have collections](Module9/NoSQL/DB.png) and indexing works [pretty much identically too](Module9/NoSQL/index.png).  Document DBs became popular when the cost of storing data dramatically dropped and companies' most expensive resource became dev hours. Document DBs are easier and more accessible to use, saving companies hours and hours of pay for developers. If you are interested in building your first project using NoSQL, I highly recommend checking out the documentation for MongoDB/GraphQL--they are very powerful when used together and the documentation for both is detailed and well written (that is no common, as you have already seen).


## Types, Interfaces, Enums
You can be a lot more specific with your data than simple strings, ints, and bools with Document DBs: 
```
interface User {
    id: String!
    firstName: String
    age: Number
    isActive: Boolean
    Hobbies: [Hobby]
}

type Human implements User {
    id: String!
    firstName: String
    age: Number
    isAlive: Boolean
    hobbies: [Hobby]
    favoriteColor: String
    friends: [Humans]
}

enum Hobby {
    KNITTING
    SAILING
    GUITAR
}
```

## Queries
Querying for data with GraphQL is a breeze! You can pass in parameters or return entire Collections. The beautiful part of GraphQL is that you can specify exactly what data you would like returned so that you can keep your queries super lean--this is helpful when your data structure is quite large. This is really where GraphQL/Document DBs become more popular.

```
query GetAgeByIdQuery($id: String!){
     user(id:$id) {
        age
    }
}
```

## Mutations
If you want to change any data, it would be considered a mutation to GraphQL. Taken from the [official GraphQL docs](https://graphql.org/learn/queries/), here is an example of a mutation: 

```
mutation CreateReviewForEpisode($ep: Episode!, $review: ReviewInput!) {
  createReview(episode: $ep, review: $review) {
    stars
    commentary
  }
}
```

## Resolvers
Resolvers are a necessary layer when you are working with GraphQL.

You can think of each field in a GraphQL query as a function or method of the previous type which returns the next type. In fact, this is exactly how GraphQL works. Each field on each type is backed by a function called the resolver which is provided by the GraphQL server developer. When a field is executed, the corresponding resolver is called to produce the next value.
If a field produces a scalar value like a string or number, then the execution completes. However if a field produces an object value then the query will contain another selection of fields which apply to that object. This continues until scalar values are reached. GraphQL queries always end at scalar values. I like to them of them as blueprints or like a central nervous system, directing everything where it needs to go. A basic resolver query would look similar to the following:

```
Query: {
    user(obj,args,context,info) {
        return context.db.getUserById(args.id).then(
            userData => new User(userData)
        )
    }
}
```

## Migrations 
I have used Mongoose to run migrations in past. It works great with MongoDB and has a lot of GUIs available to make it easier. That being said, it does have a steep learning curve when it comes to syntax. Below is an example of an `updateMany` mutation to add `CA` as the default location to all users in a collection:

```
db.collection("users").updateMany({}, { $set: { location: 'CA' } });
```


## Helpful Links
- [](https://www.mongodb.com/developer/article/map-terms-concepts-sql-mongodb/)
- [](https://github.com/graphql/graphql-spec)
- [How to write a simple mutation](https://www.howtographql.com/graphql-js/3-a-simple-mutation/)