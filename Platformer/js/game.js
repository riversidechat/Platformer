let myCanvas = new Canvas('canvas');
let myCanvas2 = new Canvas('#gameCanvas');
myCanvas.SetCanvasSize(900, 900);
myCanvas2.SetCanvasSize(900, 900);
var gameLoopID = Game.CreateGameLoop(update, 60);

let player = new Player(myCanvas.Center.x, myCanvas.Center.y, 10);
let cam = new Camera(-300, -300);
let platforms = [];
platforms.push(new Platform(100, 500, 700, 600, 1));
platforms.push(new Platform(100, 500, 0, 0, 1));
platforms.push(new Platform(700, 500, 800, 0, 1));

let player2 = new Player(450, -100, 30);
player2.SetKeys('a', 'd', 'w', 's');
let cam2 = new Camera(-300, -300);
let platforms2 = [];
platforms2.push(new Platform(100, 0, 700,  100, 1));
platforms2.push(new Platform(100, 0,   0, -500, 1));
platforms2.push(new Platform(700, 0, 800, -500, 1));
//platforms.push(new Platform(100, 0, 700, -100, 1));

function update() {
    player.Update(platforms, cam, myCanvas);
    player2.Update(platforms, cam2, myCanvas2);
    myCanvas.ResetColor();

    myCanvas.FillScreen();
    player.Draw(cam, myCanvas);
    player2.Draw(cam, myCanvas);
    DrawAllPlatforms(platforms, cam, myCanvas);
    cam.MoveTo_SOFT(player.x, player.y, myCanvas);

    myCanvas2.ResetColor();
    myCanvas2.FillScreen();
    player.Draw(cam2, myCanvas2);
    player2.Draw(cam2, myCanvas2);
    DrawAllPlatforms(platforms, cam2, myCanvas2);
    cam2.MoveTo_SOFT(player2.x, player2.y, myCanvas2);
}