const prefix = 'aga_wood_variants';
const hoe = {
  format_version: '1.12',
  'minecraft:recipe_shaped': {
    description: {
      identifier: `${prefix}:hoe`,
    },
    tags: ['crafting_table', 'aga'],
    pattern: ['PP', 'S', 'S'],
    key: {
      S: {
        item: 'minecraft:stick',
      },
      P: {
        item: 'minecraft:planks',
      },
    },
    result: {
      item: 'minecraft:wooden_hoe',
    },
  },
};
const axe = {
  format_version: '1.12',
  'minecraft:recipe_shaped': {
    description: {
      identifier: `${prefix}:axe`,
    },
    tags: ['crafting_table', 'aga'],
    pattern: ['PP', 'SP', 'S'],
    key: {
      S: {
        item: 'minecraft:stick',
      },
      P: {
        item: 'minecraft:planks',
      },
    },
    result: {
      item: 'minecraft:wooden_axe',
    },
  },
};
const pickaxe = {
  format_version: '1.12',
  'minecraft:recipe_shaped': {
    description: {
      identifier: `${prefix}:pickaxe`,
    },
    tags: ['crafting_table', 'aga'],
    pattern: ['PPP', ' S ', ' S '],
    key: {
      S: {
        item: 'minecraft:stick',
      },
      P: {
        item: 'minecraft:planks',
      },
    },
    result: {
      item: 'minecraft:wooden_pickaxe',
    },
  },
};
const shovel = {
  format_version: '1.12',
  'minecraft:recipe_shaped': {
    description: {
      identifier: `${prefix}:shovel`,
    },
    tags: ['crafting_table', 'aga'],
    pattern: ['P', 'S', 'S'],
    key: {
      S: {
        item: 'minecraft:stick',
      },
      P: {
        item: 'minecraft:planks',
      },
    },
    result: {
      item: 'minecraft:wooden_shovel',
    },
  },
};
const sword = {
  format_version: '1.12',
  'minecraft:recipe_shaped': {
    description: {
      identifier: `${prefix}:sword`,
    },
    tags: ['crafting_table', 'aga'],
    pattern: ['P', 'P', 'S'],
    key: {
      S: {
        item: 'minecraft:stick',
      },
      P: {
        item: 'minecraft:planks',
      },
    },
    result: {
      item: 'minecraft:wooden_sword',
    },
  },
};

const recipes = {
  hoe,
  axe,
  pickaxe,
  shovel,
  sword,
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
const material = [...woods, 'diamond', 'golden', 'iron', 'stone'] as const;
type Material = (typeof material)[number];

const tools = Object.keys(recipes) as (keyof typeof recipes)[];

function getMaterial(m: Material) {
  switch (m) {
    case 'acacia':
    case 'bamboo':
    case 'birch':
    case 'cherry':
    case 'crimson':
    case 'dark_oak':
    case 'jungle':
    case 'mangrove':
    case 'oak':
    case 'spruce':
    case 'warped':
      return `${prefix}:${m}_panels`;
    case 'golden':
      return 'minecraft:gold_ingot';
    case 'iron':
      return 'minecraft:iron_ingot';
    case 'stone':
      return 'minecraft:cobblestone';
  }
  return `minecraft:${m}`;
}
function createRecipeTool(m: Material, s: Wood, t: (typeof tools)[number]) {
  const recipe = JSON.parse(JSON.stringify(recipes[t]));
  const name = `${m}_${s}_${t}`;
  recipe['minecraft:recipe_shaped'].description.identifier = name;
  recipe['minecraft:recipe_shaped'].key.P.item = getMaterial(m);
  recipe['minecraft:recipe_shaped'].key.S.item = `${prefix}:${s}_stick`;
  recipe['minecraft:recipe_shaped'].result.item = `${prefix}:${name}`;
  const dir = `./addon/BP/recipes/${t}/${m}`;
  Deno.mkdirSync(dir, { recursive: true });
  Deno.writeTextFileSync(`${dir}/${s}.json`, JSON.stringify(recipe, null, 2));
}
const netherite = {
  format_version: '1.17',
  'minecraft:recipe_smithing_transform': {
    description: {
      identifier: 'smithing_netherite',
    },
    tags: ['smithing_table'],
    template: 'minecraft:netherite_upgrade_smithing_template',
    base: 'diamond',
    addition: 'minecraft:netherite_ingot',
    result: 'netherite',
  },
};
function createRecipeNetherite(s: Wood, t: (typeof tools)[number]) {
  const recipe = JSON.parse(JSON.stringify(netherite));
  const name = `netherite_${s}_${t}`;
  recipe['minecraft:recipe_smithing_transform'].description.identifier = name;
  recipe[
    'minecraft:recipe_smithing_transform'
  ].base = `${prefix}:diamond_${s}_${t}`;
  recipe[
    'minecraft:recipe_smithing_transform'
  ].result = `${prefix}:netherite_${s}_${t}`;
  const dir = `./addon/BP/recipes/${t}/netherite`;
  Deno.mkdirSync(dir, { recursive: true });
  Deno.writeTextFileSync(`${dir}/${s}.json`, JSON.stringify(recipe, null, 2));
}
function createRecipeStick(w: Wood) {
  const recipe = {
    format_version: '1.12',
    'minecraft:recipe_shaped': {
      description: {
        identifier: `${w}_stick`,
      },
      tags: ['crafting_table', 'aga'],
      pattern: ['P', 'P'],
      key: {
        P: {
          item: `${prefix}:${w}_panels`,
        },
      },
      result: {
        item: `${prefix}:${w}_stick`,
        count: 4,
      },
    },
  };
  const dir = `./addon/BP/recipes/stick`;
  Deno.mkdirSync(dir, { recursive: true });
  Deno.writeTextFileSync(`${dir}/${w}.json`, JSON.stringify(recipe, null, 2));
}
function createRecipeBow(w: Wood) {
  const recipe = {
    format_version: '1.12',
    'minecraft:recipe_shaped': {
      description: {
        identifier: `${w}_bow`,
      },

      tags: ['carving_table', 'aga'],
      pattern: [' #X', '# X', ' #X'],
      key: {
        '#': {
          item: `${prefix}:${w}_stick`,
        },
        X: {
          item: 'minecraft:string',
        },
      },
      result: {
        item: `${prefix}:${w}_bow`,
      },
    },
  };
  const dir = `./addon/BP/recipes/bow`;
  Deno.mkdirSync(dir, { recursive: true });
  Deno.writeTextFileSync(`${dir}/${w}.json`, JSON.stringify(recipe, null, 2));
}
for (const s of woods) {
  for (const t of tools) {
    for (const m of material) createRecipeTool(m, s, t);
    createRecipeNetherite(s, t);
  }
  createRecipeStick(s);
  createRecipeBow(s);
}
