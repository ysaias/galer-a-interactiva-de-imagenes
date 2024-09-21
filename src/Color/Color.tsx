import { useContext } from "react";
import { XContext } from "../Context/XContext";

export default function Color(){

    // Obtener el contexto usando useContext
    const context = useContext(XContext);

    // Si el contexto es undefined, arrojar un error o manejarlo de alguna manera
    if (!context) {
        throw new Error("XContext debe estar dentro del XData.Provider");
    }

    const { setColor } = context; 

    return(
        <div className="style_colors">
            <div className="style_color"
                onClick={()=> setColor('#4285f4')}>     
            </div>

            <div className="style_color"
                onClick={()=> setColor('#ea4335')}>     
            </div>

            <div className="style_color"
                onClick={()=> setColor('#fbbc05')}>     
            </div>

            <div className="style_color"
                onClick={()=> setColor('#34a835')}>     
            </div>

        </div>
    )
}