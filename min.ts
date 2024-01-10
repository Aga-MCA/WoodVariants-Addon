const sticks = './addon/BP/items/stick';

function min(file:string){
  const json = Deno.readTextFileSync(file);
  const obj = JSON.parse(json);
  Deno.writeTextFileSync(file, JSON.stringify(obj))
}
for(const file of Deno.readDirSync(sticks))
  min(`${sticks}/${file.name}`)
