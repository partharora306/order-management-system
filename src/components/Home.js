import React, { useState } from "react";
import EditOrder from "./EditOrder";
import DeleteOrder from "./DeleteOrder";
import NewOrder from "./NewOrder";
import Table from "react-bootstrap/Table";

export default function Home() {
  const mockData = [
    {
      orderNumber: 1,
      orderDueDate: "2022-08-17",
      customerBuyerName: "Rahul",
      customerAddress: "#21, XYZ colony, near ABC, Bangalore",
      customerPhone: "8938349093",
      orderTotal: 1000,
    },
    {
      orderNumber: 2,
      orderDueDate: "2022-08-19",
      customerBuyerName: "Aryan",
      customerAddress: "#368, ABC colony, Hyderabad",
      customerPhone: "9617897659",
      orderTotal: 1800,
    },
    {
      orderNumber: 3,
      orderDueDate: "2022-08-24",
      customerBuyerName: "Parth",
      customerAddress: "#6396, sector-17, Chandigarh",
      customerPhone: "3657676807",
      orderTotal: 600,
    },
  ];
  const [data, setData] = useState(mockData);

  return (
    <div>
      <div>
        <h2 className="d-inline-block text-left m-5 font-weight-bold">
          Your Orders
        </h2>
        <div className="d-inline-block float-right m-5">
          <NewOrder data={data} setData={setData} />
        </div>
      </div>
      <div>
        <Table
          responsive
          className="text-center mt-5 mx-3"
          style={{ width: "97%" }}
        >
          <thead className="table-active">
            <tr>
              <th>Order No.</th>
              <th>Order Due Date</th>
              <th>Customer Buyer Name</th>
              <th>Customer Address</th>
              <th>Customer Phone No.</th>
              <th>Order Total</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => {
              return (
                <tr key={item.orderNumber}>
                  <td>{item.orderNumber}</td>
                  <td>{item.orderDueDate}</td>
                  <td>{item.customerBuyerName}</td>
                  <td className="w-25">{item.customerAddress}</td>
                  <td>{item.customerPhone}</td>
                  <td>{item.orderTotal}</td>
                  <td className="d-flex align-items-center justify-content-center">
                    <EditOrder data={data} setData={setData} item={item} />
                    <DeleteOrder
                      data={data}
                      setData={setData}
                      orderNumber={item.orderNumber}
                    />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
    </div>
  );
}
