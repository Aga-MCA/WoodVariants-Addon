const addon = 'aga_wood_variants';
const slab = 'minecraft:wooden_slab';
const slabs = {
  acacia: {
    data:4,
  },
  bamboo: {
    item:'minecraft:bamboo_slab',
  },
  birch: {
    data:2,
  },
  cherry: {
    item:'minecraft:cherry_slab',
  },
  crimson: {
    item:'minecraft:crimson_slab',
  },
  dark_oak: {
    data:5,
  },
  jungle: {
    data:3,
  },
  mangrove: {
    item:'minecraft:mangrove_slab',
  },
  oak: {
    data:0,
  },
  spruce: {
    data:1,
  },
  warped: {
    item:'minecraft:warped_slab',
  },
} as const;
const woods = Object.keys(slabs) as (keyof typeof slabs)[];
type Wood = typeof woods[number];

const bookshelf = {
  format_version:'1.12',
  'minecraft:recipe_shaped':{
    description:{
      identifier:`${addon}:bookshelf`
    },
    tags:[
      'crafting_table',
      "aga"
    ],
    pattern:[
      'PPP',
      "BBB",
      'PPP'
    ],
    key:{
      P:{
        item:slab,
      },
      B: {
        item:'minecraft:book',
      }
    },
    result:{
      item:`${addon}:bookshelf`,
      count:1,
    },
  },
}
function createRecipeBookshelf(wood: Wood){
  const name = `${wood}_bookshelf`;
  const panels = `${addon}:${wood}_panels`;
  const obj = JSON.parse(JSON.stringify(bookshelf)) as typeof bookshelf;
  obj['minecraft:recipe_shaped'].description.identifier = name;
  obj['minecraft:recipe_shaped'].result.item = `${addon}:${name}`;
  obj['minecraft:recipe_shaped'].key.P.item = panels;
  const dir = `./addon/BP/recipes/bookshelf`;
  Deno.mkdirSync(dir, {recursive:true});
  Deno.writeTextFileSync(`${dir}/${wood}.json`, JSON.stringify(obj));
}
const chest = {
  format_version:'1.12',
  'minecraft:recipe_shaped':{
    description:{
      identifier:`${addon}:chest`
    },
    tags:[
      'crafting_table',
      "aga"
    ],
    pattern:[
      'PPP',
      "P P",
      'PPP'
    ],
    key:{
      P:{
        item:slab,
      },
    },
    result:{
      item:`${addon}:chest`,
      count:1,
    },
  },
}
function createRecipeChest(wood: Wood){
  const name = `${wood}_chest`;
  const panels = `${addon}:${wood}_panels`;
  const obj = JSON.parse(JSON.stringify(chest)) as typeof chest;
  obj['minecraft:recipe_shaped'].description.identifier = name;
  obj['minecraft:recipe_shaped'].result.item = `${addon}:${name}`;
  obj['minecraft:recipe_shaped'].key.P.item = panels;
  const dir = `./addon/BP/recipes/chest`;
  Deno.mkdirSync(dir, {recursive:true});
  Deno.writeTextFileSync(`${dir}/${wood}.json`, JSON.stringify(obj));
}
const crafting_table = {
  format_version:'1.12',
  'minecraft:recipe_shaped':{
    description:{
      identifier:`${addon}:crafting_table`
    },
    tags:[
      'crafting_table',
      "aga"
    ],
    pattern:[
      "PP",
      'PP'
    ],
    key:{
      P:{
        item:slab,
      },
    },
    result:{
      item:`${addon}:crafting_table`,
      count:1,
    },
  },
}
function createRecipeCraftingTable(wood: Wood){
  const name = `${wood}_crafting_table`;
  const panels = `${addon}:${wood}_panels`;
  const obj = JSON.parse(JSON.stringify(crafting_table)) as typeof crafting_table;
  obj['minecraft:recipe_shaped'].description.identifier = name;
  obj['minecraft:recipe_shaped'].result.item = `${addon}:${name}`;
  obj['minecraft:recipe_shaped'].key.P.item = panels;
  const dir = `./addon/BP/recipes/crafting_table`;
  Deno.mkdirSync(dir, {recursive:true});
  Deno.writeTextFileSync(`${dir}/${wood}.json`, JSON.stringify(obj));

}
const panels = {
  format_version:'1.12',
  'minecraft:recipe_shaped':{
    description:{
      identifier:`${addon}:wood_panels`
    },
    tags:[
      'crafting_table',
      "aga"
    ],
    pattern:[
      'S',
      'S',
    ],
    key:{
      S:{
        item:slab,
      },
    },
    result:{
      item:`${addon}:wood_panels`,
      count:1,
    },
  },
}
function createRecipePanels(wood: Wood){
  const name = `${wood}_panels`;
  const obj = JSON.parse(JSON.stringify(panels)) as typeof panels;
  obj['minecraft:recipe_shaped'].description.identifier = name;
  obj['minecraft:recipe_shaped'].result.item = `${addon}:${name}`;
  obj['minecraft:recipe_shaped'].key.S = {...panels['minecraft:recipe_shaped'].key.S, ...slabs[wood]};
  const dir = `./addon/BP/recipes/panels`;
  Deno.mkdirSync(dir, {recursive:true});
  Deno.writeTextFileSync(`${dir}/${wood}.json`, JSON.stringify(obj));
}
const panels_slab = {
  format_version:'1.12',
  'minecraft:recipe_shaped':{
    description:{
      identifier:`wood_panels_slab`
    },
    tags:[
      'crafting_table',
      "aga"
    ],
    pattern:[
      'SSS',
    ],
    key:{
      S:{
        item:slab,
      },
    },
    result:{
      item:`${addon}:wood_panels`,
      count:6,
    },
  },
}
function createRecipePanelsSlab(wood: Wood){
  const name = `${wood}_panels_slab`;
  const obj = JSON.parse(JSON.stringify(panels_slab)) as typeof panels_slab;
  obj['minecraft:recipe_shaped'].description.identifier = name;
  obj['minecraft:recipe_shaped'].result.item = `${addon}:${name}`;
  obj['minecraft:recipe_shaped'].key.S.item = `${addon}:${wood}_panels`
  const dir = `./addon/BP/recipes/panels_slab`;
  Deno.mkdirSync(dir, {recursive:true});
  Deno.writeTextFileSync(`${dir}/${name}.json`, JSON.stringify(obj));
}
const composter = {
  format_version:'1.12',
  'minecraft:recipe_shaped':{
    description:{
      identifier:`${addon}:composter`
    },
    tags:[
      'crafting_table',
      "aga"
    ],
    pattern:[
      'P P',
      "P P",
      'PPP'
    ],
    key:{
      P:{
        item:slab,
      },
    },
    result:{
      item:`${addon}:composter`,
      count:1,
    },
  },

}
function createRecipeComposter(wood: Wood){
  const name = `${wood}_composter`;
  const obj = JSON.parse(JSON.stringify(composter)) as typeof composter;
  obj['minecraft:recipe_shaped'].description.identifier = name;
  obj['minecraft:recipe_shaped'].result.item = `${addon}:${name}`;
  obj['minecraft:recipe_shaped'].key.P.item = `${addon}:${wood}_panels_slab`
  const dir = `./addon/BP/recipes/composter`;
  Deno.mkdirSync(dir, {recursive:true});
  Deno.writeTextFileSync(`${dir}/${name}.json`, JSON.stringify(obj));
}

for(const wood of woods){
  createRecipeBookshelf(wood);
  createRecipeChest(wood);
  createRecipeCraftingTable(wood);
  createRecipePanels(wood);
  createRecipePanelsSlab(wood);
  createRecipeComposter(wood);
}