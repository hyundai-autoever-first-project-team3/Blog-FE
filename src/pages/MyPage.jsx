import React, { useEffect, useState } from "react";
import PageContainer from "../components/common/PageContainer";
import ProfileSection from "../components/mypage/ProfileSection";
import SubTabBar from "../components/mypage/SubTabBar";
import MyCard from "../components/mypage/MyCard";
import SimpleBarChart from "../components/mypage/SimpleBarChart";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendar,
  faHeart,
  faPenToSquare,
  faThumbsDown,
  faThumbsUp,
} from "@fortawesome/free-solid-svg-icons";
import CountCard from "../components/mypage/CountCard";
import { Button, Chip } from "@mui/material";
import characterImg from "../images/main-character.png";
import Header from "../components/common/Header";
import { getLikeTILs, getMyTILs, getStatistics } from "../api/mypage";
import { useNavigate } from "react-router-dom";
import { useGetUserInfo } from "../hooks/useGetUserInfo";
import { getCookie } from "../api/cookie";

const MyPage = () => {
  const navigate = useNavigate();
  const token = getCookie("accessToken");
  const { data } = useGetUserInfo(token);
  const [selectedTab, setSelectedTab] = useState("write");
  const [myPosts, setMyPosts] = useState([]);
  const [likedPosts, setLikedPosts] = useState([]);
  const [statistics, setStatistics] = useState(null);

  const handleChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  useEffect(() => {
    getMyTILs({ pageSize: 0 }).then((res) => setMyPosts(res.data.content));
    getLikeTILs({ pageSize: 0 }).then((res) => setLikedPosts(res.data.content));
    getStatistics().then((res) => setStatistics(res.data));
  }, []);

  return (
    <>
      <Header />
      <PageContainer>
        <ProfileSection />
        <hr />
        <SubTabBar value={selectedTab} handleChange={handleChange} />
        {selectedTab === "write" && (
          <div className="flex flex-col gap-3 px-3">
            {myPosts?.map((item) => (
              <MyCard
                id={item.tilId}
                title={item.title}
                content={item.content}
                commentCount={item.commentCount}
                likeCount={item.likeCount}
                createdAt={item.createdAt}
                onClick={() => navigate(`/posts/${item.tilId}`)}
              />
            ))}
          </div>
        )}
        {selectedTab === "like" && (
          <div className="flex flex-col gap-3 px-3">
            {likedPosts?.map((item) => (
              <MyCard
                id={item.tilId}
                title={item.title}
                content={item.content}
                commentCount={item.commentCount}
                likeCount={item.likeCount}
                createdAt={item.createdAt}
                onClick={() => navigate(`/posts/${item.tilId}`)}
              />
            ))}
          </div>
        )}
        {selectedTab === "statistic" && (
          <div className="flex flex-col w-full gap-5 px-2">
            <div className="flex flex-row items-center w-full gap-3">
              <CountCard
                title="전체 작성글 개수"
                count={statistics.tilsCount}
                icon={faPenToSquare}
              />
              <CountCard
                title="이번달 작성글 개수"
                count={statistics.tilsMonthCount}
                icon={faCalendar}
              />
              <CountCard
                title="받은 좋아요 개수"
                count={statistics.receivedLikeCount}
                icon={faHeart}
              />
            </div>
            <div className="flex flex-row p-5 border rounded-md min-h-32">
              <div className="flex flex-row items-start gap-3">
                <div className="p-2 bg-blue-100 rounded-md">
                  <FontAwesomeIcon
                    icon={faPenToSquare}
                    className="w-5 h-5 text-blue-950"
                  />
                </div>
                <div className="flex flex-col gap-3 mb-3">
                  <div className="text-lg font-semibold">AI 분석</div>
                  <div className="text-base font-thin">
                    {statistics?.analysisResult}
                  </div>
                  <div className="flex flex-row gap-2">
                    <Chip
                      icon={<FontAwesomeIcon icon={faThumbsUp} />}
                      label={statistics?.mostValue}
                      sx={{
                        padding: "8px",
                      }}
                    />
                    <Chip
                      icon={<FontAwesomeIcon icon={faThumbsDown} />}
                      label={statistics?.leastValue}
                      sx={{
                        padding: "8px",
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full h-[300px] xl:h-[500px] lg:h-[400px] md:h-[300px] sm:h-[300px]">
              <SimpleBarChart />
            </div>

            {/* 개인 맞춤형 문제 추천 */}
            <div className="flex flex-col items-center justify-center p-5 bg-blue-200 border rounded-lg min-h-40">
              <img
                src={characterImg}
                alt="character"
                className="w-[100px] h-[100px] mb-3"
              />
              <div className="flex flex-col items-center mb-2">
                <div className="text-2xl font-semibold">
                  {data.name}님은 {statistics?.leastValue} 알고리즘 보완이
                  필요해요!
                </div>
                <div className="text-lg font-thin">
                  {statistics?.leastValue} 핵심 문제를 추천해드릴게요! 문제를
                  통해 코딩마스터가 되어보아요^^
                </div>
              </div>
              <div className="flex flex-col items-center justify-center w-full gap-2 p-5 border rounded-md bg-slate-50">
                <div className="text-xl">
                  오늘 추천 문제는 백준의 {statistics?.aiRecommendDto.title}
                  입니다.
                </div>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => {
                    window.open(`${statistics?.aiRecommendDto.site}`, "_blank");
                  }}
                >
                  문제 풀러가기
                </Button>
              </div>
            </div>
          </div>
        )}
      </PageContainer>
    </>
  );
};

export default MyPage;
