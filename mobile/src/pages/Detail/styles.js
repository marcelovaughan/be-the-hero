import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
    container: {
        flex:1,
        paddingHorizontal: 24,
        paddingTop: Constants.statusBarHeight + 20
    },
    header:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems:'center',        
    },
    headerText:{
        fontSize: 15,
        color: '#737380'
    },
    headerTextBold:{
        fontWeight: 'bold'
    },
    scroll:{
        width:'100%',        
        borderStyle: 'solid',
        borderWidth: 1
    },
    incident:{
        padding: 24,
        borderRadius: 8,
        backgroundColor: '#FFF',
        marginTop:32,
    },
    incidentProperty:{
        fontSize: 14,
        color: '#41414d',
        fontWeight: 'bold',
        marginTop:24,
    },
    incidentValue:{
        marginTop: 8,
        fontSize: 15,
        color: '#737380'
    },

    detailsButton:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    detailsButtonText:{
       color: '#e02041',
       fontWeight: 'bold',
       fontSize: 15
    },
    contactBox:{
        padding: 24,
        borderRadius: 8,
        backgroundColor: '#FFF',
        marginTop:16,
    },
    heroTitle: {
        fontWeight: 'bold',
        fontSize: 20,
        lineHeight:30,
        color: '#13131a'
    },
    heroDescription: {
        fontSize: 15,
        color: '#737380',
        marginTop:16
    },
    actions: {
        marginTop:16,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    action:{
        backgroundColor:'#e02041',
        borderRadius: 8,
        height: 50,
        width: '48%',
        alignItems: 'center', 
        justifyContent: 'center'       
    },
    actionText:{
        color: '#FFF',
        alignItems: 'center',
        fontSize: 15,
        fontWeight: 'bold'
    }

});