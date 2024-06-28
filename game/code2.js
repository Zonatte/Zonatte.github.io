gdjs.Start_32of_32gameCode = {};
gdjs.Start_32of_32gameCode.localVariables = [];
gdjs.Start_32of_32gameCode.GDPlayerObjects1= [];
gdjs.Start_32of_32gameCode.GDPlayerObjects2= [];
gdjs.Start_32of_32gameCode.GDPlayerObjects3= [];
gdjs.Start_32of_32gameCode.GDPlayerObjects4= [];
gdjs.Start_32of_32gameCode.GDPlayerHealthObjects1= [];
gdjs.Start_32of_32gameCode.GDPlayerHealthObjects2= [];
gdjs.Start_32of_32gameCode.GDPlayerHealthObjects3= [];
gdjs.Start_32of_32gameCode.GDPlayerHealthObjects4= [];
gdjs.Start_32of_32gameCode.GDBulletObjects1= [];
gdjs.Start_32of_32gameCode.GDBulletObjects2= [];
gdjs.Start_32of_32gameCode.GDBulletObjects3= [];
gdjs.Start_32of_32gameCode.GDBulletObjects4= [];
gdjs.Start_32of_32gameCode.GDPointsObjects1= [];
gdjs.Start_32of_32gameCode.GDPointsObjects2= [];
gdjs.Start_32of_32gameCode.GDPointsObjects3= [];
gdjs.Start_32of_32gameCode.GDPointsObjects4= [];
gdjs.Start_32of_32gameCode.GDZombieObjects1= [];
gdjs.Start_32of_32gameCode.GDZombieObjects2= [];
gdjs.Start_32of_32gameCode.GDZombieObjects3= [];
gdjs.Start_32of_32gameCode.GDZombieObjects4= [];
gdjs.Start_32of_32gameCode.GDHealthBarObjects1= [];
gdjs.Start_32of_32gameCode.GDHealthBarObjects2= [];
gdjs.Start_32of_32gameCode.GDHealthBarObjects3= [];
gdjs.Start_32of_32gameCode.GDHealthBarObjects4= [];
gdjs.Start_32of_32gameCode.GDSpawnObjects1= [];
gdjs.Start_32of_32gameCode.GDSpawnObjects2= [];
gdjs.Start_32of_32gameCode.GDSpawnObjects3= [];
gdjs.Start_32of_32gameCode.GDSpawnObjects4= [];
gdjs.Start_32of_32gameCode.GDNO_9595walk_9595wallObjects1= [];
gdjs.Start_32of_32gameCode.GDNO_9595walk_9595wallObjects2= [];
gdjs.Start_32of_32gameCode.GDNO_9595walk_9595wallObjects3= [];
gdjs.Start_32of_32gameCode.GDNO_9595walk_9595wallObjects4= [];
gdjs.Start_32of_32gameCode.GDPlayerSpawnObjects1= [];
gdjs.Start_32of_32gameCode.GDPlayerSpawnObjects2= [];
gdjs.Start_32of_32gameCode.GDPlayerSpawnObjects3= [];
gdjs.Start_32of_32gameCode.GDPlayerSpawnObjects4= [];
gdjs.Start_32of_32gameCode.GDDialogueObjects1= [];
gdjs.Start_32of_32gameCode.GDDialogueObjects2= [];
gdjs.Start_32of_32gameCode.GDDialogueObjects3= [];
gdjs.Start_32of_32gameCode.GDDialogueObjects4= [];
gdjs.Start_32of_32gameCode.GDOptionsObjects1= [];
gdjs.Start_32of_32gameCode.GDOptionsObjects2= [];
gdjs.Start_32of_32gameCode.GDOptionsObjects3= [];
gdjs.Start_32of_32gameCode.GDOptionsObjects4= [];
gdjs.Start_32of_32gameCode.GDCornerObjects1= [];
gdjs.Start_32of_32gameCode.GDCornerObjects2= [];
gdjs.Start_32of_32gameCode.GDCornerObjects3= [];
gdjs.Start_32of_32gameCode.GDCornerObjects4= [];
gdjs.Start_32of_32gameCode.GDBackyardObjects1= [];
gdjs.Start_32of_32gameCode.GDBackyardObjects2= [];
gdjs.Start_32of_32gameCode.GDBackyardObjects3= [];
gdjs.Start_32of_32gameCode.GDBackyardObjects4= [];
gdjs.Start_32of_32gameCode.GDNewSpriteObjects1= [];
gdjs.Start_32of_32gameCode.GDNewSpriteObjects2= [];
gdjs.Start_32of_32gameCode.GDNewSpriteObjects3= [];
gdjs.Start_32of_32gameCode.GDNewSpriteObjects4= [];
gdjs.Start_32of_32gameCode.GDBassment_9595doorObjects1= [];
gdjs.Start_32of_32gameCode.GDBassment_9595doorObjects2= [];
gdjs.Start_32of_32gameCode.GDBassment_9595doorObjects3= [];
gdjs.Start_32of_32gameCode.GDBassment_9595doorObjects4= [];
gdjs.Start_32of_32gameCode.GDhouse_9595Objects1= [];
gdjs.Start_32of_32gameCode.GDhouse_9595Objects2= [];
gdjs.Start_32of_32gameCode.GDhouse_9595Objects3= [];
gdjs.Start_32of_32gameCode.GDhouse_9595Objects4= [];
gdjs.Start_32of_32gameCode.GDBassment_9595door2Objects1= [];
gdjs.Start_32of_32gameCode.GDBassment_9595door2Objects2= [];
gdjs.Start_32of_32gameCode.GDBassment_9595door2Objects3= [];
gdjs.Start_32of_32gameCode.GDBassment_9595door2Objects4= [];
gdjs.Start_32of_32gameCode.GDNewSprite2Objects1= [];
gdjs.Start_32of_32gameCode.GDNewSprite2Objects2= [];
gdjs.Start_32of_32gameCode.GDNewSprite2Objects3= [];
gdjs.Start_32of_32gameCode.GDNewSprite2Objects4= [];
gdjs.Start_32of_32gameCode.GDHealthKitObjects1= [];
gdjs.Start_32of_32gameCode.GDHealthKitObjects2= [];
gdjs.Start_32of_32gameCode.GDHealthKitObjects3= [];
gdjs.Start_32of_32gameCode.GDHealthKitObjects4= [];
gdjs.Start_32of_32gameCode.GDhealthkitObjects1= [];
gdjs.Start_32of_32gameCode.GDhealthkitObjects2= [];
gdjs.Start_32of_32gameCode.GDhealthkitObjects3= [];
gdjs.Start_32of_32gameCode.GDhealthkitObjects4= [];


