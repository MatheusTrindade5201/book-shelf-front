import React from 'react';


interface BannerProps {
  backgroundImage: string;
  title: string;
  text: string;
  buttonText: string;
  buttonLink: string;
}

const Banner: React.FC<BannerProps> = ({
  backgroundImage,
  title,
  text,
  buttonText,
  buttonLink,
}) => {
  return (
    <div className=' banner place-content-center bg-center bg-cover text-center overflow-hidden mt-auto' 
      style={{
        backgroundImage: `url(${backgroundImage})`,
        marginTop:'-224px',
        width:'100vw',
        height:'70vh',

      }}
    >
      <div className='place-content-center bg-stone-400 ml-96 mr-96 p-10 opacity-70 rounded-md mt-40'      
      
      >
        <h1
          style={{
            fontSize:'35px',
            opacity:'1'
          }}
        
        
        >
        
        
          {title}
        </h1>
        <p
          style={{
            margin:'15px',
            fontSize:'30px',
            opacity:'1'
          }}
        
        
        
        >
          {text}
        </p>
        <a
          href={buttonLink}
          style={{
            display: 'inline-block',
            backgroundColor: '#BF9780',
            color: '#fff',
            padding: '10px 20px',
            textDecoration: 'none',
            fontSize: '18px',
            borderRadius: '5px',
            marginTop: '20px',
          }}
        >
          {buttonText}
        </a>
      </div>
    </div>
  );
};

export default Banner;
