import styles from "../components/BotaoPesquisar.module.css";
import searchIcon from "../assets/searchIcon.svg";

export function Pesquisar() {
  return (
    <section className="w-full flex justify-center">
      <div className="flex-col px-7 my-1 border-y bg-white font-quicksand font-semibold w-[23rem] sm:w-[50rem]">
        <div className="flex pt-3">
          <h3 className="text-lg pr-2">Pesquisar</h3>
          <p>"INSERIR VARIAVEL"</p>
        </div>
        <article className="flex-row text-sm text-purple-medium items-center">
          <form action="">
            <label htmlFor="">PESQUISAR POR:</label>
            <select
              className="border rounded w-44 h-8 border-purple-light font-nunito ml-7 my-1.5"
              name=""
              id=""
            >
              <option className=" text-purple-light text-xs" value="valor0">
                Selecione o filtro
              </option>
              <option value="valor1">Valor 1</option>
              <option value="valor2">Valor 2</option>
              <option value="valor3">Valor 3</option>
            </select>
          </form>
          <form action="">
            <label htmlFor="">PALAVRA-CHAVE:</label>
            <input
              className="border rounded w-44 h-8 border-purple-light ml-7 my-1.5"
              type="text"
            />
          </form>
        </article>
        <div className="flex justify-end ">
          <button
            className="flex items-center justify-center w-full h-10 mt-2 mb-4 border-2 rounded  bg-purple-medium border-purple-dark shadow-md shadow-purple-shadow text-white"
            type="submit"
          >
            PESQUISAR
            <img
              className="w-5 h-5 mx-1 bg-purple-medium"
              src={searchIcon}
              alt="lupa_de_pesquisa"
            />
          </button>
        </div>
      </div>
    </section>
  );
}
