(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"banner_atlas_P_", frames: [[602,1376,601,601],[1205,1932,601,601],[0,1135,600,673],[1304,1257,600,673],[0,0,600,1133],[602,534,700,840],[1304,534,700,721],[1205,1496,78,87],[1205,1376,83,118],[602,0,1274,532],[1205,1585,41,41],[0,1810,355,74]]}
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


(lib.Bitmap10 = function() {
	this.spriteSheet = ss["banner_atlas_P_"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap5 = function() {
	this.spriteSheet = ss["banner_atlas_P_"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.home = function() {
	this.spriteSheet = ss["banner_atlas_P_"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.stary = function() {
	this.spriteSheet = ss["banner_atlas_P_"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.treefront = function() {
	this.spriteSheet = ss["banner_atlas_P_"];
	this.gotoAndStop(11);
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
p.nominalBounds = new cjs.Rectangle(-46.5,46.3,115.4,28.3);


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
	this.instance.setTransform(-68.3,818,0.228,0.228,0,0,0,0,-0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({x:-64.1},0).wait(1).to({x:-60},0).wait(1).to({x:-55.9},0).wait(1).to({x:-51.8},0).wait(1).to({x:-47.6,y:818.1},0).wait(1).to({x:-43.5},0).wait(1).to({x:-39.4},0).wait(1).to({x:-35.3},0).wait(1).to({x:-31.2},0).wait(1).to({x:-27},0).wait(1).to({x:-22.9},0).wait(1).to({x:-18.8},0).wait(1).to({x:-14.7},0).wait(1).to({x:-10.5,y:818.2},0).wait(1).to({x:-6.4},0).wait(1).to({x:-2.3},0).wait(1).to({x:1.8},0).wait(1).to({x:5.9},0).wait(1).to({x:10},0).wait(1).to({x:14.1},0).wait(1).to({x:18.3},0).wait(1).to({x:22.4},0).wait(1).to({x:26.5},0).wait(1).to({x:30.6,y:818.3},0).wait(1).to({x:34.7},0).wait(1).to({x:38.9},0).wait(1).to({x:43},0).wait(1).to({x:47.1},0).wait(1).to({x:51.2},0).wait(1).to({x:55.3},0).wait(1).to({x:59.5},0).wait(1).to({x:63.6},0).wait(1).to({x:67.7,y:818.4},0).wait(1).to({x:71.8},0).wait(1).to({x:76},0).wait(1).to({x:80.1},0).wait(1).to({x:84.2},0).wait(1).to({x:88.3},0).wait(1).to({x:92.4},0).wait(1).to({x:96.6},0).wait(1).to({x:100.7},0).wait(1).to({x:104.8,y:818.5},0).wait(1).to({x:108.9},0).wait(1).to({x:113},0).wait(1).to({x:117.2},0).wait(1).to({x:121.3},0).wait(1).to({x:125.4},0).wait(1).to({x:129.5},0).wait(1).to({x:133.7},0).wait(1).to({x:137.8},0).wait(1).to({x:141.9,y:818.6},0).wait(1).to({x:146},0).wait(1).to({x:150.1},0).wait(1).to({x:154.3},0).wait(1).to({x:158.4},0).wait(1).to({x:162.5},0).wait(1).to({x:166.6},0).wait(1).to({x:170.7},0).wait(1).to({x:174.9},0).wait(1).to({x:179},0).wait(1).to({x:183.1,y:818.7},0).wait(1).to({x:187.2},0).wait(1).to({x:191.4},0).wait(1).to({x:195.5},0).wait(1).to({x:199.6},0).wait(1).to({x:203.7},0).wait(1).to({x:207.8},0).wait(1).to({x:212},0).wait(1).to({x:216.1},0).wait(1).to({x:220.2,y:818.8},0).wait(1).to({x:224.3},0).wait(1).to({x:228.4},0).wait(1).to({x:232.6},0).wait(1).to({x:236.7},0).wait(1).to({x:240.8},0).wait(1).to({x:244.9},0).wait(1).to({x:249.1},0).wait(1).to({x:253.2},0).wait(1).to({x:257.3,y:818.9},0).wait(1).to({x:261.4},0).wait(1).to({x:265.5},0).wait(1).to({x:269.7},0).wait(1).to({x:273.8},0).wait(1).to({x:277.9},0).wait(1).to({x:282},0).wait(1).to({x:286.1},0).wait(1).to({x:290.3},0).wait(1).to({x:294.4,y:819},0).wait(1).to({x:298.5},0).wait(1).to({x:302.6},0).wait(1).to({x:306.8},0).wait(1).to({x:310.9},0).wait(1).to({x:315},0).wait(1).to({x:319.1},0).wait(1).to({x:323.2},0).wait(1).to({x:327.4},0).wait(1).to({x:331.5},0).wait(1).to({x:335.6,y:819.1},0).wait(1).to({x:339.7},0).wait(1).to({x:343.8},0).wait(1).to({x:348},0).wait(1).to({x:352.1},0).wait(1).to({x:356.2},0).wait(1).to({x:360.3},0).wait(1).to({x:364.5},0).wait(1).to({x:368.6},0).wait(1).to({x:372.7,y:819.2},0).wait(1).to({x:376.8},0).wait(1).to({x:380.9},0).wait(1).to({x:385.1},0).wait(1).to({x:389.2},0).wait(1).to({x:393.3},0).wait(1).to({x:397.4},0).wait(1).to({x:401.5},0).wait(1).to({x:405.7},0).wait(1).to({x:409.8,y:819.3},0).wait(1).to({x:413.9},0).wait(1).to({x:418},0).wait(1).to({x:422.2},0).wait(1).to({x:426.3},0).wait(1).to({x:430.4},0).wait(1).to({x:434.5},0).wait(1).to({x:438.6},0).wait(1).to({x:442.8},0).wait(1).to({x:446.9,y:819.4},0).wait(1).to({x:451},0).wait(1).to({x:455.1},0).wait(1).to({x:459.2},0).wait(1).to({x:463.4},0).wait(1).to({x:467.5},0).wait(1).to({x:471.6},0).wait(1).to({x:475.7},0).wait(1).to({x:479.9},0).wait(1).to({x:484,y:819.5},0).wait(1).to({x:488.1},0).wait(1).to({x:492.2},0).wait(1).to({x:496.3},0).wait(1).to({x:500.5},0).wait(1).to({x:504.6},0).wait(1).to({x:508.7},0).wait(1).to({x:512.8},0).wait(1).to({x:516.9},0).wait(1).to({x:521.1},0).wait(1).to({x:525.2,y:819.6},0).wait(1).to({x:529.3},0).wait(1).to({x:533.4},0).wait(1).to({x:537.6},0).wait(1).to({x:541.7},0).wait(1).to({x:545.8},0).wait(1).to({x:549.9},0).wait(1).to({x:554},0).wait(1).to({x:558.2},0).wait(1).to({x:562.3,y:819.7},0).wait(1).to({x:566.4},0).wait(1).to({x:570.5},0).wait(1).to({x:574.6},0).wait(1).to({x:578.8},0).wait(1).to({x:582.9},0).wait(1).to({x:587},0).wait(1).to({x:591.1},0).wait(1).to({x:595.3},0).wait(1).to({x:599.4,y:819.8},0).wait(1).to({x:603.5},0).wait(1).to({x:607.6},0).wait(1).to({x:611.7},0).wait(1).to({x:615.9},0).wait(1).to({x:620},0).wait(1).to({x:624.1},0).wait(1).to({x:628.2},0).wait(1).to({x:632.3},0).wait(1).to({x:636.5,y:819.9},0).wait(1).to({x:640.6},0).wait(1).to({x:644.7},0).wait(1).to({x:648.8},0).wait(1).to({x:653},0).wait(1).to({x:657.1},0).wait(1).to({x:661.2},0).wait(1).to({x:665.3},0).wait(1).to({x:669.4},0).wait(1).to({x:673.6},0).wait(1).to({x:677.7,y:820},0).wait(1).to({x:681.8},0).wait(1).to({x:685.9},0).wait(1).to({x:690},0).wait(1).to({x:694.2},0).wait(1).to({x:698.3},0).wait(1).to({x:702.4},0).wait(1).to({x:706.5},0).wait(1).to({x:710.7},0).wait(1).to({x:714.8,y:820.1},0).wait(1).to({x:718.9},0).wait(1).to({x:723},0).wait(1).to({x:727.1},0).wait(1).to({x:731.3},0).wait(1).to({x:735.4},0).wait(1).to({x:739.5},0).wait(1).to({x:743.6},0).wait(1).to({x:747.7},0).wait(1).to({x:751.9,y:820.2},0).wait(1).to({x:756},0).wait(1).to({x:760.1},0).wait(1).to({x:764.2},0).wait(1).to({x:768.4},0).wait(1).to({x:772.5},0).wait(1).to({x:776.6},0).wait(1).to({x:780.7},0).wait(1).to({x:784.8},0).wait(1).to({x:789,y:820.3},0).wait(1).to({x:793.1},0).wait(1).to({x:797.2},0).wait(1).to({x:801.3},0).wait(1).to({x:805.4},0).wait(1).to({x:809.6},0).wait(1).to({x:813.7},0).wait(1).to({x:817.8},0).wait(1).to({x:821.9},0).wait(1).to({x:826.1},0).wait(1).to({x:830.2,y:820.4},0).wait(1).to({x:834.3},0).wait(1).to({x:838.4},0).wait(1).to({x:842.5},0).wait(1).to({x:846.7},0).wait(1).to({x:850.8},0).wait(1).to({x:854.9},0).wait(1).to({x:859},0).wait(1).to({x:863.1},0).wait(1).to({x:867.3,y:820.5},0).wait(1).to({x:871.4},0).wait(1).to({x:875.5},0).wait(1).to({x:879.6},0).wait(1).to({x:883.8},0).wait(1).to({x:887.9},0).wait(1).to({x:892},0).wait(1).to({x:896.1},0).wait(1).to({x:900.2},0).wait(1).to({x:904.4,y:820.6},0).wait(1).to({x:908.5},0).wait(1).to({x:912.6},0).wait(1).to({x:916.7},0).wait(1).to({x:920.8},0).wait(1).to({x:925},0).wait(1).to({x:929.1},0).wait(1).to({x:933.2},0).wait(1).to({x:937.3},0).wait(1).to({x:941.5,y:820.7},0).wait(1).to({x:945.6},0).wait(1).to({x:949.7},0).wait(1).to({x:953.8},0).wait(1).to({x:957.9},0).wait(1).to({x:962.1},0).wait(1).to({x:966.2},0).wait(1).to({x:970.3},0).wait(1).to({x:974.4},0).wait(1).to({x:978.5},0).wait(1).to({x:982.7,y:820.8},0).wait(1).to({x:986.8},0).wait(1).to({x:990.9},0).wait(1).to({x:995},0).wait(1).to({x:999.2},0).wait(1).to({x:1003.3},0).wait(1).to({x:1007.4},0).wait(1).to({x:1011.5},0).wait(1).to({x:1015.6},0).wait(1).to({x:1019.8,y:820.9},0).wait(1).to({x:1023.9},0).wait(1).to({x:1028},0).wait(1).to({x:1032.1},0).wait(1).to({x:1036.2},0).wait(1).to({x:1040.4},0).wait(1).to({x:1044.5},0).wait(1).to({x:1048.6},0).wait(1).to({x:1052.7},0).wait(1).to({x:1056.9,y:821},0).wait(1).to({x:1061},0).wait(1).to({x:1065.1},0).wait(1).to({x:1069.2},0).wait(1).to({x:1073.3},0).wait(1).to({x:1077.5},0).wait(1).to({x:1081.6},0).wait(1).to({x:1085.7},0).wait(1).to({x:1089.8},0).wait(1).to({x:1093.9,y:821.1},0).wait(1).to({x:1098.1},0).wait(1).to({x:1102.2},0).wait(1).to({x:1106.3},0).wait(1).to({x:1110.4},0).wait(1).to({x:1114.6},0).wait(1).to({x:1118.7},0).wait(1).to({x:1122.8},0).wait(1).to({x:1126.9},0).wait(1).to({x:1131},0).wait(1).to({x:1135.2,y:821.2},0).wait(1).to({x:1139.3},0).wait(1).to({x:1143.4},0).wait(1).to({x:1147.5},0).wait(1).to({x:1151.6},0).wait(1).to({x:1155.8},0).wait(1).to({x:1159.9},0).wait(1).to({x:1164},0).wait(1).to({x:1168.1},0).wait(1).to({x:1172.3,y:821.3},0).wait(1).to({x:1176.4},0).wait(1).to({x:1180.5},0).wait(1).to({x:1184.6},0).wait(1).to({x:1188.7},0).wait(1).to({x:1192.9},0).wait(1).to({x:1197},0).wait(1).to({x:1201.1},0).wait(1).to({x:1205.2},0).wait(1).to({x:1209.3,y:821.4},0).wait(1).to({x:1213.5},0).wait(1).to({x:1217.6},0).wait(1).to({x:1221.7},0).wait(1).to({x:1225.8},0).wait(1).to({x:1230},0).wait(1).to({x:1234.1},0).wait(1).to({x:1238.2},0).wait(1).to({x:1242.3},0).wait(1).to({x:1246.4,y:821.5},0).wait(1).to({x:1250.6},0).wait(1).to({x:1254.7},0).wait(1).to({x:1258.8},0).wait(1).to({x:1262.9},0).wait(1).to({x:1267},0).wait(1).to({x:1271.2},0).wait(1).to({x:1275.3},0).wait(1).to({x:1279.4},0).wait(1).to({x:1283.5},0).wait(1).to({x:1287.7,y:821.6},0).wait(1).to({x:1291.8},0).wait(1).to({x:1295.9},0).wait(1).to({x:1300},0).wait(1).to({x:1304.1},0).wait(1).to({x:1308.3},0).wait(1).to({x:1312.4},0).wait(1).to({x:1316.5},0).wait(1).to({x:1320.6},0).wait(1).to({x:1324.7,y:821.7},0).wait(1).to({x:1328.9},0).wait(1).to({x:1333},0).wait(1).to({x:1337.1},0).wait(1).to({x:1341.2},0).wait(1).to({x:1345.4},0).wait(1).to({x:1349.5},0).wait(1).to({x:1353.6},0).wait(1).to({x:1357.7},0).wait(1).to({x:1361.8,y:821.8},0).wait(1).to({x:1366},0).wait(1).to({x:1370.1},0).wait(1).to({x:1374.2},0).wait(1).to({x:1378.3},0).wait(1).to({x:1382.4},0).wait(1).to({x:1386.6},0).wait(1).to({x:1390.7},0).wait(1).to({x:1394.8},0).wait(1).to({x:1398.9,y:821.9},0).wait(1).to({x:1403.1},0).wait(1).to({x:1407.2},0).wait(1).to({x:1411.3},0).wait(1).to({x:1415.4},0).wait(1).to({x:1419.5},0).wait(1).to({x:1423.7},0).wait(1).to({x:1427.8},0).wait(1).to({x:1431.9},0).wait(1).to({x:1436},0).wait(1).to({x:1440.1,y:822},0).wait(1).to({x:1444.3},0).wait(1).to({x:1448.4},0).wait(1).to({x:1452.5},0).wait(1).to({x:1456.6},0).wait(1).to({x:1460.8},0).wait(1).to({x:1464.9},0).wait(1).to({x:1469},0).wait(1).to({x:1473.1},0).wait(1).to({x:1477.2,y:822.1},0).wait(1).to({x:1481.4},0).wait(1).to({x:1485.5},0).wait(1).to({x:1489.6},0).wait(1).to({x:1493.7},0).wait(1).to({x:1497.8},0).wait(1).to({x:1502},0).wait(1).to({x:1506.1},0).wait(1).to({x:1510.2},0).wait(1).to({x:1514.3,y:822.2},0).wait(1).to({x:1518.5},0).wait(1).to({x:1522.6},0).wait(1).to({x:1526.7},0).wait(1).to({x:1530.8},0).wait(1).to({x:1534.9},0).wait(1).to({x:1539.1},0).wait(1).to({x:1543.2},0).wait(1).to({x:1547.3},0).wait(1).to({x:1551.4,y:822.3},0).wait(1).to({x:1555.5},0).wait(1).to({x:1559.7},0).wait(1).to({x:1563.8},0).wait(1).to({x:1567.9},0).wait(1).to({x:1572},0).wait(1).to({x:1576.2},0).wait(1).to({x:1580.3},0).wait(1).to({x:1584.4},0).wait(1).to({x:1588.5,y:822.4},0).wait(1).to({x:1592.6},0).wait(1).to({x:1596.8},0).wait(1).to({x:1600.9},0).wait(1).to({x:1605},0).wait(1).to({x:1609.1},0).wait(1).to({x:1613.2},0).wait(1).to({x:1617.4},0).wait(1).to({x:1621.5},0).wait(1).to({x:1625.6},0).wait(1).to({x:1629.7,y:822.5},0).wait(1).to({x:1633.9},0).wait(1).to({x:1638},0).wait(1).to({x:1642.1},0).wait(1).to({x:1646.2},0).wait(1).to({x:1650.3},0).wait(1).to({x:1654.5},0).wait(1).to({x:1658.6},0).wait(1).to({x:1662.7},0).wait(1).to({x:1666.8,y:822.6},0).wait(1).to({x:1670.9},0).wait(1).to({x:1675.1},0).wait(1).to({x:1679.2},0).wait(1).to({x:1683.3},0).wait(1).to({x:1687.4},0).wait(1).to({x:1691.6},0).wait(1).to({x:1695.7},0).wait(1).to({x:1699.8},0).wait(1).to({x:1703.9,y:822.7},0).wait(1).to({x:1708},0).wait(1).to({x:1712.2},0).wait(1).to({x:1716.3},0).wait(1).to({x:1720.4},0).wait(1).to({x:1724.5},0).wait(1).to({x:1728.6},0).wait(1).to({x:1732.8},0).wait(1).to({x:1736.9},0).wait(1).to({x:1741,y:822.8},0).wait(1).to({x:1745.1},0).wait(1).to({x:1749.3},0).wait(1).to({x:1753.4},0).wait(1).to({x:1757.5},0).wait(1).to({x:1761.6},0).wait(1).to({x:1765.7},0).wait(1).to({x:1769.9},0).wait(1).to({x:1774},0).wait(1).to({x:1778.1},0).wait(1).to({x:1782.2,y:822.9},0).wait(1).to({x:1786.3},0).wait(1).to({x:1790.5},0).wait(1).to({x:1794.6},0).wait(1).to({x:1798.7},0).wait(1).to({x:1802.8},0).wait(1).to({x:1807},0).wait(1).to({x:1811.1},0).wait(1).to({x:1815.2},0).wait(1).to({x:1819.3,y:823},0).wait(1).to({x:1823.4},0).wait(1).to({x:1827.6},0).wait(1).to({x:1831.7},0).wait(1).to({x:1835.8},0).wait(1).to({x:1839.9},0).wait(1).to({x:1844},0).wait(1).to({x:1848.2},0).wait(1).to({x:1852.3},0).wait(1).to({x:1856.4,y:823.1},0).wait(1).to({x:1860.5},0).wait(1).to({x:1864.7},0).wait(1).to({x:1868.8},0).wait(1).to({x:1872.9},0).wait(1).to({x:1877},0).wait(1).to({x:1881.1},0).wait(1).to({x:1885.3},0).wait(1).to({x:1889.4},0).wait(1).to({x:1893.5,y:823.2},0).wait(1).to({x:1897.6},0).wait(1).to({x:1901.7},0).wait(1).to({x:1905.9},0).wait(1).to({x:1910},0).wait(1).to({x:1914.1},0).wait(1).to({x:1918.2},0).wait(1).to({x:1922.4},0).wait(1).to({x:1926.5},0).wait(1).to({x:1930.6},0).wait(1).to({x:1934.7,y:823.3},0).wait(1).to({x:1938.8},0).wait(1).to({x:1943},0).wait(1).to({x:1947.1},0).wait(1).to({x:1951.2},0).wait(1).to({x:1955.3},0).wait(1).to({x:1959.4},0).wait(1).to({x:1963.6},0).wait(1).to({x:1967.7},0).wait(1).to({x:1971.8,y:823.4},0).wait(1).to({x:1975.9},0).wait(1).to({x:1980.1},0).wait(1).to({x:1984.2},0).wait(1).to({x:1988.3},0).wait(1));

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

	// Layer_14
	this.instance_5 = new lib.Bitmap10();
	this.instance_5.parent = this;
	this.instance_5.setTransform(513,311);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(500));

	// home2
	this.instance_6 = new lib.home();
	this.instance_6.parent = this;
	this.instance_6.setTransform(251,279);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(500));

	// Layer_8
	this.instance_7 = new lib.bear2_1();
	this.instance_7.parent = this;
	this.instance_7.setTransform(713,536.2);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(100).to({_off:false},0).wait(400));

	// Layer_9
	this.instance_8 = new lib.Bitmap5();
	this.instance_8.parent = this;
	this.instance_8.setTransform(593,479);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(500));

	// Layer_6
	this.instance_9 = new lib.star();
	this.instance_9.parent = this;
	this.instance_9.setTransform(187.8,247);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(500));

	// Layer_5
	this.instance_10 = new lib.star();
	this.instance_10.parent = this;
	this.instance_10.setTransform(1504.4,341.9,0.834,0.834);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(500));

	// Layer_4
	this.instance_11 = new lib.star();
	this.instance_11.parent = this;
	this.instance_11.setTransform(1735.2,297.2,0.477,0.477);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(500));

	// Layer_3
	this.instance_12 = new lib.star();
	this.instance_12.parent = this;
	this.instance_12.setTransform(434.9,338,0.502,0.502);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(500));

	// Layer_2
	this.instance_13 = new lib.star();
	this.instance_13.parent = this;
	this.instance_13.setTransform(1049.9,280);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(500));

	// bg2
	this.instance_14 = new lib.bg();
	this.instance_14.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(500));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(823.4,450,2056.6,900);
// library properties:
lib.properties = {
	id: 'AE500F3B80307A4F986AC3948D5EAE1F',
	width: 1920,
	height: 900,
	fps: 50,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/bg.jpg", id:"bg"},
		{src:"images/banner_atlas_P_.png", id:"banner_atlas_P_"}
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