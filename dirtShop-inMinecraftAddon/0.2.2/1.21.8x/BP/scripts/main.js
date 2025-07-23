/*
 * 正式版0.2.2
 */
import "chat.js"
import {
  world,
  system,
  EquipmentSlot,
  EntityComponentTypes,
  TicksPerSecond,
  ItemComponentTypes,
  EnchantmentType,
  ItemStack,
  EntityHealthComponent
} from "@minecraft/server";
import {
  ActionFormData,
  ModalFormData,
} from "@minecraft/server-ui";
import {
  dirtConfig,
  kua
} from "./var.js"
const dirtEconomy = {
  PROPERTY_KEY: "nt:dirt_count",
  currentShopPage: 0
};


function Oper(entity) {
  try {
    if (entity.location.y < -63) return;
    for (let i = 0; i < 360; i += 15) {
      const pos = entity.location;
      const angle = i * (Math.PI / 180);
      const x = pos.x + Math.cos(angle) * 2;
      const z = pos.z + Math.sin(angle) * 2;
      entity.dimension.spawnParticle("minecraft:basic_flame_particle", {
        x,
        y: pos.y,
        z
      });
    }
  } catch (e) {}
}

function hasItem(player, itemId, count) {
  const inventory = player.getComponent("inventory").container;
  let total = 0;
  for (let i = 0; i < inventory.size; i++) {
    const item = inventory.getItem(i);
    if (item?.typeId === itemId) {
      total += item.amount;
    }
  }
  return total >= count;
}

function getDirt(player) {
  return player.getDynamicProperty(dirtEconomy.PROPERTY_KEY) || 0;
}

function setDirt(player, amount) {
  player.setDynamicProperty(dirtEconomy.PROPERTY_KEY, amount);
}

function addDirt(player, amount) {
  setDirt(player, getDirt(player) + amount);
}

function removeDirt(player, amount) {
  const current = getDirt(player);
  if (current >= amount) {
    setDirt(player, current - amount);
    return true;
  }
  return false;
}
const mainBook = 'textures/items/book_normal.png'


// 主菜单系统
function openMainMenu(player) {
  const menu = new ActionFormData()
    .title("泥土商店-启动")
    .body(`你有${getDirt(player)}个泥土，请选择你的操作`)
    .button("展开商店", mainBook)
    .button("存入所有泥土", mainBook)
    .button("排行榜", mainBook)
    .button("传送点", mainBook)
  menu.show(player).then(response => {
    if (response.canceled) return;
    switch (response.selection) {
      case 0:
        openShop(player);
        break;
      case 1:
        depositAllDirt(player);
        break;
      case 2:
        showLeaderboard(player);
        break;
      case 3:
        openWaypointMenu(player);
        break;
    }
  });
}

// 传送点系统
const waypointConfig = {
  baseSlots: 10,
  costPerSlot: 1000,
  costPerWaypoint: 100
};

function openWaypointMenu(player) {
  const waypoints = getWaypoints(player);
  const maxSlots = waypointConfig.baseSlots + (player.getDynamicProperty("extra_slots") || 0);

  new ActionFormData()
    .title(`传送点 (${waypoints.length}/${maxSlots})`)
    .button("添加新传送点", mainBook)
    .button("传送点列表", mainBook)
    .button("增加上限(1000泥土=1上限)", mainBook)
    .show(player).then(r => {
      if (r.canceled) return;
      r.selection === 0 ? addWaypoint(player) :
        r.selection === 1 ? listWaypoints(player) :
        buyWaypointSlot(player);
    });
}

function getWaypoints(player) {
  try {
    return JSON.parse(player.getDynamicProperty("waypoints")) || [];
  } catch {
    return [];
  }
}

function saveWaypoints(player, waypoints) {
  player.setDynamicProperty("waypoints", JSON.stringify(waypoints));
}

function addWaypoint(player) {
  const loc = player.location;
  const waypoints = getWaypoints(player);
  const maxSlots = waypointConfig.baseSlots + (player.getDynamicProperty("extra_slots") || 0);

  if (waypoints.length >= maxSlots) {
    return player.sendMessage("§c已达传送点上限，请购买上限或删去传送点后重试");
  }

  if (getDirt(player) < waypointConfig.costPerWaypoint) {
    return player.sendMessage(`§c需要${waypointConfig.costPerWaypoint}泥土`);
  }

  new ModalFormData()
    .title("新建传送点")
    .textField("名称", "为只属于你的传送点命名")
    .textField("X", loc.x.toFixed(1))
    .textField("Y", loc.y.toFixed(1))
    .textField("Z", loc.z.toFixed(1))
    .dropdown("维度", ["overworld", "nether", "the_end"])
    .label(`*创建一个传送点需${waypointConfig.costPerWaypoint}泥土`)
    .show(player).then(r => {
      if (r.canceled) return openWaypointMenu(player)
      removeDirt(player, waypointConfig.costPerWaypoint);
      const new_Data = {
        name: r.formValues[0] || "未命名",
        x: isNaN(parseFloat(r.formValues[1])) ? loc.x : parseFloat(r.formValues[1]),
        y: isNaN(parseFloat(r.formValues[2])) ? loc.y : parseFloat(r.formValues[2]),
        z: isNaN(parseFloat(r.formValues[3])) ? loc.z : parseFloat(r.formValues[3]),
        dimension: ["overworld", "nether", "the_end"][r.formValues[4]] || player.dimension
      }
      waypoints.push(new_Data);
      saveWaypoints(player, waypoints);
      player.sendMessage("§a传送点添加成功");
    });
}

