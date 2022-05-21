import React from "react";
import "./index.scss";

const Table = (props) => {
  const { currentPosition, people } = props;
  const listItems = currentPosition.length > 0 && currentPosition.map((id, key) => (
    <tr key={key}>
      <td>
        <div className="email-wrapper">
          <label>
            <input type="checkbox" />
            <span className="checkmark">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="9"
                fill="none"
              >
                <path
                  fill="#fff"
                  d="M.935 4.583a.523.523 0 01-.106-.162.6.6 0 010-.417.5.5 0 01.106-.162l.754-.723a.469.469 0 01.354-.162.493.493 0 01.208.041c.065.03.124.07.173.121l2.274 2.279L9.58.516a.51.51 0 01.571-.12.473.473 0 01.16.12l.754.733a.5.5 0 01.106.162.6.6 0 010 .417.523.523 0 01-.106.162l-6 5.97a.479.479 0 01-.163.122.546.546 0 01-.416 0 .479.479 0 01-.163-.123L.935 4.583z"
                />
              </svg>
            </span>
          </label>
          <div className="email">{people[id].email}</div>
        </div>
      </td>
      <td>{people[id].potatoes}</td>
      <td>{people[id].name}</td>
    </tr>
  ));
  return (
    <div className="table-wrapper">
      <div className="table-info">
        {Object.entries(people).length} people in the list
      </div>
      <table>
        <thead>
          <tr>
            <td>Email</td>
            <td>Potatoes</td>
            <td>Full Name</td>
          </tr>
        </thead>

        <tbody className="droppable">{listItems}</tbody>
      </table>
    </div>
  );
};

export default Table;
