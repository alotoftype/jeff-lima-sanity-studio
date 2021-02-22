export default {
  name: "Television",
  type: "document",
  description: "Pick a Television show",
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
          {title: "Recurring", value: 'recurring'},
          {title: "Guest Star", value: 'guestStar' },
          {title: "Regular", value: 'regular'}
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