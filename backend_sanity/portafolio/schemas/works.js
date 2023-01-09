export default {
    name:'works',
    title:'Works',
    type:'document',
    fields:[
        {
            name:'name',
            title:'Name',
            type:'string'
        },
        {
            name:'works',
            title:'Works',
            type:'string'
        },
        {
            name:'description',
            title:'Description',
            type:'string',
        },
        {
            name:'url',
            title:'url',
            type:'string',
        },
        {
            name:'image',
            title:'Work Image',
            type:'image',
            options:{
                hotspot: true
            }
        }
    ]
}