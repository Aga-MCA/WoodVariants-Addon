const files = [
  './addon/BP/entities/wood_chest.json',
  './addon/BP/loot_tables/blocks/bone_meal.json',
  './addon/BP/loot_tables/blocks/bookshelf.json',
  './addon/BP/manifest.json',
  './addon/RP/manifest.json',
];

function min(file: string) {
  const json = Deno.readTextFileSync(file);
  const obj = JSON.parse(json);
  Deno.writeTextFileSync(file, JSON.stringify(obj));
}
for (const file of files) min(file);
