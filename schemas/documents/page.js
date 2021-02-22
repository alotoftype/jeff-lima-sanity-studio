export default  {
  title: "Page",
  name: "page",
  type: "document",
  fields: [
    {
      title: "Title",
      name: "title",
      description: "Create a page",
      type: "string"
    },
    {
      title: "Image",
      name: "image",
      type: "image",
      hotspot: true,
      fields: [
        {
          title: 'Alt Text',
          name: 'alt',
          type: 'string'
        }
      ]
    },
    {
      title: "Content",
      name: "content",
      description: "content for page",
      type: 'array',
      of: [{type: 'block'}]
    }
    
  ]
}