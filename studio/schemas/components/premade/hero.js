export default {
  name: "hero",
  title: "Hero",
  type: "object",
  fields: [
    {
      name: "pic",
      title: "Background Picture",
      type: "pic",
    },
    {
      name: "content",
      title: "Header and text",
      type: "article",
    },
    {
      name: "button",
      title: "button",
      type: "buttonPageLink",
    },
  ],
};
