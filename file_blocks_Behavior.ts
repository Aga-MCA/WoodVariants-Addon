const prefix = 'aga_wood_variants';
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
const colors = {
  acacia: [186, 99, 55],
  bamboo: [183, 171, 73],
  dark_oak: [79, 50, 24],
  birch: [215, 193, 133],
  cherry: [231, 194, 187],
  crimson: [127, 55, 85],
  jungle: [184, 135, 100],
  mangrove: [127, 66, 52],
  oak: [184, 148, 95],
  spruce: [130, 97, 58],
  warped: [54, 132, 131],
} as Record<Wood, number[]>;
const bookshelf = {
  format_version: '1.20.30',
  'minecraft:block': {
    description: {
      identifier: '',
      register_to_creative_menu: true,
      menu_category: {
        category: 'items',
      },
    },
    components: {
      'minecraft:loot': 'loot_tables/blocks/bookshelf.json',
      'minecraft:map_color': '#ba6337',
      'tag:minecraft:wood': {},
      'tag:wood': {},
      'minecraft:flammable': true,
      'minecraft:destructible_by_mining': {
        seconds_to_destroy: 2,
      },
    },
  },
};
const crafting_table = {
  format_version: '1.20.30',
  'minecraft:block': {
    description: {
      identifier: 'aga_wood_variants:acacia_crafting_table',
      register_to_creative_menu: true,
      menu_category: {
        category: 'items',
      },
    },
    components: {
      'minecraft:map_color': '#ba6337',
      'tag:minecraft:wood': {},
      'tag:wood': {},
      'minecraft:destructible_by_mining': {
        seconds_to_destroy: 2,
      },
      'minecraft:crafting_table': {
        crafting_tags: ['crafting_table'],
        table_name: 'hudScreen.tooltip.crafting',
      },
    },
  },
};
const panels = {
  format_version: '1.20.30',
  'minecraft:block': {
    description: {
      identifier: '',
      register_to_creative_menu: true,
      menu_category: {
        category: 'construction',
        group: 'itemGroup.name.planks',
      },
    },
    components: {
      'minecraft:map_color': '#ba6337',
      'tag:minecraft:wood': {},
      'tag:wood': {},
      'minecraft:destructible_by_mining': {
        seconds_to_destroy: 2,
      },
      'minecraft:flammable': true,
      'minecraft:geometry': 'geometry.panels',
      'minecraft:material_instances': {
        '*': { texture: '', render_method: 'opaque' },
      },
    },
  },
};
const composter = {
  format_version: '1.20.30',
  'minecraft:block': {
    description: {
      identifier: '',
      register_to_creative_menu: true,
      menu_category: {
        category: 'items',
      },
      states: {
        'aga_wood_variants:composter_filled_level': [0, 1, 2, 3, 4, 5, 6, 7, 8],
      },
    },
    components: {
      'minecraft:map_color': '#ba6337',
      'tag:minecraft:wood': {},
      'tag:wood': {},
      'minecraft:flammable': true,
      'minecraft:destructible_by_mining': {
        seconds_to_destroy: 2,
      },
      'minecraft:geometry': {
        identifier: 'geometry.composter',
        bone_visibility: {
          bone_1: false,
          bone_2: false,
          bone_3: false,
          bone_4: false,
          bone_5: false,
          bone_6: false,
          bone_7: false,
        },
      },
      'minecraft:on_interact': {
        event: 'add',
      },
      'minecraft:material_instances': {
        compost: {
          texture: 'compost',
          render_method: 'opaque',
        },
        side: {
          texture: 'acacia_composter_side',
          render_method: 'opaque',
        },
        up: {
          texture: 'acacia_composter_top',
          render_method: 'opaque',
        },
        down: {
          texture: 'acacia_composter_bottom',
          render_method: 'opaque',
        },
        north: 'side',
        south: 'side',
        west: 'side',
        east: 'side',
      },
    },
    permutations: [
      {
        condition:
          "q.block_state('aga_wood_variants:composter_filled_level') == 1",
        components: {
          'minecraft:geometry': {
            identifier: 'geometry.composter',
            bone_visibility: {
              bone_1: true,
              bone_2: false,
              bone_3: false,
              bone_4: false,
              bone_5: false,
              bone_6: false,
              bone_7: false,
            },
          },
        },
      },
      {
        condition:
          "q.block_state('aga_wood_variants:composter_filled_level') == 2",
        components: {
          'minecraft:geometry': {
            identifier: 'geometry.composter',
            bone_visibility: {
              bone_1: false,
              bone_2: true,
              bone_3: false,
              bone_4: false,
              bone_5: false,
              bone_6: false,
              bone_7: false,
            },
          },
        },
      },
      {
        condition:
          "q.block_state('aga_wood_variants:composter_filled_level') == 3",
        components: {
          'minecraft:geometry': {
            identifier: 'geometry.composter',
            bone_visibility: {
              bone_1: false,
              bone_2: false,
              bone_3: true,
              bone_4: false,
              bone_5: false,
              bone_6: false,
              bone_7: false,
            },
          },
        },
      },
      {
        condition:
          "q.block_state('aga_wood_variants:composter_filled_level') == 4",
        components: {
          'minecraft:geometry': {
            identifier: 'geometry.composter',
            bone_visibility: {
              bone_1: false,
              bone_2: false,
              bone_3: false,
              bone_4: true,
              bone_5: false,
              bone_6: false,
              bone_7: false,
            },
          },
        },
      },
      {
        condition:
          "q.block_state('aga_wood_variants:composter_filled_level') == 5",
        components: {
          'minecraft:geometry': {
            identifier: 'geometry.composter',
            bone_visibility: {
              bone_1: false,
              bone_2: false,
              bone_3: false,
              bone_4: false,
              bone_5: true,
              bone_6: false,
              bone_7: false,
            },
          },
        },
      },
      {
        condition:
          "q.block_state('aga_wood_variants:composter_filled_level') == 6",
        components: {
          'minecraft:geometry': {
            identifier: 'geometry.composter',
            bone_visibility: {
              bone_1: false,
              bone_2: false,
              bone_3: false,
              bone_4: false,
              bone_5: false,
              bone_6: true,
              bone_7: false,
            },
          },
        },
      },
      {
        condition:
          "q.block_state('aga_wood_variants:composter_filled_level') == 7",
        components: {
          'minecraft:geometry': {
            identifier: 'geometry.composter',
            bone_visibility: {
              bone_1: false,
              bone_2: false,
              bone_3: false,
              bone_4: false,
              bone_5: false,
              bone_6: false,
              bone_7: true,
            },
          },
          'minecraft:on_interact': {
            event: 'none',
          },
          'minecraft:queued_ticking': {
            on_tick: {
              event: 'ready',
            },
            interval_range: [20, 20],
          },
        },
      },
      {
        condition:
          "q.block_state('aga_wood_variants:composter_filled_level') == 8",
        components: {
          'minecraft:geometry': {
            identifier: 'geometry.composter',
            bone_visibility: {
              bone_1: false,
              bone_2: false,
              bone_3: false,
              bone_4: false,
              bone_5: false,
              bone_6: false,
              bone_7: true,
            },
          },
          'minecraft:material_instances': {
            compost: {
              texture: 'compost_ready',
              render_method: 'opaque',
            },
            side: {
              texture: 'acacia_composter_side',
              render_method: 'opaque',
            },
            up: {
              texture: 'acacia_composter_top',
              render_method: 'opaque',
            },
            down: {
              texture: 'acacia_composter_bottom',
              render_method: 'opaque',
            },
            north: 'side',
            south: 'side',
            west: 'side',
            east: 'side',
          },
          'minecraft:on_interact': {
            event: 'end',
          },
          'minecraft:on_player_destroyed': {
            event: 'end_destroy',
          },
        },
      },
    ],
    events: {
      add: {
        sequence: [
          {
            condition:
              "q.get_equipped_item_name('main_hand') == 'beetroot_seeds' || q.get_equipped_item_name('main_hand') == 'dried_kelp' || q.get_equipped_item_name('main_hand') == 'glow_berries' || q.get_equipped_item_name('main_hand') == 'grass' || q.get_equipped_item_name('main_hand') == 'hanging_roots' || q.get_equipped_item_name('main_hand') == 'mangrove_roots' || q.get_equipped_item_name('main_hand') == 'kelp' || q.get_equipped_item_name('main_hand') == 'leaves' || q.get_equipped_item_name('main_hand') == 'leaves2' || q.get_equipped_item_name('main_hand') == 'mangrove_leaves' || q.get_equipped_item_name('main_hand') == 'cherry_leaves' || q.get_equipped_item_name('main_hand') == 'azalea_leaves' || q.get_equipped_item_name('main_hand') == 'melon_seeds' || q.get_equipped_item_name('main_hand') == 'moss_carpet' || q.get_equipped_item_name('main_hand') == 'pink_petals' || q.get_equipped_item_name('main_hand') == 'pitcher_pod' || q.get_equipped_item_name('main_hand') == 'pumpkin_seeds' || q.get_equipped_item_name('main_hand') == 'sapling' || q.get_equipped_item_name('main_hand') == 'cherry_sapling' || q.get_equipped_item_name('main_hand') == 'seagrass' || q.get_equipped_item_name('main_hand') == 'small_dripleaf_block' || q.get_equipped_item_name('main_hand') == 'sweet_berries' || q.get_equipped_item_name('main_hand') == 'torchflower_seeds' || q.get_equipped_item_name('main_hand') == 'wheat_seeds'",
            trigger: {
              event: 'porcent_30',
            },
          },
          {
            condition:
              "q.get_equipped_item_name('main_hand') == 'cactus' || q.get_equipped_item_name('main_hand') == 'dried_kelp_block' || q.get_equipped_item_name('main_hand') == 'azalea_leaves_flowered' || q.get_equipped_item_name('main_hand') == 'glow_lichen' || q.get_equipped_item_name('main_hand') == 'melon_slice' || q.get_equipped_item_name('main_hand') == 'nether_sprouts' || q.get_equipped_item_name('main_hand') == 'sugar_cane' || q.get_equipped_item_name('main_hand') == 'tallgrass' || q.get_equipped_item_name('main_hand') == 'twisting_vines' || q.get_equipped_item_name('main_hand') == 'vine' || q.get_equipped_item_name('main_hand') == 'weeping_vines'",
            trigger: {
              event: 'porcent_50',
            },
          },
          {
            condition:
              "q.get_equipped_item_name('main_hand') == 'apple' || q.get_equipped_item_name('main_hand') == 'azalea' || q.get_equipped_item_name('main_hand') == 'beetroot' || q.get_equipped_item_name('main_hand') == 'big_dripleaf' || q.get_equipped_item_name('main_hand') == 'cocoa_beans' || q.get_equipped_item_name('main_hand') == 'fern' || q.get_equipped_item_name('main_hand') == 'red_flower' || q.get_equipped_item_name('main_hand') == 'yellow_flower' || q.get_equipped_item_name('main_hand') == 'crimson_fungus' || q.get_equipped_item_name('main_hand') == 'warped_fungus' || q.get_equipped_item_name('main_hand') == 'waterlily' || q.get_equipped_item_name('main_hand') == 'melon_block' || q.get_equipped_item_name('main_hand') == 'moss_block' || q.get_equipped_item_name('main_hand') == 'brown_mushroom' || q.get_equipped_item_name('main_hand') == 'red_mushroom' || q.get_equipped_item_name('main_hand') == 'mushroom_stem' || q.get_equipped_item_name('main_hand') == 'nether_wart' || q.get_equipped_item_name('main_hand') == 'potato' || q.get_equipped_item_name('main_hand') == 'pumpkin' || q.get_equipped_item_name('main_hand') == 'carved_pumpkin' || q.get_equipped_item_name('main_hand') == 'crimson_roots' || q.get_equipped_item_name('main_hand') == 'warped_roots' || q.get_equipped_item_name('main_hand') == 'sea_pickle' || q.get_equipped_item_name('main_hand') == 'shroomlight' || q.get_equipped_item_name('main_hand') == 'spore_blossom' || q.get_equipped_item_name('main_hand') == 'wheat'",
            trigger: {
              event: 'porcent_65',
            },
          },
          {
            condition:
              "q.get_equipped_item_name('main_hand') == 'baked_potato' || q.get_equipped_item_name('main_hand') == 'bread' || q.get_equipped_item_name('main_hand') == 'cookie' || q.get_equipped_item_name('main_hand') == 'flowering_azalea' || q.get_equipped_item_name('main_hand') == 'hay_block' || q.get_equipped_item_name('main_hand') == 'brown_mushroom_block' || q.get_equipped_item_name('main_hand') == 'red_mushroom_block' || q.get_equipped_item_name('main_hand') == 'nether_wart_block' || q.get_equipped_item_name('main_hand') == 'warped_wart_block' || q.get_equipped_item_name('main_hand') == 'pitcher_plant' || q.get_equipped_item_name('main_hand') == 'torchflower'",
            trigger: {
              event: 'porcent_85',
            },
          },
          {
            condition:
              "q.get_equipped_item_name('main_hand') == 'cake' || q.get_equipped_item_name('main_hand') == 'pumpkin_pie'",
            trigger: {
              event: 'porcent_100',
            },
          },
        ],
      },
      porcent_30: {
        randomize: [
          {
            weight: 3,
            set_block_state: {
              'aga_wood_variants:composter_filled_level':
                "q.block_state('aga_wood_variants:composter_filled_level') + 1",
            },
            trigger: {
              event: 'use',
            },
          },
          {
            weight: 7,
            trigger: {
              event: 'use',
            },
          },
        ],
      },
      porcent_50: {
        randomize: [
          {
            weight: 1,
            set_block_state: {
              'aga_wood_variants:composter_filled_level':
                "q.block_state('aga_wood_variants:composter_filled_level') + 1",
            },
            trigger: {
              event: 'use',
            },
          },
          {
            weight: 1,
            trigger: {
              event: 'use',
            },
          },
        ],
      },
      porcent_65: {
        randomize: [
          {
            weight: 13,
            set_block_state: {
              'aga_wood_variants:composter_filled_level':
                "q.block_state('aga_wood_variants:composter_filled_level') + 1",
            },
            trigger: {
              event: 'use',
            },
          },
          {
            weight: 7,
            trigger: {
              event: 'use',
            },
          },
        ],
      },
      porcent_85: {
        randomize: [
          {
            weight: 17,
            set_block_state: {
              'aga_wood_variants:composter_filled_level':
                "q.block_state('aga_wood_variants:composter_filled_level') + 1",
            },
            trigger: {
              event: 'use',
            },
          },
          {
            weight: 3,
            trigger: {
              event: 'use',
            },
          },
        ],
      },
      porcent_100: {
        set_block_state: {
          'aga_wood_variants:composter_filled_level':
            "q.block_state('aga_wood_variants:composter_filled_level') + 1",
        },
        trigger: {
          event: 'use',
        },
      },
      use: {
        decrement_stack: {},
        play_sound: {
          sound: 'block.composter.fill_success',
        },
        run_command: {
          command: 'particle minecraft:crop_growth_emitter ~ ~ ~',
        },
      },
      ready: {
        set_block_state: {
          'aga_wood_variants:composter_filled_level': 8,
        },
      },
      end: {
        set_block_state: {
          'aga_wood_variants:composter_filled_level': 0,
        },
        spawn_loot: {
          table: 'loot_tables/blocks/bone_meal.json',
        },
      },
      end_destroy: {
        spawn_loot: {
          table: 'loot_tables/blocks/bone_meal.json',
        },
      },
    },
  },
};
const chest = {
  format_version: '1.20.30',
  'minecraft:block': {
    description: {
      identifier: 'aga_wood_variants:acacia_chest',
      states: { 'aga:face': [0, 1, 2, 3, 4, 5] },
      register_to_creative_menu: true,
      menu_category: {
        category: 'items',
        group: 'itemGroup.name.chest',
      },
    },
    components: {
      'minecraft:map_color': '#ba6337',
      'tag:minecraft:wood': {},
      'tag:wood': {},
      'minecraft:geometry': 'geometry.wood_chest',
      'minecraft:material_instances': {
        '*': { texture: 'acacia_chest', render_method: 'opaque' },
      },
      'minecraft:collision_box': {
        origin: [-7.5, 0, -7.5],
        size: [15, 15, 15],
      },
      'minecraft:selection_box': {
        origin: [-7.5, 0, -7.5],
        size: [15, 10, 15],
      },
      'minecraft:on_placed': {
        event: 'place',
      },
      'minecraft:on_player_placing': {
        event: 'place',
      },
    },
    events: {
      place: {
        sequence: [
          {
            run_command: {
              command:
                'summon aga_wood_variants:wood_chest tile.aga_wood_variants:acacia_chest.name ~~~',
            },
          },
          {
            set_block_state: { 'aga:face': 'query.cardinal_facing_2d' },
          },
        ],
      },
    },
    permutations: [
      {
        condition: "q.block_state('aga:face')==3",
        components: {
          'minecraft:transformation': {
            rotation: [0, 180, 0],
          },
        },
      },
      {
        condition: "q.block_state('aga:face')==4",
        components: {
          'minecraft:transformation': {
            rotation: [0, 90, 0],
          },
        },
      },
      {
        condition: "q.block_state('aga:face')==5",
        components: {
          'minecraft:transformation': {
            rotation: [0, 270, 0],
          },
        },
      },
    ],
  },
};
const panels_slab = {
  format_version: '1.20.30',
  'minecraft:block': {
    description: {
      identifier: '',
      states: {
        'aga:double_bit': [false, true],
      },
      menu_category: {
        category: 'construction',
        group: 'itemGroup.name.slab',
      },
      traits: {
        'minecraft:placement_position': {
          enabled_states: ['minecraft:vertical_half'],
        },
      },
    },
    components: {
      'minecraft:flammable': true,
      'minecraft:map_color': '#52221D',
      'minecraft:destructible_by_mining': {
        seconds_to_destroy: 2,
      },
      'tag:wood': {},
      'tag:minecraft:wood': {},
      'minecraft:material_instances': {
        '*': {
          texture: 'acacia_planks',
          render_method: 'blend',
        },
      },
    },
    permutations: [
      {
        condition:
          "!query.block_state('aga:double_bit') && query.block_state('minecraft:vertical_half') == 'bottom'",
        components: {
          'minecraft:geometry': {
            identifier: 'geometry.panels_slab',
            bone_visibility: {
              bottom: true,
              top: false,
            },
          },
          'minecraft:light_dampening': 0,
          'minecraft:on_interact': {
            event: 'double',
            target: 'self',
            condition: '',
          },
          'minecraft:collision_box': {
            origin: [-8, 0, -8],
            size: [16, 8, 16],
          },
          'minecraft:selection_box': {
            origin: [-8, 0, -8],
            size: [16, 8, 16],
          },
        },
      },
      {
        condition:
          "!query.block_state('aga:double_bit') && query.block_state('minecraft:vertical_half')== 'top'",
        components: {
          'minecraft:geometry': {
            identifier: 'geometry.panels_slab',
            bone_visibility: {
              bottom: false,
              top: true,
            },
          },
          'minecraft:light_dampening': 0,
          'minecraft:on_interact': {
            event: 'double',
            target: 'self',
            condition: '',
          },
          'minecraft:collision_box': {
            origin: [-8, 8, -8],
            size: [16, 8, 16],
          },
          'minecraft:selection_box': {
            origin: [-8, 8, -8],
            size: [16, 8, 16],
          },
        },
      },
      {
        condition: "query.block_state('aga:double_bit') == true",
        components: {
          'minecraft:on_player_destroyed': {
            event: 'double_slab_loot',
          },
          'minecraft:geometry': 'geometry.panels',
          'minecraft:light_dampening': 15,
        },
      },
    ],
    events: {
      double_slab_loot: {
        spawn_loot: {
          table: '',
        },
      },
      double: {
        set_block_state: {
          'aga:double_bit': true,
        },
        decrement_stack: {},
      },
    },
  },
};
const panels_slab_loot = {
  pools: [
    {
      rolls: 1,
      entries: [
        {
          type: 'item',
          name: '',
          weight: 1,
          functions: [
            {
              function: 'set_count',
              count: 1,
            },
          ],
        },
      ],
    },
  ],
};

