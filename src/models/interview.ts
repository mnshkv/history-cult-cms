import { buildCollection } from "firecms";

type Interview = {
  title: string;
  previewImageUrl: string;
  url: string;
};

export const interviewCollection = buildCollection<Interview>({
  name: "Интервью",
  singularName: "Интервью",
  path: "interview",
  icon: "InterpreterMode",
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
      name: "Сыллка на интервью",
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
