gdjs.Main_32MenuCode = {};
gdjs.Main_32MenuCode.localVariables = [];
gdjs.Main_32MenuCode.GDTitleObjects1= [];
gdjs.Main_32MenuCode.GDTitleObjects2= [];
gdjs.Main_32MenuCode.GDPlayObjects1= [];
gdjs.Main_32MenuCode.GDPlayObjects2= [];
gdjs.Main_32MenuCode.GDSettingsObjects1= [];
gdjs.Main_32MenuCode.GDSettingsObjects2= [];
gdjs.Main_32MenuCode.GDPlayerObjects1= [];
gdjs.Main_32MenuCode.GDPlayerObjects2= [];
gdjs.Main_32MenuCode.GDPlayerHealthObjects1= [];
gdjs.Main_32MenuCode.GDPlayerHealthObjects2= [];
gdjs.Main_32MenuCode.GDBulletObjects1= [];
gdjs.Main_32MenuCode.GDBulletObjects2= [];
gdjs.Main_32MenuCode.GDPointsObjects1= [];
gdjs.Main_32MenuCode.GDPointsObjects2= [];
gdjs.Main_32MenuCode.GDZombieObjects1= [];
gdjs.Main_32MenuCode.GDZombieObjects2= [];
gdjs.Main_32MenuCode.GDHealthBarObjects1= [];
gdjs.Main_32MenuCode.GDHealthBarObjects2= [];
gdjs.Main_32MenuCode.GDSpawnObjects1= [];
gdjs.Main_32MenuCode.GDSpawnObjects2= [];
gdjs.Main_32MenuCode.GDNO_9595walk_9595wallObjects1= [];
gdjs.Main_32MenuCode.GDNO_9595walk_9595wallObjects2= [];
gdjs.Main_32MenuCode.GDPlayerSpawnObjects1= [];
gdjs.Main_32MenuCode.GDPlayerSpawnObjects2= [];
gdjs.Main_32MenuCode.GDDialogueObjects1= [];
gdjs.Main_32MenuCode.GDDialogueObjects2= [];
gdjs.Main_32MenuCode.GDOptionsObjects1= [];
gdjs.Main_32MenuCode.GDOptionsObjects2= [];
gdjs.Main_32MenuCode.GDCornerObjects1= [];
gdjs.Main_32MenuCode.GDCornerObjects2= [];
gdjs.Main_32MenuCode.GDBackyardObjects1= [];
gdjs.Main_32MenuCode.GDBackyardObjects2= [];
gdjs.Main_32MenuCode.GDNewSpriteObjects1= [];
gdjs.Main_32MenuCode.GDNewSpriteObjects2= [];
gdjs.Main_32MenuCode.GDBassment_9595doorObjects1= [];
gdjs.Main_32MenuCode.GDBassment_9595doorObjects2= [];
gdjs.Main_32MenuCode.GDhouse_9595Objects1= [];
gdjs.Main_32MenuCode.GDhouse_9595Objects2= [];
gdjs.Main_32MenuCode.GDBassment_9595door2Objects1= [];
gdjs.Main_32MenuCode.GDBassment_9595door2Objects2= [];
gdjs.Main_32MenuCode.GDNewSprite2Objects1= [];
gdjs.Main_32MenuCode.GDNewSprite2Objects2= [];
gdjs.Main_32MenuCode.GDHealthKitObjects1= [];
gdjs.Main_32MenuCode.GDHealthKitObjects2= [];
gdjs.Main_32MenuCode.GDhealthkitObjects1= [];
gdjs.Main_32MenuCode.GDhealthkitObjects2= [];


gdjs.Main_32MenuCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "Main Menu.aac", true, 100, 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Play"), gdjs.Main_32MenuCode.GDPlayObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Main_32MenuCode.GDPlayObjects1.length;i<l;++i) {
    if ( gdjs.Main_32MenuCode.GDPlayObjects1[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Main_32MenuCode.GDPlayObjects1[k] = gdjs.Main_32MenuCode.GDPlayObjects1[i];
        ++k;
    }
}
gdjs.Main_32MenuCode.GDPlayObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "click1.ogg", false, 10, 1);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Start of game", false);
}}

}


};

