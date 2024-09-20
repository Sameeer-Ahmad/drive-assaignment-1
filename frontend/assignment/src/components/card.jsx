const Card = ({ items }) => (
  <div className="card-container">
    <h1 style={{textAlign:"center"}}>Infinite Scrolling</h1>
    {items.map(item => (
      <div style={{margin:"20px"}} key={item.id} className="card">
        <h3>{item.title}</h3>
        <p>{item.body}</p>
      </div>
    ))}
  </div>
);

export default Card;
