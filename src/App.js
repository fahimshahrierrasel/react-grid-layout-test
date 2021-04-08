import { useState } from "react";
import styled from "styled-components";
import AppGridLayout from "./views/components/AppGridLayout";
import ImageTitle1Col from "./views/sections/ImageTitle1Col";
import ImageTitleParagraph2Col from "./views/sections/ImageTitleParagraph2Col";
import SideImageTitleParagraph2Col from "./views/sections/SideImageTitleParagraph2Col";

const AppStyles = styled.div`
  display: grid;
  grid-template-columns: 300px 1fr;
`;

const SidebarStyles = styled.div`
  height: 100%;
  overflow-y: scroll;
  padding: 0 0.5rem;
`;

const SideBarItemStyles = styled.div`
  border: 1px solid tomato;
  margin: 1rem 0;
  &:hover {
    cursor: pointer;
    background-color: #e0a4a4;
  }
`;

const initialLayout = [
  { i: "1", x: 0, y: 0, w: 6, h: 3, type: "1" },
  { i: "2", x: 6, y: 0, w: 3, h: 2, type: "2" },
  { i: "3", x: 9, y: 0, w: 6, h: 1, type: "3" },
];

function App() {
  const [layout, setLayout] = useState(initialLayout);

  function addLayout(type, height, width) {
    const id = new Date().getTime();
    setLayout([
      ...layout,
      {
        i: id.toString(),
        x: 0,
        y: Infinity,
        w: width,
        h: height,
        type: type,
      },
    ]);
    console.log("new Layout", layout);
  }
  return (
    <AppStyles>
      <SidebarStyles>
        <h1>My Components</h1>
        <SideBarItemStyles onClick={() => addLayout("itp2col", 3, 6)}>
          <ImageTitleParagraph2Col title="Demo" />
        </SideBarItemStyles>
        <SideBarItemStyles onClick={() => addLayout("it1col", 2, 3)}>
          <ImageTitle1Col title="Demo" />
        </SideBarItemStyles>
        <SideBarItemStyles onClick={() => addLayout("sitp2col", 1, 6)}>
          <SideImageTitleParagraph2Col title="Demo" />
        </SideBarItemStyles>
      </SidebarStyles>
      <AppGridLayout layout={layout}/>
    </AppStyles>
  );
}

export default App;
