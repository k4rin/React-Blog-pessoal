function DeletarPostagem() {
  return (
    <div className="container w-1/3 mx-auto">
      <h1 className="text-4xl text-center my-4">Deletar Postagem</h1>
      <p className="text-center font-semibold mb-4">
        Você tem certeza de que deseja apagar a postagem a seguir?
      </p>
      <div className="border flex flex-col rounded-2xl overflow-hidden justify-between">
        <header>
          <h2 className="py-2 px-6 text-white font-bold text-2xl bg-red-600">
            Postagem
          </h2>
        </header>
        <div className="p-4">
          <h3 className="text-xl font-bold">Título da Postagem</h3>
        </div>
        <div className="flex justify-center gap-4 p-4">
          <button
            className="text-slate-100 bg-red-400 hover:bg-red-600 px-6 py-2 rounded"
          >
            Não
          </button>
          <button
            className="w-full text-slate-100 bg-indigo-400 hover:bg-indigo-600 rounded justify-center"
          >
            Sim
          </button>
        </div>
      </div>
    </div>
  );
}

export default DeletarPostagem;
