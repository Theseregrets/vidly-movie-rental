import React from 'react';
import _ from 'lodash';

const Pagination = props => {
    const { itemsCount, pageSize } = props;

    const pageCount = Math.ceil(itemsCount / pageSize)
    if (pageCount === 1) return null;
    const pages = _.range(1, pageCount + 1);
    console.log(pages)

    return <nav>
        <ul className="pagination">
            {pages.map(p => {
                return (
                    <li key={p} className="page-item">
                        <a href='#' className="page-link">{p}</a>
                    </li>)
            })}

        </ul>
    </nav>;
}

export default Pagination;