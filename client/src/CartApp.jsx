export const CartApp = () => {
  return (
    <>
        <div className="container">
            <h3>Cart App</h3>
            <div className="row">
                <div className="col-4 my-2">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Teclado Mecanico RGB</h5>
                            <p className="card-text">Teclado mecanico con luces RGB y switches cherry red</p>
                            <p className="card-text">$ 1,000</p>
                            <button className="btn btn-primary">Agregar</button>
                        </div>
                    </div>
                </div>
                <div className="col-4 my-2">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Samsung Smart TV 55</h5>
                            <p className="card-text">Teclado mecanico con luces RGB y switches cherry red</p>
                            <p className="card-text">$ 3,000</p>
                            <button className="btn btn-primary">Agregar</button>
                        </div>
                    </div>
                </div>
                <div className="col-4 my-2">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Audifonos Bluetooth Sony</h5>
                            <p className="card-text">Teclado mecanico con luces RGB y switches cherry red</p>
                            <p className="card-text">$ 770</p>
                            <button className="btn btn-primary">Agregar</button>
                        </div>
                    </div>
                </div>
                <div className="col-4 my-2">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Memoria Corsair 8 GB DDR5</h5>
                            <p className="card-text">Teclado mecanico con luces RGB y switches cherry red</p>
                            <p className="card-text">$ 3,000</p>
                            <button className="btn btn-primary">Agregar</button>
                        </div>
                    </div>
                </div>
                <div className="col-4 my-2">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Asus Nvidia RTX</h5>
                            <p className="card-text">Teclado mecanico con luces RGB y switches cherry red</p>
                            <p className="card-text">$ 5,000</p>
                            <button className="btn btn-primary">Agregar</button>
                        </div>
                    </div>
                </div>
                <div className="col-4 my-2">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">CPU Intel Core i5</h5>
                            <p className="card-text">Teclado mecanico con luces RGB y switches cherry red</p>
                            <p className="card-text">$ 4,000</p>
                            <button className="btn btn-primary">Agregar</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="my-4 w-50">
                <h3>Carro de compras</h3>
                <table className="table table-hover table-striped">
                    <thead>
                        <tr>
                            <th>Nombre</th>
                            <th>Precio</th>
                            <th>Cantidad</th>
                            <th>Total</th>
                            <th>Eliminar</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>nombre</td>
                            <td>precio</td>
                            <td>cantidad</td>
                            <td>total</td>
                            <td>elimiar</td>
                        </tr>
                    </tbody>
                    <tfoot>
                        <tr>
                            <td colSpan="3" className="text-end fw-bold">Total</td>
                            <td colSpan="2" className="text-start fw-bold">12345</td>
                        </tr>
                    </tfoot>
                </table>
            </div>
        </div>
    </>
  )
}
