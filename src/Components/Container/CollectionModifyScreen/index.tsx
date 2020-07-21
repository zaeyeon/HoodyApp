import React, {useEffect, useState} from 'react';
import Styled from 'styled-components/native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {TouchableWithoutFeedback, Switch} from 'react-native'

const Container = Styled.SafeAreaView`
 flex: 1;
 background-color: #f3f3f3;
 align-items: center;
`;


const HeaderBar = Styled.View`
 width: ${wp('100%')};
 height: ${wp('11.7%')};
 flex-direction: row;
 align-items: center;
 justify-content: space-between;
 background-color:#FAFAFA;
 border-bottom-width: 1px;
 border-color: #F1F1F1;
`;

const HeaderLeftContainer = Styled.View`
padding: 10px 15px 10px 15px;
 align-items: center;
 justify-content: center;
`;

const BackButtonContainer = Styled.View`
padding: 10px 15px 10px 15px;
 align-items: center;
 justify-content: center;
`;

const HeaderCancelText = Styled.Text`
 font-size: 17px;
 font-weight: 500;
 color: #cccccc;
`;

const HeaderTitleText = Styled.Text`
 font-weight: 500;
 font-size: 17px;
 color: #333333;
`;

const HeaderRightContainer = Styled.View`
padding: 10px 15px 10px 15px;
 align-items: center;
 justify-content: center;
 flex-direction: row;
`;

const DisabledHeaderNextText = Styled.Text`
 font-size: 17px;
 font-weight: 500;
 color: #cccccc;
`;

const AbledHeaderNextText = Styled.Text`
 font-size: 17px;
 font-weight: 500;
 color: #3384FF;
`;

const CoverContainer = Styled.View`
 width: ${wp('100%')};
 background-color: #ffffff;
 justify-content: center;
 align-items: center;
`;

const CoverImageContainer = Styled.View`
 margin-top: 20px;
 width: ${wp('43.7%')};
 height: ${wp('43.7%')};
 background-color: #EFEFEF;
 border-radius: 10px;
 justify-content: center;
 align-items: center;
`;

const EmptyCoverIcon = Styled.Image`
 width: ${wp('8%')};
 height: ${wp('8%')};
`;

const SelectCoverContainer = Styled.View`
 padding-top: 12px;
 padding-bottom: 15px;
 background-color: #ffffff;
`;

const SelectCoverText = Styled.Text`
 font-size: 17px;
 font-weight: 500;
 color: #3384FF;
`;

const TitleInputContainer = Styled.View`
 width: ${wp('100%')}
 padding: 16px 16px 20px 16px;
 border-bottom-width: 0.6px;
 border-color: #f1f1f1;
 background-color: #ffffff;
`;

const TitleText = Styled.Text`
 font-size: 17px;
 color: #333333;
 font-weight: 600;
`;

const TitleInput = Styled.TextInput`
 margin-top: 9px;
 font-size: 17px;
`;

const DescripInputContainer = Styled.View`
 background-color: #ffffff;
 width: ${wp('100%')};
 padding: 16px 16px 23px 16px;
`;

const DescripText = Styled.Text`
font-size: 17px;
color: #333333;
font-weight: 600;
`;

const DescripInput = Styled.TextInput`
 margin-top: 9px;
 font-size: 17px;
 padding-bottom: 100px;
`;

const PrivateSettingContainer = Styled.View`
 margin-top: 10px;
 width: ${wp('100%')};
 height: ${wp('15%')};
 flex-direction: row;
 align-items: center;
 justify-content: space-between;
 padding: 18px 16px 18px 16px;
 background-color: #ffffff;
 border-bottom-width: 0.6px;
 border-color: #eeeeee;
`;

const PrivateSettingText = Styled.Text`
 font-size: 16px;
 color: #333333;
`;

