import { buildCollection } from "firecms";

type Question = {
  questionImage?: string;
  mediaUrl?: string;
  questionText: string;
  rightAnswer: string;
  wrongAnswers: string[];
  rightAnswerHelp: string;
};

type Test = {
  image: string;
  questions: Question[];
  shortDescription: string;
  longDescription: string;
  themeDescription: string;
  testsTheme: string;
  testLevel: string;
};

export const testsCollection = buildCollection<Test>({
  name: "Задания",
  singularName: "Задание",
  path: "tests",
  icon: "TaskAlt",
  permissions: () => ({
    read: true,
    edit: true,
    create: true,
    delete: true,
  }),
  properties: {
    image: {
      name: "изображение",
      validation: { required: true },
      dataType: "string",
    },
    shortDescription: {
      name: "Короткое описание",
      validation: { required: true },
      dataType: "string",
    },
    longDescription: {
      name: "Описание",
      validation: { required: true },
      dataType: "string",
    },
    themeDescription: {
      name: "Описание темы",
      validation: { required: true },
      dataType: "string",
    },
    testsTheme: {
      name: "Тема теста",
      validation: { required: true, uniqueInArray: true },
      dataType: "string",
      enumValues: {
        music: "music",
        literature: "literature",
        art: "art",
      },
    },
    testLevel: {
      name: "Сложность",
      validation: { required: true, uniqueInArray: true },
      dataType: "string",
      enumValues: {
        lite: "lite",
        intermediate: "intermediate",
        hard: "hard",
      },
    },
    questions: {
      name: "Вопросы",
      dataType: "array",
      of: {
        dataType: "map",
        properties: {
          questionImage: {
            name: "Изображение",
            dataType: "string",
          },
          mediaUrl: {
            name: "Видео",
            dataType: "string",
          },
          questionText: {
            name: "Текст вопроса",
            validation: { required: true },
            dataType: "string",
          },
          rightAnswer: {
            name: "правильный ответ",
            validation: { required: true },
            dataType: "string",
          },
          wrongAnswers: {
            dataType: "array",
            name: "Не правильные ответы",
            validation: { required: true },
            of: {
              dataType: "string",
            },
          },
          rightAnswerHelp: {
            name: "Подсказка",
            dataType: "string",
            validation: { required: true },
          },
        },
      },
    },
  },
});
