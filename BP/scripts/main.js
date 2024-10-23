// addon/main.ts
import { world } from "@minecraft/server";
function emptyEntityContainer(entity) {
  const container = entity.getComponent("minecraft:inventory")?.container;
  if (container) {
    for (let i = 0; i <= container.size; i++) {
      try {
        const item = container.getItem(i);
        if (item) {
          entity.dimension.spawnItem(item, entity.location);
          container.setItem(i);
        }
      } catch {
        break;
      }
    }
  }
  return entity;
}
var BlockWoodVariantsChestComponent = class {
  onPlace(event) {
    const entity = event.dimension.spawnEntity("aga_wood_variants:wood_chest", { x: event.block.x + 0.5, y: event.block.y, z: event.block.z + 0.5 });
    entity.nameTag = `tile.${event.block.typeId}.name`;
    entity.addTag("aga_waila:ignoreRaycast");
  }
  onPlayerDestroy(event) {
    event.dimension.getEntitiesAtBlockLocation(event.block.location).forEach((entity) => {
      if (entity.typeId === "aga_wood_variants:wood_chest")
        emptyEntityContainer(entity).remove();
    });
  }
};
world.beforeEvents.worldInitialize.subscribe(({ blockComponentRegistry }) => {
  blockComponentRegistry.registerCustomComponent("aga_wood_variants:chest", new BlockWoodVariantsChestComponent());
});
