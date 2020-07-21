import React, {useEffect, useState} from 'react';
import Styled from 'styled-components/native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp
} from 'react-native-responsive-screen';
import {
    TouchableWithoutFeedback,
    FlatList
} from 'react-native';

import LikeItem from '~/Components/Presentational/LikeListScreen/LikeItem';
import { BaseRouter } from '@react-navigation/native';

const Container = Styled.SafeAreaView`
 flex: 1;
 background-color: #ffffff;
`;

const HeaderBar = Styled.View`
 width: ${wp('100%')};
 height: ${wp('11.7%')};
 flex-direction: row;
 align-items: center;
 justify-content:space-between;
`;


const HeaderLeftContainer = Styled.View`
background-color: #ffffff;
justify-content: center;
align-items: center;
padding-top: 7px;
padding-left: 16px;
padding-bottom: 13px;
`;

const HeaderCenterContainer = Styled.View`
justify-content: center;
align-items: center;
background-color: #ffffff;
`;

const HeaderRightContainer = Styled.View`
justify-content: center;
align-items: center;
background-color: #ffffff;
padding-top: 7px;
padding-right: 16px;
padding-bottom: 13px;
`;

const HeaderTitleText = Styled.Text`
 font-weight: 600;
 font-size: 18px;
 color: #1D1E1F;
`;

const HeaderCancelIcon = Styled.Image`
 width: ${wp('6.4%')}
 height: ${wp('6.4%')};
`;

const HeaderEmptyView = Styled.View`
background-color: #ffffff;
width: ${wp('6.4%')}
height: ${wp('6.4%')};
`;

const BackButton = Styled.Image`
width: 11px;
height: 19px;
`;

const ButtonText = Styled.Text`
 font-size: 20px;
 color: #338EFC;
`;

const HeaderBorder = Styled.View`
 width: ${wp('100%')};
 height: 0.6px;
 background-color: #ECECEE;
`;

const LikeListContainer = Styled.View`
 width: ${wp('100%')};
 height: ${hp('100%')};
 padding: 10px;
`;

const LIKE_USER_DATA = [
    {
        nickname: "좋아요누른사람1",
        profileImage: 'https://t1.daumcdn.net/thumb/R600x0/?fname=https%3A%2F%2Ft1.daumcdn.net%2Fqna%2Fimage%2F1542632018000000528'
    },
    {
        nickname: "좋아요누른사람2",
        profileImage: 'https://t1.daumcdn.net/thumb/R600x0/?fname=https%3A%2F%2Ft1.daumcdn.net%2Fqna%2Fimage%2F1542632018000000528'
    },
    {
        nickname: "좋아요누른사람3",
        profileImage: 'https://t1.daumcdn.net/thumb/R1280x0/?fname=http://t1.daumcdn.net/brunch/service/user/2JVJ/image/VkxFbnXm8s7Vhw3ydyfo4f2YOa4.jpg'
    },
]

interface Props {
    navigation: any,
    route: any,
}

const LikeListScreen = ({navigation, route}: Props) => {

    const [likersListData, setLikersListData] = useState<Array<object>>([]);

    useEffect(() => {
        if(route.params?.likersList) {
            console.log("route.params?.likersList", route.params.likersList);
            setLikersListData(route.params.likersList);
        }
    }, [route.params?.likersList])

    const renderLikeItem = ({item,index}) => (
        <LikeItem
        nickname={item.nickname}
        profileImage={item.profileImg}
        />
    )

 return <Container>
     <HeaderBar>
         <TouchableWithoutFeedback onPress={() => navigation.goBack()}>
        <HeaderLeftContainer>
            <HeaderCancelIcon
            source={require('~/Assets/Images/HeaderBar/ic_X.png')}/>
        </HeaderLeftContainer>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={() => 0}>
          <HeaderCenterContainer>
          <HeaderTitleText>좋아요</HeaderTitleText>
        </HeaderCenterContainer>
        </TouchableWithoutFeedback>
        <HeaderRightContainer>
              <TouchableWithoutFeedback onPress = {() => 0}>
                  <HeaderEmptyView>
                  </HeaderEmptyView>
              </TouchableWithoutFeedback>
        </HeaderRightContainer>
      </HeaderBar>
      <HeaderBorder/>
      <LikeListContainer>
     <FlatList
     data={likersListData}
     renderItem={renderLikeItem}/>
     </LikeListContainer>
 </Container>
}

export default LikeListScreen;