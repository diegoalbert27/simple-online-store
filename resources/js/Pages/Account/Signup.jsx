export default function Signup() {
    return (
        <div className="w-50">
            <h2>Crearme una cuenta</h2>

            <div className="bg-light p-4 rounded mb-2">
                <h3 className="fs-5">Informacion Personal</h3>
                <div className="row">
                    <div className="col">
                        <label htmlFor="name">Nombre</label>
                        <input className="form-control" type="text" id="name" />
                    </div>
                    <div className="col">
                        <label htmlFor="last-name">Apellido</label>
                        <input className="form-control" type="text" id="last-name" />
                    </div>
                </div>
            </div>

            <div className="bg-light p-4 rounded mb-2">
                <h3 className="fs-5">Contacto</h3>
                <div className="row mb-2">
                    <div className="col">
                        <label htmlFor="email">Correo Electronico</label>
                        <input className="form-control" type="email" id="email" />
                    </div>
                    <div className="col">
                        <label htmlFor="phone">Telefono</label>
                        <input className="form-control" type="text" id="phone" />
                    </div>
                </div>
                <label htmlFor="address">Direccion</label>
                <input className="form-control" type="text" id="address" />
            </div>

            <div className="bg-light p-4 rounded">
                <h3 className="fs-5">Informacion Personal</h3>
                <div className="row">
                    <div className="col">
                        <label htmlFor="password">Contraseña</label>
                        <input className="form-control" type="password" id="password" />
                    </div>
                    <div className="col">
                        <label htmlFor="repeat-password">Repetir Contraseña</label>
                        <input className="form-control" type="password" id="repeat-password" />
                    </div>
                </div>
            </div>

            <div className="d-grid gap-2 mt-2 mb-4">
                <div className="text-center">
                    <input type="checkbox" /> Aceptos todos los terminos y condiciones.
                </div>
                <button className="btn btn-primary">Unirme</button>
            </div>
        </div>
    )
}
