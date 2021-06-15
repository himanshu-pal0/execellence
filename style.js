import {StyleSheet, Platform} from 'react-native';
const external = StyleSheet.create({
  //Common Style

  footer: {
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  loadMoreBtn: {
    padding: 10,
    backgroundColor: '#1a7aba',
    borderRadius: 5,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnText: {
    color: 'white',
    fontSize: 15,
    textAlign: 'center',
  },
  MainContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
  ProfilePageHeaderView: {
    width: '100%',
    height: 60,
    flexDirection: 'row',
    backgroundColor: '#1a7aba',
    alignItems: 'center',
  },
  HeaderWithBacktxt: {
    fontFamily: Platform.OS === 'ios' ? 'Avenir ' : 'Roboto',
    fontSize: Platform.OS === 'ios' ? 17 : 18,
    color: 'white',
  },
  TrackParcelsubtitle: {
    marginTop: '5%',
    fontFamily: Platform.OS === 'ios' ? 'Avenir ' : 'Roboto',
    fontSize: Platform.OS === 'ios' ? 17 : 18,
    margin: 20,
    color: 'black',
    fontWeight: '600',
  },
  Tracksubtitle1: {
    width: '100%',
    borderRadius: 12,
    backgroundColor: '#fff',
    elevation: 5,
    margin: 8,
    alignSelf: 'center',
  },
  Trackcard1container: {
    flexDirection: 'row',
    margin: 10,
    alignItems: 'center',
    backgroundColor: '#fff',
    justifyContent: 'space-between',
  },
  tracktittle: {
    fontFamily: Platform.OS === 'ios' ? 'Avenir ' : 'Roboto',
    fontSize: Platform.OS === 'ios' ? 17 : 18,
    color: 'grey',
  },
  trackdate: {
    fontFamily: Platform.OS === 'ios' ? 'Avenir ' : 'Roboto',
    fontSize: Platform.OS === 'ios' ? 12 : 10,
    color: 'grey',
  },
  trackinfo: {
    color: 'grey',
    fontFamily: Platform.OS === 'ios' ? 'Avenir ' : 'Roboto',
    fontSize: Platform.OS === 'ios' ? 13 : 12,
  },
  trackupdate: {
    marginLeft: 10,
    color: 'grey',
    fontSize: Platform.OS === 'ios' ? 13 : 12,
    marginTop: 10,
  },
  trackdetail: {
    fontWeight: 'bold',
    fontSize: Platform.OS === 'ios' ? 13 : 12,
    marginTop: 10,
    marginLeft: 10,
    color: 'grey',
    paddingBottom: 15
  },
  trackborderline: {
    borderBottomWidth: 2,
    borderBottomColor: 'grey',
    width: 60,
    marginTop: 1,
    marginLeft: 10,
    marginBottom: 20,
  },
});
export default external;
