const path = require('path')
module.exports = ({ file }) => {
  return {
    plugins: {
      autoprefixer: {},
      'postcss-px-to-viewport': {
        viewportWidth: 750,  // 视窗的宽度,对应设计稿宽度
        // viewportHeight: 667, // 视窗的高度, 根据375设备的宽度来指定，一般是667，也可不配置
        unitPrecision: 3, // 指定`px`转换为视窗单位值的小数位数
        viewportUnit: 'vw', // 指定需要转换成视窗单位
        selectorBlackList: ['.ignore', '.hairlines'],
        minPixelValue: 1,  // 小于或等于`1px`时不转换为视窗单位
        mediaQuery: false, // 允许在媒体查询中转换`px`
        unitToConvert: "px", // 默认值`px`，需要转换的单位
        propList: ["*"], // 转化为vw的属性列表
        fontViewportUnit: "vw", // 字体使用的视窗单位
        replace: true, // 是否直接更换属性值而不添加备用属性
        exclude: '', // 忽略某些文件夹下的文件或特定文件
        landscape: false, // 是否添加根据landscapeWidth生成的媒体查询条件 @media (orientation: landscape)
        landscapeUnit: "vw", // 横屏时使用的单位
        landscapeWidth: 1134 // 横屏时使用的视窗宽度
      }
    }
  }
}
