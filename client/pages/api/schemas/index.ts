import { gql } from "apollo-server-micro";

export const typeDefs = gql`
  type PageData {
    id: Int
    title: String!
    description: String!
  }

  type Query {
    getPageDataById(jsonId: Int!): PageData!
  }
`;
