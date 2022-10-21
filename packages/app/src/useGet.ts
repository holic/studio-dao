import useSWR from "swr";

export function useGet(uri: string) {
  const { data } = useSWR(uri, async (uri: string) => {
    const response = await fetch(uri);
    const json = await response.json();
    return json;
  });

  return data;
}
