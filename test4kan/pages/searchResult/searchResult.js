// pages/searchResult/searchResult.js

Page({
	/**
	 * 页面的初始数据
	 */
	data: {
		'keywords': '',
		'response': [],
		'engine': '',
	},
	getInput: function (res) {
		this.setData({
			keywords: res.detail.value
		})
	},


	searchSubmit: function (event) {
		const that = this
		wx.request({
			url: 'http://8.130.16.172/' + that.data.engine,
			data: {
				key: that.data.keywords,
			},
			method: 'GET',
			success: function (res) {
				if (that.data.engine == 'vocadb') {
					that.setData({
						response: res.data.items,
					})
				};
				if (that.data.engine == 'moegirl') {
					that.setData({
						response: res.data,
					});
				}
				console.log("logic success")
			},
			fail: function (res) {
				that.setData({
					response: [{
						defaultName: "栞酱没有找到结果QAQ"
					}]
				})
			}

		})
	},
	/**
	 * 生命周期函数--监听页面加载
	 */
	onLoad: function (options) {
		const eventChannel = this.getOpenerEventChannel()
		const that = this
		eventChannel.on('getEngine', function (data) {
			that.setData({
				engine: data.data
			});
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

	},
	method: {

	}
})