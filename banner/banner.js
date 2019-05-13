(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"banner_atlas_P_", frames: [[1276,1218,100,104],[0,0,1920,900],[1385,978,78,87],[1385,1067,41,40],[0,902,1274,532],[1361,1324,72,98],[1276,1324,83,118],[1276,978,107,130],[1276,1110,107,106],[1276,902,355,74]]}
];


// symbols:



(lib.bear1 = function() {
	this.spriteSheet = ss["banner_atlas_P_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap1 = function() {
	this.spriteSheet = ss["banner_atlas_P_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap10 = function() {
	this.spriteSheet = ss["banner_atlas_P_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap2 = function() {
	this.spriteSheet = ss["banner_atlas_P_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap3 = function() {
	this.spriteSheet = ss["banner_atlas_P_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap4 = function() {
	this.spriteSheet = ss["banner_atlas_P_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap5 = function() {
	this.spriteSheet = ss["banner_atlas_P_"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap6 = function() {
	this.spriteSheet = ss["banner_atlas_P_"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap7 = function() {
	this.spriteSheet = ss["banner_atlas_P_"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap8 = function() {
	this.spriteSheet = ss["banner_atlas_P_"];
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


(lib.Symbol6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.bear1();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol6, new cjs.Rectangle(0,0,100,104), null);


(lib.Symbol4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Bitmap7();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol4, new cjs.Rectangle(0,0,107,106), null);


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Bitmap6();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol3, new cjs.Rectangle(0,0,107,130), null);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Bitmap4();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(0,0,72,98), null);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Bitmap2();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(0,0,41,40), null);


(lib.star = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Symbol1();
	this.instance.parent = this;
	this.instance.setTransform(0,0,1,1,0,0,0,20.5,20);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({rotation:0.7,x:0.1},0).wait(1).to({rotation:1.4},0).wait(1).to({rotation:2.2},0).wait(1).to({rotation:2.9,x:0},0).wait(1).to({rotation:3.6,y:0.1},0).wait(1).to({rotation:4.3,x:0.1},0).wait(1).to({rotation:5,x:0,y:0},0).wait(1).to({rotation:5.8,x:0.1},0).wait(1).to({rotation:6.5,x:0},0).wait(1).to({rotation:7.2,x:0.1},0).wait(1).to({rotation:7.9,x:0},0).wait(1).to({rotation:8.6},0).wait(1).to({rotation:9.4,x:0.1,y:0.1},0).wait(1).to({rotation:10.1},0).wait(1).to({rotation:10.8},0).wait(1).to({rotation:11.5},0).wait(1).to({rotation:12.2},0).wait(1).to({rotation:12.9},0).wait(1).to({rotation:13.7,x:0},0).wait(1).to({rotation:14.4,x:0.1,y:0},0).wait(1).to({rotation:15.1},0).wait(1).to({rotation:15.8,x:0,y:0.1},0).wait(1).to({rotation:16.5,y:0},0).wait(1).to({rotation:17.3,x:0.1,y:0.1},0).wait(1).to({rotation:18,x:0,y:0},0).wait(1).to({rotation:18.7},0).wait(1).to({rotation:19.4,x:0.1},0).wait(1).to({rotation:20.1,x:0,y:0.1},0).wait(1).to({rotation:20.9,x:0.1},0).wait(1).to({rotation:21.6,x:0},0).wait(1).to({rotation:22.3},0).wait(1).to({rotation:23,x:0.1,y:0},0).wait(1).to({rotation:23.7,x:0},0).wait(1).to({rotation:24.5,y:0.1},0).wait(1).to({rotation:25.2,x:0.1,y:0},0).wait(1).to({rotation:25.9,x:0,y:0.1},0).wait(1).to({rotation:26.6,x:0.1},0).wait(1).to({rotation:27.3,x:0,y:0},0).wait(1).to({rotation:28.1,x:0.1,y:0.1},0).wait(1).to({rotation:28.8,x:0},0).wait(1).to({rotation:29.5,x:0.1,y:0},0).wait(1).to({rotation:30.2,y:0.1},0).wait(1).to({rotation:30.9,x:0},0).wait(1).to({rotation:31.7,y:0},0).wait(1).to({rotation:32.4,y:0.1},0).wait(1).to({rotation:33.1},0).wait(1).to({rotation:33.8,y:0},0).wait(1).to({rotation:34.5,y:0.1},0).wait(1).to({rotation:35.3,x:0.1},0).wait(1).to({rotation:36},0).wait(1).to({rotation:36.7},0).wait(1).to({rotation:37.4},0).wait(1).to({rotation:38.1},0).wait(1).to({rotation:38.8,x:0},0).wait(1).to({rotation:39.6,y:0},0).wait(1).to({rotation:40.3},0).wait(1).to({rotation:41,x:0.1,y:0.1},0).wait(1).to({rotation:41.7},0).wait(1).to({rotation:42.4},0).wait(1).to({rotation:43.2,x:0,y:0},0).wait(1).to({rotation:43.9},0).wait(1).to({rotation:44.6,y:0.1},0).wait(1).to({rotation:45.3,x:0.1},0).wait(1).to({rotation:46,x:0},0).wait(1).to({rotation:46.8},0).wait(1).to({rotation:47.5,y:0},0).wait(1).to({rotation:48.2,y:0.1},0).wait(1).to({rotation:48.9},0).wait(1).to({rotation:49.6,y:0},0).wait(1).to({rotation:50.4,y:0.1},0).wait(1).to({rotation:51.1,y:0},0).wait(1).to({rotation:51.8},0).wait(1).to({rotation:52.5},0).wait(1).to({rotation:53.2},0).wait(1).to({rotation:54,y:0.1},0).wait(1).to({rotation:54.7},0).wait(1).to({rotation:55.4,y:0},0).wait(1).to({rotation:56.1},0).wait(1).to({rotation:56.8},0).wait(1).to({rotation:57.6,y:0.1},0).wait(1).to({rotation:58.3,y:0},0).wait(1).to({rotation:59},0).wait(1).to({rotation:59.7,y:0.1},0).wait(1).to({rotation:60.4},0).wait(1).to({rotation:61.2,y:0},0).wait(1).to({rotation:61.9,y:0.1},0).wait(1).to({rotation:62.6,y:0},0).wait(1).to({rotation:63.3,y:0.1},0).wait(1).to({rotation:64},0).wait(1).to({rotation:64.7},0).wait(1).to({rotation:65.5,y:0},0).wait(1).to({rotation:66.2},0).wait(1).to({rotation:66.9},0).wait(1).to({rotation:67.6},0).wait(1).to({rotation:68.3,y:0.1},0).wait(1).to({rotation:69.1},0).wait(1).to({rotation:69.8},0).wait(1).to({rotation:70.5,y:0},0).wait(1).to({rotation:71.2,y:0.1},0).wait(1).to({rotation:71.9},0).wait(1).to({rotation:72.7,y:0},0).wait(1).to({rotation:73.4},0).wait(1).to({rotation:74.1,y:0.1},0).wait(1).to({rotation:74.8},0).wait(1).to({rotation:75.5},0).wait(1).to({rotation:76.3,y:0},0).wait(1).to({rotation:77},0).wait(1).to({rotation:77.7,y:0.1},0).wait(1).to({rotation:78.4},0).wait(1).to({rotation:79.1,y:0},0).wait(1).to({rotation:79.9},0).wait(1).to({rotation:80.6},0).wait(1).to({rotation:81.3,y:0.1},0).wait(1).to({rotation:82},0).wait(1).to({rotation:82.7},0).wait(1).to({rotation:83.5},0).wait(1).to({rotation:84.2},0).wait(1).to({rotation:84.9},0).wait(1).to({rotation:85.6},0).wait(1).to({rotation:86.3},0).wait(1).to({rotation:87.1,y:0},0).wait(1).to({rotation:87.8,y:0.1},0).wait(1).to({rotation:88.5},0).wait(1).to({rotation:89.2},0).wait(1).to({rotation:89.9,y:0},0).wait(1).to({rotation:90.6},0).wait(1).to({rotation:91.4},0).wait(1).to({rotation:92.1},0).wait(1).to({rotation:92.8,y:0.1},0).wait(1).to({rotation:93.5,y:0},0).wait(1).to({rotation:94.2},0).wait(1).to({rotation:95},0).wait(1).to({rotation:95.7},0).wait(1).to({rotation:96.4},0).wait(1).to({rotation:97.1},0).wait(1).to({rotation:97.8},0).wait(1).to({rotation:98.6},0).wait(1).to({rotation:99.3},0).wait(1).to({rotation:100,y:0.1},0).wait(1).to({rotation:100.7},0).wait(1).to({rotation:101.4},0).wait(1).to({rotation:102.2},0).wait(1).to({rotation:102.9},0).wait(1).to({rotation:103.6},0).wait(1).to({rotation:104.3,y:0},0).wait(1).to({rotation:105},0).wait(1).to({rotation:105.8,y:0.1},0).wait(1).to({rotation:106.5},0).wait(1).to({rotation:107.2},0).wait(1).to({rotation:107.9,y:0},0).wait(1).to({rotation:108.6,y:0.1},0).wait(1).to({rotation:109.4,y:0},0).wait(1).to({rotation:110.1,y:0.1},0).wait(1).to({rotation:110.8,y:0},0).wait(1).to({rotation:111.5},0).wait(1).to({rotation:112.2,y:0.1},0).wait(1).to({rotation:113},0).wait(1).to({rotation:113.7},0).wait(1).to({rotation:114.4,y:0},0).wait(1).to({rotation:115.1},0).wait(1).to({rotation:115.8,y:0.1},0).wait(1).to({rotation:116.5},0).wait(1).to({rotation:117.3,y:0},0).wait(1).to({rotation:118},0).wait(1).to({rotation:118.7,y:0.1},0).wait(1).to({rotation:119.4,y:0},0).wait(1).to({rotation:120.1,y:0.1},0).wait(1).to({rotation:120.9},0).wait(1).to({rotation:121.6,y:0},0).wait(1).to({rotation:122.3,y:0.1},0).wait(1).to({rotation:123},0).wait(1).to({rotation:123.7},0).wait(1).to({rotation:124.5},0).wait(1).to({rotation:125.2},0).wait(1).to({rotation:125.9,y:0},0).wait(1).to({rotation:126.6},0).wait(1).to({rotation:127.3},0).wait(1).to({rotation:128.1},0).wait(1).to({rotation:128.8},0).wait(1).to({rotation:129.5,y:0.1},0).wait(1).to({rotation:130.2},0).wait(1).to({rotation:130.9},0).wait(1).to({rotation:131.7,y:0},0).wait(1).to({rotation:132.4},0).wait(1).to({rotation:133.1},0).wait(1).to({rotation:133.8,y:0.1},0).wait(1).to({rotation:134.5,y:0},0).wait(1).to({rotation:135.3,y:0.1},0).wait(1).to({rotation:136,y:0},0).wait(1).to({rotation:136.7},0).wait(1).to({rotation:137.4},0).wait(1).to({rotation:138.1},0).wait(1).to({rotation:138.9},0).wait(1).to({rotation:139.6},0).wait(1).to({rotation:140.3},0).wait(1).to({rotation:141},0).wait(1).to({rotation:141.7},0).wait(1).to({rotation:142.4},0).wait(1).to({rotation:143.2},0).wait(1).to({rotation:143.9},0).wait(1).to({rotation:144.6},0).wait(1).to({rotation:145.3},0).wait(1).to({rotation:146},0).wait(1).to({rotation:146.8},0).wait(1).to({rotation:147.5},0).wait(1).to({rotation:148.2},0).wait(1).to({rotation:148.9},0).wait(1).to({rotation:149.6},0).wait(1).to({rotation:150.4},0).wait(1).to({rotation:151.1},0).wait(1).to({rotation:151.8},0).wait(1).to({rotation:152.5},0).wait(1).to({rotation:153.2},0).wait(1).to({rotation:154},0).wait(1).to({rotation:154.7},0).wait(1).to({rotation:155.4},0).wait(1).to({rotation:156.1},0).wait(1).to({rotation:156.8},0).wait(1).to({rotation:157.6},0).wait(1).to({rotation:158.3},0).wait(1).to({rotation:159},0).wait(1).to({rotation:159.7},0).wait(1).to({rotation:160.4},0).wait(1).to({rotation:161.2},0).wait(1).to({rotation:161.9},0).wait(1).to({rotation:162.6},0).wait(1).to({rotation:163.3},0).wait(1).to({rotation:164},0).wait(1).to({rotation:164.8},0).wait(1).to({rotation:165.5},0).wait(1).to({rotation:166.2},0).wait(1).to({rotation:166.9},0).wait(1).to({rotation:167.6},0).wait(1).to({rotation:168.3},0).wait(1).to({rotation:169.1},0).wait(1).to({rotation:169.8},0).wait(1).to({rotation:170.5},0).wait(1).to({rotation:171.2},0).wait(1).to({rotation:171.9},0).wait(1).to({rotation:172.7},0).wait(1).to({rotation:173.4},0).wait(1).to({rotation:174.1},0).wait(1).to({rotation:174.8},0).wait(1).to({rotation:175.5},0).wait(1).to({rotation:176.3},0).wait(1).to({rotation:177},0).wait(1).to({rotation:177.7},0).wait(1).to({rotation:178.4},0).wait(1).to({rotation:179.1},0).wait(1).to({rotation:179.9},0).wait(1).to({rotation:180.6},0).wait(1).to({rotation:181.3},0).wait(1).to({rotation:182},0).wait(1).to({rotation:182.7},0).wait(1).to({rotation:183.5},0).wait(1).to({rotation:184.2},0).wait(1).to({rotation:184.9},0).wait(1).to({rotation:185.6},0).wait(1).to({rotation:186.3},0).wait(1).to({rotation:187.1},0).wait(1).to({rotation:187.8},0).wait(1).to({rotation:188.5},0).wait(1).to({rotation:189.2},0).wait(1).to({rotation:189.9},0).wait(1).to({rotation:190.7},0).wait(1).to({rotation:191.4},0).wait(1).to({rotation:192.1},0).wait(1).to({rotation:192.8},0).wait(1).to({rotation:193.5},0).wait(1).to({rotation:194.2},0).wait(1).to({rotation:195},0).wait(1).to({rotation:195.7},0).wait(1).to({rotation:196.4},0).wait(1).to({rotation:197.1},0).wait(1).to({rotation:197.8},0).wait(1).to({rotation:198.6},0).wait(1).to({rotation:199.3},0).wait(1).to({rotation:200},0).wait(1).to({rotation:200.7},0).wait(1).to({rotation:201.4},0).wait(1).to({rotation:202.2},0).wait(1).to({rotation:202.9},0).wait(1).to({rotation:203.6},0).wait(1).to({rotation:204.3},0).wait(1).to({rotation:205},0).wait(1).to({rotation:205.8},0).wait(1).to({rotation:206.5},0).wait(1).to({rotation:207.2},0).wait(1).to({rotation:207.9},0).wait(1).to({rotation:208.6},0).wait(1).to({rotation:209.4},0).wait(1).to({rotation:210.1},0).wait(1).to({rotation:210.8},0).wait(1).to({rotation:211.5},0).wait(1).to({rotation:212.2},0).wait(1).to({rotation:213},0).wait(1).to({rotation:213.7},0).wait(1).to({rotation:214.4},0).wait(1).to({rotation:215.1},0).wait(1).to({rotation:215.8},0).wait(1).to({rotation:216.6},0).wait(1).to({rotation:217.3},0).wait(1).to({rotation:218},0).wait(1).to({rotation:218.7},0).wait(1).to({rotation:219.4},0).wait(1).to({rotation:220.1},0).wait(1).to({rotation:220.9},0).wait(1).to({rotation:221.6},0).wait(1).to({rotation:222.3},0).wait(1).to({rotation:223},0).wait(1).to({rotation:223.7},0).wait(1).to({rotation:224.5},0).wait(1).to({rotation:225.2},0).wait(1).to({rotation:225.9,x:0.1},0).wait(1).to({rotation:226.6,x:0},0).wait(1).to({rotation:227.3},0).wait(1).to({rotation:228.1,x:0.1},0).wait(1).to({rotation:228.8},0).wait(1).to({rotation:229.5},0).wait(1).to({rotation:230.2,x:0},0).wait(1).to({rotation:230.9,x:0.1},0).wait(1).to({rotation:231.7},0).wait(1).to({rotation:232.4},0).wait(1).to({rotation:233.1},0).wait(1).to({rotation:233.8},0).wait(1).to({rotation:234.5},0).wait(1).to({rotation:235.3,x:0},0).wait(1).to({rotation:236,x:0.1},0).wait(1).to({rotation:236.7,x:0},0).wait(1).to({rotation:237.4},0).wait(1).to({rotation:238.1,x:0.1},0).wait(1).to({rotation:238.9,x:0},0).wait(1).to({rotation:239.6},0).wait(1).to({rotation:240.3},0).wait(1).to({rotation:241},0).wait(1).to({rotation:241.7},0).wait(1).to({rotation:242.5},0).wait(1).to({rotation:243.2,x:0.1},0).wait(1).to({rotation:243.9},0).wait(1).to({rotation:244.6,x:0},0).wait(1).to({rotation:245.3},0).wait(1).to({rotation:246,x:0.1},0).wait(1).to({rotation:246.8},0).wait(1).to({rotation:247.5},0).wait(1).to({rotation:248.2,x:0},0).wait(1).to({rotation:248.9,x:0.1},0).wait(1).to({rotation:249.6,x:0},0).wait(1).to({rotation:250.4,x:0.1},0).wait(1).to({rotation:251.1,x:0},0).wait(1).to({rotation:251.8,x:0.1},0).wait(1).to({rotation:252.5},0).wait(1).to({rotation:253.2},0).wait(1).to({rotation:254,x:0},0).wait(1).to({rotation:254.7,x:0.1},0).wait(1).to({rotation:255.4},0).wait(1).to({rotation:256.1},0).wait(1).to({rotation:256.8,x:0},0).wait(1).to({rotation:257.6,x:0.1},0).wait(1).to({rotation:258.3},0).wait(1).to({rotation:259},0).wait(1).to({rotation:259.7},0).wait(1).to({rotation:260.4,x:0},0).wait(1).to({rotation:261.2},0).wait(1).to({rotation:261.9},0).wait(1).to({rotation:262.6,x:0.1},0).wait(1).to({rotation:263.3,x:0},0).wait(1).to({rotation:264},0).wait(1).to({rotation:264.8,x:0.1},0).wait(1).to({rotation:265.5},0).wait(1).to({rotation:266.2},0).wait(1).to({rotation:266.9,x:0},0).wait(1).to({rotation:267.6,x:0.1},0).wait(1).to({rotation:268.4,x:0},0).wait(1).to({rotation:269.1},0).wait(1).to({rotation:269.8},0).wait(1).to({rotation:270.5,x:0.1},0).wait(1).to({rotation:271.2},0).wait(1).to({rotation:271.9},0).wait(1).to({rotation:272.7},0).wait(1).to({rotation:273.4,x:0},0).wait(1).to({rotation:274.1},0).wait(1).to({rotation:274.8},0).wait(1).to({rotation:275.5,x:0.1},0).wait(1).to({rotation:276.3},0).wait(1).to({rotation:277},0).wait(1).to({rotation:277.7,x:0},0).wait(1).to({rotation:278.4,x:0.1},0).wait(1).to({rotation:279.1,x:0},0).wait(1).to({rotation:279.9},0).wait(1).to({rotation:280.6},0).wait(1).to({rotation:281.3},0).wait(1).to({rotation:282},0).wait(1).to({rotation:282.7},0).wait(1).to({rotation:283.5},0).wait(1).to({rotation:284.2},0).wait(1).to({rotation:284.9,x:0.1},0).wait(1).to({rotation:285.6,x:0},0).wait(1).to({rotation:286.3},0).wait(1).to({rotation:287.1},0).wait(1).to({rotation:287.8},0).wait(1).to({rotation:288.5},0).wait(1).to({rotation:289.2,x:0.1},0).wait(1).to({rotation:289.9},0).wait(1).to({rotation:290.7},0).wait(1).to({rotation:291.4,x:0},0).wait(1).to({rotation:292.1,x:0.1},0).wait(1).to({rotation:292.8},0).wait(1).to({rotation:293.5},0).wait(1).to({rotation:294.3,x:0},0).wait(1).to({rotation:295,x:0.1},0).wait(1).to({rotation:295.7,x:0},0).wait(1).to({rotation:296.4},0).wait(1).to({rotation:297.1,x:0.1},0).wait(1).to({rotation:297.8},0).wait(1).to({rotation:298.6,x:0},0).wait(1).to({rotation:299.3,x:0.1},0).wait(1).to({rotation:300,x:0},0).wait(1).to({rotation:300.7},0).wait(1).to({rotation:301.4},0).wait(1).to({rotation:302.2,x:0.1},0).wait(1).to({rotation:302.9},0).wait(1).to({rotation:303.6,x:0},0).wait(1).to({rotation:304.3},0).wait(1).to({rotation:305},0).wait(1).to({rotation:305.8,x:0.1},0).wait(1).to({rotation:306.5},0).wait(1).to({rotation:307.2},0).wait(1).to({rotation:307.9},0).wait(1).to({rotation:308.6,x:0},0).wait(1).to({rotation:309.4},0).wait(1).to({rotation:310.1},0).wait(1).to({rotation:310.8,x:0.1},0).wait(1).to({rotation:311.5,x:0},0).wait(1).to({rotation:312.2,x:0.1},0).wait(1).to({rotation:313,x:0},0).wait(1).to({rotation:313.7},0).wait(1).to({rotation:314.4,x:0.1},0).wait(1).to({rotation:315.1,x:0},0).wait(1).to({rotation:315.8,x:0.1},0).wait(1).to({rotation:316.6},0).wait(1).to({rotation:317.3,x:0,y:0.1},0).wait(1).to({rotation:318,x:0.1},0).wait(1).to({rotation:318.7,x:0,y:0},0).wait(1).to({rotation:319.4},0).wait(1).to({rotation:320.2},0).wait(1).to({rotation:320.9},0).wait(1).to({rotation:321.6,x:0.1},0).wait(1).to({rotation:322.3,x:0,y:0.1},0).wait(1).to({rotation:323,x:0.1},0).wait(1).to({rotation:323.7},0).wait(1).to({rotation:324.5,x:0},0).wait(1).to({rotation:325.2,x:0.1,y:0},0).wait(1).to({rotation:325.9},0).wait(1).to({rotation:326.6,x:0},0).wait(1).to({rotation:327.3,y:0.1},0).wait(1).to({rotation:328.1,x:0.1,y:0},0).wait(1).to({rotation:328.8,y:0.1},0).wait(1).to({rotation:329.5,x:0},0).wait(1).to({rotation:330.2,x:0.1,y:0},0).wait(1).to({rotation:330.9,x:0,y:0.1},0).wait(1).to({rotation:331.7,x:0.1,y:0},0).wait(1).to({rotation:332.4,x:0},0).wait(1).to({rotation:333.1,x:0.1,y:0.1},0).wait(1).to({rotation:333.8,x:0,y:0},0).wait(1).to({rotation:334.5,y:0.1},0).wait(1).to({rotation:335.3,y:0},0).wait(1).to({rotation:336},0).wait(1).to({rotation:336.7,x:0.1},0).wait(1).to({rotation:337.4,y:0.1},0).wait(1).to({rotation:338.1,y:0},0).wait(1).to({rotation:338.9,x:0},0).wait(1).to({rotation:339.6,x:0.1,y:0.1},0).wait(1).to({rotation:340.3},0).wait(1).to({rotation:341},0).wait(1).to({rotation:341.7,x:0,y:0},0).wait(1).to({rotation:342.5,x:0.1},0).wait(1).to({rotation:343.2,x:0},0).wait(1).to({rotation:343.9,x:0.1},0).wait(1).to({rotation:344.6,x:0,y:0.1},0).wait(1).to({rotation:345.3,x:0.1,y:0},0).wait(1).to({rotation:346.1,x:0},0).wait(1).to({rotation:346.8,x:0.1},0).wait(1).to({rotation:347.5},0).wait(1).to({rotation:348.2,x:0,y:0.1},0).wait(1).to({rotation:348.9},0).wait(1).to({rotation:349.6,y:0},0).wait(1).to({rotation:350.4},0).wait(1).to({rotation:351.1},0).wait(1).to({rotation:351.8,x:0.1,y:0.1},0).wait(1).to({rotation:352.5},0).wait(1).to({rotation:353.2,x:0},0).wait(1).to({rotation:354,x:0.1},0).wait(1).to({rotation:354.7,x:0,y:0},0).wait(1).to({rotation:355.4,x:0.1,y:0.1},0).wait(1).to({rotation:356.1,x:0,y:0},0).wait(1).to({rotation:356.8},0).wait(1).to({rotation:357.6,x:0.1,y:0.1},0).wait(1).to({rotation:358.3},0).wait(1).to({rotation:359},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-20.5,-20,41,40);


(lib.bear31 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Symbol3();
	this.instance.parent = this;
	this.instance.setTransform(0,65.3,1,0.204,0,0,0,53.5,129.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regY:65,scaleY:0.26,y:48.8},0).wait(1).to({scaleY:0.31,y:45.4},0).wait(1).to({scaleY:0.36,y:42},0).wait(1).to({scaleY:0.42,y:38.6},0).wait(1).to({scaleY:0.47,y:35.2},0).wait(1).to({scaleY:0.52,y:31.8},0).wait(1).to({scaleY:0.58,y:28.4},0).wait(1).to({scaleY:0.63,y:25},0).wait(1).to({scaleY:0.68,y:21.6},0).wait(1).to({scaleY:0.74,y:18.2},0).wait(1).to({scaleY:0.79,y:14.8},0).wait(1).to({scaleY:0.84,y:11.4},0).wait(1).to({scaleY:0.89,y:8},0).wait(1).to({scaleY:0.95,y:4.6},0).wait(1).to({scaleY:1,y:1.2},0).wait(435).to({scaleY:0.92,y:6.3},0).wait(1).to({scaleY:0.84,y:11.3},0).wait(1).to({scaleY:0.76,y:16.3},0).wait(1).to({scaleY:0.69,y:21.4},0).wait(1).to({scaleY:0.61,y:26.4},0).wait(1).to({scaleY:0.53,y:31.5},0).wait(1).to({scaleY:0.45,y:36.5},0).wait(1).to({scaleY:0.37,y:41.5},0).wait(1).to({scaleY:0.29,y:46.5},0).wait(1).to({scaleY:0.21,y:51.6},0).wait(41));

	// Layer_2
	this.instance_1 = new lib.Symbol4();
	this.instance_1.parent = this;
	this.instance_1.setTransform(84.5,65.2,1,0.243,0,0,0,53.5,105.8);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(14).to({_off:false},0).wait(1).to({regY:53,scaleY:0.29,y:49.7},0).wait(1).to({scaleY:0.34,y:47},0).wait(1).to({scaleY:0.4,y:44.3},0).wait(1).to({scaleY:0.45,y:41.7},0).wait(1).to({scaleY:0.5,y:39},0).wait(1).to({scaleY:0.55,y:36.4},0).wait(1).to({scaleY:0.6,y:33.7},0).wait(1).to({scaleY:0.65,y:31.1},0).wait(1).to({scaleY:0.7,y:28.4},0).wait(1).to({scaleY:0.75,y:25.8},0).wait(1).to({scaleY:0.8,y:23.1},0).wait(1).to({scaleY:0.85,y:20.5},0).wait(1).to({scaleY:0.9,y:17.8},0).wait(1).to({scaleY:0.95,y:15.1},0).wait(1).to({scaleY:1,y:12.5},0).wait(431).to({scaleY:0.93,y:16.4},0).wait(1).to({scaleY:0.85,y:20.3},0).wait(1).to({scaleY:0.78,y:24.2},0).wait(1).to({scaleY:0.7,y:28.1},0).wait(1).to({scaleY:0.63,y:32},0).wait(1).to({scaleY:0.56,y:35.8},0).wait(1).to({scaleY:0.48,y:39.8},0).wait(1).to({scaleY:0.41,y:43.7},0).wait(1).to({scaleY:0.33,y:47.6},0).wait(1).to({scaleY:0.26,y:51.5},0).wait(31));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-53.5,38.9,107,26.6);


(lib.bear2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Symbol2();
	this.instance.parent = this;
	this.instance.setTransform(20.1,28.8,1,1,0,0,0,57.1,77.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:36,regY:49,rotation:-1.3,x:-4.9,y:0.5},0).wait(1).to({rotation:-2.5,x:-8.9,y:1},0).wait(1).to({rotation:-3.8,x:-12.8,y:1.5},0).wait(1).to({rotation:-5,x:-16.8,y:2},0).wait(1).to({rotation:-6.3,x:-20.6,y:2.5},0).wait(1).to({rotation:-7.6,x:-24.6,y:3},0).wait(1).to({rotation:-8.8,x:-28.5,y:3.6},0).wait(1).to({rotation:-10.1,x:-32.3,y:4.2},0).wait(1).to({rotation:-11.4,x:-36.2,y:4.8},0).wait(1).to({rotation:-12.6,x:-40.1,y:5.3},0).wait(1).to({rotation:-13.9,x:-43.9,y:5.9},0).wait(1).to({rotation:-15.1,x:-47.8,y:6.6},0).wait(1).to({rotation:-16.4,x:-51.6,y:7.2},0).wait(1).to({rotation:-17.7,x:-55.4,y:7.8},0).wait(1).to({rotation:-18.9,x:-55.9,y:8.4},0).wait(1).to({rotation:-20.2,x:-56.3,y:9.1},0).wait(1).to({rotation:-21.5,x:-56.8,y:9.8},0).wait(1).to({rotation:-22.7,x:-57.2,y:10.4},0).wait(1).to({rotation:-24,x:-57.5,y:11},0).wait(431).to({rotation:-19.2,x:-53.6,y:8.6},0).wait(1).to({rotation:-14.4,x:-49.5,y:6.2},0).wait(1).to({rotation:-9.6,x:-45.2,y:3.9},0).wait(1).to({rotation:-4.8,x:-40.7,y:1.9},0).wait(1).to({rotation:0,x:-36,y:0},0).wait(1).to({x:-33.6},0).wait(1).to({x:-31.3},0).wait(1).to({x:-29},0).wait(1).to({x:-26.6},0).wait(1).to({x:-24.3},0).wait(1).to({x:-22},0).wait(1).to({x:-19.6},0).wait(1).to({x:-17.3},0).wait(1).to({x:-15},0).wait(1).to({x:-12.6},0).wait(1).to({x:-10.3},0).wait(1).to({x:-8},0).wait(1).to({x:-5.6},0).wait(1).to({x:-3.3},0).wait(1).to({x:-1},0).wait(31));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-37,-49,72,98);


(lib.bear1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Symbol6();
	this.instance.parent = this;
	this.instance.setTransform(-16.8,49,1,1,0,0,0,33.2,101);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:50,regY:52,rotation:2.5,x:2.2,y:0.8},0).wait(1).to({rotation:5,x:4.2,y:1.7},0).wait(1).to({rotation:7.5,x:6.3,y:2.7},0).wait(1).to({rotation:10,x:8.3,y:3.7},0).wait(1).to({rotation:12,x:9.9,y:4.6},0).wait(1).to({rotation:14,x:11.4,y:5.6},0).wait(1).to({rotation:16,x:12.9,y:6.6},0).wait(1).to({rotation:18,x:14.4,y:7.6},0).wait(1).to({rotation:20,x:15.8,y:8.7},0).wait(1).to({rotation:18,x:14.4,y:7.6},0).wait(1).to({rotation:16,x:12.9,y:6.6},0).wait(1).to({rotation:14,x:11.4,y:5.6},0).wait(1).to({rotation:12,x:9.9,y:4.6},0).wait(1).to({rotation:10,x:8.3,y:3.7},0).wait(1).to({rotation:8,x:6.7,y:2.9},0).wait(1).to({rotation:6,x:5.1,y:2.1},0).wait(1).to({rotation:4,x:3.4,y:1.3},0).wait(1).to({rotation:2,x:1.7,y:0.7},0).wait(1).to({rotation:0,x:0,y:0},0).wait(1).to({rotation:-2,x:-1.7,y:-0.5},0).wait(1).to({rotation:-4,x:-3.4,y:-1},0).wait(1).to({rotation:-6,x:-5.1,y:-1.5},0).wait(1).to({rotation:-8,x:-6.9,y:-1.8},0).wait(1).to({rotation:-10,x:-8.7,y:-2.2},0).wait(1).to({rotation:-8,x:-6.9,y:-1.8},0).wait(1).to({rotation:-6,x:-5.1,y:-1.5},0).wait(1).to({rotation:-4,x:-3.4,y:-1},0).wait(1).to({rotation:-2,x:-1.7,y:-0.5},0).wait(1).to({rotation:0,x:0,y:0},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-50,-52,100,104);


// stage content:
(lib.Untitled2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_13
	this.instance = new lib.bear1_1();
	this.instance.parent = this;
	this.instance.setTransform(-50,837);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:6.7,regY:6.3,x:-39.2,y:843.3},0).wait(1).to({x:-35.2},0).wait(1).to({x:-31.1},0).wait(1).to({x:-27.1},0).wait(1).to({x:-23},0).wait(1).to({x:-19},0).wait(1).to({x:-14.9},0).wait(1).to({x:-10.9},0).wait(1).to({x:-6.8},0).wait(1).to({x:-2.8},0).wait(1).to({x:1.3},0).wait(1).to({x:5.3},0).wait(1).to({x:9.3},0).wait(1).to({x:13.4},0).wait(1).to({x:17.4},0).wait(1).to({x:21.5},0).wait(1).to({x:25.5},0).wait(1).to({x:29.6},0).wait(1).to({x:33.6},0).wait(1).to({x:37.7},0).wait(1).to({x:41.7},0).wait(1).to({x:45.8},0).wait(1).to({x:49.8},0).wait(1).to({x:53.9},0).wait(1).to({x:57.9},0).wait(1).to({x:62},0).wait(1).to({x:66},0).wait(1).to({x:70},0).wait(1).to({x:74.1},0).wait(1).to({x:78.1},0).wait(1).to({x:82.2},0).wait(1).to({x:86.2},0).wait(1).to({x:90.3},0).wait(1).to({x:94.3},0).wait(1).to({x:98.4},0).wait(1).to({x:102.4},0).wait(1).to({x:106.5},0).wait(1).to({x:110.5},0).wait(1).to({x:114.6},0).wait(1).to({x:118.6},0).wait(1).to({x:122.7},0).wait(1).to({x:126.7},0).wait(1).to({x:130.8},0).wait(1).to({x:134.8},0).wait(1).to({x:138.9},0).wait(1).to({x:142.9},0).wait(1).to({x:147},0).wait(1).to({x:151},0).wait(1).to({x:155.1},0).wait(1).to({x:159.1},0).wait(1).to({x:163.2},0).wait(1).to({x:167.2},0).wait(1).to({x:171.2},0).wait(1).to({x:175.3},0).wait(1).to({x:179.3},0).wait(1).to({x:183.4},0).wait(1).to({x:187.4},0).wait(1).to({x:191.5},0).wait(1).to({x:195.5},0).wait(1).to({x:199.6},0).wait(1).to({x:203.6},0).wait(1).to({x:207.7},0).wait(1).to({x:211.7},0).wait(1).to({x:215.8},0).wait(1).to({x:219.8},0).wait(1).to({x:223.9},0).wait(1).to({x:227.9},0).wait(1).to({x:232},0).wait(1).to({x:236},0).wait(1).to({x:240.1},0).wait(1).to({x:244.1},0).wait(1).to({x:248.2},0).wait(1).to({x:252.2},0).wait(1).to({x:256.3},0).wait(1).to({x:260.3},0).wait(1).to({x:264.4},0).wait(1).to({x:268.4},0).wait(1).to({x:272.5},0).wait(1).to({x:276.5},0).wait(1).to({x:280.5},0).wait(1).to({x:284.6},0).wait(1).to({x:288.6},0).wait(1).to({x:292.7},0).wait(1).to({x:296.7},0).wait(1).to({x:300.8},0).wait(1).to({x:304.8},0).wait(1).to({x:308.9},0).wait(1).to({x:312.9},0).wait(1).to({x:317},0).wait(1).to({x:321},0).wait(1).to({x:325.1},0).wait(1).to({x:329.1},0).wait(1).to({x:333.2},0).wait(1).to({x:337.2},0).wait(1).to({x:341.3},0).wait(1).to({x:345.3},0).wait(1).to({x:349.4},0).wait(1).to({x:353.4},0).wait(1).to({x:357.5},0).wait(1).to({x:361.5},0).wait(1).to({x:365.6},0).wait(1).to({x:369.6},0).wait(1).to({x:373.7},0).wait(1).to({x:377.7},0).wait(1).to({x:381.8},0).wait(1).to({x:385.8},0).wait(1).to({x:389.8},0).wait(1).to({x:393.9},0).wait(1).to({x:397.9},0).wait(1).to({x:402},0).wait(1).to({x:406},0).wait(1).to({x:410.1},0).wait(1).to({x:414.1},0).wait(1).to({x:418.2},0).wait(1).to({x:422.2},0).wait(1).to({x:426.3},0).wait(1).to({x:430.3},0).wait(1).to({x:434.4},0).wait(1).to({x:438.4},0).wait(1).to({x:442.5},0).wait(1).to({x:446.5},0).wait(1).to({x:450.6},0).wait(1).to({x:454.6},0).wait(1).to({x:458.7},0).wait(1).to({x:462.7},0).wait(1).to({x:466.8},0).wait(1).to({x:470.8},0).wait(1).to({x:474.9},0).wait(1).to({x:478.9},0).wait(1).to({x:483},0).wait(1).to({x:487},0).wait(1).to({x:491},0).wait(1).to({x:495.1},0).wait(1).to({x:499.1},0).wait(1).to({x:503.2},0).wait(1).to({x:507.2},0).wait(1).to({x:511.3},0).wait(1).to({x:515.3},0).wait(1).to({x:519.4},0).wait(1).to({x:523.4},0).wait(1).to({x:527.5},0).wait(1).to({x:531.5},0).wait(1).to({x:535.6},0).wait(1).to({x:539.6},0).wait(1).to({x:543.7},0).wait(1).to({x:547.7},0).wait(1).to({x:551.8},0).wait(1).to({x:555.8},0).wait(1).to({x:559.9},0).wait(1).to({x:563.9},0).wait(1).to({x:568},0).wait(1).to({x:572},0).wait(1).to({x:576.1},0).wait(1).to({x:580.1},0).wait(1).to({x:584.2},0).wait(1).to({x:588.2},0).wait(1).to({x:592.3},0).wait(1).to({x:596.3},0).wait(1).to({x:600.3},0).wait(1).to({x:604.4},0).wait(1).to({x:608.4},0).wait(1).to({x:612.5},0).wait(1).to({x:616.5},0).wait(1).to({x:620.6},0).wait(1).to({x:624.6},0).wait(1).to({x:628.7},0).wait(1).to({x:632.7},0).wait(1).to({x:636.8},0).wait(1).to({x:640.8},0).wait(1).to({x:644.9},0).wait(1).to({x:648.9},0).wait(1).to({x:653},0).wait(1).to({x:657},0).wait(1).to({x:661.1},0).wait(1).to({x:665.1},0).wait(1).to({x:669.2},0).wait(1).to({x:673.2},0).wait(1).to({x:677.3},0).wait(1).to({x:681.3},0).wait(1).to({x:685.4},0).wait(1).to({x:689.4},0).wait(1).to({x:693.5},0).wait(1).to({x:697.5},0).wait(1).to({x:701.5},0).wait(1).to({x:705.6},0).wait(1).to({x:709.6},0).wait(1).to({x:713.7},0).wait(1).to({x:717.7},0).wait(1).to({x:721.8},0).wait(1).to({x:725.8},0).wait(1).to({x:729.9},0).wait(1).to({x:733.9},0).wait(1).to({x:738},0).wait(1).to({x:742},0).wait(1).to({x:746.1},0).wait(1).to({x:750.1},0).wait(1).to({x:754.2},0).wait(1).to({x:758.2},0).wait(1).to({x:762.3},0).wait(1).to({x:766.3},0).wait(1).to({x:770.4},0).wait(1).to({x:774.4},0).wait(1).to({x:778.5},0).wait(1).to({x:782.5},0).wait(1).to({x:786.6},0).wait(1).to({x:790.6},0).wait(1).to({x:794.7},0).wait(1).to({x:798.7},0).wait(1).to({x:802.8},0).wait(1).to({x:806.8},0).wait(1).to({x:810.8},0).wait(1).to({x:814.9},0).wait(1).to({x:818.9},0).wait(1).to({x:823},0).wait(1).to({x:827},0).wait(1).to({x:831.1},0).wait(1).to({x:835.1},0).wait(1).to({x:839.2},0).wait(1).to({x:843.2},0).wait(1).to({x:847.3},0).wait(1).to({x:851.3},0).wait(1).to({x:855.4},0).wait(1).to({x:859.4},0).wait(1).to({x:863.5},0).wait(1).to({x:867.5},0).wait(1).to({x:871.6},0).wait(1).to({x:875.6},0).wait(1).to({x:879.7},0).wait(1).to({x:883.7},0).wait(1).to({x:887.8},0).wait(1).to({x:891.8},0).wait(1).to({x:895.9},0).wait(1).to({x:899.9},0).wait(1).to({x:904},0).wait(1).to({x:908},0).wait(1).to({x:912.1},0).wait(1).to({x:916.1},0).wait(1).to({x:920.1},0).wait(1).to({x:924.2},0).wait(1).to({x:928.2},0).wait(1).to({x:932.3},0).wait(1).to({x:936.3},0).wait(1).to({x:940.4},0).wait(1).to({x:944.4},0).wait(1).to({x:948.5},0).wait(1).to({x:952.5},0).wait(1).to({x:956.6},0).wait(1).to({x:960.6},0).wait(1).to({x:964.7},0).wait(1).to({x:968.7},0).wait(1).to({x:972.8},0).wait(1).to({x:976.8},0).wait(1).to({x:980.9},0).wait(1).to({x:984.9},0).wait(1).to({x:989},0).wait(1).to({x:993},0).wait(1).to({x:997.1},0).wait(1).to({x:1001.1},0).wait(1).to({x:1005.2},0).wait(1).to({x:1009.2},0).wait(1).to({x:1013.3},0).wait(1).to({x:1017.3},0).wait(1).to({x:1021.3},0).wait(1).to({x:1025.4},0).wait(1).to({x:1029.4},0).wait(1).to({x:1033.5},0).wait(1).to({x:1037.5},0).wait(1).to({x:1041.6},0).wait(1).to({x:1045.6},0).wait(1).to({x:1049.7},0).wait(1).to({x:1053.7},0).wait(1).to({x:1057.8},0).wait(1).to({x:1061.8},0).wait(1).to({x:1065.9},0).wait(1).to({x:1069.9},0).wait(1).to({x:1074},0).wait(1).to({x:1078},0).wait(1).to({x:1082.1},0).wait(1).to({x:1086.1},0).wait(1).to({x:1090.2},0).wait(1).to({x:1094.2},0).wait(1).to({x:1098.3},0).wait(1).to({x:1102.3},0).wait(1).to({x:1106.4},0).wait(1).to({x:1110.4},0).wait(1).to({x:1114.5},0).wait(1).to({x:1118.5},0).wait(1).to({x:1122.6},0).wait(1).to({x:1126.6},0).wait(1).to({x:1130.6},0).wait(1).to({x:1134.7},0).wait(1).to({x:1138.7},0).wait(1).to({x:1142.8},0).wait(1).to({x:1146.8},0).wait(1).to({x:1150.9},0).wait(1).to({x:1154.9},0).wait(1).to({x:1159},0).wait(1).to({x:1163},0).wait(1).to({x:1167.1},0).wait(1).to({x:1171.1},0).wait(1).to({x:1175.2},0).wait(1).to({x:1179.2},0).wait(1).to({x:1183.3},0).wait(1).to({x:1187.3},0).wait(1).to({x:1191.4},0).wait(1).to({x:1195.4},0).wait(1).to({x:1199.5},0).wait(1).to({x:1203.5},0).wait(1).to({x:1207.6},0).wait(1).to({x:1211.6},0).wait(1).to({x:1215.7},0).wait(1).to({x:1219.7},0).wait(1).to({x:1223.8},0).wait(1).to({x:1227.8},0).wait(1).to({x:1231.9},0).wait(1).to({x:1235.9},0).wait(1).to({x:1239.9},0).wait(1).to({x:1244},0).wait(1).to({x:1248},0).wait(1).to({x:1252.1},0).wait(1).to({x:1256.1},0).wait(1).to({x:1260.2},0).wait(1).to({x:1264.2},0).wait(1).to({x:1268.3},0).wait(1).to({x:1272.3},0).wait(1).to({x:1276.4},0).wait(1).to({x:1280.4},0).wait(1).to({x:1284.5},0).wait(1).to({x:1288.5},0).wait(1).to({x:1292.6},0).wait(1).to({x:1296.6},0).wait(1).to({x:1300.7},0).wait(1).to({x:1304.7},0).wait(1).to({x:1308.8},0).wait(1).to({x:1312.8},0).wait(1).to({x:1316.9},0).wait(1).to({x:1320.9},0).wait(1).to({x:1325},0).wait(1).to({x:1329},0).wait(1).to({x:1333.1},0).wait(1).to({x:1337.1},0).wait(1).to({x:1341.1},0).wait(1).to({x:1345.2},0).wait(1).to({x:1349.2},0).wait(1).to({x:1353.3},0).wait(1).to({x:1357.3},0).wait(1).to({x:1361.4},0).wait(1).to({x:1365.4},0).wait(1).to({x:1369.5},0).wait(1).to({x:1373.5},0).wait(1).to({x:1377.6},0).wait(1).to({x:1381.6},0).wait(1).to({x:1385.7},0).wait(1).to({x:1389.7},0).wait(1).to({x:1393.8},0).wait(1).to({x:1397.8},0).wait(1).to({x:1401.9},0).wait(1).to({x:1405.9},0).wait(1).to({x:1410},0).wait(1).to({x:1414},0).wait(1).to({x:1418.1},0).wait(1).to({x:1422.1},0).wait(1).to({x:1426.2},0).wait(1).to({x:1430.2},0).wait(1).to({x:1434.3},0).wait(1).to({x:1438.3},0).wait(1).to({x:1442.4},0).wait(1).to({x:1446.4},0).wait(1).to({x:1450.4},0).wait(1).to({x:1454.5},0).wait(1).to({x:1458.5},0).wait(1).to({x:1462.6},0).wait(1).to({x:1466.6},0).wait(1).to({x:1470.7},0).wait(1).to({x:1474.7},0).wait(1).to({x:1478.8},0).wait(1).to({x:1482.8},0).wait(1).to({x:1486.9},0).wait(1).to({x:1490.9},0).wait(1).to({x:1495},0).wait(1).to({x:1499},0).wait(1).to({x:1503.1},0).wait(1).to({x:1507.1},0).wait(1).to({x:1511.2},0).wait(1).to({x:1515.2},0).wait(1).to({x:1519.3},0).wait(1).to({x:1523.3},0).wait(1).to({x:1527.4},0).wait(1).to({x:1531.4},0).wait(1).to({x:1535.5},0).wait(1).to({x:1539.5},0).wait(1).to({x:1543.6},0).wait(1).to({x:1547.6},0).wait(1).to({x:1551.6},0).wait(1).to({x:1555.7},0).wait(1).to({x:1559.7},0).wait(1).to({x:1563.8},0).wait(1).to({x:1567.8},0).wait(1).to({x:1571.9},0).wait(1).to({x:1575.9},0).wait(1).to({x:1580},0).wait(1).to({x:1584},0).wait(1).to({x:1588.1},0).wait(1).to({x:1592.1},0).wait(1).to({x:1596.2},0).wait(1).to({x:1600.2},0).wait(1).to({x:1604.3},0).wait(1).to({x:1608.3},0).wait(1).to({x:1612.4},0).wait(1).to({x:1616.4},0).wait(1).to({x:1620.5},0).wait(1).to({x:1624.5},0).wait(1).to({x:1628.6},0).wait(1).to({x:1632.6},0).wait(1).to({x:1636.7},0).wait(1).to({x:1640.7},0).wait(1).to({x:1644.8},0).wait(1).to({x:1648.8},0).wait(1).to({x:1652.8},0).wait(1).to({x:1656.9},0).wait(1).to({x:1660.9},0).wait(1).to({x:1665},0).wait(1).to({x:1669},0).wait(1).to({x:1673.1},0).wait(1).to({x:1677.1},0).wait(1).to({x:1681.2},0).wait(1).to({x:1685.2},0).wait(1).to({x:1689.3},0).wait(1).to({x:1693.3},0).wait(1).to({x:1697.4},0).wait(1).to({x:1701.4},0).wait(1).to({x:1705.5},0).wait(1).to({x:1709.5},0).wait(1).to({x:1713.6},0).wait(1).to({x:1717.6},0).wait(1).to({x:1721.7},0).wait(1).to({x:1725.7},0).wait(1).to({x:1729.8},0).wait(1).to({x:1733.8},0).wait(1).to({x:1737.9},0).wait(1).to({x:1741.9},0).wait(1).to({x:1746},0).wait(1).to({x:1750},0).wait(1).to({x:1754.1},0).wait(1).to({x:1758.1},0).wait(1).to({x:1762.2},0).wait(1).to({x:1766.2},0).wait(1).to({x:1770.2},0).wait(1).to({x:1774.3},0).wait(1).to({x:1778.3},0).wait(1).to({x:1782.4},0).wait(1).to({x:1786.4},0).wait(1).to({x:1790.5},0).wait(1).to({x:1794.5},0).wait(1).to({x:1798.6},0).wait(1).to({x:1802.6},0).wait(1).to({x:1806.7},0).wait(1).to({x:1810.7},0).wait(1).to({x:1814.8},0).wait(1).to({x:1818.8},0).wait(1).to({x:1822.9},0).wait(1).to({x:1826.9},0).wait(1).to({x:1831},0).wait(1).to({x:1835},0).wait(1).to({x:1839.1},0).wait(1).to({x:1843.1},0).wait(1).to({x:1847.2},0).wait(1).to({x:1851.2},0).wait(1).to({x:1855.3},0).wait(1).to({x:1859.3},0).wait(1).to({x:1863.4},0).wait(1).to({x:1867.4},0).wait(1).to({x:1871.4},0).wait(1).to({x:1875.5},0).wait(1).to({x:1879.5},0).wait(1).to({x:1883.6},0).wait(1).to({x:1887.6},0).wait(1).to({x:1891.7},0).wait(1).to({x:1895.7},0).wait(1).to({x:1899.8},0).wait(1).to({x:1903.8},0).wait(1).to({x:1907.9},0).wait(1).to({x:1911.9},0).wait(1).to({x:1916},0).wait(1).to({x:1920},0).wait(1).to({x:1924.1},0).wait(1).to({x:1928.1},0).wait(1).to({x:1932.2},0).wait(1).to({x:1936.2},0).wait(1).to({x:1940.3},0).wait(1).to({x:1944.3},0).wait(1).to({x:1948.4},0).wait(1).to({x:1952.4},0).wait(1).to({x:1956.5},0).wait(1).to({x:1960.5},0).wait(1).to({x:1964.6},0).wait(1).to({x:1968.6},0).wait(1).to({x:1972.7},0).wait(1).to({x:1976.7},0).wait(1));

	// Layer_11
	this.instance_1 = new lib.Bitmap8();
	this.instance_1.parent = this;
	this.instance_1.setTransform(1184,756);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(500));

	// Layer_10
	this.instance_2 = new lib.bear31();
	this.instance_2.parent = this;
	this.instance_2.setTransform(1320.5,762);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(249).to({_off:false},0).wait(251));

	// Layer_14
	this.instance_3 = new lib.Bitmap10();
	this.instance_3.parent = this;
	this.instance_3.setTransform(513,311);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(500));

	// home
	this.instance_4 = new lib.Bitmap3();
	this.instance_4.parent = this;
	this.instance_4.setTransform(245,278);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(500));

	// Layer_8
	this.instance_5 = new lib.bear2();
	this.instance_5.parent = this;
	this.instance_5.setTransform(690,541);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(100).to({_off:false},0).wait(400));

	// Layer_9
	this.instance_6 = new lib.Bitmap5();
	this.instance_6.parent = this;
	this.instance_6.setTransform(593,479);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(500));

	// Layer_6
	this.instance_7 = new lib.star();
	this.instance_7.parent = this;
	this.instance_7.setTransform(187.8,247);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(500));

	// Layer_5
	this.instance_8 = new lib.star();
	this.instance_8.parent = this;
	this.instance_8.setTransform(1504.4,341.9,0.834,0.834);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(500));

	// Layer_4
	this.instance_9 = new lib.star();
	this.instance_9.parent = this;
	this.instance_9.setTransform(1735.2,297.2,0.477,0.477);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(500));

	// Layer_3
	this.instance_10 = new lib.star();
	this.instance_10.parent = this;
	this.instance_10.setTransform(434.9,338,0.502,0.502);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(500));

	// Layer_2
	this.instance_11 = new lib.star();
	this.instance_11.parent = this;
	this.instance_11.setTransform(1049.9,280);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(500));

	// bg
	this.instance_12 = new lib.Bitmap1();
	this.instance_12.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(500));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(860,450,2020,900);
// library properties:
lib.properties = {
	id: 'AE500F3B80307A4F986AC3948D5EAE1F',
	width: 1920,
	height: 900,
	fps: 50,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
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