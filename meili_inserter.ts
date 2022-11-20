import { MeiliSearch } from "meilisearch";
import tags from "./tags.json" assert { type: "json" };

const client = new MeiliSearch({
  host: "http://localhost:17700",
});

const tagsIndex = client.index("tags");

await tagsIndex.deleteAllDocuments();
await tagsIndex.updateFilterableAttributes(["type"]);
await tagsIndex.updateSortableAttributes(["tagged"]);
const result = await tagsIndex.addDocuments(tags);
console.dir(result);
