import { createContext, useState } from "react";

export const BannerContext = createContext();

const BannerProvider = ({ children }) => {
  const [imageCropModal, setImageCropModal] = useState({
    open: false,
    image: "",
  });

  return (
    <BannerContext.Provider
      value={{
        imageCropModal,
        setImageCropModal,
      }}
    >
      {children}
    </BannerContext.Provider>
  );
};

export default BannerProvider;
