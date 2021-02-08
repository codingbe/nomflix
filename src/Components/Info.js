import styled from "styled-components";
import React from "react";

const VideoContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  grid-auto-rows: 200px;
  gap: 5px;
`;

const CreatorContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(182px, 1fr));
  grid-auto-rows: 200px;
  gap: 10px;
`;
const CreatorInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
`;
const CreatorProfile = styled.img`
  height: 90%;
  width: 100%;
`;
const CreatorName = styled.h1``;

const Iframe = styled.iframe`
  width: 100%;
  height: 100%;
`;

const CompanyContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(232px, 1fr));
  grid-auto-rows: 160px;
  gap: 5px;
`;
const CompanyInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const CompanyLogo = styled.img`
  width: 100%;
  height: 90%;
`;
const CompanyName = styled.h1``;

const CountryContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-auto-rows: 160px;
  align-items: flex-start;
`;
const CountryInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
`;
const CountryImage = styled.img`
  width: 60%;
`;
const CountryName = styled.h1``;

export default class Info extends React.Component {
  render() {
    const { creators, companies, countries, videos } = this.props;
    return videos && videos.length > 0 ? (
      <VideoContainer>
        {videos.map((video) => (
          <Iframe src={`https://www.youtube.com/embed/${video.key}`}></Iframe>
        ))}
      </VideoContainer>
    ) : creators && creators.length > 0 ? (
      <CreatorContainer>
        {creators.map((creator) => (
          <CreatorInfo key={creator.name}>
            <CreatorProfile
              src={
                creator.profile_path
                  ? `${process.env.REACT_APP_IMAGE_URL}${creator.profile_path}`
                  : process.env.REACT_APP_404_URL
              }
            />
            <CreatorName>{creator.name}</CreatorName>
          </CreatorInfo>
        ))}
      </CreatorContainer>
    ) : companies && companies.length > 0 ? (
      <CompanyContainer>
        {companies.map((company) => (
          <CompanyInfo key={company.name}>
            <CompanyLogo
              src={
                company.logo_path
                  ? `${process.env.REACT_APP_IMAGE_URL}${company.logo_path}`
                  : process.env.REACT_APP_404_URL
              }
            />
            <CompanyName>{company.name}</CompanyName>
          </CompanyInfo>
        ))}
      </CompanyContainer>
    ) : countries && countries.length > 0 ? (
      <CountryContainer>
        {countries.map((country) => (
          <CountryInfo key={country.name}>
            <CountryImage src={`https://www.printableworldflags.com/icon-flags/48/${country.name}.png`} />
            <CountryName>{country.iso_3166_1}</CountryName>
          </CountryInfo>
        ))}
      </CountryContainer>
    ) : null;
  }
}
