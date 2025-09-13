/*
 * 正式版0.2.5
 */
// rao然 个人工作室出品
import "chat.js"
import {
  config
} from "config.js"
const dirtConfig = {
  "languages": "脚本已加载-语言：简体中文",
  "main": {
    "1": {
      'minecraft:bedrock': true,
      'minecraft:command_block': true,
      'minecraft:structure_block': true,
      "minecraft:deny": true,
      "minecraft:chain_command_block": true,
      "minecraft:repeating_command_block": true,
      "minecraft:jigsaw": true,
      "minecraft:barrier": true,
      "minecraft:border_block": true,
      "minecraft:allow": true,
      "minecraft:reinforced_deepslate": true,
      "end_portal_frame": true
    },
    "2": 10000,
    "3": "泥土",
    "shop": [
      ["金锭*1-500-gold_ingot", "钻石*1-1000-diamond", "橡木原木*1-4-oak_log", "金合欢原木*1-4-acacia_log", "桦树原木*1-4-birch_log", "苔藓块*1-12-moss_block", "丛林原木*1-4-jungle_log", `云杉原木*1-4-spruce_log`, "嘎枝之心*1-6000-creaking_heart", "海晶石*1-10-prismarine", "暗海晶石*1-10-dark_prismarine", "床*1-40-bed", "烈焰棒*1-300-blaze_rod", "收纳袋*1-50-bundle", "箭*1-30-arrow", "苹果*1-40-apple", "岩浆桶*1-200-lava_bucket", "下界合金锭*1-1598-netherite_ingot", "下界合金升级锻造模板*1-2300-netherite_upgrade_smithing_template", "牧民盔甲纹饰锻造模板*1-1200-raiser_armor_trim_smithing_template", "肋骨盔甲纹饰锻造模板-1200-rib_armor_trim_smithing_template", "塑造盔甲纹饰锻造模板-1200-shaper_armor_trim_smithing_template", "幽静盔甲纹饰锻造模板-1200-silence_armor_trim_smithing_template", "猪鼻盔甲纹饰锻造模板-1200-snout_armor_trim_smithing_template", "尖塔盔甲纹饰锻造模板-1200-spire_armor_trim_smithing_template", "潮汐盔甲纹饰锻造模板-1200-tide_armor_trim_smithing_template", "恼鬼盔甲纹饰锻造模板-1200-vex_armor_trim_smithing_template", "坚守者盔甲纹饰锻造模板-1200-ward_armor_trim_smithing_template", "向导盔甲纹饰锻造模板-1200-wayfinder_armor_trim_smithing_template", "护身符(代表无敌)*1-60000000-nt:a_sword", "神·多功能工具*1-30000000-nt:a_sword1"],
      ["水桶*1-120-water_bucket", "胡萝卜*1-50-carrot", "煤*1-60-coal", "下界合金碎片*1-349-netherite_scrap", "圆石*1-1-cobblestone", "石头*1-2-stone", "深板岩*1-3-deepslate", "黑石*1-4-blackstone", "青金石*1-80-lapis_lazuli", "红石粉*1-50-redstone", "下界石英*1-40-quartz", "铜锭*1-60-copper_ingot", "燧石*1-15-flint", "线*1-8-string", "木棍*1-2-stick", "铁锭*1-30-iron_ingot", "皮革*1-30-leather", "工作台*1-10-crafting_table", "熔炉*1-20-furnace", "高炉*1-150-blast_furnace", "烟熏炉*1-150-smoker", "铁砧*1-150-anvil", "酿造台*1-80-brewing_stand", "漏斗*1-100-hopper", "红石火把*1-15-redstone_torch", "活塞*1-50-piston", "粘性活塞*1-70-sticky_piston", "小麦种子*1-5-wheat_seeds", "甜菜种子*1-5-beetroot_seeds", "南瓜种子*1-10-pumpkin_seeds", "西瓜种子*1-10-melon_seeds"],
      ["骨粉*1-20-bone_meal", "海带*1-20-kelp", "末影珍珠*1-230-ender_pearl", "海洋之心*1-2000-heart_of_the_sea", "火药*1-30-gunpowder", "指南针*1-100-compass", "时钟*1-120-clock", "鞍*1-200-saddle", "命名牌*1-150-name_tag", "石砖*1-3-stone_bricks", "苔石砖*1-4-mossy_stone_bricks", "磨制安山岩*1-4-polished_andesite", "磨制闪长岩*1-4-polished_diorite", "磨制花岗岩*1-4-polished_granite", "白色玻璃*1-5-white_stained_glass", "铁栏杆*1-6-iron_bars", "梯子*1-3-ladder", "脚手架*1-4-scaffolding", "发射器*1-12-dispenser", "投掷器*1-12-dropper", "末地石砖*1-6-end_bricks", "海晶石砖*1-10-prismarine_bricks"]
    ]
  }
};
const kua = {
  "effect": [{
    id: "night_vision",
    duration: 1200,
    amplifier: 255
  }, {
    id: "regeneration",
    duration: 20,
    amplifier: 255
  }, {
    id: "saturation",
    duration: 20,
    amplifier: 255
  }, {
    id: "jump_boost",
    duration: 20,
    amplifier: 5
  }, {
    id: "village_hero",
    duration: 20,
    amplifier: 255
  }, {
    id: "regeneration",
    duration: 20,
    amplifier: 255
  }, {
    id: "resistance",
    duration: 20,
    amplifier: 255
  }, {
    id: "health_boost",
    duration: 20,
    amplifier: 20
  }, {
    id: "instant_health",
    duration: 20,
    amplifier: 255
  }, {
    id: "conduit_power",
    amplifier: 255,
    duration: 20
  }, {
    id: "fire_resistance",
    amplifier: 255,
    duration: 20
  }]
}
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

