
const Validation = ({username, password}) => {
    const regexEmail = /^[a-z0-9._%+-]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/ //controla que sea email
    const regexPasswordNumero = /^(?=.*\d)/ // al menos un número
    const regexPasswordlength = /^(?=^.{6,10}$)/ // longitud entre 6-10
    const errors = {}
    
    if (!(regexEmail.test(username))) errors.username = 'Debe ser un email';
    if (!username) errors.username = 'Ingrese un email';
    if (username.length > 35) errors.username = 'Se excede el número de caracteres';

    if (!regexPasswordNumero.test(password)) errors.password = 'El Password debe tener entre 6 y 10 caracteres y tener al menos un número';
    if (!regexPasswordlength.test(password)) errors.password = 'El Password debe tener entre 6 y 10 caracteres y tener al menos un número';

    return errors;
}
export default Validation;