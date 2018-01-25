# mini-51jrq
1. 多个组件的父元素样式名使用复数形式，如<view class="comm-posis-container">
2. 容器组件最外层样式名带containe
3. js代码必须携带分号
4. 复用组件export使用驼峰命名法则，但文件名以及引入时全部使用小写，例如
###
`
import CommPosi from '../../components/commposi';

export default class HomePage extends wepy.page {
  components = {
    bannersearch: BannerSearch,
    commposi: CommPosi
  }
}

`
5. 上传代码时备注名为tab名-模块名（-功能名）
6. 在调试数据处注释：绑定数据记得去掉，这里做调试

