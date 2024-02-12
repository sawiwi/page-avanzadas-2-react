import React from 'react';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const getPageNumbers = () => {
    const pageNumbers = [];

    if (totalPages <= 5) {
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
      }
    } else {
      if (currentPage <= 3) {
        for (let i = 1; i <= 5; i++) {
          pageNumbers.push(i);
        }
        pageNumbers.push('...');
        pageNumbers.push(totalPages);
      } else if (currentPage >= totalPages - 2) {
        pageNumbers.push(1);
        pageNumbers.push('...');
        for (let i = totalPages - 4; i <= totalPages; i++) {
          pageNumbers.push(i);
        }
      } else {
        pageNumbers.push(1);
        pageNumbers.push('...');
        for (let i = currentPage - 1; i <= currentPage + 1; i++) {
          pageNumbers.push(i);
        }
        pageNumbers.push('...');
        pageNumbers.push(totalPages);
      }
    }
    return pageNumbers;
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  return (
    <React.Fragment>
      <div className="absolute bottom-0 flex justify-center items-center w-[100%] xl:w-[80%] bg-primary p-3">
        <button
          onClick={handlePreviousPage}
          disabled={currentPage === 1}
          className={`${
            currentPage === 1 ? 'bg-secondary-opacity text-primary-opacity' : 'bg-secondary-700 text-primary'
          } p-3 border rounded-l-lg`}
        >
          Volver
        </button>

        {getPageNumbers().map((pageNumber, index) => (
          <button
            key={index}
            className={`${
              currentPage === pageNumber || pageNumber === '...'
                ? 'bg-secondary hover:bg-secondary-opacity text-primary hover:text-primary active'
                : 'bg-primary text-secondary'
            } p-3 border`}
            disabled={currentPage === pageNumber || pageNumber === '...'}
            style={{
              backgroundColor:
                pageNumber === currentPage ? 'bg-primary' : '',
            }}
            onClick={() =>
              typeof pageNumber === 'number' && onPageChange(pageNumber)
            }
          >
            {pageNumber}
          </button>
        ))}

        <button
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
          className={`${
            currentPage === totalPages
              ? 'bg-secondary-opacity text-primary'
              : 'bg-secondary-700 text-primary'
          } p-3 border rounded-r-lg`}
        >
          Siguiente
        </button>
      </div>
    </React.Fragment>
  );
};

export default Pagination;
