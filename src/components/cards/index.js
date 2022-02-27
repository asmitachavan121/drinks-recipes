import "./index.css";
export const Cards = (props) => {
  if(!props || !props.drinks || !props.drinks.length) {
      return (<div>No recipes available</div>);
  }

  return props.drinks.map((drink, id) => {
    return (
        <div className="card" style={{ width: "18rem;" }} key={id}>
          <img className="card-img-top" src={drink.src} alt="Card image cap" />
          <div className="card-body">
            <h5 className="card-title">{drink.title}</h5>
            <p className="card-text">{drink.description}</p>
            <a href="#" className="btn btn-primary">
              {drink.id}
            </a>
          </div>
        </div>
      );
  })
};
