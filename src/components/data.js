import { v4 as uuidv4 } from "uuid";

export const templateEducationEntries = [
  { title: "London City University", revealed: true, id: uuidv4() },
  { title: "Hidden University", revealed: false, id: uuidv4() },
];

export const templateExperienceEntries = [
  { title: "Umbrella Inc.", revealed: true, id: uuidv4() },
  { title: "Black Mesa Labs", revealed: true, id: uuidv4() },
];
