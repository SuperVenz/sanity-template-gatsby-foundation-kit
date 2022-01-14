export default {
  name: "siteInfo",
  title: "Site Info",
  type: "document",
  fields: [
    {
      name: "logo",
      title: "Logo",
      type: "pic",
    },
    {
      name: "companyName",
      title: "Company Name",
      type: "string",
    },
    {
      name: "cannonicalLink",
      title: "Cannonical Link",
      type: "url",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "socialMedia",
      title: "Social Media",
      type: "array",
      of: [{ type: "socialHandle" }],
    },
  ],
};
