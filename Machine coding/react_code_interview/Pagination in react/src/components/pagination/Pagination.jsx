import React from 'react'
import './pagination.css';

function Pagination({ pages, currentPage, setcurrentPage }) {
  const pageNumbers = [...Array(pages + 1).keys()].slice(1);

  const goNextPage = () => {
    if (currentPage != pages) {
      setcurrentPage(currentPage + 1);
    }
  }

  const goPrePage = () => {
    if (currentPage != 1) {
      setcurrentPage(currentPage - 1);
    }
  }

  return (
    <div>
      <ul>
        <li className={`page-item ${currentPage == 1 ? 'disable' : ''}`}>
          <button onClick={goPrePage}>
            Previous
          </button>
        </li>

        {pageNumbers.map((pg) => (
          <li>
            <button
              className={currentPage === pg ? 'active' : ''}
              onClick={() => setcurrentPage(pg)}
            >
              {pg}
            </button>
          </li>
        ))}

        <li className={`page-item ${currentPage == pages ? 'disable' : ''}`}>
          <button onClick={goNextPage}>
            Next
          </button>
        </li>
      </ul>
    </div>
  )
}

export default Pagination;