import '../css/componentes.css';

export const sayHello = (name) => {
    console.log('Creating h1 tag in the HTML');

    const h1 = document.createElement('h1');
    h1.innerText = `Hello, ${ name }, how are you today?`;
    
    document.body.append(h1);
};
