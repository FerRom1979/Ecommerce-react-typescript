import { accessories, balls, paddles } from "../assets/img";
import { card, currency, delivery } from "../assets/svg";

export const SLIDER_ONE = [accessories, balls, paddles];

export const SLIDER_CARDS = [
  { img: card, title: "HASTA 12 CUOTAS SIN INTERÉS", description: "Todos los bancos", id: 1 },
  { img: delivery, title: "ENVIOS GRATIS", description: "En compras superiores a $8.000", id: 2 },
  {
    img: currency,
    title: "15% DE DESCUENTO",
    description: "pagos por transferencia o depósito",
    id: 3,
  },
];
