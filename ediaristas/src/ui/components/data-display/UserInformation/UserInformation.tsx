import React from "react";
import { UserInformationContainer, UserName, UserDescription, AvatarStyled, RatingStyled} from "./UserInformation.style";


interface UserInformatonProps {
    picture: string;
    name: string;
    rating: number;
    description?: string | JSX.Element;
}

const UserInformaton: React.FC<UserInformatonProps> = ({picture, name, rating, description}) => {
    return (
      <UserInformationContainer>
        <AvatarStyled src={picture}>{name[0]}</AvatarStyled>
        <UserName>{name}</UserName>
        <RatingStyled readOnly value={rating} />
        <UserDescription>{description}</UserDescription>
      </UserInformationContainer>
    );
};

export default UserInformaton; 