gdjs.Main_32MenuCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Main_32MenuCode.GDTitleObjects1.length = 0;
gdjs.Main_32MenuCode.GDTitleObjects2.length = 0;
gdjs.Main_32MenuCode.GDPlayObjects1.length = 0;
gdjs.Main_32MenuCode.GDPlayObjects2.length = 0;
gdjs.Main_32MenuCode.GDSettingsObjects1.length = 0;
gdjs.Main_32MenuCode.GDSettingsObjects2.length = 0;
gdjs.Main_32MenuCode.GDPlayerObjects1.length = 0;
gdjs.Main_32MenuCode.GDPlayerObjects2.length = 0;
gdjs.Main_32MenuCode.GDPlayerHealthObjects1.length = 0;
gdjs.Main_32MenuCode.GDPlayerHealthObjects2.length = 0;
gdjs.Main_32MenuCode.GDBulletObjects1.length = 0;
gdjs.Main_32MenuCode.GDBulletObjects2.length = 0;
gdjs.Main_32MenuCode.GDPointsObjects1.length = 0;
gdjs.Main_32MenuCode.GDPointsObjects2.length = 0;
gdjs.Main_32MenuCode.GDZombieObjects1.length = 0;
gdjs.Main_32MenuCode.GDZombieObjects2.length = 0;
gdjs.Main_32MenuCode.GDHealthBarObjects1.length = 0;
gdjs.Main_32MenuCode.GDHealthBarObjects2.length = 0;
gdjs.Main_32MenuCode.GDSpawnObjects1.length = 0;
gdjs.Main_32MenuCode.GDSpawnObjects2.length = 0;
gdjs.Main_32MenuCode.GDNO_9595walk_9595wallObjects1.length = 0;
gdjs.Main_32MenuCode.GDNO_9595walk_9595wallObjects2.length = 0;
gdjs.Main_32MenuCode.GDPlayerSpawnObjects1.length = 0;
gdjs.Main_32MenuCode.GDPlayerSpawnObjects2.length = 0;
gdjs.Main_32MenuCode.GDDialogueObjects1.length = 0;
gdjs.Main_32MenuCode.GDDialogueObjects2.length = 0;
gdjs.Main_32MenuCode.GDOptionsObjects1.length = 0;
gdjs.Main_32MenuCode.GDOptionsObjects2.length = 0;
gdjs.Main_32MenuCode.GDCornerObjects1.length = 0;
gdjs.Main_32MenuCode.GDCornerObjects2.length = 0;
gdjs.Main_32MenuCode.GDBackyardObjects1.length = 0;
gdjs.Main_32MenuCode.GDBackyardObjects2.length = 0;
gdjs.Main_32MenuCode.GDNewSpriteObjects1.length = 0;
gdjs.Main_32MenuCode.GDNewSpriteObjects2.length = 0;
gdjs.Main_32MenuCode.GDBassment_9595doorObjects1.length = 0;
gdjs.Main_32MenuCode.GDBassment_9595doorObjects2.length = 0;
gdjs.Main_32MenuCode.GDhouse_9595Objects1.length = 0;
gdjs.Main_32MenuCode.GDhouse_9595Objects2.length = 0;
gdjs.Main_32MenuCode.GDBassment_9595door2Objects1.length = 0;
gdjs.Main_32MenuCode.GDBassment_9595door2Objects2.length = 0;
gdjs.Main_32MenuCode.GDNewSprite2Objects1.length = 0;
gdjs.Main_32MenuCode.GDNewSprite2Objects2.length = 0;
gdjs.Main_32MenuCode.GDHealthKitObjects1.length = 0;
gdjs.Main_32MenuCode.GDHealthKitObjects2.length = 0;
gdjs.Main_32MenuCode.GDhealthkitObjects1.length = 0;
gdjs.Main_32MenuCode.GDhealthkitObjects2.length = 0;

gdjs.Main_32MenuCode.eventsList0(runtimeScene);

return;

}

gdjs['Main_32MenuCode'] = gdjs.Main_32MenuCode;
