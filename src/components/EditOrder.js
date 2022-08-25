import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { FaPen } from "react-icons/fa";

export default function EditOrder({ data, setData, item }) {
  const [open, setOpen] = useState(false);
  const modalClose = () => setOpen(false);
  const modalOpen = () => setOpen(true);
  const [orderNumber, setOrderNumber] = useState(item.orderNumber);
  const [orderDueDate, setOrderDueDate] = useState(item.orderDueDate);
  const [customerBuyerName, setCustomerBuyerName] = useState(
    item.customerBuyerName
  );
  const [customerAddress, setCustomerAddress] = useState(item.customerAddress);
  const [customerPhone, setCustomerPhone] = useState(item.customerPhone);
  const [orderTotal, setOrderTotal] = useState(item.orderTotal);
  const [error, setError] = useState("");
  const editOrder = () => {
    if (customerPhone.length === 10) {
      const newData = data.map((newItem) => {
        if (newItem.orderNumber === item.orderNumber) {
          return {
            orderNumber,
            orderDueDate,
            customerBuyerName,
            customerAddress,
            customerPhone,
            orderTotal,
          };
        }
        return newItem;
      });
      setData(newData);
      setOpen(false);
      setError("");
    } else {
      setError("*Phone No. must be 10 of digits");
    }
  };

  return (
    <>
      <FaPen color="blue" onClick={modalOpen} className="mx-2">
        Edit Order
      </FaPen>

      <Modal show={open} onHide={modalClose} size="lg" centered>
        <Modal.Header closeButton>
          <Modal.Title>Edit Order</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Order Number</Form.Label>
              <Form.Control
                type="number"
                onChange={(e) => setOrderNumber(e.target.value)}
                value={orderNumber}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Order Due Date</Form.Label>
              <Form.Control
                type="date"
                onChange={(e) => setOrderDueDate(e.target.value)}
                value={orderDueDate}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Customer Buyer Name</Form.Label>
              <Form.Control
                type="text"
                onChange={(e) => setCustomerBuyerName(e.target.value)}
                value={customerBuyerName}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Customer Address</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                onChange={(e) => setCustomerAddress(e.target.value)}
                value={customerAddress}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Customer Phone</Form.Label>
              <Form.Control
                type="number"
                maxlength="10"
                onChange={(e) => setCustomerPhone(e.target.value)}
                value={customerPhone}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Total Order Value</Form.Label>
              <Form.Control
                type="number"
                onChange={(e) => setOrderTotal(e.target.value)}
                value={orderTotal}
              />
            </Form.Group>
            <div className="text-danger">{error}</div>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={editOrder}>
            Edit Order
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
