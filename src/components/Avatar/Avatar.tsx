import { useState } from 'react';
import BlankAvatar from '../../assets/blank-avatar.png';

interface AvatarProps {
  className?: string;
  img?: string;
}

const Avatar = ({ img, className }: AvatarProps) => {
  const [avatarImg] = useState(img ? img : BlankAvatar);

  return (
    <div className={className}>
      <p className="font-semibold text-picture-text">Profile picture</p>
      <img
        className="mt-2"
        src={avatarImg}
        width={80}
        height={80}
        alt="imagem de perfil"
      />
    </div>
  );
};

export default Avatar;