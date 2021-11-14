import create from "zustand";

const useStore = create((set) => ({
  pokemon: [],
  setPokemon: (pokemon) => set((state) => ({ ...state, pokemon })),
  // we don't need to spread the state in each set thing
  // set((state) => ({
  //   ...state,
  //   pokemon,
  // })),

  filter: "",
  setFilter: (filter) => set((state) => ({ ...state, filter })),

  selectedPokemon: null,
  setSelectedPokemon: (selectedPokemon) =>
    set((state) => ({ ...state, selectedPokemon })),
}));

fetch("/react-github-pages/pokemon.json")
  .then((resp) => resp.json())
  .then((pokemon) => {
    useStore.setState((state) => ({ ...state, pokemon }));
  });

export default useStore;