function listWaypoints(player) {
  const waypoints = getWaypoints(player);
  if (!waypoints.length) return player.sendMessage("§e暂无传送点");

  const form = new ActionFormData().title("传送点列表");
  waypoints.forEach(wp => {
    form.button(`${wp.name}\n§7${wp.dimension}(${wp.x},${wp.y},${wp.z})`);
  });

  form.show(player).then(r => {
    if (r.canceled || r.selection === undefined) return openWaypointMenu(player);
    Wpmenu_show(player, r.selection)
  });
}

function Wpmenu_show(player, score) {
  const Awp = getWaypoints(player);
  const wp = Awp[score]
  const form = new ActionFormData().title(`${wp.name}`).label(`§l============${wp.name}============§r\n§6位置：${wp.dimension}的\nx - ${wp.x}\ny - ${wp.y}\nz - ${wp.z}§r§c\n创建者：${player.name}§r§l\n============操作============§r`).button("删除-退还50泥土").button("前往")
  form.show(player).then(e => {
    if (e.canceled) return listWaypoints(player);
    if (e.selection == 0) {
      saveWaypoints(player, Awp.filter(item => item !== wp))
      addDirt(player, 50)
      player.sendMessage("已删除")
    }
    if (e.selection == 1) {
      player.sendMessage(`已前往 ${wp.name} `);
      teleportToWaypoint(player, Awp[score]);
    }
  })
}

function teleportToWaypoint(player, waypoint) {
  player.teleport({
    x: waypoint.x,
    y: waypoint.y,
    z: waypoint.z
  }, {
    dimension: world.getDimension(waypoint.dimension)
  });
  player.sendMessage(`§a已传送到 ${waypoint.name}`);
}

function buyWaypointSlot(player) {
  const cost = waypointConfig.costPerSlot;
  if (getDirt(player) < cost) {
    return player.sendMessage(`§c需要${cost}泥土`);
  }

  if (removeDirt(player, cost)) {
    const currentSlots = player.getDynamicProperty("extra_slots") || 0;
    player.setDynamicProperty("extra_slots", currentSlots + 1);

    const newMax = waypointConfig.baseSlots + currentSlots + 1;
    player.sendMessage(`§a成功购买1个传送点上限，当前上限: ${newMax}个`);
  }
}

// 原商店系统功能
function openShop(player, page = 0) {
  const shopData = dirtConfig.main.shop[page] || [];
  const form = new ActionFormData()
    .title(`商店 第${page+1}页`)
    .body(`余额: ${getDirt(player)}泥土`);

  shopData.forEach(item => {
    const name = item.split("-")
    form.button(`物品：${name[0].split("*")[0]}，单价${name[1]}`, `textures/ui/shop/${item.split("-")[2]}.png`);
  });

  if (page < dirtConfig.main.shop.length - 1) {
    form.button("下一页");
  }

  form.show(player).then(response => {
    if (response.canceled) return openMainMenu(player);

    if (response.selection === shopData.length) {
      dirtEconomy.currentShopPage = page + 1;
      openShop(player, page + 1);
    } else {
      openPurchaseDialog(player, shopData[response.selection], page);
    }
  });
}

function openPurchaseDialog(player, itemInfo, page) {
  const [itemName, priceStr, itemId] = itemInfo.split("-");
  const displayName = itemName.split("*")[0];
  const price = parseInt(priceStr);

  new ModalFormData()
    .title(`购买${displayName}，单价${price}`)
    .slider("数量", 1, 64)
    .show(player).then(response => {
      if (response.canceled) return openShop(player, page);

      const quantity = response.formValues[0];
      const totalPrice = price * quantity;

      if (removeDirt(player, totalPrice)) {
        player.runCommand(`give @s ${itemId} ${quantity}`);
        player.sendMessage(`§a购买成功: ${quantity}个${displayName}`);
      } else {
        player.sendMessage("§c泥土不足");
      }
    });
}
const breakableBlocks = dirtConfig["main"]["1"]

function mainHand(player) {
  return player.getComponent(EntityComponentTypes.Equippable).getEquipment(EquipmentSlot.Mainhand)
}

