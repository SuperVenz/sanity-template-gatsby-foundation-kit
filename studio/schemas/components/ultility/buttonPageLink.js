export default {
  name: "buttonPageLink",
  title: "Button Page Link",
  type: "object",
  fields: [
    {
      name: "text",
      title: "Text",
      type: "string",
    },
    {
      name: "pageLink",
      title: "Page Link",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
  ],
};
