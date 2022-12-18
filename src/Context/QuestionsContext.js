import { createContext } from "react";

const QuestionsContext = createContext({});
export const QuestionsProvider = QuestionsContext.Provider;

export default QuestionsContext;
