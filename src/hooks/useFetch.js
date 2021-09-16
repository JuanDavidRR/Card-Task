import { useEffect, useRef, useState } from "react";

export const useFetch = (url) => {
	const isMounted = useRef(true);
	const [state, setstate] = useState({
		data: ["Hola"],
		loading: true,
		error: null,
		id: 0,
		title: "",
		url: "",
	});

	useEffect(() => {
		return () => {
			isMounted.current = false;
		};
	}, []);

	useEffect(() => {
		setstate({
			data: "",
			loading: true,
			error: null,
			// id: 0,
			// title: "",
			// url: "",
		});

		fetch(url)
			.then((res) => res.json())
			.then((data) => {
				if (isMounted.current) {
					setstate({
						data: data,
						loading: false,
						error: null,
						// id: data.id,
						// title: data.title,
						// url: data.images?.downsized_medium.url,
					});
				}
			});
	}, [url]);

	return state;
};
