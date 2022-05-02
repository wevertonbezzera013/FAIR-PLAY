export default {
    name:'depoimentos',
    title:'Depoimentos',
    type: 'document',
    fields:[
        { 
            name:'nome',
            title:'Nome',
            type: 'string'
        },
        {
            name:'ocupacao',
            title:'Ocupacao',
            type:'string'
        },
        {
            name:'imgurl',
            title:'ImgUrl',
            type: 'image',
            options: {
              hotspot: true,
            },
        },  
        {
            name:'depoimento',
            title:'Depoimento',
            type:'string'
        }
    ]
}