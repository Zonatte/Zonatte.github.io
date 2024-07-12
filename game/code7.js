gdjs.John_32EndingCode = {};
gdjs.John_32EndingCode.localVariables = [];
gdjs.John_32EndingCode.GDPlayerObjects1= [];
gdjs.John_32EndingCode.GDPlayerObjects2= [];
gdjs.John_32EndingCode.GDPlayerObjects3= [];
gdjs.John_32EndingCode.GDPlayerObjects4= [];
gdjs.John_32EndingCode.GDPlayerHealthObjects1= [];
gdjs.John_32EndingCode.GDPlayerHealthObjects2= [];
gdjs.John_32EndingCode.GDPlayerHealthObjects3= [];
gdjs.John_32EndingCode.GDPlayerHealthObjects4= [];
gdjs.John_32EndingCode.GDBulletObjects1= [];
gdjs.John_32EndingCode.GDBulletObjects2= [];
gdjs.John_32EndingCode.GDBulletObjects3= [];
gdjs.John_32EndingCode.GDBulletObjects4= [];
gdjs.John_32EndingCode.GDPointsObjects1= [];
gdjs.John_32EndingCode.GDPointsObjects2= [];
gdjs.John_32EndingCode.GDPointsObjects3= [];
gdjs.John_32EndingCode.GDPointsObjects4= [];
gdjs.John_32EndingCode.GDZombieObjects1= [];
gdjs.John_32EndingCode.GDZombieObjects2= [];
gdjs.John_32EndingCode.GDZombieObjects3= [];
gdjs.John_32EndingCode.GDZombieObjects4= [];
gdjs.John_32EndingCode.GDHealthBarObjects1= [];
gdjs.John_32EndingCode.GDHealthBarObjects2= [];
gdjs.John_32EndingCode.GDHealthBarObjects3= [];
gdjs.John_32EndingCode.GDHealthBarObjects4= [];
gdjs.John_32EndingCode.GDSpawnObjects1= [];
gdjs.John_32EndingCode.GDSpawnObjects2= [];
gdjs.John_32EndingCode.GDSpawnObjects3= [];
gdjs.John_32EndingCode.GDSpawnObjects4= [];
gdjs.John_32EndingCode.GDNO_9595walk_9595wallObjects1= [];
gdjs.John_32EndingCode.GDNO_9595walk_9595wallObjects2= [];
gdjs.John_32EndingCode.GDNO_9595walk_9595wallObjects3= [];
gdjs.John_32EndingCode.GDNO_9595walk_9595wallObjects4= [];
gdjs.John_32EndingCode.GDPlayerSpawnObjects1= [];
gdjs.John_32EndingCode.GDPlayerSpawnObjects2= [];
gdjs.John_32EndingCode.GDPlayerSpawnObjects3= [];
gdjs.John_32EndingCode.GDPlayerSpawnObjects4= [];
gdjs.John_32EndingCode.GDDialogueObjects1= [];
gdjs.John_32EndingCode.GDDialogueObjects2= [];
gdjs.John_32EndingCode.GDDialogueObjects3= [];
gdjs.John_32EndingCode.GDDialogueObjects4= [];
gdjs.John_32EndingCode.GDOptionsObjects1= [];
gdjs.John_32EndingCode.GDOptionsObjects2= [];
gdjs.John_32EndingCode.GDOptionsObjects3= [];
gdjs.John_32EndingCode.GDOptionsObjects4= [];
gdjs.John_32EndingCode.GDCornerObjects1= [];
gdjs.John_32EndingCode.GDCornerObjects2= [];
gdjs.John_32EndingCode.GDCornerObjects3= [];
gdjs.John_32EndingCode.GDCornerObjects4= [];
gdjs.John_32EndingCode.GDBackyardObjects1= [];
gdjs.John_32EndingCode.GDBackyardObjects2= [];
gdjs.John_32EndingCode.GDBackyardObjects3= [];
gdjs.John_32EndingCode.GDBackyardObjects4= [];
gdjs.John_32EndingCode.GDNewSpriteObjects1= [];
gdjs.John_32EndingCode.GDNewSpriteObjects2= [];
gdjs.John_32EndingCode.GDNewSpriteObjects3= [];
gdjs.John_32EndingCode.GDNewSpriteObjects4= [];
gdjs.John_32EndingCode.GDBassment_9595doorObjects1= [];
gdjs.John_32EndingCode.GDBassment_9595doorObjects2= [];
gdjs.John_32EndingCode.GDBassment_9595doorObjects3= [];
gdjs.John_32EndingCode.GDBassment_9595doorObjects4= [];
gdjs.John_32EndingCode.GDhouse_9595Objects1= [];
gdjs.John_32EndingCode.GDhouse_9595Objects2= [];
gdjs.John_32EndingCode.GDhouse_9595Objects3= [];
gdjs.John_32EndingCode.GDhouse_9595Objects4= [];
gdjs.John_32EndingCode.GDBassment_9595door2Objects1= [];
gdjs.John_32EndingCode.GDBassment_9595door2Objects2= [];
gdjs.John_32EndingCode.GDBassment_9595door2Objects3= [];
gdjs.John_32EndingCode.GDBassment_9595door2Objects4= [];
gdjs.John_32EndingCode.GDNewSprite2Objects1= [];
gdjs.John_32EndingCode.GDNewSprite2Objects2= [];
gdjs.John_32EndingCode.GDNewSprite2Objects3= [];
gdjs.John_32EndingCode.GDNewSprite2Objects4= [];
gdjs.John_32EndingCode.GDHealthKitObjects1= [];
gdjs.John_32EndingCode.GDHealthKitObjects2= [];
gdjs.John_32EndingCode.GDHealthKitObjects3= [];
gdjs.John_32EndingCode.GDHealthKitObjects4= [];
gdjs.John_32EndingCode.GDhealthkitObjects1= [];
gdjs.John_32EndingCode.GDhealthkitObjects2= [];
gdjs.John_32EndingCode.GDhealthkitObjects3= [];
gdjs.John_32EndingCode.GDhealthkitObjects4= [];


