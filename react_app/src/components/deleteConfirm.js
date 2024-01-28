import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteCategoryById, getCategories  } from '../redux/category/categoryApi';
import { getProducts , deleteProductById } from '../redux/products/productApi';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

// ... (existing imports)

function DeleteModal({ id }) {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
  };

  const deleteProduct = async(id) => {
   await dispatch(deleteCategoryById(id));
   await dispatch(deleteProductById(id))
   await  dispatch(getProducts())
   await dispatch(getCategories())
    handleClose();
  };

  const handleShow = () => {
    setShow(true);
  };

  return (
    <>
      <i className="fa-solid fa-trash" onClick={handleShow}></i>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>Delete</Modal.Title>
        </Modal.Header>
        <Modal.Body>Do you want to delete the category?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="danger" onClick={() => deleteProduct(id)}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default DeleteModal;
