import {
  useEffect,
  useState,
} from "react";
import "./App.scss";
import SearchBox from "./components/search-box";
import Card from "./components/card/card";
function App() {
  const [searchText, setSearchText] =
    useState("");
  const [data, setData] = useState([]);
  const [loading, setLoading] =
    useState(false);
  const getApi = async () => {
    setLoading(true);
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        setData(response?.meals);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    let timer = setTimeout(() => {
      getApi();
    }, 300);
    return () => clearTimeout(timer);
  }, [searchText]);

  return (
    <main className="container">
      <header className="searchbox_container">
        <SearchBox
          onSearch={setSearchText}
        />
      </header>
      <section>
        {loading ? (
          <div className="loading-container">
            <p>Loading..</p>
          </div>
        ) : data?.length > 0 ? (
          <div className="list_items">
            {data?.map((item) => {
              return (
                <Card
                  key={item?.idMeal}
                  data={item}
                />
              );
            })}
          </div>
        ) : (
          <p>No Data!</p>
        )}
      </section>
    </main>
  );
}

export default App;
