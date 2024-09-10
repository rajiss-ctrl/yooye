"use client";
import { useState, useEffect } from 'react';
import { db } from '@/lib/firebase';
import { collection, addDoc, onSnapshot, query, doc, updateDoc, getDoc } from 'firebase/firestore';
import { SendHorizontal, ThumbsUp } from 'lucide-react';

const Comments = () => {
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState([]);
  
  // Fetch comments from Firestore and subscribe to real-time updates
  useEffect(() => {
    const commentsRef = collection(db, 'comments');
    const q = query(commentsRef);
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const commentsArray = [];
      querySnapshot.forEach((doc) => {
        commentsArray.push({ id: doc.id, ...doc.data() });
      });
      setComments(commentsArray);
    });

    return () => unsubscribe();
  }, []);

  // Handle adding new comment to Firestore
  const handleAddComment = async () => {
    if (!comment.trim()) return;

    try {
      const commentsRef = collection(db, 'comments');
      await addDoc(commentsRef, {
        text: comment,
        author: 'Anonymous', // You can change this if you have user auth
        createdAt: new Date().toISOString(),
        likes: [] // Initialize with an empty likes array
      });
      setComment('');
      console.log('Comment added successfully');
    } catch (error) {
      console.error('Error adding comment:', error);
    }
  };

  // Handle liking a comment
  const handleLike = async (commentId) => {
    try {
      const commentRef = doc(db, 'comments', commentId);
      const commentSnapshot = await getDoc(commentRef);

      if (commentSnapshot.exists()) {
        const commentData = commentSnapshot.data();
        const likesArray = commentData.likes || [];
        
        // Check if the user (anonymous in this case) has already liked the comment
        if (!likesArray.includes('anonymous')) {
          const updatedLikes = [...likesArray, 'anonymous']; // Add 'anonymous' for public users

          await updateDoc(commentRef, { likes: updatedLikes });
          console.log('Comment liked successfully');
        } else {
          console.log('User has already liked this comment.');
        }
      }
    } catch (error) {
      console.error('Error liking the comment:', error);
    }
  };

  return (
    <div className='mt-10'>
      <h2>Comments Section</h2>

      <div>
        <textarea
        className='outline-none border'
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="Write a comment..."
        />
        <button className='text-blue-500 rounded-4 border ml-1  border-blue-500' onClick={handleAddComment}><SendHorizontal /></button>
      </div>

      <div className="mt-4">
        {comments.map((c) => (
          <div key={c.id}>
            <p><strong>{c.author}</strong>: {c.text}</p>
            <button className='flex gap-1 mb-3' onClick={() => handleLike(c.id)}><ThumbsUp /> <span className="text-xs">{c.likes?.length || 0}</span></button>
            {/* <p> likes</p> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Comments;
