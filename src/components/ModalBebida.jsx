import {Modal,Image} from 'react-bootstrap'

const ModalBebida = () => {

    const handleModalClick= ()=>{
        console.log('Hiciste Click master')
    }
  return (
    <>
    <Modal show={true} onHide={handleModalClick}>
        <Modal.Body>
            Cuerpo de Modal
        </Modal.Body>
    </Modal>
    </>
  )
}
export default ModalBebida