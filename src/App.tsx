import { Nav } from "components/Nav/Nav";
import "./index.css";
import BannerSVG from "assets/banner.svg";
import cx from "classnames";

function App() {
  return (
    <>
      <Nav />
      <main className="App">
        <section
          id="banner"
          className={cx([
            "w-full h-[70vh] max-h-[500px] my-20",
            "flex flex-col justify-center items-center gap-10",
          ])}
        >
          <img src={BannerSVG} className="h-full" />

          <div className="flex flex-col justify-center items-center gap-3 text-md">
            <h2 className="font-bold text-brand-50 text-3xl">Hal Nguyen</h2>
            <p className="font-bold">Fullstack Developer</p>
            <p>Computer Science @ University of Victoria</p>
          </div>

          <div className="flex gap-3">
            <a target="_blank" className="btn btn-primary">
              Resume
            </a>
            <a className="btn btn-outline">Portfolio</a>
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
