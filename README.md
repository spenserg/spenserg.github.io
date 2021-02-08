## ROUTE IDS
* **0** - All Photos (Karen marriage) OBSOLETE
* **1** - Elli Marriage
* **2** - Karen Marriage
* **3** - Popuri Marriage
* **4** - Elli Photo
* **5** - All Photos (Elli marriage)
* **6** - All Berries
* **7** - Maria Marriage
* **8** - Ann Photo
* **9** - Karen Photo
* **10** - All Recipes
* **11** - Maria Photo
* **12** - Ann Marriage
* **13** - Extensions Photo
* **14** - Balloon Photo
* **15** - Horse Race Photo
* **16** - Cow Festival Photo
* **17** - Swimming Photo
* **18** - Dog Race Photo
* **19** - Party Photo
* **20** - Hot Springs Photo
* **21** - All Festivals
* **22** - Baby Photo
* **23** - 100%
* **24** - All Girl Photos

## ACTION PROPERTIES
* **"desc"** - (Description) Words that appear on the action button. REQUIRED
* **"cid"** - (Char ID) Variable, flag, or npc id that changes by the value if this button is selected. "v_" precedes variables, "f_" precedes flags, and "c_" precedes cow related actions.
* **"val"** - (Value) Value that the item indicated by the CID changes by if this button is selected
* **"sr"** - (Same Row) If true, this action will appear on the same row as the previous action. Default: false
* **"sel"** - (Selected) If true, action starts as selected. If false, action will start deselected. Default is true.
* **"imp"** - (Important) If true, action is highlighted in yellow. Usually depicts an action required that day. Default is false.
* **"red"** - (Warning) If true, action is highlighted in red. Usually depicts an action that is technically possible, but should not be done. Default is false.
* **"iid"** - (Image ID) ID of NPC whose image will appear to the left of the text. Overwrites an npc ID "cid" value
* **"t0"** - If this action is turned off, turn the action with this description off
* **"t1"** - If this action is turned off, turn the action with this description on
* **"t2"** - If this action is turned on, turn the action with this description off
* **"t3"** - If this action is turned on, turn the action with this description on

## CONSTANTS
* **_PRICE_BLUE_FEATHER** (980) - Price of a Blue Feather at Ricks Shop
* **_PRICE_BOTTLE** (200) - Price of a Bottle at a Festival
* **_PRICE_BRUSH** (500) - Price of a Brush at Ricks Shop
* **_PRICE_CABINET** (2000) - Price of a Cabinet at Ricks Shop
* **_PRICE_CARPET** (500) - Price of a Carpet at Ricks Shop
* **_PRICE_CLIPPERS** (1000) - Price of Clippers at Ricks Shop
* **_PRICE_MILKER** (1800) - Price of a Milker at Ricks Shop
* **_PRICE_OCARINA** (1200) - Price of an Ocarina at Saibaras Shop
* **_PRICE_VASE** (2000) - Price of a Vase at Saibaras Shop
* **_PRICE_CAKE** (300) - Price of Cake at the Bakery
* **_PRICE_PIE** (350) - Price of Pie at the Bakery
* **_PRICE_COOKIE** (300) - Price of a Cookie at the Bakery
* **_PRICE_TEA** (200) - Price of Tea at the Bakery
* **_PRICE_WINE** (300) - Price of Wine at the Bar
* **_PRICE_LIQUOR** (300) - Price of Liquor at the Bar
* **_PRICE_BEER** (350) - Price of Beer at the Bar
* **_PRICE_MILK** (150) - Price of Milk at the Bar or Bakery
* **_PRICE_CURE_ALL** (1500) - Price of Cure-All at the Potion Shop
* **_PRICE_VITAMIN** (1000) - Price of Vitamins at the Potion Shop
* **_PRICE_VITAMIN_STRONG** (2000) - Price of Strong Vitamins at the Potion Shop
* **_PRICE_SEED_BLUE_MIST** (500) - Price of a Blue Mist seed at the Flower Shop
* **_PRICE_SEED_CABBAGE** (200) - Price of Cabbage seeds at the Flower Shop
* **_PRICE_SEED_CORN** (300) - Price of Corn seeds at the Flower Shop
* **_PRICE_SEED_EGGPLANT** (300) - Price of Eggplant seeds at the Flower Shop
* **_PRICE_SEED_GRASS** (500) - Price of Grass seeds at the Flower Shop
* **_PRICE_SEED_MOONDROP** (300) - Price of Moondrop Flower seeds at the Flower Shop
* **_PRICE_SEED_POTATO** (200) - Price of Potato seeds at the Flower Shop
* **_PRICE_SEED_PINK_CAT_MINT** (300) - Price of Pink Cat Mint seeds at a Festival
* **_PRICE_SEED_STRAWBERRY** (500) - Price of Strawberry seeds at the Flower Shop
* **_PRICE_SEED_TOMATO** (300) - Price of Tomato seeds at the Flower Shop
* **_PRICE_SEED_TURNIP** (200) - Price of Turnip seeds at the Flower Shop
* **_PRICE_CHICKEN** (1500) - Price of a Chicken at the Ranch
* **_PRICE_COW** (6000) - Price of a Cow at the Ranch
* **_PRICE_SHEEP** (4000) - Price of a Sheep at the Ranch
* **_PRICE_FEED** (10) - Price of Feed at the Ranch
* **_PRICE_FODDER** (30) - Price of Fodder at the Ranch
* **_PRICE_MEDICINE** (1000) - Price of Cow/Sheep Medicine at the Ranch
* **_PRICE_MIRACLE_POTION** (3000) - Price of Miracle Potion at the Ranch

