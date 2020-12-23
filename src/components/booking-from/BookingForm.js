import React,{useState} from "react";

export default function BookingForm() {
    const 
  return (
      <Car/>
    <div className='align-center'>
      <button
        href='#'
        className='text-danger btn btn-link float-right'
        onClick={() => setOpenModal(false)}
      >
        Cerrar x
      </button>
      <form className='w-75'>
        <div className='form-group'>
          <label>Primer Nombre</label>
          <input type='text' className='form-control' name="fname"/>
          
        </div>
        <div className='form-group'>
          <label>Primer Apellido</label>
          <input type='text' className='form-control' name="lname"/>
        </div>
        <div className='form-group'>
          <label>Email</label>
          <input
            type='email'
            className='form-control'
            placeholder='Ingresa email'
            name="email"
          />
        </div>
        <div className='form-group'>
          <label>Número de identificación</label>
          <input type='text' className='form-control' name="numId" />
        </div>
        <label>Modelo:</label>
        <select className='form-control' name="model">
          <option>Ciudad de Panamá</option>
          <option>David</option>
          <option>Colón</option>
        </select>
        <label>Fecha de la Reserva Desde:</label>
        <input type='date' name="dateFrom"/>
        <br />
        <br />
        <label>Fecha de la Reserva Hasta:</label>
        <input type='date' name="dateTo"/>
        <br />
        <br />
        <label className='mt-3'>Ciudad de Recogida</label>
        <select className='form-control' name="cityPickup">
          <option>Ciudad de Panamá</option>
          <option>David</option>
          <option>Colón</option>
        </select>
        <label className='mt-3'>Ciudad de Entrega:</label>
        <select className='form-control' name="cityDeliver">
          <option>Ciudad de Panamá</option>
          <option>David</option>
          <option>Colón</option>
        </select>
        <button type='submit' className='btn btn-danger mt-5 w-100'>
          Reservar
        </button>
      </form>
    </div>
  );
}
