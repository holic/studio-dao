import { gql } from "@apollo/client";

export const GET_NFT_REWARDS = gql`
  query GetNftRewards($projectIds: [Int]!) {
    projects(where: { projectId_in: $projectIds }) {
      jb721DelegateTokens {
        name
        id
        tokenUri
      }
    }
  }
`;
