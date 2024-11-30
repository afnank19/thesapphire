import { Link } from 'react-router-dom';

const TempStarter = () => {
  return (
    <>
      <div className="container mx-auto gap-1 flex flex-col">
        <p className="text-left">
          This is a starter page for The Sapphire to avoid confusion during Git
          use<br></br>Initially, we'll be building the frontend(UI only) so we
          will have buttons for each dev
          <br />
          Each Link should only be modified by its respective dev.
          <br />
          This page assumes you have knowledge of recommended routing procedure.{' '}
        </p>
        <Link to={'/H-dev-env'} className="text-lime-800 mt-12">
          Sir Husnain
        </Link>
        <Link to={'/test'} className="text-purple-800">
          Moeez
        </Link>
        <Link to={'/home/A-dev-env'}>Afnan</Link>{' '}
      </div>
    </>
  );
};

export default TempStarter;
