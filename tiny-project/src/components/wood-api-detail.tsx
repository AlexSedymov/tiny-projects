import { useParams } from 'react-router-dom';
import {useEffect, useState} from 'react';
import api from '../api/api';
import {WoodData} from "./wood-api-data";

interface WoodDetail extends WoodData{
    image: string
}

export default function WoodApiDetail() {
    let { id } = useParams();

    useEffect(() => {
        getData();
    },[])

    const [data, setData] = useState<WoodDetail | undefined>(undefined)

    async function getData(){
        const data = await api<WoodDetail>(`${process.env.BASE_URL}/${id}`);
        setData(data)
    }

    return <div>
        {data &&
            <>
                <h2>{data.name}</h2>
                <p style={{maxWidth: '1200px', minWidth: '300px'}}>{data.description}</p>
                <img style={{maxHeight: "500px"}} src={data.image} alt={`Image of the ${data.name}`}/><br/>
                <a href={`${data.url}`}>Visit project page on the tree-nation.com</a>
            </>
        }
    </div>;
}