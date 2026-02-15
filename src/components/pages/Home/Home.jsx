import { useEffect, useState } from "react";
import { weatherIcons } from "../../../data/data";
import Dashboard from "../dashboard/Dashboard";
import { BiBody } from "react-icons/bi";
function Home() {
  const [ddlUnit, setDdlUnit] = useState("");
  const [searchData, setSearchData] = useState({});
  const [searchInputValue, setSearchInputValue] = useState("");
  useEffect(() => {
    let search = "berlin";
    const url = `https://nominatim.openstreetmap.org/search?q=${search}&format=jsonv2&addressdetails=1`;
    fetch(url)
      .then((res) => res.json())
      .then((body) => setSearchData(body[0]));
  }, []);
  const handleSearch = function () {
    let search = searchInputValue;
    const url = `https://nominatim.openstreetmap.org/search?q=${search}&format=jsonv2&addressdetails=1`;
    fetch(url)
      .then((res) => res.json())
      .then((body) => setSearchData(body[0]));
  };
  return (
    <main id="main" className="main wrapper">
      <section className="hero">
        <div className="hero__content">
          <h1 className="hero__title">How's the sky looking today?</h1>

          <div className="hero__search">
            <input
              onChange={(e) => setSearchInputValue(e.target.value)}
              className="hero__textbox"
              type="text"
              name="search"
              id="txtSearch"
              placeholder="Search for a place..."
            />
            <button
              id="btnSearch"
              className="hero__button"
              type="submit"
              onClick={handleSearch}
            >
              Search
            </button>
          </div>
        </div>
      </section>
      <Dashboard searchData={searchData} ddlUnit={ddlUnit} />
    </main>
  );
}

export default Home;
