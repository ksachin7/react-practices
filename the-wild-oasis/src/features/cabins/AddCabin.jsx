import React, { useState } from 'react'
import CreateCabinForm from './CreateCabinForm';
import CabinTable from './CabinTable';
import { Button, Modal } from "../../ui";

function AddCabin() {
    const [showModal, setShowModal] = useState(false);

    return (
        // <div>
        //     <Button onClick={() => { setShowModal((show) => !show) }}>Add new cabin</Button>
        //     {showModal && (
        //         <Modal onCloseModal={() => setShowModal(false)}>
        //             <CreateCabinForm onCloseModal={() => setShowModal(false)} />
        //         </Modal>)
        //     }
        // </div>

        <div>
        {/*  using compound-component for model */}
            <Modal>
                <Modal.Open opens='cabin-form'>
                    <Button>Add new cabin</Button>
                </Modal.Open>
                <Modal.Window name='cabin-form'>
                    <CreateCabinForm />
                </Modal.Window>

                {/* <Modal.Open opens='table'>
                    <Button>Show table</Button>
                    </Modal.Open>
                    <Modal.Window name='table'>
                    <CabinTable />
                    </Modal.Window> */}
            </Modal>
        </div>

    )
}

export default AddCabin