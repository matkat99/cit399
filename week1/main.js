import { random, qs } from "./utils.mjs";
import RockPaperScissors from "./rockPaperScissors.mjs";

const myGame = new RockPaperScissors(qs("main"));

const myNum = random(5);

console.log(myNum);
