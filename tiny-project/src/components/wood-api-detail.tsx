import { useParams } from 'react-router-dom';
import {useEffect, useState} from "react";
import api from "../api/api";

interface WoodDetail {
    "name": string,
    "description": string,
    "id": number,
    "image": string,
    "location": string,
    "slug": string,
    "lat": number,
    "long": number,
    "url": string
}

export default function WoodApiDetail() {
    const url = "https://tree-nation.com/api/projects"
    let { id } = useParams();

    useEffect(() => {
        getData();
    },[])

    const [data, setData] = useState<WoodDetail>({
        description: "",
        id: 0,
        image: "",
        lat: 0,
        location: "",
        long: 0,
        name: "",
        slug: "",
        url: ""
    })

    async function getData(){
        const data = await api<WoodDetail>(`${url}/${id}`);
        setData(data)
    }

    return <div>
        <h2>{data.name}</h2>
        <p style={{maxWidth: "1200px", minWidth: "300px" }}>{data.description}</p>
        <img style={{maxHeight: "500px"}} src={data.image} alt={`Image of the ${data.name}`}/><br/>
        <a href={`${data.url}`}>Visit project page on the tree-nation.com</a>
    </div>;
}