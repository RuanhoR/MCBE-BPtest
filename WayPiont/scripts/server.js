import {
  world,
  system
} from "@minecraft/server"
import {
  ActionFormData,
  ModalFormData
} from "@minecraft/server-ui";

/*
主函数
*/
function WPtoMain(player) {
  const DIMENSION_NAMES = {
    "overworld": "主世界",
    "nether": "下界",
    "the_end": "末地"
  };
  // 维度名称映射表
  function showMainMenu() {    // 主菜单
    new ActionFormData()
      .title("传送系统")
      .button('传送到玩家')
      .button('管理传送点')
      .show(player)
      .then(response => {
        /*
          ActionFromData
          的表单响应：
          canceled：是否取消（按下右上角的✕）
          selection：选择的按钮序号，如果canceled就是undefined
          
          ModalFormData
          的表单响应：
          formValues（数组，按创建时的顺序排序）
        */
        if (response.canceled) return;
        response.selection === 0 ? showPlayerList() : showWaypointMenu();
      })
      .catch(error => player.sendMessage("主菜单错误:", error));    // 捕捉错误
  }
  function showPlayerList() {
    const onlinePlayers = world.getPlayers().filter(p => p.id !== player.id);
    if (onlinePlayers.length === 0) {
    /*
    因为这个判定我测不了
    */
      player.sendMessage("§c当前没有其他在线玩家");
      return showMainMenu();
    }
    const form = new ActionFormData().title("选择要传送的玩家");
    onlinePlayers.forEach(p => {
      form.button(`${p.name}\n§7${getDimensionName(p.dimension)}`);
      // 遍历玩家来创建按钮
    });

    form.show(player)
      .then(response => {
        if (response.canceled) return showMainMenu();
        const targetPlayer = onlinePlayers[response.selection];
        // 获取玩家数据
        if (player.dimension !== targetPlayer.dimension) {
          // 判定是否维度相同的人自己
          confirmCrossDimensionTeleport(targetPlayer);
        } else {
          teleportToPlayer(targetPlayer);
        }
      })
      .catch(error => player.sendMessage("玩家列表错误:", error));
  }


  function confirmCrossDimensionTeleport(targetPlayer) {
    new ActionFormData()
      .title(`传送到 ${targetPlayer.name}?`)
      .body(`目标位于: ${getDimensionName(targetPlayer.dimension)}`)
      .button("确认传送")
      .button("取消")
      .show(player)
      .then(response => {
        if (response.canceled || response.selection === 1) {
          player.sendMessage("§6已取消传送");
        } else {
          teleportToPlayer(targetPlayer);
        }
      })
      .catch(error => player.sendMessage("跨维度确认错误:", error));// 检查
  }


  function teleportToPlayer(targetPlayer) {
    try {
      player.teleport(targetPlayer.location, {
        dimension: targetPlayer.dimension
      });
      player.sendMessage(`§a已传送到 ${targetPlayer.name}`);
      targetPlayer.sendMessage(`§e${player.name} 已传送到你身边`);
    } catch (error) {
      player.sendMessage("§c传送失败: " + error.message);
    }
  }


  function showWaypointMenu() {
    const waypoints = getWaypoints();
    new ActionFormData()
      .title(`传送点 (${waypoints.length}个)`)
      .button("添加当前位置为传送点")
      .button("查看传送点列表")
      .show(player)
      .then(response => {
        if (response.canceled) return showMainMenu();
        response.selection === 0 ? addCurrentLocationAsWaypoint() : showWaypointList();
      })
      .catch(error => player.sendMessage("传送点菜单错误:", error));
  }


  function addCurrentLocationAsWaypoint() {
    const waypoints = getWaypoints();
    const loc = player.location;
    let waypointNumber = 1;
    while (waypoints.some(wp => wp.name === `传送点$${waypointNumber}`)) {
      waypointNumber++;
    }

    const newWaypoint = {
      name: `传送点$${waypointNumber}`,
      x: Math.floor(loc.x * 10) / 10,
      y: Math.floor(loc.y * 10) / 10,
      z: Math.floor(loc.z * 10) / 10,
      dimension: player.dimension.id,
      creator: player.name,
      createdAt: Date.now()
    };

    waypoints.push(newWaypoint);
    saveWaypoints(waypoints);
    player.sendMessage(`§a已添加传送点: ${newWaypoint.name}`);
    showWaypointMenu();
  }


  function showWaypointList() {
    const waypoints = getWaypoints();

    if (waypoints.length === 0) {
      player.sendMessage("§e你还没有任何传送点");
      return showWaypointMenu();
    }

    const form = new ActionFormData().title("选择传送点");

    waypoints.forEach(wp => {
      form.button(`${wp.name}\n§7${getDimensionName(wp.dimension)} (${wp.x},${wp.y},${wp.z})`);
    });

    form.show(player)
      .then(response => {
        if (response.canceled) return showWaypointMenu();

        const wp = waypoints[response.selection];
        showWaypointActions(wp, response.selection);
      })
      .catch(error => player.sendMessage("传送点列表错误:", error));
  }


  function showWaypointActions(wp, index) {
    new ActionFormData()
      .title(wp.name)
      .button("§a传送到此点")
      .button("§c删除此点")
      .show(player)
      .then(response => {
        if (response.canceled) return showWaypointList();

        if (response.selection === 0) {
          teleportToWaypoint(wp);
        } else {
          deleteWaypoint(index);
        }
      })
      .catch(error => player.sendMessage("传送点操作错误:", error));
  }


  function teleportToWaypoint(wp) {
    try {
      player.teleport({
        x: wp.x,
        y: wp.y,
        z: wp.z
      }, {
        dimension: world.getDimension(wp.dimension)
      });
      player.sendMessage(`§a已传送到 ${wp.name}`);
      showMainMenu();
    } catch (error) {
      player.sendMessage("§c未知原因，传送失败\n: " + error.message);
    }
  }


  function deleteWaypoint(index) {
    const waypoints = getWaypoints();
    const deletedName = waypoints[index].name;
    waypoints.splice(index, 1);
    saveWaypoints(waypoints);
    player.sendMessage(`§a已删除传送点: ${deletedName}`);
    showWaypointList();
  }


  function getDimensionName(dimension) {
    return DIMENSION_NAMES[dimension?.id || dimension] || dimension;
  }

  function getWaypoints() {
    try {
      return JSON.parse(player.getDynamicProperty("waypoints")) || [];
      // DynamicProperty 使用格式：entity.getDynamicProperty(键名) entity.setDynamicProperty(键名,新值) 
    } catch {
      return [];
    }
  }

  function saveWaypoints(waypoints) {
    player.setDynamicProperty("waypoints", JSON.stringify(waypoints));
  }

                // 启动！
  showMainMenu();
}

world.afterEvents.itemUse.subscribe(e=>{
const {
 source: player,
 itemStack: item
} = e
return item?.typeId=="minecraft:iron_ingot" ? WPtoMain(player) : ""
})
