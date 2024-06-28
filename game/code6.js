gdjs.upstarisCode = {};
gdjs.upstarisCode.localVariables = [];
gdjs.upstarisCode.GDJaneObjects1= [];
gdjs.upstarisCode.GDJaneObjects2= [];
gdjs.upstarisCode.GDJaneObjects3= [];
gdjs.upstarisCode.GDJaneObjects4= [];
gdjs.upstarisCode.GDNewSprite3Objects1= [];
gdjs.upstarisCode.GDNewSprite3Objects2= [];
gdjs.upstarisCode.GDNewSprite3Objects3= [];
gdjs.upstarisCode.GDNewSprite3Objects4= [];
gdjs.upstarisCode.GDPlayerObjects1= [];
gdjs.upstarisCode.GDPlayerObjects2= [];
gdjs.upstarisCode.GDPlayerObjects3= [];
gdjs.upstarisCode.GDPlayerObjects4= [];
gdjs.upstarisCode.GDPlayerHealthObjects1= [];
gdjs.upstarisCode.GDPlayerHealthObjects2= [];
gdjs.upstarisCode.GDPlayerHealthObjects3= [];
gdjs.upstarisCode.GDPlayerHealthObjects4= [];
gdjs.upstarisCode.GDBulletObjects1= [];
gdjs.upstarisCode.GDBulletObjects2= [];
gdjs.upstarisCode.GDBulletObjects3= [];
gdjs.upstarisCode.GDBulletObjects4= [];
gdjs.upstarisCode.GDPointsObjects1= [];
gdjs.upstarisCode.GDPointsObjects2= [];
gdjs.upstarisCode.GDPointsObjects3= [];
gdjs.upstarisCode.GDPointsObjects4= [];
gdjs.upstarisCode.GDZombieObjects1= [];
gdjs.upstarisCode.GDZombieObjects2= [];
gdjs.upstarisCode.GDZombieObjects3= [];
gdjs.upstarisCode.GDZombieObjects4= [];
gdjs.upstarisCode.GDHealthBarObjects1= [];
gdjs.upstarisCode.GDHealthBarObjects2= [];
gdjs.upstarisCode.GDHealthBarObjects3= [];
gdjs.upstarisCode.GDHealthBarObjects4= [];
gdjs.upstarisCode.GDSpawnObjects1= [];
gdjs.upstarisCode.GDSpawnObjects2= [];
gdjs.upstarisCode.GDSpawnObjects3= [];
gdjs.upstarisCode.GDSpawnObjects4= [];
gdjs.upstarisCode.GDNO_9595walk_9595wallObjects1= [];
gdjs.upstarisCode.GDNO_9595walk_9595wallObjects2= [];
gdjs.upstarisCode.GDNO_9595walk_9595wallObjects3= [];
gdjs.upstarisCode.GDNO_9595walk_9595wallObjects4= [];
gdjs.upstarisCode.GDPlayerSpawnObjects1= [];
gdjs.upstarisCode.GDPlayerSpawnObjects2= [];
gdjs.upstarisCode.GDPlayerSpawnObjects3= [];
gdjs.upstarisCode.GDPlayerSpawnObjects4= [];
gdjs.upstarisCode.GDDialogueObjects1= [];
gdjs.upstarisCode.GDDialogueObjects2= [];
gdjs.upstarisCode.GDDialogueObjects3= [];
gdjs.upstarisCode.GDDialogueObjects4= [];
gdjs.upstarisCode.GDOptionsObjects1= [];
gdjs.upstarisCode.GDOptionsObjects2= [];
gdjs.upstarisCode.GDOptionsObjects3= [];
gdjs.upstarisCode.GDOptionsObjects4= [];
gdjs.upstarisCode.GDCornerObjects1= [];
gdjs.upstarisCode.GDCornerObjects2= [];
gdjs.upstarisCode.GDCornerObjects3= [];
gdjs.upstarisCode.GDCornerObjects4= [];
gdjs.upstarisCode.GDBackyardObjects1= [];
gdjs.upstarisCode.GDBackyardObjects2= [];
gdjs.upstarisCode.GDBackyardObjects3= [];
gdjs.upstarisCode.GDBackyardObjects4= [];
gdjs.upstarisCode.GDNewSpriteObjects1= [];
gdjs.upstarisCode.GDNewSpriteObjects2= [];
gdjs.upstarisCode.GDNewSpriteObjects3= [];
gdjs.upstarisCode.GDNewSpriteObjects4= [];
gdjs.upstarisCode.GDBassment_9595doorObjects1= [];
gdjs.upstarisCode.GDBassment_9595doorObjects2= [];
gdjs.upstarisCode.GDBassment_9595doorObjects3= [];
gdjs.upstarisCode.GDBassment_9595doorObjects4= [];
gdjs.upstarisCode.GDhouse_9595Objects1= [];
gdjs.upstarisCode.GDhouse_9595Objects2= [];
gdjs.upstarisCode.GDhouse_9595Objects3= [];
gdjs.upstarisCode.GDhouse_9595Objects4= [];
gdjs.upstarisCode.GDBassment_9595door2Objects1= [];
gdjs.upstarisCode.GDBassment_9595door2Objects2= [];
gdjs.upstarisCode.GDBassment_9595door2Objects3= [];
gdjs.upstarisCode.GDBassment_9595door2Objects4= [];
gdjs.upstarisCode.GDNewSprite2Objects1= [];
gdjs.upstarisCode.GDNewSprite2Objects2= [];
gdjs.upstarisCode.GDNewSprite2Objects3= [];
gdjs.upstarisCode.GDNewSprite2Objects4= [];
gdjs.upstarisCode.GDHealthKitObjects1= [];
gdjs.upstarisCode.GDHealthKitObjects2= [];
gdjs.upstarisCode.GDHealthKitObjects3= [];
gdjs.upstarisCode.GDHealthKitObjects4= [];
gdjs.upstarisCode.GDhealthkitObjects1= [];
gdjs.upstarisCode.GDhealthkitObjects2= [];
gdjs.upstarisCode.GDhealthkitObjects3= [];
gdjs.upstarisCode.GDhealthkitObjects4= [];


