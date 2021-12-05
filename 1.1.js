import { datasource } from './1 datasource.js';
let result;
result = datasource().reduce((x, y, i, z) => (y > (z[i - 1] || y) ? x + 1 : x), 0);
const div = document.createElement('div');
div.innerHTML = `<strong>Result 1.1</strong> = ${result}`;
document.body.appendChild(div);

//fetch('https://adventofcode.com/2021/day/1/input').then(res=>res.text()).then(x=>x.trim().split('\n').map(x=>parseInt(x)).reduce((x,y,i,z) => y > (z[i-1]||y) ? x+1 : x  ,0 ))  ;
