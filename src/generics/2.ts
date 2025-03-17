type AllType = {
    name: string;
    position: number;
    color: string;
    weight: number
    }

   
    
    function compare <
  T extends Pick<AllType, 'name' | 'color'>,
  U extends Pick<AllType, 'position' | 'weight'>
>(top: T, bottom: U): AllType {
  return {
    name: top.name,
    color: top.color,
    position: bottom.position,
    weight: bottom.weight,
  };
}
   
const topType = { name: 'Olga', color: 'red' };
const bottomType = { position: 1, weight: 55 };

const result = compare(topType, bottomType);

console.log(result);