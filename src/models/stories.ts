import { buildCollection } from "firecms";

type Story = {
  pathUrl: string;
  previewImageUrl: string;
};

export const storiesCollection = buildCollection<Story>({
  name: "Слово дня",
  singularName: "Слово дня",
  path: "stories",
  icon: "Create",
  permissions: () => ({
    read: true,
    edit: true,
    create: true,
    delete: true,
  }),
  properties: {
    pathUrl: {
      name: "URL",
      description: "ссылка на основное изображение",
      validation: { required: true },
      dataType: "string",
    },
    previewImageUrl: {
      name: "URL",
      description: "ссылка на превью изображение",
      validation: { required: true },
      dataType: "string",
    },
  },
});
