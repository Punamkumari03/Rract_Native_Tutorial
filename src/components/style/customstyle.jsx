import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
    container: {
      backgroundColor: '#6C63FF',
      padding: 24,
      borderRadius: 16,
      margin: 8,
      fontSize: 18,
      fontWeight: '600',
      color: 'white',
      textAlign: 'center',
      elevation: 3,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.2,
      shadowRadius: 4,
    },
    Text: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#222',
        textAlign: 'center',
        textTransform: 'uppercase',
        letterSpacing: 1,
    },
    flexproperty:{
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'flex-start',
      flexWrap: 'wrap',
      padding: 8,
    }
  });

  export default styles;