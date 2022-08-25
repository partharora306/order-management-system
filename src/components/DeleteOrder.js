import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { FaTrash } from "react-icons/fa";

export default function DeleteOrder({ data, setData, orderNumber }) {
  const [open, setOpen] = useState(false);
  const modalClose = () => setOpen(false);
  const modalOpen = () => setOpen(true);

  const deleteOrder = () => {
    const newData = data.filter((item) => item.orderNumber !== orderNumber);
    setData(newData);
    setOpen(false);
  };

  return (
    <div>
      <FaTrash color="red" onClick={modalOpen} className="mx-2">
        Delete
      </FaTrash>

      <Modal show={open} onHide={modalClose} size="lg" centered>
        <Modal.Header closeButton>
          <Modal.Title>Are you sure?</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Do you really want to delete this order? This process cannot be
          undone.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={modalClose}>
            Cancel
          </Button>
          <Button variant="danger" onClick={deleteOrder}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
