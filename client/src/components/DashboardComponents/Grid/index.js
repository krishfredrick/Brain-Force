import React from "react";

const Grid = ({capsule, delay}) => {
  return (
    <motion.div
    initial={{ y: 60, opacity: 0 }}
    whileInView={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.3, delay: delay }}
    className={`grid-box ${
      capsule.status == 'retired' && "grid-box-red"
    }`}
  >
    <div className="info-flex">
     
      <a href={`/capsule/${capsule.id}`}>
        <div className="name-flex">
          <p className="capsule-serial">{capsule.serial}</p>
          <p className="capsule-name">{capsule.type}</p>
        </div>
      </a>
      {isWatchlist || isAdded ? (
        <div
          className="bookmark-icon-div"
          onClick={() => {
            setIsAdded(false);
            removeFromWatchlist(capsule.id);
          }}
        >
          <IconButton>
            <BookmarkRoundedIcon className="bookmark-icon" />
          </IconButton>
        </div>
      ) : (
        <div
          className="bookmark-icon-div"
          onClick={() => {
            setIsAdded(true);
            addToWatchlist(capsule.id);
          }}
        >
          <IconButton>
            <BookmarkBorderRoundedIcon className="bookmark-icon" />{" "}
          </IconButton>
        </div>
      )}
    </div>
    <a href={`/capsule/${capsule.id}`}>
      <div>
        {capsule.status > 0 ? (
          <div className="chip-flex">
            <div className="capsule-chip">
              {capsule.status}
            </div>
            <TrendingUpRoundedIcon className="icon" />
          </div>
        ) : (
          <div className="chip-flex">
            <div className="capsule-chip chip-red">
              {capsule.status }
            </div>
            <TrendingDownRoundedIcon className="icon chip-red" />
          </div>
        )}
      </div>
    </a>
    <a href={`/capsule/${capsule.id}`}>
      <p
        className="capsule-price"
        style={{
          color:
            capsule.status  === 'retired'
              ? "var(--red)"
              : "var(--green)",
        }}
      >
        $ {capsule.current_price.toLocaleString()}
      </p>
    </a>
    <div>
      <a href={`/capsule/${capsule.id}`}>
        <p className="volume-text">
          <strong>Water Landing :</strong> $
          {capsule.waterLanding.toLocaleString()}
        </p>
        <p className="volume-text">
          <strong> Land Landing:</strong> $
          {capsule.land_landing.toLocaleString()}
        </p>
      </a>
    </div>
  </motion.div>
  );
};

export default Grid;