gdjs.John_32EndingCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "ScrollText") >= gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0));
if (isConditionTrue_0) {
{gdjs.dialogueTree.scrollClippedText();
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "ScrollText");
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "r");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.dialogueTree.hasClippedScrollingCompleted();
}
if (isConditionTrue_0) {
{gdjs.dialogueTree.goToNextDialogueLine();
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "r");
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(0.01);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.input.isKeyPressed(runtimeScene, "r"));
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(0.05);
}}

}


{


let isConditionTrue_0 = false;
{
}

}


};gdjs.John_32EndingCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Up");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(16899260);
}
}
if (isConditionTrue_0) {
{gdjs.dialogueTree.selectPreviousOption();
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Down");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(16900724);
}
}
if (isConditionTrue_0) {
{gdjs.dialogueTree.selectNextOption();
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "e");
if (isConditionTrue_0) {
{gdjs.dialogueTree.confirmSelectOption();
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.dialogueTree.hasSelectedOptionChanged();
if (isConditionTrue_0) {
/* Reuse gdjs.John_32EndingCode.GDOptionsObjects1 */
{for(var i = 0, len = gdjs.John_32EndingCode.GDOptionsObjects1.length ;i < len;++i) {
    gdjs.John_32EndingCode.GDOptionsObjects1[i].getBehavior("Text").setText(gdjs.dialogueTree.getLineOptionsTextVertical("-> "));
}
}}

}


};gdjs.John_32EndingCode.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Dialogue"), gdjs.John_32EndingCode.GDDialogueObjects2);
gdjs.copyArray(runtimeScene.getObjects("Options"), gdjs.John_32EndingCode.GDOptionsObjects2);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.John_32EndingCode.GDPlayerObjects2);
{for(var i = 0, len = gdjs.John_32EndingCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.John_32EndingCode.GDPlayerObjects2[i].returnVariable(gdjs.John_32EndingCode.GDPlayerObjects2[i].getVariables().getFromIndex(0)).setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)));
}
}{for(var i = 0, len = gdjs.John_32EndingCode.GDDialogueObjects2.length ;i < len;++i) {
    gdjs.John_32EndingCode.GDDialogueObjects2[i].hide();
}
}{for(var i = 0, len = gdjs.John_32EndingCode.GDOptionsObjects2.length ;i < len;++i) {
    gdjs.John_32EndingCode.GDOptionsObjects2[i].hide();
}
}{gdjs.dialogueTree.loadFromJsonFile(runtimeScene, "New dialogue tree6");
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "e");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.dialogueTree.isRunning();
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Dialogue"), gdjs.John_32EndingCode.GDDialogueObjects2);
{for(var i = 0, len = gdjs.John_32EndingCode.GDDialogueObjects2.length ;i < len;++i) {
    gdjs.John_32EndingCode.GDDialogueObjects2[i].hide(false);
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "ScrollText");
}{gdjs.dialogueTree.startFrom("Start");
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.dialogueTree.isDialogueLineType("text");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Dialogue"), gdjs.John_32EndingCode.GDDialogueObjects2);
{for(var i = 0, len = gdjs.John_32EndingCode.GDDialogueObjects2.length ;i < len;++i) {
    gdjs.John_32EndingCode.GDDialogueObjects2[i].getBehavior("Text").setText(gdjs.dialogueTree.getClippedLineText());
}
}
{ //Subevents
gdjs.John_32EndingCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.dialogueTree.isDialogueLineType("options"));
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Options"), gdjs.John_32EndingCode.GDOptionsObjects2);
{for(var i = 0, len = gdjs.John_32EndingCode.GDOptionsObjects2.length ;i < len;++i) {
    gdjs.John_32EndingCode.GDOptionsObjects2[i].hide();
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.dialogueTree.isDialogueLineType("options");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Options"), gdjs.John_32EndingCode.GDOptionsObjects1);
{for(var i = 0, len = gdjs.John_32EndingCode.GDOptionsObjects1.length ;i < len;++i) {
    gdjs.John_32EndingCode.GDOptionsObjects1[i].hide(false);
}
}
{ //Subevents
gdjs.John_32EndingCode.eventsList1(runtimeScene);} //End of subevents
}

}


};gdjs.John_32EndingCode.eventsList3 = function(runtimeScene) {

{


gdjs.John_32EndingCode.eventsList2(runtimeScene);
}


{


let isConditionTrue_0 = false;
{
}

}


};

