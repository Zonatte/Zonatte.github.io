gdjs.gameCode = {};
gdjs.gameCode.localVariables = [];
gdjs.gameCode.GDStartObjects1= [];
gdjs.gameCode.GDStartObjects2= [];
gdjs.gameCode.GDPlayerObjects1= [];
gdjs.gameCode.GDPlayerObjects2= [];
gdjs.gameCode.GDPlayerHealthObjects1= [];
gdjs.gameCode.GDPlayerHealthObjects2= [];
gdjs.gameCode.GDBulletObjects1= [];
gdjs.gameCode.GDBulletObjects2= [];
gdjs.gameCode.GDPointsObjects1= [];
gdjs.gameCode.GDPointsObjects2= [];
gdjs.gameCode.GDZombieObjects1= [];
gdjs.gameCode.GDZombieObjects2= [];
gdjs.gameCode.GDHealthBarObjects1= [];
gdjs.gameCode.GDHealthBarObjects2= [];
gdjs.gameCode.GDSpawnObjects1= [];
gdjs.gameCode.GDSpawnObjects2= [];
gdjs.gameCode.GDNO_9595walk_9595wallObjects1= [];
gdjs.gameCode.GDNO_9595walk_9595wallObjects2= [];
gdjs.gameCode.GDPlayerSpawnObjects1= [];
gdjs.gameCode.GDPlayerSpawnObjects2= [];
gdjs.gameCode.GDDialogueObjects1= [];
gdjs.gameCode.GDDialogueObjects2= [];
gdjs.gameCode.GDOptionsObjects1= [];
gdjs.gameCode.GDOptionsObjects2= [];
gdjs.gameCode.GDCornerObjects1= [];
gdjs.gameCode.GDCornerObjects2= [];
gdjs.gameCode.GDBackyardObjects1= [];
gdjs.gameCode.GDBackyardObjects2= [];
gdjs.gameCode.GDNewSpriteObjects1= [];
gdjs.gameCode.GDNewSpriteObjects2= [];
gdjs.gameCode.GDBassment_9595doorObjects1= [];
gdjs.gameCode.GDBassment_9595doorObjects2= [];
gdjs.gameCode.GDhouse_9595Objects1= [];
gdjs.gameCode.GDhouse_9595Objects2= [];
gdjs.gameCode.GDBassment_9595door2Objects1= [];
gdjs.gameCode.GDBassment_9595door2Objects2= [];
gdjs.gameCode.GDNewSprite2Objects1= [];
gdjs.gameCode.GDNewSprite2Objects2= [];
gdjs.gameCode.GDHealthKitObjects1= [];
gdjs.gameCode.GDHealthKitObjects2= [];
gdjs.gameCode.GDhealthkitObjects1= [];
gdjs.gameCode.GDhealthkitObjects2= [];


gdjs.gameCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Start"), gdjs.gameCode.GDStartObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.gameCode.GDStartObjects1.length;i<l;++i) {
    if ( gdjs.gameCode.GDStartObjects1[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.gameCode.GDStartObjects1[k] = gdjs.gameCode.GDStartObjects1[i];
        ++k;
    }
}
gdjs.gameCode.GDStartObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "click1.ogg", false, 10, 1);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Main Menu", false);
}}

}


};

gdjs.gameCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.gameCode.GDStartObjects1.length = 0;
gdjs.gameCode.GDStartObjects2.length = 0;
gdjs.gameCode.GDPlayerObjects1.length = 0;
gdjs.gameCode.GDPlayerObjects2.length = 0;
gdjs.gameCode.GDPlayerHealthObjects1.length = 0;
gdjs.gameCode.GDPlayerHealthObjects2.length = 0;
gdjs.gameCode.GDBulletObjects1.length = 0;
gdjs.gameCode.GDBulletObjects2.length = 0;
gdjs.gameCode.GDPointsObjects1.length = 0;
gdjs.gameCode.GDPointsObjects2.length = 0;
gdjs.gameCode.GDZombieObjects1.length = 0;
gdjs.gameCode.GDZombieObjects2.length = 0;
gdjs.gameCode.GDHealthBarObjects1.length = 0;
gdjs.gameCode.GDHealthBarObjects2.length = 0;
gdjs.gameCode.GDSpawnObjects1.length = 0;
gdjs.gameCode.GDSpawnObjects2.length = 0;
gdjs.gameCode.GDNO_9595walk_9595wallObjects1.length = 0;
gdjs.gameCode.GDNO_9595walk_9595wallObjects2.length = 0;
gdjs.gameCode.GDPlayerSpawnObjects1.length = 0;
gdjs.gameCode.GDPlayerSpawnObjects2.length = 0;
gdjs.gameCode.GDDialogueObjects1.length = 0;
gdjs.gameCode.GDDialogueObjects2.length = 0;
gdjs.gameCode.GDOptionsObjects1.length = 0;
gdjs.gameCode.GDOptionsObjects2.length = 0;
gdjs.gameCode.GDCornerObjects1.length = 0;
gdjs.gameCode.GDCornerObjects2.length = 0;
gdjs.gameCode.GDBackyardObjects1.length = 0;
gdjs.gameCode.GDBackyardObjects2.length = 0;
gdjs.gameCode.GDNewSpriteObjects1.length = 0;
gdjs.gameCode.GDNewSpriteObjects2.length = 0;
gdjs.gameCode.GDBassment_9595doorObjects1.length = 0;
gdjs.gameCode.GDBassment_9595doorObjects2.length = 0;
gdjs.gameCode.GDhouse_9595Objects1.length = 0;
gdjs.gameCode.GDhouse_9595Objects2.length = 0;
gdjs.gameCode.GDBassment_9595door2Objects1.length = 0;
gdjs.gameCode.GDBassment_9595door2Objects2.length = 0;
gdjs.gameCode.GDNewSprite2Objects1.length = 0;
gdjs.gameCode.GDNewSprite2Objects2.length = 0;
gdjs.gameCode.GDHealthKitObjects1.length = 0;
gdjs.gameCode.GDHealthKitObjects2.length = 0;
gdjs.gameCode.GDhealthkitObjects1.length = 0;
gdjs.gameCode.GDhealthkitObjects2.length = 0;

gdjs.gameCode.eventsList0(runtimeScene);

return;

}

gdjs['gameCode'] = gdjs.gameCode;
