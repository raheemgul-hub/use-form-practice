import { useState, useEffect } from "react";
import "./AddTable.css";
function AddTable() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [Data, setData] = useState<any[]>([]);

  useEffect(() => {
    const storedData = localStorage.getItem("employees");
    if (storedData) {
      setData(JSON.parse(storedData));
    }
  }, []);

  return (
    <div className="table-container container">
      {Data.length > 0 && (
        <table className="custom-table">
          <thead>
            <tr>
              <th>id</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Age</th>
              <th>Gender</th>
              <th>Address</th>
            </tr>
          </thead>
          <tbody>
            {Data.map((data, index) => (
              <tr key={index}>
                <td>{index}</td>
                <td>{data.firstname}</td>
                <td>{data.lastname}</td>
                <td>{data.email}</td>
                <td>{data.age}</td>
                <td>{data.gender}</td>
                <td>{data.address}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
export default AddTable;