const IncludeLocationContainer = Styled.View`
width: ${wp('100%')};
height: ${wp('15%')};
flex-direction: row;
align-items: center;
justify-content: space-between;
padding: 18px 16px 18px 16px;
background-color: #ffffff;
border-bottom-width: 0.6px;
border-color: #eeeeee;
`;

const IncludeLocationText = Styled.Text`
font-size: 16px;
color: #333333;
`;

interface Props {
    navigation: any,
    route: any,
}

const CollectionModifyScreen = ({navigation, route}: Props) => {
    const [enabledPrivate, setEnabledPrivate] = useState<boolean>(false);
    const [enabledIncludeLocation, setEnabledIncludeLocation] = useState<boolean>(false);
    const [collectionTitleText, setCollectionTitleText] = useState<string>("");
    const [collectionDescripText, setCollectionDescripText] = useState<string>("");

    const togglePrivate = () => {
        setEnabledPrivate(!enabledPrivate);
    }

    const toggleIncludeLocation = () => {
        setEnabledIncludeLocation(!enabledIncludeLocation);
    }

    const onChangeTitle = (text: string) => {
        setCollectionTitleText(text);
    }

    const onChangeDescrip = (text: string) => {
        setCollectionDescripText(text);
    }

    const moveToAddFeed = () => {
        navigation.goBack();
    }
    
    return (
        <Container>
            <HeaderBar>
                <TouchableWithoutFeedback onPress={() => navigation.goBack()}>
                <HeaderLeftContainer>
                <HeaderCancelText>취소</HeaderCancelText>
                </HeaderLeftContainer>
                </TouchableWithoutFeedback>
                <HeaderTitleText>컬렉션 수정</HeaderTitleText>
                {collectionTitleText !== "" && collectionDescripText !== "" && (
                <TouchableWithoutFeedback onPress={() => navigation.goBack()}>
                    <HeaderRightContainer>
                       <AbledHeaderNextText>완료</AbledHeaderNextText>
                    </HeaderRightContainer>
                </TouchableWithoutFeedback>
                )}
                {(collectionTitleText === "" || collectionDescripText === "") && (
                    <HeaderRightContainer>
                    <DisabledHeaderNextText>완료</DisabledHeaderNextText>
                    </HeaderRightContainer>
                )}
            </HeaderBar>
            <CoverContainer>
            <TouchableWithoutFeedback onPress={() => navigation.navigate("Gallery_ProfileImage")}>
            <CoverImageContainer>
            <EmptyCoverIcon
            source={require('~/Assets/Images/ic_emptyImage.png')}/>
            </CoverImageContainer>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback onPress={() => navigation.navigate("Gallery_ProfileImage")}>
            <SelectCoverContainer>
                <SelectCoverText>커버 설정</SelectCoverText>
            </SelectCoverContainer>
            </TouchableWithoutFeedback>
            </CoverContainer>
            <TitleInputContainer>
                <TitleText>이름</TitleText>
                <TitleInput
                placeholder={"컬렉션 이름을 적어주세요."}
                autoFocus={false}
                value={collectionTitleText}
                onChangeText={(text:string) => onChangeTitle(text)}
                />
            </TitleInputContainer>
            <DescripInputContainer>
                <DescripText>소개</DescripText>
                <DescripInput
                multiline={true}
                placeholder={"컬렉션에 대한 설명을 적어주세요."}
                autoFocus={false}
                onChangeText={(text:string) => onChangeDescrip(text)}
                />
            </DescripInputContainer>
            <PrivateSettingContainer>
                <PrivateSettingText>비공개 컬렉션</PrivateSettingText>
                <Switch
                value={enabledPrivate}
                onValueChange={togglePrivate}
                />
            </PrivateSettingContainer>
            <IncludeLocationContainer>
                <IncludeLocationText>위치 정보 포함</IncludeLocationText>
                <Switch
                value={enabledIncludeLocation}
                onValueChange={toggleIncludeLocation}/>
            </IncludeLocationContainer>
        </Container>
    )
}

export default CollectionModifyScreen;