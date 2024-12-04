"use client";
import Image from 'next/image';

interface MyComponentProps {
  image: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
}

const MyComponent: React.FC<MyComponentProps> = ({ image }) => {
  return (
    <div>
      <Image
        src={image.src}
        alt={image.alt}
        width={image.width}
        height={image.height}
        priority
        
      />
    </div>
  );
};

export default MyComponent;
