import React, { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";

const Episode = ({ data, url }) => {
  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  const itemsPerPage = 30;
  const [itemOffset, setItemOffset] = useState(0);
  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    setCurrentItems(data?.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(data?.length / itemsPerPage));
    console.log(currentItems);
  }, [itemOffset, itemsPerPage, data]);
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
      <div className="grid grid-cols-5  px-4 mt-5 ">
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
        pageRangeDisplayed={2}
        pageCount={pageCount}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
        containerClassName="flex gap-5 items-center justify-center mt-5 "
      />
    </div>
  );
};

export default Episode;
