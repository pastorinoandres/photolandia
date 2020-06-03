
import { Dimensions } from 'react-native'

const {width:windowWidth, height:windowHeight} = Dimensions.get('window');

const peso = {

    semibold:{
        fontWeight:'600'
    },
    regular:{
        fontWeight:'400'
    },
    light:{
        fontWeight:'300'
    }
}

const font = {

    SanFrancisco: {
        fontFamily: 'System',
    }
}


function calculateFontSize(fontSize){

    const screenSizeDefault = 414
    const porcentaje = fontSize/screenSizeDefault

    return windowWidth*porcentaje

}

export default typography = {
    
    ['title-20']:{
        typography:{
            fontSize:calculateFontSize(20),
            ...peso.semibold,
            ...font.SanFrancisco
        }
    },
    ['body-18']:{        
        typography:{
            fontSize:calculateFontSize(18),
            ...peso.regular,
            ...font.SanFrancisco
        }
    },
    ['body-16']:{
        typography:{
            fontSize:calculateFontSize(16),
            ...peso.regular,
            ...font.SanFrancisco
        }        
    },
    ['body-14']:{        
        typography:{
            fontSize:calculateFontSize(14),
            ...peso.regular,
            ...font.SanFrancisco
        }
    },
    ['caption-12']:{        
        typography:{
            fontSize:calculateFontSize(12),
            ...peso.regular,
            ...font.SanFrancisco
        }
    },
    ['display-44']:{        
        typography:{
            fontSize:calculateFontSize(44),
            ...peso.light,
            ...font.SanFrancisco
        }
    },


}


