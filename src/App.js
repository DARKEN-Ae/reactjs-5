import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Layout from "./components/layout";
import { Suspense, lazy } from "react";
import Loading from "./components/loading/Loading";

const HomePage = lazy(() => import("./pages/HomePage"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage"));

function App() {
  return (
    <BrowserRouter>
      <ToastContainer />
      <Routes>
        <Route>
          <Route path="/" element={<Layout />}>
            <Route
              index
              element={
                <Suspense fallback={<Loading />}>
                  <HomePage />
                </Suspense>
              }
            />
          </Route>
          <Route
            path="*"
            element={
              <Suspense fallback={<Loading />}>
                <NotFoundPage />
              </Suspense>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
