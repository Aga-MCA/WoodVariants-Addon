const prefix = 'aga_wood_variants';
const fuel = {
  duration: 5,
};
const hoe = {
  format_version: '1.18.0',
  'minecraft:item': {
    description: {
      identifier: '',
      category: 'equipment',
    },
    components: {
      'minecraft:fuel': {
        duration: 5,
      },
      'minecraft:max_stack_size': 1,
      'minecraft:hand_equipped': true,
      'minecraft:durability': {
        max_durability: 59,
      },
      'minecraft:mining_speed': 8,
      'minecraft:damage': 2,
      'minecraft:enchantable': {
        value: 10,
        slot: 'hoe',
      },
      'tag:minecraft:is_hoe': {},
      'minecraft:icon': {
        texture: '',
      },
      'minecraft:weapon': {
        on_hurt_entity: {
          event: 'on_tool_used',
        },
        on_not_hurt_entity: {
          event: 'on_tool_used',
        },
        on_hit_block: {
          event: 'on_tool_used',
        },
      },
      'minecraft:creative_category': {
        parent: 'itemGroup.name.hoe',
      },
      'minecraft:digger': {
        use_efficiency: true,
        destroy_speeds: [
          {
            block: 'minecraft:nether_wart_block',
            speed: 2,
            on_dig: {
              event: 'on_tool_used',
            },
          },
          {
            block: 'minecraft:hay_block',
            speed: 2,
            on_dig: {
              event: 'on_tool_used',
            },
          },
          {
            block: 'minecraft:leaves',
            speed: 2,
            on_dig: {
              event: 'on_tool_used',
            },
          },
          {
            block: 'minecraft:leaves2',
            speed: 2,
            on_dig: {
              event: 'on_tool_used',
            },
          },
          {
            block: 'minecraft:warped_wart_block',
            speed: 2,
            on_dig: {
              event: 'on_tool_used',
            },
          },
          {
            block: "q.any_tag('destroy:hoe')",
            speed: 2,
            on_dig: {
              event: 'on_tool_used',
            },
          },
        ],
        on_dig: {
          event: 'on_tool_used',
        },
      },
    },
    events: {
      on_tool_used: {
        damage: {
          type: 'durability',
          amount: 1,
          target: 'self',
        },
      },
    },
  },
};
const sword = {
  format_version: '1.18.0',
  'minecraft:item': {
    description: {
      identifier: '',
      category: 'equipment',
    },
    components: {
      'minecraft:fuel': {
        duration: 5,
      },
      'minecraft:max_stack_size': 1,
      'minecraft:hand_equipped': true,
      'minecraft:durability': {
        max_durability: 59,
      },
      'minecraft:mining_speed': 1.5,
      'minecraft:damage': 4,
      'minecraft:enchantable': {
        value: 25,
        slot: 'sword',
      },
      'minecraft:can_destroy_in_creative': false,
      'minecraft:digger': {
        use_efficiency: false,
        destroy_speeds: [
          {
            block: 'minecraft:web',
            speed: 2,
            on_dig: {
              event: 'on_tool_used',
            },
          },
          {
            block: 'minecraft:bamboo',
            speed: 2,
            on_dig: {
              event: 'on_tool_used',
            },
          },
        ],
        on_dig: {
          event: 'on_tool_used',
        },
      },
      'minecraft:icon': {
        texture: '',
      },
      'minecraft:weapon': {
        on_hurt_entity: {
          event: 'on_tool_used',
        },
        on_not_hurt_entity: {
          event: 'on_tool_used',
        },
        on_hit_block: {
          event: 'on_tool_used',
        },
      },
      'minecraft:creative_category': {
        parent: 'itemGroup.name.sword',
      },
    },
    events: {
      on_tool_used: {
        damage: {
          type: 'durability',
          amount: 1,
          target: 'self',
        },
      },
    },
  },
};
const axe = {
  format_version: '1.18.0',
  'minecraft:item': {
    description: {
      identifier: '',
      category: 'equipment',
    },
    components: {
      'minecraft:fuel': {
        duration: 5,
      },
      'minecraft:max_stack_size': 1,
      'minecraft:hand_equipped': true,
      'minecraft:durability': {
        max_durability: 59,
      },
      'minecraft:mining_speed': 1,
      'minecraft:damage': 3,
      'minecraft:enchantable': {
        value: 15,
        slot: 'axe',
      },
      'tag:minecraft:is_axe': {},
      'minecraft:icon': {
        texture: '',
      },
      'minecraft:weapon': {
        on_hurt_entity: {
          event: 'on_tool_used',
        },
        on_not_hurt_entity: {
          event: 'on_tool_used',
        },
        on_hit_block: {
          event: 'on_tool_used',
        },
      },
      'minecraft:creative_category': {
        parent: 'itemGroup.name.axe',
      },
      'minecraft:digger': {
        use_efficiency: true,
        destroy_speeds: [
          {
            block: {
              tags: "q.any_tag('wood', 'pumpkin', 'plant', 'log')",
            },
            speed: 2,
            on_dig: {
              event: 'on_tool_used',
            },
          },
        ],
        on_dig: {
          event: 'on_tool_used',
        },
      },
    },
    events: {
      on_tool_used: {
        damage: {
          type: 'durability',
          amount: 1,
          target: 'self',
        },
      },
    },
  },
};
const pickaxe = {
  format_version: '1.18.0',
  'minecraft:item': {
    description: {
      identifier: '',
      category: 'equipment',
    },
    components: {
      'minecraft:fuel': {
        duration: 5,
      },
      'minecraft:max_stack_size': 1,
      'minecraft:hand_equipped': true,
      'minecraft:durability': {
        max_durability: 59,
      },
      'minecraft:mining_speed': 8,
      'minecraft:damage': 2,
      'minecraft:enchantable': {
        value: 10,
        slot: 'pickaxe',
      },
      'minecraft:icon': {
        texture: '',
      },
      'minecraft:weapon': {
        on_hurt_entity: {
          event: 'on_tool_used',
        },
        on_not_hurt_entity: {
          event: 'on_tool_used',
        },
        on_hit_block: {
          event: 'on_tool_used',
        },
      },
      'minecraft:creative_category': {
        parent: 'itemGroup.name.pickaxe',
      },
      'minecraft:digger': {
        use_efficiency: true,
        destroy_speeds: [],
        on_dig: {
          event: 'on_tool_used',
        },
      },
    },
    events: {
      on_tool_used: {
        damage: {
          type: 'durability',
          amount: 1,
          target: 'self',
        },
      },
    },
  },
};
const shovel = {
  format_version: '1.18.0',
  'minecraft:item': {
    description: {
      identifier: '',
      category: 'equipment',
    },
    components: {
      'minecraft:fuel': {
        duration: 5,
      },
      'minecraft:max_stack_size': 1,
      'minecraft:hand_equipped': true,
      'minecraft:durability': {
        max_durability: 59,
      },
      'minecraft:mining_speed': 1,
      'minecraft:damage': 1,
      'minecraft:enchantable': {
        value: 10,
        slot: 'shovel',
      },
      'minecraft:digger': {
        use_efficiency: true,
        destroy_speeds: [
          {
            block: {
              tags: "q.any_tag('dirt', 'sand', 'gravel', 'grass', 'snow')",
            },
            speed: 2,
            on_dig: {
              event: 'on_tool_used',
            },
          },
          {
            block: 'minecraft:soul_sand',
            speed: 2,
            on_dig: {
              event: 'on_tool_used',
            },
          },
          {
            block: 'minecraft:soul_soil',
            speed: 2,
            on_dig: {
              event: 'on_tool_used',
            },
          },
        ],
        on_dig: {
          event: 'on_tool_used',
        },
      },
      'tag:minecraft:is_shovel': {},
      'minecraft:icon': {
        texture: '',
      },
      'minecraft:weapon': {
        on_hurt_entity: {
          event: 'on_tool_used',
        },
        on_not_hurt_entity: {
          event: 'on_tool_used',
        },
        on_hit_block: {
          event: 'on_tool_used',
        },
      },
      'minecraft:creative_category': {
        parent: 'itemGroup.name.shovel',
      },
    },
    events: {
      on_tool_used: {
        damage: {
          type: 'durability',
          amount: 1,
          target: 'self',
        },
      },
    },
  },
};
const toolsJson = {
  hoe,
  sword,
  axe,
  pickaxe,
  shovel,
};

