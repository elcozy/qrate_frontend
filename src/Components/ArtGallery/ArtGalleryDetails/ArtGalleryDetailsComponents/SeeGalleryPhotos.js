import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { ArtGalleryHeaders } from "../../../Shared/Texts/GeneralTexts";
import "../ArtGalleryDetails.scss";
import { Modal } from "react-bootstrap";
// import { gallery_images } from "./ArtGalleryData";

const MyVerticallyCenteredModal = ({ imageSrc, ...props }) => {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton />
      <Modal.Body>
        <img alt="" className="w-100" src={imageSrc} />
      </Modal.Body>
    </Modal>
  );
};

export const SeeGalleryPhotos = ({ galleryPhotos }) => {
  const [modalShow, setModalShow] = React.useState(null);
  return (
    <div className="see-photos">
      <ArtGalleryHeaders text="See Photos" />

      <div>
        <Splide
          options={{
            rewind: true,
            width: 800,
            // gap: "1rem",
            autoWidth: true,
            autoplay: true,
          }}
        >
          {galleryPhotos.map((item, i) => (
            <React.Fragment key={i}>
              <SplideSlide>
                <img
                  className="cursor-pointer"
                  alt=""
                  src={item.image}
                  onClick={() => setModalShow(item.image)}
                />
              </SplideSlide>
              <MyVerticallyCenteredModal
                show={!!modalShow}
                onHide={() => setModalShow(null)}
                imageSrc={modalShow}
              />
            </React.Fragment>
          ))}
        </Splide>
      </div>
    </div>
  );
};
