import React, { useEffect, useState } from "react";
import { Card, Col, Modal, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

function CartDisplay({ restaurants }) {

  
  // modal
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const { id } = useParams();
  const { allrestaurant, loading, error } = useSelector(
    (state) => state.RestaurantSlice
  );
  const [restaurant, setrestaurant] = useState({});
  useEffect(() => {
    // find
    setrestaurant(allrestaurant.find((item) => item.id == id));
  }, []);
  console.log(restaurant);
  
  const {operating_hours} = restaurant;
  return (
    <>
      <div className="  d-flex justify-content-center align-items-center">
        <h1 className="text-white ">Any One you Can Selet</h1>
      </div>
      <div className=" d-flex justify-content-evenly   align-items-center">
        <div className="mt-5 mb-5">
          <img
            style={{ height: "600px", width: "500px" }}
            className="rounded float-left img-fluid"
            src={restaurant.photograph}
            alt=""
          />
        </div>{" "}
        <div className=" me-5 p-2 w-50 ">
          <div className="bg-danger-subtle w-100 ">
            <h5 className="mb-4">Name: {restaurant.name}</h5>
            <h5 className="">Neighborhood: {restaurant.neighborhood}</h5>
            <h5 className="mt-4">Address: {restaurant.address}</h5>
  
          </div>
          <div className=" mt-4">
            <button className="btn bg-body-secondary text-black" onClick={handleShow}>Restaurant Opening Time</button>
          </div>

          <div className="">
            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>opening Hours</Modal.Title>
              </Modal.Header>
              <Modal.Body>
               {
               operating_hours && Object.keys(operating_hours).length > 0 &&(
                  <ul className="mt-3 mb-4">
                    
                    <li>monday:<span className="">{operating_hours.Monday}</span></li>
                    <li>Tuesday:<span className="">{operating_hours.Tuesday}</span></li>
                    <li>Wednesday:<span className="">{operating_hours.Wednesday}</span></li>
                    <li>Thursday:<span className="">{operating_hours.Thursday}</span></li>
                    <li>Friday:<span className="">{operating_hours.Friday}</span></li>
                    <li>Saturday:<span className="">{operating_hours.Saturday}</span></li>
                    <li>Sunday:<span className="">{operating_hours.Sunday}</span></li>


                  </ul>
                )
               }
              </Modal.Body>
            </Modal>
          </div>
        </div>
      </div>
    </>
  );
}

export default CartDisplay;