function openMainMenu(player) {
  const menu = new ActionFormData()
    .title("泥土商店-启动")
    .body(`你有${getDirt(player)}个泥土，请选择你的操作`)
    .button("展开商店", mainBook)
    .button("存入所有泥土", mainBook)
    .button("排行榜", mainBook)
    .button("传送点", mainBook)
    .button("统计信息", mainBook)
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
      case 4:
        StatisticsSystem.showMainMenu(player);
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
      if (r.canceled) return openMainMenu(player)
      r.selection === 0 ? addWaypoint(player) : r.selection === 1 ? listWaypoints(player) : buyWaypointSlot(player);
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
    return player.sendMessage(`操作失败，错误信息：§c需要${waypointConfig.costPerWaypoint}泥土！`);
  }
  new ModalFormData()
    .title("新建传送点")
    .textField("名称", "为只属于你的传送点命名")
    .label(`*创建一个传送点需${waypointConfig.costPerWaypoint}泥土`)
    .show(player).then(r => {
      if (r.canceled) return openWaypointMenu(player)
      removeDirt(player, waypointConfig.costPerWaypoint);
      const new_Data = {
        name: r.formValues[0] || "未命名",
        x: loc.x,
        y: loc.y,
        z: loc.z,
        dimension: player.dimension.id.replace("minecraft:", "")
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
    form.button("下一页", "/textures/ui/shop/after.png");
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
const StatisticsSystem = new class {
  constructor() {
    this.statisticTypes = {
      "entity": "实体统计",
      "block": "方块统计",
      "item": "物品统计"
    };
    this.ITEMS_PER_PAGE = 5;
    this.defaultData = this.initializeDefaultData();
    this.playerPageStates = new Map();
    this.toolTypes = {
      "minecraft:diamond_sword": "钻石剑",
      "minecraft:iron_sword": "铁剑",
      "tt:show_menu": "本附件菜单",
      "minecraft:diamond": "钻石",
      "minecraft:dirt": "泥土"
    };
  }
  initializeDefaultData() {
    return {
      entities: {
        kills: {},
        deaths: {},
        attacks: {}
      },
      blocks: {
        breaks: {},
        places: {}
      },
      items: {
        uses: {}
      }
    };
  }
  getPlayerData(player) {
    try {
      const data = player.getDynamicProperty("statistics");
      return data ? JSON.parse(data) : JSON.parse(JSON.stringify(this.defaultData));
    } catch (error) {
      console.warn(`Failed to parse player data: ${error}`);
      return JSON.parse(JSON.stringify(this.defaultData));
    }
  }
  savePlayerData(player, data) {
    try {
      player.setDynamicProperty("statistics", JSON.stringify(data));
    } catch (error) {
      console.error(`Failed to save player data: ${error}`);
    }
  }
  getLocalizedName(id) {
    return id.replace("minecraft:", "").replace(/_/g, " ");
  }
  getToolName(toolId) {
    return this.toolTypes[toolId] || this.getLocalizedName(toolId);
  }
  showMainMenu(player) {
    const form = new ActionFormData()
      .title(`${player.name}的统计记录`);
    Object.values(this.statisticTypes).forEach(statName => {
      form.button(statName);
    });
    form.show(player).then(response => {
      if (response.canceled) return;
      const selectedStat = Object.keys(this.statisticTypes)[response.selection];
      this.showCategoryMenu(selectedStat, player, 0);
    });
  }
  showCategoryMenu(category, player, page) {
    const playerData = this.getPlayerData(player);
    let items = [];
    let title = this.statisticTypes[category];
    switch (category) {
      case "entity":
        items = Object.keys(playerData.entities.kills)
          .concat(Object.keys(playerData.entities.deaths))
          .concat(Object.keys(playerData.entities.attacks))
          .filter((v, i, a) => a.indexOf(v) === i);
        break;
      case "block":
        items = Object.keys(playerData.blocks.breaks)
          .concat(Object.keys(playerData.blocks.places))
          .filter((v, i, a) => a.indexOf(v) === i);
        break;
      case "item":
        items = Object.keys(playerData.items.uses);
        break;
    }
    const totalPages = Math.ceil(items.length / this.ITEMS_PER_PAGE);
    const startIdx = page * this.ITEMS_PER_PAGE;
    const pageItems = items.slice(startIdx, startIdx + this.ITEMS_PER_PAGE);
    const form = new ActionFormData()
      .title(`${title} (${page+1}/${totalPages})`);
    pageItems.forEach(id => {
      form.button(this.getLocalizedName(id));
    });
    if (page > 0) {
      form.button("上一页", "/textures/ui/shop/Before.png");
    }
    if (page < totalPages - 1) {
      form.button("下一页", "/textures/ui/shop/after.png");
    }
    form.button("返回主菜单");
    this.playerPageStates.set(player.id, {
      category,
      page
    });
    form.show(player).then(response => {
      if (response.canceled) return;
      const buttonIndex = response.selection;
      const isPrevPage = page > 0 && buttonIndex === pageItems.length;
      const isNextPage = page < totalPages - 1 &&
        buttonIndex === pageItems.length + (page > 0 ? 1 : 0);
      const isMainMenu = buttonIndex === pageItems.length +
        (page > 0 ? 1 : 0) +
        (page < totalPages - 1 ? 1 : 0);
      if (isPrevPage) {
        this.showCategoryMenu(category, player, page - 1);
      } else if (isNextPage) {
        this.showCategoryMenu(category, player, page + 1);
      } else if (isMainMenu) {
        this.showMainMenu(player);
      } else {
        const selectedId = items[startIdx + buttonIndex];
        this.showDetailMenu(category, selectedId, player);
      }
    });
  }
  showDetailMenu(category, targetId, player) {
    const playerData = this.getPlayerData(player);
    const displayName = this.getLocalizedName(targetId);
    let form = new ActionFormData().title(displayName);
    let bodyText = "";
    switch (category) {
      case "entity":
        const kills = playerData.entities.kills[targetId] || {
          total: 0,
          byTool: {}
        };
        const deaths = playerData.entities.deaths[targetId] || {
          total: 0
        };
        const attacks = playerData.entities.attacks[targetId] || {
          total: 0
        };
        bodyText += `▸ 被你杀死: ${kills.total}次\n`;
        Object.keys(kills.byTool).forEach(toolId => {
          bodyText += `  • 使用${this.getToolName(toolId)}: ${kills.byTool[toolId]}次\n`;
        });
        bodyText += `▸ 你被杀死: ${deaths.total}次\n`;
        bodyText += `▸ 被你攻击: ${attacks.total}次\n`;
        break;
      case "block":
        const breaks = playerData.blocks.breaks[targetId] || {
          total: 0,
          byTool: {}
        };
        const places = playerData.blocks.places[targetId] || {
          total: 0
        };
        bodyText += `▸ 被你破坏: ${breaks.total}次\n`;
        Object.keys(breaks.byTool).forEach(toolId => {
          bodyText += `  • 使用${this.getToolName(toolId)}: ${breaks.byTool[toolId]}次\n`;
        });
        bodyText += `▸ 被你放置: ${places.total}次\n`;
        break;
      case "item":
        const uses = playerData.items.uses[targetId] || 0;
        bodyText += `▸ 使用次数: ${uses}次\n`;
        break;
    }
    form.body(bodyText);
    form.button("返回列表");
    form.button("返回主菜单");
    form.show(player).then(response => {
      if (response.canceled) return;
      const pageState = this.playerPageStates.get(player.id);
      if (response.selection === 0) {
        if (pageState) {
          this.showCategoryMenu(pageState.category, player, pageState.page);
        } else {
          this.showCategoryMenu(category, player, 0);
        }
      } else {
        this.showMainMenu(player);
      }
    });
  }
  recordEntityKill(killedEntity, killer, toolUsed) {
    if (killer?.typeId !== "minecraft:player") return;
    const playerData = this.getPlayerData(killer);
    const entityId = killedEntity.typeId;
    if (!playerData.entities.kills[entityId]) {
      playerData.entities.kills[entityId] = {
        total: 0,
        byTool: {}
      };
    }
    playerData.entities.kills[entityId].total++;
    if (toolUsed) {
      const toolId = toolUsed.typeId;
      if (!playerData.entities.kills[entityId].byTool[toolId]) {
        playerData.entities.kills[entityId].byTool[toolId] = 0;
      }
      playerData.entities.kills[entityId].byTool[toolId]++;
    }
    this.savePlayerData(killer, playerData);
  }
  recordBlockBreak(block, player, toolUsed) {
    const playerData = this.getPlayerData(player);
    const blockId = block.typeId;
    if (!playerData.blocks.breaks[blockId]) {
      playerData.blocks.breaks[blockId] = {
        total: 0,
        byTool: {}
      };
    }
    playerData.blocks.breaks[blockId].total++;
    if (toolUsed) {
      const toolId = toolUsed.typeId;
      if (!playerData.blocks.breaks[blockId].byTool[toolId]) {
        playerData.blocks.breaks[blockId].byTool[toolId] = 0;
      }
      playerData.blocks.breaks[blockId].byTool[toolId]++;
    }
    this.savePlayerData(player, playerData);
  }
  recordBlockPlace(block, player) {
    const playerData = this.getPlayerData(player);
    const blockId = block.typeId;
    if (!playerData.blocks.places[blockId]) {
      playerData.blocks.places[blockId] = {
        total: 0
      };
    }
    playerData.blocks.places[blockId].total++;
    this.savePlayerData(player, playerData);
  }
  recordEntityAttack(attackedEntity, attacker) {
    if (attacker?.typeId !== "minecraft:player") return;
    const playerData = this.getPlayerData(attacker);
    const entityId = attackedEntity.typeId;
    if (!playerData.entities.attacks[entityId]) {
      playerData.entities.attacks[entityId] = {
        total: 0
      };
    }
    playerData.entities.attacks[entityId].total++;
    this.savePlayerData(attacker, playerData);
  }
  recordEntityDeath(deadEntity) {
    const playerData = this.getPlayerData(deadEntity);
    const entityId = deadEntity.typeId;
    if (!playerData.entities.deaths[entityId]) {
      playerData.entities.deaths[entityId] = {
        total: 0
      };
    }
    playerData.entities.deaths[entityId].total++;
    this.savePlayerData(deadEntity, playerData);
  }
  recordItemUse(item, player) {
    const playerData = this.getPlayerData(player);
    const itemId = item.typeId;
    if (!playerData.items.uses[itemId]) {
      playerData.items.uses[itemId] = 0;
    }
    playerData.items.uses[itemId]++;
    this.savePlayerData(player, playerData);
  }
}
world[(!{} + "")[+!+{}] + ((!(!(!(!({} + [])) ? {} + [] : "") || {} + [])) + "")[0] + (((typeof window ? !(!({})) : []) + "") || {} + [])[+!{} - !{}] + ({} + [])[+!+{} + !+{} + !+{} + !+{}] + (!!{} + [])[+!+{}] + (typeof window)[0 + !true + !!(+{} + [] + {} + [] + {} + []) + !+{} + 0 + !true + !(!+{} + [] + []) + !(!(!(!(!(!{} + [] + "version"))))) + !!true].toUpperCase() + ((class v {}) + "")[+!+{} + !+{} + !+{} + !+{} + !+{} + !+!false + (!(typeof s ? {} + [] + "name" : !(!(+{})))) + !!{} + !{}] + ((typeof s ? !(!({})) : {} + []) + "")[+!+{} + !+{} + !+{}] + ([][+!+{} + !+{} + !+{}] + "")[1 - 1 + !+{}] + (((typeof window ? !(!({})) : []) + "") || {} + [])[+!({})] + (!{} + [] + "")[+!+{} + !+{} + !+{}]].itemUse.subscribe(({
  source: player,
  itemStack: item
}) => {
  if (player.typeId !== "minecraft:player") return;
  StatisticsSystem.recordItemUse(item, player);
  if (item?.typeId == "tt:show_menu") {
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
    if (config[1] == "creeper") player.addEffect('poison', 20,{amplifier: 10,showParticles: false})
    try {
      const {
        location: loc
      } = player
      const blockv1 = player.dimension.getBlock({
        x: loc.x,
        y: Math.floor(loc.y) - 1,
        z: loc.z
      })
      const blockv2 = player.dimension.getBlock({
        x: loc.x,
        y: Math.floor(loc.y),
        z: loc.z
      })
      if (blockv1.typeId === "minecraft:sand" && blockv1.isValid || blockv2.typeId === "minecraft:sand" && blockv2.isValid) player.teleport({
        x: loc.x,
        y: loc.y - 0.4,
        z: loc.z
      })
    } catch (erroer) {}
    for (const item of player.dimension.getEntities({
      type: "minecraft:item",
      location: player.location,
      maxDistance: 5,
      name: "泥土"
    })) {
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
        if (player.getGameMode() == "Creative") return player.runCommand("ability @s mayfly true");
        player.runCommand("gamerule sendcommandfeedback false")
        player.runCommand("ability @s mayfly false")
      } catch (e) {}
    }
  }
}, 5);
world[(!{} + "")[+!+{}] + ((!(!(!(!({} + [])) ? {} + [] : "") || {} + [])) + "")[0] + (((typeof window ? !(!({})) : []) + "") || {} + [])[+!{} - !{}] + ({} + [])[+!+{} + !+{} + !+{} + !+{}] + (!!{} + [])[+!+{}] + (typeof window)[0 + !true + !!(+{} + [] + {} + [] + {} + []) + !+{} + 0 + !true + !(!+{} + [] + []) + !(!(!(!(!(!{} + [] + "version"))))) + !!true].toUpperCase() + ((class v {}) + "")[+!+{} + !+{} + !+{} + !+{} + !+{} + !+!false + (!(typeof s ? {} + [] + "name" : !(!(+{})))) + !!{} + !{}] + ((typeof s ? !(!({})) : {} + []) + "")[+!+{} + !+{} + !+{}] + ([][+!+{} + !+{} + !+{}] + "")[1 - 1 + !+{}] + (((typeof window ? !(!({})) : []) + "") || {} + [])[+!({})] + (!{} + [] + "")[+!+{} + !+{} + !+{}]].entityHitBlock.subscribe((event) => {
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
world[(!{} + "")[+!+{}] + ((!(!(!(!({} + [])) ? {} + [] : "") || {} + [])) + "")[0] + (((typeof window ? !(!({})) : []) + "") || {} + [])[+!{} - !{}] + ({} + [])[+!+{} + !+{} + !+{} + !+{}] + (!!{} + [])[+!+{}] + (typeof window)[0 + !true + !!(+{} + [] + {} + [] + {} + []) + !+{} + 0 + !true + !(!+{} + [] + []) + !(!(!(!(!(!{} + [] + "version"))))) + !!true].toUpperCase() + ((class v {}) + "")[+!+{} + !+{} + !+{} + !+{} + !+{} + !+!false + (!(typeof s ? {} + [] + "name" : !(!(+{})))) + !!{} + !{}] + ((typeof s ? !(!({})) : {} + []) + "")[+!+{} + !+{} + !+{}] + ([][+!+{} + !+{} + !+{}] + "")[1 - 1 + !+{}] + (((typeof window ? !(!({})) : []) + "") || {} + [])[+!({})] + (!{} + [] + "")[+!+{} + !+{} + !+{}]].entityDie.subscribe((event) => {
  try {
    const {
      x,
      y,
      z
    } = event.deadEntity.location;
    if (Math.random() <= config[0]) {
      const dropCount = Math.floor(Math.random() * 3) + 3;
      for (let i = 0; i < dropCount; i++) {
        event.deadEntity.dimension.spawnItem(new ItemStack("minecraft:dirt"), {
          x,
          y: y < -63 ? -63 : y,
          z
        });
      }
    }
    const {
      deadEntity,
      damageSource
    } = event;
    StatisticsSystem.recordEntityDeath(deadEntity);
    if (damageSource.damagingEntity?.typeId === "minecraft:player" || deadEntity?.typeId === "minecraft:player") {
      const killer = damageSource.damagingEntity;
      const toolUsed = killer.getComponent(EntityComponentTypes.Equippable).getEquipment(EquipmentSlot.Mainhand)
      StatisticsSystem.recordEntityKill(deadEntity, killer, toolUsed);
    }
  } catch (e) {}
});
world[(!{} + "")[+!+{}] + ((!(!(!(!({} + [])) ? {} + [] : "") || {} + [])) + "")[0] + (((typeof window ? !(!({})) : []) + "") || {} + [])[+!{} - !{}] + ({} + [])[+!+{} + !+{} + !+{} + !+{}] + (!!{} + [])[+!+{}] + (typeof window)[0 + !true + !!(+{} + [] + {} + [] + {} + []) + !+{} + 0 + !true + !(!+{} + [] + []) + !(!(!(!(!(!{} + [] + "version"))))) + !!true].toUpperCase() + ((class v {}) + "")[+!+{} + !+{} + !+{} + !+{} + !+{} + !+!false + (!(typeof s ? {} + [] + "name" : !(!(+{})))) + !!{} + !{}] + ((typeof s ? !(!({})) : {} + []) + "")[+!+{} + !+{} + !+{}] + ([][+!+{} + !+{} + !+{}] + "")[1 - 1 + !+{}] + (((typeof window ? !(!({})) : []) + "") || {} + [])[+!({})] + (!{} + [] + "")[+!+{} + !+{} + !+{}]].entityHitEntity.subscribe(({
  damagingEntity: player,
  hitEntity: entity
}) => {
  if (entity.typeId == "minecraft:silverfish") {
    if (Math.floor() >= 0.8) damagingEntity.dimension.spawnEntity("silverfish", damagingEntity.location)
  }
  if (player.typeId !== "minecraft:player") return;
  StatisticsSystem.recordEntityAttack(entity, player);
  if (mainHand(player)?.typeId == "nt:a_sword1") {
    entity.getComponent(EntityHealthComponent.componentId).setCurrentValue(0);
  }
})
world[(!{} + "")[+!+{}] + ((!(!(!(!({} + [])) ? {} + [] : "") || {} + [])) + "")[0] + (((typeof window ? !(!({})) : []) + "") || {} + [])[+!{} - !{}] + ({} + [])[+!+{} + !+{} + !+{} + !+{}] + (!!{} + [])[+!+{}] + (typeof window)[0 + !true + !!(+{} + [] + {} + [] + {} + []) + !+{} + 0 + !true + !(!+{} + [] + []) + !(!(!(!(!(!{} + [] + "version"))))) + !!true].toUpperCase() + ((class v {}) + "")[+!+{} + !+{} + !+{} + !+{} + !+{} + !+!false + (!(typeof s ? {} + [] + "name" : !(!(+{})))) + !!{} + !{}] + ((typeof s ? !(!({})) : {} + []) + "")[+!+{} + !+{} + !+{}] + ([][+!+{} + !+{} + !+{}] + "")[1 - 1 + !+{}] + (((typeof window ? !(!({})) : []) + "") || {} + [])[+!({})] + (!{} + [] + "")[+!+{} + !+{} + !+{}]].playerSpawn.subscribe((event) => {
  if (event.initialSpawn) {
    const player = event.player;
    if (!hasItem(player, "tt:show_menu", 1)) player.runCommand("give @s tt:show_menu")
    if (player.getDynamicProperty(dirtEconomy.PROPERTY_KEY) === undefined) {
    player.sendMessage("新手礼包-100在线泥土存储")
    setDirt(player, 100);
    }
    StatisticsSystem.getPlayerData(player);
    player.sendMessage("泥土商店v0.2.4 PlusV4 已成功加载")
  }
});
world[(!{} + "")[+!+{}] + ((!(!(!(!({} + [])) ? {} + [] : "") || {} + [])) + "")[0] + (((typeof window ? !(!({})) : []) + "") || {} + [])[+!{} - !{}] + ({} + [])[+!+{} + !+{} + !+{} + !+{}] + (!!{} + [])[+!+{}] + (typeof window)[0 + !true + !!(+{} + [] + {} + [] + {} + []) + !+{} + 0 + !true + !(!+{} + [] + []) + !(!(!(!(!(!{} + [] + "version"))))) + !!true].toUpperCase() + ((class v {}) + "")[+!+{} + !+{} + !+{} + !+{} + !+{} + !+!false + (!(typeof s ? {} + [] + "name" : !(!(+{})))) + !!{} + !{}] + ((typeof s ? !(!({})) : {} + []) + "")[+!+{} + !+{} + !+{}] + ([][+!+{} + !+{} + !+{}] + "")[1 - 1 + !+{}] + (((typeof window ? !(!({})) : []) + "") || {} + [])[+!({})] + (!{} + [] + "")[+!+{} + !+{} + !+{}]].playerPlaceBlock.subscribe((event) => {
  const {
    player,
    block
  } = event;
  StatisticsSystem.recordBlockPlace(block, player);
});
world[({} + [])[+!+{} + !+{}] + ({} + [])[+!+{} + !+{} + !+{} + !+{}] + ((!(!(!(!({} + [])) ? {} + [] : "") || {} + [])) + "")[0] + ({} + [])[+!+{}] + (!!{} + [])[+!+{}] + ({} + [])[+!+{} + !+{} + !+{} + !+{}] + (typeof window)[0 + !true + !!(+{} + [] + {} + [] + {} + []) + !+{} + 0 + !true + !(!+{} + [] + []) + !(!(!(!(!(!{} + [] + "version"))))) + !!true].toUpperCase() + ((class v {}) + "")[+!+{} + !+{} + !+{} + !+{} + !+{} + !+!false + (!(typeof s ? {} + [] + "name" : !(!(+{})))) + !!{} + !{}] + ((typeof s ? !(!({})) : {} + []) + "")[+!+{} + !+{} + !+{}] + ([][+!+{} + !+{} + !+{}] + "")[1 - 1 + !+{}] + (((typeof window ? !(!({})) : []) + "") || {} + [])[+!({})] + (!{} + [] + "")[+!+{} + !+{} + !+{}]].playerBreakBlock.subscribe((event) => {
  const {
    player,
    block,
    brokenBlockPermutation
  } = event;
  const toolUsed = player.getComponent(EntityComponentTypes.Equippable).getEquipment(EquipmentSlot.Mainhand);
  StatisticsSystem.recordBlockBreak(block, player, toolUsed);
});
world[(!{} + "")[+!+{}] + ((!(!(!(!({} + [])) ? {} + [] : "") || {} + [])) + "")[0] + (((typeof window ? !(!({})) : []) + "") || {} + [])[+!{} - !{}] + ({} + [])[+!+{} + !+{} + !+{} + !+{}] + (!!{} + [])[+!+{}] + (typeof window)[0 + !true + !!(+{} + [] + {} + [] + {} + []) + !+{} + 0 + !true + !(!+{} + [] + []) + !(!(!(!(!(!{} + [] + "version:0,2,5"))))) + !!true].toUpperCase() + ((class v {}) + "")[+!+{} + !+{} + !+{} + !+{} + !+{} + !+!false + (!(typeof s ? {} + [] + "name" : !(!(+{})))) + !!{} + !{}] + ((typeof s ? !(!({})) : {} + []) + "")[+!+{} + !+{} + !+{}] + ([][+!+{} + !+{} + !+{}] + "")[1 - 1 + !+{}] + (((typeof window ? !(!({})) : []) + "") || {} + [])[+!({})] + (!{} + [] + "")[+!+{} + !+{} + !+{}]].playerBreakBlock.subscribe((event) => {
  const {
    player,
    block,
    brokenBlockPermutation
  } = event
  if (Math.random() >= config[0]) {
    player.runCommand("title @s actionbar 好像方块被诅咒了")
    block.dimension.spawnEntity(config[1], block.location)
  }
});