import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";

export default function NewOrder({ data, setData }) {
  const [open, setOpen] = useState(false);
  const modalClose = () => setOpen(false);
  const modalOpen = () => setOpen(true);
  const [orderNumber, setOrderNumber] = useState("");
  const [orderDueDate, setOrderDueDate] = useState("");
  const [customerBuyerName, setCustomerBuyerName] = useState("");
  const [customerAddress, setCustomerAddress] = useState("");
  const [customerPhone, setCustomerPhone] = useState("");
  const [orderTotal, setOrderTotal] = useState("");
  const [error, setError] = useState("");
  const addOrder = () => {
    if (customerPhone.length === 10) {
      const newData = [
        ...data,
        {
          orderNumber,
          orderDueDate,
          customerBuyerName,
          customerAddress,
          customerPhone,
          orderTotal,
        },
      ];
      setData(newData);
      setOpen(false);
      setError("");
    } else {
      setError("*Phone No. must be 10 of digits");
    }
  };

  return (
    <>
      <Button variant="primary" onClick={modalOpen} size="lg" className="px-5">
        New Order
      </Button>

      <Modal show={open} onHide={modalClose} size="lg" centered>
        <Modal.Header closeButton>
          <Modal.Title>New Order</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Order No.</Form.Label>
              <Form.Control
                type="number"
                onChange={(e) => setOrderNumber(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Order Due Date</Form.Label>
              <Form.Control
                type="date"
                onChange={(e) => setOrderDueDate(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Customer Buyer Name</Form.Label>
              <Form.Control
                type="text"
                onChange={(e) => setCustomerBuyerName(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Customer Address</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                onChange={(e) => setCustomerAddress(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Customer Phone No.</Form.Label>
              <Form.Control
                type="number"
                maxlength="10"
                onChange={(e) => setCustomerPhone(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Order Total</Form.Label>
              <Form.Control
                type="number"
                onChange={(e) => setOrderTotal(e.target.value)}
              />
            </Form.Group>
            <div className="text-danger">{error}</div>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={addOrder}>
            Add Order
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
