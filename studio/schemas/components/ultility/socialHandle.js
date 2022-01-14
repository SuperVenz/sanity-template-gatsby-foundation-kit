export default {
  name: "socialHandle",
  title: "Social Handle",
  type: "object",
  fields: [
    {
      name: "icon",
      title: "Social Handle Icon",
      type: "pic",
    },
    {
      name: "text",
      title: "Text",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "link",
      title: "Link",
      type: "url",
      validation: (Rule) => Rule.required(),
    },
  ],
};
