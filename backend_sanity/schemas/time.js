export default {
    name:'team',
    title:'Team',
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
            name:'descricao',
            title:'Descricao',
            type:'string'
        }
    ]
}