import { useState } from "react";
import Swal from 'sweetalert2'

const CheckOut = ({emptyCart}) => {
    const [nombre, setNombre] = useState("");
    const [email, setEmail] = useState("");
    const [direccion, setDireccion] = useState("");
    const [error, setError] = useState("")
    const regex = new RegExp("^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$")
    const createOrder = () => {

        if(nombre === "" || direccion === "" || email === ""){
            setError('Los datos son obligatorios')
            setTimeout(() => {
                setError("")
            }, 2000);
        }else{
            if (!regex.test(email)) {
                setError('El Mail debe ser Valido')
                setTimeout(() => {
                    setError("")
                }, 2000);
            }
            else{
                Swal.fire({
                    title: "Desea Continuar la Compra",
                    icon: "question",
                    showCancelButton: true,
                    confirmButtonColor: "#3085d6",
                    cancelButtonColor: "#d33",
                    confirmButtonText: "Si, Comprar",
                    customClass:{
                        title:'checkout__titulo-modal',
                    }
                  }).then((result) => {
                    if (result.isConfirmed) {
                      Swal.fire({
                        title: "Comprado",
                        text: `Su numero de Guia es ${Math.floor(Math.random() * Math.floor(Math.random() * Date.now()))}`,
                        icon: "success",
                        customClass:{
                            title:'checkout__titulo-modal'
                        }
                      })
                      emptyCart()
                    }
                  });
            }
        }
    }
  return (
    <div className="checkout">
        <h3 className="checkout__titulo">Completa Tus Datos</h3>
        {
            error !== "" ? <p className="checkout__error">{error}</p> : ""
        } 
        <div className="checkout__inputs">
            <input
            type="text"
            placeholder="Tu Nombre Completo"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            />
            <input
            type="email"
            placeholder="Tu E-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            />
            <input
            type="text"
            placeholder="Tu Direccion"
            value={direccion}
            onChange={(e) => setDireccion(e.target.value)}
            />
        </div>
        <button className="checkout__button" onClick={createOrder}>Comprar</button>

    </div>
  )
}

export default CheckOut