import { ResetCss } from "./styles/global"
import { AppRouter } from "./router"

export const App = () => {
  return (
    <>
      <ResetCss></ResetCss>
      <AppRouter>
      </AppRouter>
    </>
  )
}
