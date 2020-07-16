import React, {useEffect, useState} from 'react';
import Styled from 'styled-components/native';
import {FlatList, TouchableWithoutFeedback, View} from 'react-native';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import GetFeedDetail from '~/Route/Post/GetFeedDetail';

const Container = Styled.View`

 `;

const FeedItemContainer = Styled.View`
 width: ${wp('100%')}px;
 background-color:#ffffff;
 flex-direction: row;
 padding-top: 10px;
`;

const LeftContainer = Styled.View`
 width: ${wp('12%')}px;
 padding: 5px 0px 0px 55px;
 align-items: flex-end;
`;

const RightContainer = Styled.View`
 width: ${wp('88%')}px;
 padding: 5px 20px 0px 7px;
`;

const HeaderContainer = Styled.View`
 flex-direction: row;
 justify-content: space-between;
 `;

const BodyContainer = Styled.View`
 padding-top: 5px;
`;

const FooterContainer = Styled.View`
padding-top: 15px;
padding-bottom: 20px;
align-items: flex-end;
`;

const WriterContainer = Styled.View`
 flex-direction: row;
 justify-content: center;
 align-items: center;
`;

const HeaderCenterContainer = Styled.View`
`;

const NicknameCreatedAtContainer = Styled.View`
 flex-direction: row;
 align-items: center;
`;

const CreatedAtText = Styled.Text`
 margin-left: 7px;
 color: #cccccc;
 font-size: 12px;
`;

const WriterProfileImage = Styled.Image`
border-radius: 100px;
width: ${wp('9.6%')}px;
height: ${wp('9.6%')}px;
`;

const WriterNickname = Styled.Text`
font-size: 16px;
font-weight: 600;
`;


const LocationText = Styled.Text`
 margin-top: 4px;
 font-size: 13px;
 color: #8e8e8e;
`;

const RatingContainer = Styled.View`
 flex-direction: row;
`;

const RatingStarImage = Styled.Image`
margin-right: 3px;
width: ${wp('3.2%')}px;
height: ${wp('3.2%')}px;
`;

const HalfRatingStarImage = Styled.Image`
margin-left: 2px;
margin-right: 2px;
margin-top: 3px;
width: 18px;
height: 18px;
tint-color: #23E5D2;
`;

const ManyReviewImageContainer = Styled.View`
padding-top: 10px;
 flex-direction: row;
`;

const ImageCountBackground = Styled.View`
 top: 15px;
 right: 5px;
 padding: 5px 9px 5px 9px;
 position: absolute;
 border-radius: 26px;
 background-color: #000000;
 opacity: 0.5;
`;

const ImageCountText = Styled.Text`
 font-size: 14px;
 font-weight: 500;
 color: #ffffff;
`;

const FirstImage = Styled.Image`
 border-top-left-radius: 10px;
 border-bottom-left-radius: 10px;
resize-mode:cover;
width: ${wp('40.5%')}px;
height: ${wp('44%')}px;
`;

const SecondImage = Styled.Image`
 margin-left: 2.5px;
 border-top-right-radius: 10px;
 border-bottom-right-radius: 10px;
resize-mode:cover;
 width: ${wp('40.5%')}px;
 height: ${wp('44%')}px;
`;

const ReviewImageContainer = Styled.View`
padding-top: 10px;
height: ${wp('82%')}px;
`;

const ReviewImage = Styled.Image`
resize-mode:cover;
border-radius: 10px; 
width: ${wp('82%')}px
height: ${wp('82%')}px;
`;

const TagContainer = Styled.View`
flex-direction: row;
`;

const TagBackground = Styled.View`
padding: 5px;
border-radius: 4px;
background-color: #ffffff;
opacity: 1;
`;

const MainTagText = Styled.Text`
 font-size: 16px;
 font-weight: 600;
 color: #3384FF;
 margin-right: 7px;
`;

const SubTagText = Styled.Text`
color: #CCCCCC;
font-size: 16px;
font-weight: 600;
margin-right: 7px;
`;

const LocationPriceContainer = Styled.View`
 margin-top: 5px;
 margin-left: 8px;
 height: 20px;
 flex-direction: row;
 `;

const LocationContainer = Styled.View`
 flex-direction: row;
 justify-content: center;
 align-items: center;
`;

