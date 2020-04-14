import React, {useState, useEffect} from 'react';
import Styled from 'styled-components/native';
import {
  Text,
  TouchableOpacity,
  UIManager,
  TouchableWithoutFeedback,
  StyleSheet,
  Platform,
  Alert,
  BackHandler,
  Image,
} from 'react-native';
import {Rating} from 'react-native-ratings';
import {BoxShadow} from 'react-native-shadow';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import ImagePicker from 'react-native-image-picker';
import {FlatGrid} from 'react-native-super-grid';
// import TagInput from '~/Components/TagInput';
import Modal from 'react-native-modal';

if (
  Platform.OS === 'android' &&
  UIManager.setLayoutAnimationEnabledExperimental
) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

const Container = Styled.SafeAreaView`
  flex: 1;
  background-color: #eeeeee;
  flex-direction: row;
  padding: 10px;
  height: ${hp('100%')};
`;

const StyledModalContainer = Styled.View`
  position: absolute;
  flex-direction: column;
  align-items: center;
  /* 모달창 크기 조절 */
  width: ${wp('42%')};
  height: ${hp('17%')};

  background-color: rgba(255, 255, 255, 1);
  border-radius: 10px;
`;

const ShadowInner = Styled.View`
  flex: 1; 
  background-color: #EEEEEE;
  height: ${hp('70%')};
  width: ${wp('94%')};
  flex-direction: row;
  padding: 0px;
  border-radius: 10px;
  justify-content: center;
`;

const MyHoogingText = Styled.Text`
  font-size: 18px;
  color: #000000;
  text-align: center;
  font-family: 'Arita4.0_B';
`;

const UploadButton = Styled.Text`
 font-size: 19px;
 color: #338EFC;
 font-family: 'Arita4.0_B';
`;

const CloseButton = Styled.Image`
 
`;

const Inner = Styled.View`
  flex-direction: column;
  height: ${hp('88.5%')};
  width: ${wp('94%')};
  border-radius: 10px;
  background-color: #FFFFFF;
  border-color: #c3c3c3;
`;

const Title = Styled.View`
 flex-direction: row;
 height: ${hp('3%')};
 padding: 0px 10px;
 margin-top: 13px;
 align-items: center;
 justify-content: space-between;
`;

const ImageRatingContainer = Styled.View`
 padding: 0px 0px;
 flex-direction: column;
 justify-content:space-between;
`;

const ImageContainer = Styled.View`
margin-top: 5px;
`;

const RocationContainer = Styled.View`
border-bottom-width: 0.3px;
border-color: #cccccc;
padding: 0px 15px;
height: ${hp('5.5%')};
`;

const TagContainer = Styled.View`
margin-top: 10px;
height: ${hp('21%')};
border-bottom-width: 0.3px;
border-color: #cccccc;
padding: 0px 15px;
flex-direction: column;
`;

const InsertTagContainer = Styled.View`
 height: ${hp('5.3%')};
 width: ${wp('94%')};
 border-top-width: 0.3px;
 border-color: #cccccc;
 align-self: center;
 justify-content: center;
 padding-left: 15px;
`;

const InsertedTag1 = Styled.View`
 height: ${hp('5.3%')};
 width: ${wp('94%')};
 border-top-width: 0.3px;
 border-color: #cccccc;
 padding-left: 15px;
 flex-direction: row;
 align-items: center;
`;

const InsertedTag2 = Styled.View`
height: ${hp('5.3%')};
width: ${wp('94%')};
border-top-width: 0.3px;
border-color: #cccccc;
padding-left: 15px;
flex-direction: row;
align-items: center;
`;

const InsertedTag3 = Styled.View`
 height: ${hp('5.3%')};
 width: ${wp('94%')};
 border-top-width: 0.3px;
 border-color: #cccccc;
 padding-left: 15px;
 flex-direction: row;
 align-items: center;
`;

const CommentContainer = Styled.View`
height: ${hp('25%')};
border-color: #c3c3c3;
padding: 0px 15px;
`;

const SelectedImageContainer = Styled.View`
 margin-top: 3px;
 border-radius: 7px;
 width: ${wp('28.5%')};
 height: ${wp('28.5%')};
 background-color: #FFFFFF;
 justify-content: center;
 align-items: center;
 border-width: 1px;
 border-color: #CCCCCC;
`;

const RocationInput = Styled.TextInput`
 font-size: 13px;
 font-family: 'Arita4.0_M';
 color: #707070;
`;

const ModalContainer = Styled.View`
position: absolute;
right: -${wp('2%')};
top: ${hp('31.7%')};
`;

const TagInput = Styled.TextInput`
 width: 100px;
 padding: 10px;
 height: ${hp('5.5%')};
 font-size: 13px;
 font-family: 'Arita4.0_M';
 color: #707070;
`;

const CameraIcon = Styled.Image`
 color: #CCCCCC;
`;

