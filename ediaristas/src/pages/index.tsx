import type { NextPage } from "next";
import SafeEnvironment from "ui/components/feedback/SafeEnvironment/SafeEnvironment";
import PageTitle from "ui/components/data-display/PageTitle/PageTitle";
import UserInformaton from "ui/components/data-display/UserInformation/UserInformation";
import TextFieldMask from "ui/components/inputs/TextFieldMask/TextFieldMask";
import { Button, Typography, Container } from "@mui/material";
import {
  FormElementsContainer,
  ProfissionaisPaper,
  ProfissionaisContainer
} from "@styles/pages/index.style";

const Home: NextPage = () => {
  return (
    <div>
      <SafeEnvironment />
      <PageTitle
        title={"Conheça os profissionais"}
        subtitle={
          "Preencha seu endereço e veja todos os profissionais da sua localidade"
        }
      />
      <Container>
        <FormElementsContainer>
          <TextFieldMask
            mask={"99.999-999"}
            label={"Digite seu CEP"}
            variant={"outlined"}
            fullWidth
          />
          <Typography color={"error"}>CEP inválido</Typography>
          <Button
            variant={"contained"}
            color={"secondary"}
            sx={{ width: "220px" }}
          >
            Buscar
          </Button>
        </FormElementsContainer>
        <ProfissionaisPaper>
          <ProfissionaisContainer>
            <UserInformaton
              name={"Geovanne"}
              picture={"https://github.com/GeovanneAtanazio.png"}
              rating={3}
              description={"Sergipe"}
            />
            <UserInformaton
              name={"Geovanne"}
              picture={"https://github.com/GeovanneAtanazio.png"}
              rating={3}
              description={"Sergipe"}
            />
            <UserInformaton
              name={"Geovanne"}
              picture={"https://github.com/GeovanneAtanazio.png"}
              rating={3}
              description={"Sergipe"}
            />
            <UserInformaton
              name={"Geovanne"}
              picture={"https://github.com/GeovanneAtanazio.png"}
              rating={3}
              description={"Sergipe"}
            />
            <UserInformaton
              name={"Geovanne"}
              picture={"https://github.com/GeovanneAtanazio.png"}
              rating={3}
              description={"Sergipe"}
            />
            <UserInformaton
              name={"Geovanne"}
              picture={"https://github.com/GeovanneAtanazio.png"}
              rating={3}
              description={"Sergipe"}
            />
          </ProfissionaisContainer>
        </ProfissionaisPaper>
      </Container>
    </div>
  );
};

export default Home;
