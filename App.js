import React, {Component} from 'react';
import external from './style';
import {
  ScrollView,
  View,
  StatusBar,
  RefreshControl,
  Text,
  Platform,
  TextInput,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
  Alert,
} from 'react-native';

var offset = 1;

export default class MyConsignment extends React.Component {
  constructor() {
    super();
    this.getDataList();
    this.state = {
      showloader: false,
      refreshing: false,
      showdataloader: false,
      showdata: false,
      shownodata: false,
      data: [],
      fetching_from_server: false,
    };
    this.baseState = this.state;
    this.arrayholder = [];
  }

  dataavailbale = () => {
    try {
      this.setState({showdata: true});
    } catch (error) {
      console.log('Error in Show Booking List' + error);
    }
  };

  datanotavailbale = () => {
    try {
      this.setState({shownodata: true});
    } catch (error) {
      console.log('Error in Show Booking List' + error);
    }
  };

  getDataList = async () => {
    try {
      offset = 1;
      this.setState({showdataloader: true});
      var that = this;
      var url = 'https://reqres.in/api/users?page=' + offset;
      console.log('GEtBOOKINg', 'Urlis-->' + url);
      fetch(url, {
        method: 'GET',
      })
        .then(response => response.json())
        .then(responseJson => {
          console.log('Data', 'is-->' + JSON.stringify(responseJson.data));
          that.setState({
            showdataloader: false,
          });
          // if (responseJson.data.length > 0) {
          that.setState({
            data: responseJson.data,
          });
          that.dataavailbale();
          // } else {
          //   Alert.alert('', 'no data availbale');
          //   that.datanotavailbale();
          // }
        })
        .catch(error => {
          console.error('Error' + error);
        });
    } catch (error) {
      console.log('Error in Get My Bookings' + error);
    }
  };

  loadMoreData = () => {
    try {
      this.setState({fetching_from_server: true}, () => {
        var url = 'https://reqres.in/api/users?page=' + offset;
        console.log('GEtBOOKINg', 'Urlis-->' + url);
        fetch(url, {
          method: 'GET',
        })
          .then(response => response.json())
          .then(responseJson => {
            console.log(
              'LoadMore',
              'response is' + JSON.stringify(responseJson),
            );
            if (responseJson.data.length > 0) {
              offset = offset + 1;
              this.setState({
                data: [...this.state.data, ...responseJson.data],
                fetching_from_server: false,
              });
            } else {
              Alert.alert('No Data Available');
              this.setState({
                fetching_from_server: false,
              });
            }
          })
          .catch(error => {
            this.setState({
              fetching_from_server: false,
            });
            console.error(error);
          });
      });
    } catch (error) {
      this.setState({
        fetching_from_server: false,
      });
      console.error('Exception caught while fetch more news ' + error);
    }
  };

  renderFooter() {
    return (
      <View style={external.footer}>
        <TouchableOpacity
          activeOpacity={0.9}
          onPress={this.loadMoreData}
          style={external.loadMoreBtn}>
          <Text style={external.btnText}>Load More</Text>
          {this.state.fetching_from_server ? (
            <ActivityIndicator color="white" style={{marginLeft: 8}} />
          ) : null}
        </TouchableOpacity>
      </View>
    );
  }
  renderEmpty() {
    return null;
  }

  onRefresh = async () => {
    try {
      this.setState(this.baseState);
      offset = 1;
    } catch (error) {
      console.log('Error in Refresh Page' + error);
    }
  };

  render() {
    return (
      <View style={external.MainContainer}>
        <StatusBar backgroundColor="#1a7aba" />
        <View style={external.ProfilePageHeaderView}>
          <Text style={[external.HeaderWithBacktxt, {left: 12}]}>
            Track Data
          </Text>
        </View>
        <View
          style={{
            width: '100%',
            height: 1,
            backgroundColor: '#e0e0e0',
            top: 4,
          }}></View>
        <ScrollView
          style={{marginTop: 12}}
          refreshControl={
            <RefreshControl
              refreshing={this.state.refreshing}
              onRefresh={this.onRefresh}
            />
          }>
          {this.state.showdataloader && (
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                top: '12%',
              }}>
              <ActivityIndicator
                animating={this.state.showdataloader}
                color="#1a7aba"
                style={{alignSelf: 'center'}}
                size="small"
              />
            </View>
          )}

          {this.state.showdata && (
            <FlatList
              data={this.state.data}
              scrollEnabled={true}
              renderItem={({item}) => this.renderitem(item)}
              ListFooterComponent={
                this.state.data.length >= 6
                  ? this.renderFooter.bind(this)
                  : this.renderEmpty.bind(this)
              }
            />
          )}

          {this.state.shownodata && (
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                width: '100%',
                height: '25%',
              }}>
              <Text style={external.TrackParcelsubtitle}>
                No Booking Available..
              </Text>
            </View>
          )}
        </ScrollView>
      </View>
    );
  }

  renderitem = item => {
    return (
      <View style={external.Tracksubtitle1}>
        <View style={external.Trackcard1container}>
          <Text style={external.tracktittle}>{item.id}</Text>
          <Text style={external.trackinfo}>{item.first_name}  {item.last_name}</Text>
          <Text style={external.trackdate}>{}</Text>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text style={external.trackupdate}>{item.email}</Text>
        </View>
        <Text style={external.trackdetail}>{item.avatar}</Text>
      </View>
    );
  };
}
