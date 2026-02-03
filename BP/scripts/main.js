// © 2025 AdrianCraft — MIT License.
// @ts-check
import * as minecraft from '@minecraft/server';
/**@param {minecraft.Player}player*/
function decrementStack(player) {
	if (player.getGameMode() === minecraft.GameMode.Creative) return;
	const container = player.getComponent('minecraft:inventory')?.container;
	if (!container) return;
	const slot = player.selectedSlotIndex,
		item = container?.getItem(slot);
	if (!item) return;
	item.amount > 1 ? (item.amount--, container.setItem(slot, item)) : container.setItem(slot);
}
/**@type {'composter_fill_level'}*/
const COMPOSTER_FILLED_LEVEL = /**@type {any}*/ ('aga_wood_variants:composter_filled_level');
/**@param {minecraft.ItemStack|undefined}item*/
function compostableChance(item) {
	if (!item) return 0;
	const compostable = item.getComponent('minecraft:compostable');
	if (compostable?.isValid) return compostable.compostingChance / 100;
	switch (item.typeId) {
		case 'minecraft:pumpkin_pie':
		case 'minecraft:cake':
			return 1;
		case 'minecraft:baked_potato':
		case 'minecraft:bread':
		case 'minecraft:cookie':
		case 'minecraft:flowering_azalea':
		case 'minecraft:hay_block':
		case 'minecraft:brown_mushroom_block':
		case 'minecraft:red_mushroom_block':
		case 'minecraft:nether_wart_block':
		case 'minecraft:warped_wart_block':
		case 'minecraft:pitcher_plant':
		case 'minecraft:torchflower':
			return 0.85;
		case 'minecraft:apple':
		case 'minecraft:azalea':
		case 'minecraft:beetroot':
		case 'minecraft:big_dripleaf':
		case 'minecraft:cocoa_beans':
		case 'minecraft:fern':
		case 'minecraft:red_flower':
		case 'minecraft:yellow_flower':
		case 'minecraft:crimson_fungus':
		case 'minecraft:warped_fungus':
		case 'minecraft:waterlily':
		case 'minecraft:melon_block':
		case 'minecraft:moss_block':
		case 'minecraft:brown_mushroom':
		case 'minecraft:red_mushroom':
		case 'minecraft:mushroom_stem':
		case 'minecraft:nether_wart':
		case 'minecraft:potato':
		case 'minecraft:pumpkin':
		case 'minecraft:carved_pumpkin':
		case 'minecraft:crimson_roots':
		case 'minecraft:warped_roots':
		case 'minecraft:sea_pickle':
		case 'minecraft:shroomlight':
		case 'minecraft:spore_blossom':
		case 'minecraft:wheat':
			return 0.65;
		case 'minecraft:cactus':
		case 'minecraft:dried_kelp_block':
		case 'minecraft:azalea_leaves_flowered':
		case 'minecraft:glow_lichen':
		case 'minecraft:melon_slice':
		case 'minecraft:nether_sprouts':
		case 'minecraft:sugar_cane':
		case 'minecraft:tallgrass':
		case 'minecraft:twisting_vines':
		case 'minecraft:vine':
		case 'minecraft:weeping_vines':
			return 0.5;
		case 'minecraft:beetroot_seeds':
		case 'minecraft:dried_kelp':
		case 'minecraft:glow_berries':
		case 'minecraft:grass':
		case 'minecraft:grass_block':
		case 'minecraft:hanging_roots':
		case 'minecraft:mangrove_roots':
		case 'minecraft:kelp':
		case 'minecraft:leaves':
		case 'minecraft:leaves2':
		case 'minecraft:mangrove_leaves':
		case 'minecraft:cherry_leaves':
		case 'minecraft:azalea_leaves':
		case 'minecraft:melon_seeds':
		case 'minecraft:moss_carpet':
		case 'minecraft:pink_petals':
		case 'minecraft:pitcher_pod':
		case 'minecraft:pumpkin_seeds':
		case 'minecraft:sapling':
		case 'minecraft:cherry_sapling':
		case 'minecraft:seagrass':
		case 'minecraft:small_dripleaf_block':
		case 'minecraft:sweet_berries':
		case 'minecraft:torchflower_seeds':
		case 'minecraft:wheat_seeds':
			return 0.3;
		default:
			return 0;
	}
}
/**@param {minecraft.Block}block*/
function destroyComposter(block, isFilled = false) {
	const item = new minecraft.ItemStack('minecraft:bone_meal', 1);
	block.dimension.spawnItem(item, block.location);
	if (isFilled) block.setPermutation(block.permutation.withState(COMPOSTER_FILLED_LEVEL, 0));
}
/**@param {minecraft.BlockComponentPlayerInteractEvent}event*/
function incrementLevel(event, isFilled = false) {
	if (event.player) decrementStack(event.player);
	event.dimension.playSound('block.composter.fill' + (isFilled ? '_success' : ''), event.block.location);
	const location = event.block.center();
	event.dimension.runCommand(`particle minecraft:crop_growth_emitter ${location.x} ${location.y} ${location.z}`);
}
class ComposterComponent {
	/**@param {minecraft.BlockComponentPlayerBreakEvent}event*/
	onPlayerBreak(event) {
		if ((event.brokenBlockPermutation.getState(COMPOSTER_FILLED_LEVEL) || 0) >= 8) destroyComposter(event.block, true);
	}
	/**@param {minecraft.BlockComponentPlayerInteractEvent}event*/
	onPlayerInteract(event) {
		const level = event.block.permutation.getState(COMPOSTER_FILLED_LEVEL);
		if (
			typeof level != 'number' ||
			(level === 8 && (destroyComposter(event.block), event.dimension.playSound('block.composter.empty', event.block.location)), level >= 7)
		)
			return;
		const chance = compostableChance(event.player?.getComponent('minecraft:equippable')?.getEquipment(minecraft.EquipmentSlot.Mainhand));
		if (!chance) return;
		const isGrowed = Math.random() <= chance;
		if (isGrowed) {
			const currentLevel = level + 1;
			currentLevel < 7
				? event.block.setPermutation(event.block.permutation.withState(COMPOSTER_FILLED_LEVEL, currentLevel))
				: currentLevel === 7 &&
					(event.block.setPermutation(event.block.permutation.withState(COMPOSTER_FILLED_LEVEL, 7)),
					minecraft.system.runTimeout(() => {
						(event.block.setPermutation(event.block.permutation.withState(COMPOSTER_FILLED_LEVEL, 8)),
							event.dimension.playSound('block.composter.ready', event.block.location));
					}, 20));
		}
		incrementLevel(event, isGrowed);
	}
}
minecraft.system.beforeEvents.startup.subscribe(({ blockComponentRegistry }) =>
	blockComponentRegistry.registerCustomComponent('aga:composter', new ComposterComponent()),
);
