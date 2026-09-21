import './ComingSoon.css'
import { useEffect, useState } from 'react'

type BackendStatus = {
  status: string;
  timestamp: string;
};


export default function ComingSoon() {
    const [isLoading,setIsLoading] = useState(true);
    const [data, setData] = useState<BackendStatus|null>(null);
    const [error, setError] = useState<string|null>(null);

    useEffect(() => {
        const fetchStatus = async () => {
            setIsLoading(true);
            try {
                const response = await fetch('http://localhost:3000/api/status');
                const data = await response.json();
                console.log('Backend status:', data);
                setData(data);
            } catch (error) {
                setError(error as string);
                console.error('Error fetching backend status:', error);
            } finally {
                setIsLoading(false);
            }
            };

        fetchStatus();
    }, []);

     return (
        <>
            {isLoading ? (
            <p>Loading...</p>
            ) : error ? (
            <p>Error: {error}</p>
            ) : (
            <div>
                <h1>{data?.status}</h1>
                <p>Timestamp: {data?.timestamp}</p>
            </div>
            )}
        </>
    )
}