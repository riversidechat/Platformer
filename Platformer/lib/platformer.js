const Keyboard = {
    left: 37,
    up: 38,
    right: 39,
    down: 40,
    a: 65,
    b: 66,
    c: 67,
    d: 68,
    e: 69,
    f: 70,
    g: 71,
    h: 72,
    i: 73,
    j: 74,
    k: 75,
    l: 76,
    m: 77,
    n: 78,
    o: 79,
    p: 80,
    q: 81,
    r: 82,
    s: 83,
    t: 84,
    u: 85,
    v: 86,
    w: 87,
    x: 88,
    y: 89,
    z: 90,
    zero: 48,
    one: 49,
    two: 50,
    three: 51,
    four: 52,
    five: 53,
    six: 54,
    seven: 55,
    eight: 56,
    nine: 57
}
let timer = 0;
setInterval(Update, 1000 / 60);
class Canvas {
    constructor(id) {
        this.ctx = document.querySelector(id).getContext('2d');
        this.Width = this.ctx.canvas.width;
        this.Height = this.ctx.canvas.height;
        this.Center = {x: this.Width/2, y: this.Height/2};
        this.color = {r:0,g:0,b:0,a:1};
        this.render = {lineWidth: 10,lineCap: 'round',lineJoin: 'round'};
    }
    SetCanvasSize(width, height) {this.ctx.canvas.width = width; this.ctx.canvas.height = height; this.Width = width; this.Height = height;this.Center.x = this.Width/2;this.Center.y = this.Height/2}
    FillScreen(){this.ctx.fillStyle = `rgba(${this.color.r},${this.color.g},${this.color.b},${this.color.a})`;this.ctx.fillRect(0, 0, this.Width, this.Height);}
    SetColor(r, g, b, a){this.color.r = r;this.color.g = g;this.color.b = b;if(a){this.color.a = a;};}
    SetRenderStuff(lineWidth, lineCap, lineJoin){this.render.lineWidth = lineWidth;this.render.lineCap = lineCap;this.render.lineJoin = lineJoin;}
    ResetColor(){this.color.r = 0;this.color.g = 0;this.color.b = 0;this.color.a = 1;}
    DrawLine(x1, y1, x2, y2){this.ctx.strokeStyle = this.GetRGBA();this.ctx.lineCap = this.render.lineCap;this.ctx.lineWidth = this.render.lineWidth;this.ctx.beginPath();this.ctx.moveTo(x1, y1);this.ctx.lineTo(x2, y2);this.ctx.stroke();}
    DrawRect(x1, y1, x2, y2){this.ctx.strokeStyle = this.GetRGBA();this.ctx.lineCap = this.render.lineCap;this.ctx.lineJoin = this.render.lineJoin;this.ctx.lineWidth = this.render.lineWidth;this.ctx.beginPath();this.ctx.moveTo(x1, y1);this.ctx.lineTo(x1, y2);this.ctx.lineTo(x2, y2);this.ctx.lineTo(x2, y1);this.ctx.closePath();this.ctx.stroke();}
    DrawCircle(x, y, radius){this.ctx.strokeStyle = this.GetRGBA();this.ctx.lineCap = this.render.lineCap;this.ctx.lineWidth =1;this.ctx.beginPath();this.ctx.arc(x, y, radius, 0, 2 * Math.PI);this.ctx.closePath();this.ctx.stroke();}
    DrawCircleFill(x, y, radius){this.ctx.strokeStyle = this.GetRGBA();this.ctx.fillStyle = this.GetRGBA();this.ctx.lineCap = this.render.lineCap;this.ctx.lineWidth = 1;this.ctx.beginPath();this.ctx.arc(x, y, radius, 0, 2 * Math.PI);this.ctx.closePath();this.ctx.stroke();this.ctx.fill();}
    GetRGBA(){return `rgba(${this.color.r},${this.color.g},${this.color.b},${this.color.a})`;}
}
let Game = {
    GameLoops: [],
    CreateGameLoop: function(funcName, FPS){setInterval(funcName, 1000 / FPS);this.GameLoops.push({timer: 0});return this.GameLoops.length - 1},
}
let controller = {
    right: false,
    left: false,
    up: false,
    down: false,
    a: false,
    b: false,
    c: false,
    d: false,
    e: false,
    f: false,
    g: false,
    h: false,
    i: false,
    j: false,
    k: false,
    l: false,
    m: false,
    n: false,
    o: false,
    p: false,
    q: false,
    r: false,
    s: false,
    t: false,
    u: false,
    v: false,
    w: false,
    x: false,
    y: false,
    z: false,
    zero: false,
    one: false,
    two: false,
    three: false,
    four: false,
    five: false,
    six: false,
    seven: false,
    eight: false,
    nine: false,
    keypress: function(e) {
        let key_type = (e.type == "keydown")? true : false;
        switch(e.keyCode) {
            case Keyboard.left:
                controller.left = key_type;
            break;
            case Keyboard.up:
                controller.up = key_type;
            break;
            case Keyboard.right:
                controller.right = key_type;
            break;
            case Keyboard.down:
                controller.down = key_type;
            break;
            case Keyboard.a:
                controller.a = key_type;
            break;
            case Keyboard.b:
                controller.b = key_type;
            break;
            case Keyboard.c:
                controller.c = key_type;
            break;
            case Keyboard.d:
                controller.d = key_type;
            break;
            case Keyboard.e:
                controller.e = key_type;
            break;
            case Keyboard.f:
                controller.f = key_type;
            break;
            case Keyboard.g:
                controller.g = key_type;
            break;
            case Keyboard.h:
                controller.h = key_type;
            break;
            case Keyboard.i:
                controller.i= key_type;
            break;
            case Keyboard.j:
                controller.j = key_type;
            break;
            case Keyboard.k:
                controller.k = key_type;
            break;
            case Keyboard.l:
                controller.l = key_type;
            break;
            case Keyboard.m:
                controller.m = key_type;
            break;
            case Keyboard.n:
                controller.n = key_type;
            break;
            case Keyboard.o:
                controller.o = key_type;
            break;
            case Keyboard.p:
                controller.p = key_type;
            break;
            case Keyboard.q:
                controller.q = key_type;
            break;
            case Keyboard.r:
                controller.r = key_type;
            break;
            case Keyboard.s:
                controller.s = key_type;
            break;
            case Keyboard.t:
                controller.t = key_type;
            break;
            case Keyboard.u:
                controller.u = key_type;
            break;
            case Keyboard.v:
                controller.v = key_type;
            break;
            case Keyboard.w:
                controller.w = key_type;
            break;
            case Keyboard.x:
                controller.x = key_type;
            break;
            case Keyboard.y:
                controller.y = key_type;
            break;
            case Keyboard.z:
                controller.z = key_type;
            break;
            case Keyboard.zero:
                controller.zero = key_type;
            break;
            case Keyboard.one:
                controller.one = key_type;
            break;
            case Keyboard.two:
                controller.two = key_type;
            break;
            case Keyboard.three:
                controller.three = key_type;
            break;
            case Keyboard.four:
                controller.four = key_type;
            break;
            case Keyboard.five:
                controller.five = key_type;
            break;
            case Keyboard.six:
                controller.six = key_type;
            break;
            case Keyboard.seven:
                controller.seven = key_type;
            break;
            case Keyboard.eight:
                controller.eight = key_type;
            break;
            case Keyboard.nine:
                controller.nine = key_type;
            break;
        }
    },
    isDown(key) {
        switch(key) {
            case 'left':
                return controller.left
            break;
            case 'up':
                return controller.up
            break;
            case 'right':
                return controller.right
            break;
            case 'down':
                return controller.down
            break;
            case 'a':
                return controller.a
            break;
            case 'b':
                return controller.b
            break;
            case 'c':
                return controller.c
            break;
            case 'd':
                return controller.d
            break;
            case 'e':
                return controller.e
            break;
            case 'f':
                return controller.f
            break;
            case 'g':
                return controller.g
            break;
            case 'h':
                return controller.h
            break;
            case 'i':
                return controller.i
            break;
            case 'j':
                return controller.j
            break;
            case 'k':
                return controller.k
            break;
            case 'l':
                return controller.l
            break;
            case 'm':
                return controller.m
            break;
            case 'n':
                return controller.n
            break;
            case 'o':
                return controller.o
            break;
            case 'p':
                return controller.p
            break;
            case 'q':
                return controller.q
            break;
            case 'r':
                return controller.r
            break;
            case 's':
                return controller.s
            break;
            case 't':
                return controller.t
            break;
            case 'u':
                return controller.u
            break;
            case 'v':
                return controller.v
            break;
            case 'w':
                return controller.w
            break;
            case 'x':
                return controller.x
            break;
            case 'y':
                return controller.y
            break;
            case 'z':
                return controller.z
            break;
            case 'zero':
                return controller.zero
            break;
            case 'one':
                return controller.one
            break;
            case 'two':
                return controller.two
            break;
            case 'three':
                return controller.three
            break;
            case 'four':
                return controller.four
            break;
            case 'five':
                return controller.five
            break;
            case 'six':
                return controller.six
            break;
            case 'seven':
                return controller.seven
            break;
            case 'eight':
                return controller.eight
            break;
            case 'nine':
                return controller.nine
            break;
        }
    }
}

