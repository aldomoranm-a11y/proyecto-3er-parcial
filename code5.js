gdjs.gameoverCode = {};
gdjs.gameoverCode.localVariables = [];
gdjs.gameoverCode.idToCallbackMap = new Map();
gdjs.gameoverCode.GDWinter_9595BackgroundObjects1= [];
gdjs.gameoverCode.GDWinter_9595BackgroundObjects2= [];
gdjs.gameoverCode.GDTransparentButtonWithWhiteBlueBorderObjects1= [];
gdjs.gameoverCode.GDTransparentButtonWithWhiteBlueBorderObjects2= [];
gdjs.gameoverCode.GDNewTextObjects1= [];
gdjs.gameoverCode.GDNewTextObjects2= [];
gdjs.gameoverCode.GDPenguinObjects1= [];
gdjs.gameoverCode.GDPenguinObjects2= [];
gdjs.gameoverCode.GDBlueberryObjects1= [];
gdjs.gameoverCode.GDBlueberryObjects2= [];
gdjs.gameoverCode.GDStrawberryObjects1= [];
gdjs.gameoverCode.GDStrawberryObjects2= [];
gdjs.gameoverCode.GDBubObjects1= [];
gdjs.gameoverCode.GDBubObjects2= [];
gdjs.gameoverCode.GDCoinsObjects1= [];
gdjs.gameoverCode.GDCoinsObjects2= [];
gdjs.gameoverCode.GDLifesObjects1= [];
gdjs.gameoverCode.GDLifesObjects2= [];
gdjs.gameoverCode.GDCoinObjects1= [];
gdjs.gameoverCode.GDCoinObjects2= [];
gdjs.gameoverCode.GDMagic_9595Charged_9595PelletObjects1= [];
gdjs.gameoverCode.GDMagic_9595Charged_9595PelletObjects2= [];
gdjs.gameoverCode.GDBubossObjects1= [];
gdjs.gameoverCode.GDBubossObjects2= [];
gdjs.gameoverCode.GDBlocky_9595BubObjects1= [];
gdjs.gameoverCode.GDBlocky_9595BubObjects2= [];


gdjs.gameoverCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("TransparentButtonWithWhiteBlueBorder"), gdjs.gameoverCode.GDTransparentButtonWithWhiteBlueBorderObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.gameoverCode.GDTransparentButtonWithWhiteBlueBorderObjects1.length;i<l;++i) {
    if ( gdjs.gameoverCode.GDTransparentButtonWithWhiteBlueBorderObjects1[i].IsPressed(null) ) {
        isConditionTrue_0 = true;
        gdjs.gameoverCode.GDTransparentButtonWithWhiteBlueBorderObjects1[k] = gdjs.gameoverCode.GDTransparentButtonWithWhiteBlueBorderObjects1[i];
        ++k;
    }
}
gdjs.gameoverCode.GDTransparentButtonWithWhiteBlueBorderObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "level 1", false);
}
{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(5);
}
}

}


{


let isConditionTrue_0 = false;
{
}

}


};

gdjs.gameoverCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.gameoverCode.GDWinter_9595BackgroundObjects1.length = 0;
gdjs.gameoverCode.GDWinter_9595BackgroundObjects2.length = 0;
gdjs.gameoverCode.GDTransparentButtonWithWhiteBlueBorderObjects1.length = 0;
gdjs.gameoverCode.GDTransparentButtonWithWhiteBlueBorderObjects2.length = 0;
gdjs.gameoverCode.GDNewTextObjects1.length = 0;
gdjs.gameoverCode.GDNewTextObjects2.length = 0;
gdjs.gameoverCode.GDPenguinObjects1.length = 0;
gdjs.gameoverCode.GDPenguinObjects2.length = 0;
gdjs.gameoverCode.GDBlueberryObjects1.length = 0;
gdjs.gameoverCode.GDBlueberryObjects2.length = 0;
gdjs.gameoverCode.GDStrawberryObjects1.length = 0;
gdjs.gameoverCode.GDStrawberryObjects2.length = 0;
gdjs.gameoverCode.GDBubObjects1.length = 0;
gdjs.gameoverCode.GDBubObjects2.length = 0;
gdjs.gameoverCode.GDCoinsObjects1.length = 0;
gdjs.gameoverCode.GDCoinsObjects2.length = 0;
gdjs.gameoverCode.GDLifesObjects1.length = 0;
gdjs.gameoverCode.GDLifesObjects2.length = 0;
gdjs.gameoverCode.GDCoinObjects1.length = 0;
gdjs.gameoverCode.GDCoinObjects2.length = 0;
gdjs.gameoverCode.GDMagic_9595Charged_9595PelletObjects1.length = 0;
gdjs.gameoverCode.GDMagic_9595Charged_9595PelletObjects2.length = 0;
gdjs.gameoverCode.GDBubossObjects1.length = 0;
gdjs.gameoverCode.GDBubossObjects2.length = 0;
gdjs.gameoverCode.GDBlocky_9595BubObjects1.length = 0;
gdjs.gameoverCode.GDBlocky_9595BubObjects2.length = 0;

gdjs.gameoverCode.eventsList0(runtimeScene);
gdjs.gameoverCode.GDWinter_9595BackgroundObjects1.length = 0;
gdjs.gameoverCode.GDWinter_9595BackgroundObjects2.length = 0;
gdjs.gameoverCode.GDTransparentButtonWithWhiteBlueBorderObjects1.length = 0;
gdjs.gameoverCode.GDTransparentButtonWithWhiteBlueBorderObjects2.length = 0;
gdjs.gameoverCode.GDNewTextObjects1.length = 0;
gdjs.gameoverCode.GDNewTextObjects2.length = 0;
gdjs.gameoverCode.GDPenguinObjects1.length = 0;
gdjs.gameoverCode.GDPenguinObjects2.length = 0;
gdjs.gameoverCode.GDBlueberryObjects1.length = 0;
gdjs.gameoverCode.GDBlueberryObjects2.length = 0;
gdjs.gameoverCode.GDStrawberryObjects1.length = 0;
gdjs.gameoverCode.GDStrawberryObjects2.length = 0;
gdjs.gameoverCode.GDBubObjects1.length = 0;
gdjs.gameoverCode.GDBubObjects2.length = 0;
gdjs.gameoverCode.GDCoinsObjects1.length = 0;
gdjs.gameoverCode.GDCoinsObjects2.length = 0;
gdjs.gameoverCode.GDLifesObjects1.length = 0;
gdjs.gameoverCode.GDLifesObjects2.length = 0;
gdjs.gameoverCode.GDCoinObjects1.length = 0;
gdjs.gameoverCode.GDCoinObjects2.length = 0;
gdjs.gameoverCode.GDMagic_9595Charged_9595PelletObjects1.length = 0;
gdjs.gameoverCode.GDMagic_9595Charged_9595PelletObjects2.length = 0;
gdjs.gameoverCode.GDBubossObjects1.length = 0;
gdjs.gameoverCode.GDBubossObjects2.length = 0;
gdjs.gameoverCode.GDBlocky_9595BubObjects1.length = 0;
gdjs.gameoverCode.GDBlocky_9595BubObjects2.length = 0;


return;

}

gdjs['gameoverCode'] = gdjs.gameoverCode;
