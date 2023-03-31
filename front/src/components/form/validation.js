export const validation = (userData, errors) => {
    const error = {...errors}
    if (!userData.username) 
        error.username = 'Por favor completar';
        
        else if (userData.username.length > 35) 
           error.username = 'Wep mas corto flaco';
        
        else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{3})+$/.test(userData.username)) 
        error.username = 'Email invalido';
     else error.username = '';
    // password
    if (!userData.password) error.password = 'ingresa tu contraseña';
        
    else if (!/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,10}$/.test(userData.password))
    error.password = 'Contraseña invalidad';
        
    else error.password = '';
        

    return error       
}