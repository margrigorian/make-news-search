import React, { useState, useEffect } from 'react';
import request from '../lib/request';
import { NEWS_API_HOST as url} from '../lib/constUrl';
let timeoutId = null;

export default function useNews(inputText, numberOfArticles, page) {
    const [dataNews, setDataNews] = useState([]);
    const num = numberOfArticles;

    useEffect(() => {
        if(inputText) {
            clearTimeout(timeoutId);
            timeoutId = setTimeout(() => {
                request("GET", url + `?q=${inputText}&lang=en&page=${page}&page_size=${num}`).then((result) => setDataNews(result.data));
            }, 1000)
        }
    }, [inputText, numberOfArticles, page])

    return dataNews;
}
