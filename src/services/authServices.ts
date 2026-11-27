import { httpClient } from "@/lib/axios/httpClient";

const getContents = async () => {
  const contents = await httpClient.get("/contents");
  return contents;
};
