import React, {useState, useEffect} from 'react';
import {NavigationContainer, StackActions, StackRouter} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import {Image, StyleSheet, Text} from 'react-native';
import {useSelector} from 'react-redux';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import Home from '~/Tab/Home';
import Feed from '~/Tab/Feed';
import Upload from '~/Tab/Upload';
import Alarm from '~/Tab/Alarm';
import Profile from '~/Tab/Profile';
import Search from '~/Screens/Search';
import SearchResult from '~/Screens/SearchResult';
import FeedDetail from '~/Screens/FeedDetail';
import PinterMap from '~/Screens/PinterMap';
import UncertifiedProfile from '~/Screens/UncertifiedProfile';
import CertifiedProfile from '~/Screens/CertifiedProfile';
import LocationSearch from '~/Screens/LocationSearch';
import ImagesPullScreen from '~/Screens/ImagesPullScreen';
import Gallery from '~/Screens/Gallery';
import Gallery_ProfileImage from '~/Screens/Gallery_ProfileImage';
import Unauthorized from '~/Screens/Unauthorized';
import BasicInput from '~/Screens/SignUp/BasicInput';
import ProfileInput from '~/Screens/SignUp/ProfileInput';
import LoginScreen from '~/Screens/LoginScreen';
import ParagraphDivider from '~/Components/Test/ParagraphDivider';
import ParagraphInput from '~/Components/Test/ParagraphInput';
import UploadScreen from '~/Components/Container/UploadScreen';
import UploadAdditionInfo from '~/Screens/UploadAdditionInfo'; 
import TagAutoComplete from '~/Screens/TagAutoComplete';
import GalleryTest from '~/Components/Test/GalleryTest';
import FeedDetailScreen from '~/Components/Container/FeedDetailScreen';
import CommentListScreen from '~/Components/Container/CommentListScreen';
import LikeListScreen from '~/Components/Container/LikeListScreen';
import FeedListScreen from '~/Components/Container/FeedListScreen';
import NearFeedMapScreen from '~/Components/Container/NearFeedMapScreen';
import NewUploadScreen from '~/Components/Container/NewUploadScreen';
import TagSearchScreen from '~/Components/Container/TagSearchScreen';
import TestTextWidth from '~/Components/Container/TestTextWidth';
import UploadDescripInputScreen from '~/Screens/UploadDescripInputScreen';
import ProductUrlSearchScreen from '~/Components/Container/ProductUrlSearchScreen';
import getCurrentUser from '~/AsyncStorage/User';

// Profile Screen
import ProfileScreen from '~/Components/Container/ProfileScreen';
import SettingScreen from '~/Components/Container/SettingScreen';
import CollectionDetailScreen from '~/Components/Container/CollectionDetailScreen';
import ProfileScreenTest from '~/Components/Container/ProfileScreenTest'
import ProfileTestScreen from '~/Components/Container/ProfileTestScreen';

// Collection Screen
import CollectionUploadScreen from '~/Components/Container/CollectionUploadScreen';
import AddCollectionFeedScreen from '~/Components/Container/AddCollectionFeedScreen';
import CollectionModifyScreen from '~/Components/Container/CollectionModifyScreen';
import CollectionFeedEditScreen from '~/Components/Container/CollectionFeedEditScreen';

// Scrap Screen
import AddScrapAlbumScreen from '~/Components/Container/AddScrapAlbumScreen';
import CollapsibleTabBarTest from '~/Components/Container/CollapsibleTabBarTest';

const Tab = createBottomTabNavigator();
const HomeStack = createStackNavigator();
const SearchStack = createStackNavigator();
const FeedStack = createStackNavigator();
const UploadStack = createStackNavigator();
const AlarmStack = createStackNavigator();
const ProfileStack = createStackNavigator();
const UnauthStack = createStackNavigator();
const NoBottomBarStack = createStackNavigator();

function FeedTitle() {
  return (
    <Text style={{fontSize: 17, }}>오늘의 후깅</Text>
  );
}

function FeedDetailTitle() {
  return <Text style={{fontSize: 17, }}></Text>;
}

function AlarmTitle() {
  return <Text style={{fontSize: 17, }}>알림</Text>;
}

function ProfileTitle() {
  return <Text style={{fontSize: 17, }}>프로필</Text>;
}

function LoginTitle() {
  return <Text style={{fontSize: 17, }}>로그인</Text>;
}

function SignupTitle() {
  return (
    <Text style={{fontSize: 17, }}>회원 가입</Text>
  );
}

