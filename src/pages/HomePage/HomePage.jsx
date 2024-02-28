import "./HomePage.scss";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import VideoPlayer from '../../components/VideoPlayer/VideoPlayer'
import VideoList from '../../components/VideoList/VideoList'
import VideoDetail from '../../components/VideoList/VideoList'
import Comment from '../../components/Comment/Comment';
import { api_key, api_url } from "../../Utils/Utils";
import axios from 'axios';

import './HomePage.scss'



function HomePage() {
    const {id} = useParams()
    const [videoData, setVideoData] = useState(null);
    const [selected, setSelected] = useState(null);

    useEffect(() => {
        axios
            .get(`${api_url}/videos${api_key}`)
            .then(res => {
                let selectedId = id ? id : res.data[0].id;
                
            })


    }
    
    
    )
}

export default HomePage;