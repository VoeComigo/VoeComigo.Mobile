import { useEffect, useState } from "react";
import Logo from "../../../../assets/logo-white.png";
import * as S from "../../PageEventsContext.styles";

const factsArray = [
  `O comandante e o co-piloto do avião não consomem refeições iguais durante os voos. Essa medida é adotada na aviação comercial para evitar que os pilotos sofram intoxicações alimentares simultâneas.`,
  `As máscaras de oxigênio de emergência dos aviões são acionadas em casos de despressurização da cabine. O equipamento permite aos passageiros e tripulantes que respirem em altitudes elevadas por cerca de 15 a 20 minutos.`,
  `Em estradas no Brasil, um motorista de um veículo automotor só pode realizar ultrapassagens pela faixa da esquerda. Porém, ultrapassagens entre aeronaves em voo são realizadas somente pelo lado direito.`,
  `O radar de um avião comercial não é capaz de detectar outras aeronaves voando ao seu redor. O equipamento utilizado nessas aeronaves é calibrado para encontrar a presença de água pelo caminho da aeronave. Ou melhor, o sistema mostra onde estão as posições e as intensidades de precipitações pluviométricas, que podem surgir no formato de nuvens carregadas, chuva, granizo ou neve.`,
  `Em voos de longa duração, os pilotos e comissários de bordo trabalham em regime de revezamento. Enquanto uma parte desses profissionais cumpre suas tarefas, outros esperam por seus horários de trabalho em quartos com camas escondidos dos passageiros até o momento da troca de tripulantes.`,
  `Um avião com cabine pressurizada em hipótese alguma pode ter janelas quadradas. Essa lição foi aprendida pelos engenheiros aeronáuticos da pior forma, depois de cinco desastres aéreos no início da década de 1950 com o De Havilland Comet, o primeiro avião comercial com motores a jato.`,
  `Enquanto um jogo de pneus de automóvel pode durar anos, o conjunto usado num avião comercial é trocado de mês em mês ou até menos tempo.`,
  `A exemplo dos carros, aviões comerciais também têm buzinas. Na aviação, o equipamento é um meio de comunicação entre os pilotos na cabine de comando e as equipes de manutenção em solo.`,
  `São raras as aeronaves comerciais que voam com os tanques na capacidade máxima. A quantidade de combustível que o avião carrega deve ser o suficiente para ele executar todo o trecho programado, que pode ser uma viagem com distância inferior ao alcance máximo do aparelho. Também é incluída uma reserva de 10% em relação ao conteúdo nos tanques, uma quantia extra para a aeronave voar até um aeroporto alternativo e outra porção para mais 30 minutos de voo.`,
  `Manter a ordem na cabine de passageiros do avião é essencial para a segurança e o conforto do voo. Se algum ocupante cometer uma indisciplina, como agressões físicas e verbais, ele pode ser obrigado a terminar a viagem amarrado no assento e algemado, após ser contido pelos comissários.`,
];

export const LoadingContainer = () => {
  function getRandomFact() {
    return Math.floor(Math.random() * (factsArray.length - 1 + 1));
  }
  const [factIndex, setFactIndex] = useState<number>(getRandomFact());
  const [isVisible, setIsVisible] = useState<boolean>(true);

  // Aircraft curiosities phrases generation:
  useEffect(() => {
    let timeout: NodeJS.Timeout;
    setInterval(() => {
      setIsVisible(false);
      // DEBUG:
      //console.log("Inicial: ", new Date(Date.now()));
      timeout = setTimeout(() => {
        // DEBUG:
        //console.log("Timeout call: ", new Date(Date.now()));
        setFactIndex(getRandomFact());
        setIsVisible(true);
        clearTimeout(timeout);
      }, 2000);
    }, 12000);
  }, []);

  return (
    <S.LoaderWrapper>
      <img src={Logo} alt="" width={64} height={64} />
      <div className="spinner-text">
        <S.Spinner />
        <span>
          <p className="fs18 bold white elevate">AGUARDE,</p>
          <p className="fs22 bold white elevate">ESTAMOS LEVANTANDO VOO</p>
        </span>
      </div>
      <S.CuriosityArea className={`${isVisible ? "show" : "hide"}`}>
        <p className="fs18 bold white elevate centered">Você sabia que:</p>
        <p className="fs16 white elevate centered">{factsArray[factIndex]}</p>
      </S.CuriosityArea>
    </S.LoaderWrapper>
  );
};
