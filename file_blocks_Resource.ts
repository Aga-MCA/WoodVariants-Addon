import {
  createCanvas,
  loadImage,
  Image
} from 'https://deno.land/x/canvas@v1.4.1/mod.ts';
function panels(plank: Image){
  // rotate 90º
  const canvas = createCanvas(16, 16);
  const ctx = canvas.getContext('2d');
  ctx.translate(8, 8);
  ctx.rotate(Math.PI / 2);
  ctx.translate(-8, -8);
  ctx.drawImage(plank, 0, 0, 16, 16);
  return canvas.toBuffer();
}
const crafting_table__front = await loadImage('./textures/base/crafting_table/front.png');
const crafting_table__side = await loadImage('./textures/base/crafting_table/side.png');
const crafting_table__top = await loadImage('./textures/base/crafting_table/top.png');
function crafting_table(plank: Image){
  const canvas__front = createCanvas(16, 16);
  const ctx__front = canvas__front.getContext('2d');
  ctx__front.drawImage(plank, 0, 0, 16, 16);
  ctx__front.drawImage(crafting_table__front, 0, 0, 16, 16);
  const canvas__side = createCanvas(16, 16);
  const ctx__side = canvas__side.getContext('2d');
  ctx__side.drawImage(plank, 0, 0, 16, 16);
  ctx__side.drawImage(crafting_table__side, 0, 0, 16, 16);
  const canvas__top = createCanvas(16, 16);
  const ctx__top = canvas__top.getContext('2d');
  ctx__top.drawImage(plank, 0, 0, 16*16, 16*16);
  ctx__top.drawImage(crafting_table__top, 0, 0, 16, 16);
  return [
    canvas__front.toBuffer(),
    canvas__side.toBuffer(),
    canvas__top.toBuffer()
  ]
}

const bookshelf_side = await loadImage('./textures/base/bookshelf.png');
function bookshelf(plank: Image){
  const canvas = createCanvas(16, 16);
  const ctx = canvas.getContext('2d');
  ctx.drawImage(plank, 0, 0, 16, 16);
  ctx.drawImage(bookshelf_side, 0, 0, 16, 16);
  return canvas.toBuffer();
}

const textures = './addon/RP/textures/blocks'

const planks = './textures/base/planks/';
for(const wood of Deno.readDirSync(planks)){
  const plank = await loadImage(`${planks}${wood.name}`);
  Deno.mkdirSync(`${textures}/panels`,{recursive:true});
  Deno.writeFileSync(`${textures}/panels/${wood.name}`,panels(plank));

  const crafting_table__textures = crafting_table(plank);
  const w = wood.name.split('.')[0];
  Deno.mkdirSync(`${textures}/crafting_table/${w}`,{recursive:true});
  Deno.writeFileSync(`${textures}/crafting_table/${w}/front.png`,crafting_table__textures[0]);
  Deno.writeFileSync(`${textures}/crafting_table/${w}/side.png`,crafting_table__textures[1]);
  Deno.writeFileSync(`${textures}/crafting_table/${w}/top.png`,crafting_table__textures[2]);

  const bookshelf_side = bookshelf(plank);
  Deno.mkdirSync(`${textures}/bookshelf`,{recursive:true});
  Deno.writeFileSync(`${textures}/bookshelf/${wood.name}`,bookshelf_side);
}