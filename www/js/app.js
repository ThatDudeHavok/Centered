var renderer = new PIXI.autoDetectRenderer(800, 600);

document.body.appendChild(renderer.view);

var stage = new PIXI.Container();

var checkSum = 0;
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

//(function setup(){
  PIXI.loader.add('obj1', 'img/obj.png')
    .load(function (loader, resources) {
      
      var obj1 = new PIXI.Sprite(resources.obj1.texture);
     
      // Set at center high
      obj1.anchor.x = 0.5;
      obj1.anchor.y = 0.25;
  
      obj1.position.set(400,150);       
     
      obj1.scale.x = 0.2;
      obj1.scale.y = 0.2;
      
      obj1.interactive = true;
      obj1["centered"] = false; 
      
      obj1.on('mousedown', onDown);      

      function onDown(eventData){
        if(!obj1.centered) {
          obj1.position.y += 150;
          checkSum++;
        } else {
          obj1.position.y -= 150;
          checkSum--; 
        } 
        obj1.centered = !obj1.centered; 
        console.log('hit obj1, data:', obj1); 
      }
      
      stage.addChild(obj1);
       
    }
  );
  
  PIXI.loader.add('obj2', 'img/obj.png')
    .load(function (loader, resources) {
     
      var obj2 = new PIXI.Sprite(resources.obj2.texture);
      
      obj2.anchor.x = 0.75;
      obj2.anchor.y = 0.5;
      
      obj2.position.set(600, 300);      

      obj2.scale.x = 0.2;
      obj2.scale.y = 0.2;
      
      obj2.interactive = true; 
      obj2["centered"] = false; 
      
      obj2.on('mousedown', onDown);      

      function onDown(eventData){
        if(!obj2.centered) {
          obj2.position.x -= 150;
          checkSum++;
        } else {
          obj2.position.x += 150;
          checkSum--; 
        } 
        obj2.centered = !obj2.centered; 
        console.log('hit obj2, data:', obj2); 
      }
    
      stage.addChild(obj2);
  
    }
  );
  
  PIXI.loader.add('obj3', 'img/obj.png')
    .load(function (loader, resources) {
  
      var obj3 = new PIXI.Sprite(resources.obj3.texture);
      
      obj3.anchor.x = 0.5;
      obj3.anchor.y = 0.75;
  
      obj3.position.set(400, 450); 
      
      obj3.scale.x = 0.2;
      obj3.scale.y = 0.2;
      
      obj3.interactive = true; 
      obj3["centered"] = false; 
      
      obj3.on('mousedown', onDown);      

      function onDown(eventData){
        if(!obj3.centered) {
          obj3.position.y -= 150;
          checkSum++;
        } else {
          obj3.position.y += 150;
          checkSum--; 
        } 
        obj3.centered = !obj3.centered; 
        console.log('hit obj3, data:', obj3); 
      }
     
      stage.addChild(obj3);
  
    }
  );
  
  PIXI.loader.add('obj4', 'img/obj.png')
    .load(function (loader, resources) {
  
      var obj4 = new PIXI.Sprite(resources.obj4.texture);
      
      obj4.anchor.x = 0.25;
      obj4.anchor.y = 0.5;
  
      obj4.position.set(200, 300); 
      
      obj4.scale.x = 0.2;
      obj4.scale.y = 0.2;
      
      obj4.interactive = true; 
      obj4["centered"] = false; 
       
      obj4.on('mousedown', onDown);      

      function onDown(eventData){
        if(!obj4.centered) {
          obj4.position.x += 150;
          checkSum++;
          console.log('true');
        } else {
          obj4.position.x -= 150;
          checkSum--; 
          console.log('false'); 
        } 
        obj4.centered = !obj4.centered;
        console.log('hit obj4, data:', obj4); 
      }

      stage.addChild(obj4);
    }
  );
//})();
console.log('BEFORE RENDER:', stage.children[0]);
console.log('AFTER RENDER:', stage.children[0]);
console.log('STAGE DATA:\n', stage)
console.log('RENDERER DATA:\n', renderer)

//function checkThings(check) {
//  console.log('check things:', check)
//  for(var i = 0; i < 4; i++){
//    console.log('run ' + i +':\n' + check.children[i]);
//  }
//}

function checkCentered(check) {
  if(check == 4) alert('YOU WON!!!!'); 
};

animate();

function animate() {

  requestAnimationFrame(animate);
  renderer.render(stage);
  checkCentered(checkSum);
}