const LocationIcon = Styled.Image`
 width: 14px;
 height: 14px;
`;


const PriceContainer = Styled.View`
 margin-left: 8px;
 flex-direction: row;
 justify-content: center;
 align-items: center;
`;

const PriceIcon = Styled.Image`
 width: 14px;
 height: 14px;
`;

const PriceText = Styled.Text`
 margin-left: 2px;
 font-size: 14px;
 color: #707070;
`;

const DescriptionContainer = Styled.View`
padding-top: 5px;
`;

const DescriptionText = Styled.Text`
 font-size: 16px;
 color: #4B4B4B;
`;

const AdditionalInfoContainer = Styled.View`
 padding-top: 10px;
 flex-direction: row;
 justify-content: center;
`;

const InfoLabelText = Styled.Text`
 font-size: 12px;
 color: #AAB2B7;
`;

const InfoCountText = Styled.Text`
 margin-left: 5px;
 font-size: 13px;
 color: #cccccc;
`;

const InfoDivider = Styled.Text`
 margin-left: 5px;
 margin-right: 5px;
 font-size: 15px;
 color: #AAB2B7;
`;

const InfoContainer = Styled.View`
 flex-direction: row;
 align-items: center;
 margin-left: 15px;
`;

const ItemBottomBorder = Styled.View`
 background-color: #F1F1F1;
 width: ${wp('100%')}px;
 height: 1px;
`;

const LikeIcon = Styled.Image`
width: ${wp('4.0%')}px;
height: ${wp('3.5%')}px;
`;

const CommentIcon = Styled.Image`
width: ${wp('4%')}px;
height: ${wp('4%')}px;
`;

const ScrapIcon = Styled.Image`
width: ${wp('3.5%')}px;
height: ${wp('4.0%')}px;
`;




interface Props {
  id: number;
  profile_image: string;
  nickname: string;
  createdAt: string;
  rating: number;
  main_image: string;
  main_tag: string;
  sub_tag1?: string;
  sub_tag2?: string;
  review_content: array;
  image_count: number;
  like_count: number;
  comment_count: number;
  scrap_count: number;
  location: string;
  expanse: number;
  desArray: Array<object>;
  navigation: any;
  mediaFiles: Array<objevt>;
}

