import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteCategoryById , getFilterCategory  } from '../redux/category/categoryApi';
import { getProducts , deleteProductById } from '../redux/products/productApi';
import { useSelector } from 'react-redux';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

// ... (existing imports)

function DeleteModal(props) {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);

  // const status=useSelector((state)=>state.category?.deleted)
  // console.log(status);

  const handleClose = () => {
    setShow(false);
  };

  const deleteProduct = async(id) => {
    await dispatch(deleteCategoryById(id));
    await dispatch(getFilterCategory());
   await dispatch(deleteProductById(id));
   await  dispatch(getProducts());
    handleClose();
  };

  // useEffect(()=>{
  //   if(status == "OK"){
  //     dispatch(getFilterCategory());
  //   }
  // },[status])

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
          <Button variant="danger" onClick={() => deleteProduct(props.id)}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default DeleteModal;
