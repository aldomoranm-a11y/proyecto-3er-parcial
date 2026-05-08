gdjs.menuCode = {};
gdjs.menuCode.localVariables = [];
gdjs.menuCode.idToCallbackMap = new Map();
gdjs.menuCode.GDTransparentButtonWithWhiteBlueBorderObjects1= [];
gdjs.menuCode.GDTransparentButtonWithWhiteBlueBorderObjects2= [];
gdjs.menuCode.GDWinter_9595BackgroundObjects1= [];
gdjs.menuCode.GDWinter_9595BackgroundObjects2= [];
gdjs.menuCode.GDPenguinObjects1= [];
gdjs.menuCode.GDPenguinObjects2= [];
gdjs.menuCode.GDBlueberryObjects1= [];
gdjs.menuCode.GDBlueberryObjects2= [];
gdjs.menuCode.GDStrawberryObjects1= [];
gdjs.menuCode.GDStrawberryObjects2= [];
gdjs.menuCode.GDBubObjects1= [];
gdjs.menuCode.GDBubObjects2= [];
gdjs.menuCode.GDCoinsObjects1= [];
gdjs.menuCode.GDCoinsObjects2= [];
gdjs.menuCode.GDLifesObjects1= [];
gdjs.menuCode.GDLifesObjects2= [];
gdjs.menuCode.GDCoinObjects1= [];
gdjs.menuCode.GDCoinObjects2= [];
gdjs.menuCode.GDMagic_9595Charged_9595PelletObjects1= [];
gdjs.menuCode.GDMagic_9595Charged_9595PelletObjects2= [];
gdjs.menuCode.GDBubossObjects1= [];
gdjs.menuCode.GDBubossObjects2= [];
gdjs.menuCode.GDBlocky_9595BubObjects1= [];
gdjs.menuCode.GDBlocky_9595BubObjects2= [];


gdjs.menuCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("TransparentButtonWithWhiteBlueBorder"), gdjs.menuCode.GDTransparentButtonWithWhiteBlueBorderObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.menuCode.GDTransparentButtonWithWhiteBlueBorderObjects1.length;i<l;++i) {
    if ( gdjs.menuCode.GDTransparentButtonWithWhiteBlueBorderObjects1[i].IsPressed(null) ) {
        isConditionTrue_0 = true;
        gdjs.menuCode.GDTransparentButtonWithWhiteBlueBorderObjects1[k] = gdjs.menuCode.GDTransparentButtonWithWhiteBlueBorderObjects1[i];
        ++k;
    }
}
gdjs.menuCode.GDTransparentButtonWithWhiteBlueBorderObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "level 1", false);
}
}

}


};

gdjs.menuCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.menuCode.GDTransparentButtonWithWhiteBlueBorderObjects1.length = 0;
gdjs.menuCode.GDTransparentButtonWithWhiteBlueBorderObjects2.length = 0;
gdjs.menuCode.GDWinter_9595BackgroundObjects1.length = 0;
gdjs.menuCode.GDWinter_9595BackgroundObjects2.length = 0;
gdjs.menuCode.GDPenguinObjects1.length = 0;
gdjs.menuCode.GDPenguinObjects2.length = 0;
gdjs.menuCode.GDBlueberryObjects1.length = 0;
gdjs.menuCode.GDBlueberryObjects2.length = 0;
gdjs.menuCode.GDStrawberryObjects1.length = 0;
gdjs.menuCode.GDStrawberryObjects2.length = 0;
gdjs.menuCode.GDBubObjects1.length = 0;
gdjs.menuCode.GDBubObjects2.length = 0;
gdjs.menuCode.GDCoinsObjects1.length = 0;
gdjs.menuCode.GDCoinsObjects2.length = 0;
gdjs.menuCode.GDLifesObjects1.length = 0;
gdjs.menuCode.GDLifesObjects2.length = 0;
gdjs.menuCode.GDCoinObjects1.length = 0;
gdjs.menuCode.GDCoinObjects2.length = 0;
gdjs.menuCode.GDMagic_9595Charged_9595PelletObjects1.length = 0;
gdjs.menuCode.GDMagic_9595Charged_9595PelletObjects2.length = 0;
gdjs.menuCode.GDBubossObjects1.length = 0;
gdjs.menuCode.GDBubossObjects2.length = 0;
gdjs.menuCode.GDBlocky_9595BubObjects1.length = 0;
gdjs.menuCode.GDBlocky_9595BubObjects2.length = 0;

gdjs.menuCode.eventsList0(runtimeScene);
gdjs.menuCode.GDTransparentButtonWithWhiteBlueBorderObjects1.length = 0;
gdjs.menuCode.GDTransparentButtonWithWhiteBlueBorderObjects2.length = 0;
gdjs.menuCode.GDWinter_9595BackgroundObjects1.length = 0;
gdjs.menuCode.GDWinter_9595BackgroundObjects2.length = 0;
gdjs.menuCode.GDPenguinObjects1.length = 0;
gdjs.menuCode.GDPenguinObjects2.length = 0;
gdjs.menuCode.GDBlueberryObjects1.length = 0;
gdjs.menuCode.GDBlueberryObjects2.length = 0;
gdjs.menuCode.GDStrawberryObjects1.length = 0;
gdjs.menuCode.GDStrawberryObjects2.length = 0;
gdjs.menuCode.GDBubObjects1.length = 0;
gdjs.menuCode.GDBubObjects2.length = 0;
gdjs.menuCode.GDCoinsObjects1.length = 0;
gdjs.menuCode.GDCoinsObjects2.length = 0;
gdjs.menuCode.GDLifesObjects1.length = 0;
gdjs.menuCode.GDLifesObjects2.length = 0;
gdjs.menuCode.GDCoinObjects1.length = 0;
gdjs.menuCode.GDCoinObjects2.length = 0;
gdjs.menuCode.GDMagic_9595Charged_9595PelletObjects1.length = 0;
gdjs.menuCode.GDMagic_9595Charged_9595PelletObjects2.length = 0;
gdjs.menuCode.GDBubossObjects1.length = 0;
gdjs.menuCode.GDBubossObjects2.length = 0;
gdjs.menuCode.GDBlocky_9595BubObjects1.length = 0;
gdjs.menuCode.GDBlocky_9595BubObjects2.length = 0;


return;

}

gdjs['menuCode'] = gdjs.menuCode;