* **_CUTSCENE_RICK_ANN_MIN** (40) - Minimum Rick affection to trigger cutscene in his shop with Ann
* **_CUTSCENE_BEACH_MIN** (159) - Minimum Elli affection to trigger cutscene at the beach with Karen
* **_CUTSCENE_WATERMELON_MIN** (150) - Minimum Ann affection to trigger cutscene with watermelons outside the library
* **_CUTSCENE_RABBIT_MIN** (139) - Minimum Cliff affection to trigger rabbit cutscene by Carpenter House
* **_CUTSCENE_COOKFISH_MIN** (142) - Minimum Elli affection to trigger cooking fish cutscene by the Fisherman Tent

* **_SICK_EVENT_MIN** (120) - Minimum affection required for a girl sick event to occur
* **_DREAM_EVENT_MIN** (160) - Minimum affection required for a girl dream event to occur
* **_ANKLE_EVENT_MIN** (180) - Minimum affection required for a girl ankle event to occur
* **_PHOTO_MIN** (200) - Minimum affection required for a girl's photo event to occur
* **_PROPOSE_MIN** (220) - Minimum affection required for a girl to accept proposal with a blue feather
* **_PARTY_ATTEND_MIN** (160) - Minimum affection required for an NPC to attend the party
* **_RICK_FIX_MIN** (31) - Minimum affection required for Rick to fix a broken music box
* **_SPRITE_WINE_MIN** (50) - Minimum affection required for the sprites to mention the wine and the Goddess
* **_DUKE_WINE_MIN** (41) - Minimum affection required for the bartender to give the player the wine
* **_BASIL_BERRY_MIN** (200) - Minimum affection required for Basil to give the player a power berry when he returns in Spring
* **_SPRITE_SPAM_MAX** (21) - Maximum affection where a sprite will gain affection from multiple gifts in a single day

* **_SICK_EVENT_AFF** (10) - Affection given for a girl sick event
* **_DREAM_EVENT_AFF** (8) - Affection given for a girl dream event
* **_ANKLE_EVENT_AFF** (10) - Affection given for a girl ankle event
* **_PHOTO_EVENT_AFF** (10) - Affection given for a girl photo event
* **_MUS_BOX_AFF** (6) - Affection given for gifting a girl a fixed music box

