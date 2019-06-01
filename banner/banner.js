(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"banner_atlas_P_", frames: [[602,1376,601,601],[1205,1932,601,601],[1304,1257,600,673],[0,1135,600,673],[0,0,600,1133],[602,534,700,840],[1304,534,700,721],[1205,1376,83,118],[602,0,1274,532],[1205,1496,41,41],[0,1810,355,74]]}
];


// symbols:



(lib.bbq01 = function() {
	this.spriteSheet = ss["banner_atlas_P_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.bbq02 = function() {
	this.spriteSheet = ss["banner_atlas_P_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.bearwalk1 = function() {
	this.spriteSheet = ss["banner_atlas_P_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.bearwalk2 = function() {
	this.spriteSheet = ss["banner_atlas_P_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.bear1 = function() {
	this.spriteSheet = ss["banner_atlas_P_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.bear2 = function() {
	this.spriteSheet = ss["banner_atlas_P_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.bear3 = function() {
	this.spriteSheet = ss["banner_atlas_P_"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.bg = function() {
	this.initialize(img.bg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1920,900);


(lib.Bitmap5 = function() {
	this.spriteSheet = ss["banner_atlas_P_"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.home = function() {
	this.spriteSheet = ss["banner_atlas_P_"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.stary = function() {
	this.spriteSheet = ss["banner_atlas_P_"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.treefront = function() {
	this.spriteSheet = ss["banner_atlas_P_"];
	this.gotoAndStop(10);
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


(lib.Symbol7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_3
	this.instance = new lib.bbq01();
	this.instance.parent = this;
	this.instance.setTransform(-301,-301);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(50).to({_off:false},0).wait(50));

	// Layer_1
	this.instance_1 = new lib.bbq02();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-301,-301);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:true},50).wait(50));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-301,-301,601,601);


(lib.Symbol4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.bear3();
	this.instance.parent = this;
	this.instance.setTransform(11,6,0.162,0.162);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol4, new cjs.Rectangle(11,6,113.1,116.5), null);


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.bear2();
	this.instance.parent = this;
	this.instance.setTransform(7,36,0.165,0.165);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol3, new cjs.Rectangle(7,36,115.4,138.4), null);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.bear1();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.097,0.097);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(0,0,58.2,109.8), null);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.stary();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(0,0,41,41), null);


(lib.bearwalk = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_3
	this.instance = new lib.bearwalk2();
	this.instance.parent = this;
	this.instance.setTransform(-300,-337);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(10).to({_off:false},0).wait(10));

	// Layer_1
	this.instance_1 = new lib.bearwalk1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-300,-337);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:true},10).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-300,-337,600,673);


(lib.star = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Symbol1();
	this.instance.parent = this;
	this.instance.setTransform(0,0,1,1,0,0,0,20.5,20);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regY:20.5,rotation:0.7,x:0.1,y:0.5},0).wait(1).to({rotation:1.4},0).wait(1).to({rotation:2.2},0).wait(1).to({rotation:2.9,x:0},0).wait(1).to({rotation:3.6,y:0.6},0).wait(1).to({rotation:4.3},0).wait(1).to({rotation:5,y:0.5},0).wait(1).to({rotation:5.8},0).wait(1).to({rotation:6.5},0).wait(1).to({rotation:7.2},0).wait(1).to({rotation:7.9},0).wait(1).to({rotation:8.6,x:-0.1},0).wait(1).to({rotation:9.4,x:0,y:0.6},0).wait(1).to({rotation:10.1},0).wait(1).to({rotation:10.8},0).wait(1).to({rotation:11.5},0).wait(1).to({rotation:12.2},0).wait(1).to({rotation:12.9},0).wait(1).to({rotation:13.7,x:-0.1,y:0.5},0).wait(1).to({rotation:14.4},0).wait(1).to({rotation:15.1},0).wait(1).to({rotation:15.8},0).wait(1).to({rotation:16.5},0).wait(1).to({rotation:17.3,y:0.6},0).wait(1).to({rotation:18,y:0.5},0).wait(1).to({rotation:18.7},0).wait(1).to({rotation:19.4},0).wait(1).to({rotation:20.1},0).wait(1).to({rotation:20.9},0).wait(1).to({rotation:21.6,x:-0.2},0).wait(1).to({rotation:22.3},0).wait(1).to({rotation:23,x:-0.1},0).wait(1).to({rotation:23.7,x:-0.2},0).wait(1).to({rotation:24.5},0).wait(1).to({rotation:25.2,x:-0.1},0).wait(1).to({rotation:25.9,x:-0.2},0).wait(1).to({rotation:26.6},0).wait(1).to({rotation:27.3},0).wait(1).to({rotation:28.1},0).wait(1).to({rotation:28.8},0).wait(1).to({rotation:29.5},0).wait(1).to({rotation:30.2},0).wait(1).to({rotation:30.9},0).wait(1).to({rotation:31.7},0).wait(1).to({rotation:32.4,x:-0.3},0).wait(1).to({rotation:33.1},0).wait(1).to({rotation:33.8,x:-0.2},0).wait(1).to({rotation:34.5},0).wait(1).to({rotation:35.3},0).wait(1).to({rotation:36},0).wait(1).to({rotation:36.7},0).wait(1).to({rotation:37.4},0).wait(1).to({rotation:38.1},0).wait(1).to({rotation:38.8,x:-0.3,y:0.4},0).wait(1).to({rotation:39.6},0).wait(1).to({rotation:40.3},0).wait(1).to({rotation:41},0).wait(1).to({rotation:41.7},0).wait(1).to({rotation:42.4,y:0.5},0).wait(1).to({rotation:43.2,y:0.4},0).wait(1).to({rotation:43.9},0).wait(1).to({rotation:44.6},0).wait(1).to({rotation:45.3},0).wait(1).to({rotation:46},0).wait(1).to({rotation:46.8,x:-0.4},0).wait(1).to({rotation:47.5},0).wait(1).to({rotation:48.2},0).wait(1).to({rotation:48.9},0).wait(1).to({rotation:49.6,x:-0.3},0).wait(1).to({rotation:50.4,x:-0.4},0).wait(1).to({rotation:51.1},0).wait(1).to({rotation:51.8},0).wait(1).to({rotation:52.5,y:0.3},0).wait(1).to({rotation:53.2},0).wait(1).to({rotation:54,y:0.4},0).wait(1).to({rotation:54.7},0).wait(1).to({rotation:55.4,y:0.3},0).wait(1).to({rotation:56.1},0).wait(1).to({rotation:56.8},0).wait(1).to({rotation:57.6},0).wait(1).to({rotation:58.3},0).wait(1).to({rotation:59},0).wait(1).to({rotation:59.7},0).wait(1).to({rotation:60.4,x:-0.5},0).wait(1).to({rotation:61.2,x:-0.4},0).wait(1).to({rotation:61.9,x:-0.5},0).wait(1).to({rotation:62.6,x:-0.4},0).wait(1).to({rotation:63.3},0).wait(1).to({rotation:64},0).wait(1).to({rotation:64.7,x:-0.5},0).wait(1).to({rotation:65.5,y:0.2},0).wait(1).to({rotation:66.2,x:-0.4,y:0.3},0).wait(1).to({rotation:66.9,y:0.2},0).wait(1).to({rotation:67.6,x:-0.5},0).wait(1).to({rotation:68.3},0).wait(1).to({rotation:69.1},0).wait(1).to({rotation:69.8,y:0.3},0).wait(1).to({rotation:70.5,x:-0.4,y:0.2},0).wait(1).to({rotation:71.2,x:-0.5},0).wait(1).to({rotation:71.9},0).wait(1).to({rotation:72.7},0).wait(1).to({rotation:73.4},0).wait(1).to({rotation:74.1},0).wait(1).to({rotation:74.8},0).wait(1).to({rotation:75.5},0).wait(1).to({rotation:76.3,y:0.1},0).wait(1).to({rotation:77},0).wait(1).to({rotation:77.7,y:0.2},0).wait(1).to({rotation:78.4},0).wait(1).to({rotation:79.1,y:0.1},0).wait(1).to({rotation:79.9},0).wait(1).to({rotation:80.6},0).wait(1).to({rotation:81.3},0).wait(1).to({rotation:82},0).wait(1).to({rotation:82.7},0).wait(1).to({rotation:83.5},0).wait(1).to({rotation:84.2},0).wait(1).to({rotation:84.9},0).wait(1).to({rotation:85.6},0).wait(1).to({rotation:86.3},0).wait(1).to({rotation:87.1,y:0},0).wait(1).to({rotation:87.8,y:0.1},0).wait(1).to({rotation:88.5},0).wait(1).to({rotation:89.2},0).wait(1).to({rotation:89.9},0).wait(1).to({rotation:90.6,y:0},0).wait(1).to({rotation:91.4},0).wait(1).to({rotation:92.1},0).wait(1).to({rotation:92.8,y:0.1},0).wait(1).to({rotation:93.5,y:0},0).wait(1).to({rotation:94.2},0).wait(1).to({rotation:95},0).wait(1).to({rotation:95.7},0).wait(1).to({rotation:96.4},0).wait(1).to({rotation:97.1},0).wait(1).to({rotation:97.8},0).wait(1).to({rotation:98.6},0).wait(1).to({rotation:99.3},0).wait(1).to({rotation:100},0).wait(1).to({rotation:100.7},0).wait(1).to({rotation:101.4},0).wait(1).to({rotation:102.2},0).wait(1).to({rotation:102.9},0).wait(1).to({rotation:103.6},0).wait(1).to({rotation:104.3,y:-0.1},0).wait(1).to({rotation:105},0).wait(1).to({rotation:105.8,y:0},0).wait(1).to({rotation:106.5,y:-0.1},0).wait(1).to({rotation:107.2},0).wait(1).to({rotation:107.9},0).wait(1).to({rotation:108.6},0).wait(1).to({rotation:109.4},0).wait(1).to({rotation:110.1},0).wait(1).to({rotation:110.8,y:-0.2},0).wait(1).to({rotation:111.5,x:-0.4,y:-0.1},0).wait(1).to({rotation:112.2,x:-0.5},0).wait(1).to({rotation:113},0).wait(1).to({rotation:113.7},0).wait(1).to({rotation:114.4,x:-0.4,y:-0.2},0).wait(1).to({rotation:115.1},0).wait(1).to({rotation:115.8,x:-0.5},0).wait(1).to({rotation:116.5,x:-0.4,y:-0.1},0).wait(1).to({rotation:117.3,y:-0.2},0).wait(1).to({rotation:118},0).wait(1).to({rotation:118.7,x:-0.5},0).wait(1).to({rotation:119.4,x:-0.4},0).wait(1).to({rotation:120.1,x:-0.5},0).wait(1).to({rotation:120.9,x:-0.4},0).wait(1).to({rotation:121.6},0).wait(1).to({rotation:122.3},0).wait(1).to({rotation:123},0).wait(1).to({rotation:123.7},0).wait(1).to({rotation:124.5},0).wait(1).to({rotation:125.2},0).wait(1).to({rotation:125.9},0).wait(1).to({rotation:126.6,y:-0.3},0).wait(1).to({rotation:127.3},0).wait(1).to({rotation:128.1},0).wait(1).to({rotation:128.8},0).wait(1).to({rotation:129.5},0).wait(1).to({rotation:130.2},0).wait(1).to({rotation:130.9},0).wait(1).to({rotation:131.7},0).wait(1).to({rotation:132.4},0).wait(1).to({rotation:133.1,x:-0.3},0).wait(1).to({rotation:133.8,x:-0.4},0).wait(1).to({rotation:134.5},0).wait(1).to({rotation:135.3},0).wait(1).to({rotation:136,y:-0.4},0).wait(1).to({rotation:136.7,x:-0.3},0).wait(1).to({rotation:137.4},0).wait(1).to({rotation:138.1,y:-0.3},0).wait(1).to({rotation:138.9,x:-0.4,y:-0.4},0).wait(1).to({rotation:139.6,x:-0.3},0).wait(1).to({rotation:140.3},0).wait(1).to({rotation:141},0).wait(1).to({rotation:141.7},0).wait(1).to({rotation:142.4},0).wait(1).to({rotation:143.2},0).wait(1).to({rotation:143.9},0).wait(1).to({rotation:144.6},0).wait(1).to({rotation:145.3},0).wait(1).to({rotation:146},0).wait(1).to({rotation:146.8},0).wait(1).to({rotation:147.5,y:-0.5},0).wait(1).to({rotation:148.2,x:-0.2,y:-0.4},0).wait(1).to({rotation:148.9,x:-0.3},0).wait(1).to({rotation:149.6,y:-0.5},0).wait(1).to({rotation:150.4,x:-0.2,y:-0.4},0).wait(1).to({rotation:151.1,y:-0.5},0).wait(1).to({rotation:151.8,y:-0.4},0).wait(1).to({rotation:152.5,y:-0.5},0).wait(1).to({rotation:153.2,y:-0.4},0).wait(1).to({rotation:154},0).wait(1).to({rotation:154.7,y:-0.5},0).wait(1).to({rotation:155.4,y:-0.4},0).wait(1).to({rotation:156.1,y:-0.5},0).wait(1).to({rotation:156.8},0).wait(1).to({rotation:157.6,y:-0.4},0).wait(1).to({rotation:158.3,y:-0.5},0).wait(1).to({rotation:159},0).wait(1).to({rotation:159.7},0).wait(1).to({rotation:160.4,x:-0.1},0).wait(1).to({rotation:161.2},0).wait(1).to({rotation:161.9,x:-0.2},0).wait(1).to({rotation:162.6,y:-0.4},0).wait(1).to({rotation:163.3,y:-0.5},0).wait(1).to({rotation:164,x:-0.1},0).wait(1).to({rotation:164.8,x:-0.2},0).wait(1).to({rotation:165.5,x:-0.1},0).wait(1).to({rotation:166.2},0).wait(1).to({rotation:166.9},0).wait(1).to({rotation:167.6},0).wait(1).to({rotation:168.3},0).wait(1).to({rotation:169.1},0).wait(1).to({rotation:169.8},0).wait(1).to({rotation:170.5},0).wait(1).to({rotation:171.2},0).wait(1).to({rotation:171.9},0).wait(1).to({rotation:172.7},0).wait(1).to({rotation:173.4,x:0},0).wait(1).to({rotation:174.1,x:-0.1},0).wait(1).to({rotation:174.8,x:0},0).wait(1).to({rotation:175.5,x:-0.1},0).wait(1).to({rotation:176.3,x:0},0).wait(1).to({rotation:177},0).wait(1).to({rotation:177.7},0).wait(1).to({rotation:178.4},0).wait(1).to({rotation:179.1},0).wait(1).to({rotation:179.9},0).wait(1).to({rotation:180.6},0).wait(1).to({rotation:181.3},0).wait(1).to({rotation:182},0).wait(1).to({rotation:182.7},0).wait(1).to({rotation:183.5,x:0.1},0).wait(1).to({rotation:184.2,x:0},0).wait(1).to({rotation:184.9,x:0.1},0).wait(1).to({rotation:185.6,x:0},0).wait(1).to({rotation:186.3,x:0.1},0).wait(1).to({rotation:187.1,x:0},0).wait(1).to({rotation:187.8,x:0.1},0).wait(1).to({rotation:188.5},0).wait(1).to({rotation:189.2},0).wait(1).to({rotation:189.9},0).wait(1).to({rotation:190.7},0).wait(1).to({rotation:191.4},0).wait(1).to({rotation:192.1},0).wait(1).to({rotation:192.8},0).wait(1).to({rotation:193.5},0).wait(1).to({rotation:194.2},0).wait(1).to({rotation:195},0).wait(1).to({rotation:195.7},0).wait(1).to({rotation:196.4,x:0.2},0).wait(1).to({rotation:197.1},0).wait(1).to({rotation:197.8},0).wait(1).to({rotation:198.6},0).wait(1).to({rotation:199.3,x:0.1},0).wait(1).to({rotation:200,x:0.2,y:-0.4},0).wait(1).to({rotation:200.7},0).wait(1).to({rotation:201.4,y:-0.5},0).wait(1).to({rotation:202.2},0).wait(1).to({rotation:202.9},0).wait(1).to({rotation:203.6},0).wait(1).to({rotation:204.3},0).wait(1).to({rotation:205,x:0.3},0).wait(1).to({rotation:205.8,x:0.2,y:-0.4},0).wait(1).to({rotation:206.5,y:-0.5},0).wait(1).to({rotation:207.2,y:-0.4},0).wait(1).to({rotation:207.9,x:0.3},0).wait(1).to({rotation:208.6,x:0.2},0).wait(1).to({rotation:209.4,x:0.3},0).wait(1).to({rotation:210.1,x:0.2},0).wait(1).to({rotation:210.8,x:0.3},0).wait(1).to({rotation:211.5,x:0.2},0).wait(1).to({rotation:212.2,x:0.3},0).wait(1).to({rotation:213},0).wait(1).to({rotation:213.7},0).wait(1).to({rotation:214.4},0).wait(1).to({rotation:215.1},0).wait(1).to({rotation:215.8},0).wait(1).to({rotation:216.6},0).wait(1).to({rotation:217.3},0).wait(1).to({rotation:218},0).wait(1).to({rotation:218.7},0).wait(1).to({rotation:219.4},0).wait(1).to({rotation:220.1,y:-0.3},0).wait(1).to({rotation:220.9,y:-0.4},0).wait(1).to({rotation:221.6},0).wait(1).to({rotation:222.3},0).wait(1).to({rotation:223},0).wait(1).to({rotation:223.7,y:-0.3},0).wait(1).to({rotation:224.5,y:-0.4},0).wait(1).to({rotation:225.2,x:0.4},0).wait(1).to({rotation:225.9,y:-0.3},0).wait(1).to({rotation:226.6,y:-0.4},0).wait(1).to({rotation:227.3},0).wait(1).to({rotation:228.1,y:-0.3},0).wait(1).to({rotation:228.8},0).wait(1).to({rotation:229.5,x:0.5},0).wait(1).to({rotation:230.2,x:0.4},0).wait(1).to({rotation:230.9},0).wait(1).to({rotation:231.7,x:0.5},0).wait(1).to({rotation:232.4},0).wait(1).to({rotation:233.1},0).wait(1).to({rotation:233.8},0).wait(1).to({rotation:234.5},0).wait(1).to({rotation:235.3,x:0.4},0).wait(1).to({rotation:236,x:0.5},0).wait(1).to({rotation:236.7},0).wait(1).to({rotation:237.4,x:0.4},0).wait(1).to({rotation:238.1,x:0.5,y:-0.2},0).wait(1).to({rotation:238.9,y:-0.3},0).wait(1).to({rotation:239.6},0).wait(1).to({rotation:240.3,y:-0.2},0).wait(1).to({rotation:241,y:-0.3},0).wait(1).to({rotation:241.7,y:-0.2},0).wait(1).to({rotation:242.5,y:-0.3},0).wait(1).to({rotation:243.2,y:-0.2},0).wait(1).to({rotation:243.9},0).wait(1).to({rotation:244.6},0).wait(1).to({rotation:245.3},0).wait(1).to({rotation:246},0).wait(1).to({rotation:246.8},0).wait(1).to({rotation:247.5},0).wait(1).to({rotation:248.2},0).wait(1).to({rotation:248.9,x:0.6},0).wait(1).to({rotation:249.6,x:0.5},0).wait(1).to({rotation:250.4},0).wait(1).to({rotation:251.1},0).wait(1).to({rotation:251.8,y:-0.1},0).wait(1).to({rotation:252.5},0).wait(1).to({rotation:253.2,x:0.6,y:-0.2},0).wait(1).to({rotation:254,x:0.5,y:-0.1},0).wait(1).to({rotation:254.7},0).wait(1).to({rotation:255.4,x:0.6},0).wait(1).to({rotation:256.1},0).wait(1).to({rotation:256.8,x:0.5},0).wait(1).to({rotation:257.6},0).wait(1).to({rotation:258.3},0).wait(1).to({rotation:259},0).wait(1).to({rotation:259.7},0).wait(1).to({rotation:260.4},0).wait(1).to({rotation:261.2},0).wait(1).to({rotation:261.9},0).wait(1).to({rotation:262.6,x:0.6},0).wait(1).to({rotation:263.3,x:0.5},0).wait(1).to({rotation:264},0).wait(1).to({rotation:264.8,x:0.6,y:0},0).wait(1).to({rotation:265.5},0).wait(1).to({rotation:266.2},0).wait(1).to({rotation:266.9,x:0.5},0).wait(1).to({rotation:267.6,x:0.6},0).wait(1).to({rotation:268.4,x:0.5},0).wait(1).to({rotation:269.1},0).wait(1).to({rotation:269.8},0).wait(1).to({rotation:270.5,x:0.6},0).wait(1).to({rotation:271.2},0).wait(1).to({rotation:271.9},0).wait(1).to({rotation:272.7},0).wait(1).to({rotation:273.4,x:0.5},0).wait(1).to({rotation:274.1},0).wait(1).to({rotation:274.8},0).wait(1).to({rotation:275.5,x:0.6,y:0.1},0).wait(1).to({rotation:276.3,y:0},0).wait(1).to({rotation:277,y:0.1},0).wait(1).to({rotation:277.7,x:0.5},0).wait(1).to({rotation:278.4,x:0.6,y:0},0).wait(1).to({rotation:279.1,x:0.5,y:0.1},0).wait(1).to({rotation:279.9},0).wait(1).to({rotation:280.6},0).wait(1).to({rotation:281.3},0).wait(1).to({rotation:282},0).wait(1).to({rotation:282.7},0).wait(1).to({rotation:283.5},0).wait(1).to({rotation:284.2},0).wait(1).to({rotation:284.9},0).wait(1).to({rotation:285.6},0).wait(1).to({rotation:286.3},0).wait(1).to({rotation:287.1},0).wait(1).to({rotation:287.8,y:0.2},0).wait(1).to({rotation:288.5,y:0.1},0).wait(1).to({rotation:289.2,y:0.2},0).wait(1).to({rotation:289.9},0).wait(1).to({rotation:290.7,x:0.6},0).wait(1).to({rotation:291.4,x:0.5},0).wait(1).to({rotation:292.1},0).wait(1).to({rotation:292.8},0).wait(1).to({rotation:293.5},0).wait(1).to({rotation:294.3},0).wait(1).to({rotation:295},0).wait(1).to({rotation:295.7,y:0.3},0).wait(1).to({rotation:296.4,y:0.2},0).wait(1).to({rotation:297.1},0).wait(1).to({rotation:297.8},0).wait(1).to({rotation:298.6},0).wait(1).to({rotation:299.3},0).wait(1).to({rotation:300,y:0.3},0).wait(1).to({rotation:300.7,x:0.4},0).wait(1).to({rotation:301.4,x:0.5},0).wait(1).to({rotation:302.2},0).wait(1).to({rotation:302.9},0).wait(1).to({rotation:303.6,x:0.4},0).wait(1).to({rotation:304.3,x:0.5},0).wait(1).to({rotation:305},0).wait(1).to({rotation:305.8},0).wait(1).to({rotation:306.5},0).wait(1).to({rotation:307.2},0).wait(1).to({rotation:307.9,x:0.4},0).wait(1).to({rotation:308.6},0).wait(1).to({rotation:309.4},0).wait(1).to({rotation:310.1},0).wait(1).to({rotation:310.8,y:0.4},0).wait(1).to({rotation:311.5,y:0.3},0).wait(1).to({rotation:312.2,x:0.5},0).wait(1).to({rotation:313,x:0.4},0).wait(1).to({rotation:313.7},0).wait(1).to({rotation:314.4,y:0.4},0).wait(1).to({rotation:315.1,y:0.3},0).wait(1).to({rotation:315.8,y:0.4},0).wait(1).to({rotation:316.6},0).wait(1).to({rotation:317.3},0).wait(1).to({rotation:318,y:0.5},0).wait(1).to({rotation:318.7,y:0.4},0).wait(1).to({rotation:319.4},0).wait(1).to({rotation:320.2},0).wait(1).to({rotation:320.9},0).wait(1).to({rotation:321.6},0).wait(1).to({rotation:322.3,x:0.3},0).wait(1).to({rotation:323,x:0.4,y:0.5},0).wait(1).to({rotation:323.7,x:0.3},0).wait(1).to({rotation:324.5},0).wait(1).to({rotation:325.2,x:0.4},0).wait(1).to({rotation:325.9},0).wait(1).to({rotation:326.6,x:0.3,y:0.4},0).wait(1).to({rotation:327.3,y:0.5},0).wait(1).to({rotation:328.1},0).wait(1).to({rotation:328.8},0).wait(1).to({rotation:329.5},0).wait(1).to({rotation:330.2},0).wait(1).to({rotation:330.9},0).wait(1).to({rotation:331.7},0).wait(1).to({rotation:332.4},0).wait(1).to({rotation:333.1},0).wait(1).to({rotation:333.8},0).wait(1).to({rotation:334.5,x:0.2},0).wait(1).to({rotation:335.3,x:0.3},0).wait(1).to({rotation:336,x:0.2},0).wait(1).to({rotation:336.7,x:0.3},0).wait(1).to({rotation:337.4,x:0.2,y:0.6},0).wait(1).to({rotation:338.1,x:0.3,y:0.5},0).wait(1).to({rotation:338.9,x:0.2},0).wait(1).to({rotation:339.6},0).wait(1).to({rotation:340.3},0).wait(1).to({rotation:341,y:0.6},0).wait(1).to({rotation:341.7,y:0.5},0).wait(1).to({rotation:342.5},0).wait(1).to({rotation:343.2},0).wait(1).to({rotation:343.9},0).wait(1).to({rotation:344.6},0).wait(1).to({rotation:345.3},0).wait(1).to({rotation:346.1},0).wait(1).to({rotation:346.8},0).wait(1).to({rotation:347.5},0).wait(1).to({rotation:348.2,x:0.1},0).wait(1).to({rotation:348.9},0).wait(1).to({rotation:349.6},0).wait(1).to({rotation:350.4},0).wait(1).to({rotation:351.1},0).wait(1).to({rotation:351.8,y:0.6},0).wait(1).to({rotation:352.5},0).wait(1).to({rotation:353.2},0).wait(1).to({rotation:354},0).wait(1).to({rotation:354.7,y:0.5},0).wait(1).to({rotation:355.4,y:0.6},0).wait(1).to({rotation:356.1,y:0.5},0).wait(1).to({rotation:356.8},0).wait(1).to({rotation:357.6,y:0.6},0).wait(1).to({rotation:358.3},0).wait(1).to({rotation:359},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-20.5,-20,41,41);


(lib.bear31 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.instance = new lib.Symbol4();
	this.instance.parent = this;
	this.instance.setTransform(84.5,65.2,1,0.243,0,0,0,53.5,105.8);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(14).to({_off:false},0).wait(1).to({regX:67.5,regY:64.2,scaleY:0.35,x:98.5,y:50.6},0).wait(1).to({scaleY:0.46,y:46.1},0).wait(1).to({scaleY:0.57,y:41.6},0).wait(1).to({scaleY:0.68,y:37.2},0).wait(1).to({scaleY:0.78,y:32.6},0).wait(1).to({scaleY:0.89,y:28.1},0).wait(1).to({scaleY:1,y:23.7},0).wait(209).to({scaleY:0.88,y:28.8},0).wait(1).to({scaleY:0.75,y:33.9},0).wait(1).to({scaleY:0.63,y:39.1},0).wait(1).to({scaleY:0.51,y:44.1},0).wait(1).to({scaleY:0.38,y:49.3},0).wait(1).to({scaleY:0.26,y:54.4},0).wait(15));

	// Layer_1
	this.instance_1 = new lib.Symbol3();
	this.instance_1.parent = this;
	this.instance_1.setTransform(11,74.4,1,0.204,0,0,0,64.5,173.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({regX:64.7,regY:105.2,scaleY:0.32,x:11.2,y:52.7},0).wait(1).to({scaleY:0.43,y:44.9},0).wait(1).to({scaleY:0.55,y:37.1},0).wait(1).to({scaleY:0.66,y:29.3},0).wait(1).to({scaleY:0.77,y:21.6},0).wait(1).to({scaleY:0.89,y:13.8},0).wait(1).to({scaleY:1,y:6},0).wait(218).to({scaleY:0.84,y:16.8},0).wait(1).to({scaleY:0.69,y:27.5},0).wait(1).to({scaleY:0.53,y:38.3},0).wait(1).to({scaleY:0.37,y:49},0).wait(1).to({scaleY:0.21,y:59.8},0).wait(21));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-46.5,46.4,115.4,28.2);


(lib.bear2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Symbol2();
	this.instance.parent = this;
	this.instance.setTransform(20.1,28.8,1,1,0,0,0,57.1,77.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:29.1,regY:54.9,rotation:-1.6,x:-12.7,y:6.8},0).wait(1).to({rotation:-3.2,x:-17.6,y:7.6},0).wait(1).to({rotation:-4.8,x:-22.4,y:8.3},0).wait(1).to({rotation:-6.4,x:-27.2,y:9.2},0).wait(1).to({rotation:-8,x:-32,y:10},0).wait(1).to({rotation:-9.6,x:-36.7,y:10.9},0).wait(1).to({rotation:-11.2,x:-41.5,y:11.8},0).wait(1).to({rotation:-12.8,x:-46.2,y:12.7},0).wait(1).to({rotation:-14.4,x:-50.9,y:13.6},0).wait(1).to({rotation:-16,x:-55.6,y:14.6},0).wait(1).to({rotation:-17.6,x:-60.1,y:15.5},0).wait(1).to({rotation:-19.2,x:-60.5,y:16.4},0).wait(1).to({rotation:-20.8,x:-60.8,y:17.4},0).wait(1).to({rotation:-22.4,x:-61.2,y:18.3},0).wait(1).to({rotation:-24,x:-61.4,y:19.2},0).wait(345).to({rotation:-18,x:-57.3,y:15.7},0).wait(1).to({rotation:-12,x:-52.9,y:12.2},0).wait(1).to({rotation:-6,x:-48,y:9},0).wait(1).to({rotation:0,x:-42.9,y:5.9},0).wait(1).to({x:-40},0).wait(1).to({x:-37},0).wait(1).to({x:-34.1},0).wait(1).to({x:-31.2},0).wait(1).to({x:-28.3},0).wait(1).to({x:-25.4},0).wait(1).to({x:-22.4},0).wait(1).to({x:-19.5},0).wait(1).to({x:-16.6},0).wait(1).to({x:-13.7},0).wait(1).to({x:-10.8},0).wait(1).to({x:-7.9},0).wait(25));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-37,-49,58.2,109.8);


// stage content:
(lib.Untitled2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_18
	this.instance = new lib.bearwalk();
	this.instance.parent = this;
	this.instance.setTransform(680.5,801.1,0.179,0.179);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regY:-0.5,x:681.9,y:801},0).wait(1).to({x:683.4},0).wait(1).to({x:684.9},0).wait(1).to({x:686.3},0).wait(1).to({x:687.8},0).wait(1).to({x:689.3},0).wait(1).to({x:690.8},0).wait(1).to({x:692.2},0).wait(1).to({x:693.7},0).wait(1).to({x:695.2},0).wait(1).to({x:696.7},0).wait(1).to({x:698.1},0).wait(1).to({x:699.6},0).wait(1).to({x:701.1},0).wait(1).to({x:702.6},0).wait(1).to({x:704},0).wait(1).to({x:705.5},0).wait(1).to({x:707},0).wait(1).to({x:708.5},0).wait(1).to({x:709.9},0).wait(1).to({x:711.4},0).wait(1).to({x:712.9},0).wait(1).to({x:714.4},0).wait(1).to({x:715.8},0).wait(1).to({x:717.3},0).wait(1).to({x:718.8},0).wait(1).to({x:720.3},0).wait(1).to({x:721.7},0).wait(1).to({x:723.2},0).wait(1).to({x:724.7},0).wait(1).to({x:726.2},0).wait(1).to({x:727.6},0).wait(1).to({x:729.1},0).wait(1).to({x:730.6},0).wait(1).to({x:732.1},0).wait(1).to({x:733.5},0).wait(1).to({x:735},0).wait(1).to({x:736.5},0).wait(1).to({x:737.9},0).wait(1).to({x:739.4},0).wait(1).to({x:740.9},0).wait(1).to({x:742.4},0).wait(1).to({x:743.8},0).wait(1).to({x:745.3},0).wait(1).to({x:746.8},0).wait(1).to({x:748.3},0).wait(1).to({x:749.7},0).wait(1).to({x:751.2},0).wait(1).to({x:752.7},0).wait(1).to({x:754.2},0).wait(1).to({x:755.6},0).wait(1).to({x:757.1},0).wait(1).to({x:758.6},0).wait(1).to({x:760.1},0).wait(1).to({x:761.5},0).wait(1).to({x:763},0).wait(1).to({x:764.5},0).wait(1).to({x:766},0).wait(1).to({x:767.4},0).wait(1).to({x:768.9},0).wait(1).to({x:770.4},0).wait(1).to({x:771.9},0).wait(1).to({x:773.3},0).wait(1).to({x:774.8},0).wait(1).to({x:776.3},0).wait(1).to({x:777.8},0).wait(1).to({x:779.2},0).wait(1).to({x:780.7},0).wait(1).to({x:782.2},0).wait(1).to({x:783.7},0).wait(1).to({x:785.1},0).wait(1).to({x:786.6},0).wait(1).to({x:788.1},0).wait(1).to({x:789.5},0).wait(1).to({x:791},0).wait(1).to({x:792.5},0).wait(1).to({x:794},0).wait(1).to({x:795.4},0).wait(1).to({x:796.9},0).wait(1).to({x:798.4},0).wait(1).to({x:799.9},0).wait(1).to({x:801.3},0).wait(1).to({x:802.8},0).wait(1).to({x:804.3},0).wait(1).to({x:805.8},0).wait(1).to({x:807.2},0).wait(1).to({x:808.7},0).wait(1).to({x:810.2},0).wait(1).to({x:811.7},0).wait(1).to({x:813.1},0).wait(1).to({x:814.6},0).wait(1).to({x:816.1},0).wait(1).to({x:817.6},0).wait(1).to({x:819},0).wait(1).to({x:820.5},0).wait(1).to({x:822},0).wait(1).to({x:823.5},0).wait(1).to({x:824.9},0).wait(1).to({x:826.4},0).wait(1).to({x:827.9},0).wait(1).to({x:829.4},0).wait(1).to({x:830.8},0).wait(1).to({x:832.3},0).wait(1).to({x:833.8},0).wait(1).to({x:835.3},0).wait(1).to({x:836.7},0).wait(1).to({x:838.2},0).wait(1).to({x:839.7},0).wait(1).to({x:841.1},0).wait(1).to({x:842.6},0).wait(1).to({x:844.1},0).wait(1).to({x:845.6},0).wait(1).to({x:847},0).wait(1).to({x:848.5},0).wait(1).to({x:850},0).wait(1).to({x:851.5},0).wait(1).to({x:852.9},0).wait(1).to({x:854.4},0).wait(1).to({x:855.9},0).wait(1).to({x:857.4},0).wait(1).to({x:858.8},0).wait(1).to({x:860.3},0).wait(1).to({x:861.8},0).wait(1).to({x:863.3},0).wait(1).to({x:864.7},0).wait(1).to({x:866.2},0).wait(1).to({x:867.7},0).wait(1).to({x:869.2},0).wait(1).to({x:870.6},0).wait(1).to({x:872.1},0).wait(1).to({x:873.6},0).wait(1).to({x:875.1},0).wait(1).to({x:876.5},0).wait(1).to({x:878},0).wait(1).to({x:879.5},0).wait(1).to({x:881},0).wait(1).to({x:882.4},0).wait(1).to({x:883.9},0).wait(1).to({x:885.4},0).wait(1).to({x:886.9},0).wait(1).to({x:888.3},0).wait(1).to({x:889.8},0).wait(1).to({x:891.3},0).wait(1).to({x:892.7},0).wait(1).to({x:894.2},0).wait(1).to({x:895.7},0).wait(1).to({x:897.2},0).wait(1).to({x:898.6},0).wait(1).to({x:900.1},0).wait(1).to({x:901.6},0).wait(1).to({x:903.1},0).wait(1).to({x:904.5},0).wait(1).to({x:906},0).wait(1).to({x:907.5},0).wait(1).to({x:909},0).wait(1).to({x:910.4},0).wait(1).to({x:911.9},0).wait(1).to({x:913.4},0).wait(1).to({x:914.9},0).wait(1).to({x:916.3},0).wait(1).to({x:917.8},0).wait(1).to({x:919.3},0).wait(1).to({x:920.8},0).wait(1).to({x:922.2},0).wait(1).to({x:923.7},0).wait(1).to({x:925.2},0).wait(1).to({x:926.7},0).wait(1).to({x:928.1},0).wait(1).to({x:929.6},0).wait(1).to({x:931.1},0).wait(1).to({x:932.6},0).wait(1).to({x:934},0).wait(1).to({x:935.5},0).wait(1).to({x:937},0).wait(1).to({x:938.5},0).wait(1).to({x:939.9},0).wait(1).to({x:941.4},0).wait(1).to({x:942.9},0).wait(1).to({x:944.3},0).wait(1).to({x:945.8},0).wait(1).to({x:947.3},0).wait(1).to({x:948.8},0).wait(1).to({x:950.2},0).wait(1).to({x:951.7},0).wait(1).to({x:953.2},0).wait(1).to({x:954.7},0).wait(1).to({x:956.1},0).wait(1).to({x:957.6},0).wait(1).to({x:959.1},0).wait(1).to({x:960.6},0).wait(1).to({x:962},0).wait(1).to({x:963.5},0).wait(1).to({x:965},0).wait(1).to({x:966.5},0).wait(1).to({x:967.9},0).wait(1).to({x:969.4},0).wait(1).to({x:970.9},0).wait(1).to({x:972.4},0).wait(1).to({x:973.8},0).wait(1).to({x:975.3},0).wait(1).to({x:976.8},0).wait(1).to({x:978.3},0).wait(1).to({x:979.7},0).wait(1).to({x:981.2},0).wait(1).to({x:982.7},0).wait(1).to({x:984.2},0).wait(1).to({x:985.6},0).wait(1).to({x:987.1},0).wait(1).to({x:988.6},0).wait(1).to({x:990.1},0).wait(1).to({x:991.5},0).wait(1).to({x:993},0).wait(1).to({x:994.5},0).wait(1).to({x:995.9},0).wait(1).to({x:997.4},0).wait(1).to({x:998.9},0).wait(1).to({x:1000.4},0).wait(1).to({x:1001.8},0).wait(1).to({x:1003.3},0).wait(1).to({x:1004.8},0).wait(1).to({x:1006.3},0).wait(1).to({x:1007.7},0).wait(1).to({x:1009.2},0).wait(1).to({x:1010.7},0).wait(1).to({x:1012.2},0).wait(1).to({x:1013.6},0).wait(1).to({x:1015.1},0).wait(1).to({x:1016.6},0).wait(1).to({x:1018.1},0).wait(1).to({x:1019.5},0).wait(1).to({x:1021},0).wait(1).to({x:1022.5},0).wait(1).to({x:1024},0).wait(1).to({x:1025.4},0).wait(1).to({x:1026.9},0).wait(1).to({x:1028.4},0).wait(1).to({x:1029.9},0).wait(1).to({x:1031.3},0).wait(1).to({x:1032.8},0).wait(1).to({x:1034.3},0).wait(1).to({x:1035.8},0).wait(1).to({x:1037.2},0).wait(1).to({x:1038.7},0).wait(1).to({x:1040.2},0).wait(1).to({x:1041.7},0).wait(1).to({x:1043.1},0).wait(1).to({x:1044.6},0).wait(1).to({x:1046.1},0).wait(1).to({x:1047.6},0).wait(1).to({x:1046},0).wait(1).to({x:1044.5},0).wait(1).to({x:1042.9},0).wait(1).to({x:1041.4},0).wait(1).to({x:1039.8},0).wait(1).to({x:1038.3},0).wait(1).to({x:1036.7},0).wait(1).to({x:1035.2},0).wait(1).to({x:1033.7},0).wait(1).to({x:1032.1},0).wait(1).to({x:1030.6},0).wait(1).to({x:1029},0).wait(1).to({x:1027.5},0).wait(1).to({x:1025.9},0).wait(1).to({x:1024.4},0).wait(1).to({x:1022.9},0).wait(1).to({x:1021.3},0).wait(1).to({x:1019.8},0).wait(1).to({x:1018.2},0).wait(1).to({x:1016.7},0).wait(1).to({x:1015.1},0).wait(1).to({x:1013.6},0).wait(1).to({x:1012.1},0).wait(1).to({x:1010.5},0).wait(1).to({x:1009},0).wait(1).to({x:1007.4},0).wait(1).to({x:1005.9},0).wait(1).to({x:1004.3},0).wait(1).to({x:1002.8},0).wait(1).to({x:1001.2},0).wait(1).to({x:999.7},0).wait(1).to({x:998.2},0).wait(1).to({x:996.6},0).wait(1).to({x:995.1},0).wait(1).to({x:993.5},0).wait(1).to({x:992},0).wait(1).to({x:990.4},0).wait(1).to({x:988.9},0).wait(1).to({x:987.4},0).wait(1).to({x:985.8},0).wait(1).to({x:984.3},0).wait(1).to({x:982.7},0).wait(1).to({x:981.2},0).wait(1).to({x:979.6},0).wait(1).to({x:978.1},0).wait(1).to({x:976.6},0).wait(1).to({x:975},0).wait(1).to({x:973.5},0).wait(1).to({x:971.9},0).wait(1).to({x:970.4},0).wait(1).to({x:968.8},0).wait(1).to({x:967.3},0).wait(1).to({x:965.7},0).wait(1).to({x:964.2},0).wait(1).to({x:962.7},0).wait(1).to({x:961.1},0).wait(1).to({x:959.6},0).wait(1).to({x:958},0).wait(1).to({x:956.5},0).wait(1).to({x:954.9},0).wait(1).to({x:953.4},0).wait(1).to({x:951.9},0).wait(1).to({x:950.3},0).wait(1).to({x:948.8},0).wait(1).to({x:947.2},0).wait(1).to({x:945.7},0).wait(1).to({x:944.1},0).wait(1).to({x:942.6},0).wait(1).to({x:941.1},0).wait(1).to({x:939.5},0).wait(1).to({x:938},0).wait(1).to({x:936.4},0).wait(1).to({x:934.9},0).wait(1).to({x:933.3},0).wait(1).to({x:931.8},0).wait(1).to({x:930.3},0).wait(1).to({x:928.7},0).wait(1).to({x:927.2},0).wait(1).to({x:925.6},0).wait(1).to({x:924.1},0).wait(1).to({x:922.5},0).wait(1).to({x:921},0).wait(1).to({x:919.4},0).wait(1).to({x:917.9},0).wait(1).to({x:916.4},0).wait(1).to({x:914.8},0).wait(1).to({x:913.3},0).wait(1).to({x:911.7},0).wait(1).to({x:910.2},0).wait(1).to({x:908.6},0).wait(1).to({x:907.1},0).wait(1).to({x:905.6},0).wait(1).to({x:904},0).wait(1).to({x:902.5},0).wait(1).to({x:900.9},0).wait(1).to({x:899.4},0).wait(1).to({x:897.8},0).wait(1).to({x:896.3},0).wait(1).to({x:894.8},0).wait(1).to({x:893.2},0).wait(1).to({x:891.7},0).wait(1).to({x:890.1},0).wait(1).to({x:888.6},0).wait(1).to({x:887},0).wait(1).to({x:885.5},0).wait(1).to({x:883.9},0).wait(1).to({x:882.4},0).wait(1).to({x:880.9},0).wait(1).to({x:879.3},0).wait(1).to({x:877.8},0).wait(1).to({x:876.2},0).wait(1).to({x:874.7},0).wait(1).to({x:873.1},0).wait(1).to({x:871.6},0).wait(1).to({x:870.1},0).wait(1).to({x:868.5},0).wait(1).to({x:867},0).wait(1).to({x:865.4},0).wait(1).to({x:863.9},0).wait(1).to({x:862.3},0).wait(1).to({x:860.8},0).wait(1).to({x:859.3},0).wait(1).to({x:857.7},0).wait(1).to({x:856.2},0).wait(1).to({x:854.6},0).wait(1).to({x:853.1},0).wait(1).to({x:851.5},0).wait(1).to({x:850},0).wait(1).to({x:848.5},0).wait(1).to({x:846.9},0).wait(1).to({x:845.4},0).wait(1).to({x:843.8},0).wait(1).to({x:842.3},0).wait(1).to({x:840.7},0).wait(1).to({x:839.2},0).wait(1).to({x:837.6},0).wait(1).to({x:836.1},0).wait(1).to({x:834.6},0).wait(1).to({x:833},0).wait(1).to({x:831.5},0).wait(1).to({x:829.9},0).wait(1).to({x:828.4},0).wait(1).to({x:826.8},0).wait(1).to({x:825.3},0).wait(1).to({x:823.8},0).wait(1).to({x:822.2},0).wait(1).to({x:820.7},0).wait(1).to({x:819.1},0).wait(1).to({x:817.6},0).wait(1).to({x:816},0).wait(1).to({x:814.5},0).wait(1).to({x:813},0).wait(1).to({x:811.4},0).wait(1).to({x:809.9},0).wait(1).to({x:808.3},0).wait(1).to({x:806.8},0).wait(1).to({x:805.2},0).wait(1).to({x:803.7},0).wait(1).to({x:802.1},0).wait(1).to({x:800.6},0).wait(1).to({x:799.1},0).wait(1).to({x:797.5},0).wait(1).to({x:796},0).wait(1).to({x:794.4},0).wait(1).to({x:792.9},0).wait(1).to({x:791.3},0).wait(1).to({x:789.8},0).wait(1).to({x:788.3},0).wait(1).to({x:786.7},0).wait(1).to({x:785.2},0).wait(1).to({x:783.6},0).wait(1).to({x:782.1},0).wait(1).to({x:780.5},0).wait(1).to({x:779},0).wait(1).to({x:777.5},0).wait(1).to({x:775.9},0).wait(1).to({x:774.4},0).wait(1).to({x:772.8},0).wait(1).to({x:771.3},0).wait(1).to({x:769.7},0).wait(1).to({x:768.2},0).wait(1).to({x:766.7},0).wait(1).to({x:765.1},0).wait(1).to({x:763.6},0).wait(1).to({x:762},0).wait(1).to({x:760.5},0).wait(1).to({x:758.9},0).wait(1).to({x:757.4},0).wait(1).to({x:755.8},0).wait(1).to({x:754.3},0).wait(1).to({x:752.8},0).wait(1).to({x:751.2},0).wait(1).to({x:749.7},0).wait(1).to({x:748.1},0).wait(1).to({x:746.6},0).wait(1).to({x:745},0).wait(1).to({x:743.5},0).wait(1).to({x:742},0).wait(1).to({x:740.4},0).wait(1).to({x:738.9},0).wait(1).to({x:737.3},0).wait(1).to({x:735.8},0).wait(1).to({x:734.2},0).wait(1).to({x:732.7},0).wait(1).to({x:731.2},0).wait(1).to({x:729.6},0).wait(1).to({x:728.1},0).wait(1).to({x:726.5},0).wait(1).to({x:725},0).wait(1).to({x:723.4},0).wait(1).to({x:721.9},0).wait(1).to({x:720.3},0).wait(1).to({x:718.8},0).wait(1).to({x:717.3},0).wait(1).to({x:715.7},0).wait(1).to({x:714.2},0).wait(1).to({x:712.6},0).wait(1).to({x:711.1},0).wait(1).to({x:709.5},0).wait(1).to({x:708},0).wait(1).to({x:706.5},0).wait(1).to({x:704.9},0).wait(1).to({x:703.4},0).wait(1).to({x:701.8},0).wait(1).to({x:700.3},0).wait(1).to({x:698.7},0).wait(1).to({x:697.2},0).wait(1).to({x:695.7},0).wait(1).to({x:694.1},0).wait(1).to({x:692.6},0).wait(1).to({x:691},0).wait(1).to({x:689.5},0).wait(1).to({x:687.9},0).wait(1).to({x:686.4},0).wait(1).to({x:684.9},0).wait(1).to({x:683.3},0).wait(1).to({x:681.8},0).wait(1).to({x:680.2},0).wait(1).to({x:678.7},0).wait(1).to({x:677.1},0).wait(1).to({x:675.6},0).wait(1).to({x:674},0).wait(1).to({x:672.5},0).wait(1).to({x:671},0).wait(1).to({x:669.4},0).wait(1).to({x:667.9},0).wait(1).to({x:666.3},0).wait(1).to({x:664.8},0).wait(1).to({x:663.2},0).wait(1).to({x:661.7},0).wait(1));

	// Layer_7
	this.instance_1 = new lib.Symbol7();
	this.instance_1.parent = this;
	this.instance_1.setTransform(400.2,766.5,0.315,0.315,0,0,0,-0.5,-0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(500));

	// Layer_11
	this.instance_2 = new lib.treefront();
	this.instance_2.parent = this;
	this.instance_2.setTransform(1184,756);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(500));

	// Layer_17
	this.instance_3 = new lib.Bitmap5();
	this.instance_3.parent = this;
	this.instance_3.setTransform(1515.9,809,0.628,2.457,90);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(500));

	// Layer_10
	this.instance_4 = new lib.bear31();
	this.instance_4.parent = this;
	this.instance_4.setTransform(1320.5,762);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(249).to({_off:false},0).wait(251));

	// home2
	this.instance_5 = new lib.home();
	this.instance_5.parent = this;
	this.instance_5.setTransform(251,279);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(500));

	// Layer_8
	this.instance_6 = new lib.bear2_1();
	this.instance_6.parent = this;
	this.instance_6.setTransform(713,536.2);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(100).to({_off:false},0).wait(400));

	// Layer_9
	this.instance_7 = new lib.Bitmap5();
	this.instance_7.parent = this;
	this.instance_7.setTransform(593,479);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(500));

	// Layer_6
	this.instance_8 = new lib.star();
	this.instance_8.parent = this;
	this.instance_8.setTransform(187.8,247);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(500));

	// Layer_5
	this.instance_9 = new lib.star();
	this.instance_9.parent = this;
	this.instance_9.setTransform(1504.4,341.9,0.834,0.834);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(500));

	// Layer_4
	this.instance_10 = new lib.star();
	this.instance_10.parent = this;
	this.instance_10.setTransform(1735.2,297.2,0.477,0.477);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(500));

	// Layer_3
	this.instance_11 = new lib.star();
	this.instance_11.parent = this;
	this.instance_11.setTransform(434.9,338,0.502,0.502);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(500));

	// Layer_2
	this.instance_12 = new lib.star();
	this.instance_12.parent = this;
	this.instance_12.setTransform(1049.9,280);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(500));

	// bg2
	this.instance_13 = new lib.bg();
	this.instance_13.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(500));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(960,450,1920,900);
// library properties:
lib.properties = {
	id: 'AE500F3B80307A4F986AC3948D5EAE1F',
	width: 1920,
	height: 900,
	fps: 50,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"./banner/images/bg.jpg", id:"bg"},
		{src:"./banner/images/banner_atlas_P_.png", id:"banner_atlas_P_"}
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
an.compositions['AE500F3B80307A4F986AC3948D5EAE1F'] = {
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