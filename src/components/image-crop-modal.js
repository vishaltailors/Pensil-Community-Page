import { useContext, useRef, useState } from "react";

import ReactCrop from "react-image-crop";
import Popup from "reactjs-popup";

import "react-image-crop/dist/ReactCrop.css";
import { BannerContext } from "../banner-provider";
import { CommunityContext } from "../community-provider";

const ImageCropModal = () => {
  const { imageCropModal, setImageCropModal } = useContext(BannerContext);
  const { communityDetails, setCommunityDetails } =
    useContext(CommunityContext);

  const imageRef = useRef();

  const [crop, setCrop] = useState();
  const [error, setError] = useState(false);

  const closePopup = () => {
    setImageCropModal({
      open: false,
      image: "",
    });
  };

  const getCroppedImg = (image, crop) => {
    const canvas = document.createElement("canvas");
    const pixelRatio = window.devicePixelRatio;
    const scaleX = image.naturalWidth / image.width;
    const scaleY = image.naturalHeight / image.height;
    const ctx = canvas.getContext("2d");

    canvas.width = crop.width * pixelRatio * scaleX;
    canvas.height = crop.height * pixelRatio * scaleY;

    ctx.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
    ctx.imageSmoothingQuality = "high";

    ctx.drawImage(
      image,
      crop.x * scaleX,
      crop.y * scaleY,
      crop.width * scaleX,
      crop.height * scaleY,
      0,
      0,
      crop.width * scaleX,
      crop.height * scaleY
    );

    const dataUrl = canvas.toDataURL("image/jpeg");
    return dataUrl;
  };

  const saveCroppedImage = () => {
    if (!crop) {
      setError(true);
      return;
    } else {
      setError(false);
    }
    const croppedImage = getCroppedImg(imageRef.current, crop);
    setCommunityDetails({
      ...communityDetails,
      banner: croppedImage,
    });
    closePopup();
  };

  return (
    <Popup open={imageCropModal.open} onClose={closePopup}>
      <div className="modal-open no-close-modal modal modal-bottom sm:modal-middle">
        <div className="modal-box relative">
          <h3 className="mb-4 text-center text-lg font-bold">
            Preview & crop image
          </h3>
          <hr />
          <div className="mt-5">
            <ReactCrop
              crop={crop}
              onChange={(c) => setCrop(c)}
              aspect={4 / 1}
              className="w-full rounded-xl"
            >
              <img
                src={imageCropModal.image}
                alt=""
                className="w-full rounded-xl"
                ref={imageRef}
                crossOrigin="anonymous"
              />
            </ReactCrop>
          </div>
          {error && (
            <div className="alert alert-warning shadow-lg">
              <div>
                <span>Warning: Please crop the image and save it!</span>
              </div>
            </div>
          )}
          <button
            className="btn btn-primary mt-3 w-full"
            onClick={saveCroppedImage}
          >
            Crop and save
          </button>
        </div>
      </div>
    </Popup>
  );
};

export default ImageCropModal;
