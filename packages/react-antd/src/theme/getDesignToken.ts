import { getComputedToken } from '@ant-design/cssinjs'
import seedToken from './themes/seed'
import defaultTheme from './themes/default/theme'
import formatToken from './utils/alias'

const getDesignToken = () => {
  const theme = defaultTheme
  const mergedToken = {
    ...seedToken
  }
  return getComputedToken(mergedToken,{}, theme, formatToken )
}

export default getDesignToken