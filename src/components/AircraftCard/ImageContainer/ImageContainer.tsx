import * as S from "./ImageContainer.styles";
import noPhoto from "../../../assets/no-photo.png";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import { useState } from "react";
import { useDoubleTap } from "../../../hooks";
import { IAircraftModel } from "../types";
import { mask } from "../../../utils/mask";
import { useSetFavoriteAircraft } from "../../../features/aircraft/hooks/useSetFavoriteAircraft";
import { useNotificationContext } from "../../../contexts";
import { NOTIFICATION_TYPES } from "./ImageContainer.utils";
import { getRoles } from "../../../utils/parserUtils";

export const ImageContainer = ({
  id,
  registration,
  model,
  status,
  isFavorite,
  image,
  roles,
  isAircraftCard = true,
  refetchData,
}: Props) => {
  // Favorite state:
  const [favoritePlane, setFavoritePlane] = useState<boolean>(isFavorite);

  //  Favorite API call:
  const { setFavoriteAircraft } = useSetFavoriteAircraft();

  // Notification Context:
  const { createNotification } = useNotificationContext();

  //  Handle Favorite:
  function handleFavorite() {
    setFavoritePlane(!favoritePlane);
    setFavoriteAircraft([{ aircraftID: id }])
      .then(() => {
        createNotification(NOTIFICATION_TYPES.SUCCESS);
        return refetchData && refetchData();
      })
      .catch(() => {
        createNotification(NOTIFICATION_TYPES.ERROR);
      });
  }

  const { onTap } = useDoubleTap({
    onDoubleTap: () => handleFavorite(),
  });

  return (
    <S.Container>
      <img
        src={!!image ? image : noPhoto}
        alt={noPhoto}
        loading="lazy"
        onClick={() => (isAircraftCard ? onTap() : null)}
        //onDoubleClick={() => setFavoritePlane(!favoritePlane)}
      />
      {!isAircraftCard && (
        <S.CardArea>
          <span className="info-chip blue">{`${mask(
            "registration",
            registration
          )} | ${model.description} | ${getRoles(roles[0])}`}</span>
        </S.CardArea>
      )}
      {isAircraftCard && (
        <>
          <S.CardArea>
            <span className="info-chip blue">{`${mask(
              "registration",
              registration
            )} | ${model.description}`}</span>
            <span
              className={`info-chip ${status === "ACTIVE" ? "green" : "red"}`}
            >{`${status === "ACTIVE" ? "DOC. ATIVA" : "DOC. INATIVA"}`}</span>
          </S.CardArea>
          <S.FavoriteArea>
            <button
              className="favorite-button"
              onClick={() => handleFavorite()}
            >
              <FavoriteBorderOutlinedIcon
                className={`icon outline ${!favoritePlane ? "show" : "hide"}`}
              />
              <FavoriteOutlinedIcon
                className={`icon filled ${
                  favoritePlane ? "show-bounce" : "hide"
                }`}
              />
            </button>
          </S.FavoriteArea>
        </>
      )}
    </S.Container>
  );
};

type Props = {
  id: string;
  registration: string; // PX-0000
  model: IAircraftModel; // C175
  status: "ACTIVE" | "INACTIVE";
  isFavorite: boolean;
  image: string | null;
  isAircraftCard?: boolean;
  roles: string[];
  refetchData?: () => void;
};