gdjs.upstarisCode.mapOfGDgdjs_9546upstarisCode_9546GDPlayerObjects2Objects = Hashtable.newFrom({"Player": gdjs.upstarisCode.GDPlayerObjects2});
gdjs.upstarisCode.mapOfGDgdjs_9546upstarisCode_9546GDJaneObjects2Objects = Hashtable.newFrom({"Jane": gdjs.upstarisCode.GDJaneObjects2});
gdjs.upstarisCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "ScrollText") >= gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("TextScrollSpeed"));
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
{runtimeScene.getScene().getVariables().get("TextScrollSpeed").setNumber(0.01);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.input.isKeyPressed(runtimeScene, "r"));
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().get("TextScrollSpeed").setNumber(0.05);
}}

}


{


let isConditionTrue_0 = false;
{
}

}


};gdjs.upstarisCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Up");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(16780500);
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
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(16781164);
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
/* Reuse gdjs.upstarisCode.GDOptionsObjects2 */
{for(var i = 0, len = gdjs.upstarisCode.GDOptionsObjects2.length ;i < len;++i) {
    gdjs.upstarisCode.GDOptionsObjects2[i].getBehavior("Text").setText(gdjs.dialogueTree.getLineOptionsTextVertical("-> "));
}
}}

}


};gdjs.upstarisCode.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Dialogue"), gdjs.upstarisCode.GDDialogueObjects2);
gdjs.copyArray(runtimeScene.getObjects("Options"), gdjs.upstarisCode.GDOptionsObjects2);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.upstarisCode.GDPlayerObjects2);
{for(var i = 0, len = gdjs.upstarisCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.upstarisCode.GDPlayerObjects2[i].returnVariable(gdjs.upstarisCode.GDPlayerObjects2[i].getVariables().getFromIndex(0)).setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)));
}
}{for(var i = 0, len = gdjs.upstarisCode.GDDialogueObjects2.length ;i < len;++i) {
    gdjs.upstarisCode.GDDialogueObjects2[i].hide();
}
}{for(var i = 0, len = gdjs.upstarisCode.GDOptionsObjects2.length ;i < len;++i) {
    gdjs.upstarisCode.GDOptionsObjects2[i].hide();
}
}{gdjs.dialogueTree.loadFromJsonFile(runtimeScene, "Janes");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Jane"), gdjs.upstarisCode.GDJaneObjects2);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.upstarisCode.GDPlayerObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "e");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.upstarisCode.mapOfGDgdjs_9546upstarisCode_9546GDPlayerObjects2Objects, gdjs.upstarisCode.mapOfGDgdjs_9546upstarisCode_9546GDJaneObjects2Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.dialogueTree.isRunning());
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Dialogue"), gdjs.upstarisCode.GDDialogueObjects2);
{for(var i = 0, len = gdjs.upstarisCode.GDDialogueObjects2.length ;i < len;++i) {
    gdjs.upstarisCode.GDDialogueObjects2[i].hide(false);
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
gdjs.copyArray(runtimeScene.getObjects("Dialogue"), gdjs.upstarisCode.GDDialogueObjects2);
{for(var i = 0, len = gdjs.upstarisCode.GDDialogueObjects2.length ;i < len;++i) {
    gdjs.upstarisCode.GDDialogueObjects2[i].getBehavior("Text").setText(gdjs.dialogueTree.getClippedLineText());
}
}
{ //Subevents
gdjs.upstarisCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.dialogueTree.isDialogueLineType("options"));
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Options"), gdjs.upstarisCode.GDOptionsObjects2);
{for(var i = 0, len = gdjs.upstarisCode.GDOptionsObjects2.length ;i < len;++i) {
    gdjs.upstarisCode.GDOptionsObjects2[i].hide();
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.dialogueTree.isDialogueLineType("options");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Options"), gdjs.upstarisCode.GDOptionsObjects2);
{for(var i = 0, len = gdjs.upstarisCode.GDOptionsObjects2.length ;i < len;++i) {
    gdjs.upstarisCode.GDOptionsObjects2[i].hide(false);
}
}
{ //Subevents
gdjs.upstarisCode.eventsList1(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.dialogueTree.isCommandCalled("Shoot");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Jane"), gdjs.upstarisCode.GDJaneObjects2);
{for(var i = 0, len = gdjs.upstarisCode.GDJaneObjects2.length ;i < len;++i) {
    gdjs.upstarisCode.GDJaneObjects2[i].returnVariable(gdjs.upstarisCode.GDJaneObjects2[i].getVariables().getFromIndex(0)).add(1);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Jane"), gdjs.upstarisCode.GDJaneObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.upstarisCode.GDJaneObjects2.length;i<l;++i) {
    if ( gdjs.upstarisCode.GDJaneObjects2[i].getVariableNumber(gdjs.upstarisCode.GDJaneObjects2[i].getVariables().getFromIndex(0)) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.upstarisCode.GDJaneObjects2[k] = gdjs.upstarisCode.GDJaneObjects2[i];
        ++k;
    }
}
gdjs.upstarisCode.GDJaneObjects2.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Jane Ending", false);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.dialogueTree.isCommandCalled("Jane");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Jane"), gdjs.upstarisCode.GDJaneObjects2);
{for(var i = 0, len = gdjs.upstarisCode.GDJaneObjects2.length ;i < len;++i) {
    gdjs.upstarisCode.GDJaneObjects2[i].returnVariable(gdjs.upstarisCode.GDJaneObjects2[i].getVariables().getFromIndex(0)).add(2);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Jane"), gdjs.upstarisCode.GDJaneObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.upstarisCode.GDJaneObjects1.length;i<l;++i) {
    if ( gdjs.upstarisCode.GDJaneObjects1[i].getVariableNumber(gdjs.upstarisCode.GDJaneObjects1[i].getVariables().getFromIndex(0)) == 2 ) {
        isConditionTrue_0 = true;
        gdjs.upstarisCode.GDJaneObjects1[k] = gdjs.upstarisCode.GDJaneObjects1[i];
        ++k;
    }
}
gdjs.upstarisCode.GDJaneObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "John Ending", false);
}}

}


};gdjs.upstarisCode.eventsList3 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.upstarisCode.GDPlayerObjects2);
{gdjs.evtTools.camera.centerCamera(runtimeScene, (gdjs.upstarisCode.GDPlayerObjects2.length !== 0 ? gdjs.upstarisCode.GDPlayerObjects2[0] : null), true, "", 0);
}}

}


