
Page({
    data:{
      imagesList:[]
    },
    onLoad(){
      wx.request({
        url: 'https://api.zbztb.cn/api/public/v1/home/swiperdata',
        success: (result)=> {
          this.setData({
              imagesList:result.data.message
          })
          // console.log(this.data.imagesList)
         

        },
      })
    }
})

  