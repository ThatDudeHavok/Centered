
(function game() {

  var renderer = new PIXI.CanvasRenderer(800, 600);
  
  document.body.appendChild(renderer.view);
  
  var stage = new PIXI.Container();

  console.log('STAGE: ', stage);

})();
