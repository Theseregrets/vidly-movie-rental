import React from 'react';
import _ from 'lodash';
import PropTypes from 'prop-types'

const Pagination = props => {
    const { itemsCount, pageSize, onPageChange, currentPage } = props;

    console.log(currentPage)
    const pageCount = Math.ceil(itemsCount / pageSize)
    if (pageCount === 1) return null;
    const pages = _.range(1, pageCount + 1);

    return <nav>
        <ul className="pagination">
            {pages.map(p => {
                return (
                    <li key={p} className={currentPage === p ? 'page-item active' : 'page-item'} >
                        <a
                            onClick={() => onPageChange(p)}
                            className="page-link">{p}</a>
                    </li>)
            })}

        </ul>
    </nav>;
}

Pagination.propTypes = {
    itemsCount: PropTypes.number.isRequired,
    pageSize: PropTypes.number.isRequired,
    onPageChange: PropTypes.func.isRequired,
    currentPage: PropTypes.number.isRequired
}


export default Pagination;