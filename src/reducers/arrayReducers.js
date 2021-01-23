export const arrayReducer = (state, action) => {
  const { type, id, payload, isAddToStart, isUpdatedStart } = action;

  switch (type) {
    case "ADD-ANSWER":
      const updateQuestionArray = state.map((question) => {
        if (question.id === id) {
          question.answers.push(payload);
        }
        return question;
      });
      return [...updateQuestionArray];

    case "ADD":
      if (!payload) {
        console.error("payload is required!");
        return state;
      }
      if (state?.find((item) => item.id === payload.id)) {
        console.error("Item already exists in the list!");
        return state;
      }
      if (isAddToStart) {
        return [payload, ...state];
      }
      return [...state, payload];

    case "REMOVE":
      if (id !== 0 && !id) {
        console.error("id is required!");
        return state;
      }
      return state.filter((item) => item.id !== id);

    case "EDITANS":
      const filteredState = state.map((item) => {
        let newAns = item.answers.map((answer) => {
          if (answer.id === payload.id) {
            answer.text = payload.text;
            return answer;
          } else {
            return answer;
          }
        });
        item.answers = [...newAns];
        return item;
      });

      return [...filteredState];

    case "EDIT":
      if (id !== 0 && !id) {
        console.error("id is required!");
        return state;
      }

      if (isUpdatedStart) {
        const filteredState = state.filter((item) => item.id !== id);
        return [payload, ...filteredState];
      }
      return state.map((item) => {
        if (item.id === id) {
          item.text = payload.text;
          return item;
        }
        return item;
      });

    default:
      return state;
  }
};
