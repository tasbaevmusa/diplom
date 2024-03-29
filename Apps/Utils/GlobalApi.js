import { request, gql } from "graphql-request";

const MASTER_URL =
  "https://api-ap-southeast-2.hygraph.com/v2/clt70o60x0koo07us0n2z7vp3/master";
const getCategory = async () => {
  const query = gql`
    query GetCategory {
      categories {
        id
        name
        icons {
          url
        }
        slug
      }
    }
  `;

  const result = await request(MASTER_URL, query);
  return result;
};

const getCourseList = async () => {
  const query = gql`
    query MyQuery {
      courseLists(first: 50, orderBy: createdAt_ASC) {
        author
        description
        demoUrl
        free
        id
        name
        slug
        sourceCode
        tag
        youtubeUrl
        banner {
          url
        }
        chapter(first: 50) {
          ... on Chapter {
            id
            name
            video {
              url
            }
          }
        }
      }
    }
  `;

  const result = await request(MASTER_URL, query);
  return result;
}



export default {
  getCategory,
  getCourseList,
  // checkUserCourseEnrollment
};
