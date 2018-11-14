import React, { Component } from 'react';
import {Pagination} from 'semantic-ui-react';
class MyPagination extends Component {
    render() {
        const { pages, handlePageChange } = this.props;
        return (
            <Pagination
                defaultActivePage={1}
                totalPages={pages}
                onPageChange={(event, {activePage}) => handlePageChange(activePage)}
            />
        )
    }
}
export default MyPagination;