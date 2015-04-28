

var HelloWorldScene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new TestFilterLayer();
        this.addChild(layer);
    }
});

