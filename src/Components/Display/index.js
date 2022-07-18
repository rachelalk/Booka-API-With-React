import { useEffect, useState } from "react";

function Display({authorName, authorSearch}) {
	const [authorSearchResult, setAuthorSearchResult] = useState([]);
    const [loading, setLoading] = useState (true);
    

	useEffect(() => {
		const API = `https://openlibrary.org/search/authors.json?q=${authorName}`;
		async function fetchMyAPI() {
            setLoading(true);
			let response = await fetch(API);
			response = await response.json();
			setAuthorSearchResult(response.docs[0]);
            setLoading(false)
            console.log(response.docs[0])
            console.log(authorSearchResult)
		}

		fetchMyAPI();
	}, [authorSearch]);

    	
			
    if (authorSearchResult === undefined) {
    return (
        <div>Enter search to begin</div>
    )
    }

    if (loading) {return <div>Searching...</div>};

    if (authorSearchResult) {
	return (
		<div>
			 <p>Name: {authorSearchResult.name}</p>
			<p>Top work: {authorSearchResult.top_work}</p>
            <p>DOB: {authorSearchResult.birth_date}</p>
            <p>Work count: {authorSearchResult.work_count}</p>
		</div>
	)};
}


export default Display;