function SearchLocationTitle() {
  return (
    <Text style={{fontSize: 17, }}>위치 검색</Text>
  );
}

function BasicInputTitle() {
  return (
    <Text style={{fontSize: 17, }}>회원 가입</Text>
  );
}

const config = {
  animation: 'timing',
  config: {
    duration: 0,
  },
};

function HomeStackScreen() {
  return (
    <HomeStack.Navigator headerMode="none">
      <HomeStack.Screen name="Home" component={Home} />
      <HomeStack.Screen
        name="Search"
        component={Search}
        options={{
          transitionSpec: {
            open: config,
            close: config,
          },
        }}
      />
      <HomeStack.Screen
        name="SearchResult"
        component={SearchResult}
        options={{
          transitionSpec: {
            open: config,
            close: config,
          },
        }}
      />
    </HomeStack.Navigator>
  );
}

function FeedStackScreen() {
  return (
    <FeedStack.Navigator
      screenOptions={{
        headerStyle: {
          height: 47,
          elevation: 1.5,
        },
        headerTitleAlign: 'left',
      }}>
      <FeedStack.Screen
        name="Feed"
        component={Feed}
        options={{
          headerTitle: (props) => <FeedTitle {...props} />,
          headerShown: false,
        }}
      />
      <FeedStack.Screen
        name="FeedDetailScreen"
        component={FeedDetailScreen}
        options={{
          headerShown: false,
        }}
      />
    </FeedStack.Navigator>
  );
}

function UploadStackScreen() {
  return (
    <UploadStack.Navigator
      headerMode="none"
      screenOptions={{
        headerStyle: {
          height: 47,
          elevation: 1.5,
        },
        headerTitleAlign: 'center',
      }}>
      <UploadStack.Screen 
      name="UploadScreen" 
      component={NewUploadScreen}
      options={{
        transitionSpec: {
          open: config,
          close: config,
        }
      }}
      />
      <UploadStack.Screen 
      name="TagSearchScreen"
      component={TagSearchScreen}
      options={{
        transitionSpec: {
          open: config,
          close: config,
        }
      }}
      />
      <UploadStack.Screen
        name="LocationSearch"
        component={LocationSearch}
        options={{
          headerTitle: (props) => <SearchLocationTitle {...props} />,
        }}
      />
      <UploadStack.Screen
      name="ProductUrlSearchScreen"
      component={ProductUrlSearchScreen}
      />
      <UploadStack.Screen
        name="ImagesPullScreen"
        component={ImagesPullScreen}
      />
      <UploadStack.Screen
        name="Gallery"
        component={Gallery}
        options={{
          transitionSpec: {
            open: config,
            close: config,
          },
        }}
      />
      <UploadStack.Screen
        name="UploadAdditionInfo"
        component={UploadAdditionInfo}
        options={{
          transitionSpec: {
            open: config,
            close: config,
          }
        }}/>
      <UploadStack.Screen
      name="TagAutoComplete"
      component={TagAutoComplete}
      options={{
        transitionSpec: {
          open: config,
          close: config,
        }
      }}/>
      <UploadStack.Screen
      name="GalleryTest"
      component={GalleryTest}/>
    </UploadStack.Navigator>
  );
}

function AlarmStackScreen() {
  return (
    <AlarmStack.Navigator
      screenOptions={{
        headerStyle: {
          height: 47,
          elevation: 1.5,
        },
        headerTitleAlign: 'left',
      }}>
      <AlarmStack.Screen
        name="Alarm"
        component={Alarm}
        options={{
          headerTitle: (props) => <AlarmTitle {...props} />,
        }}
      />
    </AlarmStack.Navigator>
  );
}

function ProfileStackScreen() {
  return (
    <ProfileStack.Navigator
      headerMode="none"
      screenOptions={{
        headerStyle: {
          height: 47,
          elevation: 1.5,
        },
        headerTitleAlign: 'center',
      }}>
      <ProfileStack.Screen
        name="ProfileScreen"
        component={ProfileScreenTest}
        options={({navigation, route}) => ({
          headerTitle: (props) => <ProfileTitle {...props} />,
        })}
      />
      <ProfileStack.Screen name="PinterMap" component={PinterMap} />
      <ProfileStack.Screen
        name="UncertifiedProfile"
        component={UncertifiedProfile}
      />
      <ProfileStack.Screen
        name="CertifiedProfile"
        component={CertifiedProfile}
      />
      <ProfileStack.Screen
        name="Gallery_ProfileImage"
        component={Gallery_ProfileImage}
        options={{
          transitionSpec: {
            open: config,
            close: config,
          },
          headerShown: false,
        }}
      />
      <ProfileStack.Screen
      name="SettingScreen"
      component={SettingScreen}
      />
    </ProfileStack.Navigator>
  );
}

