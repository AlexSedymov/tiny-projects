import api from '../api/api'
import React, {useEffect, useState} from 'react';
import styles from './wood-api-data.module.css'
import {Link} from 'react-router-dom';

export interface WoodData {
    name: string,
    description: string,
    id: number,
    location: string,
    slug: string,
    lat: number,
    long: number,
    url: string
}

export default function WoodApiData() {
    const [data, setData] = useState<WoodData[]>([])

    useEffect(() => {
        getData();
    },[])

    async function getData(){
        if (!process.env.URL) {
            throw new Error('URL not found!')
        }
        const data = await api<WoodData[]>(process.env.URL);
        setData(data)
    }

    function cutSentence(sentence: string){
        return sentence.length <= 105 ? sentence : sentence.substring(0, 105)
    }

    return <div className={styles.mainWrapper}>
            {
                data.map((woodData) =>
                    <li className={styles.list} key={woodData.id}>
                        <b>{woodData.name} ({woodData.location}):</b> {cutSentence(woodData.description)} ...
                        <Link to={`/wood-api/${woodData.id}`}> read more</Link>
                    </li>
                )
            }
        </div>
}