'use client'
import Profile from "@components/Profile";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const MyProfile = () => {
  const {data:session} = useSession();
  const [posts, setPosts] = useState([]);
  const router = useRouter();
  const handleEdit = (post) => {
    router.push(`/update-idea?id=${post._id}`)

  };
  const handleDelete = async (post) => {
    const hasConfirm = confirm('Are you sure you want to delete this idea?'); 

    if(hasConfirm){
      try {
        await fetch(`/api/idea/${post._id.toString()}`, {method: 'DELETE'}); 

        const filteredPosts = posts.filter((item) => item._id !== posts._id)

        setPosts(filteredPosts)
      } catch (error) {
        console.log(error)
        
      }
    }
  };
 

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch(`/api/users/${session?.user.id}/posts`);
      const data = await response.json();

      setPosts(data);
    };
    if(session?.user.id)fetchPosts();
  }, []);

  
  return (
    <Profile
      name="My "
      desc="Welcome to your personalized profile"
      data={posts}
      handleEdit={handleEdit}
      handleDelete={handleDelete}
    />
  );
};

export default MyProfile;
