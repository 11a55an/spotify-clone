import { Controller } from 'react-hook-form';
import styled from 'styled-components';
import { RiPencilLine } from 'react-icons/ri';
import React, { useState, useRef } from 'react';

const ImgField = styled.div`
  input {
    display: none;
  }
`;

const StyledCover = styled.div`
  height: 18rem;
  width: 18rem;

  position: relative;
  overflow: hidden;

  border-radius: 4px;
  box-shadow: 0 4px 6rem rgba(0, 0, 0, 0.5);
  cursor: pointer;

  &:hover {
    svg {
      display: inline-block;
    }

    img {
      filter: brightness(70%);
    }
  }
`;

const PencilIcon = styled(RiPencilLine)`
  display: none;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1000;

  font-size: 6rem;
`;

const Img = styled.img`
  width: 100%;
  height: 100%;

  object-fit: cover;
  object-position: center;
`;

const ModalImgField = ({ playlist, control }) => {
  const [imgFile, setImgFile] = useState('');
  const fileInputRef = useRef(null);

  const handleChangeImg = (e, onChange) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      onChange(file);
      setImgFile(URL.createObjectURL(file));
    }
  };

  return (
    <ImgField>
      <label htmlFor="img">
        <StyledCover>
          <Img src={imgFile || playlist.img} alt="playlist cover" />
          <PencilIcon />
        </StyledCover>
      </label>
      <Controller
        control={control}
        name="img"
        render={({ field: { onChange, ref, ...field } }) => (
          <input
            type="file"
            id="img"
            ref={(e) => {
              fileInputRef.current = e;
              ref(e);
            }}
            onChange={(e) => handleChangeImg(e, onChange)}
            {...field}
          />
        )}
      />
    </ImgField>
  );
};

export default ModalImgField;
