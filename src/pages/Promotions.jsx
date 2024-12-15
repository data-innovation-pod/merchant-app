import React from "react";
import {
  GridComponent,
  Inject,
  ColumnsDirective,
  Search,
  Page,
} from "@syncfusion/ej2-react-grids";

import { promotionsData } from "../data/dummy";
import { Header } from "../components";

const Promotions = () => {
  const toolbarOptions = ["Search"];

  const editing = { allowDeleting: true, allowEditing: true };

  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="Page" title="Promotions" />
      <GridComponent
        dataSource={promotionsData}
        width="auto"
        allowPaging
        allowSorting
        pageSettings={{ pageCount: 5 }}
        editSettings={editing}
        toolbar={toolbarOptions}
      >
        <ColumnsDirective></ColumnsDirective>
        <Inject services={[Search, Page]} />
      </GridComponent>
    </div>
  );
};
export default Promotions;