* **_CABBAGE_GROW_DAYS** (8) - Number of days watered for planted cabbages to fully mature from seeds
* **_CORN_GROW_DAYS** (13) - Number of days watered for planted corn to fully mature from seeds
* **_EGGPLANT_GROW_DAYS** (7) - Number of days watered for planted eggplants to fully mature from seeds
* **_GRASS_GROW_DAYS** (9) - Number of days watered for planted grass to fully mature from seeds
* **_MOONDROP_GROW_DAYS** (6) - Number of days watered for planted moondrop flowers to fully mature from seeds
* **_PINK_CAT_MINT_GROW_DAYS** (8) - Number of days watered for planted pink cat mint flowers to fully mature from seeds
* **_POTATO_GROW_DAYS** (6) - Number of days watered for planted potatoes to fully mature from seeds
* **_STRAWBERRY_GROW_DAYS** (6) - Number of days watered for planted strawberries to fully mature from seeds
* **_TOMATO_GROW_DAYS** (9) - Number of days watered for planted tomatoes to fully mature from seeds
* **_TURNIP_GROW_DAYS** (4) - Number of days watered for planted turnips to fully mature from seeds

* **_BUILD_DAYS** (4) - Number of days the carpenters take to construct an extension
* **_BABY_BORN_DAYS** (60) - 
* **_PREGNANT_SLEEPS** (30) - 
* **_BABY_SLEEPS** (60) - 
* **_CHICK_BORN_SLEEPS** (3) - Number of sleeps before an egg hatches into a chick
* **_CHICK_GROW_SLEEPS** (7) - Number of sleeps before a chick matures into an adult
* **_COW_GROW_SLEEPS** (21) - Number of sleeps before a baby cow matures into an adult
* **_FUNERAL_AFF_LOSS** (10) - Affection most non-Green Ranch related NPCs lose during a chicken funeral

## VARS
* **alcohol_tolerance**: Number of alcoholic drinks consumed. Used at the New Year Festival
* **bridge_days_worked**: Counter for the number of days you have worked on the bridge. If it equals four on Fall 27, the next_day function in script.js will increment affection for villagers
* **chickens**: The number of adult chickens you have
* **corn_waters**: The number of times your corn has been watered. This number never resets, but is used to determine if you have corn available if the value is >= CORN_GROW_DAYS variable in data.js. Currently used primarily in the All Photos route for Ann and Basil.
* **cow_status**: The status of your cows, expressed with a letter and number for each cow for current status and number of days in that status.
* **cows**: The combined number of small and adult cows you have
* **day**: The current day, from 3 onward. This number will increment past 30, but the get_day() and get_dow() functions can be used to get the day of the month and day of the week, respectively.
* **days_married**: Total number of sleeps since the wedding day.
* **feed**: Amount of chicken feed you have.
* **fodder**: Amount of fodder in the silo.
* **gold**: Current amount of money.
* **grass**: Amount of grass seeds you have bought that has not been planted yet.
* **grass_planted**: Number of grass seeds that have been planted in the field.
* **happiness**: Current happiness level
* **lumber**: Amount of lumber stored in the bin by the chicken coop.
* **medals**: Number of medals you currently have won by betting on horses and dogs.
* **new_chicken_days**: String of three character digits that correlates to the days that chicks will grow into adults.
* **new_cow_days**: String of three character digits that correlates to the days that young cows will mature into adults.
* **potato_waters**: Number of times potatoes have been watered. Used primarily in Ann Marriage and All Photos
* **potatoes**: Number of potatoes that have been harvested. Incremented by 9 when the potato_waters variable reaches the _POTATO_GROW_DAYS constant in the data file
* **springs_days_worked**: Counter for the number of days you have worked on the hot spring. If it equals four on Winter 16, the next_day function in script.js will increment affection for villagers
* **watering_can_fill**: Number of times your watering can will be able to water plants before running dry.

