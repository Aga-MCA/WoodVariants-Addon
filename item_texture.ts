const obj = {
  resource_pack_name: 'wood_variants',
  texture_name: 'atlas.items',
  texture_data: {} as Record<string, { textures: string }>,
} as const;

const woods = [
  'acacia',
  'bamboo',
  'birch',
  'cherry',
  'crimson',
  'dark_oak',
  'jungle',
  'mangrove',
  'oak',
  'spruce',
  'warped',
];
const material = [...woods, 'stone', 'golden', 'iron', 'diamond', 'netherite'];

const tools = ['axe', 'hoe', 'pickaxe', 'shovel', 'sword'];

const wood_variants = 'textures/items';
function add_path(m: string, s: string, t: string) {
  const path = `${wood_variants}/${t}/${m}/${s}`;
  const name = `${m}_${s}_${t}`;
  obj.texture_data[name] = {
    textures: path,
  };
}
for (const w of woods) {
  obj.texture_data[`${w}_stick`] = {
    textures: `${wood_variants}/stick/${w}`,
  };
  for(let i = 0; i < 4; i++){
    obj.texture_data[`${w}_bow_${i}`] = {
      textures: `${wood_variants}/bow/${w}/${i}`,
    }
  }
  for (const m of material) for (const t of tools) add_path(m, w, t);
}

Deno.writeTextFileSync(
  `./addon/RP/textures/item_texture.json`,
  JSON.stringify(obj)
);