function UnauthStackScreen() {
  return (
    <UnauthStack.Navigator headerMode="none">
      <UnauthStack.Screen
        name="Unauthorized"
        component={Unauthorized}
        options={{
          transitionSpec: {
            open: config,
            close: config,
          },
        }}
      />
      <UnauthStack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{
          transitionSpec: {
            open: config,
            close: config,
          },
        }}
      />
      <UnauthStack.Screen
        name="BasicInput"
        component={BasicInput}
        options={({navigation, route}) => ({
          transitionSpec: {
            open: config,
            close: config,
          },
        })}
      />
      <UnauthStack.Screen
        name="ProfileInput"
        component={ProfileInput}
        options={({navigation, route}) => ({
          transitionSpec: {
            open: config,
            close: config,
          },
        })}
      />
      <UnauthStack.Screen
        name="Gallery_ProfileImage"
        component={Gallery_ProfileImage}
        options={({navigation, route}) => ({
          transitionSpec: {
            open: config,
            close: config,
          },
        })}
      />
    </UnauthStack.Navigator>
  );
}

function Navigator() {
  const currentUser = useSelector((state) => state.currentUser);
  return (
    <NavigationContainer>
      {!currentUser.loggedIn ? (
        <Tab.Navigator
          tabBarOptions={{
            showLabel: false,
            style: styles.tabBar,
          }}>
          
          <Tab.Screen
            name="Home"
            component={HomeStackScreen}
            options={{
              tabBarIcon: ({focused}: {focused: boolean}) => (
                <Image
                  style={{width: 22, height: 22}}
                  source={
                    /*
                  focused
                    ? require('~/Assets/Images/Tabs/ic_home.png')
                    : require('~/Assets/Images/Tabs/ic_home_outline.png')
                
                    require('~/Assets/Images/Tabs/ic_homeTap.png')
                  }
                />
              ),
            }}
          />
      
          <Tab.Screen
            name="Feed"
            component={FeedStackScreen}
            options={{
              tabBarIcon: ({focused}: {focused: boolean}) => (
                <Image
                  style={{width: 22, height: 22}}
                  source={
                    /*
                focused
                  ? require('~/Assets/Images/Tabs/ic_home.png')
                  : require('~/Assets/Images/Tabs/ic_home_outline.png')
              */
                    require('~/Assets/Images/Tabs/ic_feedTap.png')
                  }
                />
              ),
            }}
          />
          <Tab.Screen
            name="Upload"
            component={UploadStackScreen}
            options={{
              tabBarIcon: ({focused}: {focused: boolean}) => (
                <Image
                  style={{width: 22, height: 22}}
                  source={
                    /*
                focused
                  ? require('~/Assets/Images/Tabs/ic_home.png')
                  : require('~/Assets/Images/Tabs/ic_home_outline.png')
              */
                    require('~/Assets/Images/Tabs/ic_uploadTap.png')
                  }
                />
              ),
              unmountOnBlur: true,
              tabBarVisible: false,
            }}
          />
          <Tab.Screen
            name="Alarm"
            component={AlarmStackScreen}
            options={{
              tabBarIcon: ({focused}: {focused: boolean}) => (
                <Image
                  style={{width: 22, height: 22}}
                  source={
                    /*
                focused
                  ? require('~/Assets/Images/Tabs/ic_home.png')
                  : require('~/Assets/Images/Tabs/ic_home_outline.png')
              */
                    require('~/Assets/Images/Tabs/ic_alarmTap.png')
                  }
                />
              ),
            }}
          />
          <Tab.Screen
            name="Profile"
            component={ProfileStackScreen}
            options={{
              tabBarIcon: ({focused}: {focused: boolean}) => (
                <Image
                  style={{width: 22, height: 22}}
                  source={
                    /*
                focused
                  ? require('~/Assets/Images/Tabs/ic_home.png')
                  : require('~/Assets/Images/Tabs/ic_home_outline.png')
              */
                    require('~/Assets/Images/Tabs/ic_profileTap.png')
                  }
                />
              ),
            }}
          />
        </Tab.Navigator>
      ) : (
        <UnauthStackScreen />
      )}
    </NavigationContainer>
  );
}

