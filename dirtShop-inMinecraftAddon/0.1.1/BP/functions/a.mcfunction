scoreboard objectives add a dummy
scoreboard objectives add §k§l§r§4§l泥土数量 dummy
scoreboard objectives setdisplay sidebar §k§l§r§4§l泥土数量
scoreboard players add tick a 1
execute as @a at @s if entity @e[type=armor_stand,r=0.3,scores={a=2..}] run function 1/b
execute as @a at @s if entity @e[type=armor_stand,r=16] run function 1/c
execute if score a a matches -101 run function 1/gamerule_ON
scoreboard players set @a[scores={§k§l§r§4§l泥土数量=..0}] §k§l§r§4§l泥土数量 0
execute as @a[tag=!v] run scoreboard players set @s §k§l§r§4§l泥土数量 0
tag @a[tag=!v] add v
tellraw @a[scores={a=-104}] {"rawtext":[{"text":"你即将拥有18个隐藏物品"}]}
give @a[scores={a=-104}] structure_void 1 1 
give @a[scores={a=-104}] frosted_ice 
give @a[scores={a=-104}] respawn_anchor 1 4 
give @a[scores={a=-104}] end_portal_frame 1 4 
give @a[scores={a=-104}] purpur_block 1 3 
give @a[scores={a=-104}] ender_dragon_spawn_egg 
give @a[scores={a=-104}] wither_spawn_egg 
give @a[scores={a=-104}] jigsaw 
give @a[scores={a=-104}] light_block 1 15 
give @a[scores={a=-104}] border_block 
give @a[scores={a=-104}] barrier  
give @a[scores={a=-104}] structure_block 
give @a[scores={a=-104}] allow 
give @a[scores={a=-104}] deny 
give @a[scores={a=-104}] command_block_minecart 
give @a[scores={a=-104}] repeating_command_block 
give @a[scores={a=-104}] chain_command_block 
give @a[scores={a=-104}] command_block  
give @a[scores={a=-104}] light_block 1 14
scoreboard players set @a[scores={a=-104}] a 0
execute as @a[scores={a=-105}] at @s run particle minecraft:redstone_ore_dust_particle ~~0.4~
execute as @a[scores={a=-105}] at @s run particle minecraft:lab_table_misc_mystical_particle ~~0.9~
execute as @a[scores={a=-105}] at @s run particle minecraft:blue_flame_particle ~~~
execute as @a[scores={a=-105}] at @s run particle minecraft:basic_flame_particle ~~~
execute if score tick a matches 2 run scoreboard players set tick a 0
#输入/scoreboard plyers set @s a -104获得一些隐藏物品，输入/scoreboard plyers set @s a -105获得飒飒的粒子伴身！编写工具：MT管理器，没有用VSC 学习时长两月半，不足请海融（握拳敬礼）