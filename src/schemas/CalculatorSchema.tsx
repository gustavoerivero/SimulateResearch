import {
  object,
  string
} from "yup";

export const calculatorSchema = object({
  lambda: string()
    .matches(/^\d*\.?\d*$/, "Solo se permiten valores numéricos.")
    .typeError("La tasa de llegada de clientes debe ser un valor numérico.")
    .min(0, "El valor mínimo puede ser '0'.")
    .max(9999, "El valor máximo puede ser '9999'.")
    .required("La tasa de llegada de clientes es requerida."),
  mu: string()
    .matches(/^\d*\.?\d*$/, "Solo se permiten valores numéricos.")
    .typeError("La tasa de servicio debe ser un valor numérico.")
    .min(0, "El valor mínimo puede ser '0'.")
    .max(9999, "El valor máximo puede ser '9999'.")
    .required("La tasa de servicio es requerida."),
  maxQueueSize: string()
    .matches(/^\d*\.?\d*$/, "Solo se permiten valores numéricos.")
    .typeError("El tamaño de la cola debe ser un valor numérico.")
    .min(0, "El valor mínimo puede ser '0'.")
    .max(9999, "El valor máximo puede ser 9999.")
    .required("El tamaño de la cola es requerido."),
});

export const calculatorDefaultValues = {
  lambda: "",
  mu: "",
  maxQueueSize: ""
};

export type TCalculatorFormValues = "lambda" | "mu" | "maxQueueSize";