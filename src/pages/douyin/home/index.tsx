/*
 * @Author: phil
 * @Date: 2025-12-09 12:53:53
 */
import { SlideHorizontal } from "@/components/douyin/slide/SlideHorizontal";
import { SlideItem } from "@/components/douyin/slide/SlideItem";
import './index.less'

export default () => {
  // 在组件中使用自定义hook

  return (
    <div className="slide-wrapper">
      <SlideHorizontal>
        {/* 左侧内容 */}
        <SlideItem className='sidebar'>
          <div className="header" >
            <div className="left">早上好</div>
          </div>
          
        </SlideItem>

        {/* 主要内容区域 */}
        <SlideItem>内容</SlideItem>

        {/* 个人中心区域 */}

        <SlideItem>
          个人中心
        </SlideItem>

      </SlideHorizontal>
    </div>
  );
};
