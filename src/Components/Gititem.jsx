export const Gititem = ({ title, url }) => {
    
    console.log({title, url});
    return (
      <div>
        <ul>
       
        <img src={url} alt={title}/>
        <p>{title}</p>
       
        </ul>
      </div>
    );
  };
   