
import { useState, useEffect } from 'react';
import axios from 'axios';

interface Props {
    usd: number
    usd_market_cap: number
    usd_24h_change: number
  }

  
export const useCoingeckoApi = () => {
    const [response, setResponse] = useState<Props>();
    const [error, setError] = useState('');
    const [loading, setloading] = useState(true);

    const fetchData = () => {
        axios
            .get('https://api.coingecko.com/api/v3/simple/price?ids=filecoin&vs_currencies=usd&include_market_cap=true&include_24hr_vol=false&include_24hr_change=true&include_last_updated_at=false')
            .then((res) => {
                setResponse(res.data.filecoin);
            })
            .catch((err) => {
                setError(err);
            })
            .finally(() => {
                setloading(false);
            });
    };

    useEffect(() => {
        fetchData();
    }, []);

    // custom hook returns value
    return { response, error, loading };
};

