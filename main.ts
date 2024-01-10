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
const prefix = 'aga_wood_variants'
const attach = './addon/RP/attachables/bow'
const bow = {
	"format_version": "1.10.0",
	"minecraft:attachable": {
		"description": {
			"identifier": "aga_wood_variants:acacia_bow",
			"materials": {
				"default": "entity_alphatest",
				"enchanted": "entity_alphatest_glint"
			},
			"textures": {
				"default": "textures/items/bow/acacia/0",
				"bow_pulling_0": "textures/items/bow/acacia/1",
				"bow_pulling_1": "textures/items/bow/acacia/2",
				"bow_pulling_2": "textures/items/bow/acacia/3",
				"enchanted": "textures/misc/enchanted_item_glint"
			},
			"geometry": {
				"default": "geometry.bow_standby",
				"bow_pulling_0": "geometry.bow_pulling_0",
				"bow_pulling_1": "geometry.bow_pulling_1",
				"bow_pulling_2": "geometry.bow_pulling_2"
			},
			"animations": {
				"wield": "animation.player.bow_custom.first_person",
				"thierd": "animation.player.bow_custom",
				"wield_first_person_pull": "animation.bow.wield_first_person_pull"
			},
			"scripts": {
				"animate": [
					{"wield": "c.is_first_person"},
					{"thierd": "!c.is_first_person"},
					{
						"wield_first_person_pull": "query.main_hand_item_use_duration > 0.0f && c.is_first_person"
					}
				]
			},
			"render_controllers": [ "controller.render.bow_custom" ]
		}
	}
}
const bp = {
  "format_version": "1.18.0",
  "minecraft:item": {
    "description": {
      "identifier": "aga_wood_variants:acacia_bow",
      "category": "equipment"
    },
    "components": {
      "minecraft:creative_category": {
        "parent": "itemGroup.name.equipment"
      },
      "minecraft:icon": { "texture": "acacia_bow_0" },
      "minecraft:shooter": {
        "max_draw_duration": 1,
        "charge_on_draw": false,
        "scale_power_by_draw_duration": true,
        "ammunition": [
          {
            "item": "arrow",
            "use_offhand": true,
            "search_inventory": true,
            "use_in_creative": true
          }
        ]
      },
      "minecraft:max_stack_size": 1,
      "minecraft:use_duration": 999999999999999,
      "minecraft:hand_equipped": true,
      "minecraft:enchantable": { "value": 15, "slot": "bow" }
    }
  }
}

for (const w of woods) {
  const obj = JSON.parse(JSON.stringify(bow));
  obj["minecraft:attachable"].description.identifier = `${prefix}:${w}_bow`
  obj["minecraft:attachable"].description.textures.default = `textures/items/bow/${w}/0`
  obj["minecraft:attachable"].description.textures.bow_pulling_0 = `textures/items/bow/${w}/1`
  obj["minecraft:attachable"].description.textures.bow_pulling_1 = `textures/items/bow/${w}/2`
  obj["minecraft:attachable"].description.textures.bow_pulling_2 = `textures/items/bow/${w}/3`
  Deno.writeTextFileSync(
    `./addon/RP/attachables/bow/${w}.json`,
    JSON.stringify(obj)
  );
  const BP = JSON.parse(JSON.stringify(bp));
  BP["minecraft:item"].description.identifier = `${prefix}:${w}_bow`
  BP["minecraft:item"].components["minecraft:icon"].texture = `${w}_bow_0`
  Deno.writeTextFileSync(
    `./addon/BP/items/bow/${w}.json`,
    JSON.stringify(BP)
  );
}