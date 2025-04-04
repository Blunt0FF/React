import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './CatImage.module.css';

const CatImage = () => {
    const [catImage, setCatImage] = useState('');
    const [imageKey, setImageKey] = useState(0);  // Добавим состояние для ключа изображения

    const fetchCatImage = async () => {
        try {
            const response = await axios.get('https://api.thecatapi.com/v1/images/search');
            setCatImage(response.data[0].url);
            setImageKey(prevKey => prevKey + 1);  // Обновляем ключ, чтобы сбросить анимацию
        } catch (error) {
            console.error('Error fetching cat image:', error);
        }
    };

    useEffect(() => {
        fetchCatImage();
    }, []);

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Random Cat Image</h1>
            {catImage && (
                <img
                    src={catImage}
                    alt="Random Cat"
                    className={styles.image}
                    key={imageKey}  // Используем ключ для сброса анимации
                />
            )}
            <button onClick={fetchCatImage} className={styles.button}>
                Load New Image
            </button>
        </div>
    );
};

export default CatImage;