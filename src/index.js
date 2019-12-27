import chalk from "chalk";
import readlineSync from "readline-sync"

class Animal {
  constructor(name, age){
    this.name = name;
    this.age = age;
  }
  greet(){
    console.log(`こんにちは！${this.name}ちゃん！`);
  }
  info(){
    this.greet();
    console.log(`${this.name}ちゃんの年齢は${cat.age}です`);
  }
}
class Cat extends Animal{
  //construcorをAnimalクラスのものに追加
  info(){
    this.greet();
    console.log(chalk.yellow(`${this.name}ちゃんの年齢は${this.age}才です`));
    const humanAge = this.getHumanAge();
    console.log(chalk.bgCyan(`人間年齢で${humanAge}才です`));
  }
  // 人間年齢の計算
  getHumanAge() {
    return 24 + (this.age -2) * 4;
  }
}
const name = readlineSync.question("名前を入力してください:");
const age = readlineSync.question("ねこの年齢を入力してください:");

// 名前と年齢の入力部分
const cat = new Cat (name, age);

console.log("---------");
cat.info();
