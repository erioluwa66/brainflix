import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import VideoPlayer from '../../components/VideoPlayer/VideoPlayer'
import VideoList from '../../components/VideoList/VideoList'
import VideoInfo from "../../components/VideoInfo/VideoInfo";
import Comment from '../../components/Comment/Comment';
import {  api_url } from "../../Utils/Utils";
import axios from 'axios';

import './HomePage.scss';



function HomePage() {
    const {id} = useParams()
    const [videoData, setVideoData] = useState(null);
    const [clicked, setClicked] = useState(null);

    useEffect(() => {
        axios
            .get(`${api_url}/videos`)
            .then(res => {
                setVideoData(res.data);
                 // Fetch clicked video detail based on id from URL
                const clickedId = id ? id : res.data[0].id;  
                return axios.get(`${api_url}/videos/${clickedId}`); 

            })
                .then(res => setClicked(res.data))
                .catch(err => console.error(err));
            }, [id]);// Trigger effect when id changes
    
    useEffect(() => {
        const clickedId = id ? id : videoData && videoData.length > 0 ? videoData[0].id : null;
        if (clickedId) {
            axios
                .get(`${api_url}/videos/${clickedId}`)
                .then(res => setClicked(res.data))
                .catch(err => console.error(err));
        }
    }, [id, videoData]);

    const handleSubmit = (event) => {
        event.preventDefault();
        const newText = event.target.comment.value;
        const userName = "Alya Mum";
        axios
            .post(`${api_url}/videos/${clicked.id}/comments`,{
                "name": userName,
                "id":uuidv4(),
                "comment": newText,
                "timestamp":Date.now() 
            })
            .then(res => {
                setClicked({ ...clicked, comments: [res.data, ...clicked.comments] });
            })
            .catch(err => console.log(err));
        event.target.reset();
        };

    const handleDelete = (id) => {
        axios
            .delete(`${api_url}/videos/${clicked.id}/comments/${id}`)
            .then(res => {
            const newComments = clicked.comments.filter(comment => comment.id !== res.data.id);
                setClicked({ ...clicked, comments: newComments });
                })
                .catch(err => console.log(err));
                };
                    
            return (
                clicked ?
                <>
                    <section className="main__hero"><VideoPlayer clicked={clicked} /></section>
                    <section className="main__body">
                        <div className="main__body-left">
                            <VideoInfo clicked={clicked} />
                            <Comment clicked={clicked} handleSubmit={handleSubmit} handleDelete={handleDelete} />
                        </div>
                        <div className="main__body-right">
                            <VideoList videoData={videoData} clicked={clicked}  />
                        </div>             
                    </section>
                </>
                :
                <p>In progess ...</p>
            );

     }             
 
export default HomePage;