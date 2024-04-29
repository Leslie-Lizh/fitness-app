import { useContext, useState, useRef } from "react";
import { Box, Typography, Stack } from "@mui/material"
import BodyPart from "./BodyPart"
import EquipmentPart from "./EquipmentPart";
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu'
import 'react-horizontal-scrolling-menu/dist/styles.css';
import RightArrowIcon from '../assets/icons/right-arrow.png';
import LeftArrowIcon from '../assets/icons/left-arrow.png';

// The scrollPrev and scrollNext is standard term that react recoginizes so don't change them. 
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

// This is about a pager width of the current display eqpt card container
const SCROLLWIDTH = 1300;

// LeftArrow and RightArrow is standard term in ScrollMenu module
export default function FlipPage({bodyPartsData, setBodyPart, eqptData, setEqpt, isBodyPart}) {

  const [scrollPosition, setScrollPosition] = useState(0);
  const containerRef = useRef(null);

  const handleScroll = (scrollAmount) => {
    const newScrollPosition = scrollPosition + scrollAmount;
    setScrollPosition(newScrollPosition);
    containerRef.current.scrollLeft = newScrollPosition
  }

  if (isBodyPart === true) {
    return(
        <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
            {bodyPartsData.map((parts) => (
            <Box key={parts.id || parts} itemId={parts.id || parts} title={parts.id || parts} m='0 40px'>
                <BodyPart parts={parts} setBodyPart={setBodyPart}/>
            </Box>
            )
            )}
        </ScrollMenu>
    )} else {
          return(
            <Stack>
              <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'start', width: '100%', overflowX: 'scroll', scrollBehavior: 'smooth'}} ref={containerRef}>
                  {eqptData.map((parts) => (
                  <Box key={parts.id || parts} m='0 40px'>
                      <EquipmentPart parts={parts} setEqpt={setEqpt}/>
                  </Box>
                  )
                  )}
              </div>
              <Stack direction='row' justifyContent='center' gap='500px'>
                <Typography className="left-key" onClick={() => {handleScroll(-SCROLLWIDTH)}}>
                  <img src={LeftArrowIcon} />
                </Typography>
                <Typography className="right-key" onClick={() => {handleScroll(SCROLLWIDTH)}}>
                  <img src={RightArrowIcon} />
                </Typography>
              </Stack>
            </Stack>
          )}
}