import React from "react";

interface ImageButtonProps {
  image: string;
  name: string;
  circle?: boolean; // Optional prop for circular shape
  size?: number; // Optional prop for button size
}

const ImageButton: React.FC<ImageButtonProps> = ({ image, name, circle, size }) => {
  const containerStyle: React.CSSProperties = {
    width: size ? `${size}px` : undefined,
    height: size ? `${size}px` : undefined,
    borderRadius: circle ? "50%" : undefined,
    overflow: "hidden",
  };

  return (
    <div style={containerStyle}>
      <img src={image} alt={name} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
      <span>{name}</span>
    </div>
  );
};

export default ImageButton;
