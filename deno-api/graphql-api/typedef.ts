import { gql } from "https://deno.land/x/graphql_tag@0.0.1/mod.ts";

export const typeDefs = gql`
  type Query {
    health: String
    allPosts: [Posts!]!
  }

  type Mutation {
    insertPost(
      postTitle: String!
      postDesc: String!
      isPromoted: Boolean
    ): Post!
  }

  type Post {
    _id: ID!
    role_name: String!
    customer_name: String!
    remote_work_allowed: Boolean
  }
`;
