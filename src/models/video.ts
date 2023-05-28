import { buildCollection } from "firecms";

type Video = {
  title: string;
  previewImageUrl: string;
  url: string;
};

export const videoCollection = buildCollection<Video>({
  name: "5 вопросов педагогу",
  singularName: "5 вопросов педагогу",
  path: "video",
  icon: "OndemandVideo",
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
      name: "Сыллка на видео",
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
