import "./HomePage.scss";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import VideoPlayer from '../../components/VideoPlayer/VideoPlayer'
import VideoList from '../../components/VideoList/VideoList'
import VideoDetail from '../../components/VideoDetail/VideoDetail';
import Comment from '../../components/Comment/Comment';
import { api_key, api_url } from "../../Utils/Utils";
import axios from 'axios';

import './HomePage.scss';



function HomePage() {
    const {id} = useParams()
    const [Video, setVideo] = useState(null);
    const [selected, setSelected] = useState(null);

    useEffect(() => {
        axios
            .get(`${api_url}/videos${api_key}`)
            .then(res => {
                setVideo(res.data);
                 // Fetch selected video detail based on id from URL
                const selectedId = id ? id : res.data[0].id;  
                return axios.get(`${api_url}/videos/${selectedId}${api_key}`); 

            })
                .then(res => setSelected(res.data))
                .catch(err => console.error(err));
            }, [id]);// Trigger effect when id changes
    
    useEffect(() => {
        const selectedId = id ? id : Video && Video.length > 0 ? Video[0].id : null;
        if (selectedId) {
            axios
                .get(`${api_url}/videos/${selectedId}${api_key}`)
                .then(res => setSelected(res.data))
                .catch(err => console.error(err));
        }
    }, [id, Video]);

            const handleSubmit = (event) => {
                event.preventDefault();
                const newText = event.target.comment.value;
                const userName = "Alya Mum";
                axios
                    .post(`{api_url}/videos/${selected.id}/comments${api_key}`,{
                       "name": userName,
                       "comment": newText, 
                    })
                    .then(res => {
                        setSelected({ ...selected, comments: [res.data, ...selected.comments] });
                    })
                    .catch(err => console.log(err));
                event.target.reset();
                };

            const handleDelete = (id) => {
                axios
                    .delete(`${api_url}/videos/${selected.id}/comments/${id}${api_key}`)
                    .then(res => {
                        const newComments = selected.comments.filter(comment => comment.id !== res.data.id);
                        setSelected({ ...selected, comments: newComments });
                    })
                    .catch(err => console.log(err));
                };
                    
            return (
                selected ?
                <>
                    <section className="main__hero"><VideoPlayer selected={selected} /></section>
                    <section className="main__body">
                        <div className="main__body-left">
                            <VideoDetail selected={selected} />
                            <Comment selected={selected} handleSubmit={handleSubmit} handleDelete={handleDelete} />
                        </div>
                        <div className="main__body-right">
                            <VideoList Video={Video} selected={selected}  />
                        </div>             
                    </section>
                </>
                :
                <p>Loading...</p>
            );

     }
                
 
export default HomePage;