import { toast } from "react-toastify";

export const notifyAdd = (name) => {
   const raisetoast =  <p> <span style={{fontWeight: "700", color: "Black" }}>{name} </span>added to cart </p>
   toast.warn(raisetoast);
}
export const notifyInc = (name) => {
   const raisetoast =  <p> One more <span style={{fontWeight: "700", color: "Black" }}>{name} </span>added to cart </p>
   toast.warn(raisetoast);
}
