
import '../app/globals.css'
async function loadPosts(){
  const res = await fetch('https://jsonplaceholder.typicode.com/photos');
 
const data = await res.json();
return data;

}

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



async function PostPages(){

  
const posts = await loadPosts();
console.log(posts)

return(

  <div key={posts.id}>
   <h1>Bienvenido a Mi Página de Inicio</h1>
      <p>Esta es una breve descripción de lo que encontrarás aquí.</p>
    {posts.map(post => (
<div>
  <h3>{post.title}</h3>
<p>{post.thumbnailUrl}</p>
<img src={post.thumbnailUrl} alt={post.title} />
</div>
  ))}
  
  
  </div>
);
}

export default PostPages;