export const validation = (idChar, arrayFuente, arrayTarget) => {
  if (isNaN(idChar)) {
    return alert("Debes ingresar un numero");
  }
  if (Number(idChar) > 60) {
    return alert("Ese rango de personajes todavia no lo manejamos");
  }
  const repetido =
    arrayTarget.find((char) => char.id === Number(idChar)) !== undefined;
  if (repetido) {
    return alert("El personaje ya esta en la lista");
  }
  const char = arrayFuente.find((char) => char.id === Number(idChar));
  return char;
};
