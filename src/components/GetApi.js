import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './GetApi.css';

async function doRequest(handleState, handleLoading) {
    try {
        const apiUrl = 'https://inshorts.deta.dev/news?category=technology';

        const response = await axios.get(apiUrl);
        if (!response.data.data) throw Error('No data');

        handleState(response.data.data);
    } catch (error) {
        alert(error);
    } finally {
        handleLoading(false);
    };
};

function GetApi() {
    const [isLoading, setIsLoading] = useState(true);
    const [news, setNews] = useState([]);

    useEffect(() => {
        if(isLoading) doRequest(setNews, setIsLoading);
        setTimeout(() => {
        
            doRequest(setNews, setIsLoading);
        }, 10000);
    }, [news]);

    if (isLoading) {
        return (
            <p className="loading">Loading...</p>
        )
    }

    return (
        <div className='news'>
            {
                news.filter((newInfo, index) => index < 3).map(({
                    author,
                    content,
                    date,
                    imageUrl,
                    readMoreUrl,
                    time,
                    title,
                    url,
                }) => (
                    <a
                        href={url}
                        target="_blank"
                        className='card'
                        title={title}
                        rel="noreferrer"
                    >
                        <img src={imageUrl} alt={title} />
                        <div className="content">
                            <h2>{title}</h2>
                            <p>{content}</p>
                        </div>
                        <div className="footer">
                            <p>{author}</p>
                            <p>{date}</p>
                            <p>{time}</p>
                            <a
                                href={readMoreUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className='btn__submit'
                            >See more</a>
                        </div>
                    </a>
                ))
            }
        </div>
    )
}

export default GetApi;
