import { useQuery } from "@apollo/client";

import { JUICEBOX_PROJECT_IDS_GOERLI } from "../../constants/studioDao";
import { GET_NFT_REWARDS } from "../../graphql/queries/nftRewards";

type Project = {
  metadataUri: string;
  jb721DelegateTokens: JB721DelegateToken[];
};
export type JB721DelegateToken = {
  id: string;
  tokenUri: string;
  name: string;
};

export const useNftRewards = (): {
  data: JB721DelegateToken[];
  isLoading: boolean;
} => {
  const { data, loading } = useQuery(GET_NFT_REWARDS, {
    variables: { projectIds: JUICEBOX_PROJECT_IDS_GOERLI },
  });

  const nftRewards: JB721DelegateToken[] = data?.projects.flatMap(
    (project: Project) =>
      project.jb721DelegateTokens.flatMap((token: JB721DelegateToken) => token)
  );
  return { data: nftRewards, isLoading: loading };
};
