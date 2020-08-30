import React from "react";
import { ArtGalleryHeaders } from "../../../Shared/Texts/GeneralTexts";
import { Player } from "video-react";
export const UpcomingExhibition = ({ upcomingExhibition }) => (
  <div className="upcoming-exhibition">
    <ArtGalleryHeaders text="Upcoming Exhibitions" />
    {upcomingExhibition.map((collection, i) => {
      return (
        <div
          key={i}
          className="exhibition d-flex flex-row flex-wrap  justify-content-center justify-content-md-start pr-3 py-4 py-md-0 px-3 pl-md-0 mb-3"
        >
          <>
            <div className="img">
              <Player
                playsInline
                poster={collection.videoThumbnail}
                src={collection.video}
              />
            </div>
            <div className="exhibition-details col-12 col-md my-auto">
              <h4 className="exhibition-name">{collection.name}</h4>
              <p className="exhibition-date">{collection.date}</p>
              <h5 className="exhibition-detail w-75">{collection.details}</h5>
              <a href="#" className=" text-center">
                <button>Register</button>
              </a>
            </div>
          </>
        </div>
      );
    })}
  </div>
);
