import React, { forwardRef } from "react";
import styled from "styled-components";

const ImageTitleParagraph2ColStyles = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-rows: 1fr auto auto;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  p {
    overflow: hidden;
  }
`;

// export default function ImageTitleParagraph2Col({ title }) {
//   return (
//     <ImageTitleParagraph2ColStyles>
//       <img src="http://placehold.jp/800x600.png" alt={title} />
//       <h1>{title}</h1>
//       <p>
//         Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime sint accusantium deserunt
//         optio eum quam, autem aperiam, reprehenderit sit cumque officiis nesciunt dolorem? Dolorum
//         vitae suscipit in tempora? Quae, dignissimos?
//       </p>
//     </ImageTitleParagraph2ColStyles>
//   );
// }

const ImageTitleParagraph2Col = ({ title }, ref) => (
  <ImageTitleParagraph2ColStyles ref={ref}>
    <img src="http://placehold.jp/240x180.png" alt={title} />
    <h1>{title}</h1>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime sint accusantium deserunt
      optio eum quam, autem aperiam, reprehenderit sit cumque officiis nesciunt dolorem? Dolorum
      vitae suscipit in tempora? Quae, dignissimos?
    </p>
  </ImageTitleParagraph2ColStyles>
);

export default forwardRef(ImageTitleParagraph2Col);
