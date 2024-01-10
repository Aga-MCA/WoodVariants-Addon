const addon = 'wood_variants';
const prefix = `aga_${addon}`;
const terrain_texture = {
  resource_pack_name: addon,
  texture_name: 'atlas.terrain',
  padding: 8,
  num_mip_levels: 4,
  texture_data: {
    compost: {
      textures: 'textures/blocks/compost',
    },
    compost_ready: {
      textures: 'textures/blocks/compost_ready',
    },
    acacia_chest: { textures: 'textures/entity/chest/acacia' },
  } as Record<string, { textures: string }>,
} as const;
const blocks = {
  format_version: [1, 1, 0],
} as {
  format_version: [number, number, number];
  [key: `${string}:${string}`]: {
    sound: string;
    textures: Record<string, string> | string;
  };
};
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
] as const;
type Wood = (typeof woods)[number];
function bookshelf(w: Wood) {
  const path = `textures/blocks/bookshelf/${w}`;
  const name = `${w}_bookshelf`;
  blocks[`${prefix}:${w}_bookshelf`] = {
    sound: 'wood',
    textures: {
      up: `${w}_planks`,
      down: `${w}_planks`,
      side: `${name}`,
    },
  };
  terrain_texture.texture_data[`${name}`] = {
    textures: `${path}`,
  };
}
function crafting_table(w: Wood) {
  const path = `textures/blocks/crafting_table/${w}`;
  const name = `${w}_crafting_table`;
  blocks[`${prefix}:${w}_crafting_table`] = {
    sound: 'wood',
    textures: {
      up: `${name}_top`,
      down: `${w}_planks`,
      north: `${name}_front`,
      south: `${name}_front`,
      west: `${name}_side`,
      east: `${name}_side`,
    },
  };
  terrain_texture.texture_data[`${name}_front`] = {
    textures: `${path}/front`,
  };
  terrain_texture.texture_data[`${name}_side`] = {
    textures: `${path}/side`,
  };
  terrain_texture.texture_data[`${name}_top`] = {
    textures: `${path}/top`,
  };
}
function panels(w: Wood) {
  const path = `textures/blocks/panels/${w}`;
  const name = `${w}_panels`;
  blocks[`${prefix}:${w}_panels`] = {
    sound: 'wood',
    textures: `${name}`,
  };
  terrain_texture.texture_data[`${name}`] = {
    textures: `${path}`,
  };
}
function composters(w: Wood) {
  const path = `textures/blocks/composter/${w}`;
  const name = `${w}_composter`;
  terrain_texture.texture_data[`${name}_side`] = {
    textures: `${path}/side`,
  };
  terrain_texture.texture_data[`${name}_top`] = {
    textures: `${path}/top`,
  };
  terrain_texture.texture_data[`${name}_bottom`] = {
    textures: `${path}/bottom`,
  };
}
function chest(w: Wood) {
  const path = `textures/entity/chest/${w}`;
  const name = `${w}_chest`;
  terrain_texture.texture_data[name] = {
    textures: path,
  };
}

for (const w of woods) {
  chest(w);
  panels(w);
  bookshelf(w);
  composters(w);
  crafting_table(w);
}
Deno.writeTextFileSync('./addon/RP/blocks.json', JSON.stringify(blocks));
Deno.writeTextFileSync(
  './addon/RP/textures/terrain_texture.json',
  JSON.stringify(terrain_texture)
);
