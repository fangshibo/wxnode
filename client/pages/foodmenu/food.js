// pages/foodmenu/food.js

var qcloud = require('../../vendor/wafer2-client-sdk/index')
var config = require('../../config')
var util = require('../../utils/util.js')

Page({

  data: {
    text:"dsfa",
    imgUrl:"",
    cls: [],

  },

  formSubmit: function (e) {

    console.log('form发生了submit事件，携带数据为：', e.detail.value);
    wx.request({
      url: 'https://ffwpmqdm.qcloud.la/weapp/food', //仅为示例，并非真实的接口地址
      data: {
        aa:e.detail.value
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {
        console.log(res.data)
      }
    })



  },

  fsb:function(){
    var that = this
    wx.request({
      url: 'https://fsb.nn888.xyz/1/index.php/user/showaa', //仅为示例，并非真实的接口地址
      data: {
       
      },
      dataType: "json",
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {
        var aab=res.data
        console.log(aab[1])
        
      }
    })

  },

  doUpload: function () {
    var that = this

    // 选择图片
    wx.chooseImage({
      count: 1,
      sizeType: ['compressed'],
      sourceType: ['album', 'camera'],
      success: function (res) {
      var filePath = res.tempFilePaths[0]

              // that.setData({
              //     imgUrl: filePath,
              //    // imgname:res.data.imgKey
              //  })


    wx.uploadFile({
             // url: config.service.uploadUrl,
             url: "https://fsb.nn888.xyz/index.php/upload/do_upload",
             filePath: filePath,
             name: 'userfile',

             success: function (res) {
               util.showSuccess('上传图片成功')

                // res = JSON.parse(res)
                console.log(res.data)
               // console.log(res.data.imgUrl)
               that.setData({
                  imgUrl: res.data.imgUrl,
                 imgname:res.data.imgKey
               })
             },

             fail: function (e) {
               util.showModel('上传图片失败')
             }
           })



      },
      fail: function (e) {
        console.error(e)
      }


    })
  },
  upld:function(e){
    //   wx.login({
    //   success: function(res) {
    //     if (res.code) {
    //       console.log(res.code)
    //       //发起网络请求
    //       wx.request({
    //         url: 'https://fsb.nn888.xyz/code.php',

    //         data: {
    //           code: res.code
    //         },
    //         success:function(res){
    //           console.log(res.data)
    //         }
    //       })
    //     } else {
    //       console.log('登录失败！' + res.errMsg)
    //     }
    //   }
    // });
      wx.getUserInfo({
        success: function (res) {
          var userInfo = res.userInfo
          var nickName = userInfo.nickName
          var avatarUrl = userInfo.avatarUrl
          var gender = userInfo.gender //性别 0：未知、1：男、2：女
          var province = userInfo.province
          var city = userInfo.city
          var country = userInfo.country
          console.log(res.userInfo)
        }
      })

  },
  // 预览图片
  previewImg: function () {

    // wx.previewImage({
    //   current: this.data.imgUrl,
    //   urls: [this.data.imgUrl]

    // })


     var that = this

    // 选择图片
    wx.chooseImage({
      count: 1,
      sizeType: ['compressed'],
      sourceType: ['album', 'camera'],
      success: function (res) {
        var filePath = res.tempFilePaths[0]

              that.setData({
                  imgUrl: filePath,
                 // imgname:res.data.imgKey
               })


      },
      fail: function (e) {
        console.error(e)
      }


    })

  },
  /**
   * 页面的初始数据
   */


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    var that = this
    wx.request({
      url: 'https://fsb.nn888.xyz/1/index.php/food/showaa', //仅为示例，并非真实的接口地址
      data: {

      },
      dataType: "json",
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {
        var cls = res.data
        that.setData({
          
          cls : cls,
          
        }),
          console.log(cls)

      }
    })


  },
  bindPickerChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index: e.detail.value
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