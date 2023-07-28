import React from 'react';
import '../styles/Formulario.css'; // Asegúrate de tener el archivo CSS para los estilos del formulario
import { useForm } from 'react-hook-form';
import '../js/script.js'

const FormularioDatosEnvio = () => {

    const { register,handleSubmit,formState: { errors } } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <div className="formulario-container">
            <h2>Everchic</h2>
            <h3>Datos para envios:</h3>
            <form className="form_data"onSubmit={handleSubmit(onSubmit)}>
                <div className='data_seccion'>
                    <label className="label_form" htmlFor="nombre">Nombres: </label>
                    <input type="text" {...register('nombres', { required: true })} />
                    {errors.nombre && <span>Este campo es requerido</span>}
                </div>
                <div className='data_seccion'>
                    <label  className="label_form" htmlFor="apellidos">Apellidos: </label>
                    <input type="text" {...register('aoellidos', { required: true })} />
                    {errors.nombre && <span>Este campo es requerido</span>}
                </div>
                <div className='data_seccion'>
                    <label  className="label_form" htmlFor="email">E-mail: </label>
                    <input type="text" {...register('email', { required: true })} />
                    {errors.nombre && <span>Este campo es requerido</span>}
                </div>

                <div className='data_seccion'>
                    <label  className="label_form" htmlFor="cedula">Cedula: </label>
                    <input type="text" {...register('cedula', { required: true })} />
                    {errors.edad && <span>Este campo es requerido</span>}
                </div>
                <div className='data_seccion'>
                    <label  className="label_form" htmlFor="Ciudad">Ciudad: </label>
                    <input type="text" {...register('ciudad', { required: true })} />
                    {errors.nombre && <span>Este campo es requerido</span>}
                </div>
                <div className='data_seccion'>
                    <label  className="label_form" htmlFor="Canton">Canton: </label>
                    <input type="text" {...register('canton', { required: true })} />
                    {errors.nombre && <span>Este campo es requerido</span>}
                </div>
                <div className='data_seccion'>
                    <label className="label_form" htmlFor="celular">Direccion: </label>
                    <textarea type="text" {...register('celular', { required: true })} />
                    {errors.direccion && <span>Este campo es requerido</span>}
                </div>

                <div className="cont_button">
                <input className="Button" type="submit" value="Enviar" />
                </div>
                    
            </form>
        </div>
    );
};

export default FormularioDatosEnvio;
