import React from 'react';
import { Modal, Box, IconButton, Button } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faX } from '@fortawesome/free-solid-svg-icons';
import { useMediaQuery } from '@mui/material';

const ThumbnailModal = ({ isOpen, onClose, onSave }) => {
  const [thumbnail, setThumbnail] = React.useState(null);
  const isMobile = useMediaQuery('(max-width:550px)');

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setThumbnail(URL.createObjectURL(file));
    }
  };

  const handleCustomButtonClick = () => {
    document.getElementById('file-input').click();
  };

  return (
    <Modal open={isOpen} onClose={onClose}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: isMobile ? "70%" : 400,
          bgcolor: "background.paper",
          boxShadow: 24,
          paddingY: 3,
          paddingX: 4,
          borderRadius: "8px",
        }}
      >
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{ position: "absolute", top: 5, right: 5 }}
        >
          <FontAwesomeIcon icon={faX} />
        </IconButton>
        <div className="flex flex-col items-center">
          <div className="justify-center text-xl font-semibold">
            썸네일 이미지 추가
          </div>
          <div className="mb-5 text-lg">이미지를 선택하세요</div>
          <div className="flex flex-col items-center justify-center mb-3">
            <input
              type="file"
              id="file-input"
              onChange={handleFileChange}
              className="hidden"
            />
            {thumbnail && (
              <img src={thumbnail} alt="Thumbnail Preview" className="my-3"
              style={{ height: '200px', objectFit: 'cover' }} />
            )}
            <Button
              variant="contained"
              color="primary"
              onClick={handleCustomButtonClick}
              className="mb-3"
            >
              {thumbnail ? "교체" : "파일 선택"}
            </Button>
          </div>
          <Button
            variant="contained"
            color="success"
            onClick={() => onSave(thumbnail)}
          >
            출간하기
          </Button>
        </div>
      </Box>
    </Modal>
  );
};

export default ThumbnailModal;