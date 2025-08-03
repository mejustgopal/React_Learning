import React from 'react';

const PostCard = ({ post }) => {
    if (!post) return null;

    const { title, body, userId } = post;

    return (
        <div style={styles.card}>
            <h3 style={styles.title}>{title}</h3>
            <p style={styles.body}>{body}</p>
            <small style={styles.meta}>User ID: {userId}</small>
        </div>
    );
};

const styles = {
    card: {
        border: '1px solid #ccc',
        borderRadius: '8px',
        padding: '1rem',
        backgroundColor: '#f9f9f9',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
        color: '#000',
    },
    title: {
        fontSize: '1.25rem',
        fontWeight: '600',
        marginBottom: '0.5rem',
    },
    body: {
        fontSize: '1rem',
        marginBottom: '0.75rem',
    },
    meta: {
        fontSize: '0.875rem',
        color: '#666',
    },
};

export default PostCard;
