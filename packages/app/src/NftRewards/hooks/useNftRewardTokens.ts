import { useQuery } from "@apollo/client";
import { BigNumber } from "ethers";

import { JUICEBOX_PROJECT_IDS_GOERLI } from "../../constants/studioDao";
import { GET_NFT_REWARDS } from "../../graphql/queries/nftRewards";

interface Project {
  projectId: string;
  metadataUri: string;
  jb721DelegateTokens: JB721DelegateToken[];
}

interface JB721DelegateToken {
  address: string;
  tokenUri: string;
  name: string;
}

export type NFTRewardToken = JB721DelegateToken & {
  project: Project;
};

export interface NFTRewardTier {
  id: string;
  encodedIPFSUri: string;

  token: NFTRewardToken;
  balance?: BigNumber;
}

interface NftRewardsResponse {
  projects: Project[];
}

/**
 * Return all NFTs eligible for rewards across StudioDAO's Juicebox projects.
 */
export const useNftRewardTokens = (): {
  data: NFTRewardToken[] | undefined;
  isLoading: boolean;
} => {
  const { data, loading } = useQuery<NftRewardsResponse>(GET_NFT_REWARDS, {
    variables: { projectIds: JUICEBOX_PROJECT_IDS_GOERLI },
  });

  const nftRewards = data?.projects.flatMap((project: Project) =>
    project.jb721DelegateTokens.flatMap((token: JB721DelegateToken) => ({
      ...token,
      project,
    }))
  );
  return { data: nftRewards, isLoading: loading };
};
