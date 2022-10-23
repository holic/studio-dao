import { useQuery } from "wagmi";

export const useFetchJson = (url: string | null | undefined) => {
  return useQuery(
    [url],
    async () => {
      if (!url) throw new Error("No URL provided");
      const res = await fetch(url);
      const data = await res.json();
      return data;
    },
    { enabled: !!url }
  );
};
