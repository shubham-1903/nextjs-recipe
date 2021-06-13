export default{
  name: 'ingredient',
  title: 'ingredient',
  type: 'document',
  fields:[
    {
      name: 'name',
      title: 'Ingredient Name',
      type: 'string',
    },
    {
      name:'image',
      title:'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name:'notes',
      title:'Notes',
      type: 'text',
    }
  ]
}