import { Skeleton, rem } from "@mantine/core";
import { Link } from "react-router-dom";
import PreviewImg from "../../assets/preview.png";
import "./Preview2.scss";

const SkeletonDemo = () => {
  return (
    <>
      <div className="skeleton-container">
        <div className="left-skeleton">
          <Skeleton className="title" />
          <Skeleton className="author" />
          <div className="date-category">
            <Skeleton className="date" />
            <Skeleton className="category" />
          </div>
        </div>
        <div className="right-skeleton">
          <Skeleton className="img" />
        </div>
      </div>
      <hr className="rule" />
    </>
  );
};

export default SkeletonDemo;
