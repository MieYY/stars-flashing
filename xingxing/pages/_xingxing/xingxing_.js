// pages/_xingxing/xingxing_.js
var can;
var stars = [];
/**定义星星 */
var starObj = function () {
  this.x;
  this.y;
  this.picNo;
  this.timer;
}
/**初始化数据 */
starObj.prototype.init = function () {
  this.x = Math.random() * 400;
  this.y = Math.random() * 600;
  this.picNo = 0;
  this.timer = 0;
}
/**生成星星 */
starObj.prototype.draw = function () {
  can.drawImage('../common/images/star.png', this.picNo * 7, 0, 7, 7, this.x, this.y, 7, 7);
}
/**动起来 */
starObj.prototype.undate = function () {
  this.picNo += 1;
  if(this.picNo >= 7){
    this.picNo = 0;
  }
}

Page({
  /**
   * 页面的初始数据
   */
  data: {
    num:60, //生成星星数量
    stars:[]  // 星星数组
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    can = wx.createCanvasContext('canvas');
    /* 批量生成星星 并且初始化 */
    for (var i = 0; i < this.data.num; i++) {
      var obj = new starObj();
      stars.push(obj);
      stars[i].init();
    }

    this.gameloop(); //进行
    can.draw();
   
  },
  /**进行*/
  gameloop(){
    setTimeout(this.gameloop, 300);
    this.drawStars();
  },
  /**生成动起来 **/
  drawStars(){
    for (var i = 0; i < this.data.num; i++) {     
      stars[i].undate();
      stars[i].draw();
    }
    can.draw();
  },


  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
   
  },


  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})
 