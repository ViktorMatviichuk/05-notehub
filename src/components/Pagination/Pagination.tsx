import React from "react";
import ReactPaginate from "react-paginate";
import css from "./Pagination.module.css";

const ReactPaginateComponent = (ReactPaginate as any).default || ReactPaginate;

export interface PaginationProps {
  pageCount: number;
  onPageChange: (selectedItem: { selected: number }) => void;
  forcePage?: number;
}

const Pagination: React.FC<PaginationProps> = ({
  pageCount,
  onPageChange,
  forcePage,
}) => {
  if (pageCount <= 1) {
    return null;
  }

  return (
    <ReactPaginateComponent
      previousLabel="Previous"
      nextLabel="Next"
      breakLabel="..."
      pageCount={pageCount}
      marginPagesDisplayed={1}
      pageRangeDisplayed={3}
      onPageChange={onPageChange}
      forcePage={forcePage}
      containerClassName={css.pagination}
      activeClassName={css.active}
    />
  );
};

export default Pagination;
