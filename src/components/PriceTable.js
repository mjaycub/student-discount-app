import React, { useState } from "react";
import { Table } from "react-bootstrap";

function PriceTable() {
  return (
    <Table className="priceTable" striped bordered hover>
      <thead>
        <tr>
          <th>20 Students</th>
          <th>40 Students</th>
          <th>60 Students</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>50% discount</td>
          <td>60% discount</td>
          <td>70% discount</td>
        </tr>
      </tbody>
    </Table>
  );
}

export default PriceTable;
