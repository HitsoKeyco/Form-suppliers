import React from 'react';
import '../styles/Formulario.css'; // Asegúrate de tener el archivo CSS para los estilos del formulario
import { useForm } from 'react-hook-form';
import '../js/script.js'
import servientrega from '../img/svg/logo_servientrega.svg';


const FormularioDatosEnvio = () => {

    const { register,handleSubmit,formState: { errors } } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <div className="formulario-container">
            <div className="aviso">
                <p>Te informamos que everchic pronto tendra su pagina web. Gracias por su confianza!! 👷‍♂️ 🧡</p>
            </div>
            <div className="logo">                
                <img className="logo_img" src={servientrega} alt="" />
            <h2>Everchic</h2>
            </div>
            
            <h3>Datos para envios:</h3>
            <form className="form_data"onSubmit={handleSubmit(onSubmit)}>
                <div className='data_seccion'>
                    <label className="label_form" htmlFor="nombre">Nombres: </label>
                    <input type="text" {...register('nombres', { required: true })} />
                    {errors.nombres && <span>Este campo es requerido</span>}
                </div>
                <div className='data_seccion'>
                    <label  className="label_form" htmlFor="apellidos">Apellidos: </label>
                    <input type="text" {...register('aoellidos', { required: true })} />
                    {errors.apellidos && <span>Este campo es requerido</span>}
                </div>
                <div className='data_seccion'>
                    <label  className="label_form" htmlFor="email">Celular N°1: </label>
                    <input type="text" {...register('celular_1', { required: true })} />                    
                    {errors.celular_1 && <span>Este campo es requerido</span>}                    
                </div>
                <div className='data_seccion'>
                    <label  className="label_form" htmlFor="email">Celular N°2: </label>
                    <input type="text" {...register('celular_1', { required: true })} />                                        
                </div>
                <div className='data_seccion'>
                    <label  className="label_form" htmlFor="email">E-mail: </label>
                    <input type="text" {...register('email', { required: true })} />
                    {errors.email && <span>Este campo es requerido</span>}
                </div>
                <div className='data_seccion'>
                    <label  className="label_form" htmlFor="cedula">Cedula: </label>
                    <input type="text" {...register('cedula', { required: true })} />
                    {errors.cedula && <span>Este campo es requerido</span>}
                </div>
                <div className='data_seccion'>
                    <label  className="label_form" htmlFor="Ciudad">Ciudad: </label>
                    <input type="text" {...register('ciudad', { required: true })} />
                    {errors.ciudad && <span>Este campo es requerido</span>}
                </div>
                <div className='data_seccion'>
                    <label  className="label_form" htmlFor="Canton">Canton: </label>
                    <input type="text" {...register('canton', { required: true })} />
                    {errors.canton && <span>Este campo es requerido</span>}
                </div>
                <div className='data_seccion'>
                    <label className="label_form" htmlFor="celular">Direccion: </label>
                    <textarea type="text" {...register('direccion', { required: true })} />
                    {errors.direccion && <span>Este campo es requerido</span>}
                </div>
                <div className='data_seccion'>
                    <label className="label_form" htmlFor="celular">Observaciones:</label>
                    <textarea type="text" {...register('observacion', { required: true })} />
                    {errors.observacion && <span>Este campo es requerido</span>}
                </div>

                <div className="cont_button">
                <input className="Button" type="submit" value="Enviar" />
                </div>
                    
            </form>
        </div>
    );
};

export default FormularioDatosEnvio;