gdjs.Start_32of_32gameCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "scrollText") >= gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0));
if (isConditionTrue_0) {
{gdjs.dialogueTree.scrollClippedText();
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "scrollText");
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
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.dialogueTree.hasClippedScrollingCompleted());
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.sound.isSoundOnChannelStopped(runtimeScene, 0);
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "talking.mp3", 0, false, 50, 1);
}}

}


};gdjs.Start_32of_32gameCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Ground Floor", false);
}}

}


};gdjs.Start_32of_32gameCode.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Dialogue"), gdjs.Start_32of_32gameCode.GDDialogueObjects2);
gdjs.copyArray(runtimeScene.getObjects("Options"), gdjs.Start_32of_32gameCode.GDOptionsObjects2);
{for(var i = 0, len = gdjs.Start_32of_32gameCode.GDDialogueObjects2.length ;i < len;++i) {
    gdjs.Start_32of_32gameCode.GDDialogueObjects2[i].hide();
}
}{for(var i = 0, len = gdjs.Start_32of_32gameCode.GDOptionsObjects2.length ;i < len;++i) {
    gdjs.Start_32of_32gameCode.GDOptionsObjects2[i].hide();
}
}{gdjs.dialogueTree.loadFromJsonFile(runtimeScene, " Dialogue");
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "e");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.dialogueTree.isRunning());
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Dialogue"), gdjs.Start_32of_32gameCode.GDDialogueObjects2);
{for(var i = 0, len = gdjs.Start_32of_32gameCode.GDDialogueObjects2.length ;i < len;++i) {
    gdjs.Start_32of_32gameCode.GDDialogueObjects2[i].hide(false);
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "scrollText");
}{gdjs.dialogueTree.startFrom("start");
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.dialogueTree.isDialogueLineType("text");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Dialogue"), gdjs.Start_32of_32gameCode.GDDialogueObjects2);
{for(var i = 0, len = gdjs.Start_32of_32gameCode.GDDialogueObjects2.length ;i < len;++i) {
    gdjs.Start_32of_32gameCode.GDDialogueObjects2[i].getBehavior("Text").setText(gdjs.dialogueTree.getClippedLineText());
}
}
{ //Subevents
gdjs.Start_32of_32gameCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.dialogueTree.isDialogueLineType("options"));
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Options"), gdjs.Start_32of_32gameCode.GDOptionsObjects2);
{for(var i = 0, len = gdjs.Start_32of_32gameCode.GDOptionsObjects2.length ;i < len;++i) {
    gdjs.Start_32of_32gameCode.GDOptionsObjects2[i].hide();
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.dialogueTree.isDialogueLineType("options");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Options"), gdjs.Start_32of_32gameCode.GDOptionsObjects2);
{for(var i = 0, len = gdjs.Start_32of_32gameCode.GDOptionsObjects2.length ;i < len;++i) {
    gdjs.Start_32of_32gameCode.GDOptionsObjects2[i].hide(false);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Up");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(16279612);
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
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(16280684);
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
gdjs.copyArray(runtimeScene.getObjects("Options"), gdjs.Start_32of_32gameCode.GDOptionsObjects2);
{for(var i = 0, len = gdjs.Start_32of_32gameCode.GDOptionsObjects2.length ;i < len;++i) {
    gdjs.Start_32of_32gameCode.GDOptionsObjects2[i].getBehavior("Text").setText(gdjs.dialogueTree.getLineOptionsTextVertical("-> "));
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.dialogueTree.isRunning());
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "scrollText") >= 1;
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Dialogue"), gdjs.Start_32of_32gameCode.GDDialogueObjects1);
{for(var i = 0, len = gdjs.Start_32of_32gameCode.GDDialogueObjects1.length ;i < len;++i) {
    gdjs.Start_32of_32gameCode.GDDialogueObjects1[i].hide();
}
}
{ //Subevents
gdjs.Start_32of_32gameCode.eventsList1(runtimeScene);} //End of subevents
}

}


};gdjs.Start_32of_32gameCode.eventsList3 = function(runtimeScene) {

{


gdjs.Start_32of_32gameCode.eventsList2(runtimeScene);
}


};

gdjs.Start_32of_32gameCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Start_32of_32gameCode.GDPlayerObjects1.length = 0;
gdjs.Start_32of_32gameCode.GDPlayerObjects2.length = 0;
gdjs.Start_32of_32gameCode.GDPlayerObjects3.length = 0;
gdjs.Start_32of_32gameCode.GDPlayerObjects4.length = 0;
gdjs.Start_32of_32gameCode.GDPlayerHealthObjects1.length = 0;
gdjs.Start_32of_32gameCode.GDPlayerHealthObjects2.length = 0;
gdjs.Start_32of_32gameCode.GDPlayerHealthObjects3.length = 0;
gdjs.Start_32of_32gameCode.GDPlayerHealthObjects4.length = 0;
gdjs.Start_32of_32gameCode.GDBulletObjects1.length = 0;
gdjs.Start_32of_32gameCode.GDBulletObjects2.length = 0;
gdjs.Start_32of_32gameCode.GDBulletObjects3.length = 0;
gdjs.Start_32of_32gameCode.GDBulletObjects4.length = 0;
gdjs.Start_32of_32gameCode.GDPointsObjects1.length = 0;
gdjs.Start_32of_32gameCode.GDPointsObjects2.length = 0;
gdjs.Start_32of_32gameCode.GDPointsObjects3.length = 0;
gdjs.Start_32of_32gameCode.GDPointsObjects4.length = 0;
gdjs.Start_32of_32gameCode.GDZombieObjects1.length = 0;
gdjs.Start_32of_32gameCode.GDZombieObjects2.length = 0;
gdjs.Start_32of_32gameCode.GDZombieObjects3.length = 0;
gdjs.Start_32of_32gameCode.GDZombieObjects4.length = 0;
gdjs.Start_32of_32gameCode.GDHealthBarObjects1.length = 0;
gdjs.Start_32of_32gameCode.GDHealthBarObjects2.length = 0;
gdjs.Start_32of_32gameCode.GDHealthBarObjects3.length = 0;
gdjs.Start_32of_32gameCode.GDHealthBarObjects4.length = 0;
gdjs.Start_32of_32gameCode.GDSpawnObjects1.length = 0;
gdjs.Start_32of_32gameCode.GDSpawnObjects2.length = 0;
gdjs.Start_32of_32gameCode.GDSpawnObjects3.length = 0;
gdjs.Start_32of_32gameCode.GDSpawnObjects4.length = 0;
gdjs.Start_32of_32gameCode.GDNO_9595walk_9595wallObjects1.length = 0;
gdjs.Start_32of_32gameCode.GDNO_9595walk_9595wallObjects2.length = 0;
gdjs.Start_32of_32gameCode.GDNO_9595walk_9595wallObjects3.length = 0;
gdjs.Start_32of_32gameCode.GDNO_9595walk_9595wallObjects4.length = 0;
gdjs.Start_32of_32gameCode.GDPlayerSpawnObjects1.length = 0;
gdjs.Start_32of_32gameCode.GDPlayerSpawnObjects2.length = 0;
gdjs.Start_32of_32gameCode.GDPlayerSpawnObjects3.length = 0;
gdjs.Start_32of_32gameCode.GDPlayerSpawnObjects4.length = 0;
gdjs.Start_32of_32gameCode.GDDialogueObjects1.length = 0;
gdjs.Start_32of_32gameCode.GDDialogueObjects2.length = 0;
gdjs.Start_32of_32gameCode.GDDialogueObjects3.length = 0;
gdjs.Start_32of_32gameCode.GDDialogueObjects4.length = 0;
gdjs.Start_32of_32gameCode.GDOptionsObjects1.length = 0;
gdjs.Start_32of_32gameCode.GDOptionsObjects2.length = 0;
gdjs.Start_32of_32gameCode.GDOptionsObjects3.length = 0;
gdjs.Start_32of_32gameCode.GDOptionsObjects4.length = 0;
gdjs.Start_32of_32gameCode.GDCornerObjects1.length = 0;
gdjs.Start_32of_32gameCode.GDCornerObjects2.length = 0;
gdjs.Start_32of_32gameCode.GDCornerObjects3.length = 0;
gdjs.Start_32of_32gameCode.GDCornerObjects4.length = 0;
gdjs.Start_32of_32gameCode.GDBackyardObjects1.length = 0;
gdjs.Start_32of_32gameCode.GDBackyardObjects2.length = 0;
gdjs.Start_32of_32gameCode.GDBackyardObjects3.length = 0;
gdjs.Start_32of_32gameCode.GDBackyardObjects4.length = 0;
gdjs.Start_32of_32gameCode.GDNewSpriteObjects1.length = 0;
gdjs.Start_32of_32gameCode.GDNewSpriteObjects2.length = 0;
gdjs.Start_32of_32gameCode.GDNewSpriteObjects3.length = 0;
gdjs.Start_32of_32gameCode.GDNewSpriteObjects4.length = 0;
gdjs.Start_32of_32gameCode.GDBassment_9595doorObjects1.length = 0;
gdjs.Start_32of_32gameCode.GDBassment_9595doorObjects2.length = 0;
gdjs.Start_32of_32gameCode.GDBassment_9595doorObjects3.length = 0;
gdjs.Start_32of_32gameCode.GDBassment_9595doorObjects4.length = 0;
gdjs.Start_32of_32gameCode.GDhouse_9595Objects1.length = 0;
gdjs.Start_32of_32gameCode.GDhouse_9595Objects2.length = 0;
gdjs.Start_32of_32gameCode.GDhouse_9595Objects3.length = 0;
gdjs.Start_32of_32gameCode.GDhouse_9595Objects4.length = 0;
gdjs.Start_32of_32gameCode.GDBassment_9595door2Objects1.length = 0;
gdjs.Start_32of_32gameCode.GDBassment_9595door2Objects2.length = 0;
gdjs.Start_32of_32gameCode.GDBassment_9595door2Objects3.length = 0;
gdjs.Start_32of_32gameCode.GDBassment_9595door2Objects4.length = 0;
gdjs.Start_32of_32gameCode.GDNewSprite2Objects1.length = 0;
gdjs.Start_32of_32gameCode.GDNewSprite2Objects2.length = 0;
gdjs.Start_32of_32gameCode.GDNewSprite2Objects3.length = 0;
gdjs.Start_32of_32gameCode.GDNewSprite2Objects4.length = 0;
gdjs.Start_32of_32gameCode.GDHealthKitObjects1.length = 0;
gdjs.Start_32of_32gameCode.GDHealthKitObjects2.length = 0;
gdjs.Start_32of_32gameCode.GDHealthKitObjects3.length = 0;
gdjs.Start_32of_32gameCode.GDHealthKitObjects4.length = 0;
gdjs.Start_32of_32gameCode.GDhealthkitObjects1.length = 0;
gdjs.Start_32of_32gameCode.GDhealthkitObjects2.length = 0;
gdjs.Start_32of_32gameCode.GDhealthkitObjects3.length = 0;
gdjs.Start_32of_32gameCode.GDhealthkitObjects4.length = 0;

gdjs.Start_32of_32gameCode.eventsList3(runtimeScene);

return;

}

gdjs['Start_32of_32gameCode'] = gdjs.Start_32of_32gameCode;
