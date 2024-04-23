import { useContext } from "react";
import { Box, Typography } from "@mui/material"
import BodyPart from "./BodyPart"
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu'
import 'react-horizontal-scrolling-menu/dist/styles.css';
import RightArrowIcon from '../assets/icons/right-arrow.png';
import LeftArrowIcon from '../assets/icons/left-arrow.png';

const LeftArrow = () => {
  const { scrollPrev } = useContext(VisibilityContext);

  return (
    <Typography onClick={() => scrollPrev()} className="right-arrow">
      <img src={LeftArrowIcon} />
    </Typography>
  );
};

const RightArrow = () => {
  const { scrollNext } = useContext(VisibilityContext);

  return (
    <Typography onClick={() => scrollNext()} className="left-arrow">
      <img src={RightArrowIcon} />
    </Typography>
  );
};

export default function FlipPage({bodyPartsData, bodyPart, setBodyPart}) {
    return(
        <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
            {bodyPartsData.map((parts) => (
            <Box key={parts.id || parts} itemId={parts.id || parts} title={parts.id || parts} m='0 40px'>
                <BodyPart parts={parts} bodyPart={bodyPart} setBodyPart={setBodyPart}/>
            </Box>
            )
        )}
        </ScrollMenu>
    )
}