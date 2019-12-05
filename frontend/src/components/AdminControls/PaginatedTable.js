import chunk from 'lodash/chunk';
import map from 'lodash/map';
import {
  Pagination,
  PaginationItem,
  PaginationLink,
  Table,
} from 'reactstrap';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import './PaginatedTable.scss';

const PaginatedTable = ({ bodyRows, headerRow, rowsPerPage = 20 }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const paginatedBodyRows = chunk(bodyRows, rowsPerPage);
  const currentBodyRows = paginatedBodyRows[currentPage];

  return (
    <div className="paginated-table">
      <Table borderless hover responsive>
        { headerRow && <thead>{ headerRow }</thead> }
        <tbody>{ currentBodyRows }</tbody>
      </Table>
      <Pagination size="lg">
        <PaginationItem disabled={currentPage === 0}>
          <PaginationLink
            previous
            onClick={() => setCurrentPage(currentPage - 1)}
          />
        </PaginationItem>
        {
          map(paginatedBodyRows, (_rows, i) => (
            <PaginationItem active={currentPage === i} disabled={currentPage === i}>
              <PaginationLink onClick={() => setCurrentPage(i)}>
                { i + 1 }
              </PaginationLink>
            </PaginationItem>
          ))
        }
        <PaginationItem disabled={currentPage === paginatedBodyRows.length - 1}>
          <PaginationLink
            next
            onClick={() => setCurrentPage(currentPage + 1)}
          />
        </PaginationItem>
      </Pagination>
    </div>
  );
};

PaginatedTable.defaultProps = {
  headerRow: null,
  rowsPerPage: 20,
};

PaginatedTable.propTypes = {
  bodyRows: PropTypes.arrayOf(PropTypes.node).isRequired,
  headerRow: PropTypes.node,
  rowsPerPage: PropTypes.number,
};

export default PaginatedTable;
