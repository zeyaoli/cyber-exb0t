let state = {
  bot: {
    name: "cyber$exb0t",
    response: {
      init:
        "hello human. welcome to our sexy internet space. to start, choose a voice to get down with. Test out the voice options on the left, and press the mic icon to verbally tell me your selection.",
    },
  },
  me: {
    name: "",
    input: "",
  },
  prompt: {},
};

function getState() {
  return state;
}

export { getState };
