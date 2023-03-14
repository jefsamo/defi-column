import "./SearchPreview.scss";
import { CiSearch } from "react-icons/ci";
import Preview from "../Preview/Preview";

const SearchPreview = () => {
  return (
    <div>
      <div className="right-content">
        <div className="search">
          <input type="text" name="search" id="" />
          <CiSearch className="ci-search" />
        </div>
        <Preview />
        <Preview />
        <Preview />
        <Preview />
        <Preview />
        <Preview />
        <Preview />
        <Preview />
      </div>
    </div>
  );
};

export default SearchPreview;
