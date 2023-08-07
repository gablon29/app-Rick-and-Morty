export const verificacion = async (id, array, cb) => {
    try {
        const personaje_registrado = await array.find(arr => arr.id === id) !== undefined;
        if (personaje_registrado) { 
            cb(true)
            return true 
        } else {
            cb(false)
            return false
        }
        } catch (error) {
        console.error(error.message)
    }
}