const blocks = './addon/BP/blocks/';
function create_bookshelf(w: Wood) {
  const color = colors[w] || [0, 0, 0];
  const block = JSON.parse(JSON.stringify(bookshelf)) as typeof bookshelf;
  block['minecraft:block'].description.identifier = `${prefix}:${w}_bookshelf`;
  block['minecraft:block'].components['minecraft:map_color'] = `#${color
    .map(c => c.toString(16).padStart(2, '0'))
    .join('')}`;
  Deno.mkdirSync(`${blocks}bookshelf`, { recursive: true });
  Deno.writeTextFileSync(`${blocks}bookshelf/${w}.json`, JSON.stringify(block));
}
function create_crafting_table(w: Wood) {
  const color = colors[w] || [0, 0, 0];
  const block = JSON.parse(
    JSON.stringify(crafting_table)
  ) as typeof crafting_table;
  block[
    'minecraft:block'
  ].description.identifier = `${prefix}:${w}_crafting_table`;
  block['minecraft:block'].components['minecraft:map_color'] = `#${color
    .map(c => c.toString(16).padStart(2, '0'))
    .join('')}`;
  Deno.mkdirSync(`${blocks}/crafting_table`, { recursive: true });
  Deno.writeTextFileSync(
    `${blocks}/crafting_table/${w}.json`,
    JSON.stringify(block)
  );
}
function create_panels(w: Wood) {
  const color = colors[w] || [0, 0, 0];
  const block = JSON.parse(JSON.stringify(panels)) as typeof panels;
  block['minecraft:block'].description.identifier = `${prefix}:${w}_panels`;
  block['minecraft:block'].components['minecraft:map_color'] = `#${color
    .map(c => c.toString(16).padStart(2, '0'))
    .join('')}`;
  block['minecraft:block'].components['minecraft:material_instances'][
    '*'
  ].texture = `${w}_planks`;
  Deno.mkdirSync(`${blocks}/panels`, { recursive: true });
  Deno.writeTextFileSync(`${blocks}/panels/${w}.json`, JSON.stringify(block));
}
function create_composter(w: Wood) {
  const color = colors[w] || [0, 0, 0];
  const block = JSON.parse(JSON.stringify(composter)) as typeof composter;
  block['minecraft:block'].description.identifier = `${prefix}:${w}_composter`;
  block['minecraft:block'].components['minecraft:map_color'] = `#${color
    .map(c => c.toString(16).padStart(2, '0'))
    .join('')}`;
  const block_m =
    block['minecraft:block'].components['minecraft:material_instances'];
  block['minecraft:block'].components[
    'minecraft:material_instances'
  ].side.texture = `${w}_composter_side`;
  block['minecraft:block'].components[
    'minecraft:material_instances'
  ].up.texture = `${w}_composter_top`;
  block['minecraft:block'].components[
    'minecraft:material_instances'
  ].down.texture = `${w}_composter_bottom`;
  const permulation = block['minecraft:block'].permutations[7] as {
    components: { 'minecraft:material_instances': typeof block_m };
  };
  permulation.components[
    'minecraft:material_instances'
  ].side.texture = `${w}_composter_side`;
  permulation.components[
    'minecraft:material_instances'
  ].up.texture = `${w}_composter_top`;
  permulation.components[
    'minecraft:material_instances'
  ].down.texture = `${w}_composter_bottom`;
  Deno.mkdirSync(`${blocks}/composter`, { recursive: true });
  Deno.writeTextFileSync(
    `${blocks}/composter/${w}.json`,
    JSON.stringify(block)
  );
}
function create_chest(w: Wood) {
  const color = colors[w] || [0, 0, 0];
  const block = JSON.parse(JSON.stringify(chest)) as typeof chest;
  const id = `${prefix}:${w}_chest`;
  block['minecraft:block'].description.identifier = id;
  block['minecraft:block'].components['minecraft:map_color'] = `#${color
    .map(c => c.toString(16).padStart(2, '0'))
    .join('')}`;
  block['minecraft:block'].components['minecraft:material_instances'][
    '*'
  ].texture = `${w}_chest`;
  (
    block['minecraft:block'].events.place.sequence[0] as any
  ).run_command.command = `summon aga_wood_variants:wood_chest tile.${id}.name ~~~`;
  Deno.mkdirSync(`${blocks}/chest`, { recursive: true });
  Deno.writeTextFileSync(`${blocks}/chest/${w}.json`, JSON.stringify(block));
}

