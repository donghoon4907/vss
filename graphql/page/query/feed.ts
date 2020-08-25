import { gql } from "@apollo/client";

export const feedQuery = gql`
  query feed($skip: Int, $first: Int) {
    getPosts(skip: $skip, first: $first) {
      id
      title
      description
      createdAt
      user {
        id
        nickname
        avatar {
          url
        }
      }
      video {
        url
      }
      likes {
        user {
          id
        }
      }
      status
      room {
        id
      }
    }
    getNotices(skip: $skip, first: $first) {
      id
      title
      description
      createdAt
      updatedAt
    }
    getRecommandUsers {
      id
      nickname
      email
      avatar {
        url
      }
      isMaster
      followedBy {
        id
      }
      following {
        id
      }
      posts {
        id
      }
    }
  }
`;
