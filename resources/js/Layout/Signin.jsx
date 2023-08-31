import { Link } from "@inertiajs/inertia-react";

import { Formik, Form, Field, ErrorMessage } from "formik";
import { object, string } from "yup";
import { useId } from 'react'

const userSchema = object({
    email: string().required('El correo electronico es requrido').email(),
    password: string().required('La contraseña es requerida'),
});

export function Signin() {
    const email = useId()
    const password = useId()

    const checkInput = (errors, touched, name) => {
        if (touched[name] === true) {
            return (errors[name] === undefined ? '' : 'border border-danger')
        }
    }

    return (
        <div
            className="modal fade"
            id="signin"
            tabIndex="-1"
            aria-hidden="true"
        >
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-body">
                        <div className="text-end">
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            ></button>
                        </div>

                        <h2 className="modal-title fs-5 text-center">
                            Iniciar Sesión
                        </h2>

                        <Formik
                            initialValues={{
                                email: '',
                                password: ''
                            }}
                            validationSchema={userSchema}
                            onSubmit={(values, { setSubmitting }) => {
                                setTimeout(() => {
                                    alert(JSON.stringify(values, null, 2));
                                    setSubmitting(false);
                                }, 400);
                            }}
                        >
                            {({ errors, touched, isSubmitting }) => (
                                <Form>
                                    <div className="mb-3">
                                        <label
                                            htmlFor={email}
                                            className="col-form-label"
                                        >
                                            Correo Electronico
                                        </label>
                                        <Field
                                            type="text"
                                            className={`form-control ${checkInput(errors, touched, 'email')}`}
                                            name="email"
                                            id={email}
                                        />
                                        <ErrorMessage className="text-danger" name="email" component="div" />
                                    </div>
                                    <div className="mb-3">
                                        <label
                                            htmlFor="password"
                                            className="col-form-label"
                                        >
                                            Contraseña
                                        </label>
                                        <Field
                                            type={password}
                                            className={`form-control ${checkInput(errors, touched, 'password')}`}
                                            name="password"
                                            id={password}
                                            autoComplete='on'
                                        />
                                        <ErrorMessage className="text-danger" name="password" component="div" />
                                    </div>

                                    <div className="text-center mb-2">
                                        <button
                                            type="submit"
                                            className="btn btn-primary"
                                            disabled={isSubmitting}
                                        >
                                            Ingresar
                                        </button>
                                    </div>
                                </Form>
                            )}
                        </Formik>

                        <div className="text-center">
                            <p className="mb-0">¿No tienes una cuanta aún?</p>
                            <button
                                className="btn btn-link"
                                type="button"
                                data-bs-dismiss="modal"
                            >
                                <Link href="/signup">Crear una ahora!</Link>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
