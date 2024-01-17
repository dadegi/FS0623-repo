const SingleData = ({ data }) => {
	return (
		<li>
			{data.titolo} - {data.autore} - {data.anno}
		</li>
	);
};

export default SingleData;