const wood_destroy_speeds = [
  {
    block: {
      tags: "q.any_tag('stone', 'wood_pick_diggable')",
    },
    speed: 2,
    on_dig: {
      event: 'on_tool_used',
    },
  },
  {
    block: 'minecraft:ice',
    speed: 2,
    on_dig: {
      event: 'on_tool_used',
    },
  },
  {
    block: 'minecraft:anvil',
    speed: 2,
    on_dig: {
      event: 'on_tool_used',
    },
  },
  {
    block: 'minecraft:bone_block',
    speed: 2,
    on_dig: {
      event: 'on_tool_used',
    },
  },
  {
    block: 'minecraft:mob_spawner',
    speed: 2,
    on_dig: {
      event: 'on_tool_used',
    },
  },
  {
    block: 'minecraft:smooth_stone',
    speed: 2,
    on_dig: {
      event: 'on_tool_used',
    },
  },
  {
    block: 'minecraft:enchanting_table',
    speed: 2,
    on_dig: {
      event: 'on_tool_used',
    },
  },
  {
    block: 'minecraft:end_bricks',
    speed: 2,
    on_dig: {
      event: 'on_tool_used',
    },
  },
  {
    block: 'minecraft:cracked_polished_blackstone_bricks',
    speed: 2,
    on_dig: {
      event: 'on_tool_used',
    },
  },
  {
    block: 'minecraft:nether_brick',
    speed: 2,
    on_dig: {
      event: 'on_tool_used',
    },
  },
  {
    block: 'minecraft:cracked_nether_bricks',
    speed: 2,
    on_dig: {
      event: 'on_tool_used',
    },
  },
  {
    block: 'minecraft:purpur_block',
    speed: 2,
    on_dig: {
      event: 'on_tool_used',
    },
  },
  {
    block: 'minecraft:purpur_stairs',
    speed: 2,
    on_dig: {
      event: 'on_tool_used',
    },
  },
  {
    block: 'minecraft:end_brick_stairs',
    speed: 2,
    on_dig: {
      event: 'on_tool_used',
    },
  },
  {
    block: 'minecraft:stone_slab2',
    speed: 2,
    on_dig: {
      event: 'on_tool_used',
    },
  },
  {
    block: 'minecraft:stone_slab3',
    speed: 2,
    on_dig: {
      event: 'on_tool_used',
    },
  },
  {
    block: 'minecraft:stone_brick_stairs',
    speed: 2,
    on_dig: {
      event: 'on_tool_used',
    },
  },
  {
    block: 'minecraft:mossy_stone_brick_stairs',
    speed: 2,
    on_dig: {
      event: 'on_tool_used',
    },
  },
  {
    block: 'minecraft:polished_blackstone_bricks',
    speed: 2,
    on_dig: {
      event: 'on_tool_used',
    },
  },
  {
    block: 'minecraft:polished_blackstone_stairs',
    speed: 2,
    on_dig: {
      event: 'on_tool_used',
    },
  },
  {
    block: 'minecraft:blackstone_wall',
    speed: 2,
    on_dig: {
      event: 'on_tool_used',
    },
  },
  {
    block: 'minecraft:blackstone_wall',
    speed: 2,
    on_dig: {
      event: 'on_tool_used',
    },
  },
  {
    block: 'minecraft:polished_blackstone_wall',
    speed: 2,
    on_dig: {
      event: 'on_tool_used',
    },
  },
  {
    block: 'minecraft:sandstone',
    speed: 2,
    on_dig: {
      event: 'on_tool_used',
    },
  },
  {
    block: 'minecraft:grindstone',
    speed: 2,
    on_dig: {
      event: 'on_tool_used',
    },
  },
  {
    block: 'minecraft:smooth_stone',
    speed: 2,
    on_dig: {
      event: 'on_tool_used',
    },
  },
  {
    block: 'minecraft:brewing_stand',
    speed: 2,
    on_dig: {
      event: 'on_tool_used',
    },
  },
  {
    block: 'minecraft:chain',
    speed: 2,
    on_dig: {
      event: 'on_tool_used',
    },
  },
  {
    block: 'minecraft:lantern',
    speed: 2,
    on_dig: {
      event: 'on_tool_used',
    },
  },
  {
    block: 'minecraft:soul_lantern',
    speed: 2,
    on_dig: {
      event: 'on_tool_used',
    },
  },
  {
    block: 'minecraft:quartz_ore',
    speed: 2,
    on_dig: {
      event: 'on_tool_used',
    },
  },
  {
    block: 'minecraft:netherrack',
    speed: 2,
    on_dig: {
      event: 'on_tool_used',
    },
  },
  {
    block: 'minecraft:basalt',
    speed: 2,
    on_dig: {
      event: 'on_tool_used',
    },
  },
  {
    block: 'minecraft:polished_basalt',
    speed: 2,
    on_dig: {
      event: 'on_tool_used',
    },
  },
  {
    block: 'minecraft:stonebrick',
    speed: 2,
    on_dig: {
      event: 'on_tool_used',
    },
  },
  {
    block: 'minecraft:warped_nylium',
    speed: 2,
    on_dig: {
      event: 'on_tool_used',
    },
  },
  {
    block: 'minecraft:crimson_nylium',
    speed: 2,
    on_dig: {
      event: 'on_tool_used',
    },
  },
  {
    block: 'minecraft:end_stone',
    speed: 2,
    on_dig: {
      event: 'on_tool_used',
    },
  },
  {
    block: 'minecraft:ender_chest',
    speed: 2,
    on_dig: {
      event: 'on_tool_used',
    },
  },
  {
    block: 'minecraft:quartz_block',
    speed: 2,
    on_dig: {
      event: 'on_tool_used',
    },
  },
  {
    block: 'minecraft:quartz_stairs',
    speed: 2,
    on_dig: {
      event: 'on_tool_used',
    },
  },
  {
    block: 'minecraft:quartz_bricks',
    speed: 2,
    on_dig: {
      event: 'on_tool_used',
    },
  },
  {
    block: 'minecraft:quartz_stairs',
    speed: 2,
    on_dig: {
      event: 'on_tool_used',
    },
  },
  {
    block: 'minecraft:nether_gold_ore',
    speed: 2,
    on_dig: {
      event: 'on_tool_used',
    },
  },
  {
    block: 'minecraft:furnace',
    speed: 2,
    on_dig: {
      event: 'on_tool_used',
    },
  },
  {
    block: 'minecraft:blast_furnace',
    speed: 2,
    on_dig: {
      event: 'on_tool_used',
    },
  },
  {
    block: 'minecraft:lit_furnace',
    speed: 2,
    on_dig: {
      event: 'on_tool_used',
    },
  },
  {
    block: 'minecraft:blast_furnace',
    speed: 2,
    on_dig: {
      event: 'on_tool_used',
    },
  },
  {
    block: 'minecraft:blackstone',
    speed: 2,
    on_dig: {
      event: 'on_tool_used',
    },
  },
];
const stone_destroy_speeds = JSON.parse(
  JSON.stringify([
    ...wood_destroy_speeds,
    {
      block: {
        tags: "q.any_tag('stone_pick_diggable', 'metal')",
      },
      speed: 2,
      on_dig: {
        event: 'on_tool_used',
      },
    },
    {
      block: 'minecraft:lapis_block',
      speed: 2,
      on_dig: {
        event: 'on_tool_used',
      },
    },
    {
      block: 'minecraft:copper_block',
      speed: 2,
      on_dig: {
        event: 'on_tool_used',
      },
    },
    {
      block: 'minecraft:iron_block',
      speed: 2,
      on_dig: {
        event: 'on_tool_used',
      },
    },
  ])
);
const iron_destroy_speeds = JSON.parse(
  JSON.stringify([
    ...stone_destroy_speeds,
    {
      block: {
        tags: "q.any_tag('iron_pick_diggable')",
      },
      speed: 2,
      on_dig: {
        event: 'on_tool_used',
      },
    },
  ])
);
const diamond_destroy_speeds = JSON.parse(
  JSON.stringify([
    ...iron_destroy_speeds,
    {
      block: {
        tags: "q.any_tag('diamond_pick_diggable')",
      },
      speed: 2,
      on_dig: {
        event: 'on_tool_used',
      },
    },
  ])
);
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
const material = [
  ...woods,
  'diamond',
  'golden',
  'iron',
  'netherite',
  'stone',
] as const;
type Material = (typeof material)[number];

