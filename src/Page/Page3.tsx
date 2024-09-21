import { useContext } from "react";
import { XContext } from "../Context/XContext";

export default function Page3(props: page3Props){

    // Obtener el contexto usando useContext
    const context = useContext(XContext);

    // Si el contexto es undefined, arrojar un error o manejarlo de alguna manera
    if (!context) {
        throw new Error("XContext debe estar dentro del XData.Provider");
    }

    const { color } = context;

    return(
        <div className="style_son"
        style = {{background: color}} >

            <h3>{props.ptext}</h3>
            <img src={props.pimg} alt="Imagen" />
           
        </div>
    )

}

interface page3Props{
    pimg: string;
    ptext: string;
}