import React from 'react';

type AvatarProps = {
  url: string;
  size: number;
  website: string;
  name: string;
  onUpload: React.Dispatch<React.SetStateAction<string>>;
};

const Avatar: React.FC<AvatarProps> = ({
  url,
  size,
  onUpload,
  name,
  website,
}) => {
  const str = `Avatar for ${name}`  
}
