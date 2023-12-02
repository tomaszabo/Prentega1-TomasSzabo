import Card from "./Card";
import {useFetch} from "./hook/useFetch";

const CardList = () => {
	const {data, loading} = useFetch("https://fakestoreapi.com/products");
	return (
		<div class="card-container">
			{loading && <h2>loading...</h2>}
			{data?.map((prod) => (
				<Card
					key={prod.id}
					img={prod.image}
					title={prod.title}
					description={prod.description}
					link="https://fakestoreapi.com/docs"
				/>
			))}
		</div>
	);
};
export default CardList;
