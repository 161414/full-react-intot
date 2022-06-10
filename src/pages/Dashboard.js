import React, { useState, useEffect } from "react";
function Dashboard() {
  const [userList, setUserList] = useState([
    {
      name: "",
      email: "",
    },
  ]);
  useEffect(() => {
    fetch("http://localhost:3001/api/data")
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((jsonRes) => setUserList(jsonRes));
  });
  return (
    <div>
      <React.Fragment>
        {/* <section className="vh-100">
          <div className="container h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col-lg-12 col-xl-11">
                <div className="card text-black" style={{ borderRadius: "25px" }}>
                  <div className="card-body p-md-5">
                    <div className="row justify-content-center">
                      <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1"> */}
                        <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Dashboard</p>
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Email</th>
                                </tr>
                            </thead>
                            { userList.map(registers =>
                            <tbody>
                                <tr>
                                    <td>{registers.name}</td>
                                    <td>{registers.email}</td>
                                </tr>
                            </tbody>
                            )}
                        </table>
                      {/* </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section> */}
      </React.Fragment>
    </div>
  );
}
export default Dashboard;