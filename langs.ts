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
const material = [
  ...woods,
  'diamond',
  'golden',
  'iron',
  'netherite',
  'stone',
] as const;
type Material = (typeof material)[number];

const tools = ['axe', 'hoe', 'pickaxe', 'shovel', 'sword'] as const;
type Tool = (typeof tools)[number];

function firstLetterUpper(s: string) {
  return s[0].toUpperCase() + s.slice(1);
}

const en_US = {} as Record<string, string>;
const es_MX = {} as Record<string, string>;
const es_ES = {} as Record<string, string>;
function translateMX(text: Material | Tool) {
  if (text === 'crimson') return 'escarlata';
  return translateES(text);
}
function translateES(text: Material | Tool): string {
  switch (text) {
    case 'acacia':
      return 'acacia';
    case 'bamboo':
      return 'bambú';
    case 'birch':
      return 'abedul';
    case 'cherry':
      return 'cerezo';
    case 'crimson':
      return 'carmesí';
    case 'dark_oak':
      return 'roble oscuro';
    case 'jungle':
      return 'selva';
    case 'mangrove':
      return 'manglar';
    case 'oak':
      return 'roble';
    case 'spruce':
      return 'abeto';
    case 'warped':
      return 'deformado';
    case 'diamond':
      return 'diamante';
    case 'golden':
      return 'oro';
    case 'iron':
      return 'hierro';
    case 'netherite':
      return 'netherita';
    case 'stone':
      return 'piedra';
    case 'axe':
      return 'hacha';
    case 'hoe':
      return 'azada';
    case 'pickaxe':
      return 'pico';
    case 'shovel':
      return 'pala';
    case 'sword':
      return 'espada';
  }
}

function translateEsOf(
  text: Material,
  fn: typeof translateES | typeof translateMX
) {
  if (text === 'crimson' || text === 'warped') return fn(text);
  return `de ${fn(text)}`;
}

function translateTool(m: Material, s: Wood, t: Tool) {
  const name = `${m}_${s}_${t}`;
  const data = `item.${prefix}:${name}`;
  es_ES[data] = `${firstLetterUpper(translateES(t))} ${translateMX(
    m
  )} con palo ${translateEsOf(s, translateES)}`;
  es_MX[data] = `${firstLetterUpper(translateMX(t))} ${translateMX(
    m
  )} con palo ${translateEsOf(s, translateMX)}`;
  en_US[data] = `${firstLetterUpper(m)} ${t} with ${s} stick`;
}
function translateItems(w: Wood) {
  // bow            | arco            | arco
  const _bow = `item.${prefix}:${w}_bow`;
  en_US[_bow] = `${firstLetterUpper(w)} bow`;
  es_MX[_bow] = `Arco ${translateEsOf(w, translateMX)}`;
  es_ES[_bow] = `Arco ${translateEsOf(w, translateES)}`;

  // stick          | palo            | palo
  const _stick = `item.${prefix}:${w}_stick`;
  en_US[_stick] = `${firstLetterUpper(w)} stick`;
  es_MX[_stick] = `Palo ${translateEsOf(w, translateMX)}`;
  es_ES[_stick] = `Palo ${translateEsOf(w, translateES)}`;
}
function translateBlocks(w: Wood) {
  // crafting table | mesa de trabajo | mesa de trabajo
  const _crafting_table = `tile.${prefix}:${w}_crafting_table.name`;
  en_US[_crafting_table] = `${firstLetterUpper(w)} crafting table`;
  es_MX[_crafting_table] = `Mesa de trabajo ${translateEsOf(w, translateMX)}`;
  es_ES[_crafting_table] = `Mesa de trabajo ${translateEsOf(w, translateES)}`;
  // bookshelf      | librero         | estanteria
  const _bookshelf = `tile.${prefix}:${w}_bookshelf.name`;
  en_US[_bookshelf] = `${firstLetterUpper(w)} bookshelf`;
  es_MX[_bookshelf] = `Librero ${translateEsOf(w, translateMX)}`;
  es_ES[_bookshelf] = `Estanteria ${translateEsOf(w, translateES)}`;
  // composter      | compostador     | compostador
  const _composter = `tile.${prefix}:${w}_composter.name`;
  en_US[_composter] = `${firstLetterUpper(w)} composter`;
  es_MX[_composter] = `Compostador ${translateEsOf(w, translateMX)}`;
  es_ES[_composter] = `Compostador ${translateEsOf(w, translateES)}`;
  // panels         | paneles         | paneles
  const _panels = `tile.${prefix}:${w}_panels.name`;
  en_US[_panels] = `${firstLetterUpper(w)} panels`;
  es_MX[_panels] = `Paneles ${translateEsOf(w, translateMX)}`;
  es_ES[_panels] = `Paneles ${translateEsOf(w, translateES)}`;
  // chest          | cofre           | cofre
  const _chest = `tile.${prefix}:${w}_chest.name`;
  en_US[_chest] = `${firstLetterUpper(w)} chest`;
  es_MX[_chest] = `Cofre ${translateEsOf(w, translateMX)}`;
  es_ES[_chest] = `Cofre ${translateEsOf(w, translateES)}`;
  // panels slab    | losa de paneles | losa de paneles
  const _panels_slab = `tile.${prefix}:${w}_panels_slab.name`;
  en_US[_panels_slab] = `${firstLetterUpper(w)} panels slab`;
  es_MX[_panels_slab] = `Losa de paneles ${translateEsOf(w, translateMX)}`;
  es_ES[_panels_slab] = `Losa de paneles ${translateEsOf(w, translateES)}`;
}

for (const w of woods) {
  for (const m of material) for (const t of tools) translateTool(m, w, t);
  translateBlocks(w);
  translateItems(w);
}
Deno.writeTextFileSync(
  `./addon/RP/texts/es_MX.lang`,
  Object.entries(es_MX)
    .map(([k, v]) => `${k}=${v}`)
    .join('\n')
);
Deno.writeTextFileSync(
  `./addon/RP/texts/es_ES.lang`,
  Object.entries(es_ES)
    .map(([k, v]) => `${k}=${v}`)
    .join('\n')
);
Deno.writeTextFileSync(
  `./addon/RP/texts/en_US.lang`,
  Object.entries(en_US)
    .map(([k, v]) => `${k}=${v}`)
    .join('\n')
);
