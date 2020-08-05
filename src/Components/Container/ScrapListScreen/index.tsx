import React from 'react';
import {TouchableWithoutFeedback, FlatList} from 'react-native'
import Styled from 'styled-components/native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import AllScrapFolderItem from '~/Components/Presentational/ScrapListScreen/AllScrapFolderItem';
import ScrapFolderItem from '~/Components/Presentational/ScrapListScreen/ScrapFolderItem';
import CollectionItem from '~/Components/Presentational/ScrapListScreen/CollectionItem';

const Container = Styled.SafeAreaView`
 flex: 1;
 background-color: #ffffff;
`;

const HeaderBar = Styled.View`
 width: ${wp('100%')};
 height: ${wp('11.7%')};
 flex-direction: row;
 align-items: center;
 justify-content: space-between;
 background-color: #ffffff;
 border-bottom-width: 0.6px;
 border-color: #ECECEE;
`;

const HeaderBackContainer = Styled.View`
 padding-top: 7px;
 padding-left: 16px;
 padding-right: 16px;
 padding-bottom: 13px;
`;

const HeaderBackIcon = Styled.Image`
 width: ${wp('6.4%')};
 height: ${wp('6.4%')};
`;

const HeaderTitleText = Styled.Text`
 font-weight: 600;
 font-size: 18px;
 color: #1D1E1F;
`;

const HeaderMoreContainer = Styled.View`
 padding-top: 7px;
 padding-left: 16px;
 padding-right: 16px;
 padding-bottom: 13px;
`;

const HeaderMoreIcon = Styled.View`
 width: ${wp('6.4%')};
 height: ${wp('6.4%')};
`;

const BodyContainer = Styled.View`
 flex: 1;
 background-color: #ffffff;
`;

const TEST_SCRAP_FOLDER_LIST = [
    {
      "id": 1,
      "name": "allPosts",
      "defaultFolder": true,
      "createdAt": "2020-06-24T09:29:23.000Z",
      "updatedAt": "2020-06-24T09:29:23.000Z",
      "deletedAt": null,
      "userId": "305ff5d0-b5fd-11ea-85fd-8739b165f681",
      "coverImage": 'https://img1.daumcdn.net/thumb/R720x0/?fname=https%3A%2F%2Ft1.daumcdn.net%2Fliveboard%2Fdailylife%2F6d8abd51eb3644958240a9ca6ddf28bd.JPG'
    },
    {
      "id": 2,
      "name": "테스트",
      "defaultFolder": false,
      "createdAt": "2020-06-24T09:34:03.000Z",
      "updatedAt": "2020-06-24T09:34:03.000Z",
      "deletedAt": null,
      "userId": "305ff5d0-b5fd-11ea-85fd-8739b165f681",
      "coverImage": 'https://img1.daumcdn.net/thumb/R720x0/?fname=https%3A%2F%2Ft1.daumcdn.net%2Fliveboard%2Fdailylife%2F6d8abd51eb3644958240a9ca6ddf28bd.JPG'
    }
]

interface Props {
    navigation: any,
    route: any,
}

const ScrapListScreen = ({navigation, route}: Props) => {

    const renderScrapFolderItem = ({item, index}: any) => {
        if(index === 0) {
        return (
            <AllScrapFolderItem
            navigation={navigation}
            coverImage={item.coverImage}
            name={item.name}/>   
           )
        } else {
        return (
            <CollectionItem
            navigation={navigation}
            coverImage={item.coverImage}
            name={item.name}/>
        )}
    }

    return (
        <Container>
            <HeaderBar>
                <TouchableWithoutFeedback onPress={() => navigation.goBack()}>
                <HeaderBackContainer>
                    <HeaderBackIcon
                    source={require('~/Assets/Images/HeaderBar/ic_back.png')}/>
                </HeaderBackContainer>
                </TouchableWithoutFeedback>
                <HeaderTitleText>스크랩</HeaderTitleText>
                <HeaderMoreContainer>
                    <HeaderBackIcon
                    source={require('~/Assets/Images/HeaderBar/ic_more.png')}/>
                </HeaderMoreContainer>
            </HeaderBar>
            <BodyContainer>
                <FlatList
columnWrapperStyle={{justifyContent:'space-between', paddingLeft:15, paddingRight:15, paddingTop:17, paddingBottom:10, backgroundColor:'#ffffff'}}
                numColumns={2}
                data={TEST_SCRAP_FOLDER_LIST}
                renderItem={renderScrapFolderItem}/>
            </BodyContainer>
        </Container>
    )
    
}

export default ScrapListScreen;