const tools = [
  'axe',
  'hoe',
  'pickaxe',
  'shovel',
  'sword',
] as (keyof typeof toolsJson)[];

function getDurability(m: Material) {
  switch (m) {
    case 'stone':
      return 131;
    case 'iron':
      return 250;
    case 'golden':
      return 31;
    case 'diamond':
      return 1561;
    case 'netherite':
      return 2031;
    default:
      return 59;
  }
}
function getDamage(m: Material) {
  switch (m) {
    case 'stone':
      return 5;
    case 'iron':
      return 6;
    case 'diamond':
      return 7;
    case 'netherite':
      return 8;
    case 'golden':
    default:
      return 4;
  }
}

function getDigSpeeds(m: Material) {
  switch (m) {
    case 'stone':
      return stone_destroy_speeds;
    case 'iron':
      return iron_destroy_speeds;
    case 'diamond':
      return diamond_destroy_speeds;
    default:
      return wood_destroy_speeds;
  }
}

function add_tool(m: Material, s: Wood, t: keyof typeof toolsJson) {
  const name = `${m}_${s}_${t}`;
  const item = toolsJson[t];
  item['minecraft:item'].description.identifier = `${prefix}:${name}`;
  item['minecraft:item'].components['minecraft:icon'].texture = name;
  item['minecraft:item'].components['minecraft:durability'].max_durability =
    getDurability(m);
  item['minecraft:item'].components['minecraft:damage'] = getDamage(m);
  if (t === 'pickaxe')
    item['minecraft:item'].components['minecraft:digger'].destroy_speeds =
      getDigSpeeds(m);
  item['minecraft:item'].components['minecraft:fuel'] = woods.includes(
    m as Wood
  )
    ? fuel
    : (undefined as unknown as typeof fuel);
    if(m === 'diamond') (item as any)['minecraft:item'].components['tag:minecraft:transformable_items']={}
  const path = `./addon/BP/items/${t as string}/${m}/${s}.json`;
  const folder = path.split('/').slice(0, -1).join('/');
  Deno.mkdirSync(folder, { recursive: true });
  Deno.writeTextFileSync(path, JSON.stringify(item));
}
for (const m of material)
  for (const s of woods) for (const t of tools) add_tool(m, s, t);
