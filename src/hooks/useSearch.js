import { useState, useEffect } from 'react';
const useSearch = (projects, query) => {
    const [result, setResult] = useState(projects);
    useEffect(() => {
        if(query){
            setResult(projects.filter((project) => project.description.toLowerCase().includes(query.toLowerCase()) 
                || project.name.toLowerCase().includes(query.toLowerCase())
            ));
        }else{
            setResult(projects);
        }
    }, [query])

    return result;
}

export default useSearch;