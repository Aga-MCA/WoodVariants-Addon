import {
  createCanvas,
  loadImage,
} from 'https://deno.land/x/canvas@v1.4.1/mod.ts';

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
const material = ['diamond', 'golden', 'iron', 'netherite', 'stone', ...woods];

const tools = ['axe', 'hoe', 'pickaxe', 'shovel', 'sword'];

const __dirname = Deno.cwd();
async function file(m: string, w: string, t: string) {
  const canvas = createCanvas(16, 16);
  const ctx = canvas.getContext('2d');
  const tool = await loadImage(
    `${__dirname}/${t}/${woods.includes(m) ? `wood/${m}` : m}.png`
  );
  const stick = await loadImage(
    `${__dirname}/stick/${t}/${m == 'netherite' ? `netherite/${w}` : w}.png`
  );

  ctx.drawImage(stick, 0, 0, 16, 16);
  ctx.drawImage(tool, 0, 0, 16, 16);

  const buf = canvas.toBuffer();
  writeFile(`${__dirname}/out/${t}/${m}/${w}.png`, buf);
}
function mkdir(path: string) {
  Deno.mkdirSync(path, { recursive: true });
}
function writeFile(path: string, buf:Uint8Array){
  const folder = path.split('/').slice(0, -1).join('/');
  mkdir(folder);
  Deno.writeFileSync(path, buf);
  console.log(`${path} created`);
}
for (const m of material)
  for (const w of woods) for (const t of tools) file(m, w, t);
