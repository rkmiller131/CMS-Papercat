import { types } from "react-bricks/frontend"
import layout from "./layout"
import Home from "./Home"
import features from "./features"

// const bricks: types.Brick[] = [HeroUnit, ...layout, ...features]

const bricks: types.Theme[] = [
  {
    themeName: 'Default',
    categories: [
      {
        categoryName: 'Base Layout',
        bricks: [...layout]
      },
      {
        categoryName: 'Hero Section',
        bricks: [Home]
      },
    ],
  },
]

export default bricks
