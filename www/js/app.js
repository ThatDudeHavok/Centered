
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
  "4": 3
}

function moveFamily(target, event) {

  var move = stage.getChildAt(target)
  
  console.log('inside of MF func:', move); 

  move.moveThing();

  move.centered = !move.centered;

}

for(var i = 0; i < 5; i++) {
  (function spriteSet() { 
    

    var sprite = new PIXI.Sprite.fromImage('../img/obj.png');
    
    sprite.scale.x = 0.2;
    sprite.scale.y = 0.2;

    sprite.position.x = 50 + (150 * i);
    sprite.position.y = 400;
    
    sprite.num = i;
    sprite.relation = relations[i.toString()];  
    
    sprite.centered = false;
    sprite.interactive = true; 
//    sprite.worldVisable = true;

    sprite.moveThing = function() {
      if(!this.centered) {
        this.position.y -= 200;
      } else {
        this.position.y += 200;
      };
    }
    
    sprite
      .on('mousedown', onDown);

    function onDown(eventData) {
      var secondTarget = eventData;
      secondTarget.target.num = relations[this.num.toString()];
        
      this.moveThing();

      moveFamily(this.relation, eventData);

      this.centered = !this.centered;
      console.log('running:', this.num);
      console.log(stage); 
    }
    stage.addChild(sprite);

  })(i)
};

var test = stage.getChildAt(1);



console.log('STAGE DATA:\n', stage);

animate();

function animate() {

  requestAnimationFrame(animate);
  renderer.render(stage);

}