function BottomTab() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        showLabel: false,
        style: styles.tabBar
      }}>
      <Tab.Screen 
      name="FeedListScreen" 
      component={FeedListScreen}
      options={{
        tabBarIcon: ({focused}: {focused: boolean}) => (
          <Image
            style={{width: 30, height: 30}}
            source={
              /*
          focused
            ? require('~/Assets/Images/Tabs/ic_home.png')
            : require('~/Assets/Images/Tabs/ic_home_outline.png')
        */
              require('~/Assets/Images/NewTabs/ic_home_outline.png')
            }
          />
        ),
      }}
      />
      <Tab.Screen
      name="Search"
      component={ProfileTestScreen}
      options={{
        tabBarIcon: ({focused}: {focused: boolean}) => (
          <Image
            style={{width: 30, height: 30}}
            source={
              /*
          focused
            ? require('~/Assets/Images/Tabs/ic_home.png')
            : require('~/Assets/Images/Tabs/ic_home_outline.png')
        */
              require('~/Assets/Images/NewTabs/ic_search_outline.png')
            }
          />
        ),
        unmountOnBlur: true,
        tabBarVisible: false,
      }}
      />
      <Tab.Screen 
      name="Upload"
      component={UploadStackScreen}
      options={{
        tabBarIcon: ({focused}: {focused: boolean}) => (
          <Image
            style={{width: 30, height: 30}}
            source={
              /*
          focused
            ? require('~/Assets/Images/Tabs/ic_home.png')
            : require('~/Assets/Images/Tabs/ic_home_outline.png')
        */
              require('~/Assets/Images/NewTabs/ic_upload_outline.png')
            }
          />
        ),
        unmountOnBlur: true,
        tabBarVisible: false,
      }}
      />
      <Tab.Screen 
      name="Alarm" 
      component={AlarmStackScreen}
      options={{
        tabBarIcon: ({focused}: {focused: boolean}) => (
          <Image
            style={{width: 30, height: 30}}
            source={
              require('~/Assets/Images/NewTabs/ic_alarm_outline.png')
            }
          />
        ),
      }}
      />
      <Tab.Screen 
      name="Profile" 
      component={ProfileStackScreen}
      options={{
        tabBarIcon: ({focused}: {focused: boolean}) => (
          <Image
            style={{width: 30, height: 30}}
            source={
              require('~/Assets/Images/Tabs/ic_profile_outline.png')
            }
          />
        ),
      }}
      />
    </Tab.Navigator>
  )
}

function AppNavigator() {
  const [currentUser, setCurrentUser] = useState();
  const currentUserState = useSelector((state) => state.currentUser)
  
  getCurrentUser().then(function(response) {
    console.log("response", response);
    setCurrentUser(response);
  })
  .catch(function(error) {
    console.log("error");
  })

  return (
    <NavigationContainer>
    {!currentUserState.loggedIn  ? (  
    <NoBottomBarStack.Navigator
    headerMode="none"
    >
      <NoBottomBarStack.Screen name="BottomTab" component={BottomTab}/>
      <NoBottomBarStack.Screen name="FeedDetailScreen" component={FeedDetailScreen}/>
      <NoBottomBarStack.Screen name="CommentListScreen" component={CommentListScreen}/>
      <NoBottomBarStack.Screen name="LikeListScreen" component={LikeListScreen}/>
      <NoBottomBarStack.Screen name="NearFeedMapScreen" component={NearFeedMapScreen}/>
      <NoBottomBarStack.Screen name="CollectionDetailScreen" component={CollectionDetailScreen}/>
      <NoBottomBarStack.Screen name="CollectionUploadScreen" component={CollectionUploadScreen}/>
      <NoBottomBarStack.Screen name="CollectionModifyScreen" component={CollectionModifyScreen}/>
      <NoBottomBarStack.Screen name="CollectionFeedEditScreen" component={CollectionFeedEditScreen}/>
      <NoBottomBarStack.Screen name="AddCollectionFeedScreen" component={AddCollectionFeedScreen}/>
      <NoBottomBarStack.Screen name="AddScrapAlbumScreen" component={AddScrapAlbumScreen}/>
    </NoBottomBarStack.Navigator>
    ) : (
      <UnauthStackScreen/>
    )}
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  tabBar: {
    paddingTop: 10,
    height: hp('8.5%'),
    position: 'absolute',
  },
});

export default AppNavigator;
