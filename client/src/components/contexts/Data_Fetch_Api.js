import { useEffect, useState } from "react";

const Data_Fetch_Api = (url) => {
    const [IsLoader, SetIsLoader] = useState(false);
    const [Error, setError] = useState(false);
    const [data, setdata] = useState([]);
    useEffect(() => {
        (async () => {
            try {
                setError(false)
                SetIsLoader(true);
                const res = await fetch(url, {
                    method: 'GET'
                });
                const data = await res.json();
                setdata(data);
                SetIsLoader(false);


            } catch (error) {
                SetIsLoader(false);
                setError(true);
            }
        })();
    }, [])
    return [IsLoader,Error,data];

}
export default Data_Fetch_Api;