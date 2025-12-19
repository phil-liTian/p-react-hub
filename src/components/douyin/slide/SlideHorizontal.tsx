
import './SlideHorizontal.less'

export const SlideHorizontal = (props) => {
  const { children }  = props
  return <div className="slide horizontal">
    <div className="slide-list">
      {children}
    </div>
  </div>
}