function create_panels_slab(w: Wood) {
  const color = colors[w] || [0, 0, 0];
  const block = JSON.parse(JSON.stringify(panels_slab)) as typeof panels_slab;
  const id = `${prefix}:${w}_panels_slab`;
  block['minecraft:block'].description.identifier = id;
  block['minecraft:block'].components['minecraft:map_color'] = `#${color
    .map(c => c.toString(16).padStart(2, '0'))
    .join('')}`;
  block['minecraft:block'].components['minecraft:material_instances'][
    '*'
  ].texture = `${w}_planks`;
  block['minecraft:block'].permutations[0].components[
    'minecraft:on_interact'
  ]!.condition = `query.is_item_name_any('slot.weapon.mainhand',0,'${id}')&&query.block_face==1`;
  block['minecraft:block'].permutations[1].components[
    'minecraft:on_interact'
  ]!.condition = `query.is_item_name_any('slot.weapon.mainhand',0,'${id}')&&query.block_face==0`;
  block[
    'minecraft:block'
  ].events.double_slab_loot.spawn_loot.table = `loot_tables/blocks/panels_slab/${w}.json`;

  Deno.mkdirSync(`${blocks}/panels_slab`, { recursive: true });
  Deno.writeTextFileSync(
    `${blocks}/panels_slab/${w}.json`,
    JSON.stringify(block)
  );

  const loot = JSON.parse(
    JSON.stringify(panels_slab_loot)
  ) as typeof panels_slab_loot;
  loot.pools[0].entries[0].name = `${id}`;
  Deno.mkdirSync(`./addon/BP/loot_tables/blocks/panels_slab/`, {
    recursive: true,
  });
  Deno.writeTextFileSync(
    `./addon/BP/loot_tables/blocks/panels_slab/${w}.json`,
    JSON.stringify(loot)
  );
}
for (const w of woods) {
  create_chest(w);
  create_panels(w);
  create_bookshelf(w);
  create_composter(w);
  create_crafting_table(w);
  create_panels_slab(w);
}
