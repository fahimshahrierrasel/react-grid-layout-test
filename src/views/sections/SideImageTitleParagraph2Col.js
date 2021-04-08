import React, { forwardRef } from "react";
import styled from "styled-components";

const SideImageTitleParagraph2ColStyles = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-areas: "${(props) => (props.leftImage ? "image text text" : "text text image")}";
  grid-template-columns: 1fr 1fr 1fr;
  align-content: start;
  column-gap: 5px;
  overflow: hidden;

  .text-section {
    grid-area: text;
    p {
      text-align: justify;
    }
  }

  img {
    width: 100%;
    height: 100%;
    grid-area: image;
  }
`;

// export default function SideImageTitleParagraph2Col({ title, leftImage }) {
//   return (
//     <SideImageTitleParagraph2ColStyles leftImage={leftImage}>
//       <div className="text-section">
//         <h2>{title}</h2>
//         <p>
//           Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum minima voluptatem itaque
//           aliquam
//         </p>
//       </div>
//       <img src="http://placehold.jp/800x600.png" alt={title} />
//     </SideImageTitleParagraph2ColStyles>
//   );
// }

const SideImageTitleParagraph2Col = ({ title, leftImage }, ref) => (
  <SideImageTitleParagraph2ColStyles ref={ref} leftImage={leftImage}>
    <div className="text-section">
      <h2>{title}</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum minima voluptatem itaque
        aliquam
      </p>
    </div>
    <img src="http://placehold.jp/800x600.png" alt={title} />
  </SideImageTitleParagraph2ColStyles>
);

export default forwardRef(SideImageTitleParagraph2Col);
