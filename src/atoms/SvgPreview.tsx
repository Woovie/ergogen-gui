import styled from "styled-components";
// @ts-ignore
import { PanZoom } from 'react-easy-panzoom';

type Props = {
  svg: string,
  width: number | string,
  height: number | string
};

const InvertedImage = styled.img`
      filter: invert();
      -webkit-user-drag: none;
      -khtml-user-drag: none;
      -moz-user-drag: none;
      -o-user-drag: none;
      user-drag: none;
`;

const StyledPanZoom = styled(PanZoom)`
  overflow: hidden;
  height: 100%;

  &:focus-visible {
    outline: none;
  }
`;

const SvgPreview = ({svg, width, height}: Props): JSX.Element => (
    <StyledPanZoom enableBoundingBox={true} minZoom={0.8} maxZoom={5}>
        <InvertedImage
            width={width || '100%'}
            height={height || '100%'}
            src={`data:image/svg+xml;utf8,${encodeURIComponent(svg)}`}
            alt={'Ergogen SVG Output preview'}
            draggable="false"
        />
    </StyledPanZoom>
);

export default SvgPreview;