class Player {
    constructor(x, y, size) {
        this.x = x;
        this.y = y;

        this.xv = 0;
        this.yv = 0;

        this.size = size;
        this.lineWidth = 5;

        this.movementSpeed = 1;
        this.friction = 0.9;
        this.gravity = 0.5;
        this.jumpHeight = -15;
        this.doubleJump = false;
        this.doubleJumpTime = 0;

        this.leftKey = 'left';
        this.upKey = 'up';
        this.rightKey = 'right';
        this.downKey = 'down';
    }
    Update(platforms, cam, canvas) {
        if(controller.isDown(this.rightKey)) {
            this.xv += this.movementSpeed;
        }
        if(controller.isDown(this.leftKey)) {
            this.xv -= this.movementSpeed;
        }
        this.xv *= this.friction;
        this.x += this.xv;
        if(this.Collision(platforms, cam, canvas)) {
            this.x -= this.xv;
            this.xv *= -2;
        }
        this.yv += this.gravity;
        this.y += this.yv;
        if(this.Collision(platforms, cam, canvas)) {
            this.y -= this.yv;
            if(controller.isDown(this.upKey)){
                this.doubleJump = true;
                this.doubleJumpTime = timer;
            };
            this.yv = (controller.isDown(this.upKey))? this.jumpHeight : 0;
        }
        if(controller.isDown(this.upKey) && this.doubleJump) {
            if(timer > this.doubleJumpTime + 1) {
                this.doubleJump = false;
                this.yv = this.jumpHeight;
            }
        }
    }
    Draw(cam, canvas) {
        canvas.SetRenderStuff(this.lineWidth, 'round', 'round');
        canvas.SetColor(255, 255, 255);
        canvas.DrawRect(this.x - this.size - cam.x, this.y - this.size - cam.y, this.x + this.size - cam.x, this.y + this.size - cam.y);
    }
    Collision(platforms, cam, canvas) {
        for(var i = 0; i < platforms.length; i++) {
            let plat = platforms[i];
            if(!((plat.x1 - plat.lineWidth/2) - cam.x > canvas.Width)) {
                if(!((plat.y1 - plat.lineWidth/2) - cam.y > canvas.Height)) {
                    if(!((plat.x2 + plat.lineWidth/2) - cam.x < 0)) {
                        if(!((plat.y2 + plat.lineWidth/2) - cam.y < 0)) {
                            
                            if((this.x - (this.size + this.lineWidth/2)) - cam.x < (plat.x2 + plat.lineWidth/2) - cam.x) {
                                if((this.x + (this.size + this.lineWidth/2)) - cam.x > (plat.x1 - plat.lineWidth/2) - cam.x) {
                                    if((this.y - (this.size + this.lineWidth/2)) - cam.y < (plat.y2 + plat.lineWidth/2) - cam.y) {
                                        if((this.y + (this.size + this.lineWidth/2)) - cam.y > (plat.y1 - plat.lineWidth/2) - cam.y) {
                                            return true;
                                        }
                                    }
                                }
                            }

                        }
                    }
                }
            }
        }
    }
    SetKeys(left, right, up, down) {
        this.leftKey  = left;
        this.upKey    = up;
        this.rightKey = right;
        this.downKey  = down;
    }
}
class Camera {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.friction = 1;
    }
    MoveTo_SOFT(x, y, canvas) {
        this.x += ((x - canvas.Center.x) - this.x) / 16;
        this.y += ((y - canvas.Center.y) - this.y) / 16;
    }
    MoveTo_MEDIUM(x, y, canvas) {
        this.x += ((x - canvas.Center.x) - this.x) / 6;
        this.y += ((y - canvas.Center.y) - this.y) / 6;
    }
    MoveTo_HARD(x, y, canvas) {
        this.x += ((x - canvas.Center.x) - this.x) / 3;
        this.y += ((y - canvas.Center.y) - this.y) / 3;
    }
    MoveTo(x, y, canvas) {
        this.x = (x - canvas.Center.x);
        this.y = (y - canvas.Center.y);
    }
    MoveTo_CUSTOM(x, y, canvas) {
        this.x += ((x - canvas.Center.x) - this.x) / this.friction;
        this.y += ((y - canvas.Center.y) - this.y) / this.friction;
    }
    SetFriction(newFriction) {
        this.friction = newFriction;
    }
}
class Platform {
    constructor(x1, y1, x2, y2, type) {
        let values = SortValues(x1, y1, x2, y2);
        this.x1 = values.x1;
        this.y1 = values.y1;
        this.x2 = values.x2;
        this.y2 = values.y2;
        this.type = type;

        this.lineWidth = 10;
    }
    Draw(cam, canvas) {
        canvas.SetColor(50, 50, 50);
        canvas.SetRenderStuff(this.lineWidth, 'round', 'round');
        canvas.DrawRect(this.x1 - cam.x, this.y1 - cam.y, this.x2 - cam.x, this.y2 - cam.y);
    }
}

