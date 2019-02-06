Page({
  data: {
    gender: [
      { value: 'male', name: '男' },
      { value: 'female', name: '女' },
    ],

    array: ['--请选择--','数学与统计学院', '物理学院', '化学与化工学院', '机械科学与工程学院', '材料科学与工程学院', '能源与动力工程学院', '电气与电子工程学院', '船舶与海洋工程学院', '生命科学与技术学院', '电子信息与通信学院', '光学与电子信息学院', '计算机科学与技术学院', '软件学院', '自动化学院', '建筑与城市规划学院', '土木工程与力学学院', '环境科学与工程学院', '水电与数字化工程学院', '管理学院', '外国语学院', '新闻与信息传播学院', '法学院', '公共管理学院', '人文学院', '社会学院', '临床学院', '公共卫生学院', '法医学系', '护理学院', '药学院', '医药卫生管理学院', '工程科学学院', '基础医学院'],
    // objectArray: [
    //   {
    //     id: 0,
    //     name: '--请选择--'
    //   },
    //   {
    //     id: 1,
    //     name: '数学与统计学院'
    //   },
    //   {
    //     id: 2,
    //     name: '物理学院'
    //   },
    //   {
    //     id: 3,
    //     name: '化学与化工学院'
    //   },
    //   {
    //     id: 4,
    //     name: '机械科学与工程学院'
    //   },
    //   {
    //     id: 5,
    //     name: '材料科学与工程学院'
    //   },
    //   {
    //     id: 6,
    //     name: '能源与动力工程学院'
    //   },
    //   {
    //     id: 7,
    //     name: '电气与电子工程学院'
    //   },
    //   {
    //     id: 8,
    //     name: '船舶与海洋工程学院'
    //   },
    //   {
    //     id: 9,
    //     name: '生命科学与技术学院'
    //   },
    //   {
    //     id: 10,
    //     name: '电子信息与通信学院'
    //   },
    //   {
    //     id: 11,
    //     name: '光学与电子信息学院'
    //   },
    //   {
    //     id: 12,
    //     name: '计算机科学与技术学院'
    //   },
    //   {
    //     id: 13,
    //     name: '软件学院'
    //   },
    //   {
    //     id: 14,
    //     name: '自动化学院'
    //   },
    //   {
    //     id: 15,
    //     name: '建筑与城市规划学院'
    //   },
    //   {
    //     id: 16,
    //     name: '土木工程与力学学院'
    //   },
    //   {
    //     id: 17,
    //     name: '环境科学与工程学院'
    //   },
    //   {
    //     id: 18,
    //     name: '水电与数字化工程学院'
    //   },
    //   {
    //     id: 19,
    //     name: '管理学院'
    //   },
    //   {
    //     id: 20,
    //     name: '外国语学院'
    //   },
    //   {
    //     id: 21,
    //     name: '新闻与信息传播学院'
    //   },
    //   {
    //     id: 22,
    //     name: '法学院'
    //   },
    //   {
    //     id: 23,
    //     name: '公共管理学院'
    //   },
    //   {
    //     id: 24,
    //     name: '人文学院'
    //   },
    //   {
    //     id: 25,
    //     name: '社会学院'
    //   },
    //   {
    //     id: 26,
    //     name: '临床学院'
    //   },
    //   {
    //     id: 27,
    //     name: '公共卫生学院'
    //   },
    //   {
    //     id: 28,
    //     name: '法医学系'
    //   },
    //   {
    //     id: 29,
    //     name: '护理学院'
    //   },
    //   {
    //     id: 30,
    //     name: '药学院'
    //   },
    //   {
    //     id: 31,
    //     name: '医药卫生管理学院'
    //   },
    //   {
    //     id: 32,
    //     name: '工程科学学院'
    //   },
    //   {
    //     id: 33,
    //     name: '基础医学院'
    //   }
    // ],
    index:0,

    array1: ['--请选择--', '外联企划部', '宣传部', '公共关系部','财务监督委员会','秘书部','财务部','媒体部','外联部','新媒体工作室','行政监察部','人力资源部','文艺拓展部','思存工作室'],
    // objectArray: [
    //   {
    //     id: 34,
    //     name: '--请选择--'
    //   },
    //   {
    //     id: 35,
    //     name: '外联企划部'
    //   },
    //   {
    //     id: 36,
    //     name: '宣传部'
    //   },
    //   {
    //     id: 37,
    //     name: '公共关系部'
    //   },
    //   {
    //     id: 38,
    //     name: '财务监督委员会'
    //   },
    //   {
    //     id: 39,
    //     name: '秘书部'
    //   },
    //   {
    //     id: 40,
    //     name: '财务部'
    //   },
    //   {
    //     id: 41,
    //     name: '媒体部'
    //   },
    //   {
    //     id: 42,
    //     name: '外联部'
    //   },
    //   {
    //     id: 43,
    //     name: '新媒体工作室'
    //   },
    //   {
    //     id: 44,
    //     name: '行政监察部'
    //   },
    //   {
    //     id: 45,
    //     name: '人力资源部'
    //   },
    //   {
    //     id: 46,
    //     name: '文艺拓展部'
    //   },
    //   {
    //     id: 47,
    //     name: '思存工作室'
    //   },
    // ],
    index1: 0,

    array2: ['--请选择--', '外联企划部', '宣传部', '公共关系部', '财务监督委员会', '秘书部', '财务部', '媒体部', '外联部', '新媒体工作室', '行政监察部', '人力资源部', '文艺拓展部', '思存工作室'],
    // objectArray: [
    //   {
    //     id: 48,
    //     name: '--请选择--'
    //   },
    //   {
    //     id: 49,
    //     name: '外联企划部'
    //   },
    //   {
    //     id: 50,
    //     name: '宣传部'
    //   },
    //   {
    //     id: 51,
    //     name: '公共关系部'
    //   },
    //   {
    //     id: 52,
    //     name: '财务监督委员会'
    //   },
    //   {
    //     id: 53,
    //     name: '秘书部'
    //   },
    //   {
    //     id: 54,
    //     name: '财务部'
    //   },
    //   {
    //     id: 55,
    //     name: '媒体部'
    //   },
    //   {
    //     id: 56,
    //     name: '外联部'
    //   },
    //   {
    //     id: 57,
    //     name: '新媒体工作室'
    //   },
    //   {
    //     id: 58,
    //     name: '行政监察部'
    //   },
    //   {
    //     id: 59,
    //     name: '人力资源部'
    //   },
    //   {
    //     id: 60,
    //     name: '文艺拓展部'
    //   },
    //   {
    //     id: 61,
    //     name: '思存工作室'
    //   },
    // ],
    index2: 0,

    date: '--请选择--',
    region: ['--请选择--', '--请选择--','--请选择--'],
    customItem: '--请选择--'
  },



  bindDateChange: function (e) {
    this.setData({
      date: e.detail.value
    })
  },

  bindRegionChange: function (e) {
    this.setData({
      region: e.detail.value
    })
  },

  bindPickerChange: function (e) {
    this.setData({
      index: e.detail.value
    })
  },
  bindPickerChange1: function (e) {
    this.setData({
      index1: e.detail.value
    })
  },
  bindPickerChange2: function (e) {
    this.setData({
      index2: e.detail.value
    })
  },
  check: function (e) {
    var contents=e.detail.value;
    console.log(contents);
    if (contents["name"].length === 0){
      wx.showModal({
        title: "信息不完整或有错误",
        content: "请填写您的姓名",
        showCancel: false,
        confirmText: "确定"
      });
      return;
    }

    if (contents["gender"].length === 0) {
      wx.showModal({
        title: "信息不完整或有错误",
        content: "请填写您的性别",
        showCancel: false,
        confirmText: "确定"
      });
      return;
    }

    if (contents["number"].length === 0) {
      wx.showModal({
        title: "信息不完整或有错误",
        content: "请填写您的学号",
        showCancel: false,
        confirmText: "确定"
      });
      return;
    }

    if (contents["phonenumber"].length === 0) {
      wx.showModal({
        title: "信息不完整或有错误",
        content: "请填写您的手机号码",
        showCancel: false,
        confirmText: "确定"
      });
      return;
    }

    if (contents["phonenumber"].length < 11) {
      wx.showModal({
        title: "信息不完整或有错误",
        content: "请重新填写您的手机号码",
        showCancel: false,
        confirmText: "确定"
      });
      return;
    }

    if (contents["firstchoice"] === 0) {
      wx.showModal({
        title: "信息不完整或有错误",
        content: "请填写您的第一志愿",
        showCancel: false,
        confirmText: "确定"
      });
      return;
    }
  }
})