
import { Poppins_900Black } from '@expo-google-fonts/poppins';
import { StyleSheet, Dimensions } from 'react-native';




  
var stockred = '#e41b1f';
var primaryfontcolor = '#666666';
var secondaryfontcolor = '#464646';
var mutedred = '#f29294';
var largefont = 'Montserrat_500Medium';
var regularfont = 'Poppins_400Regular';
var puti = '#fff';
var subbg = '#f5f4f4';
var radius1 = 5;
var marginedContainer = Dimensions.get('window').width - 50;
var chatwrapcontainer = Dimensions.get('window').width -40;
var bubbleContainer = chatwrapcontainer - 50;
var gridSquare = marginedContainer  / 3;

const styles = StyleSheet.create({

  /*----basic reusable classes---- */
  flex1: {
    flex:1,
  },
  puti:{
    color: puti,
  },
  whitebg:{
    backgroundColor: puti,
  },
  verticalCenter:{
    flexDirection: 'column',
    alignItems:'center'

  },
  onehunned:{
    width: '100%',
  },
  input:{
    height: 30,
    borderColor: stockred,
    borderRadius: radius1,
    fontFamily: regularfont,
    width: '80%',
    color: primaryfontcolor
  },
  regularFont:{
  color: primaryfontcolor,
  fontSize: 14,
  fontFamily: regularfont,
  },
  subbg:{
    backgroundColor: stockred,
    color: puti
  },
  bgwhite:{
    backgroundColor: puti,
  },
  firstVertical:{
    borderTopWidth: 1,
    borderTopColor: puti
  },
  header:{
    borderBottomWidth: 1,
    borderBottomColor: '#e41b1f',
    height: 45,
    flex: 0,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: puti,
    marginBottom: 20,
  },
  subpage:{
    backgroundColor: subbg,
    flexGrow: 1, 
    paddingTop: 35,
  },
  formfield:{
    backgroundColor: puti,
    width: chatwrapcontainer,
    paddingHorizontal: 10,
    height: 50,
    margin: 5,
  },
  multiLine:{
    height: 140,
    textAlignVertical: 'top',
    paddingVertical: 15,
  },
  fieldshadow:{
    shadowColor: "#000",
    shadowOffset:{
    width: 0,
    height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.00,
    elevation: 1,
  },
  fieldlabel:{
    fontFamily: largefont,
    color: stockred,
    fontSize: 14,
    marginHorizontal: 5,
    marginVertical: 5,
  },
  containerhpad:{
    paddingHorizontal: 15,
  },
  formfieldcontainer:{
    marginBottom: 10,
  },
  formfieldspacer:{
    padding: 40,
  },
  nameedit:{
    fontFamily: largefont,
    color: stockred,
  },
  /*------others-----*/
  /*----subpage headers---*/
  subtitle:{
    fontFamily: largefont,
    fontSize: 16,
    color: stockred,
  },
  headerfront:{
    justifyContent: 'space-between',
  },
  headersub:{
    justifyContent: 'flex-start',
    paddingHorizontal: 10,
    marginBottom: 0,
  },
  logoicon:{
    width: 20,
    height: 20,
  },
  burrjar:{
    color: stockred,
  },
  tagcontainer:{
    flexWrap: 'wrap',
    flexDirection: 'row'
  },
  tag:{
    paddingVertical:2,
    paddingHorizontal: 10,
    backgroundColor: puti,
    marginTop: 5,
    marginHorizontal: 5,
    marginBottom: 10,
    borderRadius: 3,
    justifyContent: 'center',
  },
  tagx:{
    backgroundColor: '#CCCCCC',
  },
  /*-----feed page ----*/
  feed: {
    backgroundColor: puti,
  },
  bottomDrawerRoof: {
    height: 0,
    width:0, 
    borderTopWidth: 0,  
    borderLeftWidth: 250, 
    borderRightWidth: 250, 
    borderBottomWidth: 20, 
    borderBottomColor: '#e41b1f', 
    borderLeftColor: 'transparent', 
    borderRightColor: 'transparent', 
    bottom: -1
  },
  bottomDrawerContainer: {
    alignItems: 'center', 
    width: '100%', 
    height:720, 
    backgroundColor:'#e41b1f', 
    borderTopColor:'#e41b1f', 
    borderTopWidth: 2, 
  },
  verdictButton:{
    backgroundColor: puti,
    marginBottom: 15,
    height: 55,
    width: 295,
    borderRadius:5,
    justifyContent:'center',
    alignItems: 'center',
  },
  verdictText:{
    textTransform: 'uppercase',
    fontFamily: largefont,
    color: stockred,
    fontSize: 17,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.00,
    elevation: 1, 

  },
  verdictX:{
    backgroundColor: puti,
    marginBottom: 15,
    height: 55,
    width: 55,
    borderRadius:5,
    justifyContent:'center',
    alignItems: 'center',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.00,
    elevation: 1, 
  },
  verdicticon: {
    left: 20, 
    position:'absolute',
  },
  verdictimageicon:{
    left: 20, 
    position:'absolute', 
    width:20, 
    height: 20, 
    opacity: .7,
  },
  svgarrow:{
    top: -7, 
    marginBottom: 25,
  },
  /*-----------drawer element-----*/
  drawer:{
    borderLeftWidth: 2,
    borderLeftColor: puti,
    backgroundColor: stockred,
    paddingLeft: 0,
  },
  drawerName:{
    fontSize: 24,
    marginTop: 25,
    marginBottom: 40,
    fontFamily: largefont
  },
  drawerMenuItem:{
    fontFamily: regularfont,
    height: 55,
    borderBottomColor: '#fbddde',
    borderBottomWidth: 1,
    borderRadius: 0,
    marginLeft: 0,
    marginRight: 0,
    left: 0,
    paddingRight: 0,
  },
  menuitemlink:{
    color: puti,
    fontSize: 16,
    fontFamily: regularfont,
    textAlign: 'right',
    textTransform: 'uppercase',
  },
  menuitemlinkred:{
    color: stockred,
    fontSize: 16,
    fontFamily: regularfont,
    textAlign: 'right',
    textTransform: 'uppercase'
    
  },
  
  /*-----profiles----*/
  profilecomponent:{
    alignItems:'center',
    paddingVertical: 8,
  },
  slidingprofilecontainer:{
    width: '100%',
    alignItems: 'center',
    
  },
  slidingprofileimage:{
    height: 130,
    width: 130,
    borderRadius: 65,
    marginTop: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.00,
    elevation: 1, 

  },

  profileimage:{
    width: 205,
    height: 205,
    borderRadius: radius1,
    backgroundColor: subbg,
  },
  chatimage:{
    width: 35,
    height: 35,
    borderRadius: 15,
  },
  
  categories:{
    fontSize: 12,
    textAlign: 'center',
    color: primaryfontcolor,
    lineHeight: 22,
    fontFamily: regularfont
  },
  profileblurb:{
    paddingHorizontal: 25,
    textAlign: 'center',
    color: primaryfontcolor,
    fontSize: 14,
    fontFamily: regularfont,
    marginBottom: 20
  },
  profilename:{
    fontSize: 26,
    color: stockred,
    fontFamily: largefont
  },
  scrollpanel:{
    width: 300,
    alignItems: 'center',
    margin: 20,
    paddingBottom:40
  },
  vidthumb:{
    width: 300,
    height: 170,
    borderRadius: 5,
  },
  vidcap:{
    paddingVertical: 10,
    color: primaryfontcolor,
    fontSize: 12.5,
    textAlign: 'center',
    fontFamily: regularfont
  },
  /*---------------other ates items-----*/
  oaitem:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 65, 
    paddingVertical: 18, 
    paddingHorizontal: 20,
    width:'100%', 
    backgroundColor: puti, 
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.00,
    elevation: 1, 
    marginBottom: 1,
    alignItems:'center',
  },
  oatext:{
    fontFamily: largefont,
    fontSize: 20,
    color: stockred
  },
  oatouch:{
    flexGrow: 4,
    paddingHorizontal: 20,
  },
  /*---------my profile page----*/
  editVideoGrid:{
    paddingBottom: 65,
    paddingHorizontal: 10,
   },
   editVideoItem:{
    borderRadius: 5,
    margin: 5,
    width: gridSquare,
    height: gridSquare,
    overflow: 'hidden',
    backgroundColor: primaryfontcolor,
  },
  editVideoImage:{
    width: '100%',
    height: '100%',
  },
  editVideoIcon:{
    position: 'absolute',
    right: '5%',
    bottom: '5%',
  },
  imageCover:{
    backgroundColor: '#000',
    opacity: .45,
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
  },
  profileEditButtonContainer:{
    flexDirection: 'row',
    justifyContent:'flex-end',
    paddingHorizontal: 15,
    
  },
  profileEditButton:{
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileEditButtonText:{
    fontSize:11,
    marginLeft: 2,
    opacity: .9,
  },
  /*-----------settings page----*/
  settingsItemContainer:{
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.00,
    elevation: 1, 
    backgroundColor: puti,
    paddingHorizontal: 20,
    paddingVertical: 15,
    width: '100%',
    marginBottom: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  settingsItemHeader:{
    fontFamily: largefont,
    color: primaryfontcolor,
    fontSize: 14,
  },
  /*---------------kollabs page----*/
  chatSearchContainer:{
    backgroundColor: subbg,
    alignItems: 'center',
    paddingVertical: 20,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: puti,
  },
  chatfield:{
    backgroundColor: puti,
    height: 40,
    borderRadius: 10,
    paddingHorizontal:10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  /*---kollab chat teaser items---*/
  chatteasercontainer:{
    paddingVertical: 15,
    paddingHorizontal: 20,
    flexDirection: 'row',
    borderBottomColor: subbg,
    borderBottomWidth: 1,
  },
  chatteaserthumb:{
    flex: 1,
  },
  chatteaserimage:{
    width: 45,
    height: 45,
    borderRadius: 20,
  },
  chatteasertext:{
    flex: 5,
  },
  chatteasername:{
    fontSize: 14,
    fontFamily: largefont,
    color: secondaryfontcolor,
    paddingBottom: 6,
  },
  chatteaserblurb:{
    fontSize: 11,
    fontFamily: regularfont,
    color: primaryfontcolor,
  },
  chatteaseraction:{
    backgroundColor: subbg,
    borderBottomWidth: 1,
    borderBottomColor: puti,
  },
  /*------Kollab Chat Page----*/
  kollabchatheader:{
    backgroundColor: stockred,  
    flexBasis: 70, 
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
  },
  kollabchatothername:{
    color: puti,
    fontFamily: largefont,
    fontSize: 20,
    marginHorizontal: 10,
    flexGrow: 3,
  },
  kollabchatheaderlink:{
    flexDirection: 'row',
    alignItems: 'center',
  },
  kollabchatprofilelinktext:{
    fontSize:12,
    color: puti,
    marginRight: 5,
    fontFamily: regularfont,
  },
  kollabchatheaderbt:{
    width: 40,
    height: 40,
    borderRadius: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.00,
    elevation: 1, 
  },
  chatmessagefield:{
    backgroundColor: subbg, 
    flexBasis: 80,
    flexDirection:'row',
  },
  chatmessagewrap:{
    flexBasis: '92%',
  },
  chatattach:{
    paddingHorizontal: 10,
    marginLeft: '2%',
    height: 40,
    justifyContent: 'center',
  },
  chatright:{
    flexDirection: 'row-reverse',
    justifyContent: 'flex-start',
    
  },
  chatleft:{
    flexDirection: 'row',
  },
  chatrow:{
    marginBottom: 15,
    width: chatwrapcontainer,
    alignItems: 'baseline'
  },
  chatboximage:{
    width: 36,
    height: 36,
    borderRadius: 15,
    
  },
  chatboxbubble:{
    borderRadius:15,
    paddingHorizontal: 14,
    backgroundColor: subbg,
    maxWidth: bubbleContainer,
    minHeight:35,
    lineHeight: 25,
    paddingVertical: 7,
    fontFamily: regularfont,
    fontSize: 14,
  },
  chatwrap:{
    paddingHorizontal: 15,
  },
  chatimageright:{
    marginLeft: 10,
  },
  chatimageleft:{
    marginRight: 10,
  }, 
  profileimageedit:{
    width: 205,
    height: 205,
    marginTop: 8,
    marginBottom: 40,
    alignSelf: 'center',
    borderRadius: 5,
    overflow: 'hidden',
  },
  editimageclicklayer:{
    width: 205,
    height: 205,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    opacity: .8,
    top: 0,
    left: 0,
  },
  tagtext:{
    fontFamily:regularfont,
    fontSize: 11,
    color: primaryfontcolor,
  }
  
});
export default styles;