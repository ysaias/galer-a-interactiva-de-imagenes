## Descripción General:

Este proyecto es una galería interactiva de imágenes que muestra tres secciones con diferentes paisajes (Santa Cruz, Samaipata, y Jardín de las Delicias). El fondo de cada sección puede cambiar dinámicamente según el color seleccionado por el usuario utilizando un contexto global (React Context API). Un componente de selección de colores permite al usuario cambiar el color de fondo de todas las secciones simultáneamente.

El proyecto está implementado en React con TypeScript, aprovechando el contexto para compartir el estado global del color entre varios componentes.

### Componentes:

### 1. XContext (Contexto Global)

Proporciona el estado global de la aplicación (en este caso, el color de fondo) y una función para actualizarlo.
El XData se encarga de envolver los componentes que necesitan acceder al contexto, asegurando que puedan leer o modificar el color de fondo.
### Funcionalidad:
color: mantiene el color de fondo que se aplicará a todos los componentes.
setColor: función para actualizar el color.

### 2. Color (Selector de Colores)
Componente que muestra cuatro opciones de color que el usuario puede seleccionar. Cada color es un div que, al hacer clic, cambia el color de fondo de todos los componentes que utilizan el contexto.
### Funcionalidad:
Usa useContext para obtener el método setColor desde el contexto global.
Cambia el color de fondo global de la aplicación cuando el usuario selecciona un color.

### 3. Page1, Page2, Page3 (Componentes de Páginas)
Cada componente de página representa una sección que muestra una imagen y un texto descriptivo. El fondo de cada componente cambia dinámicamente según el color seleccionado.
### Funcionalidad:
Usa useContext para acceder al color desde el contexto y aplicarlo como fondo.
Muestra una imagen (prop pimg) y un texto (prop ptext), que son pasados como props.

### 4. App (Componente Principal)
El componente principal que organiza la estructura de la aplicación. Envolviendo las páginas (Page1, Page2, Page3) dentro del proveedor de contexto XData, asegura que todos los componentes puedan acceder y cambiar el color de fondo global. También incluye el selector de colores (Color).
### Funcionalidad:
Renderiza las tres páginas (cada una con su propia imagen y texto).
Incluye el componente Color para seleccionar colores y cambiar el fondo de las páginas.

## Descripción de la Lógica:
Contexto Global (XContext): El color de fondo se define en el contexto global. Este estado es accesible y modificable desde cualquier componente que esté envuelto por XData.

### Cambio de Color Dinámico: 
El componente Color tiene cuatro colores predefinidos, y al hacer clic en cualquiera de ellos, el color se actualiza en el contexto. Esto, a su vez, provoca que el fondo de todos los componentes que utilizan este contexto cambie automáticamente.

### Páginas con Fondo Dinámico: 
Cada una de las tres páginas utiliza el color global como fondo, asegurándose de que cualquier cambio en el contexto sea inmediatamente reflejado en su estilo.

Ejemplo de Uso:
El usuario puede ver tres secciones con diferentes imágenes y textos.
Abajo de las imágenes, se encuentra el selector de color, que le permite cambiar el fondo de todas las secciones.
Al hacer clic en un color, el fondo de las tres páginas cambia al color seleccionado.
### Beneficios:
Uso eficiente del contexto global para compartir un estado común entre múltiples componentes.
Modularidad: Cada componente (página) es independiente, pero todos comparten el estado de color.
Interfaz de usuario intuitiva: El usuario puede cambiar el fondo de forma interactiva con solo un clic.
### Ejemplo de Funcionamiento:
![image](https://github.com/user-attachments/assets/b0bb98cc-df1d-473d-8d9e-e828da6ccf9b)


# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
