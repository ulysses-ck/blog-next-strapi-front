import { gql } from "@apollo/client";

export const GetPosts = gql`
  query GetPosts {
    posts {
      data {
        id
        attributes {
          title
          body
        }
      }
    }
  }
`;
