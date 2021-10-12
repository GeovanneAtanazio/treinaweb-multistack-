import type { NextPage } from 'next';
import SafeEnvironment from 'ui/components/feedback/SafeEnvironment/SafeEnvironment';
import PageTitle from 'ui/components/data-display/PageTitle/PageTitle';
import UserInformaton from 'ui/components/data-display/UserInformation/UserInformation';



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
      <UserInformaton 
        name={'Geovanne'} 
        picture={'https://github.com/GeovanneAtanazio.png'}
        rating={3}
        description={'Sergipe'}
      />
    </div>
  );
}

export default Home
