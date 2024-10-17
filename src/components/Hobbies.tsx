import React from 'react';
import scotland from '../grid/edinburgh.jpg';
import hikes from '../grid/hikes.jpg';
import greece from '../grid/greece.png';
import hk from '../grid/hk.png';

const ImageGrid = () => {
  // Replace these URLs with the paths or URLs to your actual images
  const images = [
    scotland,
    hikes,
    greece,
    hk,
    'path/to/image6.jpg',
    'path/to/image7.jpg',
    'path/to/image8.jpg',
    'path/to/image9.jpg',
  ];

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>What I like to do!</h2>
      <div style={styles.grid}>
        {images.map((src, index) => (
          <img key={index} src={src} alt={`Image ${index + 1}`} style={styles.image} />
        ))}
      </div>
    </div>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    textAlign: 'center',
    padding: '20px',
  },
  title: {
    fontSize: '24px',
    marginBottom: '20px',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))',
    gap: '10px',
    justifyItems: 'center',
  },
  image: {
    width: '100%',
    height: 'auto',
    borderRadius: '10px',
  },
};

export default ImageGrid;
