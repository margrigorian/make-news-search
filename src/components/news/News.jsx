import React, { useState } from 'react';
import { useEffect } from 'react';
import useNews from '../../hooks/useNews';
import style from "./News.module.css"; 

export default function News() {
    const [searchInput, setSearchInput] = useState(""); 
    const [numberOfArticles, setNumberOfArticles] = useState("15");
    const [page, setPage] = useState("1");
    const dataArticles = useNews(searchInput, numberOfArticles, page);
    const [allPages, setAllPages] = useState([]);

    let articles;
    dataArticles.articles !== undefined ? articles = dataArticles.articles : articles = [];

    useEffect(() => {
        function createArrOfPages() {
            let pagesArr = [];
            let indexOfCircle;

            dataArticles.total_pages !== undefined ? indexOfCircle = dataArticles.total_pages : indexOfCircle = 1;

            for(let i = 0; i <= indexOfCircle; i++) {
                pagesArr.push(i);
            }

            setAllPages(pagesArr);
        }

        createArrOfPages();

    }, [dataArticles])

    return (
        <div className={style.body}>
            <div className={style.whiteScreen}>
                <div className={style.headerContainer}>
                    <input type="text" className={style.input} value={searchInput} onChange={(e) => setSearchInput(e.target.value)} />
                    <div className={style.selectContainer}>
                        <div className={style.selectFon}>
                            <p className={style.label}>Select number of articles</p>
                            <select onChange={(e) => setNumberOfArticles(e.target.value)}>
                                <option value="Number of articles">Number of articles</option>
                                <option value="3">3</option>
                                <option value="5">5</option>
                                <option value="10">10</option>
                                <option value="15">15</option>
                            </select>
                        </div>
                        <div className={style.selectFon}>
                            <p className={style.label}>Select page</p>
                            <select onChange={(e) => setPage(e.target.value)}>
                                {allPages.map((item, i) => <option key={`OptionId-${i}`} value={item === 0 ? "1" : ("" + item)}>{item === 0 ? "Page" : item}</option>)}
                            </select>
                        </div>
                    </div>
                </div>
                {articles.map((item, i) => <div key={`ArticleId-${i}`} className={style.article}>{item.title}</div>)}
            </div>
        </div>
    )
}