gdjs.John_32EndingCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.John_32EndingCode.GDPlayerObjects1.length = 0;
gdjs.John_32EndingCode.GDPlayerObjects2.length = 0;
gdjs.John_32EndingCode.GDPlayerObjects3.length = 0;
gdjs.John_32EndingCode.GDPlayerObjects4.length = 0;
gdjs.John_32EndingCode.GDPlayerHealthObjects1.length = 0;
gdjs.John_32EndingCode.GDPlayerHealthObjects2.length = 0;
gdjs.John_32EndingCode.GDPlayerHealthObjects3.length = 0;
gdjs.John_32EndingCode.GDPlayerHealthObjects4.length = 0;
gdjs.John_32EndingCode.GDBulletObjects1.length = 0;
gdjs.John_32EndingCode.GDBulletObjects2.length = 0;
gdjs.John_32EndingCode.GDBulletObjects3.length = 0;
gdjs.John_32EndingCode.GDBulletObjects4.length = 0;
gdjs.John_32EndingCode.GDPointsObjects1.length = 0;
gdjs.John_32EndingCode.GDPointsObjects2.length = 0;
gdjs.John_32EndingCode.GDPointsObjects3.length = 0;
gdjs.John_32EndingCode.GDPointsObjects4.length = 0;
gdjs.John_32EndingCode.GDZombieObjects1.length = 0;
gdjs.John_32EndingCode.GDZombieObjects2.length = 0;
gdjs.John_32EndingCode.GDZombieObjects3.length = 0;
gdjs.John_32EndingCode.GDZombieObjects4.length = 0;
gdjs.John_32EndingCode.GDHealthBarObjects1.length = 0;
gdjs.John_32EndingCode.GDHealthBarObjects2.length = 0;
gdjs.John_32EndingCode.GDHealthBarObjects3.length = 0;
gdjs.John_32EndingCode.GDHealthBarObjects4.length = 0;
gdjs.John_32EndingCode.GDSpawnObjects1.length = 0;
gdjs.John_32EndingCode.GDSpawnObjects2.length = 0;
gdjs.John_32EndingCode.GDSpawnObjects3.length = 0;
gdjs.John_32EndingCode.GDSpawnObjects4.length = 0;
gdjs.John_32EndingCode.GDNO_9595walk_9595wallObjects1.length = 0;
gdjs.John_32EndingCode.GDNO_9595walk_9595wallObjects2.length = 0;
gdjs.John_32EndingCode.GDNO_9595walk_9595wallObjects3.length = 0;
gdjs.John_32EndingCode.GDNO_9595walk_9595wallObjects4.length = 0;
gdjs.John_32EndingCode.GDPlayerSpawnObjects1.length = 0;
gdjs.John_32EndingCode.GDPlayerSpawnObjects2.length = 0;
gdjs.John_32EndingCode.GDPlayerSpawnObjects3.length = 0;
gdjs.John_32EndingCode.GDPlayerSpawnObjects4.length = 0;
gdjs.John_32EndingCode.GDDialogueObjects1.length = 0;
gdjs.John_32EndingCode.GDDialogueObjects2.length = 0;
gdjs.John_32EndingCode.GDDialogueObjects3.length = 0;
gdjs.John_32EndingCode.GDDialogueObjects4.length = 0;
gdjs.John_32EndingCode.GDOptionsObjects1.length = 0;
gdjs.John_32EndingCode.GDOptionsObjects2.length = 0;
gdjs.John_32EndingCode.GDOptionsObjects3.length = 0;
gdjs.John_32EndingCode.GDOptionsObjects4.length = 0;
gdjs.John_32EndingCode.GDCornerObjects1.length = 0;
gdjs.John_32EndingCode.GDCornerObjects2.length = 0;
gdjs.John_32EndingCode.GDCornerObjects3.length = 0;
gdjs.John_32EndingCode.GDCornerObjects4.length = 0;
gdjs.John_32EndingCode.GDBackyardObjects1.length = 0;
gdjs.John_32EndingCode.GDBackyardObjects2.length = 0;
gdjs.John_32EndingCode.GDBackyardObjects3.length = 0;
gdjs.John_32EndingCode.GDBackyardObjects4.length = 0;
gdjs.John_32EndingCode.GDNewSpriteObjects1.length = 0;
gdjs.John_32EndingCode.GDNewSpriteObjects2.length = 0;
gdjs.John_32EndingCode.GDNewSpriteObjects3.length = 0;
gdjs.John_32EndingCode.GDNewSpriteObjects4.length = 0;
gdjs.John_32EndingCode.GDBassment_9595doorObjects1.length = 0;
gdjs.John_32EndingCode.GDBassment_9595doorObjects2.length = 0;
gdjs.John_32EndingCode.GDBassment_9595doorObjects3.length = 0;
gdjs.John_32EndingCode.GDBassment_9595doorObjects4.length = 0;
gdjs.John_32EndingCode.GDhouse_9595Objects1.length = 0;
gdjs.John_32EndingCode.GDhouse_9595Objects2.length = 0;
gdjs.John_32EndingCode.GDhouse_9595Objects3.length = 0;
gdjs.John_32EndingCode.GDhouse_9595Objects4.length = 0;
gdjs.John_32EndingCode.GDBassment_9595door2Objects1.length = 0;
gdjs.John_32EndingCode.GDBassment_9595door2Objects2.length = 0;
gdjs.John_32EndingCode.GDBassment_9595door2Objects3.length = 0;
gdjs.John_32EndingCode.GDBassment_9595door2Objects4.length = 0;
gdjs.John_32EndingCode.GDNewSprite2Objects1.length = 0;
gdjs.John_32EndingCode.GDNewSprite2Objects2.length = 0;
gdjs.John_32EndingCode.GDNewSprite2Objects3.length = 0;
gdjs.John_32EndingCode.GDNewSprite2Objects4.length = 0;
gdjs.John_32EndingCode.GDHealthKitObjects1.length = 0;
gdjs.John_32EndingCode.GDHealthKitObjects2.length = 0;
gdjs.John_32EndingCode.GDHealthKitObjects3.length = 0;
gdjs.John_32EndingCode.GDHealthKitObjects4.length = 0;
gdjs.John_32EndingCode.GDhealthkitObjects1.length = 0;
gdjs.John_32EndingCode.GDhealthkitObjects2.length = 0;
gdjs.John_32EndingCode.GDhealthkitObjects3.length = 0;
gdjs.John_32EndingCode.GDhealthkitObjects4.length = 0;

gdjs.John_32EndingCode.eventsList3(runtimeScene);

return;

}

gdjs['John_32EndingCode'] = gdjs.John_32EndingCode;
