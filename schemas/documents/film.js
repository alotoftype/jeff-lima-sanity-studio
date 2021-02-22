export default {
  name: "Film",
  type: "document",
  description: "Pick a film",
  fields: [
    {
      name: "title",
      title: "title",
      type: "string"
    },
    {
      name: "order",
      title: "Presentation Order",
      type: "number"
    },
    {
      name: "poster",
      title: "Poster",
      type: "image"
    },
    {
      name: "role",
      title: "Role",
      type: "string",
      options: {
        list: [
          {title: "Principal", value: 'principal'},
          {title: "Supporting", value: 'supporting' },
          {title: "Day Player", value: 'dayPlayer'},
          {title: "Player", value: 'player'}
        ]
      }
    },
    {
      name: "overview",
      title: "Overview",
      type: "text"
    }
  ]
}