function SortValues(x1, y1, x2, y2) {
    let returnvValues = {x1,y1,x2,y2};
    if(y1 > y2) {
        if(x1 > x2) {
            returnvValues.x1 = x2;
            returnvValues.y1 = y2;
            returnvValues.x2 = x1;
            returnvValues.y2 = y1;
        }
        else {
            returnvValues.x1 = x1;
            returnvValues.y1 = y2;
            returnvValues.x2 = x2;
            returnvValues.y2 = y1;
        }
    }
    else {
        if(x1 > x2) {
            returnvValues.x1 = x2;
            returnvValues.y1 = y1;
            returnvValues.x2 = x1;
            returnvValues.y2 = y2;
        }
        else {
            returnvValues.x1 = x1;
            returnvValues.y1 = y1;
            returnvValues.x2 = x2;
            returnvValues.y2 = y2;
        }
    }
    return returnvValues;
}
function doc(text) {
    console.log(text);
}
function DrawAllPlatforms(platforms, cam, canvas) {
    for(var i = 0; i < platforms.length; i++) {
        let plat = platforms[i];
            if(!((plat.x1 - plat.lineWidth/2) - cam.x > canvas.Width)) {
                if(!((plat.y1 - plat.lineWidth/2) - cam.y > canvas.Height)) {
                    if(!((plat.x2 + plat.lineWidth/2) - cam.x < 0)) {
                        if(!((plat.y2 + plat.lineWidth/2) - cam.y < 0)) {
                            platforms[i].Draw(cam, canvas);
                        }
                    }
                }
            }
    }
}
function Update() {
    timer += 1 / (1000 / 60);
}
document.addEventListener("keydown", controller.keypress);
document.addEventListener("keyup", controller.keypress);