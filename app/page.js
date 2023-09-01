import React from 'react'; // se importa el react 
import '../app/globals.css'; // se importa los estilos css en globals.css


async function loadPosts(){  // esta funcion sirve para cargar las publicaciones desde las API
  const res = await fetch('https://jsonplaceholder.typicode.com/photos');
 
const data = await res.json();
return data;

}// un componente de prueba

function InlineStylesComponent() {
  const buttonStyles = {
    backgroundColor: '#007bff',
    color: 'white',
    padding: '10px 20px',
    border: 'none',
    cursor: 'pointer',
  };

  return <button style={buttonStyles}>Click me</button>;
}



async function PostPages(){  //componente principal que muestra las publicaciones en la pagina web

  
const posts = await loadPosts();
console.log(posts)  // imprime los datos desde la consola 

return(
                 // consume y muestra los datos de la API en la pagina
  <div  className=""  key={posts.id}>
   <h1  >Bienvenido a Mi Página de Inicio</h1>
      <p>Esta es una breve descripción de lo que encontrarás aquí.</p>
    {posts.map(post => (
<div className="cuadrado-con-linea">
  <h3>{post.title}</h3>
<p>{post.thumbnailUrl}</p>
<img src={post.thumbnailUrl} alt={post.title} />

</div>

  ))}
  
  <br/>
  </div>
  
);
}

export default PostPages;