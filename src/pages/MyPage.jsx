import React from "react";
import PageContainer from "../components/common/PageContainer";
import ProfileSection from "../components/mypage/ProfileSection";
import TabBar from "../components/common/TabBar";

const MyPage = () => {
  return (
    <PageContainer>
      <ProfileSection />
      <hr />
      <div className="text-center">
        <TabBar />
      </div>
    </PageContainer>
  );
};

export default MyPage;