const FeedItem = ({
  id,
  profile_image,
  nickname,
  createdAt,
  rating,
  main_image,
  main_tag,
  sub_tag1,
  sub_tag2,
  review_content,
  image_count,
  like_count,
  comment_count,
  scrap_count,
  location,
  expanse,
  desArray,
  navigation,
  mediaFiles,
}: Props) => {
  const [ratingArray, setRatingArray] = useState([
    'empty',
    'empty',
    'empty',
    'empty',
    'empty',
  ]);
  const [tagList, setTagList] = useState(['']);
  const [feedDetailInfo, setFeedDetailInfo] = useState('');
  const [paragraphData, setParagraphData] = useState();
  const [createdDate, setCreatedDate] = useState();
  const [changeState, setChangeState] = useState<boolean>(false);

  const tmpRatingArr = ['empty', 'empty', 'empty', 'empty', 'empty'];

  useEffect(() => {
    if (rating % 1 === 0) {
      for (var i = 0; i < rating; i++) {
        tmpRatingArr[i] = 'full';
        if (i === rating - 1) {
          setRatingArray(tmpRatingArr);
        }
      }
    } else {
      for (var i = 0; i < rating; i++) {
        if (i === rating - 0.5) {
          tmpRatingArr[i] = 'half';
          setRatingArray(tmpRatingArr);
        } else {
          tmpRatingArr[i] = 'full';
        }
      }
    }

    
    let tmpTagList = new Array();
    tmpTagList.push(main_tag);
    if (sub_tag1 !== null) tmpTagList.push(sub_tag1);
    if (sub_tag2 !== null) tmpTagList.push(sub_tag2);
    setTagList(tmpTagList);

    const tmpCreatedDate = getDateFormat(createdAt);
    setCreatedDate(tmpCreatedDate);
    console.log("description", desArray);
    console.log("feedId", id);
    console.log("피드 상세 미디어파일",mediaFiles)
    console.log("피드 닉네임", nickname)

    setChangeState(!changeState);
  }, []);

  function getDateFormat(date) {
    var tmpDate = new Date(date);
    var year = tmpDate.getFullYear();
    var month = (1+ tmpDate.getMonth());
    month = month >= 10 ? month : '0' + month;
    var day = tmpDate.getDate();
    day = day >= 10 ? day : '0' + day;
    return year + '/' + month + '/' + day;
}

  const onClickFeedItem = () => {
    GetFeedDetail(id)
    .then(function(response) {
      setParagraphData(response.data.postBody)
      setFeedDetailInfo(response.data);

      navigation.navigate("FeedDetailScreen", {
        paragraphData: response.data.postBody,
        feedDetailInfo: response.data,
        tagList: tagList,
        ratingArray: ratingArray,
      })
    }).catch(function(error) {
      console.log("error", error);
    })
  }

  return (
    <Container>
      <FeedItemContainer>
        <LeftContainer>
        <WriterProfileImage
              source={{uri: profile_image}}></WriterProfileImage>
        </LeftContainer>
        <RightContainer>
        <HeaderContainer>
          <WriterContainer>
              <HeaderCenterContainer>
             <NicknameCreatedAtContainer>
            <WriterNickname>{nickname}</WriterNickname>
  <CreatedAtText>{createdDate}</CreatedAtText>
            </NicknameCreatedAtContainer>
            {location !== null && (
              <LocationText>{location}</LocationText>
            )}
            </HeaderCenterContainer>
          </WriterContainer>
          <RatingContainer>
            <FlatList
              horizontal={true}
              data={ratingArray}
              renderItem={({item, index}) => {
                if (item === 'full') {
                  return (
                    <RatingStarImage
                      source={require('~/Assets/Images/ic_newStar.png')}
                    />
                  );
                } else if (item === 'half') {
                  return (
                    <RatingStarImage
                      source={require('~/Assets/Images/ic_newHalfStar.png')}
                    />
                  );
                } else if (item === 'empty') {
                  
                }
              }}
            />
          </RatingContainer>
        </HeaderContainer>
        <TouchableWithoutFeedback onPress={() => navigation.navigate("FeedDetailScreen", {
          feedId:id,
          tagList: tagList,
          ratingArray: ratingArray,
          createdAt: createdDate
        })}>
        <View>
        <BodyContainer>
        <TagContainer>
            <FlatList
              horizontal={true}
              data={tagList}
              renderItem={({item, index}) => {
                if(index === 0) 
                { return (
                  <MainTagText>#{item}</MainTagText>
                )
                } else {
                  return (
                  <SubTagText>#{item}</SubTagText>
                  )
                }
              }}
            />
          </TagContainer>
        <DescriptionContainer>
            <DescriptionText>{desArray[0].description}</DescriptionText>
          </DescriptionContainer>
          {mediaFiles.length === 1 && (
          <ReviewImageContainer>
          <ReviewImage source={{uri:mediaFiles[0].url}}/>
          </ReviewImageContainer>
          )}
          {mediaFiles.length > 1 && (
            <ManyReviewImageContainer>
              <FirstImage source={{uri:mediaFiles[0].url}}/>
              <SecondImage source={{uri:mediaFiles[1].url}}/>
              {mediaFiles.length > 2 && (
              <ImageCountBackground>
          <ImageCountText>+{mediaFiles.length-2}</ImageCountText>
              </ImageCountBackground>
              )}
            </ManyReviewImageContainer>
          )}
        </BodyContainer>
        <FooterContainer>
          <AdditionalInfoContainer>
            <InfoContainer>
            <LikeIcon
            source={require('~/Assets/Images/ic_like.png')}/>
            <InfoCountText>{like_count}</InfoCountText>
            </InfoContainer>
            <InfoContainer>
            <CommentIcon
            source={require('~/Assets/Images/ic_comment.png')}/>
            <InfoCountText>{comment_count}</InfoCountText>
            </InfoContainer>
            <InfoContainer>
            <ScrapIcon
            source={require('~/Assets/Images/ic_scrap.png')}/>
            <InfoCountText>{scrap_count}</InfoCountText>
            </InfoContainer>
          </AdditionalInfoContainer>
        </FooterContainer>
        </View>
        </TouchableWithoutFeedback>
        </RightContainer>
      </FeedItemContainer>
      <ItemBottomBorder/>
    </Container>
  );
};

export default FeedItem;
