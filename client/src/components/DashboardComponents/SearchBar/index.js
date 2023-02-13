import React, { useEffect, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";

import { getAllCapsule } from "../../utils/GetAllCapsule";
import Grid from "../Grid";
import PaginationComponent from "../Pagination/PaginationComponent";

const SearchBar = () => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [pageNumber, setPageNumber] = useState(1);
  const [pageCapsule, setPageCapsule] = useState([]);

  useEffect(() => {
    setData(getAllCapsule);
  }, []);

  useEffect(() => {}, [search]);
  /** TODO Filter */

  var filterCapsule = data.filter((item) => {
    if (
      item.status.toLowerCase().includes(search.toLowerCase()) ||
      item.type.toLowerCase().includes(search.toLowerCase()) ||
      (item.original_launch &&
        new Date(item.original_launch).toLocaleDateString().includes(search))
    ) {
      return item;
    }
  });

  const handleSearchFilter = (e) => {
    setSearch(e.targe.value);
  };

  const handleChange = (event, value) => {
    setPageNumber(value);
    setPageCapsule(data.slice((value - 1) * 10, (value - 1) * 10 + 10));
  };

  return (
    <div>
      <section className="sert-1 search">
        <div className="search">
          <SearchIcon sx={{ color: "var(--grey) !important" }} />
          <input
            type="text"
            placeholder="Search "
            onChange={handleSearchFilter}
            value={search}
          />
        </div>

        <div className="grid-flex">
          {search
            ? filterCapsule.map((item, index) => (
                <Grid capsule={item} key={item.capsule_id} delay={(index % 5) * 0.1} />
              ))
            : pageCapsule.map((item, index) => (
                <Grid capsule={item} key={item.capsule_id} delay={(index % 5) * 0.1} />
              ))}
        </div>
        {!search && (
          <PaginationComponent
            pagaNumber={pageNumber}
            handleChange={handleChange}
          />
        )}
      </section>
    </div>
  );
};

export default SearchBar;
