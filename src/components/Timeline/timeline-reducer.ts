import { createSlice } from "@reduxjs/toolkit";
import URL from "../../common/types/url-types";
import { TimelineState } from "./timelime-types";

const initialState: TimelineState = {
  steps: [
    {
      content: [
        "Maintenance and development of new functionalities.",
        "Technologies used: NestJs, ReactJs, TDD, AWS, MongoDB, PostgreSql.",
        "Tools: Postman, VsCode, Linux, Notion, Git, GitHub and Jira.",
      ],
      header: "June 2022 - November  2022",
      title: {
        position: "Web developer",
        company: {
          name: "Tinkin",
          url: URL.TINKIN,
        },
      },
    },
    {
      content: [
        " Working on the development of a grade management module for Eina Foundation teachers",
        " Technologies used: JavaScript, Html, Css, ReactJs, Nodejs, ExpressJs, MySql, AWS(EC2 and RDS).",
        "Tools: Postman, VsCode, Workbench, Linux, Notion, Git and GitHub.",
      ],
      header: "March  2022 - May 2022",
      title: {
        position: "Web developer",
        company: {
          name: "Eina Foundation",
          url: URL.EINA_FUNDATION,
        },
      },
    },
  ],
};

const componentReducer = createSlice({
  name: "timeline",
  initialState,
  reducers: {},
});

export default componentReducer.reducer;
