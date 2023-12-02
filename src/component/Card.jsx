import "../App.css";

const Card = (props) => {
	return (
		<div className="card">
			<img className="card-image" src={props.img} alt="Imagen" />
			<div className="card-content">
				<h2 className="card-title">{props.title}</h2>
				<p className="card-description">{props.description}</p>
				<a href={props.link} className="card-link">
					Ver más
				</a>
			</div>
		</div>
	);
};

export default Card;
