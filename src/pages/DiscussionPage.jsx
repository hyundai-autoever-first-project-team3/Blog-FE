import React from "react";
import Header from "../components/common/Header";
import PageContainer from "../components/common/PageContainer";
import { DiscussionHeader } from "../components/challenge/DiscussionHeader";
import { Comment } from "../components/challenge/Comment";

const DiscussionPage = () => {
  return (
    <div>
      <PageContainer className="xl:px-[150px] lg:px-[100px] md:px-50 sm:px-10">
        <Header />
        <DiscussionHeader />
        <Comment />
        <Comment />
        <Comment />
        <Comment />
        <Comment />
      </PageContainer>
    </div>
  );
};

export default DiscussionPage;
