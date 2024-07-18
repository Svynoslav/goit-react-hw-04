import axios from "axios";

export default async function fetchImgs(searchQuery, page = 1) {
  const resp = await axios.get("https://api.unsplash.com/search/photos", {
    params: {
      query: searchQuery,
      client_id: "ancBz02dj2DylXMTexTa9iHM4Of3ztxobetzuUbpPmM",
      page,
    },
    headers: {
      "Accept-Version": "v1",
    },
  });

  console.log(resp.data.results);

  return resp.data.results;
}
