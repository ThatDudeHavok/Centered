
var renderer = new PIXI.autoDetectRenderer(800, 600);

document.body.appendChild(renderer.view);

var stage = new PIXI.Container();

var checkSum = 0;

// object containing sprite relations
var relations = {
  "0": 1, 
  "1": 3,
  "2": 4,
  "3": 0,
  "4": 3,
}

function moveFamily(spriteNum, eventData) {
 
  //  
  // function to move sibling sprites 
  //
  
  stage.getChildAt(relations[spriteNum.toString()])

  var holder = stage.getChildAt(relations[spriteNum.toString()]);
  
  console.log(eventData); 

}

for(var i = 0; i < 5; i++) {
  (function spriteSet(){ 
 
    var sprite = new PIXI.Sprite.fromImage('../img/obj.png');
    
    sprite.scale.x = 0.2;
    sprite.scale.y = 0.2;

    sprite.position.x = 50 + (150 * i);
    sprite.position.y = 400;
 
    sprite["num"] = i; 
    sprite["centered"] = false;
    sprite.interactive = true; 
     
    var num = sprite.num;

    sprite.on('mousedown', onDown);

    function onDown(eventData) {
      
      if(!this.centered) {
        this.position.y -= 200;
        moveFamily(num, eventData); 
      } else {
        this.position.y += 200;
        moveFamily(num, eventData); 
      };

      this.centered = !this.centered;
    
    }
 
    stage.addChild(sprite);

  })(i)
};

//console.log('YOLO?', stage.getChildAt(0));


var test = stage.getChildAt(1);

//console.log('This:', test);


// 
// Keep in mind sprite anchored with x at 0 
// and y at 0 is set to top left. set at 1,1
// is bottom right
//

// 
// NOTE FOR LATER!!!!!!
// move all objs to a group. Then possibly use 
// groups to specify specific orbits
//

//  800 by 600

  // 
  // (j,k) as origin, r as radius
  //
  // x(t) = t cos(t) + j
  // y(t) = r sin(t) + k
  //
  
  //if(i === 0) {
  //  sphere.position.set(600, 450);      
  //} else {
  //  sphere.position.set(200, 150); 
  //}

console.log('STAGE DATA:\n', stage);

animate();

function animate() {

  requestAnimationFrame(animate);
  renderer.render(stage);

}

