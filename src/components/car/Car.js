import React, { useState } from "react";
import Modal from "react-modal";
import { useForm, Controller } from "react-hook-form";
import moment from "moment";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import swal from "sweetalert";
// import { db } from "../../firebase";

Modal.setAppElement("#root");
export default function Car({
  brand,
  imgUrl,
  model,
  year,
  price,
  description,
}) {
  const [openModal, setOpenModal] = useState(false);
  const { register, handleSubmit, errors, control } = useForm({
    mode: "onChanges",
    reValidateMode: "onChange",
  });

  let numOfDays;
  let formattedStartDate;
  let formattedEndDate;
  let numId;

  const onSubmit = async (data) => {
    formattedStartDate = moment(data.startDate).format("DD/MM/YYYY");
    formattedEndDate = moment(data.endDate).format("DD/MM/YYYY");
    numOfDays = moment(data.endDate).diff(moment(data.startDate), "days") + 1;
    numId = data.numId;
    // await db.collection("Bookings").doc().set(data);

    swal({
      title: `Reserva Exitosa Numero: ${numId}`,
      text: `Tu reserva se registró Exitosamente ${
        data.fname
      }, Ahora podras disfrutar de ${data.brand} ${data.model} ${
        data.year
      } desde ${formattedStartDate} hasta ${formattedEndDate}..
        Precio Total: ${numOfDays * data.price} $`,
      icon: "success",
      button: "Aceptar",
    });
  };

  const bookCar = (brand, imgUrl, model, year, price) => {
    setOpenModal(true);
  };
  return (
    <>
      <div className='card mt-5 mx-2 col-lg-3 col-md-4 col-sm-12'>
        <img src={imgUrl} className='card-img-top ' alt={model} />
        <div className='card-body'>
          <h3 className='card-title'>
            {brand} {model} {year}
          </h3>
          <h5>Desde:$ {price} Por día</h5>
          <p className='card-text'>{description}</p>
          <button
            className='btn btn-danger text-center'
            onClick={() => bookCar(brand, imgUrl, model, year, price)}
          >
            Reserva ya!
          </button>
        </div>
      </div>

      {/* Modal para reserva  */}
      <Modal
        isOpen={openModal}
        onRequestClose={() => setOpenModal(false)}
        style={{
          overlay: {
            backgroundColor: "gray",
          },
        }}
      >
        <h4 className='text-success text-center py-3'>
          Estás a punto de reservar:
        </h4>
        <div className='d-flex justify-content-center'>
          <div className='card col-lg-6 col-md-10 col-sm-12'>
            <img src={imgUrl} className='card-img-top ' alt={model} />
            <div className='card-body'>
              <h3 className='card-title text-center text-danger'>
                {brand} {model} {year}
              </h3>
              <h5 className='text-center text-danger'>
                Precio por dia: ${price}
              </h5>
            </div>
          </div>
        </div>
        <div className='align-center'>
          <button
            href='#'
            className='text-danger btn btn-link float-right'
            onClick={() => setOpenModal(false)}
          >
            Cerrar x
          </button>

          <h3 className='text-center text-success mt-5 my-3'>
            Completa el formulario, por favor
          </h3>

          <form className='w-75 mt-5' onSubmit={handleSubmit(onSubmit)}>
            <div className='form-group'>
              <p className='text-danger font-italic mt-t'>
                Todos los campos son obligatorios
              </p>
              <label>Primer Nombre</label>
              <input
                type='text'
                className='form-control'
                name='fname'
                ref={register({
                  required: { value: true, message: "Campo Obligatorio" },
                })}
              />
            </div>
            <p className='text-danger mb-3'>{errors?.fname?.message}</p>
            <div className='form-group'>
              <label>Primer Apellido</label>
              <input
                type='text'
                className='form-control'
                name='lname'
                ref={register({
                  required: { value: true, message: "Campo Obligatorio" },
                })}
              />
            </div>
            <p className='text-danger text-small font-italic mb-3'>
              {errors?.lname?.message}
            </p>
            <div className='form-group'>
              <label>Email</label>
              <input
                type='email'
                className='form-control'
                placeholder='Ingresa email'
                name='email'
                ref={register({
                  required: { value: true, message: "Campo Obligatorio" },
                })}
              />
              <p className='text-danger text-small font-italic mb-3'>
                {errors?.email?.message}
              </p>
            </div>
            <div className='form-group'>
              <label>Modelo:</label>
              <input
                type='text'
                className='form-control'
                name='model'
                readOnly
                value={model}
                ref={register({
                  required: { value: true, message: "Campo Obligatorio" },
                })}
              />
              <p className='text-danger text-small font-italic mb-3'>
                {errors?.model?.message}
              </p>
            </div>
            <div className='form-group'>
              <label>Marca:</label>
              <input
                type='text'
                className='form-control'
                name='brand'
                readOnly
                value={brand}
                ref={register({
                  required: { value: true, message: "Campo Obligatorio" },
                })}
              />
            </div>
            <p className='text-danger text-small font-italic mb-3'>
              {errors?.brand?.message}
            </p>
            <div className='form-group'>
              <label>Año</label>
              <input
                type='text'
                className='form-control'
                name='year'
                readOnly
                value={year}
                ref={register({
                  required: { value: true, message: "Campo Obligatorio" },
                })}
              />
            </div>
            <p className='text-danger text-small font-italic mb-3'>
              {errors?.year?.message}
            </p>
            <div className='form-group'>
              <label>Precio por día (usd$):</label>
              <input
                type='text'
                className='form-control'
                name='price'
                readOnly
                value={price}
                ref={register({
                  required: { value: true, message: "Campo Obligatorio" },
                })}
              />
            </div>
            <div className='form-group'>
              <label>Número de identificación</label>
              <input
                type='text'
                className='form-control'
                name='numId'
                ref={register({
                  required: { value: true, message: "Campo Obligatorio" },
                })}
              />
            </div>
            <p className='text-danger text-small font-italic mb-3'>
              {errors?.numId?.message}
            </p>
            <label>Fecha de la Reserva Desde:</label>
            <Controller
              name='startDate'
              control={control}
              defaultValue={new Date()}
              render={({ onChange, value }) => (
                <DatePicker
                  selected={value}
                  onChange={onChange}
                  minDate={new Date()}
                  dateFormat='dd/MM/yyyy'
                />
              )}
            />

            <br />
            <br />
            <label>Fecha de la Reserva Hasta:</label>

            <Controller
              name='endDate'
              control={control}
              defaultValue={new Date()}
              render={({ onChange, value }) => (
                <DatePicker
                  selected={value}
                  onChange={onChange}
                  minDate={new Date()}
                  dateFormat='dd/MM/yyyy'
                />
              )}
            />
            <br />
            <br />

            <label className='mt-3'>Ciudad de Recogida</label>
            <select
              className='form-control'
              name='cityPickup'
              ref={register({
                required: { value: true, message: "Campo Obligatorio" },
              })}
            >
              <option>Ciudad de Panamá</option>
              <option>David</option>
              <option>Colón</option>
            </select>
            <p className='text-danger text-small font-italic mb-3'>
              {errors?.cityPickup?.message}
            </p>
            <label className='mt-3'>Ciudad de Entrega:</label>
            <select
              className='form-control'
              name='cityDeliver'
              ref={register({
                required: { value: true, message: "Campo Obligatorio" },
              })}
            >
              <option>Ciudad de Panamá</option>
              <option>David</option>
              <option>Colón</option>
            </select>
            <p className='text-danger text-small font-italic mb-3'>
              {errors?.cityDeliver?.message}
            </p>
            <button type='submit' className='btn btn-danger mt-5 w-100'>
              Reservar
            </button>
          </form>
        </div>
      </Modal>
    </>
  );
}
