import { createContext, useState, ReactNode, Dispatch, SetStateAction } from "react";

// Define el tipo para el contexto
interface XContextType {
    color: string;
    setColor: Dispatch<SetStateAction<string>>;
}

// Crear el contexto con un valor inicial vacío o undefined
export const XContext = createContext<XContextType | undefined>(undefined);

interface XDataProps {
    children: ReactNode; // Especifica que los children son nodos de React
}

export const XData = ({ children }: XDataProps) => {
    const [color, setColor] = useState<string>('silver');

    return (
        <XContext.Provider value={{ color, setColor }}>
            {children}
        </XContext.Provider>
    );
}


