import { useQuery } from "@apollo/client";

import { JUICEBOX_PROJECT_IDS_GOERLI } from "../../constants/studioDao";
import { GET_NFT_REWARDS } from "../../graphql/queries/nftRewards";

type Project = {
  projectId: string;
  metadataUri: string;
  jb721DelegateTokens: JB721DelegateToken[];
};
type JB721DelegateToken = {
  id: string;
  tokenUri: string;
  name: string;
};

export type NFTReward = JB721DelegateToken & { project: Project };

/**
 * Return all the NFTs that are eligible for rewards across all StudioDAO Juicebox projects.
 */
export const useNftRewards = (): {
  data: NFTReward[];
  isLoading: boolean;
} => {
  const { data, loading } = useQuery(GET_NFT_REWARDS, {
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