const CommentInput = Styled.TextInput`
font-family: 'Arita4.0_M';
`;

const SelectedImageTouch = Styled.TouchableWithoutFeedback`
`;

const EmptyImage = Styled.Image`
  position: absolute;
  border-radius: 7px;
  width: ${wp('28.0%')};
  height: ${wp('28.0%')};
`;

const SelectedImage = Styled.Image`
  position: absolute;
  border-radius: 7px;
  width: ${wp('28.5%')};
  height: ${wp('28.5%')};
`;

const DeleteButton = Styled.Image`
 position: absolute;
 width :${wp('7%')};
 height:${wp('7%')};
 opacity: 0.9;
 right: 2px;
 top: 2px;
`;

const options = {
  storageOptions: {
    skipBackup: true,
    path: 'images',
  },
};

function Upload({route, navigation}) {
  const [imageUrl_arr, setImageUrl_arr] = useState([
    'https://firebasestorage.googleapis.com/v0/b/hooging-f33b0.appspot.com/o/zz.png?alt=media&token=eb26a783-c54b-4205-bab6-5357e103aef4',
  ]);
  // State를 이용하여 Modal을 제어함
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  // Output을 State로 받아서 화면에 표출하거나 정보 값으로 활용
  const [modalOutput, setModalOutput] = useState<string>('Open Modal');

  React.useEffect(() => {
    if (route.params?.placeName) {
    }
  }, [route.params?.placeName]);

  const openGallery = () => {
    ImagePicker.launchImageLibrary(options, (response) => {
      if (response.error) {
        console.log('LaunchImageLibrary Error: ', response.error);
      } else if (response.didCancel) {
      } else {
        var newImage_arr = new Array();
        newImage_arr = imageUrl_arr.slice(0, imageUrl_arr.length - 1);
        newImage_arr[imageUrl_arr.length] =
          'https://firebasestorage.googleapis.com/v0/b/hooging-f33b0.appspot.com/o/zz.png?alt=media&token=eb26a783-c54b-4205-bab6-5357e103aef4';
        newImage_arr[imageUrl_arr.length - 1] = response.uri;
        console.log('responsive.uri', response.uri);
        setImageUrl_arr(newImage_arr);
      }
    });
  };

  const deleteImage = (index) => {
    if (index > -1) {
      console.log('삭제 전', imageUrl_arr);
      setImageUrl_arr((prev) => {
        console.log('prev : ', prev);
        prev.splice(index, 1);
        return prev.slice(0);
      });
    }
  };

  const shadowOpt = {
    width: wp('93%'),
    height: hp('88.5%'),
    color: '#000000',
    border: 3,
    radius: 10,
    opacity: 0.03,
    x: 0,
    y: 0,
    style: {marginVertical: 15},
  };

  const modalShadow = {
    width: wp('42%'),
    height: hp('17%'),
    color: '#000000',
    border: 7,
    radius: 10,
    opacity: 0.04,
    x: 0,
    y: 3,
    style: {marginVertical: 15},
  };

  const ratingCompleted = (rating) => {
    console.log(`Rating is: + ${rating}`);
  };

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => <Text onPress={() => 1} title="공유" />,
    });
  }, [navigation, imageUrl_arr]);

  const cancelReviewUpload = () => {
    Alert.alert(
      '후기 작성을 취소하시겠어요?',
      ' ',
      [
        {
          text: '확인',
          onPress: () => {
            var initializedImage_arr = [
              'https://firebasestorage.googleapis.com/v0/b/hooging-f33b0.appspot.com/o/zz.png?alt=media&token=eb26a783-c54b-4205-bab6-5357e103aef4',
            ];
            setImageUrl_arr(initializedImage_arr);
            navigation.goBack();
          },
        },
        {
          text: '취소',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancle',
        },
      ],
      {cancelable: false},
    );
  };

  useEffect(() => {
    const backAction = () => {
      Alert.alert(
        '후기 작성을 취소하시겠어요?',
        ' ',
        [
          {
            text: '취소',
            onPress: () => console.log('Cancel Pressed'),
            style: 'cancle',
          },
          {
            text: '확인',
            onPress: () => {
              var initializedImage_arr = [
                'https://firebasestorage.googleapis.com/v0/b/hooging-f33b0.appspot.com/o/zz.png?alt=media&token=eb26a783-c54b-4205-bab6-5357e103aef4',
              ];
              setImageUrl_arr(initializedImage_arr);
              navigation.goBack();
            },
          },
        ],
        {cancelable: false},
      );
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );

    return () => backHandler.remove();
  }, []);

  const STAR_IMAGE = require('~/Assets/Images/star_outline.png');

  return (
    <Container>
      <Modal
        isVisible={modalVisible}
        useNativeDriver={true}
        coverScreen={false}
        hideModalContentWhileAnimating={true}
        hasBackdrop={true}
        backdropColor={'#FFFFFF'}
        backdropOpacity={0.1}
        onBackdropPress={() => setModalVisible(false)}
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <ModalContainer>
          <BoxShadow setting={modalShadow}>
            <StyledModalContainer>
              <Rating
                type="custom"
                ratingImage={STAR_IMAGE}
                onFinishRating={ratingCompleted}
                style={{paddingVertical: 10}}
                imageSize={25}
                ratingColor="#23E5D2"
                ratingBackgroundColor="#FFFFFF"
              />
            </StyledModalContainer>
          </BoxShadow>
        </ModalContainer>
      </Modal>
      <BoxShadow setting={shadowOpt}>
        <ShadowInner>
          <Inner>
            <Title>
              <TouchableWithoutFeedback onPress={() => cancelReviewUpload()}>
                <CloseButton
                  style={{width: 20, height: 20}}
                  source={require('~/Assets/Images/close_gray.png')}
                />
              </TouchableWithoutFeedback>
              <MyHoogingText>나의 게시물</MyHoogingText>
              <UploadButton>공유</UploadButton>
            </Title>
            <ImageRatingContainer>
              <ImageContainer>
                <FlatGrid
                  itemDimension={wp('21%')}
                  items={imageUrl_arr}
                  // staticDimension={300}
                  // fixed
                  // spacing={20}
                  renderItem={({item, index}) => {
                    if (index == imageUrl_arr.length - 1) {
                      return (
                        <SelectedImageTouch onPress={() => openGallery()}>
                          <SelectedImageContainer>
                            <EmptyImage source={{uri: item}} />
                          </SelectedImageContainer>
                        </SelectedImageTouch>
                      );
                    } else {
                      return (
                        <SelectedImageContainer>
                          <SelectedImage source={{uri: item}} />
                          <TouchableWithoutFeedback
                            onPress={() => deleteImage(index)}>
                            <DeleteButton
                              position="absolute"
                              source={require('~/Assets/Images/delete.png')}
                            />
                          </TouchableWithoutFeedback>
                        </SelectedImageContainer>
                      );
                    }
                  }}
                />
              </ImageContainer>
              {/* <RatingContainer>
                  <Rating
                    onFinishRating={ratingCompleted}
                    style={{paddingVertical: 10}}
                    imageSize={33}
                  />
               </RatingContainer>*/}
            </ImageRatingContainer>
            <TagContainer>
              <TouchableOpacity>
                <InsertTagContainer>
                  <Text style={{color: '#707070', fontFamily: 'Arita4.0_L'}}>
                    # 태그추가
                  </Text>
                </InsertTagContainer>
              </TouchableOpacity>
              <InsertedTag1>
                <Text style={{color: '#707070', fontFamily: 'Arita4.0_L'}}>
                  #
                </Text>
                <TagInput
                  onSubmitEditing={() => {
                    setModalVisible(true);
                  }}
                />
                <Image
                  style={{width: 20, height: 20}}
                  source={require('~/Assets/Images/star_outline.png')}
                />
                <Text>4.5</Text>
                <TouchableOpacity
                  onPress={() => {
                    setModalVisible(true);
                  }}></TouchableOpacity>
              </InsertedTag1>
              <InsertedTag2>
                <Text style={{color: '#707070', fontFamily: 'Arita4.0_L'}}>
                  #
                </Text>
              </InsertedTag2>
              <InsertedTag3>
                <Text style={{color: '#707070', fontFamily: 'Arita4.0_L'}}>
                  #
                </Text>
              </InsertedTag3>
            </TagContainer>
            <RocationContainer>
              <TouchableOpacity
                onPress={() => navigation.navigate('LocationSearch')}>
                <RocationInput
                  placeholder="위치 추가"
                  editable={false}
                  value={route.params?.placeName}
                />
              </TouchableOpacity>
            </RocationContainer>
            <CommentContainer>
              <CommentInput placeholder="comment ..." />
            </CommentContainer>
          </Inner>
        </ShadowInner>
      </BoxShadow>
    </Container>
  );
}

const styles = StyleSheet.create({
  moveTop: {
    alignSelf: 'flex-start',
  },
  gridView: {
    flex: 1,
  },
  itemContainer: {
    borderRadius: 5,
    padding: 10,
    height: wp('26%'),
    width: wp('26%'),
  },
  itemName: {
    fontSize: 16,
    color: '#fff',
    fontWeight: '600',
  },
  itemCode: {
    fontWeight: '600',
    fontSize: 12,
    color: '#fff',
  },
});

export default Upload;

/*
<SelectedImageTouch onPress={() => openGallery()}>
<SelectedImageContainer>
  <CameraIcon
    style={{width: 25, height: 25}}
    source={require('~/Assets/Images/camera.png')}
    tintColor="#C3C3C3"
  />
  <SelectedImage source={{uri: imageUrl}} />
</SelectedImageContainer>
</SelectedImageTouch>
*/
