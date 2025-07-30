import {Outlet} from "react-router-dom"
import PostList from "../components/PostList";
import { supabase } from "../client";
import { useState, useEffect } from "react";

const ViewAllPostsPage = () => {
    const [postData, setPostData]= useState([]);

    useEffect(() => {
        async function fetchPosts() {
            const {data, error} = await supabase
                .from('forum-posts')
                .select()
                .order('created_at', { ascending: false })
            
            if 
                (error) console.log('Error getting posts');
            else
                setPostData(data);
                console.log(data);
        }
        fetchPosts();
    }, []);  
    return ( 
        <>
            <h1>View All Posts</h1> 
                <PostList postData={postData}/>
            <div className="primary-content">
                <Outlet />
            </div>
        </>
    );
}
 
export default ViewAllPostsPage;