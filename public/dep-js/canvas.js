var StarBackGround = {
    init : function () {
        this.init_tools();
        this.init_canvas();
    },
    options : {
        bg : "black",
        moveType : "move",
        obj : {
            count : 10,
            maxRadius : 10,
            color : ["white"],
            speedX : 1,
            speedY : 1
        }
    },

    interact : function(){
        window.onmouseover = function(e){
            console.log([e.x, e.y])
        }
    },

    resize : function () {
        window.cn.width = innerWidth;
        window.cn.height = innerHeight;
    },

    init_tools : function(){
        window.doc = document;
        window.getTag = function(sel){
            return doc.querySelector(sel);
        }
        window.randPos = function(key = 1000){
            return Math.floor(Math.random() * key);
        }
    },

    init_canvas : function(_class = "rex_canvas") {
        // Creates the Canvas
        if (doc.querySelector("canvas."+_class)) {
            window.cn = doc.querySelector("canvas."+_class);
        } else {
            window.cn = doc.createElement("canvas");
        }
        window.ctx = cn.getContext("2d");

        // Adding Stylings
        cn.style.position = "fixed";
        cn.style.top = "0px";
        cn.style.left = "0px";
        cn.style.zIndex = "-3";
        cn.style.background = this.options.bg;
        cn.classList.add(_class); 

        // Watches Changes in size
        this.resize();
        window.onresize = this.resize;

        // Attaches the canvas
        doc.body.appendChild(cn);
    },

    init_objects : function(){
        Obj = [];
        for (var index = 0; index < this.options.obj.count; index++) {
            Obj.push(
                new Circle({
                    x : randPos(cn.width - 20),
                    y: randPos(cn.height - 20), 
                    r : randPos(this.options.obj.maxRadius),
                    dx : randPos(this.options.obj.speedX),
                    dy : randPos(this.options.obj.speedY),
                    rad : randPos(cn.height),
                    color :  this.options.obj.color[randPos(this.options.obj.color.length)]
                })
            ) 
    }

        window.Objects = Obj;
    },

    start : function() {
        this.init();
        this.init_objects();
        
        move(this.options.moveType);
    }
}

function Circle (opts = {x : 10, y :10, r: 10, dx :1, dy: 1, color :"white", stroke: false, rad : 50}){
    this.x = opts.x
    this.y = opts.y
    this.r = opts.r
    this.c = opts.color
    this.dx = opts.dx
    this.dy = opts.dy
    this.theta = opts.x
    this.rad = opts.rad

    this.draw = function(){
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI);
        ctx.fillStyle = this.c;
        ctx.fill();
    }

    this.move = function(){
        
        if (this.x + this.r > cn.width || this.x + this.r < this.r){
            this.dx = -this.dx
        }

        if (this.y + this.r > cn.height || this.y + this.r < this.r){
            this.dy = -this.dy
        }
        
        this.x = this.x + this.dx;
        this.y = this.y + this.dy;

        this.draw();
    }

    this.circulate = function () {
        //console.log("circulating")
        this.x = (this.rad * Math.sin(this.theta* (Math.PI/180))) + cn.width/2
        this.y = (this.rad * Math.cos(this.theta* (Math.PI/180))) + cn.height/2
        
        this.theta = this.theta + (this.dx + this.dy)/2 ;

        // if (this.x > cn.width || this.x < 0){
        //     this.x = 0;
        // }

        // if (this.y > cn.height || this.y < 0){
        //     this.y = 0;
        // }

        this.draw();
    }

    this.blizzard = function () {
        //console.log("circulating")
        
        this.x = this.x + this.rad * Math.sin(this.theta* (Math.PI/360))
        this.y = this.y + this.rad * Math.cos(this.theta* (Math.PI/360))
        
        this.theta = this.theta + (this.dy/10000);

        if (this.x > cn.width - this.r || this.x < this.r){
            this.x = this.r + this.rad * Math.sin(this.theta* (Math.PI));
            this.theta = 0
        }

        if (this.y > cn.height - this.r || this.y < this.r){
            this.y = this.r + this.rad * Math.sin(this.theta* (Math.PI));
            this.theta = 0
        }

        this.draw();
    }
}

function move(mov){
    ctx.clearRect(0, 0, innerWidth, innerHeight);
    switch (mov) {
        case "move":
            fn = function (o) {o.move()}
            break;

        case "circulate":
            fn = function (o) {o.circulate()}
            break;

        case "blizzard":
            fn = function (o) {o.blizzard()}
            break;

        default:
            break;
    }
    Objects.forEach(e => {
        fn(e);
    });
    setTimeout(move, 100)
}

// StarBackGround.options.moveType = "circulate";
// StarBackGround.options.bg = "blue";
// StarBackGround.options.obj.count = 10;
// StarBackGround.options.obj.color.push("yellow");

// StarBackGround.start();

// Allias

sb = StarBackGround;


