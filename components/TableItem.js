import React from "react";

const TableItem = ({
  id,
  name,
  profileImage,
  gender,
  state,
  major,
  classification,
}) => {
  const modifiedMajor = major.length > 10 ? major.slice(0, 8) + "..." : major;
  let classificationColor = "";
  if (classification.trim().toLowerCase() === "transfer") {
    classificationColor = "#FF799F";
  } else if (classification.trim().toLowerCase() === "freshman") {
    classificationColor = "#AB0534";
  } else if (classification.trim().toLowerCase() === "graduate") {
    classificationColor = "#C6C6C8";
  }
  return (
    <tr>
      <td>{id}</td>
      <td className="table-image">
        <img src={profileImage} />
        <p>{name}</p>
      </td>
      <td>{gender}</td>
      <td>{state}</td>
      <td>{modifiedMajor}</td>
      <td className="dotting">
        <span
          className="dot"
          style={{ backgroundColor: `${classificationColor}` }}
        ></span>
        {classification}
      </td>
      <td className="tic">
        <img src="/tableicons/1.png" />
      </td>
      <td className="tic1">
        <img src="/tableicons/2.png" />
      </td>
      <td className="tic">
        <img src="/tableicons/3.png" />
      </td>
      <td className="tic">
        <img src="/tableicons/4.png" />
      </td>
    </tr>
  );
};

export default TableItem;
