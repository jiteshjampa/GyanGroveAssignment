import "./App.css";
import NavBar from "./components/NavBar";
import Banner from "./components/Banner";
import { lazy, Suspense } from "react";
import loading from "./images/loading.png";
const RecomendedShows = lazy(() => import("./components/RecomendedShows"));
const UpcomingEvents = lazy(() => import("./components/UpcomingEvents"));
function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Suspense
        fallback={
          <div className="flex justify-center items-center ">
            <img
              src={loading}
              alt="loading"
              className="animate-spin  w-28 flex justify-center items-center"
            />
          </div>
        }
      >
        <RecomendedShows />

        <UpcomingEvents />
      </Suspense>
    </div>
  );
}

export default App;
