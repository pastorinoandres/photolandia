
//Estos son los colores que se deben usar en toda la app.

export default colors = {

    gradient:{
        colors:['rgba(0, 0, 0, 0.2)','rgba(0, 0, 0, 0.6)'],
        start:[0.5, 0],
        end:[0.5, 1],
        locations:[0.25,0.75]
    },    
    grey:{
        t10: 'rgba(0,0,0,0.1)',
        t20: 'rgba(0,0,0,0.2)',
        t30: 'rgba(0,0,0,0.3)',
        t40: 'rgba(0,0,0,0.4)',
        t60: 'rgba(0,0,0,0.6)',
        t80: 'rgba(0,0,0,0.8)'        
    },    
    white: (alfa = 1)=>`rgba(255,255,255,${alfa})`,

} 