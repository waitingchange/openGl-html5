
var TestFilterLayer = cc.Layer.extend({
	sprite:null,
	ctor:function () {
		this._super();
		var size = cc.winSize;
		var node1 =new  cc.Sprite("res/demo.png");
		this.addChild(node1);
		node1.x = size.width/2;
		node1.y =  300;

		var node2 = new cc.Sprite("res/demo.png");
		this.addChild(node2);
		node2.x = size.width/2;
		node2.y =  130;
		Filter.grayScale(node2);
	}
});

