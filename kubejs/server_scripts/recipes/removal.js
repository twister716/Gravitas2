// priority 10
const toolsToRemove = [
  "bismuth_bronze",
  "black_bronze",
  "bronze",
  "iron",
  "steel",
  "invar",
  "black_steel",
  "blue_steel",
  "red_steel"
]
function logRecipeCategories() {
  let categories = global.jeiRuntime.recipeManager.createRecipeCategoryLookup().get().toList()
  categories.forEach(category => {
      console.log(category.getRecipeType().getUid());
  })
}

let recipeRemoval = (/** @type {Internal.RecipesEventJS} */ event) => {
  // After adding mods, use this to update client_scripts/recipe_categories:
  // logRecipeCategories();

  // Global remove + hides
  global.itemsToRemove.forEach(item => event.remove({output: item}))
  // Create bucket filling
  global.fluidsWithBucketsToRemove.forEach(item => event.remove({input: item}))

  event.remove({ id: "tfc:crafting/bloomery" })
  event.remove({ id: "computercraft:computer_normal" })
  event.remove({ id: "computercraft:computer_advanced_upgrade" })
  event.remove({ id: "computercraft:computer_advanced" })
  event.remove({ id: "computercraft:pocket_computer_normal" })
  event.remove({ id: "computercraft:pocket_computer_advanced_upgrade" })
  event.remove({ id: "computercraft:pocket_computer_advanced" })
  event.remove({ id: "computercraft:wireless_modem_normal" })
  event.remove({ id: "computercraft:wireless_modem_advanced"})
  event.remove({ id: "vintageimprovements:curving/iron_sheet"})
  event.remove({ id: "vintageimprovements:rolling/andesite_plate"})
  event.remove({ id: "vintageimprovements:pressing/andesite_alloy"})
  //GT
  event.remove({ id: "gtceu:shaped/stick_wrought_iron" })
  event.remove({ id: "gtceu:cutter/cut_glass_block_to_plate_water"})
  event.remove({ id: "gtceu:shaped/stick_long_stick_wrought_iron" })
  event.remove({ id: "gtceu:shaped/wire_cutter_wrought_iron" })
  event.remove({ id: "gtceu:shaped/iron_bucket" })
  event.remove({ id: "gtceu:shaped/casing_primitive_bricks"})
  event.remove({ id: "gtceu:shaped/casing_coke_bricks"})
  event.remove({ id: "gtceu:smelting/fireclay_brick"})
  event.remove({ id: "gtceu:shaped/bronze_primitive_blast_furnace" })
  event.remove([{ id: 'gtceu:shaped/pump_deck' }, { id: 'gtceu:shaped/pump_hatch' }, { id: 'gtceu:shaped/primitive_pump' }])
  event.remove([{ id: "gtceu:shaped/small_wooden_pipe" }, { id: "gtceu:shaped/normal_wooden_pipe" }, { id: "gtceu:shaped/large_wooden_pipe" }])
  event.remove({ id: "gtceu:shapeless/rubber_wood_planks" })
  event.remove([{ id: "gtceu:shaped/steam_extractor_bronze" }, { id: "gtceu:shaped/steam_extractor_steel" }])
  event.remove({ id: "gtceu:shaped/treated_wood_planks"})
  event.remove({ id: "gtceu:alloy_smelter/form_brick" })
  event.remove({ id: "gtceu:assembler/chest"})
  event.remove({ id: "gtceu:assembler/furnace_minecart"})
  event.remove({ id: "gtceu:assembler/smoker"})
  event.remove({ id: "gtceu:assembler/enchanting_table"})
  event.remove({ id: "gtceu:assembler/wool_from_string"})
  event.remove({ id: 'gtceu:smelting/sticky_resin_from_slime'})
  event.remove({ id: 'gtceu:shaped/lv_extruder' })
  event.remove({ id: "gtceu:alloy_smelter/anvil"})
  event.remove({ id: "gtceu:extractor/seed_oil_from_tag_seeds"})
  event.remove({ id: "gtceu:extractor/seed_oil_from_beetroot"})
  event.remove({ id: "gtceu:extractor/seed_oil_from_melon"})
  event.remove({ id: "gtceu:extractor/seed_oil_from_pumpkin"})
  event.remove({ id: "gtceu:electric_blast_furnace/steel_from_wrought_iron"})
  event.remove({ id: "gtceu:electric_blast_furnace/steel_from_iron"})
  event.remove({ id: "gtceu:assembly_line/high_performance_computing_array"})
  event.remove({ id: "gtceu:assembly_line/ultimate_battery"})

  //GT / Railcraft Tool Specific
  toolsToRemove.forEach((tool) => {
    event.remove({ output: `gtceu:${tool}_shovel`, mod: "gtceu" })
    event.remove({ output: `gtceu:${tool}_pickaxe`, mod: "gtceu" })
    event.remove({ output: `gtceu:${tool}_axe`, mod: "gtceu" })
    event.remove({ output: `gtceu:${tool}_hoe`, mod: "gtceu" })
    event.remove({ output: `gtceu:${tool}_scythe`, mod: "gtceu" })
    event.remove({ output: `gtceu:${tool}_sword`, mod: "gtceu" })
    event.remove({ output: `gtceu:${tool}_helmet`, mod: "gtceu" })
    event.remove({ output: `gtceu:${tool}_chestplate`, mod: "gtceu" })
    event.remove({ output: `gtceu:${tool}_leggings`, mod: "gtceu" })
    event.remove({ output: `gtceu:${tool}_boots`, mod: "gtceu" })

    event.remove({ output: `railcraft:${tool}_shovel`, mod: "railcraft" })
    event.remove({ output: `railcraft:${tool}_pickaxe`, mod: "railcraft" })
    event.remove({ output: `railcraft:${tool}_axe`, mod: "railcraft" })
    event.remove({ output: `railcraft:${tool}_hoe`, mod: "railcraft" })
    event.remove({ output: `railcraft:${tool}_sword`, mod: "railcraft" })
    event.remove({ output: `railcraft:${tool}_helmet`, mod: "railcraft" })
    event.remove({ output: `railcraft:${tool}_chestplate`, mod: "railcraft" })
    event.remove({ output: `railcraft:${tool}_leggings`, mod: "railcraft" })
    event.remove({ output: `railcraft:${tool}_boots`, mod: "railcraft" })

    //GT General
    event.remove({ id: "gtceu:extractor/fish_oil_from_salmon"})
    event.remove({ id: "gtceu:extractor/fish_oil_from_pufferfish"})
    event.remove({ id: "gtceu:extractor/fish_oil_from_tropical_fish"})
    event.remove({ id: "gtceu:extractor/fish_oil_from_cod"})
    
    event.remove({ id: "gtceu:shaped/plank_to_wooden_shape"})
    event.remove({ id: "gtceu:shaped/rotor_bronze"})
    event.remove({ id: "gtceu:shaped/bronze_hull"})
    event.remove({ id: "gtceu:shapeless/blaze_rod_to_powder"})
    event.remove({ id: "gtceu:shaped/wooden_shape_brick"})
    event.remove({ id: "gtceu:smelting/coke_oven_brick", mod: "gtceu" })
    event.remove({ id: "gtceu:macerator/macerate_blaze_rod"})
    event.remove({ id: "gtceu:macerator/macerate_furnace"})
    event.remove(
        [
            {
                id: 'gtceu:compressor/sandstone'
            },
            {
                id: 'gtceu:centrifuge/red_sand_separation'
            },
            {
                id: 'gtceu:forge_hammer/smooth_sandstone_to_sand'
            },
            {
                id: 'gtceu:forge_hammer/chiseled_sandstone_to_sand'
            },
            {
                id: 'gtceu:forge_hammer/sandstone_to_sand'
            },
            {
                id: 'gtceu:alloy_smelter/alloy_smelt_glass_tube'
            }
        ]
    )
  })

  //Railcraft
  event.remove({ id: /^railcraft:.*_gear/, mod: "railcraft" })
  event.remove({ id: /^railcraft:.*_shears/, mod: "railcraft" })
  event.remove({ id: /^railcraft:rolling.*_plate/, mod: "railcraft" })
  event.remove({ id: /^railcraft:blast_furnace.*/, mod: "railcraft" })
  event.remove({ id: "railcraft:blast_furnace_bricks" })
  event.remove({ id: /^railcraft:coke_oven.*/, mod: "railcraft" })
  event.remove({ id: "railcraft:coke_oven_bricks" })
  event.remove({ id: "railcraft:solid_fueled_firebox" })
  event.remove({ id: "railcraft:brass_ingot_crafted_with_ingots" })
  event.remove({ id: "railcraft:wooden_tie"})
  event.remove({ id: "railcraft:wooden_tie_bottle"})

  /// Railways (Steam n Rails)
  event.remove({ mod: "railways", id: /^railways:crafting\/smokestack.*/})
  
  //ATO
  event.remove({ id: /^alltheores:.*/, mod: "alltheores" })

  //ATM
  event.remove({ id: "allthemodium:teleport_pad"})


  //Apotheosis
  event.remove({ id: /^apotheosis:salvaging.*_horse_armor/ })

  //Create
  event.remove({ id: "create:crafting/materials/andesite_alloy" })
  event.remove({ id: "create:crafting/materials/andesite_alloy_from_zinc" })
  event.remove({ id: "create:crafting/materials/andesite_alloy_from_block" })
  event.remove({ id: "create:crafting/kinetics/millstone" })
  event.remove({ id: "create:mixing/andesite_alloy" })
  event.remove({ id: "create:mixing/andesite_alloy_from_zinc" })
  event.remove({ id: "create:deploying/cogwheel" })
  event.remove({ id: "create:deploying/large_cogwheel" })
  event.remove({ input: "minecraft:saddle", mod: "create" })
  event.remove({ input: "minecraft:leather_horse_armor", mod: "create" })
  event.remove({ id: /^create:crushing\/.*_ore/, mod: "create" })
  event.remove({ id: /^create:crushing\/.*_block/, mod: "create" })
  event.remove({ id: /^create:crushing\/.*_armor/, mod: "create" })
  event.remove({ id: "create:crafting/appliances/copper_backtank"})
  event.remove({ id: "create:crafting/appliances/tree_fertilizer"})
  event.remove({ id: "create:crushing/blaze_rod"})
  event.remove({ id: "create:crafting/kinetics/fluid_tank"})
  event.remove({ id: "create:crafting/kinetics/mechanical_press"})
  event.remove({ id: "create:crafting/kinetics/basin"})
  event.remove({ id: "create:crafting/kinetics/empty_blaze_burner"})
  event.remove({ id: "create:filling/sweet_roll"})
  event.remove({ id: "create:crafting/kinetics/belt_connector"})
  event.remove({ id: "woodencog:crafting/kinetics/encased_fan"})
  event.remove({ id: "woodencog:heating/terracotta.json"})
  event.remove({ id: "woodencog:crafting/kinetics/fluid_pipe"})
  event.remove({ id: "woodencog:crafting/kinetics/fluid_pipe_vertical"})
  event.remove({ id: "create:crushing/crimsite"})
  event.remove({ id: "create:crushing/crimsite_recycling"})
  event.remove({ id: "create:crushing/ochrum"})
  event.remove({ id: "create:crushing/ochrum_recycling"})
  event.remove({ id: "create:crushing/veridium"})
  event.remove({ id: "create:crushing/veridium_recycling"})
  event.remove({ id: "create:crushing/tuff"})
  event.remove({ id: "create:crushing/tuff_recycling"})
  event.remove({ id: "create:crushing/asurine"})
  event.remove({ id: "create:crushing/asurine_recycling"})
  event.remove({ id: "create:crushing/crimsite"})
  event.remove({ id: "create:crushing/crimsite_recycling"})
  event.remove({ id: "create:crushing/gravel"})
  event.remove({ id: "create:granite_from_stone_types_granite_stonecutting"})
  event.remove({ id: "create:diorite_from_stone_types_diorite_stonecutting"})
  event.remove({ id: "create:andesite_from_stone_types_andesite_stonecutting"})
  event.remove({ id: "create:calcite_from_stone_types_calcite_stonecutting"})
  event.remove({ id: "create:milling/dripstone_block"})
  event.remove({ id: "create:milling/calcite"})
  event.remove({ id: "create:splashing/sand" })
  event.remove({ id: "create:compacting/diorite_from_flint"})
  event.remove({ id: "vintageimprovements:crushing/scoria_recycling"})
  event.remove({ id: "vintageimprovements:crushing/scoria"})
  event.remove({ id: "create:sequenced_assembly/precision_mechanism"})
  event.remove({ id: "createdieselgenerators:crafting/asphalt_block"})
  event.remove({ id: "createdieselgenerators:mixing/asphalt_block"})

  //Cast iron plate jank
  event.remove({ id: "gtceu:shaped/plate_iron" })
  event.remove({ id: "create:pressing/iron_ingot" })
  event.remove({ id: "railcraft:rolling/iron_plate" })

  //FramedBlocks
  event.remove({ id: "framedblocks:framed_torch" })
  event.remove({ id: "framedblocks:framed_soul_torch" })
  event.remove({ id: "framedblocks:framed_chest" })
  event.remove({ id: "framedblocks:framing_saw/framed_chest" })
  event.remove({ id: "framedblocks:framed_secret_storage" })

  //Storage Drawers / Framed Drawers
  event.remove({ id: /^storagedrawers:oak_.*/, mod: "storagedrawers" })
  event.remove({ id: /^storagedrawers:spruce_.*/, mod: "storagedrawers" })
  event.remove({ id: /^storagedrawers:birch_.*/, mod: "storagedrawers" })
  event.remove({ id: /^storagedrawers:jungle_.*/, mod: "storagedrawers" })
  event.remove({ id: /^storagedrawers:acacia_.*/, mod: "storagedrawers" })
  event.remove({ id: /^storagedrawers:dark_oak_.*/, mod: "storagedrawers" })
  event.remove({ id: /^storagedrawers:crimson_.*/, mod: "storagedrawers" })
  event.remove({ id: /^storagedrawers:warped_.*/, mod: "storagedrawers" })
  event.remove({ id: /^storagedrawers:mangrove_.*/, mod: "storagedrawers" })
  event.remove({ id: /^storagedrawers:cherry_.*/, mod: "storagedrawers" })
  event.remove({ id: /^storagedrawers:.*_storage_upgrade/, mod: "storagedrawers"})
  
  event.remove({ id: /^framedcompactdrawers:.*/, mod: "framedcompactdrawers" })

  //Integrated Dynamics
  event.remove({ id: "integrateddynamics:crafting/squeezer" })
  event.remove({ id: "integrateddynamics:crafting/mechanical_squeezer" })
  event.remove({ mod: "integrateddynamics", output: "minecraft:blaze_powder" })
  event.remove({ mod: "integrateddynamics", output: "minecraft:blaze_powder" })
  event.remove({ type: "integrateddynamics:squeezer"})
  event.remove({ type: "integrateddynamics:mechanical_squeezer"})
  event.remove({ type: "integrateddynamics:drying_basin", output: "minecraft:leather"})
  event.remove({ type: "integrateddynamics:mechanical_drying_basin", output: "minecraft:leather"})
  event.remove({ id: "integrateddynamics:special/part_connector_omni_directional" })
  event.remove({ id: "integrateddynamics:crafting/part_connector_mono_directional" })

  // Railcraft
  event.remove({ id: "railcraft:bronze_ingot_crafted_with_ingots" })
  event.remove({ mod: "railcraft", id: `/^railcraft:.*coke.*/`})
  event.remove({ mod: "railcraft", id: `/^railcraft:crusher\/.*cobbleston.*/`})
  event.remove({ id: "railcraft:invar_ingot_crafted_with_ingots"})
  event.remove({ id: "railcraft:steel_anvil"})
  //Woodencog
  event.remove({ id: /^woodencog:cutting\/.*_rod/, mod: "woodencog" })
  event.remove({ id: /^woodencog:cutting\/.*_alloy/, mod: "woodencog" })
  event.remove({ id: /^woodencog:rock_knapping\/.*_alloy/, mod: "woodencog" })
  event.remove({ id: /^woodencog:cutting\/.*_bloom/, mod: "woodencog" })
  event.remove({ id: /^woodencog:cutting\/.*door/, mod: "woodencog" })
  event.remove({ id: /^woodencog:cutting\/.*_sheet/, mod: "woodencog" })
  event.remove({ id: /^woodencog:cutting\/.*_steel_ingot/, mod: "woodencog" })
  event.remove({ id: "woodencog:crafting/kinetics/belt_connector"})
  event.remove({ id: /^woodencog:deploying\/.*/, mod : "woodencog"})
  event.remove({ id: /^woodencog:heating\/.*_dough/, mod: "woodencog" })
  event.remove({ id: /^woodencog:compacting\/.*/, mod: "woodencog" , input: "minecraft:clay_ball"})
  event.remove({ id: /^woodencog:compacting\/.*/, mod: "woodencog" , input: "tfc:fire_clay"})


  // TreeTap
  event.remove({ mod: "treetap", output: "treetap:tap" })
  event.remove({ id: "treetap:water_from_crying_obsidian" })

  // Immersive Engineering

  event.remove({ mod: "immersiveengineering", output: "immersiveengineering:cokebrick" })
  event.remove({ mod: "immersiveengineering", output: "immersiveengineering:slab_cokebrick" })
  event.remove({ mod: "immersiveengineering", output: "immersiveengineering:blastbrick" })
  event.remove({ mod: "immersiveengineering", output: "immersiveengineering:blastbrick_reinforced" })
  event.remove({ mod: "immersiveengineering", output: "immersiveengineering:blastfurnace_preheater" })
  event.remove({ mod: "immersiveengineering", output: "immersiveengineering:slab_blastbrick" })
  event.remove({ mod: "immersiveengineering", output: "immersiveengineering:slab_blastbrick_reinforced" })
  event.remove({ mod: "immersiveengineering", output: "immersiveengineering:fertilizer" })
  event.remove({ mod: "immersiveengineering", output: "immersiveengineering:cloche" })
  event.remove({ mod: "immersiveengineering", output: "immersiveengineering:waterwheel_segment" })
  event.remove({ mod: "immersiveengineering", output: "immersiveengineering:windmill_base" })
  event.remove({ mod: "immersiveengineering", output: "immersiveengineering:watermill" })
  event.remove({ mod: "immersiveengineering", output: "immersiveengineering:windmill" })
  event.remove({ mod: "immersiveengineering", output: "immersiveengineering:sample_drill" })
  event.remove({ mod: "immersiveengineering", output: "immersiveengineering:dynamo" })
  event.remove({ mod: "immersiveengineering", output: "immersiveengineering:wooden_barrel" })
  event.remove({ mod: "immersiveengineering", output: "immersiveengineering:crafting_table" })
  event.remove({ mod: "immersiveengineering", output: "immersiveengineering:crate" })
  event.remove({ mod: "immersiveengineering", output: "immersiveengineering:reinforced_crate" })
  event.remove({ mod: "immersiveengineering", output: "immersiveengineering:coal_coke" })
  event.remove({ mod: "immersiveengineering", output: "immersiveengineering:dust_coke" })
  event.remove({ mod: "immersiveengineering", output: "immersiveengineering:coke" })
  event.remove({ mod: "immersiveengineering", output: "immersiveengineering:slab_coke" })

  event.remove({ mod: "immersiveengineering", id: /^immersiveengineering:.*_hammering/})
  event.remove({ mod: "immersiveengineering", id: /^immersiveengineering:crafting\/raw_hammercrushing.*/})
  event.remove({ mod: "immersiveengineering", id: /^immersiveengineering:crafting\/hammercrushing.*/})

  event.remove({ mod: "immersiveengineering", id: /^immersiveengineering:fermenter\/.*/})
  event.remove({ mod: "immersiveengineering", id: /^immersiveengineering:mixer\/.*/})
  event.remove({ mod: "immersiveengineering", id: /^immersiveengineering:squeezer\/.*/})

  event.remove({ id: "immersiveengineering:crafting/survey_tools"})
  event.remove({ id: "immersiveengineering:crafting/string"})
  event.remove({ id: `/^immersiveengineering:crafting\/pickaxe_.*/`})
  event.remove({ id: `/^immersiveengineering:crafting\/axe_.*/`})
  event.remove({ id: `/^immersiveengineering:crafting\/shovel_.*/`})
  event.remove({ id: `/^immersiveengineering:crafting\/sword_.*/`})
  event.remove({ id: `/^immersiveengineering:crafting\/hoe_.*/`})
  event.remove({ id: `/^immersiveengineering:crafting\/stick_.*/`})
  event.remove({ id: "immersiveengineering:crafting/wirecutter"})
  event.remove({ id: "immersiveengineering:crafting/craftingtable"})
  event.remove({ id: "immersiveengineering:crafting/workbench"})
  event.remove({ id: "immersiveengineering:crafting/ersatz_leather"})
  event.remove({ id: "createaddition:pressing/constantan_ingot"})
  event.remove({output: `/^immersiveengineering:plate_.*/`, input: "immersiveengineering:wirecutter"})
  event.remove({ id: "createaddition:compat/immersiveengineering/item_application/kiln_brick"})
  event.remove({ id: "createaddition:compat/immersiveengineering/item_application/kiln_brick_using_deployer"})
  

  //Firmalife
  event.remove({ id: "firmalife:alloy/stainless_steel"})
  event.remove({ id: /firmalife:heating\/ore\/.*_chromite/})
  //AE2

  event.remove({ id: `/^ae2:tools\/.*_pickaxe/`})
  event.remove({ id: `/^ae2:tools\/.*_axe/`})
  event.remove({ id: `/^ae2:tools\/.*_spade/`})
  event.remove({ id: `/^ae2:tools\/.*_sword/`})
  event.remove({ id: `/^ae2:tools\/.*_hoe/`})

  //Ender tanks & chests
  event.remove(
    [
      {
        mod: 'enderchests'
      },
      {
        mod: 'endertanks'
      }
    ]
  )
  //Vanilla
  event.remove({ output: "minecraft:dirt"})
  event.remove({ output: "minecraft:coarse_dirt"})
  event.remove({ output: "minecraft:gravel"})
  event.remove({ output: "minecraft:mud"})
  event.remove({ output: "minecraft:furnace"})
  event.remove({ output: "minecraft:blast_furnace"})
  event.remove({ id: "minecraft:andesite" })
  event.remove({ id: "minecraft:furnace_minecart" })
  event.remove({ id: "minecraft:brick" })
  event.remove({ id: "minecraft:blaze_powder"})
  event.remove({ id: "minecraft:diorite"})
  event.remove({ id: "minecraft:stone"})
  event.remove({ id: "minecraft:sugar_from_honey_bottle"})

  //PM
  event.remove({ id: "potionsmaster:blaze_powder"})

  //EnderIO
  event.remove({ id: "enderio:stick"})
  event.remove({ id: "enderio:primitive_alloy_smelter"})
  event.remove({ id: "enderio:sag_mill"})
  event.remove({ id: "enderio:alloy_smelter"})
  event.remove({ id: "enderio:alloy_smelting/dark_steel_ingot"})
  event.remove({ id: "enderio:stirling_generator"})
  event.remove({ id: "enderio:fluid_tank"})
  event.remove({ id: "enderio:pressurized_fluid_tank"})
  event.remove({ id: "enderio:wood_gear"})
  event.remove({ id: "enderio:vibrant_gear"})
  event.remove({ id: "enderio:dark_bimetal_gear"})


  //Waystones
  event.remove({ id: `/^waystones:.*/`})

  //Astikorcarts
  event.remove({ id: "astikorcarts:plow"})
  event.remove({ id: "astikorcarts:animal_cart"})
  event.remove({ id: "astikorcarts:supply_cart"})
  event.remove({ id: "astikorcarts:wheel"})

  //Computercraft
  event.remove({ id: "computercraft:turtle_normal"})

  //Corail
  event.remove({ id: "tombstone:receptacle_of_familiar"})

  //SimplePlanes
  event.remove({ id: "simpleplanes:liquid_engine"})

  //SFM

  event.remove({ id: "sfm:manager"})
  event.remove({ id: "sfm:cable"})
  event.remove({ id: "sfm:water_tank"})
  event.remove({ id: "sfm:disk"})
  event.remove({ id: "sfm:labelgun"})
  event.remove({ id: "sfm:network_tool"})
  event.remove({ id: "sfm:printing_press"})
  event.remove({ id: "sfm:printing_form"})

  //I&F
  event.remove({ id: `/^iceandfire:armor_silver_metal.*/`})
  event.remove({ id: "iceandfire:silver_sword"})
  event.remove({ id: "iceandfire:silver_shovel"})
  event.remove({ id: "iceandfire:silver_pickaxe"})
  event.remove({ id: "iceandfire:silver_axe"})
  event.remove({ id: "iceandfire:silver_hoe"})

  event.remove({ id: `/^iceandfire:armor_copper_metal.*/`})
  event.remove({ id: "iceandfire:copper_sword"})
  event.remove({ id: "iceandfire:copper_shovel"})
  event.remove({ id: "iceandfire:copper_pickaxe"})
  event.remove({ id: "iceandfire:copper_axe"})
  event.remove({ id: "iceandfire:copper_hoe"})
  

  event.remove({ id: `/^iceandfire:.*_pile/`})
  
  //CHALK

  event.remove({ id: `/^chalk:chalk_from_.*/`})
  
  //DECO

  event.remove({ id: 'createdeco:pressing/zinc_sheet'})
  
  //water source do not give recipe
  
  event.remove({ id: 'thoriumreactors:thorium_crafting/water_source_block'})

  //jumbo furnace

  event.remove({ type: "jumbofurnace:jumbo_furnace" })
  event.remove({ id: 'jumbofurnace:jumbo_furnace'})

  //wireless redstone

  event.remove({ id: 'wirelessredstone:remote'}) 
  event.remove({ id: 'wirelessredstone:circuit'}) 
  event.remove({ id: 'wirelessredstone:frequency_tool'}) 
  event.remove({ id: 'wirelessredstone:frequency_sniffer'}) 
  event.remove({ id: 'wirelessredstone:redstone_receiver'}) 
  event.remove({ id: 'wirelessredstone:redstone_transmitter'}) 

  //more red

  event.remove({ id: 'morered:red_alloy_wire'}) 
  event.remove({ type: 'morered:soldering'})
  event.remove({ id: 'morered:soldering_table'})

  //straw hat

  event.remove({ id: 'tfcambiental:crafting/straw_hat'})

  //honey

  event.remove({ id: 'vintageimprovements:centrifugation/honey_comb'})
  event.remove({ id: 'minecraft:honey_bottle'})

  //apotheosis

  event.remove({ id: 'apotheosis:enchanting/xp_bottle'})  
  event.remove({ id: 'apotheosis:enchanting/xp_bottle_2'})  
  event.remove({ id: 'apotheosis:enchanting/xp_bottle_3'})  

  //dripstone

  event.remove({ id: 'minecraft:dripstone_block'}) 

  //ColdsGrappler
  
  event.remove({ id: 'coldsgrappler:grappler'})
  event.remove({ id: "coldsgrappler:extra_rope"})
  event.remove({ id: "coldsgrappler:rope_light"})

  //GT Rock breaker
  
  event.remove({ output: "tfc:rock/raw/diorite", EUt: MV })
  event.remove({ output: "tfc:rock/raw/andesite", EUt: MV })
  event.remove({ output: "tfc:rock/raw/granite", EUt: MV })
  event.remove({ output: "tfc:rock/raw/basalt", EUt: HV })

  //TFCGroomer
  
  event.remove({ id: `/^tfcgroomer:.*_grooming_station/`})

  //gcyr

  event.remove({ id: 'gcyr:mixer/co_mn_br_catalyst'})
  event.remove({ id: 'gcyr:create_mixer/co_mn_br_catalyst'}) 

  //Thorium Reactors
  
  event.remove({ id: 'thoriumreactors:thorium_crafting/machine_casing'})
  event.remove({ id: 'thoriumreactors:thorium_crafting/reactor_casing'})
  event.remove({ id: 'thoriumreactors:thorium_crafting/reactor_controller'})
  event.remove({ id: 'thoriumreactors:thorium_crafting/reactor_valve'})
  event.remove({ id: 'thoriumreactors:thorium_crafting/reactor_control_rod'})
  event.remove({ id: 'thoriumreactors:thorium_crafting/reactor_core'})
  event.remove({ id: 'thoriumreactors:thorium_crafting/turbine_casing'})
  event.remove({ id: 'thoriumreactors:thorium_crafting/turbine_constroller'})
  event.remove({ id: 'thoriumreactors:thorium_crafting/turbine_power_port'})
  event.remove({ id: 'thoriumreactors:thorium_crafting/turbine_valve'})
  event.remove({ id: 'thoriumreactors:thorium_crafting/turbine_rotation_mount'})
  event.remove({ id: 'thoriumreactors:thorium_crafting/turbine_vent'})
  event.remove({ id: 'thoriumreactors:thorium_crafting/electromagnetic_coil'})
  event.remove({ id: 'thoriumreactors:thorium_crafting/thermal_conductor'})
  event.remove({ id: 'thoriumreactors:thorium_crafting/thermal_heat_controller'})
  event.remove({ id: 'thoriumreactors:thorium_crafting/thermal_heat_valve'})
  event.remove({ id: 'thoriumreactors:thorium_crafting/thermal_heatsink'})
  event.remove({ id: 'thoriumreactors:thorium_crafting/reactor_glass'})
  event.remove({ id: 'thoriumreactors:thorium_crafting/turbine_glass'})
  event.remove({ id: 'thoriumreactors:thorium_crafting/reactor_graphite_moderator'})
  event.remove({ id: 'thoriumreactors:thorium_crafting/turbine_rotor'})
  event.remove({ id: 'thoriumreactors:thorium_crafting/configurator'})
  event.remove({ id: 'thoriumreactors:thorium_crafting/module_empty'})
  event.remove({ id: 'thoriumreactors:thorium_crafting/module_io'})
  event.remove({ id: 'thoriumreactors:thorium_crafting/module_energy'})
  event.remove({ id: 'thoriumreactors:thorium_crafting/module_storage'})
  event.remove({ id: 'thoriumreactors:thorium_crafting/module_tank'})
  event.remove({ id: 'thoriumreactors:thorium_crafting/module_sensor'})
  event.remove({ id: 'thoriumreactors:thorium_crafting/module_processing'})
  event.remove({ id: 'thoriumreactors:thorium_crafting/graphite_tube'})
  event.remove({ id: 'thoriumreactors:thorium_crafting/redstone_processor'})
  event.remove({ id: 'thoriumreactors:thorium_crafting/generator'})
  event.remove({ id: 'thoriumreactors:thorium_crafting/fluid_evaporation'})
  event.remove({ id: 'thoriumreactors:thorium_crafting/electrolytic_salt_separator'})
  event.remove({ id: 'thoriumreactors:thorium_crafting/salt_melter'})
  event.remove({ id: 'thoriumreactors:thorium_crafting/concentrator_block'})
  event.remove({ id: 'thoriumreactors:thorium_crafting/decomposer_block'})
  event.remove({ id: 'thoriumreactors:thorium_crafting/uranium_oxidizer_block'})
  event.remove({ id: 'thoriumreactors:thorium_crafting/fluid_centrifuge'})
  event.remove({ id: 'thoriumreactors:thorium_crafting/crystallizer'})
  event.remove({ id: 'thoriumreactors:thorium_crafting/blast_furnace'})
  event.remove({ id: 'thoriumreactors:thorium_crafting/fluid_enricher'})
  event.remove({ id: 'thoriumreactors:evaporating/sodium'})
  event.remove({ id: 'thoriumreactors:electrolysing/potassium'})
  event.remove({ id: 'thoriumreactors:concentrating/yellow_cake'})
  event.remove({ id: 'thoriumreactors:crystallizing/enriched_uranium_pellet'})
  event.remove({ id: 'thoriumreactors:titanium_block_craft_from_ingot'})

  //wireless chargers

  event.remove({ id: 'wirelesschargers:basic_wireless_player_charger'})
  event.remove({ id: 'wirelesschargers:advanced_wireless_player_charger'})
  event.remove({ id: 'wirelesschargers:basic_wireless_block_charger'})
  event.remove({ id: 'wirelesschargers:advanced_wireless_block_charger'})

  event.remove({ output: 'gtceu:quantum_processor_mainframe'})
  
  event.remove({id: "scguns:pebbles_from_gravel"})
  event.remove({id: "minecraft:bamboo_planks"})

  event.remove({ id: "gtceu:shaped/charcoal_pile_igniter"});
  event.remove({ id: "scguns:treated_iron/treated_iron_bucket"});

  //laserio
  event.remove({ id: "laserio:logic_chip" })
  event.remove({ id: "laserio:logic_chip_raw" })
  event.remove({ id: "laserio:laser_node" })
  event.remove({ id: "laserio:laser_connector" })
  event.remove({ id: "laserio:laser_connector_advanced" })
  event.remove({ id: "laserio:overclocker_card" })
  event.remove({ id: "laserio:overclocker_node" })
  event.remove({ id: "laserio:card_item" })
  event.remove({ id: "laserio:card_fluid" })
  event.remove({ id: "laserio:card_redstone" })
  event.remove({ id: "laserio:card_energy" })
  event.remove({ id: "laserio:filter_basic" })
  event.remove({ id: "laserio:filter_nbt" })
  event.remove({ id: "laserio:filter_mod" })
  event.remove({ id: "laserio:filter_tag" })
  event.remove({ id: "laserio:filter_count" })

  //Sophisticated Backpacks
  event.remove({ id: "sophisticatedbackpacks:tool_swapper_upgrade" })

  //piston fixes
  event.remove({ id: "minecraft:piston" })
  event.remove({ id: /^gtceu:shaped\/piston.*/ })

  //immersive aircraft and simpleplanes tweaks

  event.remove({ id: "immersive_aircraft:hull" })
  event.remove({ id: "immersive_aircraft:engine" })
  event.remove({ id: "immersive_aircraft:boiler" })
  event.remove({ id: "simpleplanes:propeller" })
  event.remove({ id: "immersive_aircraft:propeller" })
  event.remove({ id: "immersive_aircraft:airship"})
  event.remove({ id: "immersive_aircraft:cargo_airship"})
  event.remove({ id: "immersive_aircraft:warship"})
  event.remove({ id: "immersive_aircraft:biplane"})
  event.remove({ id: "immersive_aircraft:gyrodyne"})
  event.remove({ id: "immersive_aircraft:quadrocopter"})
  event.remove({ id: "immersive_aircraft:rotary_cannon"})
  event.remove({ id: "immersive_aircraft:heavy_crossbow"})
  event.remove({ id: "immersive_aircraft:bomb_bay"})
  event.remove({ id: "immersive_aircraft:eco_engine"})
  event.remove({ id: "immersive_aircraft:nether_engine"})
  event.remove({ id: "immersive_aircraft:steel_boiler"})
  event.remove({ id: "immersive_aircraft:industrial_gears"})
  event.remove({ id: "immersive_aircraft:sturdy_pipes"})
  event.remove({ id: "immersive_aircraft:hull_reinforcement"})
  event.remove({ id: "immersive_aircraft:gyroscope"})
  event.remove({ id: "immersive_aircraft:improved_landing_gear"})
  event.remove({ id: "railcraft:tunnel_bore"})
  event.remove({ id: "immersive_machinery:tunnel_digger"})
  event.remove({ id: "immersive_machinery:copperfin" })
  event.remove({ id: "minecraft:conduit" })
  event.remove({ id: "minecraft:crossbow" })
  event.remove({ id: "headlight:headlight"})
  event.remove({ id: "buildinggadgets2:gadget_cut_paste"})
}
