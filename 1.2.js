import { datasource } from './1 datasource.js';
let result;
result = datasource().reduce((x, y, i, z) => (z[i - 1] + y + z[i + 1] > z[i - 2] + z[i - 1] + y ? x + 1 : x), 0);
const div = document.createElement('div');
div.innerHTML = `<strong>Result 1.2</strong> = ${result}`;
document.body.appendChild(div);
