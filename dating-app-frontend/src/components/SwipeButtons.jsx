import React from "react";
import styles from "./SwipeButtons.module.css";
import ReplayIcon from "@mui/icons-material/Replay";
import CloseIcon from "@mui/icons-material/Close";
import StarRateIcon from "@mui/icons-material/StarRate";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FlashOnIcon from "@mui/icons-material/FlashOn";
import { IconButton } from "@mui/material";

const SwipeButtons = () => {
    return (
        <div className={styles.swipeButtons}>
            <IconButton className={styles.swipeButtonRepeat}>
                <ReplayIcon fontSize="large" />
            </IconButton>
            <IconButton className={styles.swipeButtonLeft}>
                <CloseIcon fontSize='large' />
            </IconButton>
            <IconButton className={styles.swipeButtonStar}>
                <StarRateIcon fontSize='large'/>
            </IconButton>
            <IconButton className={styles.swipeButtonRight}>
                <FavoriteIcon fontSize="large"/>
            </IconButton>
            <IconButton className={styles.swipeButtonLightning}>
                <FlashOnIcon fontSize="large"/>
            </IconButton>
        </div>
    );
};

export default SwipeButtons;
