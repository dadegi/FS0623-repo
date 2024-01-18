import { useParams } from 'react-router-dom';

type NomiComponentParams = {
	nome: string;
};

const NomiComponent = () => {
	const params = useParams<NomiComponentParams>();

	return (
		<>
			<div>
				<h2>Benvenuto nella pagina dei nomi</h2>
                <h4>Sei sulla pagina di {params.nome?.toUpperCase()}</h4>
			</div>
		</>
	);
};

export default NomiComponent;