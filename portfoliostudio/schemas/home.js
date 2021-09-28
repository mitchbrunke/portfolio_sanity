export default {
  name: "home_slider",
  title: "Home Slider",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      title: "Tech Stack",
      name: "stack",
      type: "string",
    },
    {
      title: "Hero Image",
      name: "hero",
      type: "image",
      options: {
        hotspot: true, // <-- Defaults to false
      },
    },
  ],
};
