import {
 world,
 system
} from "@minecraft/server";
import {
 vue // 导入变量
} from "./languages.js";

const all = vue["chat"];
const chatHistory = new Map();
const mutedPlayers = new Map();
const num = all["8"];
const timer = all["7"];
console.log(vue["languages"])

function checkSpam(player, message, all) {
 const objects = all["9"]
 const now = Date.now();
 const record = chatHistory.get(player.name) || {
  count: 0,
  lastTime: 0,
  lastMsg: ""
 };
 if (message === record.lastMsg) {
  record.count++;
  if (record.count >= num && (now - record.lastTime) < 5000) {
   mutedPlayers.set(player.name, system.runTimeout(() => {
    mutedPlayers.delete(player.name);
    player.sendMessage(objects[0]);
   }, timer));
   player.sendMessage(objects[1]);
   return true;
  }
 } else {
  record.count = 1;
  record.lastMsg = message;
 }
 record.lastTime = now;
 chatHistory.set(player.name, record);
 return false;
}
const reputation = all["4"];
const deathPositions = new Map();

function PMessage(msg) {
 try {
  world.getPlayers().forEach(p => p.sendMessage(msg));
 } catch (e) {
  console.error("广播失败:", e);
 }
}

function execute(player, message, all) {
 try {
  const obje = all["9"]
  const parts = message.slice(1).trim().split(/\s+/);
  const main = parts[0];
  const version = all["5"];
  const name = all["6"];
  switch (main) {
   case "ts":
    const min = parts[1] ? parseInt(parts[1]) : 1;
    const max = parts[2] ? parseInt(parts[2]) : 6;
    if (isNaN(min) || isNaN(max)) return player.sendMessage(obje[2]);
    const result = Math.floor(Math.random() * (max - min + 1)) + min;
    PMessage(`${obje[4]}§l§6${player.name}       =>       §8${result}§2 \n-----§r(${min}-${max})----- ${obje[9]}`);
    break;
   case "back":
    if (parts[1]) {
     const pos = player.location;
     const px = parseInt(parts[1]);
     const py = parseInt(parts[2]);
     const pz = parseInt(parts[3]);
     const x = isNaN(px) ? pos.x : px;
     const y = isNaN(py) ? pos.y : py;
     const z = isNaN(pz) ? pos.z : pz;
     player.runCommandAsync(`tp @s ${x} ${y} ${z}`);
     system.runTimeout(() => {
      const pos = player.location;
      PMessage(`${obje[3]}  ${player.name}=>${pos.x},${pos.y},${pos.z}`);
     }, 2);
    } else {
     const deathPos = deathPositions.get(player.name);
     if (deathPos) {
      const {
       x,
       y,
       z
      } = deathPos.pos;
      player.runCommandAsync(`tp @s ${x} ${y} ${z}`).then(() =>
       player.sendMessage(obje[3]));
     } else player.sendMessage(obje[5]);
    }
    break;
   case "help":
    const command = all["1"];
    if (parts[1]) {
     if (command[parts[1]]) {
      player.sendMessage(`${obje[6]}   \n${command[parts[1]]}`);
     } else player.sendMessage(`${obje[2]}:${parts[1]}`);
    } else {
     player.sendMessage(obje[7]);
     Object.keys(command).forEach((key, i) =>
      player.sendMessage(`${all["3"][i]}. ${key}`));
    }
    player.sendMessage(obje[8]);
    break;
   case "f":
    if (parts[2]) {
     player.sendMessage(obje[2]);
     break;
    }
    if (parts[1] === "system") {
     player.sendMessage(`§l§2version : §a${version}\n§6name : §a${name}`);
     break
    } else if (parts[1] === "block") {
     const x = player.location.x
     const z = player.location.z
     const Ax = Math.floor(x / 16) * 16;
     const Az = Math.floor(z / 16) * 16;
     const Bx = Ax + 15;
     const Bz = Az + 15;
     player.sendMessage(`X:start_${Ax},end_${Bx}\nZ:start_${Az},end_${Bz}`);
     break;
    } else if (!parts[1]) {
     player.runCommandAsync(`function solo/give`);
     break;
    } else {
     player.sendMessage(obje[2])
    }
    break;
   default:
    player.sendMessage(`§c未知命令:${main}`);
  }
 } catch (error) {
  console.log("执行失败:", error);
 }
};

function iscb(message, all) {
 if (!message.startsWith('.')) return false;
 const command = message.slice(1).trim().split(/\s+/)[0];
 return Object.keys(all["1"]).some(cmd => cmd === command);
}

world.beforeEvents.chatSend.subscribe((event) => {
 event.cancel = true;
 const msg = event.message.trim();
 const player = event.sender;
 if (msg.startsWith("/")) return;
 const processedMsg = msg.replace(/§[0-9a-fk-or]/gi, '').replace(/\s+/g, '').toLowerCase();

 if (iscb(msg, all)) {
  execute(player, msg, all);
  event.cancel = true;
  return;
 };
 if (mutedPlayers.has(player.name)) return;
 if (checkSpam(player, msg, all)) return;
 const isBad = all["2"].some(word => {
  const processedWord = word.replace(/\s+/g, '').toLowerCase();
  return processedMsg.includes(processedWord);
 })
 PMessage(`[玩家] <${player.name}> ${isBad ? '***' : msg}`);
});


world.afterEvents.entityDie.subscribe(e => {
 if (e.deadEntity.typeId === "minecraft:player") {
  const {
   location: pos,
   dimension,
   name
  } = e.deadEntity;
  deathPositions.set(name, {
   pos,
   dimension: dimension.id
  });
 }
});