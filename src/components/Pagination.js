import React from 'react';
import Pagination from 'react-bootstrap/Pagination';

const Paginate = ({ usersPerPage, totalUsers, paginate }) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalUsers / usersPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        // <nav>
        //     <ul className='pagination'>
        //         {pageNumbers.map(number => (
        //             <li key={number} className={`page-items ${currentPage === number ? 'active' : ''}`}>
        //                 <a onClick={() => paginate(number)} href="!#" className='page-link'>
        //                     {number}
        //                 </a>
        //             </li>

        //         ))}
        //     </ul>
        // </nav>
        <Pagination className='justify-content-center mt-3'>
            {pageNumbers.map(number => (
                <Pagination.Item
                    key={number}
                    onClick={() => paginate(number)}>
                    {number}
                </Pagination.Item>
            ))}
        </Pagination>
    );
};
export default Paginate;