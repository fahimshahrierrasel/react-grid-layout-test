import React, { useEffect, useState } from "react";
import GridLayout, { WidthProvider } from "react-grid-layout";
import styled from "styled-components";
import ImageTitle1Col from "../sections/ImageTitle1Col";
import ImageTitleParagraph2Col from "../sections/ImageTitleParagraph2Col";
import SideImageTitleParagraph2Col from "../sections/SideImageTitleParagraph2Col";
const ResponsiveReactGridLayout = WidthProvider(GridLayout);

const SimpleGridItem = styled.div`
  background-color: grey;
  width: 100%;
  height: 100%;
`;

export default function AppGridLayout({ layout }) {
  let [initialized, setInitialized] = useState(false);
  const updatedLayout = layout.map((item) => {
    const { type, ...newItem } = item;
    return newItem;
  });
  console.log("UPdated Layout", updatedLayout);

  useEffect(() => {
    if (!initialized) {
      setInitialized(true);
    }
  }, [initialized, setInitialized]);

  function getComponent(index, type) {
    switch (type) {
      case "itp2col":
        return <ImageTitleParagraph2Col title={`Demo Item ${index}`} />;
      case "it1col":
        return <ImageTitle1Col title={`Demo Item ${index}`} />;
      case "sitp2col":
        return <SideImageTitleParagraph2Col title={`Demo Item ${index}`} />;
      default:
        return <SimpleGridItem>{`Demo Item ${index}`}</SimpleGridItem>;
    }
  }
  return (
    <ResponsiveReactGridLayout
      className="layout"
      // layout={updatedLayout}
      cols={12}
      rowHeight={145}
      width={1200}
      useCSSTransforms={true}
      preventCollision={true}
      onLayoutChange={(layout) => {
        console.log("Current Layout", layout);
      }}>
      {layout.map((item, index) => (
        <SimpleGridItem data-grid={item} key={item.i}>
          {getComponent(index, item.type)}
        </SimpleGridItem>
      ))}
    </ResponsiveReactGridLayout>
  );
}
