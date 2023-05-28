import { buildCollection } from "firecms";

type School = {
  title: string;
  place: string;
  phone: string;
  location: {
    lat: number;
    long: number;
  };
  images: string[];
  email: string;
  featuresDescription: string;
  description: string;
  categories: string[];
  tags: string[];
};

export const schoolsCollection = buildCollection<School>({
  name: "Школы",
  singularName: "Школа",
  path: "schools",
  icon: "School",
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
    place: {
      name: "Адрес",
      validation: { required: true },
      dataType: "string",
    },
    phone: {
      name: "Телефон",
      validation: { required: true },
      dataType: "string",
    },
    email: {
      name: "email",
      validation: { required: true },
      dataType: "string",
    },
    location: {
      name: "Локейшн",
      dataType: "map",
      properties: {
        lat: {
          name: "Ширина",
          validation: { required: true },
          dataType: "number",
        },
        long: {
          name: "Долгота",
          validation: { required: true },
          dataType: "number",
        },
      },
    },
    featuresDescription: {
      name: "Особености",
      validation: { required: true },
      dataType: "string",
    },
    description: {
      name: "Описание",
      validation: { required: true },
      dataType: "string",
    },
    images: {
      name: "Изображения",
      validation: { required: true },
      dataType: "array",
      of: {
        dataType: "string",
      },
    },
    categories: {
      name: "Направления",
      validation: { required: true },
      dataType: "array",
      of: {
        dataType: "string",
      },
    },
    tags: {
      name: "теги",
      validation: { required: true },
      dataType: "array",
      of: {
        dataType: "string",
      },
    },
  },
});