{


let isConditionTrue_0 = false;
{
{gdjs.evtTools.camera.setCameraZoom(runtimeScene, 2, "", 0);
}}

}


};gdjs.upstarisCode.eventsList4 = function(runtimeScene) {

{


gdjs.upstarisCode.eventsList2(runtimeScene);
}


{


gdjs.upstarisCode.eventsList3(runtimeScene);
}


};

gdjs.upstarisCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.upstarisCode.GDJaneObjects1.length = 0;
gdjs.upstarisCode.GDJaneObjects2.length = 0;
gdjs.upstarisCode.GDJaneObjects3.length = 0;
gdjs.upstarisCode.GDJaneObjects4.length = 0;
gdjs.upstarisCode.GDNewSprite3Objects1.length = 0;
gdjs.upstarisCode.GDNewSprite3Objects2.length = 0;
gdjs.upstarisCode.GDNewSprite3Objects3.length = 0;
gdjs.upstarisCode.GDNewSprite3Objects4.length = 0;
gdjs.upstarisCode.GDPlayerObjects1.length = 0;
gdjs.upstarisCode.GDPlayerObjects2.length = 0;
gdjs.upstarisCode.GDPlayerObjects3.length = 0;
gdjs.upstarisCode.GDPlayerObjects4.length = 0;
gdjs.upstarisCode.GDPlayerHealthObjects1.length = 0;
gdjs.upstarisCode.GDPlayerHealthObjects2.length = 0;
gdjs.upstarisCode.GDPlayerHealthObjects3.length = 0;
gdjs.upstarisCode.GDPlayerHealthObjects4.length = 0;
gdjs.upstarisCode.GDBulletObjects1.length = 0;
gdjs.upstarisCode.GDBulletObjects2.length = 0;
gdjs.upstarisCode.GDBulletObjects3.length = 0;
gdjs.upstarisCode.GDBulletObjects4.length = 0;
gdjs.upstarisCode.GDPointsObjects1.length = 0;
gdjs.upstarisCode.GDPointsObjects2.length = 0;
gdjs.upstarisCode.GDPointsObjects3.length = 0;
gdjs.upstarisCode.GDPointsObjects4.length = 0;
gdjs.upstarisCode.GDZombieObjects1.length = 0;
gdjs.upstarisCode.GDZombieObjects2.length = 0;
gdjs.upstarisCode.GDZombieObjects3.length = 0;
gdjs.upstarisCode.GDZombieObjects4.length = 0;
gdjs.upstarisCode.GDHealthBarObjects1.length = 0;
gdjs.upstarisCode.GDHealthBarObjects2.length = 0;
gdjs.upstarisCode.GDHealthBarObjects3.length = 0;
gdjs.upstarisCode.GDHealthBarObjects4.length = 0;
gdjs.upstarisCode.GDSpawnObjects1.length = 0;
gdjs.upstarisCode.GDSpawnObjects2.length = 0;
gdjs.upstarisCode.GDSpawnObjects3.length = 0;
gdjs.upstarisCode.GDSpawnObjects4.length = 0;
gdjs.upstarisCode.GDNO_9595walk_9595wallObjects1.length = 0;
gdjs.upstarisCode.GDNO_9595walk_9595wallObjects2.length = 0;
gdjs.upstarisCode.GDNO_9595walk_9595wallObjects3.length = 0;
gdjs.upstarisCode.GDNO_9595walk_9595wallObjects4.length = 0;
gdjs.upstarisCode.GDPlayerSpawnObjects1.length = 0;
gdjs.upstarisCode.GDPlayerSpawnObjects2.length = 0;
gdjs.upstarisCode.GDPlayerSpawnObjects3.length = 0;
gdjs.upstarisCode.GDPlayerSpawnObjects4.length = 0;
gdjs.upstarisCode.GDDialogueObjects1.length = 0;
gdjs.upstarisCode.GDDialogueObjects2.length = 0;
gdjs.upstarisCode.GDDialogueObjects3.length = 0;
gdjs.upstarisCode.GDDialogueObjects4.length = 0;
gdjs.upstarisCode.GDOptionsObjects1.length = 0;
gdjs.upstarisCode.GDOptionsObjects2.length = 0;
gdjs.upstarisCode.GDOptionsObjects3.length = 0;
gdjs.upstarisCode.GDOptionsObjects4.length = 0;
gdjs.upstarisCode.GDCornerObjects1.length = 0;
gdjs.upstarisCode.GDCornerObjects2.length = 0;
gdjs.upstarisCode.GDCornerObjects3.length = 0;
gdjs.upstarisCode.GDCornerObjects4.length = 0;
gdjs.upstarisCode.GDBackyardObjects1.length = 0;
gdjs.upstarisCode.GDBackyardObjects2.length = 0;
gdjs.upstarisCode.GDBackyardObjects3.length = 0;
gdjs.upstarisCode.GDBackyardObjects4.length = 0;
gdjs.upstarisCode.GDNewSpriteObjects1.length = 0;
gdjs.upstarisCode.GDNewSpriteObjects2.length = 0;
gdjs.upstarisCode.GDNewSpriteObjects3.length = 0;
gdjs.upstarisCode.GDNewSpriteObjects4.length = 0;
gdjs.upstarisCode.GDBassment_9595doorObjects1.length = 0;
gdjs.upstarisCode.GDBassment_9595doorObjects2.length = 0;
gdjs.upstarisCode.GDBassment_9595doorObjects3.length = 0;
gdjs.upstarisCode.GDBassment_9595doorObjects4.length = 0;
gdjs.upstarisCode.GDhouse_9595Objects1.length = 0;
gdjs.upstarisCode.GDhouse_9595Objects2.length = 0;
gdjs.upstarisCode.GDhouse_9595Objects3.length = 0;
gdjs.upstarisCode.GDhouse_9595Objects4.length = 0;
gdjs.upstarisCode.GDBassment_9595door2Objects1.length = 0;
gdjs.upstarisCode.GDBassment_9595door2Objects2.length = 0;
gdjs.upstarisCode.GDBassment_9595door2Objects3.length = 0;
gdjs.upstarisCode.GDBassment_9595door2Objects4.length = 0;
gdjs.upstarisCode.GDNewSprite2Objects1.length = 0;
gdjs.upstarisCode.GDNewSprite2Objects2.length = 0;
gdjs.upstarisCode.GDNewSprite2Objects3.length = 0;
gdjs.upstarisCode.GDNewSprite2Objects4.length = 0;
gdjs.upstarisCode.GDHealthKitObjects1.length = 0;
gdjs.upstarisCode.GDHealthKitObjects2.length = 0;
gdjs.upstarisCode.GDHealthKitObjects3.length = 0;
gdjs.upstarisCode.GDHealthKitObjects4.length = 0;
gdjs.upstarisCode.GDhealthkitObjects1.length = 0;
gdjs.upstarisCode.GDhealthkitObjects2.length = 0;
gdjs.upstarisCode.GDhealthkitObjects3.length = 0;
gdjs.upstarisCode.GDhealthkitObjects4.length = 0;

gdjs.upstarisCode.eventsList4(runtimeScene);

return;

}

gdjs['upstarisCode'] = gdjs.upstarisCode;
