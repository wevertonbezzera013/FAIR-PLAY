export default{
    name:'patrocinadores',
    title:'Patrocinadores',
    type: 'document',
    fields:[
        {
            name:'imgUrl',
            title:'ImgUrl',
            type: 'image',
            options: {
              hotspot: true,
            },
        },
        {
            name:'nome',
            title:'Nome',
            type:'string'
        }
    ]
}