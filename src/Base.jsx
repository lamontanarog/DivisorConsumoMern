import Swal from "sweetalert2";
import { useNavigate } from 'react-router-dom';

function Base() {
    const navigate = useNavigate();
    return (
        <div>
            <h1>Que desea calcular?</h1>

            <button
                onClick={async () => {
                    // eslint-disable-next-line no-unused-vars
                    const { value: clave } = await Swal.fire({
                        title: "Por favor, ingrese la clave de admin",
                        input:'password',
                        inputAttributes: {
                            autocapitalize: 'off',
                        },
                        showCancelButton:true,
                        confirmButtonText: "Comprobar clave",
                        showLoaderOnConfirm: true,
                        preConfirm: (clave) => {
                            if (clave === 'andes1560') {
                                navigate('/consumogeneral');
                            } else {
                                Swal.showValidationMessage('Clave incorrecta.');
                            }
                        }
                    })
                }}>
                Admin
            </button>
            &nbsp;
            <a href="/consumocliente">
                <button>Consumo de cliente</button>
            </a>
        </div >
    );
}

export default Base;
