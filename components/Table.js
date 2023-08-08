import React from "react";
import { tableItems } from "./data";
import TableItem from "./TableItem";
const Table = () => {
  const fields = [
    "ID",
    "PROFILE",
    "GEN",
    "STATE",
    "MAJOR",
    "CLASSIFICATION",
    "DETAILS",
    "NOTIFY",
    "SMS",
    "EMAIL",
  ];

  // Placeholder data for table rows

  return (
    <table className="table">
      <thead>
        <tr>
          {fields.map((field, index) => (
            <th key={index}>{field}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {tableItems.map((a) => (
          <TableItem
            id={a.id}
            name={a.name}
            profileImage={a.profileImage}
            state={a.state}
            classification={a.classification}
            gender={a.gender}
            major={a.major}
          ></TableItem>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
