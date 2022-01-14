export default {
  name: "pic",
  title: "Picture",
  type: "object",
  fields: [
    {
      name: "picData",
      title: "Pic",
      type: "image",
    },
    {
      name: "alt",
      title: "Alt",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
  ],
};