## FLAGS
* **ankle_ann**: INT [0,1] - Has the ankle event occurred for Ann
* **ankle_elli**: INT [0,1] - Has the ankle event occurred for Elli
* **ankle_karen**: INT [0,1] - Has the ankle event occurred for Karen
* **ankle_maria**: INT [0,1] - Has the ankle event occurred for Maria
* **ankle_popuri**: INT [0,1] - Has the ankle event occurred for Popuri
* **baby**: INT [0, _BABY_BORN_DAYS + 2] - 1 means baby is born that day. 0 means the counter hasnt begun yet. Anything greater than 1 is a countdown to the baby born event.
* **babybed**: INT [0, _BUILD_DAYS + 1] - Has the baby bed been contracted. 0 is no, 1 is fully built, and anything above 1 is being built.
* **bathroom**: INT [0, _BUILD_DAYS + 1] - Has the bathroom been contracted. 0 is no, 1 is fully built, and anything above 1 is being built.
* **berry_basil**: INT [0,1] - Has the player obtained Basils berry
* **berry_eggfest**: INT [0,1] - Has the player obtained the Egg Festival 
* **berry_farm**: INT [0,1] - Has the player dug up a berry on the farm
* **berry_flowerfest**: INT [0,1] - Has the player bought a berry at the Flower Festival
* **berry_kappa**: INT [0,1] - Has the player gotten a berry from Kappa by throwing a large fish into the pond
* **berry_mine**: INT [0,1] - Has the player dug up a berry in the mine
* **berry_ocean**: INT [0,1] - Has the player fished out a berry from the ocean
* **berry_pond**: INT [0,1] - Has the player gotten a berry by crossing the frozen pond during winter and smashing the rock with a golden hammer
* **berry_strength**: INT [0,1] - Has the player gotten a berry by wishing for strength from the goddess while at full stamina and no fatigue
* **blue_feather**: INT [0,1] - Has the player bought a blue feather from Rick
* **borrow_cows**: INT [0,1] - Did the player agree to watch cows for Doug during the first winter
* **chicken_funeral**: INT [0,1] - Is a chicken funeral held today
* **chicken_outside**: INT [0,1] - Are the chickens / chicks outside the barn
* **cow_entered**: INT [0,1] - Did the player enter a cow into the Cow Festival
* **cow_steal_glitch**: INT [0,1] - Has the player borrowed the cows, then skipped the return day
* **cows_outside**: INT [0,1] - Is there a cow outside the barn / are the cows outside the barn
* **cutscene_beach**: INT [0,1] - Has the cutscene with Elli and Karen played at the beach
* **cutscene_bug**: INT [0,1] - Has the cutscene with Maria pulling a bug out of Karens hair near the cave played yet
* **cutscene_cookfish**: INT [0,1] - Has the cutscene with Elli cooking fish for Maria by the fisherman tent played yet
* **cutscene_elli**: INT [0,1] - 
* **cutscene_kent**: INT [0,1] - 
* **cutscene_rabbit**: INT [0,1] - Has the cutscene with Ann rescuing a rabbit from Cliff played yet
* **cutscene_watermelon**: INT [0,1] - Has the cutscene with Ann and Maria discussing the salesman and the watermelon played yet
* **cutscene_vineyard**: INT [0,1] - Has the cutscene with Karen leaving the vineyard played yet
* **dog_entered**: INT [0,1] - Is the dog entered into the dog race. Resets to zero on Spring 18, Fall 29, and Winter 20 each year.
* **dog_inside**: INT [0,1] - Is the dog inside
* **dontsave**: INT [0,1] - Do not save tonight. If the "RESET" button is hit in the top corner, the previous day (or last save) will be loaded.
* **dream_ann**: INT [0,1] - Has Anns dream sequence been triggered
* **dream_elli**: INT [0,1] - Has Ellis dream sequence been triggered
* **dream_maria**: INT [0,1] - Has Marias dream sequence been triggered
* **dream_karen**: INT [0,1] - Has Karens dream sequence been triggered
* **dream_popuri**: INT [0,1] - Has Popuris dream sequence been triggered
* **fishing_rod**: INT [0,1] - Did you get the fishing rod from the fisherman
* **fishing_rod_stored**: INT [0,1] - Is the fishing rod stored in the tool box
* **golden_hammer**: INT [0,1] - Is the hammer upgraded to gold
* **good_weather**: INT [-1, 0, 1] - 1 is a sunny day, 0 is a rainy day, and -1 is a typhoon (summer only)
* **greenhouse**: INT [0, _BUILD_DAYS + 1] - Has the greenhouse been contracted. 0 is no, 1 is fully built, and anything above 1 is being built.
* **harvest_king**: INT [0,1] - Did the player win Harvest King at the previous Harvest Festival
* **horse**: INT [0,1] - Does the player have a horse
* **horse_brush**: INT [0,1] - Did the player buy a brush from Rick
* **horse_entered**: INT [0,1] - Is the horse entered into the Horse Race. Resets to zero on Spring 18, Fall 29, and Winter 20 each year.
* **kitchen**: INT [0, _BUILD_DAYS + 1] - Has the kitchen been contracted. 0 is no, 1 is fully built, and anything above 1 is being built.
* **logterrace**: INT [0, _BUILD_DAYS + 1] - Has the log terrace been contracted. 0 is no, 1 is fully built, and anything above 1 is being built.
* **milker**: INT [0,1] - Did the player buy a milker from Rick
* **new_chick**: INT [0, _CHICK_BORN_SLEEPS + 1] - 0 is not chicken incubating, 1 means a new chick will be born if you enter the barn, and anything 2 or above is a countdown to a new chick being born
* **new_mus_box**: INT [0,1] - Does the player have a fixed music box
* **old_mus_box**: INT [0,1] - Does the player have a broken music box
* **photo_ann**: INT [0,1] - Has Anns photo sequence been triggered
* **photo_baby**: INT [0,1] - Has the baby born photo sequence been triggered
* **photo_cowfest**: INT [0,1] - Has the cow festival winner photo sequence been triggered
* **photo_dograce**: INT [0,1] - Has the dog race winner photo sequence been triggered
* **photo_elli**: INT [0,1] - Has Ellis photo sequence been triggered
* **photo_harvest**: INT [0,1] - Has the hot air balloon photo sequence been triggered
* **photo_horserace**: INT [0,1] - Has the horse race winner photo sequence been triggered
* **photo_karen**: INT [0,1] - Has Karens photo sequence been triggered
* **photo_maria**: INT [0,1] - Has Marias photo sequence been triggered
* **photo_married**: INT [0,1] - Has the marriage photo sequence been triggered
* **photo_popuri**: INT [0,1] - Has Popuris photo sequence been triggered
* **photo_springs**: INT [0,1] - Has the hot springs photo sequence been triggered
* **photo_swimming**: INT [0,1] - Has the swim festival winner photo sequence been triggered
* **propose**: INT [0,1] - Has the player used a blue feather on anyone
* **recipe_ann**: INT [0,1] - Has the player received Anns recipe from a potato
* **recipe_basil**: INT [0,1] - Has the player received Basils recipe from corn
* **recipe_duke**: INT [0,1] - Has the player received Dukes recipe from Grapes
* **recipe_elli**: INT [0,1] - Has the player received Ellis recipe from an egg
* **recipe_maria**: INT [0,1] - Has the player received Marias recipe from cabbage
* **recipe_popuri**: INT [0,1] - Has the player received Popuris recipe from a strawberry
* **recipe_sprite**: INT [0,1] - Has the player received the sprites recipe from a mushroom
* **sick_ann**: INT [0,1] - Has Anns sick event been triggered
* **sick_elli**: INT [0,1] - Has Ellis sick event been triggered
* **sick_karen**: INT [0,1] - Has Karens sick event been triggered
* **sick_maria**: INT [0,1] - Has Marias sick event been triggered
* **sick_popuri**: INT [0,1] - Has Popuris sick event been triggered
* **stairway**: INT [0, _BUILD_DAYS + 1] - Has the stairway been contracted. 0 is no, 1 is fully built, and anything above 1 is being built.
* **sustaining_carrot**: INT [0,1] - Has the player bought a sustaining carrot with medals
* **treasure_map**: INT [0,1] - Has the player retrieved the treasure map from the tree
* **vineyard_restored**: INT [0,1] - Has the player visited the goddess and asked to restore the vineyard
* **wine_from_duke**: INT [0,1] - Has the player received wine from the bartender
