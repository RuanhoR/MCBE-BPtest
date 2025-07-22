#编写工具：MT管理器，没有用VSC
tag @a add a
tag @e[type=armor_stand] add a
tag @e[type=zombie] add a
tag @e[type=villager] add a
tag @e[type=skeleton] add a
execute as @e[scores={a=2..},type=armor_stand] at @s run effect @e[tag=!a,r=8] instant_damage 255 255 true
execute as @e[scores={a=2..},type=armor_stand] at @s run effect @a[tag=a,r=8] instant_health 255 255 true
execute as @e[type=armor_stand] at @s run effect @a[r=3.2] weakness 1 255 true
tag @e remove a
scoreboard players set @e[name=木头,type=armor_stand] a 2
scoreboard players set @e[name=金合欢木,type=armor_stand] a 3
scoreboard players set @e[name=白桦原木,type=armor_stand] a 4
scoreboard players set @e[name=深色橡树原木,type=armor_stand] a 5
scoreboard players set @e[name=樱花原木,type=armor_stand] a 6
scoreboard players set @e[name=红树林原木,type=armor_stand] a 7
scoreboard players set @e[name=丛林原木,type=armor_stand] a 8
scoreboard players set @e[name=云杉原木,type=armor_stand] a 9
scoreboard players set @e[name=苍白橡木原木,type=armor_stand] a 10
scoreboard players set @e[name=圆石,type=armor_stand] a 11
scoreboard players set @e[name=石头,type=armor_stand] a 12
scoreboard players set @e[name=煤矿石,type=armor_stand] a 13
scoreboard players set @e[name=深层煤矿石,type=armor_stand] a 14
scoreboard players set @e[name=绿宝石,type=armor_stand] a 15
scoreboard players set @e[name=铜矿石,type=armor_stand] a 16
scoreboard players set @e[name=钻石原矿,type=armor_stand] a 17
scoreboard players set @e[name=金矿石,type=armor_stand] a 18
scoreboard players set @e[name=铁矿石,type=armor_stand] a 19
scoreboard players set @e[name=青金石矿石,type=armor_stand] a 20
scoreboard players set @e[name=下界金矿石,type=armor_stand] a 21
scoreboard players set @e[name=下界石英矿石,type=armor_stand] a 22
scoreboard players set @e[name=红石矿石,type=armor_stand] a 23
scoreboard players set @e[name=深层红石矿石,type=armor_stand] a 24
scoreboard players set @e[name=深层铁矿石,type=armor_stand] a 25
scoreboard players set @e[name=深层绿宝石,type=armor_stand] a 26
scoreboard players set @e[name=深层铜矿石,type=armor_stand] a 27
scoreboard players set @e[name=深层金矿石,type=armor_stand] a 28
scoreboard players set @e[name=深层青金石矿石,type=armor_stand] a 29
scoreboard players set @e[name=沙子,type=armor_stand] a 30
scoreboard players set @e[name=甘蔗,type=armor_stand] a 31
scoreboard players set @e[name=金合欢树苗,type=armor_stand] a 32
scoreboard players set @e[name=金合欢树叶,type=armor_stand] a 33
scoreboard players set @e[name=远古残骸,type=armor_stand] a 34
scoreboard players set @e[name=紫水晶母岩,type=armor_stand] a 35
scoreboard players set @e[name=紫水晶块,type=armor_stand] a 36
scoreboard players set @e[name=紫水晶簇,type=armor_stand] a 37
scoreboard players set @e[name=紫水晶碎片,type=armor_stand] a 38
scoreboard players set @e[name=铁砧,type=armor_stand] a 39
scoreboard players set @e[name=苹果,type=armor_stand] a 40
scoreboard players set @e[name=犰狳鳞甲,type=armor_stand] a 41
scoreboard players set @e[name=安山岩,type=armor_stand] a 42
scoreboard players set @e[name=箭,type=armor_stand] a 43
scoreboard players set @e[name=竹子,type=armor_stand] a 44
scoreboard players set @e[name=白桦树叶,type=armor_stand] a 45
scoreboard players set @e[name=白桦树苗,type=armor_stand] a 46
scoreboard players set @e[name=燧石,type=armor_stand] a 47
scoreboard players set @e[name=杜鹃花丛,type=armor_stand] a 48
scoreboard players set @e[name=杜鹃树叶,type=armor_stand] a 49
scoreboard players set @e[name=美西螈桶,type=armor_stand] a 50
scoreboard players set @e[name=烤土豆儿,type=armor_stand] a 51
scoreboard players set @e[name=蓝花美耳草,type=armor_stand] a 52
scoreboard players set @e[name=盛开的杜鹃花树叶,type=armor_stand] a 53
scoreboard players set @e[name=海带,type=armor_stand] a 54
scoreboard players set @e[name=海洋之心,type=armor_stand] a 55
scoreboard players set @e[name=海绵,type=armor_stand] a 56
scoreboard players set @e[name=海龟壳,type=armor_stand] a 57
scoreboard players set @e[name=海晶灯,type=armor_stand] a 58
scoreboard players set @e[name=海泡菜,type=armor_stand] a 59
scoreboard players set @e[name=苔藓块,type=armor_stand] a 60
scoreboard players set @e[name=嘎枝之心,type=armor_stand] a 61
scoreboard players set @e[name=海晶石,type=armor_stand] a 62
scoreboard players set @e[name=暗海晶石,type=armor_stand] a 63
scoreboard players set @e[name=海晶碎片,type=armor_stand] a 64
scoreboard players set @e[name=海晶砂粒,type=armor_stand] a 65
scoreboard players set @e[name=烈焰棒,type=armor_stand] a 66
scoreboard players set @e[name=蓝色潜影盒,type=armor_stand] a 68
scoreboard players set @e[name=火药,type=armor_stand] a 69
scoreboard players set @e[name=镶铆盔甲纹饰锻造模板,type=armor_stand] a 70
scoreboard players set @e[name=旋风棒,type=armor_stand] a 67
scoreboard players set @e[name=海岸盔甲纹饰锻造模板,type=armor_stand] a 71
scoreboard players set @e[name=沙丘盔甲纹饰锻造模板,type=armor_stand] a 72
scoreboard players set @e[name=眼眸盔甲纹饰锻造模板,type=armor_stand] a 73
scoreboard players set @e[name=涡流盔甲纹饰锻造模板,type=armor_stand] a 74
scoreboard players set @e[name=雇主盔甲纹饰锻造模板,type=armor_stand] a 75
scoreboard players set @e[name=下界合金升级锻造模板,type=armor_stand] a 76
scoreboard players set @e[name=牧民盔甲纹饰锻造模板,type=armor_stand] a 77
scoreboard players set @e[name=塑造盔甲纹饰锻造模板,type=armor_stand] a 79
scoreboard players set @e[name=肋骨盔甲纹饰锻造模板,type=armor_stand] a 78
execute as @a[hasitem={item=dirt,quantity=3..}] if score tick a matches 2 run scoreboard players add @s §k§l§r§4§l泥土数量 1
execute as @a[hasitem={item=dirt,quantity=3..}] if score tick a matches 2 run clear @s dirt 0 1
execute as @a at @s if entity @e[r=3,type=armor_stand] run titleraw @s actionbar {"rawtext":[{"text":"§l你拥有§4："},{"score":{"name":"@s","objective":"§k§l§r§4§l泥土数量"}},{"text":"§r§l个泥土 （不，背包里没有[doge]）"}]}
execute as @a at @s unless entity @e[r=3,type=armor_stand,scores={a=2..}] run titleraw @s actionbar {"rawtext":[{"text":"               | §6§l泥土商店 §r| \n§r§e§7挖掘两个以上泥土并靠近商店 即可转存到数据内\n可通过 观察右侧榜单确认自己的泥土数量\n兑换时请仔细阅读告示牌上的内容 以免弄错 概不退还。"}]}
execute as @e[type=armor_stand,scores={a=5}] at @s run particle nt:nitu ~1.60~~1.60
execute as @e[type=armor_stand,scores={a=5}] at @s run particle nt:bang ~1.60~~7.60
gamerule commandblockoutput false
gamerule sendcommandfeedback false 