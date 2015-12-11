//  var PIXI = require('pixiJS/bin/pixi.js');

var renderer = new PIXI.CanvasRenderer(800, 600);

document.body.appendChild(renderer.view);
  
var stage = new PIXI.Container();

PIXI.loader.add('obj1', 'img/obj.png')
  .load(function (loader, resources) {
  
    // 
    // Keep in mind sprite anchored with x at 0 
    // and y at 0 is set to top left. set at 1,1
    // is bottom right
    //
    
    var obj1 = new PIXI.Sprite(resources.obj1.texture);
   
    // Set at center high
    obj1.anchor.x = 0.5;
    obj1.anchor.y = 0.25;

    obj1.position.x = 400;
    obj1.position.y = 150;
    
    obj1.scale.x = 0.2;
    obj1.scale.y = 0.2;
   
    console.log('Current sprite information:\n', obj1);
    console.log('Current stage stuffs:\n', stage);

    stage.addChild(obj1);
    renderer.render(stage)

  }
);

PIXI.loader.add('obj2', 'img/obj.png')
  .load(function (loader, resources) {
   
    var obj2 = new PIXI.Sprite(resources.obj2.texture);
    
    obj2.anchor.x = 0.75;
    obj2.anchor.y = 0.5;

    obj2.position.x = 600;
    obj2.position.y = 300;
    
    obj2.scale.x = 0.2;
    obj2.scale.y = 0.2;

    stage.addChild(obj2);
    renderer.render(stage);

  }
);

PIXI.loader.add('obj3', 'img/obj.png')
  .load(function (loader, resources) {

    var obj3 = new PIXI.Sprite(resources.obj3.texture);
    
    obj3.anchor.x = 0.5;
    obj3.anchor.y = 0.75;

    obj3.position.x = 400;
    obj3.position.y = 450;
    
    obj3.scale.x = 0.2;
    obj3.scale.y = 0.2;
    
    stage.addChild(obj3);
    renderer.render(stage);

  }
);

PIXI.loader.add('obj4', 'img/obj.png')
  .load(function (loader, resources) {

    var obj4 = new PIXI.Sprite(resources.obj4.texture);
    
    obj4.anchor.x = 0.25;
    obj4.anchor.y = 0.5;

    obj4.position.x = 200;
    obj4.position.y = 300;
    
    obj4.scale.x = 0.2;
    obj4.scale.y = 0.2;

    stage.addChild(obj4);
    renderer.render(stage);
  }
);


