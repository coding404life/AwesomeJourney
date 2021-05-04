import React, { useState } from 'react';
import { Button, Card, Modal, Map } from '../../shared';
import './PlaceItem.css';

const PlaceItem = props => {
  const [ showMap, setShowMap ] = useState(false)

  const openMapHandler = () => setShowMap(true);

  const closeMapHandler = () => setShowMap(false);

  return (
    <React.Fragment>
      <Modal
        show={showMap}
        onCancel={closeMapHandler}
        header={props.address}
        contentClass='place-item__modal-content'
        footerClass='place-item__modal-actions'
        footer={<Button onClick={closeMapHandler}>Close</Button>}
      >
        <div className='map__container'>
          <Map center={props.coordinates} zoom={13} />
        </div>
      </Modal>
      <li>
        <Card className='place-item__content'>
          <div className='place-item__image'>
            <img src={props.image} alt={props.title} />
          </div>
          <div className='place-item__info'>
            <h2>{props.title}</h2>
            <h3>{props.address}</h3>
            <p>{props.description}</p>
          </div>
          <div className='place-item__actions'>
            <Button inverse onClick={openMapHandler}>VIEW ON MAP</Button>
            <Button to={`/places/${props.id}`}>EDIT</Button>
            <Button danger>DELTE</Button>
          </div>
        </Card>
      </li>
    </React.Fragment>
  )
}


export default PlaceItem
