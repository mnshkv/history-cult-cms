import { buildCollection } from "firecms";

type MSHI = {
  title: string;
  previewImageUrl: string;
  url: string;
};

export const mshiCollection = buildCollection<MSHI>({
  name: "МШИ",
  singularName: "МШИ",
  path: "mshi",
  icon: "FaceRetouchingNatural",
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
    url: {
      name: "Сыллка",
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
