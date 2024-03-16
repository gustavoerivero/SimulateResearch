import {
  object, 
  number
} from "yup";

export const calculatorSchema = object({
  lambda: number()
    .typeError("La tasa de llegada de clientes debe ser un valor numérico.")
    .min(0, "El valor mínimo puede ser '0'.")
    .max(9999, "El valor máximo puede ser '9999'.")
    .required("La tasa de llegada de clientes es requerida."),
  mu: number()
    .typeError("La tasa de servicio debe ser un valor numérico.")
    .min(0, "El valor mínimo puede ser '0'.")
    .max(9999, "El valor máximo puede ser '9999'.")
    .required("La tasa de servicio es requerida."),
  maxQueueSize: number()
    .typeError("El tamaño de la cola debe ser un valor numérico.")
    .min(0, "El valor mínimo puede ser '0'.")
    .max(9999, "El valor máximo puede ser 9999.")
    .integer("Solo se permite números enteros.")
    .required("El tamaño de la cola es requerido."),
});

export const calculatorDefaultValues = {
  lambda: 0,
  mu: 0,
  maxQueueSize: 1
};