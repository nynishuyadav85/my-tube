import { Provider } from "react-redux"
import Body from "./components/Body"
import Head from "./components/Head"
import store from "./utils/store"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import MainContiner from "./components/MainContiner"
import WatchPage from "./components/WatchPage"

function App() {
  const appRouter = createBrowserRouter([
    {
      path: '/',
      element: <><Head /> <Body /></>,
      children: [
        {
          path: '/',
          element: <MainContiner />
        },
        {
          path: 'watch',
          element: <WatchPage />
        }
      ]
    }
  ])
  return (

    <Provider store={store}>
      <div>
        <h1 className="">

          <RouterProvider router={appRouter} />
        </h1>
      </div>
    </Provider>

  )
}

export default App
