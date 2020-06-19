import React, {useState, useEffect} from 'react';
import Styled from 'styled-components/native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp
} from 'react-native-responsive-screen';
import {FlatList, Text} from 'react-native';

const Container = Styled.View`
 background-color: #ffffff;
 flex: 1;
 width: ${wp('100%')};
 height: ${hp('100%')};
`;

const DescriptionContainer = Styled.View`
width: ${wp('100%')};
padding: 20px;
align-items: center;
justify-content: center;
`;

const ReviewDescription = Styled.Text`
 font-size: 12px;
`;

const ImageContainer = Styled.View`
`;

const ReviewImage = Styled.Image`
 width: ${wp('100%')};
 height: ${wp('100%')};
`;

interface Props {
    paragraphData: Array<Object>
}


const FeedContent = ({paragraphData}: Props) => {
    const [paragraph, setParagraph] = useState();

    /*
    useEffect(() => {
        setParagraph(paragraphData);
        console.log("paragraph", paragraphData);
    }, paragraphData)
    */

const renderItem = ({item, index}) => {
    if(item.type === "description") {
        return (
            <DescriptionContainer>
                <ReviewDescription>{item.description}</ReviewDescription>
            </DescriptionContainer>
        )
    } else if(item.type === "image") {
        console.log("피드 상세페이지 image.url", item.url);
        return (
            <ImageContainer>
                <ReviewImage
                source={{uri: item.url}}/>
            </ImageContainer>
        )
    }
}
    return (
        <Container>
            <FlatList
            style={{backgroundColor:"c3c3c3"}}
            data={paragraphData}
            renderItem={renderItem}/>
            <Text>아아아아ㅏㅇ아아ㅏ</Text>
        </Container>
    )
}

export default FeedContent;