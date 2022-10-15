import React, { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";

const Episode = ({ data }) => {
  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  const itemsPerPage = 25;
  const [itemOffset, setItemOffset] = useState(0);
  useEffect(() => {
    // Fetch items from another resources.
    const endOffset = itemOffset + itemsPerPage;
    console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    setCurrentItems(data?.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(data?.length / itemsPerPage));
  }, [itemOffset, itemsPerPage]);
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % data?.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };
  return (
    <div className="">
      <h2 className="text-2xl font-semibold">Episode List</h2>
      <div className="grid grid-cols-5 mt-5 ">
        {currentItems?.map((item) => (
          <h2
            key={item.episodeId}
            className="border border-white p-2 text-center"
          >
            {item.episodeNum}
          </h2>
        ))}
      </div>

      <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
        containerClassName="pagination flex gap-5 items-center justify-center mt-5"
        pageLinkClassName=""
      />
    </div>
  );
};

export default Episode;
