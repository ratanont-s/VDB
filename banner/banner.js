(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"banner_atlas_", frames: [[1276,1401,100,104],[0,0,1920,1080],[1549,1082,107,106],[1276,1507,72,98],[1378,1401,83,118],[1276,1193,355,74],[1276,1082,271,109],[1276,1269,107,130],[0,1082,1274,532],[1385,1269,41,40]]}
];


// symbols:



(lib.bear1 = function() {
	this.spriteSheet = ss["banner_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.bg = function() {
	this.spriteSheet = ss["banner_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap11 = function() {
	this.spriteSheet = ss["banner_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap12 = function() {
	this.spriteSheet = ss["banner_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap13 = function() {
	this.spriteSheet = ss["banner_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap14 = function() {
	this.spriteSheet = ss["banner_atlas_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap15 = function() {
	this.spriteSheet = ss["banner_atlas_"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap9 = function() {
	this.spriteSheet = ss["banner_atlas_"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.home = function() {
	this.spriteSheet = ss["banner_atlas_"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.star = function() {
	this.spriteSheet = ss["banner_atlas_"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Bitmap12();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol3, new cjs.Rectangle(0,0,72,98), null);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Bitmap9();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(0,0,107,130), null);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.bear1();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(0,0,100,104), null);


(lib.star5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.star();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.star5, new cjs.Rectangle(0,0,41,40), null);


(lib.star4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.star();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.star4, new cjs.Rectangle(0,0,41,40), null);


(lib.star3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.star();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.star3, new cjs.Rectangle(0,0,41,40), null);


(lib.star2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.star();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.star2, new cjs.Rectangle(0,0,41,40), null);


(lib.star1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.star();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.star1, new cjs.Rectangle(0,0,41,40), null);


(lib.bear22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Bitmap11();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.bear22, new cjs.Rectangle(0,0,107,106), null);


(lib.bear3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Symbol3();
	this.instance.parent = this;
	this.instance.setTransform(68,49,1,1,0,0,0,36,49);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({x:64.6,alpha:0.014},0).wait(1).to({x:61.3,alpha:0.028},0).wait(1).to({x:58,alpha:0.042},0).wait(1).to({x:54.7,alpha:0.056},0).wait(1).to({x:51.4,alpha:0.07},0).wait(1).to({x:48.2,alpha:0.085},0).wait(1).to({x:45,alpha:0.099},0).wait(1).to({x:41.8,alpha:0.113},0).wait(1).to({x:38.6,alpha:0.127},0).wait(1).to({x:35.5,alpha:0.141},0).wait(1).to({x:32.4,alpha:0.155},0).wait(1).to({x:29.3,alpha:0.169},0).wait(1).to({x:26.2,alpha:0.183},0).wait(1).to({x:23.1,alpha:0.197},0).wait(1).to({x:20.1,alpha:0.211},0).wait(1).to({x:17.1,alpha:0.225},0).wait(1).to({x:14.1,alpha:0.239},0).wait(1).to({x:11.1,alpha:0.254},0).wait(1).to({x:8.2,alpha:0.268},0).wait(1).to({x:5.3,alpha:0.282},0).wait(1).to({x:2.4,alpha:0.296},0).wait(1).to({x:-0.5,alpha:0.31},0).wait(1).to({x:-3.4,alpha:0.324},0).wait(1).to({x:-6.2,alpha:0.338},0).wait(1).to({x:-9,alpha:0.352},0).wait(1).to({x:-11.7,alpha:0.366},0).wait(1).to({alpha:0.38},0).wait(1).to({alpha:0.394},0).wait(1).to({alpha:0.408},0).wait(1).to({alpha:0.423},0).wait(1).to({alpha:0.437},0).wait(1).to({alpha:0.451},0).wait(1).to({alpha:0.465},0).wait(1).to({alpha:0.479},0).wait(1).to({alpha:0.493},0).wait(1).to({alpha:0.507},0).wait(1).to({alpha:0.521},0).wait(1).to({alpha:0.535},0).wait(1).to({alpha:0.549},0).wait(1).to({alpha:0.563},0).wait(1).to({alpha:0.577},0).wait(1).to({alpha:0.592},0).wait(1).to({alpha:0.606},0).wait(1).to({alpha:0.62},0).wait(1).to({alpha:0.634},0).wait(1).to({alpha:0.648},0).wait(1).to({alpha:0.662},0).wait(1).to({alpha:0.676},0).wait(1).to({alpha:0.69},0).wait(1).to({alpha:0.704},0).wait(1).to({alpha:0.718},0).wait(1).to({alpha:0.732},0).wait(1).to({alpha:0.746},0).wait(1).to({alpha:0.761},0).wait(1).to({alpha:0.775},0).wait(1).to({alpha:0.789},0).wait(1).to({alpha:0.803},0).wait(1).to({alpha:0.817},0).wait(1).to({alpha:0.831},0).wait(1).to({alpha:0.845},0).wait(1).to({alpha:0.859},0).wait(1).to({alpha:0.873},0).wait(1).to({alpha:0.887},0).wait(1).to({alpha:0.901},0).wait(1).to({alpha:0.915},0).wait(1).to({alpha:0.93},0).wait(1).to({alpha:0.944},0).wait(1).to({alpha:0.958},0).wait(1).to({alpha:0.972},0).wait(1).to({alpha:0.986},0).wait(1).to({alpha:1},0).wait(217));

	// Layer_2
	this.instance_1 = new lib.Bitmap13();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-59,-25);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(288));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-59,-25,163,123);


(lib.bear21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Symbol2();
	this.instance.parent = this;
	this.instance.setTransform(53.5,165,1,1,0,0,0,53.5,65);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({y:146.5,alpha:0.067},0).wait(1).to({y:128.2,alpha:0.133},0).wait(1).to({y:110,alpha:0.2},0).wait(1).to({y:91.9,alpha:0.267},0).wait(1).to({y:74,alpha:0.333},0).wait(1).to({y:72.4,alpha:0.4},0).wait(1).to({alpha:0.467},0).wait(1).to({alpha:0.533},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.733},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.867},0).wait(1).to({alpha:0.933},0).wait(1).to({alpha:1},0).wait(274));

	// Layer_3
	this.instance_1 = new lib.bear22();
	this.instance_1.parent = this;
	this.instance_1.setTransform(147.5,153,1,1,0,0,0,53.5,53);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(15).to({_off:false},0).wait(1).to({x:146.8,y:139.3,alpha:0.067},0).wait(1).to({x:146,y:125.8,alpha:0.133},0).wait(1).to({x:145.3,y:112.3,alpha:0.2},0).wait(1).to({x:144.6,y:98.9,alpha:0.267},0).wait(1).to({x:143.9,y:85.7,alpha:0.333},0).wait(1).to({x:143.8,y:84.4,alpha:0.4},0).wait(1).to({alpha:0.467},0).wait(1).to({alpha:0.533},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.733},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.867},0).wait(1).to({alpha:0.933},0).wait(1).to({alpha:1},0).wait(259));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,100,107,130);


(lib.baer1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Symbol1();
	this.instance.parent = this;
	this.instance.setTransform(0,0,1,1,0,0,0,50,52);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({rotation:5},0).wait(1).to({rotation:10,y:0.1},0).wait(1).to({rotation:15,x:0.1},0).wait(1).to({rotation:20,y:0},0).wait(1).to({rotation:25,x:0,y:0.1},0).wait(1).to({rotation:30},0).wait(1).to({rotation:24,x:0.1},0).wait(1).to({rotation:18,y:0},0).wait(1).to({rotation:12},0).wait(1).to({rotation:6,y:0.1},0).wait(1).to({rotation:0,x:0,y:0},0).wait(1).to({rotation:-5,x:0.1,y:0.1},0).wait(1).to({rotation:-10,y:0},0).wait(1).to({rotation:-15,x:0,y:0.1},0).wait(1).to({rotation:-20,x:0.1,y:0},0).wait(1).to({rotation:-25,y:0.1},0).wait(1).to({rotation:-30,x:0},0).wait(1).to({rotation:-25,x:0.1},0).wait(1).to({rotation:-20,y:0},0).wait(1).to({rotation:-15,x:0,y:0.1},0).wait(1).to({rotation:-10,x:0.1,y:0},0).wait(1).to({rotation:-5,y:0.1},0).wait(1).to({rotation:0,x:0,y:0},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-50,-52,100,104);


// stage content:
(lib.Untitled1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// bear1
	this.instance = new lib.baer1();
	this.instance.parent = this;
	this.instance.setTransform(408.6,885.7,1,1,0,0,0,0.2,0.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:0,regY:0,x:415.7,y:885.4},0).wait(1).to({x:423.1},0).wait(1).to({x:430.4},0).wait(1).to({x:437.8},0).wait(1).to({x:445.2},0).wait(1).to({x:452.5},0).wait(1).to({x:459.9},0).wait(1).to({x:467.3},0).wait(1).to({x:474.6},0).wait(1).to({x:482},0).wait(1).to({x:489.4},0).wait(1).to({x:496.7},0).wait(1).to({x:504.1},0).wait(1).to({x:511.5},0).wait(1).to({x:518.8},0).wait(1).to({x:526.2},0).wait(1).to({x:533.6},0).wait(1).to({x:540.9},0).wait(1).to({x:548.3},0).wait(1).to({x:555.7},0).wait(1).to({x:563},0).wait(1).to({x:570.4},0).wait(1).to({x:577.8},0).wait(1).to({x:585.1},0).wait(1).to({x:592.5},0).wait(1).to({x:599.9},0).wait(1).to({x:607.2},0).wait(1).to({x:614.6},0).wait(1).to({x:622},0).wait(1).to({x:629.3},0).wait(1).to({x:636.7},0).wait(1).to({x:644.1},0).wait(1).to({x:651.4},0).wait(1).to({x:658.8},0).wait(1).to({x:666.2},0).wait(1).to({x:673.5},0).wait(1).to({x:680.9},0).wait(1).to({x:688.2},0).wait(1).to({x:695.6},0).wait(1).to({x:703},0).wait(1).to({x:710.3},0).wait(1).to({x:717.7},0).wait(1).to({x:725.1},0).wait(1).to({x:732.4},0).wait(1).to({x:739.8},0).wait(1).to({x:747.2},0).wait(1).to({x:754.5},0).wait(1).to({x:761.9},0).wait(1).to({x:769.3},0).wait(1).to({x:776.6},0).wait(1).to({x:784},0).wait(1).to({x:791.4},0).wait(1).to({x:798.7},0).wait(1).to({x:806.1},0).wait(1).to({x:813.5},0).wait(1).to({x:820.8},0).wait(1).to({x:828.2},0).wait(1).to({x:835.6},0).wait(1).to({x:842.9},0).wait(1).to({x:850.3},0).wait(1).to({x:857.7},0).wait(1).to({x:865},0).wait(1).to({x:872.4},0).wait(1).to({x:879.8},0).wait(1).to({x:887.1},0).wait(1).to({x:894.5},0).wait(1).to({x:901.9},0).wait(1).to({x:909.2},0).wait(1).to({x:916.6},0).wait(1).to({x:924},0).wait(1).to({x:931.3},0).wait(1).to({x:938.7},0).wait(1).to({x:946},0).wait(1).to({x:953.4},0).wait(1).to({x:960.8},0).wait(1).to({x:968.1},0).wait(1).to({x:975.5},0).wait(1).to({x:982.9},0).wait(1).to({x:990.2},0).wait(1).to({x:997.6},0).wait(1).to({x:1005},0).wait(1).to({x:1012.3},0).wait(1).to({x:1019.7},0).wait(1).to({x:1027.1},0).wait(1).to({x:1034.4},0).wait(1).to({x:1041.8},0).wait(1).to({x:1049.2},0).wait(1).to({x:1056.5},0).wait(1).to({x:1063.9},0).wait(1).to({x:1071.3},0).wait(1).to({x:1078.6},0).wait(1).to({x:1086},0).wait(1).to({x:1093.4},0).wait(1).to({x:1100.7},0).wait(1).to({x:1108.1},0).wait(1).to({x:1115.5},0).wait(1).to({x:1122.8},0).wait(1).to({x:1130.2},0).wait(1).to({x:1137.6},0).wait(1).to({x:1144.9},0).wait(1).to({x:1152.3},0).wait(1).to({x:1159.7},0).wait(1).to({x:1167},0).wait(1).to({x:1174.4},0).wait(1).to({x:1181.8},0).wait(1).to({x:1189.1},0).wait(1).to({x:1196.5},0).wait(1).to({x:1203.8},0).wait(1).to({x:1211.2},0).wait(1).to({x:1218.6},0).wait(1).to({x:1225.9},0).wait(1).to({x:1233.3},0).wait(1).to({x:1240.7},0).wait(1).to({x:1248},0).wait(1).to({x:1255.4},0).wait(1).to({x:1262.8},0).wait(1).to({x:1270.1},0).wait(1).to({x:1277.5},0).wait(1).to({x:1284.9},0).wait(1).to({x:1292.2},0).wait(1).to({x:1299.6},0).wait(1).to({x:1307},0).wait(1).to({x:1314.3},0).wait(1).to({x:1321.7},0).wait(1).to({x:1329.1},0).wait(1).to({x:1336.4},0).wait(1).to({x:1343.8},0).wait(1).to({x:1351.2},0).wait(1).to({x:1358.5},0).wait(1).to({x:1365.9},0).wait(1).to({x:1373.3},0).wait(1).to({x:1380.6},0).wait(1).to({x:1388},0).wait(1).to({x:1395.4},0).wait(1).to({x:1402.7},0).wait(1).to({x:1410.1},0).wait(1).to({x:1417.5},0).wait(1).to({x:1424.8},0).wait(1).to({x:1432.2},0).wait(1).to({x:1439.6},0).wait(1).to({x:1446.9},0).wait(1).to({x:1454.3},0).wait(1).to({x:1461.7},0).wait(1).to({x:1469},0).wait(1).to({x:1476.4},0).wait(1).to({x:1483.7},0).wait(1).to({x:1491.1},0).wait(1).to({x:1498.5},0).wait(1).to({x:1505.8},0).wait(1).to({x:1513.2},0).wait(1).to({x:1520.6},0).wait(1).to({x:1527.9},0).wait(1).to({x:1535.3},0).wait(1).to({x:1542.7},0).wait(1).to({x:1550},0).wait(1).to({x:1557.4},0).wait(1).to({x:1564.8},0).wait(1).to({x:1572.1},0).wait(1).to({x:1579.5},0).wait(1).to({x:1586.9},0).wait(1).to({x:1594.2},0).wait(1).to({x:1601.6},0).wait(1).to({x:1609},0).wait(1).to({x:1616.3},0).wait(1).to({x:1623.7},0).wait(1).to({x:1631.1},0).wait(1).to({x:1638.4},0).wait(1).to({x:1645.8},0).wait(1).to({x:1653.2},0).wait(1).to({x:1660.5},0).wait(1).to({x:1667.9},0).wait(1).to({x:1675.3},0).wait(1).to({x:1682.6},0).wait(1).to({x:1690},0).wait(1).to({x:1697.4},0).wait(1).to({x:1704.7},0).wait(1).to({x:1712.1},0).wait(1).to({x:1719.5},0).wait(1).to({x:1726.8},0).wait(1).to({x:1734.2},0).wait(1).to({x:1741.5},0).wait(1).to({x:1748.9},0).wait(1).to({x:1756.3},0).wait(1).to({x:1763.6},0).wait(1).to({x:1771},0).wait(1).to({x:1778.4},0).wait(1).to({x:1785.7},0).wait(1).to({x:1793.1},0).wait(1).to({x:1800.5},0).wait(1).to({x:1807.8},0).wait(1).to({x:1815.2},0).wait(1).to({x:1822.6},0).wait(1).to({x:1829.9},0).wait(1).to({x:1837.3},0).wait(1).to({x:1844.7},0).wait(1).to({x:1852},0).wait(1).to({x:1859.4},0).wait(1).to({x:1866.8},0).wait(1).to({x:1874.1},0).wait(1).to({x:1881.5},0).wait(1).to({x:1888.9},0).wait(1).to({x:1896.2},0).wait(1).to({x:1903.6},0).wait(1).to({x:1911},0).wait(1).to({x:1918.3},0).wait(1).to({x:1925.7},0).wait(1).to({x:1933.1},0).wait(1).to({x:1940.4},0).wait(1).to({x:1947.8},0).wait(1).to({x:1955.2},0).wait(1).to({x:1962.5},0).wait(1).to({x:1969.9},0).wait(1).to({x:1977.3},0).wait(1).to({x:1984.6},0).wait(1).to({x:1992},0).wait(1).to({x:1999.3},0).wait(1).to({x:-83.9},0).wait(1).to({x:-77.1},0).wait(1).to({x:-70.3},0).wait(1).to({x:-63.6},0).wait(1).to({x:-56.8},0).wait(1).to({x:-50.1},0).wait(1).to({x:-43.3},0).wait(1).to({x:-36.5},0).wait(1).to({x:-29.8},0).wait(1).to({x:-23},0).wait(1).to({x:-16.3},0).wait(1).to({x:-9.5},0).wait(1).to({x:-2.7},0).wait(1).to({x:4},0).wait(1).to({x:10.8},0).wait(1).to({x:17.5},0).wait(1).to({x:24.3},0).wait(1).to({x:31},0).wait(1).to({x:37.8},0).wait(1).to({x:44.6},0).wait(1).to({x:51.3},0).wait(1).to({x:58.1},0).wait(1).to({x:64.8},0).wait(1).to({x:71.6},0).wait(1).to({x:78.4},0).wait(1).to({x:85.1},0).wait(1).to({x:91.9},0).wait(1).to({x:98.6},0).wait(1).to({x:105.4},0).wait(1).to({x:112.1},0).wait(1).to({x:118.9},0).wait(1).to({x:125.7},0).wait(1).to({x:132.4},0).wait(1).to({x:139.2},0).wait(1).to({x:145.9},0).wait(1).to({x:152.7},0).wait(1).to({x:159.5},0).wait(1).to({x:166.2},0).wait(1).to({x:173},0).wait(1).to({x:179.7},0).wait(1).to({x:186.5},0).wait(1).to({x:193.3},0).wait(1).to({x:200},0).wait(1).to({x:206.8},0).wait(1).to({x:213.5},0).wait(1).to({x:220.3},0).wait(1).to({x:227},0).wait(1).to({x:233.8},0).wait(1).to({x:240.6},0).wait(1).to({x:247.3},0).wait(1).to({x:254.1},0).wait(1).to({x:260.8},0).wait(1).to({x:267.6},0).wait(1).to({x:274.3},0).wait(1).to({x:281.1},0).wait(1).to({x:287.9},0).wait(1).to({x:294.6},0).wait(1).to({x:301.4},0).wait(1).to({x:308.1},0).wait(1).to({x:314.9},0).wait(1).to({x:321.7},0).wait(1).to({x:328.4},0).wait(1).to({x:335.2},0).wait(1).to({x:341.9},0).wait(1).to({x:348.7},0).wait(1).to({x:355.5},0).wait(1).to({x:362.2},0).wait(1).to({x:369},0).wait(1).to({x:375.7},0).wait(1).to({x:382.5},0).wait(1).to({x:389.2},0).wait(1));

	// Layer_19
	this.instance_1 = new lib.Bitmap14();
	this.instance_1.parent = this;
	this.instance_1.setTransform(1175,850);

	this.instance_2 = new lib.Bitmap15();
	this.instance_2.parent = this;
	this.instance_2.setTransform(1233,899);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1}]}).wait(288));

	// bear2
	this.instance_3 = new lib.bear21();
	this.instance_3.parent = this;
	this.instance_3.setTransform(1307.5,851,1,1,0,0,0,53.5,65);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(23).to({_off:false},0).wait(265));

	// star1
	this.instance_4 = new lib.star1();
	this.instance_4.parent = this;
	this.instance_4.setTransform(1003.9,327.5,0.974,0.974,0,0,0,20.6,20);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1).to({regX:20.5,rotation:1.3,x:1004,y:327.6},0).wait(1).to({scaleX:0.98,scaleY:0.98,rotation:2.5,x:1004.4},0).wait(1).to({rotation:3.8,x:1004.7,y:327.8},0).wait(1).to({rotation:5,x:1005,y:327.9},0).wait(1).to({scaleX:0.98,scaleY:0.98,rotation:6.3,x:1005.3,y:328},0).wait(1).to({rotation:7.5,x:1005.6},0).wait(1).to({rotation:8.8,x:1005.9,y:328.2},0).wait(1).to({rotation:10,x:1006.2,y:328.3},0).wait(1).to({scaleX:0.98,scaleY:0.98,rotation:11.3,x:1006.5},0).wait(1).to({rotation:12.5,x:1006.8,y:328.4},0).wait(1).to({rotation:13.8,x:1007.1,y:328.5},0).wait(1).to({scaleX:0.98,scaleY:0.98,rotation:15,x:1007.4,y:328.7},0).wait(1).to({rotation:16.3,x:1007.7},0).wait(1).to({rotation:17.5,x:1008,y:328.8},0).wait(1).to({rotation:18.8,x:1008.3,y:328.9},0).wait(1).to({scaleX:0.98,scaleY:0.98,rotation:20,x:1008.6,y:329},0).wait(1).to({rotation:21.3,x:1009,y:329.1},0).wait(1).to({rotation:22.5,x:1009.3,y:329.2},0).wait(1).to({rotation:23.8,x:1009.6,y:329.3},0).wait(1).to({scaleX:0.98,scaleY:0.98,rotation:25,x:1009.9,y:329.4},0).wait(1).to({rotation:26.3,x:1010.2,y:329.5},0).wait(1).to({rotation:27.5,x:1010.5,y:329.6},0).wait(1).to({scaleX:0.98,scaleY:0.98,rotation:28.8,x:1010.8,y:329.7},0).wait(1).to({rotation:30,x:1011.1,y:329.8},0).wait(1).to({rotation:31.3,x:1011.4,y:329.9},0).wait(1).to({rotation:32.5,x:1011.7,y:330},0).wait(1).to({scaleX:0.98,scaleY:0.98,rotation:33.8,x:1012,y:330.1},0).wait(1).to({rotation:35,x:1012.3,y:330.2},0).wait(1).to({rotation:36.3,x:1012.7,y:330.3},0).wait(1).to({scaleX:0.98,scaleY:0.98,rotation:37.5,x:1013,y:330.4},0).wait(1).to({rotation:38.8,x:1013.2,y:330.5},0).wait(1).to({rotation:40,x:1013.5},0).wait(1).to({rotation:41.3,x:1013.8,y:330.7},0).wait(1).to({scaleX:0.98,scaleY:0.98,rotation:42.5,x:1014.1,y:330.8},0).wait(1).to({rotation:43.8,x:1014.5},0).wait(1).to({rotation:45,x:1014.7,y:331},0).wait(1).to({scaleX:0.99,scaleY:0.99,rotation:46.3,x:1015,y:331.1},0).wait(1).to({rotation:47.5,x:1015.4,y:331.2},0).wait(1).to({rotation:48.8,x:1015.7,y:331.3},0).wait(1).to({rotation:50,x:1016},0).wait(1).to({scaleX:0.99,scaleY:0.99,rotation:51.3,x:1016.3,y:331.4},0).wait(1).to({rotation:52.5,x:1016.6,y:331.5},0).wait(1).to({rotation:53.8,x:1016.9,y:331.6},0).wait(1).to({scaleX:0.99,scaleY:0.99,rotation:55,x:1017.2,y:331.7},0).wait(1).to({rotation:56.3,x:1017.6,y:331.8},0).wait(1).to({rotation:57.5,x:1017.8,y:331.9},0).wait(1).to({rotation:58.8,x:1018.1,y:332},0).wait(1).to({scaleX:0.99,scaleY:0.99,rotation:60,x:1018.4,y:332.1},0).wait(1).to({rotation:61.3,x:1018.7,y:332.2},0).wait(1).to({rotation:62.5,x:1019,y:332.3},0).wait(1).to({scaleX:0.99,scaleY:0.99,rotation:63.8,x:1019.3,y:332.4},0).wait(1).to({rotation:65,x:1019.6,y:332.5},0).wait(1).to({rotation:66.3,x:1020,y:332.6},0).wait(1).to({rotation:67.5,x:1020.3,y:332.7},0).wait(1).to({scaleX:0.99,scaleY:0.99,rotation:68.8,x:1020.6,y:332.8},0).wait(1).to({rotation:70,x:1020.9,y:332.9},0).wait(1).to({rotation:71.3,x:1021.2,y:333},0).wait(1).to({scaleX:0.99,scaleY:0.99,rotation:72.6,x:1021.5,y:333.1},0).wait(1).to({rotation:73.8,x:1021.8,y:333.2},0).wait(1).to({rotation:75.1,x:1022.1,y:333.3},0).wait(1).to({rotation:76.3,x:1022.4,y:333.4},0).wait(1).to({scaleX:0.99,scaleY:0.99,rotation:77.6,x:1022.8,y:333.5},0).wait(1).to({rotation:78.8,x:1023,y:333.6},0).wait(1).to({rotation:80.1,x:1023.3,y:333.7},0).wait(1).to({scaleX:0.99,scaleY:0.99,rotation:81.3,x:1023.7,y:333.8},0).wait(1).to({rotation:82.6,x:1024,y:333.9},0).wait(1).to({rotation:83.8,x:1024.3,y:334},0).wait(1).to({rotation:85.1,x:1024.6,y:334.1},0).wait(1).to({scaleX:0.99,scaleY:0.99,rotation:86.3,x:1024.8,y:334.2},0).wait(1).to({rotation:87.6,x:1025.2,y:334.3},0).wait(1).to({rotation:88.8,x:1025.4,y:334.4},0).wait(1).to({scaleX:1,scaleY:1,rotation:90.1,x:1025.8,y:334.5},0).wait(1).to({rotation:91.3,x:1026.1,y:334.6},0).wait(1).to({rotation:92.6,x:1026.4,y:334.7},0).wait(1).to({rotation:93.8,x:1026.7,y:334.8},0).wait(1).to({scaleX:1,scaleY:1,rotation:95.1,x:1027,y:334.9},0).wait(1).to({rotation:96.3,x:1027.3,y:335},0).wait(1).to({rotation:97.6,x:1027.6,y:335.1},0).wait(1).to({scaleX:1,scaleY:1,rotation:98.8,x:1027.9,y:335.2},0).wait(1).to({rotation:100.1,x:1028.2},0).wait(1).to({rotation:101.3,x:1028.6,y:335.4},0).wait(1).to({rotation:102.6,x:1028.9},0).wait(1).to({scaleX:1,scaleY:1,rotation:103.8,x:1029.2,y:335.6},0).wait(1).to({rotation:105.1,x:1029.5},0).wait(1).to({rotation:106.3,x:1029.8,y:335.8},0).wait(1).to({scaleX:1,scaleY:1,rotation:107.6,x:1030.1},0).wait(1).to({rotation:108.8,x:1030.4,y:336},0).wait(1).to({rotation:110.1,x:1030.7,y:336.1},0).wait(1).to({rotation:111.3,x:1031,y:336.2},0).wait(1).to({rotation:112.6,y:336.1},0).wait(1).to({rotation:113.8,y:336.2},0).wait(1).to({rotation:115.1},0).wait(1).to({rotation:116.3,y:336.1},0).wait(1).to({rotation:117.6},0).wait(1).to({rotation:118.8},0).wait(1).to({rotation:120.1,y:336.2},0).wait(1).to({rotation:121.3,y:336.1},0).wait(1).to({rotation:122.6},0).wait(1).to({rotation:123.8},0).wait(1).to({rotation:125.1},0).wait(1).to({rotation:126.3},0).wait(1).to({rotation:127.6,y:336.2},0).wait(1).to({rotation:128.8,y:336.1},0).wait(1).to({rotation:130.1,y:336.2},0).wait(1).to({rotation:131.3},0).wait(1).to({rotation:132.6,x:1031.1},0).wait(1).to({rotation:133.8,x:1031},0).wait(1).to({rotation:135.1,x:1031.1},0).wait(1).to({rotation:136.3},0).wait(1).to({rotation:137.6,x:1031},0).wait(1).to({rotation:138.8},0).wait(1).to({rotation:140.1,x:1031.1},0).wait(1).to({rotation:141.3,x:1031},0).wait(1).to({rotation:142.6,x:1031.1},0).wait(1).to({rotation:143.9,x:1031},0).wait(1).to({rotation:145.1,y:336.1},0).wait(1).to({rotation:146.4,x:1031.1,y:336.2},0).wait(1).to({rotation:147.6},0).wait(1).to({rotation:148.9,x:1031},0).wait(1).to({rotation:150.1,x:1031.1,y:336.1},0).wait(1).to({rotation:151.4,x:1031,y:336.2},0).wait(1).to({rotation:152.6},0).wait(1).to({rotation:153.9,x:1031.1},0).wait(1).to({rotation:155.1,y:336.1},0).wait(1).to({rotation:156.4,y:336.2},0).wait(1).to({rotation:157.6},0).wait(1).to({rotation:158.9},0).wait(1).to({rotation:160.1},0).wait(1).to({rotation:161.4},0).wait(1).to({rotation:162.6},0).wait(1).to({rotation:163.9,x:1031},0).wait(1).to({rotation:165.1},0).wait(1).to({rotation:166.4,x:1031.1,y:336.3},0).wait(1).to({rotation:167.6,y:336.2},0).wait(1).to({rotation:168.9},0).wait(1).to({rotation:170.1,x:1031},0).wait(1).to({rotation:171.4,x:1031.1},0).wait(1).to({rotation:172.6,y:336.3},0).wait(1).to({rotation:173.9},0).wait(1).to({rotation:175.1,y:336.2},0).wait(1).to({rotation:176.4},0).wait(1).to({rotation:177.6},0).wait(1).to({rotation:178.9,x:1031},0).wait(1).to({rotation:180.1,x:1031.1},0).wait(1).to({rotation:181.4},0).wait(1).to({rotation:182.6},0).wait(1).to({rotation:183.9},0).wait(1).to({rotation:185.1},0).wait(1).to({rotation:186.4},0).wait(1).to({rotation:187.6,y:336.3},0).wait(1).to({rotation:188.9},0).wait(1).to({rotation:190.1,y:336.2},0).wait(1).to({rotation:191.4},0).wait(1).to({rotation:192.6,x:1031},0).wait(1).to({rotation:193.9,x:1031.1,y:336.3},0).wait(1).to({rotation:195.1,x:1031},0).wait(1).to({rotation:196.4,x:1031.1,y:336.2},0).wait(1).to({rotation:197.6,y:336.3},0).wait(1).to({rotation:198.9,x:1031},0).wait(1).to({rotation:200.1,x:1031.1},0).wait(1).to({rotation:201.4,x:1031},0).wait(1).to({rotation:202.6,x:1031.1},0).wait(1).to({rotation:203.9,x:1031},0).wait(1).to({rotation:205.1,x:1031.1},0).wait(1).to({rotation:206.4},0).wait(1).to({rotation:207.6,x:1031},0).wait(1).to({rotation:208.9},0).wait(1).to({rotation:210.1,x:1031.1},0).wait(1).to({rotation:211.4,x:1031},0).wait(1).to({rotation:212.6,x:1031.1},0).wait(1).to({rotation:213.9},0).wait(1).to({rotation:215.1,x:1031},0).wait(1).to({rotation:216.4},0).wait(1).to({rotation:217.7,x:1031.1},0).wait(1).to({rotation:218.9,x:1031},0).wait(1).to({rotation:220.2,x:1031.1},0).wait(1).to({rotation:221.4,x:1031},0).wait(1).to({rotation:222.7,x:1031.1},0).wait(1).to({rotation:223.9,x:1031},0).wait(1).to({rotation:225.2},0).wait(1).to({rotation:226.4},0).wait(1).to({rotation:227.7},0).wait(1).to({rotation:228.9},0).wait(1).to({rotation:230.2,x:1031.1},0).wait(1).to({rotation:231.4,x:1031},0).wait(1).to({rotation:232.7},0).wait(1).to({rotation:233.9},0).wait(1).to({rotation:235.2},0).wait(1).to({rotation:236.4},0).wait(1).to({rotation:237.7},0).wait(1).to({rotation:238.9},0).wait(1).to({rotation:240.2},0).wait(1).to({rotation:241.4},0).wait(1).to({rotation:242.7},0).wait(1).to({rotation:243.9},0).wait(1).to({rotation:245.2},0).wait(1).to({rotation:246.4},0).wait(1).to({rotation:247.7},0).wait(1).to({rotation:248.9},0).wait(1).to({rotation:250.2},0).wait(1).to({rotation:251.4,y:336.4},0).wait(1).to({rotation:252.7,y:336.3},0).wait(1).to({rotation:253.9},0).wait(1).to({rotation:255.2},0).wait(1).to({rotation:256.4},0).wait(1).to({rotation:257.7,y:336.4},0).wait(1).to({rotation:258.9,y:336.3},0).wait(1).to({rotation:260.2},0).wait(1).to({rotation:261.4},0).wait(1).to({rotation:262.7},0).wait(1).to({rotation:263.9,y:336.4},0).wait(1).to({rotation:265.2,y:336.3},0).wait(1).to({rotation:266.4},0).wait(1).to({rotation:267.7,x:1030.9,y:336.4},0).wait(1).to({rotation:268.9,x:1031,y:336.3},0).wait(1).to({rotation:270.2},0).wait(1).to({rotation:271.4},0).wait(1).to({rotation:272.7,x:1030.9,y:336.4},0).wait(1).to({rotation:273.9,x:1031,y:336.3},0).wait(1).to({rotation:275.2,x:1030.9},0).wait(1).to({rotation:276.4},0).wait(1).to({rotation:277.7,x:1031,y:336.4},0).wait(1).to({rotation:278.9,y:336.3},0).wait(1).to({rotation:280.2,y:336.4},0).wait(1).to({rotation:281.4,x:1030.9,y:336.3},0).wait(1).to({rotation:282.7},0).wait(1).to({rotation:283.9,x:1031},0).wait(1).to({rotation:285.2,x:1030.9,y:336.4},0).wait(1).to({rotation:286.4,y:336.3},0).wait(1).to({rotation:287.7,x:1031,y:336.4},0).wait(1).to({rotation:289,x:1030.9,y:336.3},0).wait(1).to({rotation:290.2},0).wait(1).to({rotation:291.5},0).wait(1).to({rotation:292.7},0).wait(1).to({rotation:294},0).wait(1).to({rotation:295.2},0).wait(1).to({rotation:296.5,x:1031},0).wait(1).to({rotation:297.7,x:1030.9},0).wait(1).to({rotation:299},0).wait(1).to({rotation:300.2},0).wait(1).to({rotation:301.5},0).wait(1).to({rotation:302.7},0).wait(1).to({rotation:304},0).wait(1).to({rotation:305.2},0).wait(1).to({rotation:306.5},0).wait(1).to({rotation:307.7},0).wait(1).to({rotation:309},0).wait(1).to({rotation:310.2},0).wait(1).to({rotation:311.5},0).wait(1).to({rotation:312.7},0).wait(1).to({rotation:314},0).wait(1).to({rotation:315.2},0).wait(1).to({rotation:316.5},0).wait(1).to({rotation:317.7},0).wait(1).to({rotation:319},0).wait(1).to({rotation:320.2},0).wait(1).to({rotation:321.5},0).wait(1).to({rotation:322.7},0).wait(1).to({rotation:324},0).wait(1).to({rotation:325.2},0).wait(1).to({rotation:326.5},0).wait(1).to({rotation:327.7,x:1030.8},0).wait(1).to({rotation:329,x:1030.9},0).wait(1).to({rotation:330.2},0).wait(1).to({rotation:331.5,y:336.2},0).wait(1).to({rotation:332.7},0).wait(1).to({rotation:334,x:1030.8,y:336.3},0).wait(1).to({rotation:335.2},0).wait(1).to({rotation:336.5,x:1030.9},0).wait(1).to({rotation:337.7,x:1030.8},0).wait(1).to({rotation:339},0).wait(1).to({rotation:340.2,x:1030.9,y:336.2},0).wait(1).to({rotation:341.5,y:336.3},0).wait(1).to({rotation:342.7},0).wait(1).to({rotation:344,y:336.2},0).wait(1).to({rotation:345.2,y:336.3},0).wait(1).to({rotation:346.5,x:1030.8},0).wait(1).to({rotation:347.7,x:1030.9},0).wait(1).to({rotation:349,x:1030.8,y:336.2},0).wait(1).to({rotation:350.2,x:1030.9,y:336.3},0).wait(1).to({rotation:351.5,x:1030.8,y:336.2},0).wait(1).to({rotation:352.7,y:336.3},0).wait(1).to({rotation:354,x:1030.9},0).wait(1).to({rotation:355.2,x:1030.8,y:336.2},0).wait(1).to({rotation:356.5},0).wait(1).to({rotation:357.7,x:1030.9},0).wait(1).to({rotation:359,y:336.3},0).wait(1));

	// star2
	this.instance_5 = new lib.star2();
	this.instance_5.parent = this;
	this.instance_5.setTransform(1713.8,382.7,0.974,0.974,0,0,0,20.5,20.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1).to({regY:20,rotation:1.3,x:1714.3},0).wait(1).to({scaleX:0.98,scaleY:0.98,rotation:2.5,x:1714.9,y:382.8},0).wait(1).to({rotation:3.8,x:1715.4,y:382.9},0).wait(1).to({rotation:5,x:1715.9,y:383.1},0).wait(1).to({scaleX:0.98,scaleY:0.98,rotation:6.3,x:1716.4,y:383.2},0).wait(1).to({rotation:7.5,x:1717,y:383.3},0).wait(1).to({rotation:8.8,x:1717.5,y:383.4},0).wait(1).to({rotation:10,x:1718,y:383.6},0).wait(1).to({scaleX:0.98,scaleY:0.98,rotation:11.3,x:1718.5},0).wait(1).to({rotation:12.5,x:1719,y:383.7},0).wait(1).to({rotation:13.8,x:1719.6,y:383.9},0).wait(1).to({scaleX:0.98,scaleY:0.98,rotation:15,x:1720.1,y:384},0).wait(1).to({rotation:16.3,x:1720.6,y:384.1},0).wait(1).to({rotation:17.5,x:1721.1,y:384.2},0).wait(1).to({rotation:18.8,x:1721.7,y:384.3},0).wait(1).to({scaleX:0.98,scaleY:0.98,rotation:20,x:1722.2,y:384.4},0).wait(1).to({rotation:21.3,x:1722.7,y:384.6},0).wait(1).to({rotation:22.5,x:1723.2,y:384.7},0).wait(1).to({rotation:23.8,x:1723.8,y:384.8},0).wait(1).to({scaleX:0.98,scaleY:0.98,rotation:25,x:1724.3,y:384.9},0).wait(1).to({rotation:26.3,x:1724.8,y:385},0).wait(1).to({rotation:27.5,x:1725.3,y:385.2},0).wait(1).to({scaleX:0.98,scaleY:0.98,rotation:28.8,x:1725.8,y:385.3},0).wait(1).to({rotation:30,x:1726.4,y:385.4},0).wait(1).to({rotation:31.3,x:1726.9,y:385.5},0).wait(1).to({rotation:32.5,x:1727.4,y:385.6},0).wait(1).to({scaleX:0.98,scaleY:0.98,rotation:33.8,x:1728,y:385.7},0).wait(1).to({rotation:35,x:1728.5,y:385.8},0).wait(1).to({rotation:36.3,x:1729,y:385.9},0).wait(1).to({scaleX:0.98,scaleY:0.98,rotation:37.5,x:1729.5,y:386.1},0).wait(1).to({rotation:38.8,x:1730,y:386.2},0).wait(1).to({rotation:40,x:1730.5,y:386.3},0).wait(1).to({rotation:41.3,x:1731,y:386.4},0).wait(1).to({scaleX:0.98,scaleY:0.98,rotation:42.5,x:1731.6,y:386.5},0).wait(1).to({rotation:43.8,x:1732.1,y:386.6},0).wait(1).to({rotation:45,x:1732.6,y:386.8},0).wait(1).to({scaleX:0.99,scaleY:0.99,rotation:46.3,x:1733.1,y:386.9},0).wait(1).to({rotation:47.5,x:1733.7,y:387},0).wait(1).to({rotation:48.8,x:1734.2,y:387.1},0).wait(1).to({rotation:50,x:1734.7,y:387.2},0).wait(1).to({scaleX:0.99,scaleY:0.99,rotation:51.3,x:1735.2,y:387.3},0).wait(1).to({rotation:52.5,x:1735.8,y:387.5},0).wait(1).to({rotation:53.8,x:1736.3,y:387.6},0).wait(1).to({scaleX:0.99,scaleY:0.99,rotation:55,x:1736.8,y:387.7},0).wait(1).to({rotation:56.3,x:1737.4,y:387.8},0).wait(1).to({rotation:57.5,x:1737.8,y:387.9},0).wait(1).to({rotation:58.8,x:1738.4,y:388},0).wait(1).to({scaleX:0.99,scaleY:0.99,rotation:60,x:1738.9,y:388.2},0).wait(1).to({rotation:61.3,x:1739.4,y:388.3},0).wait(1).to({rotation:62.5,x:1739.9,y:388.4},0).wait(1).to({scaleX:0.99,scaleY:0.99,rotation:63.8,x:1740.4,y:388.5},0).wait(1).to({rotation:65,x:1741,y:388.7},0).wait(1).to({rotation:66.3,x:1741.5},0).wait(1).to({rotation:67.5,x:1742,y:388.9},0).wait(1).to({scaleX:0.99,scaleY:0.99,rotation:68.8,x:1742.6,y:389},0).wait(1).to({rotation:70,x:1743,y:389.1},0).wait(1).to({rotation:71.3,x:1743.6,y:389.2},0).wait(1).to({scaleX:0.99,scaleY:0.99,rotation:72.6,x:1744.1,y:389.3},0).wait(1).to({rotation:73.8,x:1744.6,y:389.5},0).wait(1).to({rotation:75.1,x:1745.2,y:389.6},0).wait(1).to({rotation:76.3,x:1745.7,y:389.7},0).wait(1).to({scaleX:0.99,scaleY:0.99,rotation:77.6,x:1746.2,y:389.8},0).wait(1).to({rotation:78.8,x:1746.7,y:389.9},0).wait(1).to({rotation:80.1,x:1747.2,y:390.1},0).wait(1).to({scaleX:0.99,scaleY:0.99,rotation:81.3,x:1747.8},0).wait(1).to({rotation:82.6,x:1748.3,y:390.3},0).wait(1).to({rotation:83.8,x:1748.8,y:390.4},0).wait(1).to({rotation:85.1,x:1749.3,y:390.5},0).wait(1).to({scaleX:0.99,scaleY:0.99,rotation:86.3,x:1749.8,y:390.7},0).wait(1).to({rotation:87.6,x:1750.4},0).wait(1).to({rotation:88.8,x:1750.8,y:390.9},0).wait(1).to({scaleX:1,scaleY:1,rotation:90.1,x:1751.4,y:391},0).wait(1).to({rotation:91.3,x:1751.9,y:391.1},0).wait(1).to({rotation:92.6,x:1752.4,y:391.2},0).wait(1).to({rotation:93.8,x:1753,y:391.3},0).wait(1).to({scaleX:1,scaleY:1,rotation:95.1,x:1753.5,y:391.5},0).wait(1).to({rotation:96.3,x:1754},0).wait(1).to({rotation:97.6,x:1754.5,y:391.7},0).wait(1).to({scaleX:1,scaleY:1,rotation:98.8,x:1755,y:391.8},0).wait(1).to({rotation:100.1,x:1755.6,y:391.9},0).wait(1).to({rotation:101.3,x:1756.1,y:392},0).wait(1).to({rotation:102.6,x:1756.6,y:392.1},0).wait(1).to({scaleX:1,scaleY:1,rotation:103.8,x:1757.2,y:392.3},0).wait(1).to({rotation:105.1,x:1757.7,y:392.4},0).wait(1).to({rotation:106.3,x:1758.2,y:392.5},0).wait(1).to({scaleX:1,scaleY:1,rotation:107.6,x:1758.7,y:392.6},0).wait(1).to({rotation:108.8,x:1759.2,y:392.7},0).wait(1).to({rotation:110.1,x:1759.7,y:392.9},0).wait(1).to({rotation:111.3,x:1760.3,y:393},0).wait(1).to({rotation:112.6},0).wait(1).to({rotation:113.8,x:1760.2},0).wait(1).to({rotation:115.1,x:1760.3},0).wait(1).to({rotation:116.3},0).wait(1).to({rotation:117.6,y:392.9},0).wait(1).to({rotation:118.8},0).wait(1).to({rotation:120.1,y:393},0).wait(1).to({rotation:121.3},0).wait(1).to({rotation:122.6,x:1760.2},0).wait(1).to({rotation:123.8,x:1760.3,y:392.9},0).wait(1).to({rotation:125.1,x:1760.2},0).wait(1).to({rotation:126.3,y:393},0).wait(1).to({rotation:127.6},0).wait(1).to({rotation:128.8,x:1760.3,y:392.9},0).wait(1).to({rotation:130.1,x:1760.2,y:393},0).wait(1).to({rotation:131.3},0).wait(1).to({rotation:132.6,x:1760.3},0).wait(1).to({rotation:133.8},0).wait(1).to({rotation:135.1},0).wait(1).to({rotation:136.3},0).wait(1).to({rotation:137.6,x:1760.2},0).wait(1).to({rotation:138.8},0).wait(1).to({rotation:140.1,x:1760.3},0).wait(1).to({rotation:141.3,x:1760.2},0).wait(1).to({rotation:142.6,x:1760.3},0).wait(1).to({rotation:143.9,x:1760.2},0).wait(1).to({rotation:145.1,y:392.9},0).wait(1).to({rotation:146.4,x:1760.3,y:393},0).wait(1).to({rotation:147.6},0).wait(1).to({rotation:148.9,x:1760.2},0).wait(1).to({rotation:150.1,x:1760.3,y:392.9},0).wait(1).to({rotation:151.4,x:1760.2},0).wait(1).to({rotation:152.6,y:393},0).wait(1).to({rotation:153.9},0).wait(1).to({rotation:155.1,y:392.9},0).wait(1).to({rotation:156.4,x:1760.3,y:393},0).wait(1).to({rotation:157.6,x:1760.2},0).wait(1).to({rotation:158.9,x:1760.3},0).wait(1).to({rotation:160.1},0).wait(1).to({rotation:161.4,x:1760.2},0).wait(1).to({rotation:162.6,x:1760.3},0).wait(1).to({rotation:163.9,x:1760.2},0).wait(1).to({rotation:165.1},0).wait(1).to({rotation:166.4,x:1760.3},0).wait(1).to({rotation:167.6,x:1760.2},0).wait(1).to({rotation:168.9},0).wait(1).to({rotation:170.1},0).wait(1).to({rotation:171.4},0).wait(1).to({rotation:172.6,x:1760.3},0).wait(1).to({rotation:173.9,x:1760.2},0).wait(1).to({rotation:175.1},0).wait(1).to({rotation:176.4},0).wait(1).to({rotation:177.6},0).wait(1).to({rotation:178.9},0).wait(1).to({rotation:180.1},0).wait(1).to({rotation:181.4},0).wait(1).to({rotation:182.6},0).wait(1).to({rotation:183.9},0).wait(1).to({rotation:185.1},0).wait(1).to({rotation:186.4},0).wait(1).to({rotation:187.6},0).wait(1).to({rotation:188.9},0).wait(1).to({rotation:190.1},0).wait(1).to({rotation:191.4},0).wait(1).to({rotation:192.6},0).wait(1).to({rotation:193.9},0).wait(1).to({rotation:195.1},0).wait(1).to({rotation:196.4,y:392.9},0).wait(1).to({rotation:197.6,y:393},0).wait(1).to({rotation:198.9},0).wait(1).to({rotation:200.1},0).wait(1).to({rotation:201.4},0).wait(1).to({rotation:202.6},0).wait(1).to({rotation:203.9},0).wait(1).to({rotation:205.1},0).wait(1).to({rotation:206.4},0).wait(1).to({rotation:207.6},0).wait(1).to({rotation:208.9},0).wait(1).to({rotation:210.1,y:392.9},0).wait(1).to({rotation:211.4,y:393},0).wait(1).to({rotation:212.6},0).wait(1).to({rotation:213.9,y:392.9},0).wait(1).to({rotation:215.1,y:393},0).wait(1).to({rotation:216.4},0).wait(1).to({rotation:217.7},0).wait(1).to({rotation:218.9},0).wait(1).to({rotation:220.2},0).wait(1).to({rotation:221.4},0).wait(1).to({rotation:222.7,y:392.9},0).wait(1).to({rotation:223.9,y:393},0).wait(1).to({rotation:225.2,y:392.9},0).wait(1).to({rotation:226.4},0).wait(1).to({rotation:227.7,y:393},0).wait(1).to({rotation:228.9,y:392.9},0).wait(1).to({rotation:230.2},0).wait(1).to({rotation:231.4,x:1760.1,y:393},0).wait(1).to({rotation:232.7,x:1760.2},0).wait(1).to({rotation:233.9},0).wait(1).to({rotation:235.2},0).wait(1).to({rotation:236.4},0).wait(1).to({rotation:237.7},0).wait(1).to({rotation:238.9,x:1760.1},0).wait(1).to({rotation:240.2,x:1760.2},0).wait(1).to({rotation:241.4},0).wait(1).to({rotation:242.7,y:392.9},0).wait(1).to({rotation:243.9},0).wait(1).to({rotation:245.2},0).wait(1).to({rotation:246.4,x:1760.1},0).wait(1).to({rotation:247.7,x:1760.2},0).wait(1).to({rotation:248.9,y:393},0).wait(1).to({rotation:250.2,y:392.9},0).wait(1).to({rotation:251.4,y:393},0).wait(1).to({rotation:252.7},0).wait(1).to({rotation:253.9,y:392.9},0).wait(1).to({rotation:255.2,x:1760.1,y:393},0).wait(1).to({rotation:256.4,x:1760.2,y:392.9},0).wait(1).to({rotation:257.7,y:393},0).wait(1).to({rotation:258.9,x:1760.1,y:392.9},0).wait(1).to({rotation:260.2,x:1760.2},0).wait(1).to({rotation:261.4},0).wait(1).to({rotation:262.7,y:393},0).wait(1).to({rotation:263.9},0).wait(1).to({rotation:265.2,y:392.9},0).wait(1).to({rotation:266.4},0).wait(1).to({rotation:267.7,x:1760.1,y:393},0).wait(1).to({rotation:268.9,x:1760.2,y:392.9},0).wait(1).to({rotation:270.2},0).wait(1).to({rotation:271.4},0).wait(1).to({rotation:272.7,x:1760.1,y:393},0).wait(1).to({rotation:273.9,x:1760.2,y:392.9},0).wait(1).to({rotation:275.2},0).wait(1).to({rotation:276.4},0).wait(1).to({rotation:277.7,y:393},0).wait(1).to({rotation:278.9,y:392.9},0).wait(1).to({rotation:280.2},0).wait(1).to({rotation:281.4},0).wait(1).to({rotation:282.7},0).wait(1).to({rotation:283.9},0).wait(1).to({rotation:285.2},0).wait(1).to({rotation:286.4},0).wait(1).to({rotation:287.7,y:393},0).wait(1).to({rotation:289,y:392.9},0).wait(1).to({rotation:290.2,x:1760.1},0).wait(1).to({rotation:291.5,x:1760.2},0).wait(1).to({rotation:292.7},0).wait(1).to({rotation:294,x:1760.1},0).wait(1).to({rotation:295.2,x:1760.2},0).wait(1).to({rotation:296.5},0).wait(1).to({rotation:297.7},0).wait(1).to({rotation:299},0).wait(1).to({rotation:300.2,x:1760.1},0).wait(1).to({rotation:301.5,x:1760.2},0).wait(1).to({rotation:302.7,x:1760.1},0).wait(1).to({rotation:304,x:1760.2},0).wait(1).to({rotation:305.2},0).wait(1).to({rotation:306.5},0).wait(1).to({rotation:307.7},0).wait(1).to({rotation:309},0).wait(1).to({rotation:310.2},0).wait(1).to({rotation:311.5},0).wait(1).to({rotation:312.7},0).wait(1).to({rotation:314},0).wait(1).to({rotation:315.2},0).wait(1).to({rotation:316.5},0).wait(1).to({rotation:317.7},0).wait(1).to({rotation:319},0).wait(1).to({rotation:320.2},0).wait(1).to({rotation:321.5},0).wait(1).to({rotation:322.7},0).wait(1).to({rotation:324},0).wait(1).to({rotation:325.2},0).wait(1).to({rotation:326.5},0).wait(1).to({rotation:327.7,x:1760.1},0).wait(1).to({rotation:329,x:1760.2},0).wait(1).to({rotation:330.2},0).wait(1).to({rotation:331.5},0).wait(1).to({rotation:332.7},0).wait(1).to({rotation:334},0).wait(1).to({rotation:335.2},0).wait(1).to({rotation:336.5},0).wait(1).to({rotation:337.7},0).wait(1).to({rotation:339},0).wait(1).to({rotation:340.2},0).wait(1).to({rotation:341.5},0).wait(1).to({rotation:342.7},0).wait(1).to({rotation:344},0).wait(1).to({rotation:345.2},0).wait(1).to({rotation:346.5},0).wait(1).to({rotation:347.7},0).wait(1).to({rotation:349},0).wait(1).to({rotation:350.2},0).wait(1).to({rotation:351.5,y:392.8},0).wait(1).to({rotation:352.7,y:392.9},0).wait(1).to({rotation:354},0).wait(1).to({rotation:355.2},0).wait(1).to({rotation:356.5},0).wait(1).to({rotation:357.7},0).wait(1).to({rotation:359},0).wait(1));

	// star3
	this.instance_6 = new lib.star3();
	this.instance_6.parent = this;
	this.instance_6.setTransform(1430,401,0.974,0.974,0,0,0,20.6,20.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1).to({regX:20.5,regY:20,rotation:1.3,x:1430.3},0).wait(1).to({scaleX:0.98,scaleY:0.98,rotation:2.5,x:1430.8,y:401.1},0).wait(1).to({rotation:3.8,x:1431.2,y:401.2},0).wait(1).to({rotation:5,x:1431.6,y:401.4},0).wait(1).to({scaleX:0.98,scaleY:0.98,rotation:6.3,x:1432.1,y:401.5},0).wait(1).to({rotation:7.5,x:1432.5,y:401.6},0).wait(1).to({rotation:8.8,x:1433,y:401.7},0).wait(1).to({rotation:10,x:1433.4,y:401.9},0).wait(1).to({scaleX:0.98,scaleY:0.98,rotation:11.3,x:1433.9,y:402},0).wait(1).to({rotation:12.5,x:1434.3,y:402.1},0).wait(1).to({rotation:13.8,x:1434.7,y:402.2},0).wait(1).to({scaleX:0.98,scaleY:0.98,rotation:15,x:1435.2,y:402.4},0).wait(1).to({rotation:16.3,x:1435.6},0).wait(1).to({rotation:17.5,x:1436,y:402.6},0).wait(1).to({rotation:18.8,x:1436.5,y:402.7},0).wait(1).to({scaleX:0.98,scaleY:0.98,rotation:20,x:1436.9,y:402.8},0).wait(1).to({rotation:21.3,x:1437.3,y:403},0).wait(1).to({rotation:22.5,x:1437.8,y:403.1},0).wait(1).to({rotation:23.8,x:1438.2,y:403.2},0).wait(1).to({scaleX:0.98,scaleY:0.98,rotation:25,x:1438.6,y:403.3},0).wait(1).to({rotation:26.3,x:1439.1,y:403.5},0).wait(1).to({rotation:27.5,x:1439.5,y:403.6},0).wait(1).to({scaleX:0.98,scaleY:0.98,rotation:28.8,x:1439.9,y:403.7},0).wait(1).to({rotation:30,x:1440.4,y:403.8},0).wait(1).to({rotation:31.3,x:1440.8,y:403.9},0).wait(1).to({rotation:32.5,x:1441.2,y:404},0).wait(1).to({scaleX:0.98,scaleY:0.98,rotation:33.8,x:1441.7,y:404.2},0).wait(1).to({rotation:35,x:1442.2,y:404.3},0).wait(1).to({rotation:36.3,x:1442.6,y:404.4},0).wait(1).to({scaleX:0.98,scaleY:0.98,rotation:37.5,x:1443,y:404.5},0).wait(1).to({rotation:38.8,x:1443.4,y:404.7},0).wait(1).to({rotation:40,x:1443.9,y:404.8},0).wait(1).to({rotation:41.3,x:1444.3,y:404.9},0).wait(1).to({scaleX:0.98,scaleY:0.98,rotation:42.5,x:1444.7,y:405},0).wait(1).to({rotation:43.8,x:1445.2,y:405.1},0).wait(1).to({rotation:45,x:1445.6,y:405.3},0).wait(1).to({scaleX:0.99,scaleY:0.99,rotation:46.3,x:1446,y:405.4},0).wait(1).to({rotation:47.5,x:1446.5,y:405.5},0).wait(1).to({rotation:48.8,x:1446.9,y:405.7},0).wait(1).to({rotation:50,x:1447.4,y:405.8},0).wait(1).to({scaleX:0.99,scaleY:0.99,rotation:51.3,x:1447.8,y:405.9},0).wait(1).to({rotation:52.5,x:1448.2,y:406},0).wait(1).to({rotation:53.8,x:1448.7,y:406.1},0).wait(1).to({scaleX:0.99,scaleY:0.99,rotation:55,x:1449.1,y:406.2},0).wait(1).to({rotation:56.3,x:1449.6,y:406.4},0).wait(1).to({rotation:57.5,x:1450,y:406.5},0).wait(1).to({rotation:58.8,x:1450.4,y:406.6},0).wait(1).to({scaleX:0.99,scaleY:0.99,rotation:60,x:1450.8,y:406.7},0).wait(1).to({rotation:61.3,x:1451.3,y:406.9},0).wait(1).to({rotation:62.5,x:1451.7,y:407},0).wait(1).to({scaleX:0.99,scaleY:0.99,rotation:63.8,x:1452.1,y:407.1},0).wait(1).to({rotation:65,x:1452.6,y:407.3},0).wait(1).to({rotation:66.3,x:1453},0).wait(1).to({rotation:67.5,x:1453.4,y:407.5},0).wait(1).to({scaleX:0.99,scaleY:0.99,rotation:68.8,x:1453.9,y:407.6},0).wait(1).to({rotation:70,x:1454.3,y:407.7},0).wait(1).to({rotation:71.3,x:1454.8,y:407.9},0).wait(1).to({scaleX:0.99,scaleY:0.99,rotation:72.6,x:1455.2,y:408},0).wait(1).to({rotation:73.8,x:1455.6,y:408.1},0).wait(1).to({rotation:75.1,x:1456.1,y:408.2},0).wait(1).to({rotation:76.3,x:1456.5,y:408.4},0).wait(1).to({scaleX:0.99,scaleY:0.99,rotation:77.6,x:1457},0).wait(1).to({rotation:78.8,x:1457.4,y:408.6},0).wait(1).to({rotation:80.1,x:1457.8,y:408.7},0).wait(1).to({scaleX:0.99,scaleY:0.99,rotation:81.3,x:1458.3,y:408.8},0).wait(1).to({rotation:82.6,x:1458.7,y:409},0).wait(1).to({rotation:83.8,x:1459.1,y:409.1},0).wait(1).to({rotation:85.1,x:1459.5,y:409.2},0).wait(1).to({scaleX:0.99,scaleY:0.99,rotation:86.3,x:1459.9,y:409.4},0).wait(1).to({rotation:87.6,x:1460.4},0).wait(1).to({rotation:88.8,x:1460.8,y:409.6},0).wait(1).to({scaleX:1,scaleY:1,rotation:90.1,x:1461.3,y:409.7},0).wait(1).to({rotation:91.3,x:1461.7,y:409.8},0).wait(1).to({rotation:92.6,x:1462.2,y:410},0).wait(1).to({rotation:93.8,x:1462.6,y:410.1},0).wait(1).to({scaleX:1,scaleY:1,rotation:95.1,x:1463,y:410.2},0).wait(1).to({rotation:96.3,x:1463.5,y:410.3},0).wait(1).to({rotation:97.6,x:1463.9,y:410.5},0).wait(1).to({scaleX:1,scaleY:1,rotation:98.8,x:1464.3,y:410.6},0).wait(1).to({rotation:100.1,x:1464.8,y:410.7},0).wait(1).to({rotation:101.3,x:1465.2,y:410.8},0).wait(1).to({rotation:102.6,x:1465.7,y:410.9},0).wait(1).to({scaleX:1,scaleY:1,rotation:103.8,x:1466.1,y:411.1},0).wait(1).to({rotation:105.1,x:1466.5,y:411.2},0).wait(1).to({rotation:106.3,x:1467,y:411.3},0).wait(1).to({scaleX:1,scaleY:1,rotation:107.6,x:1467.3,y:411.4},0).wait(1).to({rotation:108.8,x:1467.8,y:411.6},0).wait(1).to({rotation:110.1,x:1468.2,y:411.7},0).wait(1).to({rotation:111.3,x:1468.7,y:411.8},0).wait(1).to({rotation:112.6},0).wait(1).to({rotation:113.8,x:1468.6},0).wait(1).to({rotation:115.1,x:1468.7},0).wait(1).to({rotation:116.3},0).wait(1).to({rotation:117.6},0).wait(1).to({rotation:118.8},0).wait(1).to({rotation:120.1,y:411.9},0).wait(1).to({rotation:121.3,y:411.8},0).wait(1).to({rotation:122.6},0).wait(1).to({rotation:123.8},0).wait(1).to({rotation:125.1},0).wait(1).to({rotation:126.3},0).wait(1).to({rotation:127.6},0).wait(1).to({rotation:128.8},0).wait(1).to({rotation:130.1},0).wait(1).to({rotation:131.3},0).wait(1).to({rotation:132.6},0).wait(1).to({rotation:133.8},0).wait(1).to({rotation:135.1},0).wait(1).to({rotation:136.3,y:411.9},0).wait(1).to({rotation:137.6,x:1468.6,y:411.8},0).wait(1).to({rotation:138.8,x:1468.7,y:411.9},0).wait(1).to({rotation:140.1,y:411.8},0).wait(1).to({rotation:141.3,y:411.9},0).wait(1).to({rotation:142.6,y:411.8},0).wait(1).to({rotation:143.9},0).wait(1).to({rotation:145.1},0).wait(1).to({rotation:146.4},0).wait(1).to({rotation:147.6},0).wait(1).to({rotation:148.9,y:411.9},0).wait(1).to({rotation:150.1,y:411.8},0).wait(1).to({rotation:151.4,x:1468.6},0).wait(1).to({rotation:152.6,x:1468.7,y:411.9},0).wait(1).to({rotation:153.9},0).wait(1).to({rotation:155.1,y:411.8},0).wait(1).to({rotation:156.4,y:411.9},0).wait(1).to({rotation:157.6,y:411.8},0).wait(1).to({rotation:158.9,y:411.9},0).wait(1).to({rotation:160.1,y:411.8},0).wait(1).to({rotation:161.4,y:411.9},0).wait(1).to({rotation:162.6},0).wait(1).to({rotation:163.9},0).wait(1).to({rotation:165.1},0).wait(1).to({rotation:166.4},0).wait(1).to({rotation:167.6},0).wait(1).to({rotation:168.9},0).wait(1).to({rotation:170.1,x:1468.6,y:411.8},0).wait(1).to({rotation:171.4,x:1468.7,y:411.9},0).wait(1).to({rotation:172.6},0).wait(1).to({rotation:173.9},0).wait(1).to({rotation:175.1},0).wait(1).to({rotation:176.4},0).wait(1).to({rotation:177.6},0).wait(1).to({rotation:178.9,x:1468.6},0).wait(1).to({rotation:180.1,x:1468.7},0).wait(1).to({rotation:181.4},0).wait(1).to({rotation:182.6},0).wait(1).to({rotation:183.9},0).wait(1).to({rotation:185.1},0).wait(1).to({rotation:186.4},0).wait(1).to({rotation:187.6},0).wait(1).to({rotation:188.9},0).wait(1).to({rotation:190.1},0).wait(1).to({rotation:191.4,x:1468.6},0).wait(1).to({rotation:192.6},0).wait(1).to({rotation:193.9},0).wait(1).to({rotation:195.1},0).wait(1).to({rotation:196.4,x:1468.7,y:411.8},0).wait(1).to({rotation:197.6,y:411.9},0).wait(1).to({rotation:198.9,x:1468.6},0).wait(1).to({rotation:200.1},0).wait(1).to({rotation:201.4},0).wait(1).to({rotation:202.6,x:1468.7},0).wait(1).to({rotation:203.9,x:1468.6},0).wait(1).to({rotation:205.1},0).wait(1).to({rotation:206.4,x:1468.7},0).wait(1).to({rotation:207.6,x:1468.6},0).wait(1).to({rotation:208.9},0).wait(1).to({rotation:210.1,x:1468.7},0).wait(1).to({rotation:211.4,x:1468.6},0).wait(1).to({rotation:212.6},0).wait(1).to({rotation:213.9},0).wait(1).to({rotation:215.1},0).wait(1).to({rotation:216.4},0).wait(1).to({rotation:217.7},0).wait(1).to({rotation:218.9},0).wait(1).to({rotation:220.2},0).wait(1).to({rotation:221.4},0).wait(1).to({rotation:222.7},0).wait(1).to({rotation:223.9},0).wait(1).to({rotation:225.2},0).wait(1).to({rotation:226.4},0).wait(1).to({rotation:227.7},0).wait(1).to({rotation:228.9},0).wait(1).to({rotation:230.2},0).wait(1).to({rotation:231.4},0).wait(1).to({rotation:232.7},0).wait(1).to({rotation:233.9},0).wait(1).to({rotation:235.2},0).wait(1).to({rotation:236.4},0).wait(1).to({rotation:237.7},0).wait(1).to({rotation:238.9},0).wait(1).to({rotation:240.2},0).wait(1).to({rotation:241.4},0).wait(1).to({rotation:242.7},0).wait(1).to({rotation:243.9},0).wait(1).to({rotation:245.2},0).wait(1).to({rotation:246.4},0).wait(1).to({rotation:247.7},0).wait(1).to({rotation:248.9},0).wait(1).to({rotation:250.2},0).wait(1).to({rotation:251.4},0).wait(1).to({rotation:252.7},0).wait(1).to({rotation:253.9},0).wait(1).to({rotation:255.2},0).wait(1).to({rotation:256.4},0).wait(1).to({rotation:257.7},0).wait(1).to({rotation:258.9,x:1468.5},0).wait(1).to({rotation:260.2,x:1468.6},0).wait(1).to({rotation:261.4},0).wait(1).to({rotation:262.7},0).wait(1).to({rotation:263.9},0).wait(1).to({rotation:265.2},0).wait(1).to({rotation:266.4},0).wait(1).to({rotation:267.7,x:1468.5},0).wait(1).to({rotation:268.9,x:1468.6},0).wait(1).to({rotation:270.2},0).wait(1).to({rotation:271.4},0).wait(1).to({rotation:272.7,x:1468.5},0).wait(1).to({rotation:273.9,x:1468.6,y:411.8},0).wait(1).to({rotation:275.2,y:411.9},0).wait(1).to({rotation:276.4},0).wait(1).to({rotation:277.7},0).wait(1).to({rotation:278.9},0).wait(1).to({rotation:280.2},0).wait(1).to({rotation:281.4,y:411.8},0).wait(1).to({rotation:282.7,y:411.9},0).wait(1).to({rotation:283.9,y:411.8},0).wait(1).to({rotation:285.2,x:1468.5,y:411.9},0).wait(1).to({rotation:286.4},0).wait(1).to({rotation:287.7,x:1468.6},0).wait(1).to({rotation:289,x:1468.5,y:411.8},0).wait(1).to({rotation:290.2},0).wait(1).to({rotation:291.5,x:1468.6,y:411.9},0).wait(1).to({rotation:292.7,y:411.8},0).wait(1).to({rotation:294,x:1468.5,y:411.9},0).wait(1).to({rotation:295.2,y:411.8},0).wait(1).to({rotation:296.5,x:1468.6},0).wait(1).to({rotation:297.7},0).wait(1).to({rotation:299,x:1468.5},0).wait(1).to({rotation:300.2},0).wait(1).to({rotation:301.5,x:1468.6},0).wait(1).to({rotation:302.7,x:1468.5},0).wait(1).to({rotation:304,x:1468.6},0).wait(1).to({rotation:305.2},0).wait(1).to({rotation:306.5,x:1468.5},0).wait(1).to({rotation:307.7,x:1468.6,y:411.9},0).wait(1).to({rotation:309,y:411.8},0).wait(1).to({rotation:310.2},0).wait(1).to({rotation:311.5,y:411.9},0).wait(1).to({rotation:312.7,y:411.8},0).wait(1).to({rotation:314,x:1468.5,y:411.9},0).wait(1).to({rotation:315.2,x:1468.6,y:411.8},0).wait(1).to({rotation:316.5,x:1468.5},0).wait(1).to({rotation:317.7},0).wait(1).to({rotation:319},0).wait(1).to({rotation:320.2,x:1468.6},0).wait(1).to({rotation:321.5},0).wait(1).to({rotation:322.7,x:1468.5},0).wait(1).to({rotation:324},0).wait(1).to({rotation:325.2,x:1468.6},0).wait(1).to({rotation:326.5},0).wait(1).to({rotation:327.7,x:1468.5},0).wait(1).to({rotation:329},0).wait(1).to({rotation:330.2},0).wait(1).to({rotation:331.5,x:1468.6},0).wait(1).to({rotation:332.7,x:1468.5},0).wait(1).to({rotation:334},0).wait(1).to({rotation:335.2},0).wait(1).to({rotation:336.5,y:411.9},0).wait(1).to({rotation:337.7,y:411.8},0).wait(1).to({rotation:339},0).wait(1).to({rotation:340.2,x:1468.6},0).wait(1).to({rotation:341.5},0).wait(1).to({rotation:342.7},0).wait(1).to({rotation:344},0).wait(1).to({rotation:345.2},0).wait(1).to({rotation:346.5,x:1468.5},0).wait(1).to({rotation:347.7},0).wait(1).to({rotation:349},0).wait(1).to({rotation:350.2,x:1468.6},0).wait(1).to({rotation:351.5,x:1468.5},0).wait(1).to({rotation:352.7},0).wait(1).to({rotation:354},0).wait(1).to({rotation:355.2},0).wait(1).to({rotation:356.5},0).wait(1).to({rotation:357.7,x:1468.6},0).wait(1).to({rotation:359},0).wait(1));

	// star4
	this.instance_7 = new lib.star4();
	this.instance_7.parent = this;
	this.instance_7.setTransform(376.5,457.1,0.974,0.974,0,0,0,20.6,20);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1).to({regX:20.5,rotation:1.3,x:376.4,y:457.2},0).wait(1).to({scaleX:0.98,scaleY:0.98,rotation:2.5,x:376.6},0).wait(1).to({rotation:3.8,x:376.7,y:457.4},0).wait(1).to({rotation:5,x:376.8,y:457.6},0).wait(1).to({scaleX:0.98,scaleY:0.98,rotation:6.3,x:376.9,y:457.7},0).wait(1).to({rotation:7.5,x:377,y:457.8},0).wait(1).to({rotation:8.8,x:377.2,y:458},0).wait(1).to({rotation:10,y:458.1},0).wait(1).to({scaleX:0.98,scaleY:0.98,rotation:11.3,x:377.4,y:458.2},0).wait(1).to({rotation:12.5,y:458.3},0).wait(1).to({rotation:13.8,x:377.6,y:458.5},0).wait(1).to({scaleX:0.98,scaleY:0.98,rotation:15,x:377.7,y:458.6},0).wait(1).to({rotation:16.3,x:377.8,y:458.7},0).wait(1).to({rotation:17.5,x:377.9,y:458.9},0).wait(1).to({rotation:18.8,x:378,y:459},0).wait(1).to({scaleX:0.98,scaleY:0.98,rotation:20,x:378.1,y:459.1},0).wait(1).to({rotation:21.3,x:378.2,y:459.3},0).wait(1).to({rotation:22.5,x:378.4,y:459.4},0).wait(1).to({rotation:23.8,x:378.5,y:459.6},0).wait(1).to({scaleX:0.98,scaleY:0.98,rotation:25,x:378.6,y:459.7},0).wait(1).to({rotation:26.3,x:378.7,y:459.8},0).wait(1).to({rotation:27.5,x:378.8,y:460},0).wait(1).to({scaleX:0.98,scaleY:0.98,rotation:28.8,x:378.9,y:460.1},0).wait(1).to({rotation:30,x:379,y:460.2},0).wait(1).to({rotation:31.3,x:379.1,y:460.3},0).wait(1).to({rotation:32.5,x:379.2,y:460.5},0).wait(1).to({scaleX:0.98,scaleY:0.98,rotation:33.8,x:379.4,y:460.6},0).wait(1).to({rotation:35,x:379.5,y:460.7},0).wait(1).to({rotation:36.3,x:379.6,y:460.9},0).wait(1).to({scaleX:0.98,scaleY:0.98,rotation:37.5,x:379.7,y:461},0).wait(1).to({rotation:38.8,x:379.8,y:461.1},0).wait(1).to({rotation:40,x:379.9,y:461.2},0).wait(1).to({rotation:41.3,x:380,y:461.4},0).wait(1).to({scaleX:0.98,scaleY:0.98,rotation:42.5,x:380.1,y:461.5},0).wait(1).to({rotation:43.8,x:380.2,y:461.6},0).wait(1).to({rotation:45,x:380.3,y:461.8},0).wait(1).to({scaleX:0.99,scaleY:0.99,rotation:46.3,x:380.4,y:461.9},0).wait(1).to({rotation:47.5,x:380.6,y:462.1},0).wait(1).to({rotation:48.8,x:380.7,y:462.2},0).wait(1).to({rotation:50,x:380.8,y:462.3},0).wait(1).to({scaleX:0.99,scaleY:0.99,rotation:51.3,x:380.9,y:462.5},0).wait(1).to({rotation:52.5,x:381,y:462.6},0).wait(1).to({rotation:53.8,x:381.1,y:462.7},0).wait(1).to({scaleX:0.99,scaleY:0.99,rotation:55,x:381.3,y:462.8},0).wait(1).to({rotation:56.3,x:381.4,y:463},0).wait(1).to({rotation:57.5,y:463.1},0).wait(1).to({rotation:58.8,x:381.6,y:463.3},0).wait(1).to({scaleX:0.99,scaleY:0.99,rotation:60,x:381.7,y:463.4},0).wait(1).to({rotation:61.3,x:381.8,y:463.5},0).wait(1).to({rotation:62.5,x:381.9,y:463.7},0).wait(1).to({scaleX:0.99,scaleY:0.99,rotation:63.8,x:382,y:463.8},0).wait(1).to({rotation:65,x:382.1,y:464},0).wait(1).to({rotation:66.3,x:382.2},0).wait(1).to({rotation:67.5,x:382.3,y:464.2},0).wait(1).to({scaleX:0.99,scaleY:0.99,rotation:68.8,x:382.5,y:464.3},0).wait(1).to({rotation:70,x:382.6,y:464.5},0).wait(1).to({rotation:71.3,x:382.7,y:464.6},0).wait(1).to({scaleX:0.99,scaleY:0.99,rotation:72.6,x:382.8,y:464.7},0).wait(1).to({rotation:73.8,x:382.9,y:464.9},0).wait(1).to({rotation:75.1,x:383,y:465},0).wait(1).to({rotation:76.3,x:383.1,y:465.1},0).wait(1).to({scaleX:0.99,scaleY:0.99,rotation:77.6,x:383.3,y:465.2},0).wait(1).to({rotation:78.8,x:383.4,y:465.4},0).wait(1).to({rotation:80.1,y:465.6},0).wait(1).to({scaleX:0.99,scaleY:0.99,rotation:81.3,x:383.6},0).wait(1).to({rotation:82.6,x:383.7,y:465.8},0).wait(1).to({rotation:83.8,x:383.8,y:465.9},0).wait(1).to({rotation:85.1,x:383.9,y:466.1},0).wait(1).to({scaleX:0.99,scaleY:0.99,rotation:86.3,x:384,y:466.2},0).wait(1).to({rotation:87.6,x:384.1,y:466.3},0).wait(1).to({rotation:88.8,x:384.2,y:466.5},0).wait(1).to({scaleX:1,scaleY:1,rotation:90.1,x:384.4,y:466.6},0).wait(1).to({rotation:91.3,x:384.5,y:466.8},0).wait(1).to({rotation:92.6,x:384.6,y:466.9},0).wait(1).to({rotation:93.8,x:384.7,y:467},0).wait(1).to({scaleX:1,scaleY:1,rotation:95.1,x:384.8,y:467.2},0).wait(1).to({rotation:96.3,x:384.9,y:467.3},0).wait(1).to({rotation:97.6,x:385,y:467.4},0).wait(1).to({scaleX:1,scaleY:1,rotation:98.8,x:385.1,y:467.6},0).wait(1).to({rotation:100.1,x:385.2},0).wait(1).to({rotation:101.3,x:385.4,y:467.8},0).wait(1).to({rotation:102.6,x:385.5,y:467.9},0).wait(1).to({scaleX:1,scaleY:1,rotation:103.8,x:385.6,y:468.1},0).wait(1).to({rotation:105.1,x:385.7,y:468.2},0).wait(1).to({rotation:106.3,x:385.8,y:468.4},0).wait(1).to({scaleX:1,scaleY:1,rotation:107.6,x:385.9},0).wait(1).to({rotation:108.8,x:386,y:468.6},0).wait(1).to({rotation:110.1,x:386.1,y:468.8},0).wait(1).to({rotation:111.3,x:386.3,y:468.9},0).wait(1).to({rotation:112.6},0).wait(1).to({rotation:113.8,x:386.2},0).wait(1).to({rotation:115.1},0).wait(1).to({rotation:116.3,x:386.3},0).wait(1).to({rotation:117.6},0).wait(1).to({rotation:118.8},0).wait(1).to({rotation:120.1},0).wait(1).to({rotation:121.3},0).wait(1).to({rotation:122.6,x:386.2},0).wait(1).to({rotation:123.8,x:386.3},0).wait(1).to({rotation:125.1},0).wait(1).to({rotation:126.3},0).wait(1).to({rotation:127.6},0).wait(1).to({rotation:128.8},0).wait(1).to({rotation:130.1},0).wait(1).to({rotation:131.3},0).wait(1).to({rotation:132.6},0).wait(1).to({rotation:133.8},0).wait(1).to({rotation:135.1},0).wait(1).to({rotation:136.3},0).wait(1).to({rotation:137.6,x:386.2},0).wait(1).to({rotation:138.8,x:386.3},0).wait(1).to({rotation:140.1},0).wait(1).to({rotation:141.3},0).wait(1).to({rotation:142.6},0).wait(1).to({rotation:143.9},0).wait(1).to({rotation:145.1},0).wait(1).to({rotation:146.4},0).wait(1).to({rotation:147.6},0).wait(1).to({rotation:148.9},0).wait(1).to({rotation:150.1},0).wait(1).to({rotation:151.4},0).wait(1).to({rotation:152.6,y:469},0).wait(1).to({rotation:153.9},0).wait(1).to({rotation:155.1,y:468.9},0).wait(1).to({rotation:156.4},0).wait(1).to({rotation:157.6},0).wait(1).to({rotation:158.9},0).wait(1).to({rotation:160.1},0).wait(1).to({rotation:161.4},0).wait(1).to({rotation:162.6,y:469},0).wait(1).to({rotation:163.9},0).wait(1).to({rotation:165.1},0).wait(1).to({rotation:166.4},0).wait(1).to({rotation:167.6},0).wait(1).to({rotation:168.9},0).wait(1).to({rotation:170.1,y:468.9},0).wait(1).to({rotation:171.4,y:469},0).wait(1).to({rotation:172.6},0).wait(1).to({rotation:173.9},0).wait(1).to({rotation:175.1},0).wait(1).to({rotation:176.4},0).wait(1).to({rotation:177.6},0).wait(1).to({rotation:178.9},0).wait(1).to({rotation:180.1},0).wait(1).to({rotation:181.4},0).wait(1).to({rotation:182.6},0).wait(1).to({rotation:183.9},0).wait(1).to({rotation:185.1},0).wait(1).to({rotation:186.4},0).wait(1).to({rotation:187.6},0).wait(1).to({rotation:188.9},0).wait(1).to({rotation:190.1},0).wait(1).to({rotation:191.4},0).wait(1).to({rotation:192.6},0).wait(1).to({rotation:193.9},0).wait(1).to({rotation:195.1},0).wait(1).to({rotation:196.4},0).wait(1).to({rotation:197.6},0).wait(1).to({rotation:198.9},0).wait(1).to({rotation:200.1},0).wait(1).to({rotation:201.4,y:469.1},0).wait(1).to({rotation:202.6,y:469},0).wait(1).to({rotation:203.9},0).wait(1).to({rotation:205.1},0).wait(1).to({rotation:206.4},0).wait(1).to({rotation:207.6},0).wait(1).to({rotation:208.9},0).wait(1).to({rotation:210.1},0).wait(1).to({rotation:211.4,y:469.1},0).wait(1).to({rotation:212.6,y:469},0).wait(1).to({rotation:213.9},0).wait(1).to({rotation:215.1},0).wait(1).to({rotation:216.4},0).wait(1).to({rotation:217.7,y:469.1},0).wait(1).to({rotation:218.9},0).wait(1).to({rotation:220.2,y:469},0).wait(1).to({rotation:221.4},0).wait(1).to({rotation:222.7},0).wait(1).to({rotation:223.9,y:469.1},0).wait(1).to({rotation:225.2,y:469},0).wait(1).to({rotation:226.4},0).wait(1).to({rotation:227.7,y:469.1},0).wait(1).to({rotation:228.9,y:469},0).wait(1).to({rotation:230.2},0).wait(1).to({rotation:231.4,x:386.2,y:469.1},0).wait(1).to({rotation:232.7,x:386.3},0).wait(1).to({rotation:233.9},0).wait(1).to({rotation:235.2},0).wait(1).to({rotation:236.4},0).wait(1).to({rotation:237.7},0).wait(1).to({rotation:238.9,x:386.2},0).wait(1).to({rotation:240.2,x:386.3},0).wait(1).to({rotation:241.4},0).wait(1).to({rotation:242.7,y:469},0).wait(1).to({rotation:243.9,y:469.1},0).wait(1).to({rotation:245.2},0).wait(1).to({rotation:246.4,x:386.2,y:469},0).wait(1).to({rotation:247.7,y:469.1},0).wait(1).to({rotation:248.9,x:386.3},0).wait(1).to({rotation:250.2,x:386.2},0).wait(1).to({rotation:251.4},0).wait(1).to({rotation:252.7,x:386.3},0).wait(1).to({rotation:253.9,y:469},0).wait(1).to({rotation:255.2,x:386.2,y:469.1},0).wait(1).to({rotation:256.4,x:386.3},0).wait(1).to({rotation:257.7},0).wait(1).to({rotation:258.9,x:386.2},0).wait(1).to({rotation:260.2},0).wait(1).to({rotation:261.4},0).wait(1).to({rotation:262.7},0).wait(1).to({rotation:263.9,x:386.3},0).wait(1).to({rotation:265.2,x:386.2},0).wait(1).to({rotation:266.4},0).wait(1).to({rotation:267.7},0).wait(1).to({rotation:268.9},0).wait(1).to({rotation:270.2},0).wait(1).to({rotation:271.4},0).wait(1).to({rotation:272.7},0).wait(1).to({rotation:273.9,y:469},0).wait(1).to({rotation:275.2,y:469.1},0).wait(1).to({rotation:276.4},0).wait(1).to({rotation:277.7},0).wait(1).to({rotation:278.9},0).wait(1).to({rotation:280.2},0).wait(1).to({rotation:281.4,y:469},0).wait(1).to({rotation:282.7,y:469.1},0).wait(1).to({rotation:283.9,y:469},0).wait(1).to({rotation:285.2,y:469.1},0).wait(1).to({rotation:286.4},0).wait(1).to({rotation:287.7},0).wait(1).to({rotation:289},0).wait(1).to({rotation:290.2,x:386.1,y:469},0).wait(1).to({rotation:291.5,x:386.2,y:469.1},0).wait(1).to({rotation:292.7},0).wait(1).to({rotation:294,x:386.1},0).wait(1).to({rotation:295.2,x:386.2,y:469},0).wait(1).to({rotation:296.5,y:469.1},0).wait(1).to({rotation:297.7},0).wait(1).to({rotation:299},0).wait(1).to({rotation:300.2,x:386.1},0).wait(1).to({rotation:301.5,x:386.2},0).wait(1).to({rotation:302.7,x:386.1},0).wait(1).to({rotation:304,x:386.2,y:469},0).wait(1).to({rotation:305.2},0).wait(1).to({rotation:306.5,y:469.1},0).wait(1).to({rotation:307.7},0).wait(1).to({rotation:309,y:469},0).wait(1).to({rotation:310.2},0).wait(1).to({rotation:311.5,y:469.1},0).wait(1).to({rotation:312.7,y:469},0).wait(1).to({rotation:314,x:386.1,y:469.1},0).wait(1).to({rotation:315.2,x:386.2,y:469},0).wait(1).to({rotation:316.5,x:386.1,y:469.1},0).wait(1).to({rotation:317.7,y:469},0).wait(1).to({rotation:319,y:469.1},0).wait(1).to({rotation:320.2,x:386.2,y:469},0).wait(1).to({rotation:321.5,y:469.1},0).wait(1).to({rotation:322.7,x:386.1,y:469},0).wait(1).to({rotation:324},0).wait(1).to({rotation:325.2,x:386.2},0).wait(1).to({rotation:326.5},0).wait(1).to({rotation:327.7,x:386.1},0).wait(1).to({rotation:329,y:469.1},0).wait(1).to({rotation:330.2},0).wait(1).to({rotation:331.5,y:469},0).wait(1).to({rotation:332.7},0).wait(1).to({rotation:334},0).wait(1).to({rotation:335.2},0).wait(1).to({rotation:336.5,y:469.1},0).wait(1).to({rotation:337.7,y:469},0).wait(1).to({rotation:339},0).wait(1).to({rotation:340.2},0).wait(1).to({rotation:341.5},0).wait(1).to({rotation:342.7},0).wait(1).to({rotation:344},0).wait(1).to({rotation:345.2},0).wait(1).to({rotation:346.5},0).wait(1).to({rotation:347.7},0).wait(1).to({rotation:349},0).wait(1).to({rotation:350.2},0).wait(1).to({rotation:351.5},0).wait(1).to({rotation:352.7},0).wait(1).to({rotation:354},0).wait(1).to({rotation:355.2},0).wait(1).to({rotation:356.5},0).wait(1).to({rotation:357.7},0).wait(1).to({rotation:359},0).wait(1));

	// star5
	this.instance_8 = new lib.star5();
	this.instance_8.parent = this;
	this.instance_8.setTransform(189.8,281.7,0.974,0.974,0,0,0,20.6,20.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1).to({regX:20.5,regY:20,rotation:1.3,x:189.7,y:281.6},0).wait(1).to({scaleX:0.98,scaleY:0.98,rotation:2.5,x:189.8,y:281.7},0).wait(1).to({rotation:3.8,x:189.9,y:281.8},0).wait(1).to({rotation:5,y:281.9},0).wait(1).to({scaleX:0.98,scaleY:0.98,rotation:6.3,x:190,y:282},0).wait(1).to({rotation:7.5,x:190.1},0).wait(1).to({rotation:8.8,x:190.2,y:282.1},0).wait(1).to({rotation:10,y:282.3},0).wait(1).to({scaleX:0.98,scaleY:0.98,rotation:11.3,x:190.3},0).wait(1).to({rotation:12.5,y:282.4},0).wait(1).to({rotation:13.8,x:190.4,y:282.5},0).wait(1).to({scaleX:0.98,scaleY:0.98,rotation:15,y:282.6},0).wait(1).to({rotation:16.3,x:190.5},0).wait(1).to({rotation:17.5,y:282.8},0).wait(1).to({rotation:18.8,x:190.6,y:282.9},0).wait(1).to({scaleX:0.98,scaleY:0.98,rotation:20,x:190.7},0).wait(1).to({rotation:21.3,y:283},0).wait(1).to({rotation:22.5,x:190.8,y:283.1},0).wait(1).to({rotation:23.8,x:190.9,y:283.2},0).wait(1).to({scaleX:0.98,scaleY:0.98,rotation:25,y:283.3},0).wait(1).to({rotation:26.3,x:191,y:283.4},0).wait(1).to({rotation:27.5,y:283.5},0).wait(1).to({scaleX:0.98,scaleY:0.98,rotation:28.8,x:191.1,y:283.6},0).wait(1).to({rotation:30,x:191.2},0).wait(1).to({rotation:31.3,y:283.7},0).wait(1).to({rotation:32.5,x:191.3,y:283.8},0).wait(1).to({scaleX:0.98,scaleY:0.98,rotation:33.8,x:191.4,y:283.9},0).wait(1).to({rotation:35,y:284},0).wait(1).to({rotation:36.3,x:191.5,y:284.1},0).wait(1).to({scaleX:0.98,scaleY:0.98,rotation:37.5,x:191.6},0).wait(1).to({rotation:38.8,y:284.2},0).wait(1).to({rotation:40,y:284.3},0).wait(1).to({rotation:41.3,x:191.7,y:284.4},0).wait(1).to({scaleX:0.98,scaleY:0.98,rotation:42.5,y:284.5},0).wait(1).to({rotation:43.8,x:191.8,y:284.6},0).wait(1).to({rotation:45,y:284.7},0).wait(1).to({scaleX:0.99,scaleY:0.99,rotation:46.3,x:191.9,y:284.8},0).wait(1).to({rotation:47.5,x:192},0).wait(1).to({rotation:48.8,x:192.1,y:285},0).wait(1).to({rotation:50},0).wait(1).to({scaleX:0.99,scaleY:0.99,rotation:51.3,x:192.2,y:285.1},0).wait(1).to({rotation:52.5,y:285.2},0).wait(1).to({rotation:53.8,x:192.3,y:285.3},0).wait(1).to({scaleX:0.99,scaleY:0.99,rotation:55,x:192.4},0).wait(1).to({rotation:56.3,x:192.5,y:285.5},0).wait(1).to({rotation:57.5},0).wait(1).to({rotation:58.8,y:285.6},0).wait(1).to({scaleX:0.99,scaleY:0.99,rotation:60,x:192.6,y:285.7},0).wait(1).to({rotation:61.3,x:192.7,y:285.8},0).wait(1).to({rotation:62.5,y:285.9},0).wait(1).to({scaleX:0.99,scaleY:0.99,rotation:63.8,x:192.8,y:286},0).wait(1).to({rotation:65,y:286.1},0).wait(1).to({rotation:66.3,x:192.9},0).wait(1).to({rotation:67.5,y:286.2},0).wait(1).to({scaleX:0.99,scaleY:0.99,rotation:68.8,x:193,y:286.3},0).wait(1).to({rotation:70,x:193.1,y:286.4},0).wait(1).to({rotation:71.3,y:286.5},0).wait(1).to({scaleX:0.99,scaleY:0.99,rotation:72.6,x:193.2,y:286.6},0).wait(1).to({rotation:73.8,y:286.7},0).wait(1).to({rotation:75.1,x:193.3,y:286.8},0).wait(1).to({rotation:76.3,x:193.4,y:286.9},0).wait(1).to({scaleX:0.99,scaleY:0.99,rotation:77.6,x:193.5},0).wait(1).to({rotation:78.8,y:287},0).wait(1).to({rotation:80.1,y:287.2},0).wait(1).to({scaleX:0.99,scaleY:0.99,rotation:81.3,x:193.7},0).wait(1).to({rotation:82.6,y:287.3},0).wait(1).to({rotation:83.8,y:287.4},0).wait(1).to({rotation:85.1,x:193.8,y:287.5},0).wait(1).to({scaleX:0.99,scaleY:0.99,rotation:86.3,y:287.6},0).wait(1).to({rotation:87.6,x:193.9,y:287.7},0).wait(1).to({rotation:88.8,y:287.8},0).wait(1).to({scaleX:1,scaleY:1,rotation:90.1,x:194,y:287.9},0).wait(1).to({rotation:91.3,x:194.1},0).wait(1).to({rotation:92.6,y:288},0).wait(1).to({rotation:93.8,x:194.2,y:288.1},0).wait(1).to({scaleX:1,scaleY:1,rotation:95.1,y:288.2},0).wait(1).to({rotation:96.3,x:194.3,y:288.3},0).wait(1).to({rotation:97.6,x:194.4,y:288.4},0).wait(1).to({scaleX:1,scaleY:1,rotation:98.8,y:288.5},0).wait(1).to({rotation:100.1,x:194.5},0).wait(1).to({rotation:101.3,x:194.6,y:288.7},0).wait(1).to({rotation:102.6},0).wait(1).to({scaleX:1,scaleY:1,rotation:103.8,x:194.7,y:288.8},0).wait(1).to({rotation:105.1,x:194.8,y:288.9},0).wait(1).to({rotation:106.3,y:289},0).wait(1).to({scaleX:1,scaleY:1,rotation:107.6,y:289.1},0).wait(1).to({rotation:108.8,x:194.9,y:289.2},0).wait(1).to({rotation:110.1,x:195,y:289.3},0).wait(1).to({rotation:111.3,x:195.1,y:289.4},0).wait(1).to({rotation:112.6},0).wait(1).to({rotation:113.8,x:195},0).wait(1).to({rotation:115.1},0).wait(1).to({rotation:116.3},0).wait(1).to({rotation:117.6},0).wait(1).to({rotation:118.8},0).wait(1).to({rotation:120.1},0).wait(1).to({rotation:121.3,x:195.1},0).wait(1).to({rotation:122.6,x:195},0).wait(1).to({rotation:123.8,y:289.3},0).wait(1).to({rotation:125.1},0).wait(1).to({rotation:126.3,y:289.4},0).wait(1).to({rotation:127.6},0).wait(1).to({rotation:128.8,x:195.1},0).wait(1).to({rotation:130.1,x:195},0).wait(1).to({rotation:131.3},0).wait(1).to({rotation:132.6,x:195.1},0).wait(1).to({rotation:133.8,x:195},0).wait(1).to({rotation:135.1,x:195.1},0).wait(1).to({rotation:136.3},0).wait(1).to({rotation:137.6,x:195},0).wait(1).to({rotation:138.8},0).wait(1).to({rotation:140.1,x:195.1},0).wait(1).to({rotation:141.3,x:195},0).wait(1).to({rotation:142.6,x:195.1},0).wait(1).to({rotation:143.9,x:195},0).wait(1).to({rotation:145.1},0).wait(1).to({rotation:146.4,x:195.1},0).wait(1).to({rotation:147.6,x:195},0).wait(1).to({rotation:148.9},0).wait(1).to({rotation:150.1,x:195.1},0).wait(1).to({rotation:151.4,x:195},0).wait(1).to({rotation:152.6},0).wait(1).to({rotation:153.9},0).wait(1).to({rotation:155.1},0).wait(1).to({rotation:156.4,x:195.1},0).wait(1).to({rotation:157.6,x:195},0).wait(1).to({rotation:158.9},0).wait(1).to({rotation:160.1},0).wait(1).to({rotation:161.4},0).wait(1).to({rotation:162.6,x:195.1},0).wait(1).to({rotation:163.9,x:195},0).wait(1).to({rotation:165.1},0).wait(1).to({rotation:166.4,y:289.5},0).wait(1).to({rotation:167.6,y:289.4},0).wait(1).to({rotation:168.9},0).wait(1).to({rotation:170.1},0).wait(1).to({rotation:171.4},0).wait(1).to({rotation:172.6,x:195.1,y:289.5},0).wait(1).to({rotation:173.9,x:195},0).wait(1).to({rotation:175.1,y:289.4},0).wait(1).to({rotation:176.4},0).wait(1).to({rotation:177.6},0).wait(1).to({rotation:178.9},0).wait(1).to({rotation:180.1},0).wait(1).to({rotation:181.4},0).wait(1).to({rotation:182.6},0).wait(1).to({rotation:183.9},0).wait(1).to({rotation:185.1},0).wait(1).to({rotation:186.4},0).wait(1).to({rotation:187.6,y:289.5},0).wait(1).to({rotation:188.9,y:289.4},0).wait(1).to({rotation:190.1},0).wait(1).to({rotation:191.4},0).wait(1).to({rotation:192.6},0).wait(1).to({rotation:193.9,y:289.5},0).wait(1).to({rotation:195.1,y:289.4},0).wait(1).to({rotation:196.4},0).wait(1).to({rotation:197.6},0).wait(1).to({rotation:198.9},0).wait(1).to({rotation:200.1,y:289.5},0).wait(1).to({rotation:201.4},0).wait(1).to({rotation:202.6,y:289.4},0).wait(1).to({rotation:203.9,y:289.5},0).wait(1).to({rotation:205.1,y:289.4},0).wait(1).to({rotation:206.4,y:289.5},0).wait(1).to({rotation:207.6},0).wait(1).to({rotation:208.9,y:289.4},0).wait(1).to({rotation:210.1},0).wait(1).to({rotation:211.4,y:289.5},0).wait(1).to({rotation:212.6,y:289.4},0).wait(1).to({rotation:213.9},0).wait(1).to({rotation:215.1},0).wait(1).to({rotation:216.4},0).wait(1).to({rotation:217.7,y:289.5},0).wait(1).to({rotation:218.9},0).wait(1).to({rotation:220.2,y:289.4},0).wait(1).to({rotation:221.4},0).wait(1).to({rotation:222.7},0).wait(1).to({rotation:223.9,y:289.5},0).wait(1).to({rotation:225.2,x:194.9,y:289.4},0).wait(1).to({rotation:226.4,x:195},0).wait(1).to({rotation:227.7,x:194.9,y:289.5},0).wait(1).to({rotation:228.9,x:195,y:289.4},0).wait(1).to({rotation:230.2},0).wait(1).to({rotation:231.4,x:194.9,y:289.5},0).wait(1).to({rotation:232.7},0).wait(1).to({rotation:233.9,x:195},0).wait(1).to({rotation:235.2},0).wait(1).to({rotation:236.4,x:194.9},0).wait(1).to({rotation:237.7,x:195,y:289.4},0).wait(1).to({rotation:238.9,x:194.9,y:289.5},0).wait(1).to({rotation:240.2,x:195},0).wait(1).to({rotation:241.4,x:194.9},0).wait(1).to({rotation:242.7,y:289.4},0).wait(1).to({rotation:243.9},0).wait(1).to({rotation:245.2,x:195},0).wait(1).to({rotation:246.4,x:194.9},0).wait(1).to({rotation:247.7},0).wait(1).to({rotation:248.9,x:195},0).wait(1).to({rotation:250.2,x:194.9},0).wait(1).to({rotation:251.4,y:289.5},0).wait(1).to({rotation:252.7,x:195},0).wait(1).to({rotation:253.9,x:194.9,y:289.4},0).wait(1).to({rotation:255.2,y:289.5},0).wait(1).to({rotation:256.4,x:195,y:289.4},0).wait(1).to({rotation:257.7,y:289.5},0).wait(1).to({rotation:258.9,x:194.9,y:289.4},0).wait(1).to({rotation:260.2},0).wait(1).to({rotation:261.4},0).wait(1).to({rotation:262.7,y:289.5},0).wait(1).to({rotation:263.9,x:195},0).wait(1).to({rotation:265.2,x:194.9,y:289.4},0).wait(1).to({rotation:266.4},0).wait(1).to({rotation:267.7,y:289.5},0).wait(1).to({rotation:268.9,y:289.4},0).wait(1).to({rotation:270.2},0).wait(1).to({rotation:271.4},0).wait(1).to({rotation:272.7,y:289.5},0).wait(1).to({rotation:273.9,y:289.4},0).wait(1).to({rotation:275.2},0).wait(1).to({rotation:276.4},0).wait(1).to({rotation:277.7,y:289.5},0).wait(1).to({rotation:278.9,y:289.4},0).wait(1).to({rotation:280.2},0).wait(1).to({rotation:281.4},0).wait(1).to({rotation:282.7},0).wait(1).to({rotation:283.9},0).wait(1).to({rotation:285.2},0).wait(1).to({rotation:286.4},0).wait(1).to({rotation:287.7,y:289.5},0).wait(1).to({rotation:289,y:289.4},0).wait(1).to({rotation:290.2},0).wait(1).to({rotation:291.5},0).wait(1).to({rotation:292.7},0).wait(1).to({rotation:294},0).wait(1).to({rotation:295.2},0).wait(1).to({rotation:296.5},0).wait(1).to({rotation:297.7},0).wait(1).to({rotation:299},0).wait(1).to({rotation:300.2},0).wait(1).to({rotation:301.5},0).wait(1).to({rotation:302.7},0).wait(1).to({rotation:304},0).wait(1).to({rotation:305.2},0).wait(1).to({rotation:306.5},0).wait(1).to({rotation:307.7},0).wait(1).to({rotation:309,y:289.3},0).wait(1).to({rotation:310.2,y:289.4},0).wait(1).to({rotation:311.5},0).wait(1).to({rotation:312.7},0).wait(1).to({rotation:314},0).wait(1).to({rotation:315.2},0).wait(1).to({rotation:316.5},0).wait(1).to({rotation:317.7},0).wait(1).to({rotation:319},0).wait(1).to({rotation:320.2},0).wait(1).to({rotation:321.5},0).wait(1).to({rotation:322.7},0).wait(1).to({rotation:324},0).wait(1).to({rotation:325.2,y:289.3},0).wait(1).to({rotation:326.5,y:289.4},0).wait(1).to({rotation:327.7},0).wait(1).to({rotation:329},0).wait(1).to({rotation:330.2},0).wait(1).to({rotation:331.5,y:289.3},0).wait(1).to({rotation:332.7},0).wait(1).to({rotation:334},0).wait(1).to({rotation:335.2},0).wait(1).to({rotation:336.5,y:289.4},0).wait(1).to({rotation:337.7},0).wait(1).to({rotation:339,y:289.3},0).wait(1).to({rotation:340.2},0).wait(1).to({rotation:341.5,y:289.4},0).wait(1).to({rotation:342.7,y:289.3},0).wait(1).to({rotation:344},0).wait(1).to({rotation:345.2,y:289.4},0).wait(1).to({rotation:346.5,y:289.3},0).wait(1).to({rotation:347.7,y:289.4},0).wait(1).to({rotation:349,y:289.3},0).wait(1).to({rotation:350.2,y:289.4},0).wait(1).to({rotation:351.5,y:289.3},0).wait(1).to({rotation:352.7},0).wait(1).to({rotation:354,y:289.4},0).wait(1).to({rotation:355.2,y:289.3},0).wait(1).to({rotation:356.5},0).wait(1).to({rotation:357.7},0).wait(1).to({rotation:359,y:289.4},0).wait(1));

	// home
	this.instance_9 = new lib.home();
	this.instance_9.parent = this;
	this.instance_9.setTransform(244,384);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(288));

	// Layer_18
	this.instance_10 = new lib.bear3();
	this.instance_10.parent = this;
	this.instance_10.setTransform(684,662,1,1,0,0,0,36,49);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(71).to({_off:false},0).wait(217));

	// bg
	this.instance_11 = new lib.bg();
	this.instance_11.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(288));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(960,541,1920.9,1080.5);
// library properties:
lib.properties = {
	id: '222E8972BD78FE4D814D334F7DCCD6DB',
	width: 1920,
	height: 1082,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/banner_atlas_.png", id:"banner_atlas_"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['222E8972BD78FE4D814D334F7DCCD6DB'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}



})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;