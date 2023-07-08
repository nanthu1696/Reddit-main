import { createRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ErrorElement from "./routes/ErrorElement";
import Login from "./routes/Login";
import Posts from "./routes/before/Posts";
import MainPost from "./routes/after/MainPost";

import App, {
  loader as rootLoader,
  popularLoader,
  gameLoader,
  sportLoader,
  businessLoader,
  cryptoLoader,
  tvLoader,
  celebLoader,
  hotLoader,
  newLoader,
  topLoader,
  artLoader,
  action as rootAction
} from "./routes/before/App";

import Main from "./routes/after/Main";
import CreatePost from "./routes/after/CreatePost";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Posts />, loader: rootLoader },
      {
        path: "/login",
        element: <Login />,
        loader: rootLoader,
        errorElement: <ErrorElement />
      },
      {
        path: "/popular",
        element: <Posts />,
        loader: popularLoader,
        errorElement: <ErrorElement />
      },
      {
        path: "/games",
        element: <Posts />,
        loader: gameLoader,
        errorElement: <ErrorElement />
      },
      {
        path: "/sports",
        element: <Posts />,
        loader: sportLoader,
        errorElement: <ErrorElement />
      },
      {
        path: "/business",
        element: <Posts />,
        loader: businessLoader,
        errorElement: <ErrorElement />
      },
      {
        path: "/crypto",
        element: <Posts />,
        loader: cryptoLoader,
        errorElement: <ErrorElement />
      },
      {
        path: "/tv",
        element: <Posts />,
        loader: tvLoader,
        errorElement: <ErrorElement />
      },
      {
        path: "/celebrity",
        element: <Posts />,
        loader: celebLoader,
        errorElement: <ErrorElement />
      },
      {
        path: "/hot",
        element: <Posts />,
        loader: hotLoader,
        errorElement: <ErrorElement />
      },
      {
        path: "/new",
        element: <Posts />,
        loader: newLoader,
        errorElement: <ErrorElement />
      },
      {
        path: "/top",
        element: <Posts />,
        loader: topLoader,
        errorElement: <ErrorElement />
      },
      {
        path: "/art",
        element: <Posts />,
        loader: artLoader,
        errorElement: <ErrorElement />
      },
      {
        path: "/fashion",
        element: <Posts />,
        loader: celebLoader,
        errorElement: <ErrorElement />
      },
      {
        path: "/history",
        element: <Posts />,
        loader: gameLoader,
        errorElement: <ErrorElement />
      }
    ]
  },
  {
    path: "/user1",
    element: <Main />,
    children: [
      { index: true, element: <MainPost />, loader: rootLoader },
      {
        path: "/user1/popular",
        element: <MainPost />,
        loader: popularLoader,
        errorElement: <ErrorElement />
      },
      {
        path: "/user1/all",
        element: <MainPost />,
        loader: gameLoader,
        errorElement: <ErrorElement />
      },
      {
        path: "/user1/hot",
        element: <MainPost />,
        loader: hotLoader,
        errorElement: <ErrorElement />
      },
      {
        path: "/user1/new",
        element: <MainPost />,
        loader: newLoader,
        errorElement: <ErrorElement />
      },
      {
        path: "/user1/top",
        element: <MainPost />,
        loader: topLoader,
        errorElement: <ErrorElement />
      },
      {
        path: "/user1/create",
        element: <CreatePost />,
        loader: rootLoader,
        action: rootAction,
        errorElement: <ErrorElement />
      }
    ]
  },
  {
    path: "/user2",
    element: <Main />,
    children: [
      { index: true, element: <MainPost />, loader: rootLoader },
      {
        path: "/user2/popular",
        element: <MainPost />,
        loader: popularLoader,
        errorElement: <ErrorElement />
      },
      {
        path: "/user2/all",
        element: <MainPost />,
        loader: gameLoader,
        errorElement: <ErrorElement />
      },
      {
        path: "/user2/hot",
        element: <MainPost />,
        loader: hotLoader,
        errorElement: <ErrorElement />
      },
      {
        path: "/user2/new",
        element: <MainPost />,
        loader: newLoader,
        errorElement: <ErrorElement />
      },
      {
        path: "/user2/top",
        element: <MainPost />,
        loader: topLoader,
        errorElement: <ErrorElement />
      },
      {
        path: "/user2/create",
        element: <CreatePost />,
        errorElement: <ErrorElement />
      }
    ]
  }
]);

root.render(<RouterProvider router={router} />);
