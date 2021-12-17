// pages/random/random.js
Page({

	/**
	 * 页面的初始数据
	 */
	data: {
		source:'',
		words:'',
		song:''
	},

	/**
	 * 生命周期函数--监听页面加载
	 */
	onLoad: function (options) {
		const that = this
		wx.request({
		  url: 'http://8.130.16.172/pixiv',
		  success: function (res) {
			  that.setData({
				  source: res.data.imgurl
			  })
			console.log(res.data.imgurl)
		  }
		}),
		wx.request({
		  url: 'http://8.130.16.172/sentence',
		  success: function (res) {
			  that.setData({
				words: res.data.hitokoto
			  })
			console.log(res.data.hitokoto)
		  }
		}),
		wx.request({
		  url: 'http://8.130.16.172/music',
		  success: function (res) {
			  that.setData({
				song: res.data
			  });
			  console.log(that.data.song)
		  }
		})
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