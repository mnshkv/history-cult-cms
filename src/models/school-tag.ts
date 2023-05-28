import { buildCollection } from "firecms";

type SchoolTag = {
  title: string;
  previewImageUrl: string;
  tag: string;
};

export const schoolTagCollection = buildCollection<SchoolTag>({
  name: "SchoolTag",
  singularName: "Школьные теги",
  path: "schooltags",
  icon: "Loyalty",
  permissions: () => ({
    read: true,
    edit: true,
    create: true,
    delete: true,
  }),
  properties: {
    title: {
      name: "Название",
      validation: { required: true },
      dataType: "string",
    },
    tag: {
      name: "тег поиска",
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