function depositAllDirt(player) {
  const inventory = player.getComponent("inventory").container;
  let dirtCount = 0;

  for (let i = 0; i < inventory.size; i++) {
    const item = inventory.getItem(i);
    if (item?.typeId === "minecraft:dirt") {
      dirtCount += item.amount;
      inventory.setItem(i, null);
    }
  }

  if (dirtCount > 0) {
    addDirt(player, dirtCount);
    player.sendMessage(`§a存入 ${dirtCount} 个泥土`);
  } else {
    player.sendMessage("§c背包中没有泥土");
  }
}

function showLeaderboard(player) {
  const players = world.getPlayers();
  const scores = players.map(p => ({
    name: p.name,
    score: getDirt(p)
  })).sort((a, b) => b.score - a.score);

  let leaderboardText = "§l泥土排行榜\n";
  scores.forEach((p, i) => {
    leaderboardText += `§${i < 3 ? 'e' : '7'}${i+1}. ${p.name} §a${p.score}\n`;
  });

  new ModalFormData()
    .title("排行榜")
    .label(leaderboardText)
    .show(player).then((e) => {
      if (e.canceled) {
        openMainMenu(player)
      }
    })
}




world.afterEvents.itemUse.subscribe(({
  source: player,
  itemStack: item
}) => {
  if (player.typeId !== "minecraft:player") return;


  if (item?.typeId == "minecraft:dirt") {
    openMainMenu(player);
  }
  if (item?.typeId == "nt:a_sword1") {
    const playerLoc = player.location;
    const dimension = player.dimension;
    const killRadius = 10;
    const nearbyEntities = dimension.getEntities({
      location: playerLoc,
      maxDistance: killRadius
    });
    for (const entity of nearbyEntities) {
      if (entity.id === player.id || entity.typeId == "minecraft:item") continue;
      entity.kill();
    }

  }
});
system.runInterval(() => {
  for (const player of world.getPlayers()) {
    if (player.getDynamicProperty(dirtEconomy.PROPERTY_KEY) === undefined) {
      setDirt(player, 0);
    }
    const items = player.dimension.getEntities({
      type: "minecraft:item",
      location: player.location,
      maxDistance: 5,
      name: "泥土"
    });
    for (const item of items) {
      try {
        item.teleport(player.location);
      } catch (e) {}
    }
    if (hasItem(player, "nt:a_sword", 1)) {
      Oper(player)
      const effects = kua["effect"]
      effects.forEach(effect => {
        player.addEffect(effect.id, effect.duration, {
          amplifier: effect.amplifier,
          showParticles: false
        });
      })
      try {
        player.runCommand("gamerule sendcommandfeedback false")
        player.runCommand("ability @s mayfly true")
      } catch (e) {}
    } else {
      try {
        player.runCommand("gamerule sendcommandfeedback false")
        player.runCommand("ability @s mayfly false")
      } catch (e) {}
    }
  }
}, 5);
world.afterEvents.entityHitBlock.subscribe((event) => {
  const {
    hitBlock: block,
    damagingEntity: player
  } = event;
  if (player?.typeId !== "minecraft:player") return;
  const item = mainHand(player);
  if (item?.typeId === "nt:a_sword1") {
    const {
      x,
      y,
      z
    } = block.location;
    if (player.isSneaking || player.isSwimming) {
      const dimension = player.dimension;
      for (let y1 = y + 10; y1 > y - 3; y1--) {
        dimension.runCommand(`fill ${x+8} ${y1} ${z+8} ${x-8} ${y1} ${z-8} air destroy`)
      }
    }
    const id = block.typeId;
    if (breakableBlocks[block.typeId]) {
      block.dimension.spawnItem(new ItemStack(id), {
        x,
        y,
        z
      });
      block.dimension.runCommand(`setblock ${x} ${y} ${z} air destroy`);
    }
  }
});
world.afterEvents.entityDie.subscribe((event) => {
  try {
    const {
      x,
      y,
      z
    } = event.deadEntity.location;
    const spawnY = y < -63 ? -63 : y;
    const dropCount = Math.floor(Math.random() * 3) + 3;
    for (let i = 0; i < dropCount; i++) {
      event.deadEntity.dimension.spawnItem(new ItemStack("minecraft:dirt"), {
        x,
        y: spawnY,
        z
      });
    }
  } catch (e) {}
});
world.afterEvents.entityHitEntity.subscribe(({
  damagingEntity: player,
  hitEntity: entity
}) => {
  try {
    if (player.typeId !== "minecraft:player") return;
    if (mainHand(player)?.typeId == "nt:a_sword1") {
      entity.getComponent(EntityHealthComponent.componentId).setCurrentValue(0);
    }
    entity.applyDamage(getDirt(player) / 1000);
  } catch (e) {}
})

system.run(() => {
  for (const player of world.getPlayers()) {
    player.sendMessage("泥土商店v0.2.0已加载")
  }
})
