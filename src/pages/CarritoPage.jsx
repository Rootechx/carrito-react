import { useContext } from "react";
import { CarritoContext } from "../context/CarritoContext";

export const CarritoPage = () => {

    const {listaCompras, aumentarCantidad, disminuirCantidad, borrarCompra} = useContext(CarritoContext)
    
    const calcularTotal = () => {
      return listaCompras.reduce((total, item) => total + item.price * item.cantidad, 0 ).toFixed(2)
    }

    const handleImpresion = () => {
      print()
    }

  return (
    <>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">Nombre</th>
            <th scope="col">Precio</th>
            <th scope="col">Cantidad</th>
            <th scope="col">Borrar</th>
          </tr>
        </thead>
        <tbody>
            {
                listaCompras.map(item =>(
                    <tr key={item.id}>
                        <th>{item.title}</th>
                        <td>{item.price}</td>
                        <td>
                            <button className="btn btn-ouline-primary" 
                            onClick={ () => disminuirCantidad(item.id)}
                            >-</button>
                            <button className="btn btn-primary">{item.cantidad}</button>
                            <button className="btn btn-ouline-primary" 
                            onClick={ () => aumentarCantidad(item.id)}
                            >+</button>
                        </td>
                        <td><button
                            type="button"
                            className="btn btn-danger"
                            onClick={()=>borrarCompra(item.id)}
                        >Borrar
                        </button>
                        </td>                        
                    </tr>
                ))
            }
            <br></br>
        </tbody>        
        <th><b>TOTAL: </b></th>
            <td></td>
            <td></td>
            <td><b>${calcularTotal()}</b></td>
      </table>

      <div className="d-grid gap-2">
        <button className="btn btn-primary" 
        onClick={handleImpresion}
        disabled={listaCompras<1}
        >COMPRAR</button>
      </div>
    </>
  );
};
