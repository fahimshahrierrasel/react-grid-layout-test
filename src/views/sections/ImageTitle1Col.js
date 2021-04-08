import React, { forwardRef } from "react";
import styled from "styled-components";

const ImageTitle1ColStyles = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-rows: 1fr auto;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

// export default function ImageTitle1Col({ title }) {
//   return (
//     <ImageTitle1ColStyles>
//       <img src="http://placehold.jp/800x600.png" alt={title} />
//       <h2>{title}</h2>
//     </ImageTitle1ColStyles>
//   );
// }

const ImageTitle1Col = ({ title }, ref) => (
  <ImageTitle1ColStyles ref={ref}>
    <img src="http://placehold.jp/800x600.png" alt={title} />
    <h2>{title}</h2>
  </ImageTitle1ColStyles>
);

export default forwardRef(ImageTitle1Col);