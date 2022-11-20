import { MeiliSearch } from "meilisearch";

const client = new MeiliSearch({
  host: "http://localhost:17700",
});

const result = await client.index("tags").search("", {
  // filter: "type = MUSIC"
  sort: ["tagged:desc"],
});
console.dir(result);
